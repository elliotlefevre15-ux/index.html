// Caméra 3ᵉ personne fluide : orbite à la souris, épaule décalée, anti-collision terrain, zoom visée/observation.
import * as THREE from 'three';
import { clamp, damp, lerp } from '../systems/noise.js';

export class CameraRig {
  constructor(camera, world) {
    this.camera = camera; this.world = world;
    this.yaw = 0.4; this.pitch = 0.32;
    this.dist = 6.4; this.buildDist = 10;
    this.fov = 62;
    this.pos = new THREE.Vector3(); this.target = new THREE.Vector3();
    this._init = false;
    this.shake = 0;
    this.sens = 0.0024;
  }

  /** dir de la vue projetée sur le plan (x,z) */
  get forward() { return { x: -Math.sin(this.yaw), z: -Math.cos(this.yaw) }; }
  get right() { return { x: Math.cos(this.yaw), z: -Math.sin(this.yaw) }; }

  update(dt, player, input, mode, look, wheel) {
    // orbite
    this.yaw -= look.x * this.sens;
    this.pitch = clamp(this.pitch + look.y * this.sens, mode === 'build' ? 0.15 : -0.32, mode === 'build' ? 1.45 : 1.15);
    if (mode === 'build') {
      this.buildDist = clamp(this.buildDist + wheel * 1.3, 4, 24);
    }
    const aiming = player.aiming, observing = player.observing;
    let wantDist = mode === 'build' ? this.buildDist : aiming ? 3.4 : observing ? 0.6 : 6.2 - (player.crouchAmt || 0) * 0.6;
    let wantFov = observing ? 26 : aiming ? 46 : mode === 'build' ? 58 : 62 + (player.sprinting ? 5 : 0);
    let shoulder = mode === 'build' ? 0 : aiming ? 0.75 : observing ? 0 : 0.5;
    let height = mode === 'build' ? 1.0 : observing ? (player.crouching ? 1.15 : 1.6) : player.crouching ? 1.15 : 1.5;
    this.fov = damp(this.fov, wantFov, 7, dt);
    this.curDist = damp(this.curDist ?? wantDist, wantDist, 8, dt);
    this.curShoulder = damp(this.curShoulder ?? shoulder, shoulder, 8, dt);
    this.curHeight = damp(this.curHeight ?? height, height, 8, dt);

    const px = player.pos.x, pz = player.pos.z, py = player.pos.y;
    const tx = px + Math.cos(this.yaw) * this.curShoulder, tz = pz - Math.sin(this.yaw) * this.curShoulder;
    const ty = py + this.curHeight;
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    // dir depuis la cible vers la caméra
    const dx = Math.sin(this.yaw) * cp, dy = sp, dz = Math.cos(this.yaw) * cp;
    // anti-collision : on raccourcit la perche tant que la caméra est sous le terrain
    let d = this.curDist;
    for (let i = 0; i < 12; i++) {
      const x = tx + dx * d, z = tz + dz * d, y = ty + dy * d;
      const gh = this.world.heightAt(x, z);
      if (y > gh + 0.35 && !(this.world.colliders.hits(x, z, 0.4) && y < gh + 3.2) && !(this.camp && this.camp.hitsPoint(x, y, z))) break;
      d *= 0.88;
    }
    const wx = tx + dx * d, wy = Math.max(ty + dy * d, this.world.heightAt(tx + dx * d, tz + dz * d) + 0.35), wz = tz + dz * d;
    if (!this._init) { this.pos.set(wx, wy, wz); this.target.set(tx, ty, tz); this._init = true; }
    const k = 1 - Math.exp(-dt * 18);
    this.pos.x = lerp(this.pos.x, wx, k); this.pos.y = lerp(this.pos.y, wy, k); this.pos.z = lerp(this.pos.z, wz, k);
    this.target.x = lerp(this.target.x, tx, k); this.target.y = lerp(this.target.y, ty, k); this.target.z = lerp(this.target.z, tz, k);
    this.camera.position.copy(this.pos);
    if (this.shake > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake; this.camera.position.y += (Math.random() - 0.5) * this.shake;
      this.shake *= Math.exp(-dt * 9);
    }
    this.camera.lookAt(this.target);
    player.rig.root.visible = this.curDist > 1.8;
    if (Math.abs(this.camera.fov - this.fov) > 0.05) { this.camera.fov = this.fov; this.camera.updateProjectionMatrix(); }
  }
}
