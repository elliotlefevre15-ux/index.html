// Le camp du joueur : l'ensemble des pièces posées. Persistant (sauvegarde), avec collisions, surfaces praticables et lumières.
import * as THREE from 'three';
import { PIECES, buildPiece, animatePiece, WALL_H } from './pieces.js';

export const CAMP_LEVELS = [
  { name: 'Terrain vierge', hint: 'Pose un sol et deux murs pour un abri rudimentaire.' },
  { name: 'Abri rudimentaire', hint: 'Ferme 4 murs, ajoute un toit et une porte.' },
  { name: 'Cabane en bois', hint: 'Agrandis : 4 sols, 10 murs, 4 toits et un feu.' },
  { name: 'Grande cabane', hint: 'Équipe : feu, lit, coffre, établi et table.' },
  { name: 'Camp organisé', hint: 'Expose un trophée, décore, ajoute une fenêtre : 45 pièces.' },
  { name: 'Base avancée', hint: 'Ton camp est complet. Construis encore !' },
];

export class Camp {
  constructor(scene, world) {
    this.scene = scene; this.world = world;
    this.group = new THREE.Group(); scene.add(this.group);
    this.pieces = new Map();
    this.nextId = 1;
    this.changed = false;
    this.listeners = [];
    this.emitters = [];
    this.lights = [];
    for (let i = 0; i < 4; i++) {
      const l = new THREE.PointLight(0xff8a3c, 0, 14, 2);
      l.castShadow = false; scene.add(l); this.lights.push(l);
    }
    this._lightT = 0;
  }
  onChange(fn) { this.listeners.push(fn); }
  _emit() { this.changed = true; this._counts = null; this._collect(); for (const f of this.listeners) f(); }

  add(type, x, y, z, rot = 0, data = {}, id = null) {
    const def = PIECES[type];
    if (!def) return null;
    const group = buildPiece(type, { mount: data.mount });
    group.position.set(x, y, z); group.rotation.y = rot;
    const p = { id: id || this.nextId++, type, def, x, y, z, rot, data, group, phase: Math.random() * 6.28 };
    if (id && id >= this.nextId) this.nextId = id + 1;
    group.userData.pieceId = p.id;
    this.group.add(group);
    this.pieces.set(p.id, p);
    this._computeBoxes(p);
    this._emit();
    return p;
  }
  remove(id) {
    const p = this.pieces.get(id);
    if (!p) return null;
    this.group.remove(p.group);
    this.pieces.delete(id);
    this._emit();
    return p;
  }
  moveTo(p, x, y, z, rot, data) {
    p.x = x; p.y = y; p.z = z; p.rot = rot; if (data) p.data = { ...p.data, ...data };
    p.group.position.set(x, y, z); p.group.rotation.y = rot;
    this._computeBoxes(p); this._emit();
  }
  pieceFromObject(o) {
    while (o) { if (o.userData && o.userData.pieceId) return this.pieces.get(o.userData.pieceId) || null; o = o.parent; }
    return null;
  }

  _computeBoxes(p) {
    const c = Math.cos(p.rot), s = Math.sin(p.rot);
    p.obbs = (p.def.boxes || []).map((b) => ({
      x: p.x + b.cx * c + b.cz * s, z: p.z - b.cx * s + b.cz * c, rot: p.rot, hx: b.hx, hz: b.hz, y0: p.y + b.y0, y1: p.y + b.y1,
    }));
  }
  _collect() {
    this.emitters = [];
    for (const p of this.pieces.values()) if (p.def.light) this.emitters.push(p);
    this.surfaces = [];
    this.solids = [];
    for (const p of this.pieces.values()) {
      if (p.def.surface) this.surfaces.push(p);
      if (p.obbs.length) this.solids.push(p);
    }
  }

  /** hauteur praticable la plus haute ≤ maxY en (x,z), sinon -Infinity */
  surfaceAt(x, z, maxY) {
    let best = -Infinity;
    for (const p of this.surfaces || []) {
      const dx = x - p.x, dz = z - p.z;
      if (dx * dx + dz * dz > 2.4) continue;
      const c = Math.cos(p.rot), s = Math.sin(p.rot);
      const lx = dx * c - dz * s, lz = dx * s + dz * c;
      let y;
      if (p.def.surface === 'flat') { if (Math.abs(lx) > 1.02 || Math.abs(lz) > 1.02) continue; y = p.y; }
      else { if (Math.abs(lx) > 0.95 || Math.abs(lz) > 1.02) continue; y = p.y + Math.min(WALL_H, 1.1 * (1 - lz) + 0.22); }
      if (y <= maxY && y > best) best = y;
    }
    return best;
  }

