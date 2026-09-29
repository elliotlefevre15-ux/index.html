// IA d'un animal : broute, repère (conscience croissante), s'alerte, fuit, charge (bison), saigne, meurt.
import { createAnimalModel, animateAnimal, poseDead } from './models.js';
import { dampAngle, angDiff, lerp } from '../systems/noise.js';
import { WATER_Y, WORLD, DEER_ZONES, IBEX_ZONES } from '../world/config.js';

export const DEFS = {
  bison: { name: 'Bison', hp: 120, walk: 1.3, run: 7.6, radius: 1.0, hitR: 1.4, sight: 27, hearMul: 0.85, slope: 0.62, panic: 5, bleed: 0.5 },
  deer:  { name: 'Cerf géant', hp: 85, walk: 2.1, run: 11.5, radius: 0.75, hitR: 1.15, sight: 38, hearMul: 1.15, slope: 0.85, panic: 6, bleed: 1.1 },
  ibex:  { name: 'Bouquetin', hp: 45, walk: 1.9, run: 9.8, radius: 0.5, hitR: 0.8, sight: 33, hearMul: 1.0, slope: 3.5, panic: 5, bleed: 0.9 },
};
const rnd = (a, b) => a + Math.random() * (b - a);

export class Animal {
  constructor(kind, x, z, ctx) {
    this.kind = kind; this.def = DEFS[kind]; this.ctx = ctx;
    this.rig = createAnimalModel(kind);
    this.scale = kind === 'bison' ? rnd(0.92, 1.1) : kind === 'deer' ? 1.0 : rnd(0.92, 1.06);
    this.rig.root.scale.setScalar(this.scale);
    ctx.scene.add(this.rig.root);
    this.x = x; this.z = z; this.y = ctx.world.heightAt(x, z);
    this.yaw = rnd(0, 6.28); this.speed = 0; this.pitch = 0;
    this.state = 'graze'; this.stateT = rnd(0, 6); this.awareness = 0; this.calmT = 0;
    this.hp = this.def.hp; this.wounded = false; this.dead = false;
    this.target = null; this.herd = null; this.home = null;
    this.lastPrint = { x, z }; this.foot = 1; this.fleeDir = 0; this.retarget = 0; this.chargeT = 0; this.hitCd = 0;
    this.hop = 0; this.zoneIdx = 0; this.restUntil = 0; this.bedMade = false; this.mode = 'graze';
    this.sync();
  }

  get pos() { return { x: this.x, z: this.z }; }
  get label() { return this.def.name; }

  // ---------- perception ----------
  _perceive(dt) {
    const { player, daynight } = this.ctx;
    const dx = player.pos.x - this.x, dz = player.pos.z - this.z;
    const d = Math.hypot(dx, dz);
    this.dPlayer = d;
    const night = daynight.nightFactor > 0.5 ? 0.65 : 1;
    const rest = this.state === 'rest' ? 0.6 : 1;
    const hearR = player.noiseRadius * this.def.hearMul * rest * (this.kind === 'deer' && this.state !== 'rest' ? 1 : 1);
    const sightR = this.def.sight * player.visibility * rest * night;
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    const dot = d > 0.01 ? (fx * dx + fz * dz) / d : 1;
    const inFov = dot > -0.35 || this.state === 'alert';
    const heard = d < hearR, seen = d < sightR && inFov;
    if (heard || seen) {
      const range = Math.max(heard ? hearR : 0, seen ? sightR : 0);
      const close = 1 - d / Math.max(range, 1);
      this.awareness = Math.min(1.4, this.awareness + dt * (0.12 + close * close * 2.6));
      this.calmT = 0;
    } else {
      this.calmT += dt;
      this.awareness = Math.max(0, this.awareness - dt * 0.28);
    }
    return d;
  }

  // ---------- déplacement ----------
  _blocked(x, z) {
    const { world } = this.ctx;
    if (Math.abs(x) > WORLD.half - 6 || Math.abs(z) > WORLD.half - 6) return true;
    const t = world.terrain;
    if (t.heightAt(x, z) < WATER_Y + 0.12) return true;
    if (this.def.slope < 3 && t.slopeAt(x, z) > this.def.slope) return true;
    if (this.home && this.kind === 'ibex') {
      if (Math.hypot(x - this.home.x, z - this.home.z) > this.home.r * 1.8 && z > -34) return true;
    }
    return false;
  }

