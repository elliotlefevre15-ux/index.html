// Modèles procéduraux des 3 espèces + animation de marche/tête. Tous regardent vers +Z, pieds à y=0.
import * as THREE from 'three';
import { part, merge, limb, matVC } from '../systems/geo.js';
import { antler } from '../building/pieces.js';
import { lerp, clamp } from '../systems/noise.js';

const sph = (r, s = 12) => new THREE.SphereGeometry(r, s, Math.max(6, s - 3));
const cyl = (r0, r1, h, seg = 7) => new THREE.CylinderGeometry(r1, r0, h, seg);
const mesh = (g) => { const m = new THREE.Mesh(g, matVC); m.castShadow = true; return m; };
const jit = (c, k = 0.06) => { const o = new THREE.Color(c); o.offsetHSL((Math.random() - 0.5) * k, 0, (Math.random() - 0.5) * k); return o.getHex(); };

function leg(x, y, z, len, upper, lower, hoof, thick, chaps) {
  const g = new THREE.Group(); g.position.set(x, y, z);
  const l1 = len * 0.52, l2 = len * 0.48;
  const parts = [part(cyl(thick, thick * 0.72, l1, 7), { pos: [0, -l1 / 2, 0], color: upper })];
  if (chaps) parts.push(part(sph(thick * 1.6, 8), { pos: [0, -l1 * 0.35, 0], scale: [1, 1.8, 1.1], color: chaps }));
  g.add(mesh(merge(parts)));
  const knee = new THREE.Group(); knee.position.y = -l1; g.add(knee);
  knee.add(mesh(merge([
    part(cyl(thick * 0.72, thick * 0.55, l2, 7), { pos: [0, -l2 / 2, 0], color: lower }),
    part(cyl(thick * 0.68, thick * 0.8, thick * 1.5, 7), { pos: [0, -l2 + thick * 0.75, thick * 0.1], color: hoof }),
  ])));
  return { pivot: g, knee, len };
}

