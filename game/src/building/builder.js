// Mode construction (inspiré de Planet Zoo) : curseur libre, fantôme, snap souple, rotation, déplacement, suppression.
import * as THREE from 'three';
import { PIECES, CATEGORIES, buildPiece, TILE, WALL_H } from './pieces.js';
import { WATER_Y, WORLD } from '../world/config.js';

const GHOST_OK = new THREE.MeshBasicMaterial({ color: 0x66ff99, transparent: true, opacity: 0.5, depthWrite: false });
const GHOST_BAD = new THREE.MeshBasicMaterial({ color: 0xff5a48, transparent: true, opacity: 0.5, depthWrite: false });
const STRUCT = new Set(['floor', 'stairs', 'roof', 'wall', 'door', 'window', 'beam']);
const TILEISH = new Set(['floor', 'stairs', 'roof']);
const WALLISH = new Set(['wall', 'door', 'window']);
const TOP = { wall: WALL_H, door: WALL_H, window: WALL_H, beam: WALL_H };

const rayTmp = new THREE.Raycaster();
const v2 = new THREE.Vector2();
const norm = new THREE.Vector3();

export class Builder {
  constructor(ctx) {
    this.ctx = ctx;
    this.active = false;
    this.tool = 'select';
    this.category = 'struct';
    this.snap = true;
    this.rotStep = 0;
    this.yawFree = 0;
    this.heightOffset = 0;
    this.ghost = null; this.ghostKey = '';
    this.moving = null;
    this.hover = null;
    this.target = null;
    this.valid = false; this.reason = '';
    this.listeners = [];
    this.outline = new THREE.Box3Helper(new THREE.Box3(), 0xffe27a);
    this.outline.visible = false;
    this.outline.material.depthTest = false; this.outline.renderOrder = 20;
    ctx.scene.add(this.outline);
    this.grid = this._makeGrid();
    ctx.scene.add(this.grid);
  }

  onChange(fn) { this.listeners.push(fn); }
  _emit() { for (const f of this.listeners) f(); }

