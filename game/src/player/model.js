// Cro-Magnon procédural : peau, fourrure, cuir, os, pierre. Le personnage regarde vers +Z.
import * as THREE from 'three';
import { part, merge, limb, matVC } from '../systems/geo.js';
import { clamp, lerp } from '../systems/noise.js';

const SKIN = 0xc79268, SKIN_D = 0xa87550, FUR = 0x6b4a2d, FUR_L = 0x8b6a45, HIDE = 0x8a6238, HAIR = 0x2c1e14, BONE = 0xe8dfc8, WOOD = 0x6e4d30, STONE = 0x8d8f8c;

const sphere = (r, seg = 10) => new THREE.SphereGeometry(r, seg, Math.max(6, seg - 2));
const cyl = (r0, r1, h, seg = 8) => new THREE.CylinderGeometry(r1, r0, h, seg);

function mesh(geo, cast = true) { const m = new THREE.Mesh(geo, matVC); m.castShadow = cast; m.receiveShadow = false; return m; }

export function createCroMagnon() {
  const root = new THREE.Group();
  const body = new THREE.Group(); root.add(body);       // bascule légèrement (penché, accroupi)
  const hips = new THREE.Group(); hips.position.y = 0.95; body.add(hips);

  // ---- jambes (cuisse + tibia) ----
  const mkLeg = (side) => {
    const thigh = new THREE.Group(); thigh.position.set(side * 0.12, 0, 0); hips.add(thigh);
    thigh.add(mesh(merge([
      part(cyl(0.1, 0.075, 0.46), { pos: [0, -0.23, 0], color: SKIN }),
      part(cyl(0.105, 0.085, 0.2), { pos: [0, -0.1, 0], color: FUR }),
    ])));
    const knee = new THREE.Group(); knee.position.y = -0.46; thigh.add(knee);
    knee.add(mesh(merge([
      part(cyl(0.075, 0.06, 0.44), { pos: [0, -0.22, 0], color: SKIN }),
      part(cyl(0.09, 0.075, 0.26), { pos: [0, -0.2, 0], color: HIDE }),            // jambière en peau
      part(cyl(0.095, 0.095, 0.03), { pos: [0, -0.09, 0], color: 0xb89a6a }),       // lanière
      part(sphere(0.085), { pos: [0, -0.46, 0.035], scale: [1, 0.8, 1.6], color: FUR }), // botte de fourrure
    ])));
    return { thigh, knee };
  };
  const legL = mkLeg(-1), legR = mkLeg(1);

  // ---- torse ----
  const torso = new THREE.Group(); hips.add(torso);
  torso.add(mesh(merge([
    part(cyl(0.16, 0.2, 0.32, 10), { pos: [0, 0.16, 0], color: SKIN }),                       // taille
    part(sphere(0.23), { pos: [0, 0.44, 0], scale: [1.15, 0.95, 0.72], color: SKIN }),        // poitrine
    part(sphere(0.235), { pos: [0, 0.44, 0.015], scale: [1.18, 0.7, 0.78], color: (x, y) => new THREE.Color(FUR).lerp(new THREE.Color(FUR_L), clamp((y - 0.3) * 3, 0, 1)) }), // gilet de fourrure
    part(cyl(0.2, 0.2, 0.06, 12), { pos: [0, 0.02, 0], color: 0x4a3524 }),                    // ceinture
    part(cyl(0.19, 0.2, 0.22, 10), { pos: [0, -0.05, 0], color: HIDE }),                      // pagne
    part(sphere(0.045), { pos: [0.05, 0.06, 0.2], color: BONE }),                              // pendentif
  ])));
  // cape de fourrure sur les épaules
  const cape = mesh(merge([
    part(sphere(0.3), { pos: [0, 0.6, -0.04], scale: [1.2, 0.34, 0.9], color: FUR_L, jitter: 0.1 }),
    part(sphere(0.22), { pos: [0, 0.46, -0.16], scale: [1.2, 0.9, 0.42], color: FUR, jitter: 0.1 }),
    part(sphere(0.12), { pos: [-0.27, 0.56, 0], color: FUR_L, jitter: 0.1 }),
    part(sphere(0.12), { pos: [0.27, 0.56, 0], color: FUR_L, jitter: 0.1 }),
  ]));
  torso.add(cape);
  // sac à dos
  const sack = mesh(merge([
    part(sphere(0.19), { pos: [0.02, 0.28, -0.27], scale: [1, 1.15, 0.75], color: 0x7d5a35 }),
    part(cyl(0.05, 0.08, 0.06, 8), { pos: [0.02, 0.5, -0.27], color: 0x5f4426 }),
    part(new THREE.TorusGeometry(0.2, 0.014, 5, 14, Math.PI), { pos: [0, 0.4, 0], rot: [0, 0, 0], scale: [1, 1, 1], color: 0x4a3524 }),
  ]));
  torso.add(sack);

  // ---- tête ----
  const neck = new THREE.Group(); neck.position.y = 0.68; torso.add(neck);
  const head = new THREE.Group(); head.position.y = 0.06; neck.add(head);
  head.add(mesh(merge([
    part(cyl(0.06, 0.07, 0.1, 8), { pos: [0, -0.02, 0], color: SKIN_D }),
    part(sphere(0.125, 14), { pos: [0, 0.14, 0.01], scale: [0.95, 1.08, 1.05], color: SKIN }),
    part(sphere(0.08, 10), { pos: [0, 0.07, 0.07], scale: [1.1, 0.8, 0.9], color: SKIN }),     // mâchoire
    part(new THREE.BoxGeometry(0.19, 0.035, 0.05), { pos: [0, 0.185, 0.11], color: SKIN_D }),   // arcade sourcilière
    part(sphere(0.02), { pos: [-0.045, 0.165, 0.118], color: 0x140d08 }),
    part(sphere(0.02), { pos: [0.045, 0.165, 0.118], color: 0x140d08 }),
    part(sphere(0.02), { pos: [0, 0.135, 0.14], scale: [1, 1.2, 1.2], color: SKIN_D }),        // nez
    // barbe
    part(sphere(0.095, 10), { pos: [0, 0.055, 0.075], scale: [1.05, 0.9, 0.8], color: HAIR, jitter: 0.2 }),
    // cheveux
    part(sphere(0.135, 12), { pos: [0, 0.19, -0.02], scale: [1.05, 0.85, 1.05], color: HAIR, jitter: 0.25 }),
    part(sphere(0.1, 8), { pos: [0, 0.1, -0.11], scale: [1.1, 1.3, 0.8], color: HAIR, jitter: 0.25 }),
    part(sphere(0.06, 8), { pos: [-0.12, 0.12, -0.03], color: HAIR, jitter: 0.25 }),
    part(sphere(0.06, 8), { pos: [0.12, 0.12, -0.03], color: HAIR, jitter: 0.25 }),
    part(cyl(0.012, 0.012, 0.12, 5), { pos: [0.1, 0.24, -0.02], rot: [0, 0, 0.5], color: BONE }),       // épingle en os
  ])));

  // ---- bras ----
  const mkArm = (side) => {
    const shoulder = new THREE.Group(); shoulder.position.set(side * 0.26, 0.6, 0); torso.add(shoulder);
    shoulder.add(mesh(merge([
      part(sphere(0.075), { pos: [0, 0, 0], color: SKIN }),
      part(cyl(0.07, 0.055, 0.3), { pos: [0, -0.15, 0], color: SKIN }),
      part(cyl(0.08, 0.07, 0.07), { pos: [0, -0.08, 0], color: HIDE }),
    ])));
    const elbow = new THREE.Group(); elbow.position.y = -0.3; shoulder.add(elbow);
    elbow.add(mesh(merge([
      part(cyl(0.055, 0.045, 0.28), { pos: [0, -0.14, 0], color: SKIN }),
      part(cyl(0.062, 0.062, 0.05), { pos: [0, -0.2, 0], color: HIDE }),                // bracelet
      part(sphere(0.05), { pos: [0, -0.3, 0], color: SKIN }),
    ])));
    return { shoulder, elbow };
  };
  const armL = mkArm(-1), armR = mkArm(1);

  // ---- lance (main droite) ----
  const spear = new THREE.Group();
  spear.position.set(0, -0.3, 0.02);
  armR.elbow.add(spear);
  spear.add(mesh(merge([
    limb([0, -0.6, 0], [0, 1.45, 0], 0.025, 0.02, WOOD),
    part(new THREE.ConeGeometry(0.045, 0.24, 6), { pos: [0, 1.56, 0], color: STONE, flat: true }),
    part(cyl(0.032, 0.032, 0.09, 6), { pos: [0, 1.4, 0], color: 0xb89a6a }),
    part(new THREE.ConeGeometry(0.028, 0.08, 5), { pos: [0, 1.32, 0], rot: [Math.PI, 0, 0], color: BONE }),
  ])));
  // couteau à la ceinture
  const knife = mesh(merge([
    part(cyl(0.012, 0.012, 0.1, 5), { pos: [0.16, -0.05, 0.13], rot: [0.2, 0, 0], color: 0x5a3a20 }),
    part(new THREE.ConeGeometry(0.02, 0.12, 4), { pos: [0.16, -0.14, 0.14], rot: [Math.PI + 0.2, 0, 0], color: STONE }),
  ]));
  hips.add(knife);

  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  const rig = { root, body, hips, torso, head, neck, legL, legR, armL, armR, spear, sack, phase: 0, speedBlend: 0, crouch: 0, action: null, actionT: 0, aim: 0 };
  return rig;
}