  /** repousse un cercle (x,z,r) hors des solides, en tenant compte de la hauteur des pieds */
  collide(pos, r, feetY, height = 1.7) {
    let hit = false;
    for (const p of this.solids || []) {
      const dx0 = pos.x - p.x, dz0 = pos.z - p.z;
      if (dx0 * dx0 + dz0 * dz0 > 12) continue;
      for (const b of p.obbs) {
        if (feetY + height < b.y0 + 0.05 || feetY > b.y1 - 0.28) continue;
        const c = Math.cos(b.rot), s = Math.sin(b.rot);
        const dx = pos.x - b.x, dz = pos.z - b.z;
        const lx = dx * c - dz * s, lz = dx * s + dz * c;
        const cx = Math.max(-b.hx, Math.min(b.hx, lx)), cz = Math.max(-b.hz, Math.min(b.hz, lz));
        let ex = lx - cx, ez = lz - cz;
        const d2 = ex * ex + ez * ez;
        if (d2 >= r * r) continue;
        let nx, nz;
        if (d2 > 1e-8) { const d = Math.sqrt(d2); nx = ex / d; nz = ez / d; const push = r - d; ex = nx * push; ez = nz * push; }
        else { // centre à l'intérieur : sortir par l'axe le plus court
          const px = b.hx - Math.abs(lx), pz = b.hz - Math.abs(lz);
          if (px < pz) { ex = Math.sign(lx || 1) * (px + r); ez = 0; } else { ez = Math.sign(lz || 1) * (pz + r); ex = 0; }
        }
        // retour en monde : rotation inverse
        pos.x += ex * c + ez * s; pos.z += -ex * s + ez * c;
        hit = true;
      }
    }
    return hit;
  }

  nearest(tag, x, z, maxD, y) {
    let best = null, bd = maxD * maxD;
    for (const p of this.pieces.values()) {
      if (p.def.tag !== tag) continue;
      const dx = p.x - x, dz = p.z - z, d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  counts() {
    if (this._counts) return this._counts;
    const c = { total: this.pieces.size, floor: 0, wall: 0, beam: 0, roof: 0, door: 0, window: 0, stairs: 0, fire: 0, bed: 0, chest: 0, table: 0, workbench: 0, chair: 0, trophy: 0, decor: 0 };
    for (const p of this.pieces.values()) {
      const t = p.def.tag;
      if (c[t] != null) c[t]++;
      if (t === 'door' || t === 'window') c.wall++;
    }
    this._counts = c;
    return c;
  }

  level() {
    const c = this.counts();
    let L = 0;
    if (c.floor >= 1 && c.wall >= 2) L = 1;
    if (L === 1 && c.floor >= 1 && c.wall >= 4 && c.roof >= 1 && c.door >= 1) L = 2;
    if (L === 2 && c.floor >= 4 && c.wall >= 10 && c.roof >= 4 && c.fire >= 1) L = 3;
    if (L === 3 && c.fire >= 1 && c.bed >= 1 && c.chest >= 1 && c.workbench >= 1 && c.table >= 1) L = 4;
    if (L === 4 && c.trophy >= 1 && c.decor >= 3 && c.window >= 1 && c.total >= 45) L = 5;
    return { level: L, ...CAMP_LEVELS[L], next: CAMP_LEVELS[Math.min(5, L + 1)] };
  }

  /** proche d'un feu ? (bonus de repos et de cuisine) */
  nearFire(x, z, d = 9) { return !!this.nearest('fire', x, z, d); }

  update(dt, t, focus) {
    // flammes animées uniquement à proximité
    const fx = focus.x, fz = focus.z;
    for (const p of this.emitters) {
      const dx = p.x - fx, dz = p.z - fz;
      p.group.visible = true;
      if (dx * dx + dz * dz < 2500) animatePiece(p.group, t, p.phase);
    }
    // pool de lumières
    this._lightT -= dt;
    if (this._lightT <= 0) {
      this._lightT = 0.3;
      const sorted = this.emitters.map((p) => ({ p, d: (p.x - fx) ** 2 + (p.z - fz) ** 2 })).sort((a, b) => a.d - b.d).slice(0, this.lights.length);
      this.lights.forEach((l, i) => { l._src = sorted[i] ? sorted[i].p : null; });
    }
    this.lights.forEach((l, i) => {
      const p = l._src;
      if (!p) { l.intensity = 0; return; }
      const L = p.def.light;
      l.color.setHex(L.color);
      l.position.set(p.x, p.y + L.y, p.z);
      l.distance = L.dist;
      l.intensity = L.intensity * (0.85 + 0.15 * Math.sin(t * 11 + p.phase) + 0.08 * Math.sin(t * 27 + i));
    });
  }

  serialize() {
    return [...this.pieces.values()].map((p) => ({ id: p.id, t: p.type, x: +p.x.toFixed(3), y: +p.y.toFixed(3), z: +p.z.toFixed(3), r: +p.rot.toFixed(4), d: p.data }));
  }
  load(list) {
    for (const p of [...this.pieces.values()]) { this.group.remove(p.group); }
    this.pieces.clear();
    for (const s of list || []) this.add(s.t, s.x, s.y, s.z, s.r, s.d || {}, s.id);
    this._emit();
  }
}