  _makeGrid() {
    const pts = [];
    for (let i = -3; i <= 4; i++) {   // lignes sur les bords de tuile (positions impaires)
      const c = i * 2 - 1;
      pts.push(-7, 0, c, 7, 0, c, c, 0, -7, c, 0, 7);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const m = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22, depthWrite: false }));
    m.visible = false; m.renderOrder = 10; m.frustumCulled = false;
    return m;
  }

  // ---------- activation ----------
  enter() {
    if (this.active) return;
    this.active = true;
    this.ctx.input.releaseLock();
    this.tool = 'select';
    this._emit();
  }
  exit() {
    if (!this.active) return;
    this._cancelMove();
    this.active = false;
    this._clearGhost();
    this.outline.visible = false; this.grid.visible = false;
    this._emit();
  }
  toggle() { this.active ? this.exit() : this.enter(); }

  selectTool(type) {
    this._cancelMove();
    this.tool = type;
    this.rotStep = 0;
    this.heightOffset = 0;
    this._emit();
  }
  setCategory(c) { this.category = c; this._emit(); }
  list() { return Object.values(PIECES).filter((d) => d.cat === this.category); }
  toggleSnap() { this.snap = !this.snap; this._emit(); this.ctx.ui.toast(this.snap ? 'Aimantation activée' : 'Placement libre', 'info'); }

  rotate(dir = 1) {
    const def = PIECES[this.tool];
    if (!def) return;
    if (this.snap) {
      if (def.kind === 'tile') this.rotStep += dir;                   // 90°
      else if (def.kind === 'wall') this.rotStep += dir;              // retourne 180° (l'aimant choisit l'arête)
      else this.yawFree += dir * Math.PI / 4;
    } else this.yawFree += dir * Math.PI / 12;
  }

  // ---------- picking ----------
  _ray() {
    const { camera, input } = this.ctx;
    const m = input.mouse;
    v2.set(m.inside ? m.nx : 0, m.inside ? m.ny : 0);
    rayTmp.setFromCamera(v2, camera);
    return rayTmp;
  }

  _pick() {
    const ray = this._ray();
    const { world, camp } = this.ctx;
    let best = null;
    const hits = ray.intersectObjects(camp.group.children, true);
    for (const h of hits) {
      const piece = camp.pieceFromObject(h.object);
      if (!piece || (this.moving && piece === this.moving)) continue;
      norm.copy(h.face ? h.face.normal : new THREE.Vector3(0, 1, 0)).transformDirection(h.object.matrixWorld);
      best = { point: h.point.clone(), normal: norm.clone(), piece, dist: h.distance, terrain: false };
      break;
    }
    // terrain
    const o = ray.ray.origin, d = ray.ray.direction;
    let t = 0.5, prevT = 0, found = false;
    const maxT = best ? best.dist : 70;
    while (t < maxT) {
      const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t;
      if (y <= world.heightAt(x, z)) { found = true; break; }
      prevT = t; t += 0.5;
    }
    if (found) {
      let a = prevT, b = t;
      for (let i = 0; i < 8; i++) {
        const m = (a + b) / 2;
        const y = o.y + d.y * m, x = o.x + d.x * m, z = o.z + d.z * m;
        if (y <= world.heightAt(x, z)) b = m; else a = m;
      }
      const x = o.x + d.x * b, z = o.z + d.z * b, y = world.heightAt(x, z);
      const dx = world.heightAt(x + 0.5, z) - world.heightAt(x - 0.5, z), dz = world.heightAt(x, z + 0.5) - world.heightAt(x, z - 0.5);
      const n = new THREE.Vector3(-dx, 1, -dz).normalize();
      best = { point: new THREE.Vector3(x, y, z), normal: n, piece: null, dist: b, terrain: true };
    }
    return best;
  }

  // ---------- calcul de la cible ----------
  _structNear(p, maxD) {
    let best = null, bd = maxD * maxD;
    for (const s of this.ctx.camp.pieces.values()) {
      if (!STRUCT.has(s.def.tag) || s === this.moving) continue;
      const dx = s.x - p.x, dz = s.z - p.z, d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = s; }
    }
    return best;
  }
  _frame(p) {
    const s = this._structNear(p, 4.2);
    if (!s) return { ax: 0, az: 0, yaw: 0 };
    const c = Math.cos(s.rot), sn = Math.sin(s.rot), t = s.def.tag;
    if (TILEISH.has(t)) return { ax: s.x, az: s.z, yaw: s.rot };
    if (WALLISH.has(t)) return { ax: s.x + sn, az: s.z + c, yaw: s.rot };
    return { ax: s.x + c + sn, az: s.z - sn + c, yaw: s.rot };     // poutre : coin
  }
  _toLocal(f, x, z) { const c = Math.cos(f.yaw), s = Math.sin(f.yaw), dx = x - f.ax, dz = z - f.az; return [dx * c - dz * s, dx * s + dz * c]; }
  _toWorld(f, lx, lz) { const c = Math.cos(f.yaw), s = Math.sin(f.yaw); return [f.ax + lx * c + lz * s, f.az - lx * s + lz * c]; }

  _levelFromHit(hit) {
    if (!hit || hit.terrain || !hit.piece) return null;
    const q = hit.piece, t = q.def.tag;
    if (TOP[t] != null) return hit.point.y > q.y + TOP[t] - 0.45 ? q.y + TOP[t] : q.y;
    if (t === 'halfwall') return q.y;
    return q.y;
  }

  _floorAdjacent(x, z, maxD) {
    let best = null, bd = maxD * maxD;
    for (const s of this.ctx.camp.pieces.values()) {
      if (s.def.surface !== 'flat' || s === this.moving) continue;
      const dx = s.x - x, dz = s.z - z, d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = s; }
    }
    return best;
  }

  _compute(def, hit) {
    const { world, camp } = this.ctx;
    const hp = hit.point;
    const level = this._levelFromHit(hit);
    const tg = { x: hp.x, y: hp.y, z: hp.z, rot: 0, data: {} };
    const wob = this.heightOffset;
    const snapYaw = this.rotStep * (def.kind === 'wall' ? Math.PI : Math.PI / 2);

    if (def.kind === 'tile' && this.snap) {
      const f = this._frame(hp);
      const [lx, lz] = this._toLocal(f, hp.x, hp.z);
      const [x, z] = this._toWorld(f, Math.round(lx / TILE) * TILE, Math.round(lz / TILE) * TILE);
      tg.x = x; tg.z = z; tg.rot = f.yaw + snapYaw; tg.frame = f;
      tg.y = this._tileY(def, x, z, level, hit);
    } else if (def.kind === 'wall' && this.snap) {
      const f = this._frame(hp);
      const [lx, lz] = this._toLocal(f, hp.x, hp.z);
      const a = Math.round(lx / TILE) * TILE, b = Math.round(lz / TILE) * TILE, dx = lx - a, dz = lz - b;
      let ex, ez, yaw;
      if (Math.abs(dx) > Math.abs(dz)) { ex = a + Math.sign(dx || 1); ez = b; yaw = f.yaw + Math.PI / 2 + (dx > 0 ? 0 : Math.PI); }
      else { ex = a; ez = b + Math.sign(dz || 1); yaw = f.yaw + (dz > 0 ? 0 : Math.PI); }
      const [x, z] = this._toWorld(f, ex, ez);
      tg.x = x; tg.z = z; tg.rot = yaw + snapYaw; tg.frame = f;
      tg.y = level != null ? level : this._wallBaseY(x, z, f, ex, ez);
    } else if (def.kind === 'beam' && this.snap) {
      const f = this._frame(hp);
      const [lx, lz] = this._toLocal(f, hp.x, hp.z);
      const a = Math.round(lx / TILE) * TILE, b = Math.round(lz / TILE) * TILE;
      const [x, z] = this._toWorld(f, a + Math.sign(lx - a || 1), b + Math.sign(lz - b || 1));
      tg.x = x; tg.z = z; tg.rot = f.yaw; tg.frame = f;
      tg.y = level != null ? level : world.heightAt(x, z);
    } else if (def.kind === 'mount') {
      const vertical = !hit.terrain && Math.abs(hit.normal.y) < 0.55;
      if (vertical) {
        tg.data.mount = 'wall';
        tg.rot = Math.atan2(hit.normal.x, hit.normal.z);
        tg.x = hp.x + hit.normal.x * 0.06; tg.z = hp.z + hit.normal.z * 0.06; tg.y = hp.y;
        if (this.snap) tg.y = Math.round(hp.y / 0.25) * 0.25;
      } else {
        tg.data.mount = 'stand';
        tg.rot = this.yawFree;
        if (this.snap) { tg.x = Math.round(hp.x / 0.5) * 0.5; tg.z = Math.round(hp.z / 0.5) * 0.5; }
        tg.y = hit.terrain ? world.heightAt(tg.x, tg.z) : hp.y;
      }
    } else {
      // pièces libres, ou pièces de structure en mode libre
      tg.rot = this.yawFree;
      if (this.snap && def.kind === 'free') { tg.x = Math.round(hp.x / 0.5) * 0.5; tg.z = Math.round(hp.z / 0.5) * 0.5; }
      tg.y = hit.terrain ? world.heightAt(tg.x, tg.z) : hp.y;
      if (def.kind === 'tile' || def.kind === 'wall' || def.kind === 'beam') {
        // placement libre : y = niveau du point visé
        if (level != null) tg.y = level; else if (def.tag === 'roof') tg.y = world.heightAt(tg.x, tg.z) + WALL_H;
        if (def.tag === 'roof' && level == null) tg.y = world.heightAt(tg.x, tg.z) + WALL_H;
      }
      if (def.flat) tg.y += 0.03;
    }
    tg.y += wob;
    return tg;
  }

  _tileY(def, x, z, level, hit) {
    const { world } = this.ctx;
    const tag = def.tag;
    if (tag === 'roof') {
      // repose sur les murs voisins si possible
      let top = -Infinity;
      for (const s of this.ctx.camp.pieces.values()) {
        if (!(WALLISH.has(s.def.tag) || s.def.tag === 'halfwall' || s.def.tag === 'beam') || s === this.moving) continue;
        const dx = s.x - x, dz = s.z - z;
        if (dx * dx + dz * dz > 1.25 * 1.25 + 0.3) continue;
        top = Math.max(top, s.y + (TOP[s.def.tag] || 1.1));
      }
      if (top > -Infinity) return top;
      if (level != null) return hit.piece && TOP[hit.piece.def.tag] != null && hit.point.y > hit.piece.y + 1 ? level : level + WALL_H;
      return world.heightAt(x, z) + WALL_H;
    }
    if (level != null) return level;
    const adj = this._floorAdjacent(x, z, 2.7);
    if (adj && Math.abs(adj.y - world.heightAt(x, z)) < 2.6) return adj.y;
    if (def.id === 'foundation') {
      let m = world.heightAt(x, z);
      for (const [ox, oz] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]]) m = Math.max(m, world.heightAt(x + ox, z + oz));
      return Math.round((m + 0.05) * 20) / 20;
    }
    return Math.round((world.heightAt(x, z) + 0.12) * 20) / 20;
  }

  _wallBaseY(x, z, f, ex, ez) {
    const { world } = this.ctx;
    // sol voisin (des deux côtés de l'arête)
    const horizontal = Math.abs(ez - Math.round(ez / 2) * 2) > 0.5; void horizontal;
    let best = null, bd = 1.3;
    for (const s of this.ctx.camp.pieces.values()) {
      if (s.def.surface !== 'flat') continue;
      const d = Math.hypot(s.x - x, s.z - z);
      if (d < bd) { bd = d; best = s; }
    }
    if (best) return best.y;
    return world.heightAt(x, z);
  }

  // ---------- validité ----------
  _validate(def, tg) {
    const { player, world, camp, inventory: inv } = this.ctx;
    if (Math.abs(tg.x) > WORLD.half - 8 || Math.abs(tg.z) > WORLD.half - 8) return 'Trop près du bord du monde';
    const dist = Math.hypot(tg.x - player.pos.x, tg.z - player.pos.z);
    if (dist > 24) return 'Trop loin du personnage';
    const th = world.heightAt(tg.x, tg.z);
    if (th < WATER_Y + 0.02 && tg.y < WATER_Y + 0.6) return 'Impossible de construire dans l\'eau';
    this.replace = null;
    const slotKind = (d) => (d.kind === 'wall' ? 'wall' : d.tag === 'floor' ? 'floor' : d.tag === 'roof' ? 'roof' : d.tag === 'stairs' ? 'stairs' : d.kind === 'beam' ? 'beam' : null);
    const mine = slotKind(def);
    for (const s of camp.pieces.values()) {
      if (s === this.moving) continue;
      const dx = s.x - tg.x, dz = s.z - tg.z, dy = s.y - tg.y;
      if (dx * dx + dz * dz > 0.09 || Math.abs(dy) > 0.15) continue;
      if (mine && slotKind(s.def) === mine) {
        // même emplacement : identique = refusé ; type différent (mur→porte, sol→fondation) = remplacement
        if (mine === 'wall') {
          const dr = Math.abs(((s.rot - tg.rot) % Math.PI + Math.PI) % Math.PI);
          if (dr > 0.1 && Math.PI - dr > 0.1) continue;      // mur perpendiculaire : simple angle, autorisé
        }
        if (s.type === def.id) return 'Déjà occupé';
        this.replace = s;
      } else if (s.type === def.id && dx * dx + dz * dz < 0.0036 && Math.abs(dy) < 0.05) return 'Déjà occupé';
    }
    if (!this.moving && !inv.has(def.cost)) return 'Ressources insuffisantes';
    return '';
  }

  // ---------- fantôme ----------
  _setGhost(type, mount) {
    const key = type + '|' + (mount || '');
    if (this.ghostKey === key && this.ghost) return;
    this._clearGhost();
    const g = buildPiece(type, { mount });
    g.traverse((o) => { if (o.isMesh) { o.material = GHOST_OK; o.castShadow = false; o.receiveShadow = false; } });
    this.ctx.scene.add(g);
    this.ghost = g; this.ghostKey = key;
  }
  _clearGhost() { if (this.ghost) { this.ctx.scene.remove(this.ghost); this.ghost = null; this.ghostKey = ''; } }

  // ---------- déplacement / suppression ----------
  grab() {
    if (!this.hover) return;
    const p = this.hover;
    this.moving = p;
    p.group.visible = false;
    this.tool = p.type;
    this.yawFree = p.rot;
    this.heightOffset = 0;
    this.ctx.ui.toast('Déplacement : clic gauche pour poser, clic droit pour annuler', 'info');
    this._emit();
  }
  _cancelMove() {
    if (this.moving) { this.moving.group.visible = true; this.moving = null; }
  }
  deleteHover() {
    const p = this.hover || (this.moving);
    if (!p) return;
    const { camp, inventory: inv, audio, ui } = this.ctx;
    if (this.moving === p) { this.moving.group.visible = true; this.moving = null; this.tool = 'select'; }
    // contenu du coffre restitué
    if (p.data && p.data.items) for (const [k, v] of Object.entries(p.data.items)) inv.items[k] = Math.min(9999, (inv.items[k] || 0) + v);
    camp.remove(p.id);
    inv.refund(p.def.cost);
    this.hover = null;
    audio.play('remove');
    ui.toast(`${p.def.name} retiré — ressources récupérées`, 'info');
    this.ctx.fx.burst(p.x, p.y + 0.5, p.z, 12, { color: 0xb8a58a, size: 0.35, life: 0.8, alpha: 0.5, grow: 2, drag: 2 }, 1.6, 0.8);
    this._emit();
  }

  place() {
    if (!this.target || !this.valid) {
      if (this.reason) { this.ctx.ui.toast(this.reason, 'warn'); this.ctx.audio.play('deny'); }
      return;
    }
    const def = PIECES[this.tool];
    const { camp, inventory: inv, audio, fx, ui } = this.ctx;
    const t = this.target;
    if (this.moving) {
      const p = this.moving;
      camp.moveTo(p, t.x, t.y, t.z, t.rot, t.data);
      p.group.visible = true;
      this.moving = null;
      this.tool = 'select';
      audio.play('place');
    } else {
      if (!inv.pay(def.cost)) return;
      if (this.replace) { camp.remove(this.replace.id); inv.refund(this.replace.def.cost); ui.toast(`${this.replace.def.name} remplacé`, 'info'); this.replace = null; }
      const data = { ...t.data };
      if (def.id === 'chest') data.items = {};
      camp.add(def.id, t.x, t.y, t.z, t.rot, data);
      audio.play('place');
      this.ctx.events.emit('placed', def);
    }
    fx.burst(t.x, t.y + 0.15, t.z, 10, { color: 0xc4b08a, size: 0.3, life: 0.7, alpha: 0.45, grow: 2.2, drag: 3 }, 1.8, 0.5);
    this._emit();
  }

  cancel() {
    if (this.moving) { this._cancelMove(); this.tool = 'select'; this._emit(); return; }
    if (this.tool !== 'select') { this.tool = 'select'; this._emit(); }
  }

  // ---------- boucle ----------
  update(dt) {
    if (!this.active) return;
    const { input, camp } = this.ctx;
    const mouse = input.mouse;
    const clicks = input.takeClicks();
    const hit = mouse.inside || input.locked ? this._pick() : null;
    this.hover = hit && hit.piece && !hit.terrain ? hit.piece : null;
    if (hit && hit.piece && hit.terrain === false) this.hover = hit.piece;
    // curseur sur un objet de terrain : pas de hover
    const def = PIECES[this.tool];
    // hover outline
    if (this.hover && (this.tool === 'select' || input.isDown('delete'))) {
      this.outline.box.setFromObject(this.hover.group);
      this.outline.visible = true;
      this.outline.material.color.setHex(0xffe27a);
    } else this.outline.visible = false;

    // touches
    if (input.pressed('rotate')) this.rotate(input.isDown('sprint') ? -1 : 1);
    if (input.pressed('grab')) this.grab();
    if (input.pressed('delete')) this.deleteHover();
    if (input.pressed('snap')) this.toggleSnap();
    if (input.pressed('raise')) this.heightOffset += 0.25;
    if (input.pressed('lower')) this.heightOffset -= 0.25;
    const cat = this.list();
    for (let i = 1; i <= 9; i++) if (input.pressed('n' + i) && cat[i - 1]) this.selectTool(cat[i - 1].id);

    if (!def || !hit) {
      if (this.ghost) this.ghost.visible = false; this.grid.visible = false; this.target = null; this.valid = false; this.reason = '';
      for (const c of clicks) if (!c.drag && c.button === 2) this.cancel();
      return;
    }
    const tg = this._compute(def, hit);
    const reason = this._validate(def, tg);
    this.target = tg; this.valid = !reason; this.reason = reason;
    this._setGhost(def.id, tg.data.mount);
    this.ghost.visible = true;
    this.ghost.position.set(tg.x, tg.y, tg.z);
    this.ghost.rotation.y = tg.rot;
    const mat = this.valid ? GHOST_OK : GHOST_BAD;
    this.ghost.traverse((o) => { if (o.isMesh && o.material !== mat) o.material = mat; });
    // grille d'aimantation
    if (this.snap && tg.frame && (def.kind === 'tile' || def.kind === 'wall' || def.kind === 'beam')) {
      const f = tg.frame;
      this.grid.visible = true;
      this.grid.position.set(f.ax, tg.y + 0.04, f.az);
      this.grid.rotation.y = f.yaw;
      // recentrer sur la tuile visée (par pas de 2)
      const [lx, lz] = this._toLocal(f, tg.x, tg.z);
      const c = Math.cos(f.yaw), s = Math.sin(f.yaw);
      const ox = Math.round(lx / 2) * 2, oz = Math.round(lz / 2) * 2;
      this.grid.position.x += ox * c + oz * s; this.grid.position.z += -ox * s + oz * c;
    } else this.grid.visible = false;

    // clics
    for (const c of clicks) {
      if (c.drag) continue;
      if (c.button === 0) {
        if (this.tool === 'select') { if (this.hover) this._openInfo(this.hover); }
        else this.place();
      } else if (c.button === 2) this.cancel();
    }
  }

  _openInfo(p) { if (p.def.tag === 'chest') this.ctx.ui.openChest(p); }

  get info() {
    const def = PIECES[this.tool];
    return { tool: this.tool, def, valid: this.valid, reason: this.reason, snap: this.snap, moving: !!this.moving, hover: this.hover };
  }
}
export { CATEGORIES };