  _move(tx, tz, speed, dt, turn = 5) {
    const want = Math.atan2(tx - this.x, tz - this.z);
    this.yaw = dampAngle(this.yaw, want, turn, dt);
    const step = Math.max(speed * dt, 0.001);
    let moved = false;
    for (const off of [0, 0.5, -0.5, 1.0, -1.0, 1.7, -1.7]) {
      const h = this.yaw + off * (this.fleeDir || 1);
      const look = Math.max(1.2, speed * 0.25) + this.def.radius;
      if (this._blocked(this.x + Math.sin(h) * look, this.z + Math.cos(h) * look)) continue;
      const nx = this.x + Math.sin(h) * step, nz = this.z + Math.cos(h) * step;
      const p = { x: nx, z: nz };
      this.ctx.world.colliders.resolve(p, this.def.radius * 0.75);
      this.x = p.x; this.z = p.z;
      if (off !== 0) this.yaw = dampAngle(this.yaw, h, 4, dt);
      moved = true;
      break;
    }
    if (!moved && this.state === 'flee') { this.fleeAngle = (this.fleeAngle ?? this.yaw) + (Math.random() < 0.5 ? 1 : -1) * 1.3; this.retarget = 0; }
    this.speed = lerp(this.speed, moved ? speed : 0, 1 - Math.exp(-dt * 6));
    // traces au sol
    const dx = this.x - this.lastPrint.x, dz = this.z - this.lastPrint.z;
    const gap = this.kind === 'bison' ? 1.5 : this.kind === 'deer' ? 1.3 : 0.8;
    if (dx * dx + dz * dz > gap * gap && this.ctx.tracks && this.speed > 0.4) this._leaveTrack(dx, dz);
  }

  _leaveTrack(dx, dz) {
    const tr = this.ctx.tracks;
    const yaw = Math.atan2(dx, dz);
    this.foot *= -1;
    const side = 0.14 * this.foot;
    const px = this.x + Math.cos(yaw) * side, pz = this.z - Math.sin(yaw) * side;
    if (this.wounded && this.hp < this.def.hp * 0.9) tr.add('blood', px, pz, yaw, { sp: this.kind, life: 420, mirror: this.foot });
    if (this.kind === 'deer' || this.kind === 'bison' || Math.random() < 0.5) tr.add('print', px, pz, yaw, { sp: this.kind, life: this.kind === 'deer' ? 780 : 240, mirror: this.foot });
    if (this.kind === 'deer' && Math.random() < 0.08) tr.add('branch', this.x + Math.cos(yaw) * 0.7, this.z - Math.sin(yaw) * 0.7, Math.random() * 6.28, { sp: 'deer', life: 700 });
    this.lastPrint = { x: this.x, z: this.z };
  }

  // ---------- états ----------
  _setState(s) { this.state = s; this.stateT = 0; }

  startFlee(fromX, fromZ, time = null) {
    if (this.dead) return;
    const away = Math.atan2(this.x - fromX, this.z - fromZ);
    this.fleeAngle = away + rnd(-0.5, 0.5);
    this.fleeDir = Math.random() < 0.5 ? 1 : -1;
    this.panic = time || this.def.panic * rnd(0.85, 1.2);
    this._setState('flee');
    this.awareness = 1.4;
    if (this.kind === 'bison') this.ctx.audio.at('grunt', this.x, this.z);
    if (this.kind === 'deer') this.ctx.audio.at('bark', this.x, this.z);
  }

  _fleeTarget(px, pz) {
    if (this.kind === 'ibex') {
      // vers la zone rocheuse la plus haute et la plus éloignée
      let best = null, bs = -1e9;
      for (const z of IBEX_ZONES) {
        const s = Math.hypot(z.x - px, z.z - pz) - Math.hypot(z.x - this.x, z.z - this.z) * 0.4;
        if (s > bs) { bs = s; best = z; }
      }
      const a = Math.random() * 6.28, r = Math.random() * best.r * 0.9;
      return { x: best.x + Math.cos(a) * r, z: best.z + Math.sin(a) * r };
    }
    let a = this.fleeAngle;
    // près du bord du monde : on infléchit la fuite vers le centre
    if (Math.hypot(this.x, this.z) > 72) a += angDiff(a, Math.atan2(-this.x, -this.z)) * 0.6;
    this.fleeAngle = a;
    return { x: this.x + Math.sin(a) * 26, z: this.z + Math.cos(a) * 26 };
  }