function build(kind) {
  const root = new THREE.Group(); root.rotation.order = 'YXZ';
  const body = new THREE.Group(); root.add(body);
  const legs = [];
  let head, neck, tail, height, hitY;
  if (kind === 'bison') {
    const dark = jit(0x3b2818), mane = jit(0x261810), light = jit(0x5a3e26), hoof = 0x1c1612;
    body.add(mesh(merge([
      part(sph(0.62), { pos: [0, 1.05, -0.55], scale: [1, 0.95, 1.35], color: dark, jitter: 0.12 }),
      part(sph(0.75), { pos: [0, 1.28, 0.35], scale: [1.05, 1.1, 1.25], color: mane, jitter: 0.15 }),
      part(sph(0.5), { pos: [0, 1.75, 0.35], scale: [0.9, 0.9, 1.2], color: mane, jitter: 0.15 }),        // bosse
      part(sph(0.4), { pos: [0, 1.15, 0.9], scale: [1.1, 1, 0.9], color: light, jitter: 0.2 }),
      part(sph(0.3), { pos: [0, 0.75, 0.75], scale: [0.9, 1.4, 0.9], color: mane, jitter: 0.2 }),           // fanon
    ])));
    legs.push(leg(-0.4, 0.98, 0.5, 0.98, mane, light, hoof, 0.14, mane), leg(0.4, 0.98, 0.5, 0.98, mane, light, hoof, 0.14, mane),
      leg(-0.36, 0.95, -0.85, 0.95, dark, dark, hoof, 0.13), leg(0.36, 0.95, -0.85, 0.95, dark, dark, hoof, 0.13));
    neck = new THREE.Group(); neck.position.set(0, 1.35, 0.95); body.add(neck);
    head = new THREE.Group(); head.position.set(0, 0, 0.15); neck.add(head);
    head.add(mesh(merge([
      part(sph(0.34, 12), { pos: [0, -0.2, 0.25], scale: [0.85, 1.15, 1.15], color: mane, jitter: 0.1 }),
      part(cyl(0.16, 0.22, 0.42, 8), { pos: [0, -0.5, 0.45], rot: [0.35, 0, 0], color: 0x2a1c12 }),      // museau
      part(sph(0.28), { pos: [0, 0.0, 0.1], scale: [1.1, 0.7, 0.8], color: light, jitter: 0.2 }),        // toupet
      part(sph(0.04), { pos: [-0.26, -0.12, 0.42], color: 0x0c0806 }), part(sph(0.04), { pos: [0.26, -0.12, 0.42], color: 0x0c0806 }),
      part(cyl(0.05, 0.05, 0.4, 5), { pos: [-0.2, -0.75, 0.62], color: mane }),                          // barbe
      limb([-0.27, 0.0, 0.25], [-0.5, 0.12, 0.28], 0.06, 0.05, 0x1f1a14), limb([-0.5, 0.12, 0.28], [-0.55, 0.36, 0.3], 0.05, 0.02, 0xd6cdb5),
      limb([0.27, 0.0, 0.25], [0.5, 0.12, 0.28], 0.06, 0.05, 0x1f1a14), limb([0.5, 0.12, 0.28], [0.55, 0.36, 0.3], 0.05, 0.02, 0xd6cdb5),
    ])));
    tail = new THREE.Group(); tail.position.set(0, 1.35, -1.35); body.add(tail);
    tail.add(mesh(merge([limb([0, 0, 0], [0, -0.55, -0.1], 0.04, 0.03, dark), part(sph(0.08), { pos: [0, -0.6, -0.1], scale: [1, 1.5, 1], color: mane })])));
    height = 1.9; hitY = 1.2;
  } else if (kind === 'deer') {
    const fur = jit(0x9f6f42), belly = 0xdcc9a3, dark = jit(0x5d4029), hoof = 0x2a2018;
    body.add(mesh(merge([
      part(sph(0.5), { pos: [0, 1.32, -0.35], scale: [0.82, 0.92, 1.45], color: fur, jitter: 0.1 }),
      part(sph(0.5), { pos: [0, 1.36, 0.42], scale: [0.85, 0.95, 1.05], color: fur, jitter: 0.1 }),
      part(sph(0.42), { pos: [0, 1.15, 0.0], scale: [0.85, 0.7, 1.7], color: belly, jitter: 0.06 }),
      part(sph(0.25), { pos: [0, 1.4, -0.98], scale: [1, 1, 0.5], color: 0xf1e6cc }),                          // miroir
      part(sph(0.3), { pos: [0, 1.75, 0.6], scale: [0.7, 1, 1], color: dark, jitter: 0.15 }),                   // garrot / crinière
    ])));
    legs.push(leg(-0.2, 1.22, 0.5, 1.22, fur, dark, hoof, 0.075), leg(0.2, 1.22, 0.5, 1.22, fur, dark, hoof, 0.075),
      leg(-0.2, 1.22, -0.72, 1.22, fur, dark, hoof, 0.08), leg(0.2, 1.22, -0.72, 1.22, fur, dark, hoof, 0.08));
    neck = new THREE.Group(); neck.position.set(0, 1.62, 0.78); neck.rotation.x = -0.05; body.add(neck);
    neck.add(mesh(merge([
      limb([0, 0, 0], [0, 0.55, 0.32], 0.2, 0.13, dark, 8),
      part(sph(0.25), { pos: [0, 0.12, 0.05], scale: [0.7, 1.1, 1], color: dark, jitter: 0.2 }),
    ])));
    head = new THREE.Group(); head.position.set(0, 0.6, 0.36); neck.add(head);
    head.add(mesh(merge([
      part(sph(0.15, 10), { pos: [0, 0, 0.05], scale: [0.9, 1, 1.25], color: fur }),
      part(cyl(0.07, 0.1, 0.28, 8), { pos: [0, -0.06, 0.28], rot: [Math.PI / 2 + 0.25, 0, 0], color: jit(0x8d6440) }),
      part(sph(0.045), { pos: [0, -0.09, 0.42], color: 0x141010 }),
      part(sph(0.035), { pos: [-0.1, 0.05, 0.12], color: 0x0c0806 }), part(sph(0.035), { pos: [0.1, 0.05, 0.12], color: 0x0c0806 }),
      part(sph(0.08), { pos: [-0.14, 0.14, -0.05], scale: [0.6, 1.4, 0.6], rot: [0, 0, 0.6], color: fur }), part(sph(0.08), { pos: [0.14, 0.14, -0.05], scale: [0.6, 1.4, 0.6], rot: [0, 0, -0.6], color: fur }),
      ...[-1, 1].flatMap((s) => antler(s, 1.9).map((a) => part(a, { pos: [s * 0.07, 0.15, -0.06], rot: [-0.35, 0, 0] }))),
    ])));
    tail = new THREE.Group(); tail.position.set(0, 1.45, -1.05); body.add(tail);
    tail.add(mesh(part(sph(0.08), { pos: [0, -0.05, -0.05], scale: [0.8, 1.4, 0.9], color: 0xf1e6cc })));
    height = 2.2; hitY = 1.4;
  } else { // ibex
    const fur = jit(0x7a6a56), belly = 0xb7a98e, dark = jit(0x3d3128), hoof = 0x1e1813;
    body.add(mesh(merge([
      part(sph(0.36), { pos: [0, 0.75, -0.25], scale: [0.85, 0.9, 1.4], color: fur, jitter: 0.12 }),
      part(sph(0.38), { pos: [0, 0.8, 0.28], scale: [0.85, 1, 1.05], color: fur, jitter: 0.12 }),
      part(sph(0.3), { pos: [0, 0.62, 0.0], scale: [0.85, 0.7, 1.6], color: belly }),
      part(sph(0.22), { pos: [0, 1.0, 0.35], scale: [0.6, 0.8, 1.2], color: dark, jitter: 0.15 }),
    ])));
    legs.push(leg(-0.17, 0.62, 0.32, 0.66, fur, dark, hoof, 0.07), leg(0.17, 0.62, 0.32, 0.66, fur, dark, hoof, 0.07),
      leg(-0.17, 0.62, -0.5, 0.66, fur, dark, hoof, 0.075), leg(0.17, 0.62, -0.5, 0.66, fur, dark, hoof, 0.075));
    neck = new THREE.Group(); neck.position.set(0, 0.95, 0.55); body.add(neck);
    neck.add(mesh(limb([0, 0, 0], [0, 0.22, 0.2], 0.15, 0.11, fur, 8)));
    head = new THREE.Group(); head.position.set(0, 0.26, 0.24); neck.add(head);
    const hp = [
      part(sph(0.12, 10), { pos: [0, 0, 0.03], scale: [0.9, 1, 1.2], color: fur }),
      part(cyl(0.06, 0.085, 0.2, 8), { pos: [0, -0.05, 0.2], rot: [Math.PI / 2 + 0.2, 0, 0], color: jit(0x6d5c48) }),
      part(sph(0.03), { pos: [-0.08, 0.04, 0.1], color: 0x0c0806 }), part(sph(0.03), { pos: [0.08, 0.04, 0.1], color: 0x0c0806 }),
      part(cyl(0.02, 0.005, 0.18, 5), { pos: [0, -0.2, 0.28], color: dark }),
    ];
    [-1, 1].forEach((s) => {
      let prev = null;
      for (let i = 0; i <= 9; i++) {
        const t = i / 9, ang = t * 2.0;
        const p = [s * (0.06 + Math.sin(ang) * 0.08 + t * 0.05), 0.1 + Math.sin(ang) * 0.5 * (1 - t * 0.15), -0.04 - Math.sin(ang * 0.5) * 0.22];
        if (prev) hp.push(limb(prev, p, 0.055 * (1 - (i - 1) / 9 * 0.7), 0.055 * (1 - i / 9 * 0.7), 0xc9bd9a, 5));
        if (i > 1 && i < 9 && i % 2 === 0) hp.push(part(cyl(0.045 * (1 - t * 0.6), 0.045 * (1 - t * 0.6), 0.012, 6), { pos: p, rot: [0, 0, s * 0.3], color: 0x9d9070 }));
        prev = p;
      }
    });
    head.add(mesh(merge(hp)));
    tail = new THREE.Group(); tail.position.set(0, 0.85, -0.65); body.add(tail);
    tail.add(mesh(part(sph(0.05), { pos: [0, 0, -0.03], scale: [1, 1.4, 1], color: dark })));
    height = 1.3; hitY = 0.8;
  }
  legs.forEach((l) => body.add(l.pivot));
  root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { kind, root, body, legs, head, neck, tail, height, hitY, phase: Math.random() * 6, headPitch: 0, bob: 0 };
}

