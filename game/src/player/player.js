// Le joueur : déplacement, saut, discrétion, survie (faim/soif/santé), lance (mêlée + lancer).
import * as THREE from 'three';
import { createCroMagnon, animateCro, playAction } from './model.js';
import { clamp, damp, dampAngle } from '../systems/noise.js';
import { CAMP, WATER_Y, WORLD } from '../world/config.js';
import { part, merge, limb, matVC } from '../systems/geo.js';

function spearMesh() {
  const g = merge([
    limb([0, 0, -0.9], [0, 0, 0.85], 0.022, 0.018, 0x6e4d30),
    part(new THREE.ConeGeometry(0.04, 0.22, 6), { pos: [0, 0, 0.98], rot: [Math.PI / 2, 0, 0], color: 0x8d8f8c, flat: true }),
    part(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 6), { pos: [0, 0, 0.82], rot: [Math.PI / 2, 0, 0], color: 0xb89a6a }),
  ]);
  const m = new THREE.Mesh(g, matVC); m.castShadow = true; return m;
}

export class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = new THREE.Vector3(CAMP.x + 3, 0, CAMP.z + 4);
    this.pos.y = ctx.world.heightAt(this.pos.x, this.pos.z);
    this.vy = 0; this.grounded = true;
    this.yaw = Math.PI; this.speed = 0;
    this.health = 100; this.food = 85; this.water = 85;
    this.crouching = false; this.sprinting = false; this.aiming = false; this.observing = false;
    this.crouchAmt = 0;
    this.noiseRadius = 6; this.visibility = 1; this.noiseBoost = 0;
    this.invuln = 0; this.knock = { x: 0, z: 0 };
    this.attackCd = 0; this.pendingHit = null;
    this.stepDist = 0; this.inWater = false; this.cover = false; this._coverT = 0;
    this.rig = createCroMagnon();
    ctx.scene.add(this.rig.root);
    this.spears = [];       // projectiles en vol
    this.pickups = [];      // lances au sol
    this.dead = false;
    this.regenBlock = 0;
    this.lastGround = 'grass';
  }

  get forward() { return { x: Math.sin(this.yaw), z: Math.cos(this.yaw) }; }
  playAction(n) { playAction(this.rig, n); }
  addNoise(v) { this.noiseBoost = Math.max(this.noiseBoost, v); }

  hurt(n, fx, fz) {
    if (this.invuln > 0 || this.dead) return;
    this.health -= n; this.invuln = 1.1;
    const d = Math.hypot(this.pos.x - fx, this.pos.z - fz) || 1;
    this.knock.x = (this.pos.x - fx) / d * 9; this.knock.z = (this.pos.z - fz) / d * 9;
    this.vy = 4; this.grounded = false;
    this.ctx.cam.shake = 0.35;
    this.ctx.ui.flashDamage();
    this.ctx.audio.play('hurt');
    if (this.health <= 0) this.die();
  }

  die() {
    this.dead = true;
    this.ctx.ui.showDeath();
    setTimeout(() => {
      this.dead = false; this.health = 60; this.food = Math.max(this.food, 40); this.water = Math.max(this.water, 40);
      this.pos.set(CAMP.x + 3, this.ctx.world.heightAt(CAMP.x + 3, CAMP.z + 4), CAMP.z + 4);
      this.vy = 0;
      this.ctx.ui.hideDeath();
    }, 2600);
  }

  eat() {
    const { inventory: inv, ui, audio } = this.ctx;
    const id = inv.best('food');
    if (!id) { ui.toast('Rien à manger — chasse ou cueille des baies', 'warn'); return; }
    const def = { meat: { food: 12, water: 0, hurt: 6 }, cooked: { food: 40, water: 0, heal: 6 }, berry: { food: 8, water: 6 } }[id];
    inv.remove(id, 1);
    this.food = clamp(this.food + def.food, 0, 100); this.water = clamp(this.water + def.water, 0, 100);
    if (def.hurt) { this.health -= def.hurt; ui.toast('Viande crue : mieux vaut la cuire au feu !', 'warn'); }
    if (def.heal) this.health = clamp(this.health + def.heal, 0, 100);
    audio.play('eat');
    ui.toast(id === 'berry' ? 'Tu manges des baies' : id === 'cooked' ? 'Tu manges de la viande cuite' : 'Tu manges de la viande crue', 'info');
  }
  drink() {
    this.water = clamp(this.water + 28, 0, 100);
    this.playAction('gather');
    this.ctx.audio.play('drink');
  }

  // ---------- armes ----------
  attack() {
    if (this.attackCd > 0 || this.dead) return;
    const inv = this.ctx.inventory;
    const w = inv.spears > 0 || true ? inv.weaponDef : null;
    this.attackCd = 0.65;
    this.playAction('thrust');
    this.pendingHit = { t: 0.16, dmg: inv.spears > 0 ? w.melee : 9, range: inv.spears > 0 ? w.range : 1.9 };
    this.addNoise(24);
    this.ctx.audio.play('swing');
  }

  throwSpear() {
    const inv = this.ctx.inventory;
    if (this.attackCd > 0 || this.dead) return;
    if (inv.spears <= 0) { this.ctx.ui.toast('Plus de lance ! Ramasse-la ou fabrique-en une (sac → fabrication)', 'warn'); return; }
    this.attackCd = 0.9;
    inv.spears -= 1; inv._emit();
    this.playAction('throw');
    const cam = this.ctx.camera;
    const dir = new THREE.Vector3(); cam.getWorldDirection(dir);
    const origin = new THREE.Vector3(this.pos.x, this.pos.y + 1.55, this.pos.z).addScaledVector(dir, 0.9);
    // vise le point situé à 40 m devant la caméra
    const aim = new THREE.Vector3().copy(cam.position).addScaledVector(dir, 40);
    const v = aim.sub(origin).normalize().multiplyScalar(34);
    v.y += 1.6;
    const mesh = spearMesh(); mesh.position.copy(origin);
    this.ctx.scene.add(mesh);
    this.spears.push({ mesh, pos: origin.clone(), vel: v, life: 4, dmg: inv.weaponDef.throw });
    this.addNoise(26);
    this.ctx.audio.play('throw');
  }

  _updateSpears(dt) {
    const { world, animals, fx, audio } = this.ctx;
    for (let i = this.spears.length - 1; i >= 0; i--) {
      const s = this.spears[i];
      s.life -= dt;
      const prev = s.pos.clone();
      s.vel.y -= 9.5 * dt;
      s.pos.addScaledVector(s.vel, dt);
      s.mesh.position.copy(s.pos);
      s.mesh.lookAt(s.pos.x + s.vel.x, s.pos.y + s.vel.y, s.pos.z + s.vel.z);
      const hit = animals.hitSegment(prev, s.pos, 0.15);
      if (hit) {
        hit.damage(s.dmg, this.pos.x, this.pos.z);
        this._dropSpear(hit.x + (Math.random() - 0.5) * 1.5, hit.z + (Math.random() - 0.5) * 1.5, s.mesh);
        this.spears.splice(i, 1);
        this.ctx.events.emit('hit-animal', hit);
        continue;
      }
      const gh = world.heightAt(s.pos.x, s.pos.z);
      if (s.pos.y <= gh + 0.05 || s.life <= 0) {
        fx.burst(s.pos.x, gh + 0.1, s.pos.z, 6, { color: 0x8b7a5a, size: 0.2, life: 0.6, gravity: 3 }, 1.2, 1.4);
        audio.play('thud');
        this._dropSpear(s.pos.x, s.pos.z, s.mesh, gh);
        this.spears.splice(i, 1);
      }
    }
    // ramassage automatique
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i];
      p.life -= dt;
      const d = Math.hypot(p.mesh.position.x - this.pos.x, p.mesh.position.z - this.pos.z);
      if (d < 1.7 && Math.abs(p.mesh.position.y - this.pos.y) < 2) {
        this.ctx.scene.remove(p.mesh); this.pickups.splice(i, 1);
        this.ctx.inventory.addSpear(1); audio.play('pickup');
        this.ctx.ui.toast('Lance récupérée', 'info');
      } else if (p.life <= 0) { this.ctx.scene.remove(p.mesh); this.pickups.splice(i, 1); }
    }
  }
  _dropSpear(x, z, mesh, gh) {
    const y = (gh != null ? gh : this.ctx.world.heightAt(x, z)) + 0.12;
    mesh.position.set(x, y, z);
    mesh.rotation.set(0.15, Math.random() * 6.28, 0);
    this.pickups.push({ mesh, life: 300 });
    mesh.userData.pickup = true;
  }

  // ---------- boucle ----------
  update(dt, cam, input, mode) {
    const { world, camp, animals, fx, audio, ui } = this.ctx;
    const en = input.enabled && !this.dead;
    const mv = en ? input.move : { x: 0, y: 0 };
    if (en && input.pressed('crouch')) this.crouching = !this.crouching;
    if (mode === 'build') { this.aiming = false; }
    else this.aiming = en && input.mouse.right && input.locked;
    this.observing = en && (input.isDown('observe') || !!this.observeHold) && mode !== 'build';
    this.sprinting = en && input.isDown('sprint') && mv.y > 0 && !this.crouching && !this.aiming && !this.observing;
    if (this.sprinting) this.crouching = false;
    this.crouchAmt = damp(this.crouchAmt, this.crouching ? 1 : 0, 8, dt);

    // eau
    const depth = world.terrain.waterDepth(this.pos.x, this.pos.z);
    this.inWater = depth > 0.12;
    let spd = this.crouching ? 2.1 : this.sprinting ? 7.0 : 4.3;
    if (this.aiming) spd *= 0.55;
    if (this.observing) spd *= 0.45;
    if (this.inWater) spd *= 0.6;
    if (this.pendingHit || (this.rig.action === 'gather')) spd *= 0.4;

    const f = cam.forward, r = cam.right;
    let dx = f.x * mv.y + r.x * mv.x, dz = f.z * mv.y + r.z * mv.x;
    const ml = Math.hypot(dx, dz);
    const moving = ml > 0.05;
    if (moving) { dx /= ml; dz /= ml; }
    const want = moving ? { x: dx * spd * Math.min(1, ml), z: dz * spd * Math.min(1, ml) } : { x: 0, z: 0 };
    this.vel = this.vel || { x: 0, z: 0 };
    const ac = this.grounded ? 14 : 3;
    this.vel.x = damp(this.vel.x, want.x, ac, dt); this.vel.z = damp(this.vel.z, want.z, ac, dt);
    this.knock.x *= Math.exp(-dt * 5); this.knock.z *= Math.exp(-dt * 5);
    let stepX = (this.vel.x + this.knock.x) * dt, stepZ = (this.vel.z + this.knock.z) * dt;

    // pente trop raide : on glisse le long
    const t = world.terrain;
    const tryMove = (sx, sz) => {
      const nx = this.pos.x + sx, nz = this.pos.z + sz;
      const dh = t.heightAt(nx, nz) - t.heightAt(this.pos.x, this.pos.z);
      const dist = Math.hypot(sx, sz);
      if (dist > 1e-5 && dh / dist > 1.35 && this.grounded && this.pos.y < t.heightAt(nx, nz) - 0.2) return false;
      if (t.waterDepth(nx, nz) > 1.18) return false;
      this.pos.x = nx; this.pos.z = nz; return true;
    };
    if (!tryMove(stepX, stepZ)) { if (!tryMove(stepX, 0)) tryMove(0, stepZ); }
    // limites du monde
    const lim = WORLD.half - 5;
    this.pos.x = clamp(this.pos.x, -lim, lim); this.pos.z = clamp(this.pos.z, -lim, lim);
    // collisions
    world.colliders.resolve(this.pos, 0.36);
    camp.collide(this.pos, 0.36, this.pos.y);
    world.colliders.resolve(this.pos, 0.36);

    // verticalité
    const gT = t.heightAt(this.pos.x, this.pos.z);
    const surf = camp.surfaceAt(this.pos.x, this.pos.z, this.pos.y + 0.62);
    const ground = Math.max(gT, surf);
    this.lastGround = surf > gT ? 'wood' : this.inWater ? 'water' : 'grass';
    if (en && input.pressed('jump') && this.grounded && !this.crouching) { this.vy = 5.4; this.grounded = false; this.addNoise(16); }
    if (this.grounded) {
      if (this.pos.y - ground > 0.35) this.grounded = false;
      else this.pos.y += (ground - this.pos.y) * Math.min(1, dt * 22);
      if (Math.abs(this.pos.y - ground) < 0.001) this.pos.y = ground;
    }
    if (!this.grounded) {
      this.vy -= 17 * dt;
      this.pos.y += this.vy * dt;
      if (this.pos.y <= ground) {
        if (this.vy < -7) { audio.play('thud'); this.addNoise(18); this.hurtFall(-this.vy); }
        this.pos.y = ground; this.vy = 0; this.grounded = true;
      }
    }

    // orientation
    const aimYaw = Math.atan2(f.x, f.z);
    if (this.aiming || this.observing) this.yaw = dampAngle(this.yaw, aimYaw, 14, dt);
    else if (moving) this.yaw = dampAngle(this.yaw, Math.atan2(dx, dz), 11, dt);
    else if (this.rig.action === 'thrust') this.yaw = dampAngle(this.yaw, aimYaw, 10, dt);

    this.speed = Math.hypot(this.vel.x, this.vel.z);
    const realSpeed = this.speed;

    // pas
    if (this.grounded && realSpeed > 0.5) {
      this.stepDist += realSpeed * dt;
      const stride = this.sprinting ? 2.3 : this.crouching ? 1.2 : 1.6;
      if (this.stepDist > stride) {
        this.stepDist = 0;
        audio.step(this.lastGround, this.crouching ? 0.35 : this.sprinting ? 1 : 0.65);
        if (this.inWater) fx.burst(this.pos.x, WATER_Y + 0.05, this.pos.z, 4, { color: 0xdfeff2, size: 0.16, life: 0.5, gravity: 5, alpha: 0.7 }, 1, 1.6);
      }
    }

    // discrétion : bruit & visibilité
    this.noiseBoost = Math.max(0, this.noiseBoost - dt * 22);
    let n = realSpeed < 0.4 ? (this.crouching ? 2.5 : 6) : this.sprinting ? 30 : this.crouching ? 6.5 : 16;
    if (this.inWater && realSpeed > 0.4) n += 6;
    if (this.lastGround === 'wood' && realSpeed > 0.4) n += 3;
    this.noiseRadius = Math.max(n, this.noiseBoost);
    this._coverT -= dt;
    if (this._coverT <= 0) {
      this._coverT = 0.3;
      this.cover = !!world.veg.nearest(this.pos.x, this.pos.z, 2.6, (nd) => nd.kind === 'tree' || nd.kind === 'bush');
    }
    let vis = 1;
    if (this.crouching) vis *= 0.5;
    if (realSpeed < 0.4) vis *= 0.7;
    if (this.cover) vis *= 0.75;
    if (this.sprinting) vis *= 1.25;
    this.visibility = vis;

    // attaque
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.invuln = Math.max(0, this.invuln - dt);
    if (this.pendingHit) {
      this.pendingHit.t -= dt;
      if (this.pendingHit.t <= 0) {
        const h = this.pendingHit; this.pendingHit = null;
        const a = animals.meleeHit(this.pos.x, this.pos.z, this.yaw, h.range);
        if (a) { a.damage(h.dmg, this.pos.x, this.pos.z); this.ctx.cam.shake = 0.12; this.ctx.events.emit('hit-animal', a); }
      }
    }
    if (en && mode !== 'build') {
      for (const c of input.takeClicks()) {
        if (c.button === 0 && input.locked) { this.aiming ? this.throwSpear() : this.attack(); }
        else if (!input.locked && !c.drag && c.button === 0) input.requestLock();
      }
    }
    this._updateSpears(dt);

    // survie
    this._survive(dt);

    // modèle
    this.rig.root.position.copy(this.pos);
    this.rig.root.rotation.y = this.yaw;
    this.rig.spearHidden = this.ctx.inventory.spears <= 0;
    animateCro(this.rig, { speed: this.speed, crouching: this.crouching, aiming: this.aiming, sprint: this.sprinting, inWater: this.inWater, grounded: this.grounded }, dt, this.ctx.time);
  }

  hurtFall(v) {
    const d = (v - 7) * 6;
    if (d > 0) { this.health -= d; this.ctx.ui.flashDamage(); if (this.health <= 0) this.die(); }
  }

  _survive(dt) {
    const { camp } = this.ctx;
    const nearHome = camp.level().level >= 2 && camp.nearFire(this.pos.x, this.pos.z, 12);
    const drain = nearHome ? 0.55 : 1;
    this.food = clamp(this.food - dt * 0.085 * drain * (this.sprinting ? 1.6 : 1), 0, 100);
    this.water = clamp(this.water - dt * 0.13 * drain * (this.sprinting ? 1.8 : 1), 0, 100);
    if (this.food <= 0 || this.water <= 0) {
      this.health -= dt * 1.2; this.regenBlock = 4;
      if (this.health <= 0 && !this.dead) this.die();
    } else {
      this.regenBlock -= dt;
      if (this.regenBlock <= 0 && this.food > 25 && this.water > 25 && this.health < 100) this.health = clamp(this.health + dt * (nearHome ? 2.4 : 0.9), 0, 100);
    }
    if (this.invuln > 0.9) this.regenBlock = 6;
    this.health = clamp(this.health, 0, 100);
  }

  serialize() { return { x: this.pos.x, y: this.pos.y, z: this.pos.z, yaw: this.yaw, health: this.health, food: this.food, water: this.water }; }
  load(d) {
    if (!d) return;
    this.pos.set(d.x, this.ctx.world.heightAt(d.x, d.z) + 0.1, d.z); this.yaw = d.yaw || 0;
    this.health = Math.max(20, d.health ?? 100); this.food = d.food ?? 80; this.water = d.water ?? 80;
    this.pos.y = Math.max(this.pos.y, d.y || 0);
  }
}