  update(dt) {
    if (this.dead) return;
    const { player } = this.ctx;
    const d = this._perceive(dt);
    this.stateT += dt;
    this.hitCd = Math.max(0, this.hitCd - dt);
    if (this.wounded) {
      this.hp -= this.def.bleed * dt;
      if (this.hp <= 0) { this.die(); return; }
    }
    const wounded = this.wounded && this.hp < this.def.hp * 0.45;
    let speed = 0, mode = 'graze', gallop = 0;
    switch (this.state) {
      case 'graze': case 'walk': case 'rest': {
        mode = this.state === 'graze' ? 'graze' : 'move';
        if (this.state === 'rest') { mode = 'graze'; this._rest(dt); speed = 0; if (this.awareness > 0.45) this._setState('alert'); break; }
        this._calmBehavior(dt);
        speed = this.state === 'walk' && this.target ? this.def.walk : 0;
        if (this.state === 'walk' && this.target) { this._move(this.target.x, this.target.z, speed, dt, 3); if (Math.hypot(this.target.x - this.x, this.target.z - this.z) < 1.2) this._arrive(); }
        if (this.awareness > 0.32) { this._setState('alert'); }
        break;
      }
      case 'alert': {
        mode = 'alert';
        const want = Math.atan2(player.pos.x - this.x, player.pos.z - this.z);
        this.yaw = dampAngle(this.yaw, want, 4, dt);
        this.speed = lerp(this.speed, 0, 1 - Math.exp(-dt * 8));
        if (this.awareness >= 1) { this.herd ? this.herd.alarm(this) : this.startFlee(player.pos.x, player.pos.z); }
        else if (this.calmT > 3.5 && this.awareness < 0.1) { this._setState('graze'); }
        if (this.kind === 'bison' && this.awareness > 0.9 && d < 7 && !wounded && Math.random() < dt * 0.4 && this.herd && this.herd.bull === this) this._charge();
        break;
      }
      case 'flee': {
        mode = 'move'; gallop = 1;
        this.retarget -= dt;
        if (this.retarget <= 0 || !this.target) { this.retarget = 0.6; this.target = this._fleeTarget(player.pos.x, player.pos.z); }
        speed = this.def.run * (wounded ? 0.65 : 1);
        this._move(this.target.x, this.target.z, speed, dt, 8);
        this.panic -= dt;
        if (this.panic <= 0 && (d > this.def.sight * 0.9 || this.panic < -8)) { this.awareness = 0.2; this.target = null; if (this.kind === 'deer') this._deerTravel(player.pos.x, player.pos.z); else { this._setState('walk'); this._pickWander(); } }
        break;
      }
      case 'charge': {
        mode = 'charge'; gallop = 1;
        this.chargeT -= dt;
        speed = this.def.run * 1.18;
        this._move(player.pos.x, player.pos.z, speed, dt, 7);
        if (d < 1.9 && this.hitCd <= 0) {
          this.hitCd = 1.6;
          player.hurt(24, this.x, this.z);
          this.chargeT = Math.min(this.chargeT, 1.2);
        }
        if (this.chargeT <= 0 || wounded) { this.startFlee(player.pos.x, player.pos.z, 6); }
        break;
      }
    }
    this.mode = mode;
    animateAnimal(this.rig, dt, this.speed, mode, this.ctx.time, gallop);
    this.sync(dt);
  }

  // ---------- comportement calme (surchargé par espèce) ----------
  _calmBehavior(dt) {
    if (this.kind === 'deer') return this._deerCalm(dt);
    if (this.state === 'graze' && this.stateT > this._grazeFor()) {
      this._pickWander(); this._setState('walk');
    } else if (this.state === 'walk' && !this.target) this._setState('graze');
    if (this.herd && this.herd.leader !== this && this.state === 'graze' && Math.hypot(this.herd.leader.x - this.x, this.herd.leader.z - this.z) > 9) { this._pickWander(); this._setState('walk'); }
  }
  _grazeFor() { return this._gf || (this._gf = rnd(6, 20)); }
  _pickWander() {
    this._gf = rnd(6, 22);
    if (this.herd && this.herd.leader !== this) {
      const l = this.herd.leader;
      const a = rnd(0, 6.28), r = rnd(2, 6);
      this.target = { x: l.x + Math.cos(a) * r, z: l.z + Math.sin(a) * r };
    } else if (this.home) {
      const a = rnd(0, 6.28), r = Math.sqrt(Math.random()) * this.home.r;
      this.target = { x: this.home.x + Math.cos(a) * r, z: this.home.z + Math.sin(a) * r };
    } else this.target = { x: this.x + rnd(-8, 8), z: this.z + rnd(-8, 8) };
    if (this._blocked(this.target.x, this.target.z)) this.target = { x: this.x + rnd(-4, 4), z: this.z + rnd(-4, 4) };
  }
  _arrive() { if (this.kind === 'deer' && this.route) return this._deerArrive(); this.target = null; this._setState('graze'); }

