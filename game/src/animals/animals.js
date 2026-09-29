// Gestionnaire des animaux : troupeau de bisons, cerf géant (rare), bouquetins ; carcasses, butin, traces.
import * as THREE from 'three';
import { Animal, DEFS } from './animal.js';
import { Tracks } from './tracks.js';
import { BISON_MEADOW, DEER_ZONES, DEER_TRAIL_START, IBEX_ZONES, WATER_Y } from '../world/config.js';

const rnd = (a, b) => a + Math.random() * (b - a);

class Herd {
  constructor(ctx) { this.members = []; this.leader = null; this.bull = null; this.ctx = ctx; }
  add(a) { a.herd = this; this.members.push(a); if (!this.leader) this.leader = a; }
  pickLeader() {
    const alive = this.members.filter((m) => !m.dead);
    this.leader = alive[0] || null;
    this.bull = alive.length ? alive.reduce((a, b) => (a.scale > b.scale ? a : b)) : null;
  }
  alarm(src, byHit = false) {
    const p = this.ctx.player.pos;
    for (const m of this.members) {
      if (m.dead || m.state === 'flee' || m.state === 'charge') continue;
      if (m === src && byHit) continue;
      m.awareness = 1.2;
      m.startFlee(p.x, p.z, m.def.panic * (0.9 + Math.random() * 0.3));
      m.fleeAngle = Math.atan2(src.x - p.x, src.z - p.z) + (Math.random() - 0.5) * 0.7;
    }
  }
}

const LOOT = {
  bison: () => ({ meat: 6 + Math.floor(Math.random() * 3), hide: 3, bone: 2, ...(Math.random() < 0.3 ? { trophy_bison: 1 } : {}) }),
  deer: () => ({ meat: 5, hide: 2, bone: 3, trophy_deer: 1 }),
  ibex: () => ({ meat: 3, hide: 1, bone: 1, ...(Math.random() < 0.3 ? { trophy_ibex: 1 } : {}) }),
};

export class Animals {
  constructor(ctx) {
    this.ctx = ctx;
    ctx.tracks = this.tracks = new Tracks(ctx.scene, ctx.world);
    this.all = [];
    this.herds = [];
    this.carcasses = [];
    this.respawns = [];
    this.spawnBison();
    this.spawnDeer(0, true);
    this.spawnIbex();
    ctx.events.on('kill', (a) => this._onKill(a));
  }

  get deer() { return this.all.find((a) => a.kind === 'deer' && !a.dead) || null; }

  _reg(a) { this.all.push(a); return a; }