export function createAnimalModel(kind) { return build(kind); }

/** speed en m/s, mode: graze | alert | move | dead */
export function animateAnimal(rig, dt, speed, mode, t, gallop = 0) {
  const k = rig.kind;
  const stride = k === 'bison' ? 1.0 : k === 'deer' ? 0.9 : 1.1;
  rig.phase += dt * speed * (1.6 / stride) * (1 + gallop * 0.3);
  const sw = Math.sin(rig.phase);
  const amp = clamp(speed / 3, 0, 1) * (0.45 + gallop * 0.5);
  const diag = gallop > 0.5;
  rig.legs.forEach((l, i) => {
    const front = i < 2;
    const ph = diag ? (front ? sw : Math.sin(rig.phase + 0.5)) : (i === 0 || i === 3 ? sw : -sw);
    l.pivot.rotation.x = -ph * amp * (front ? 1 : -1) * 1;
    l.knee.rotation.x = Math.max(0, front ? -ph : ph) * amp * 1.1 * (front ? 1 : -1) * -1 + (front ? 0 : 0);
    if (front) l.knee.rotation.x = Math.max(0, ph) * amp * 1.3;
    else l.knee.rotation.x = Math.max(0, -ph) * amp * 1.3;
  });
  // tête
  let target = 0;
  if (mode === 'graze') target = k === 'bison' ? 0.95 : 1.05;
  else if (mode === 'alert') target = -0.25;
  else if (mode === 'charge') target = 0.55;
  else if (mode === 'move') target = k === 'deer' ? -0.05 : 0.1 + Math.sin(rig.phase) * 0.06 * amp;
  rig.headPitch = lerp(rig.headPitch, target, 1 - Math.exp(-dt * 6));
  if (rig.head) rig.head.rotation.x = rig.headPitch * (k === 'deer' ? 0.9 : 1);
  if (rig.neck) rig.neck.rotation.x = (k === 'deer' ? -0.05 : 0) + rig.headPitch * (k === 'deer' ? 0.7 : 0.35);
  // dos qui roule
  rig.body.position.y = Math.abs(Math.sin(rig.phase)) * 0.06 * amp * (1 + gallop) ;
  rig.body.rotation.z = Math.sin(rig.phase) * 0.03 * amp;
  if (rig.tail) rig.tail.rotation.x = 0.25 + Math.sin(t * 3 + rig.phase) * 0.12 + gallop * 0.5;
}

export function poseDead(rig) {
  rig.root.rotation.z = Math.PI / 2 * 0.98;
  rig.root.position.y = 0;
  rig.legs.forEach((l, i) => { l.pivot.rotation.x = -0.4 + (i % 2) * 0.5; l.knee.rotation.x = 0.5; });
  if (rig.head) rig.head.rotation.x = 0.3;
}