  // ---------- cerf ----------
  _deerCalm(dt) {
    if (this.state === 'graze') {
      if (this.stateT > this._grazeFor()) {
        if (this.route) { this.state = 'walk'; this.stateT = 0; }
        else { this._setState('rest'); this.restUntil = rnd(70, 150); this._makeBed(); }
      }
    } else if (this.state === 'walk') {
      if (!this.target) this._setState('graze');
    }
  }
  _rest(dt) {
    const { daynight } = this.ctx;
    const h = daynight.hours;
    const activeTime = (h > 4.5 && h < 9.5) || (h > 16.5 && h < 21.5);
    this.speed = lerp(this.speed, 0, 1 - Math.exp(-dt * 8));
    if (this.kind === 'deer') {
      if (this.stateT > this.restUntil && activeTime) this._deerTravel();
      // pose couchée : abaisse le corps
    } else if (this.stateT > 20) this._setState('graze');
  }
  _makeBed() {
    if (this.kind !== 'deer' || !this.ctx.tracks) return;
    this.ctx.tracks.add('bed', this.x, this.z, this.yaw, { sp: 'deer', life: 900 });
  }
  _deerTravel(avoidX, avoidZ) {
    const zones = DEER_ZONES.filter((z, i) => i !== this.zoneIdx);
    let pick;
    if (avoidX != null) pick = zones.sort((a, b) => Math.hypot(b.x - avoidX, b.z - avoidZ) - Math.hypot(a.x - avoidX, a.z - avoidZ))[0];
    else pick = zones[Math.floor(Math.random() * zones.length)];
    this.zoneIdx = DEER_ZONES.indexOf(pick);
    this.home = pick;
    this.route = true;
    this.target = { x: pick.x + rnd(-3, 3), z: pick.z + rnd(-3, 3) };
    this._setState('walk');
  }
  _deerArrive() { this.route = false; this.target = null; this._setState('graze'); }

  _charge() {
    this.chargeT = 9; this._setState('charge');
    this.ctx.audio.at('grunt', this.x, this.z);
  }

  // ---------- dégâts ----------
  damage(n, fromX, fromZ) {
    if (this.dead) return;
    // coup précis sur une proie qui ne se doutait de rien
    if (this.awareness < 0.35 && ['graze', 'walk', 'rest'].includes(this.state)) { n *= 1.6; this.ctx.ui.toast('Coup précis !', 'good'); }
    this.hp -= n;
    this.wounded = true;
    this.ctx.fx.burst(this.x, this.y + this.rig.hitY, this.z, 14, { color: 0x8a1410, size: 0.16, life: 0.7, gravity: 6, alpha: 0.9 }, 2.4, 2.2);
    this.ctx.audio.at('hit', this.x, this.z);
    if (this.hp <= 0) { this.die(); return; }
    if (this.herd) this.herd.alarm(this, true);
    if (this.kind === 'bison' && this.hp > this.def.hp * 0.5 && Math.random() < 0.85) { this._charge(); }
    else this.startFlee(fromX, fromZ, this.def.panic * 1.3);
  }
  die() {
    if (this.dead) return;
    this.dead = true; this.state = 'dead';
    poseDead(this.rig);
    this.ctx.events.emit('kill', this);
  }

  sync(dt = 0.016) {
    const t = this.ctx.world.terrain;
    this.y = t.heightAt(this.x, this.z);
    // tangage : pente le long de la direction
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    const hf = t.heightAt(this.x + fx * 0.9, this.z + fz * 0.9), hb = t.heightAt(this.x - fx * 0.9, this.z - fz * 0.9);
    const pitch = -Math.atan2(hf - hb, 1.8);
    this.pitch = lerp(this.pitch, pitch, 1 - Math.exp(-dt * 8));
    let extra = 0;
    if (this.kind === 'ibex' && this.state === 'flee') { this.hop += dt * 9; extra = Math.max(0, Math.sin(this.hop)) * 0.55; }
    const r = this.rig.root;
    const restDrop = this.state === 'rest' && this.kind === 'deer' ? 0.62 : 0;
    r.position.set(this.x, this.y + extra - restDrop, this.z);
    r.rotation.y = this.yaw; r.rotation.x = this.pitch;
    if (this.state === 'rest' && this.kind === 'deer') {
      this.rig.legs.forEach((l) => { l.pivot.rotation.x = -1.3; l.knee.rotation.x = 2.5; });
    }
  }

  dispose() { this.ctx.scene.remove(this.rig.root); }
}