  spawnBison() {
    const herd = new Herd(this.ctx);
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = new Animal('bison', BISON_MEADOW.x + rnd(-7, 7), BISON_MEADOW.z + rnd(-7, 7), this.ctx);
      a.home = { x: BISON_MEADOW.x, z: BISON_MEADOW.z, r: BISON_MEADOW.r * 0.7 };
      herd.add(a); this._reg(a);
      if (i === 0) a.rig.root.scale.multiplyScalar(1.12), a.scale *= 1.12;
    }
    herd.pickLeader();
    this.herds.push(herd);
  }

  spawnDeer(zoneIdx = 0, withTrail = false) {
    const z = DEER_ZONES[zoneIdx];
    const d = new Animal('deer', z.x + rnd(-2, 2), z.z + rnd(-2, 2), this.ctx);
    d.home = z; d.zoneIdx = zoneIdx;
    d.state = 'rest'; d.stateT = 0; d.restUntil = rnd(60, 130);
    d._makeBed();
    this._reg(d);
    if (withTrail) this._layTrail(DEER_TRAIL_START, z);
    return d;
  }

  _layTrail(a, b) {
    const dx = b.x - a.x, dz = b.z - a.z, L = Math.hypot(dx, dz);
    const px = -dz / L, pz = dx / L;
    const bend = 12;
    let last = null, foot = 1, step = 0;
    const N = Math.floor(L * 1.25 / 1.3);
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const off = Math.sin(t * Math.PI) * bend + Math.sin(t * 17) * 0.8;
      const x = a.x + dx * t + px * off, zz = a.z + dz * t + pz * off;
      if (this.ctx.world.terrain.heightAt(x, zz) < WATER_Y + 0.2) continue;
      if (last) {
        const yaw = Math.atan2(x - last.x, zz - last.z);
        foot *= -1;
        const sx = x + Math.cos(yaw) * 0.14 * foot, sz = zz - Math.sin(yaw) * 0.14 * foot;
        this.tracks.add('print', sx, sz, yaw, { sp: 'deer', life: 3000, mirror: foot });
        if (++step % 9 === 0) this.tracks.add('branch', x + Math.cos(yaw) * 0.8, zz - Math.sin(yaw) * 0.8, Math.random() * 6.28, { sp: 'deer', life: 3000 });
      }
      last = { x, z: zz };
    }
    this.tracks.add('bed', a.x + 1.5, a.z - 1, 0.7, { sp: 'deer', life: 3000 });
  }

  spawnIbex() {
    const counts = [2, 2, 1];
    IBEX_ZONES.forEach((zone, zi) => {
      for (let i = 0; i < counts[zi]; i++) this._spawnIbexAt(zone);
    });
  }
  _spawnIbexAt(zone) {
    const t = this.ctx.world.terrain;
    let x = zone.x, z = zone.z;
    for (let k = 0; k < 60; k++) {
      const a = rnd(0, 6.28), r = Math.sqrt(Math.random()) * zone.r;
      const cx = zone.x + Math.cos(a) * r, cz = zone.z + Math.sin(a) * r;
      if (t.heightAt(cx, cz) > 2 && t.slopeAt(cx, cz) > 0.3) { x = cx; z = cz; break; }
    }
    const a = new Animal('ibex', x, z, this.ctx);
    a.home = zone;
    this._reg(a);
    return a;
  }

  // ---------- boucle ----------
  update(dt, t) {
    this.ctx.time = t;
    for (const a of this.all) a.update(dt);
    for (const h of this.herds) if (h.leader && h.leader.dead) h.pickLeader();
    // carcasses : lentement enlevées
    for (let i = this.carcasses.length - 1; i >= 0; i--) {
      const c = this.carcasses[i];
      c.age += dt;
      if (c.age > 420 || c.looted) { this.ctx.scene.remove(c.animal.rig.root); this.carcasses.splice(i, 1); }
    }
    // réapparitions
    for (let i = this.respawns.length - 1; i >= 0; i--) {
      const r = this.respawns[i];
      r.t -= dt;
      if (r.t <= 0) { r.fn(); this.respawns.splice(i, 1); }
    }
    this.tracks.update(dt, this.ctx.player.pos, this.ctx.player.observing, t);
  }

  _onKill(a) {
    const idx = this.all.indexOf(a);
    if (idx >= 0) this.all.splice(idx, 1);
    this.carcasses.push({ animal: a, x: a.x, z: a.z, kind: a.kind, age: 0, looted: false });
    this.ctx.inventory.stats.killed[a.kind] = (this.ctx.inventory.stats.killed[a.kind] || 0) + 1;
    const herd = a.herd;
    if (a.kind === 'deer') this.respawns.push({ t: 360, fn: () => this.spawnDeer(Math.floor(Math.random() * DEER_ZONES.length)) });
    else if (a.kind === 'ibex') this.respawns.push({ t: 420, fn: () => this._spawnIbexAt(a.home) });
    else if (herd && herd.members.every((m) => m.dead)) {
      this.herds.splice(this.herds.indexOf(herd), 1);
      this.respawns.push({ t: 480, fn: () => this.spawnBison() });
    }
    this.ctx.ui.toast(`${DEFS[a.kind].name} abattu — approche-toi pour le dépecer`, 'good');
  }

  nearestCarcass(x, z, maxD) {
    let best = null, bd = maxD * maxD;
    for (const c of this.carcasses) {
      if (c.looted) continue;
      const d = (c.x - x) ** 2 + (c.z - z) ** 2;
      if (d < bd) { bd = d; best = c; }
    }
    return best;
  }

  lootCarcass(c) {
    c.looted = true;
    return LOOT[c.kind]();
  }

  // ---------- armes ----------
  /** segment [a→b] contre les sphères des animaux ; retourne le premier touché */
  hitSegment(a, b, extra = 0.2) {
    let best = null, bt = 2;
    const ab = new THREE.Vector3().subVectors(b, a);
    const len2 = ab.lengthSq();
    for (const an of this.all) {
      if (an.dead) continue;
      const c = new THREE.Vector3(an.x, an.y + an.rig.hitY * an.scale, an.z);
      const t = Math.max(0, Math.min(1, new THREE.Vector3().subVectors(c, a).dot(ab) / (len2 || 1)));
      const p = new THREE.Vector3().copy(a).addScaledVector(ab, t);
      const r = an.def.hitR * an.scale + extra;
      if (p.distanceTo(c) < r && t < bt) { bt = t; best = an; }
    }
    return best;
  }

  meleeHit(px, pz, yaw, range, arc = 0.55) {
    let best = null, bd = 1e9;
    for (const an of this.all) {
      if (an.dead) continue;
      const dx = an.x - px, dz = an.z - pz, d = Math.hypot(dx, dz) - an.def.hitR * an.scale * 0.6;
      if (d > range) continue;
      const dot = (Math.sin(yaw) * dx + Math.cos(yaw) * dz) / (Math.hypot(dx, dz) || 1);
      if (dot < arc) continue;
      if (d < bd) { bd = d; best = an; }
    }
    return best;
  }
}