/** Animation procédurale. s = { speed, crouching, aiming, sprint, inWater, grounded } */
export function animateCro(rig, s, dt, time) {
  const k = 1 - Math.exp(-dt * 10);
  rig.speedBlend = lerp(rig.speedBlend, s.speed, k);
  rig.crouch = lerp(rig.crouch, s.crouching ? 1 : 0, 1 - Math.exp(-dt * 9));
  rig.aim = lerp(rig.aim, s.aiming ? 1 : 0, 1 - Math.exp(-dt * 12));
  const sp = rig.speedBlend;
  const cr = rig.crouch;
  rig.phase += dt * (2.0 + sp * 1.55) * (s.grounded ? 1 : 0.2);
  const w = Math.min(1, sp / 2.2);
  const sw = Math.sin(rig.phase * 2.0) * w;
  const amp = 0.75 * (0.6 + Math.min(sp, 7) / 7 * 0.7);

  // jambes
  const crouchThigh = -0.95 * cr, crouchKnee = 1.5 * cr;
  const bend = (v) => Math.max(0, v);
  rig.legL.thigh.rotation.x = -sw * amp + crouchThigh;
  rig.legR.thigh.rotation.x = sw * amp + crouchThigh;
  rig.legL.knee.rotation.x = bend(sw) * 0.9 * w + crouchKnee;
  rig.legR.knee.rotation.x = bend(-sw) * 0.9 * w + crouchKnee;
  if (!s.grounded) { rig.legL.thigh.rotation.x = -0.6; rig.legR.thigh.rotation.x = 0.3; rig.legL.knee.rotation.x = 0.8; rig.legR.knee.rotation.x = 0.4; }
  // bassin
  const bob = Math.abs(Math.sin(rig.phase * 2.0)) * 0.05 * w;
  rig.hips.position.y = 0.95 - cr * 0.34 + bob - (1 - w) * 0;
  rig.body.rotation.x = cr * 0.28 + (s.sprint ? 0.14 : 0) * w;
  rig.torso.rotation.y = -sw * 0.18 * w;
  rig.torso.rotation.x = 0.03 * Math.sin(time * 1.6) * (1 - w) - cr * 0.1;
  rig.head.rotation.x = -cr * 0.25 - rig.body.rotation.x * 0.6;

  // bras / lance
  const idle = Math.sin(time * 1.6) * 0.03;
  let aL = sw * amp * 0.9 + idle, aLk = -0.15 - bend(-sw) * 0.5 * w;
  let aR = -sw * amp * 0.5 - 0.2, aRk = -0.5, aRz = 0.08;
  let spearRot = [-0.25, 0, 0];
  // visée : lance à l'horizontale, bras en arrière
  if (rig.aim > 0.01) {
    const a = rig.aim;
    aR = lerp(aR, -2.55, a); aRk = lerp(aRk, -0.4, a); aL = lerp(aL, -1.0, a);
    spearRot = [lerp(-0.25, -1.45, a), 0, 0];
  }
  // actions ponctuelles
  if (rig.action) {
    rig.actionT += dt;
    const d = { thrust: 0.42, throw: 0.4, gather: 0.55, hit: 0.5 }[rig.action] || 0.4;
    const t = clamp(rig.actionT / d, 0, 1);
    if (rig.action === 'thrust') {
      const e = Math.sin(t * Math.PI);
      aR = lerp(aR, -1.55, e); aRk = lerp(aRk, -0.1, e);
      spearRot = [lerp(spearRot[0], -1.5, e), 0, 0];
      rig.torso.rotation.y += 0.35 * (1 - e) - 0.2 * e; rig.body.rotation.x += 0.15 * e;
    } else if (rig.action === 'throw') {
      const e = t < 0.35 ? -Math.sin(t / 0.35 * Math.PI * 0.5) : 1 - (t - 0.35) / 0.65;
      aR = t < 0.35 ? lerp(-2.55, -2.9, t / 0.35) : lerp(-1.3, -2.55, (t - 0.35) / 0.65);
      spearRot = [-1.45, 0, 0];
      rig.body.rotation.x += 0.1 * (1 - t);
    } else if (rig.action === 'gather') {
      const e = Math.sin(t * Math.PI);
      rig.body.rotation.x += 0.55 * e; aR = lerp(aR, -0.9 - 0.9 * Math.sin(t * Math.PI * 3), e); aL = lerp(aL, -0.6, e);
    }
    if (t >= 1) rig.action = null;
  }
  rig.armL.shoulder.rotation.x = aL; rig.armL.elbow.rotation.x = aLk; rig.armL.shoulder.rotation.z = -0.08;
  rig.armR.shoulder.rotation.x = aR; rig.armR.elbow.rotation.x = aRk; rig.armR.shoulder.rotation.z = aRz;
  rig.spear.rotation.set(spearRot[0], spearRot[1], spearRot[2]);
  rig.spear.visible = !rig.spearHidden;
}

export function playAction(rig, name) { rig.action = name; rig.actionT = 0; }
