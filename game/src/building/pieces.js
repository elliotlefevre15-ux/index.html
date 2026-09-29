// Catalogue des pièces de construction (époque : Cro-Magnon). Chaque pièce est un modèle procédural fusionné.
// Les autres époques (romaine, grecque, militaire) se brancheront en ajoutant un autre catalogue avec la même forme.
import * as THREE from 'three';
import { part, merge, limb, matVC } from '../systems/geo.js';

export const TILE = 2;
export const WALL_H = 2.2;

const WOOD = [0x7a5634, 0x6b4a2b, 0x855f3a, 0x735030], WOOD_D = 0x4f3821, FIBER = 0xb8a163, HIDE = 0x9a7040, FUR = 0x6b4a2d, FUR_L = 0x8f6d48;
const ANT = 0xd3c39c, BONE = 0xe6dcc4, STONE = 0x8a8880, STONE_L = 0xa19e94, STONE_D = 0x6d6a63, THATCH = 0xb59a55, THATCH_D = 0x8f7640, OCHRE = 0xa8402a;
const wood = () => WOOD[Math.floor(Math.random() * WOOD.length)];
const cyl = (r0, r1, h, seg = 7) => new THREE.CylinderGeometry(r1, r0, h, seg);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const sph = (r, s = 9) => new THREE.SphereGeometry(r, s, Math.max(5, s - 3));
const ico = (r, d = 0) => new THREE.IcosahedronGeometry(r, d);

// ---------- briques de construction ----------
function log(x, y0, y1, z = 0, r = 0.125) {
  const h = y1 - y0;
  return part(cyl(r * 1.04, r * 0.96, h, 6), { pos: [x, y0 + h / 2, z], color: wood(), jitter: 0.12 });
}
function logsRow(x0, x1, y0, y1, r = 0.125) {
  const out = [];
  const n = Math.max(1, Math.round((x1 - x0) / (r * 2)));
  const step = (x1 - x0) / n;
  for (let i = 0; i < n; i++) out.push(log(x0 + step * (i + 0.5), y0, y1 + (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.03, step / 2 * 1.02));
  return out;
}
function band(y, w = 2.02) { return part(box(w, 0.06, 0.3), { pos: [0, y, 0], color: FIBER, jitter: 0.1 }); }

function quadGeo(quads) {
  // quads : [[a,b,c,d], outwardDir]
  const pos = [];
  for (const [q, out] of quads) {
    const [a, b, c, d] = q.map((p) => new THREE.Vector3(...p));
    const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));
    let tri = [[a, b, c], [a, c, d]];
    if (n.dot(new THREE.Vector3(...out)) < 0) tri = [[a, c, b], [a, d, c]];
    for (const t of tri) for (const v of t) pos.push(v.x, v.y, v.z);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.computeVertexNormals();
  return g;
}

function wedge(w, d, hL, hH, colorFn) {
  const A = [-w, 0, d], B = [w, 0, d], C = [w, 0, -d], D = [-w, 0, -d];
  const A2 = [-w, hL, d], B2 = [w, hL, d], C2 = [w, hH, -d], D2 = [-w, hH, -d];
  const g = quadGeo([
    [[A2, B2, C2, D2], [0, 1, 0.3]], [[A, B, C, D], [0, -1, 0]],
    [[A, B, B2, A2], [0, 0, 1]], [[D, C, C2, D2], [0, 0, -1]],
    [[A, D, D2, A2], [-1, 0, 0]], [[B, C, C2, B2], [1, 0, 0]],
  ]);
  const p = g.attributes.position, col = new Float32Array(p.count * 3), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    c.set(colorFn(p.getX(i), p.getY(i), p.getZ(i)));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(p.count * 2), 2));
  return g;
}

export function antler(side, s = 1) {
  const out = [];
  const pts = [[0.05, 0, 0], [0.12, 0.12, -0.02], [0.28, 0.26, -0.06], [0.42, 0.46, -0.14], [0.46, 0.7, -0.22], [0.4, 0.96, -0.28]];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], r = 0.052 * (1 - i * 0.1);
    out.push(limb([a[0] * side * s, a[1] * s, a[2] * s], [b[0] * side * s, b[1] * s, b[2] * s], r, r * 0.85, ANT));
  }
  // andouillers
  [[2, 0.3, 0.18, 0.05], [3, 0.36, 0.3, 0.02], [4, 0.28, 0.32, -0.02], [1, 0.14, 0.14, 0.1]].forEach(([i, dx, dy, dz]) => {
    const a = pts[i];
    out.push(limb([a[0] * side * s, a[1] * s, a[2] * s], [(a[0] + dx * 0.55) * side * s, (a[1] + dy) * s, (a[2] + dz - 0.06) * s], 0.034, 0.01, ANT));
  });
  // palme
  out.push(limb([0.4 * side * s, 0.96 * s, -0.28 * s], [0.26 * side * s, 1.12 * s, -0.3 * s], 0.04, 0.01, ANT));
  out.push(limb([0.4 * side * s, 0.96 * s, -0.28 * s], [0.5 * side * s, 1.1 * s, -0.3 * s], 0.04, 0.01, ANT));
  return out;
}
export function hornArc(side, R, r, turns, y0 = 0, tilt = 0) {
  const out = [];
  const N = 8;
  let prev = null;
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * turns;
    const p = [side * (Math.cos(t * 1.0) * -R + R + 0.02) * 1, Math.sin(t) * R * 0.9 + y0, -Math.sin(t * 0.5) * R * 0.4];
    if (prev) out.push(limb(prev, p, r * (1 - (i - 1) / N * 0.75), r * (1 - i / N * 0.75), 0xcfc4a4, 5));
    prev = p;
  }
  return out;
}

// ---------- modèles ----------
const B = {
  foundation() {
    const p = [part(box(2, 0.14, 2), { pos: [0, -0.07, 0], color: STONE_L, jitter: 0.1 })];
    for (let i = 0; i < 14; i++) {
      const x = (Math.random() - 0.5) * 1.9, z = (Math.random() - 0.5) * 1.9;
      p.push(part(ico(0.34 + Math.random() * 0.14, 1), { pos: [x, -0.42 - Math.random() * 0.3, z], scale: [1, 0.9, 1], color: [STONE, STONE_D, STONE_L][i % 3], flat: true, jitter: 0.15 }));
    }
    for (let i = 0; i < 8; i++) { // gros blocs de bordure
      const a = i / 8 * Math.PI * 2, x = Math.cos(a) * 0.95, z = Math.sin(a) * 0.95;
      p.push(part(ico(0.26, 1), { pos: [Math.max(-0.92, Math.min(0.92, x * 1.05)), -0.16, Math.max(-0.92, Math.min(0.92, z * 1.05))], scale: [1.2, 0.7, 1.2], color: STONE, flat: true, jitter: 0.15 }));
    }
    return { parts: p };
  },
  floor() {
    const p = [];
    for (let i = 0; i < 8; i++) p.push(part(box(0.245, 0.12, 2), { pos: [-0.875 + i * 0.25, -0.06, 0], color: wood(), jitter: 0.1 }));
    [-0.6, 0.6].forEach((z) => p.push(part(cyl(0.09, 0.09, 2, 6), { pos: [0, -0.2, z], rot: [0, 0, Math.PI / 2], color: WOOD_D })));
    return { parts: p };
  },
  wall() { return { parts: [...logsRow(-1, 1, -0.35, WALL_H), band(0.55), band(1.7)] }; },
  halfwall() {
    return { parts: [...logsRow(-1, 1, -0.35, 1.1), band(0.55, 2.02), part(box(2.08, 0.09, 0.32), { pos: [0, 1.12, 0], color: WOOD[2] })] };
  },
  door() {
    const p = [...logsRow(-1, -0.5, -0.35, WALL_H), ...logsRow(0.5, 1, -0.35, WALL_H)];
    p.push(part(cyl(0.14, 0.14, 1.2, 6), { pos: [0, 2.0, 0], rot: [0, 0, Math.PI / 2], color: WOOD[1] }));
    p.push(...logsRow(-0.5, 0.5, 2.1, WALL_H));
    p.push(part(box(0.98, 1.75, 0.035), { pos: [0, 0.98, 0.04], rot: [0.02, 0, 0], color: HIDE, jitter: 0.12 }));
    p.push(part(box(0.98, 0.05, 0.07), { pos: [0, 1.88, 0.04], color: WOOD_D }));
    [[-0.22, 1.35], [0.2, 1.1], [0, 0.7]].forEach(([x, y]) => p.push(part(ico(0.06, 0), { pos: [x, y, 0.065], scale: [1, 1.2, 0.3], color: OCHRE, flat: true })));
    p.push(part(box(0.06, 1.85, 0.32), { pos: [-0.51, 0.93, 0], color: WOOD_D }), part(box(0.06, 1.85, 0.32), { pos: [0.51, 0.93, 0], color: WOOD_D }));
    return { parts: p };
  },
  window() {
    const p = [...logsRow(-1, -0.5, -0.35, WALL_H), ...logsRow(0.5, 1, -0.35, WALL_H), ...logsRow(-0.5, 0.5, -0.35, 0.9), ...logsRow(-0.5, 0.5, 1.6, WALL_H)];
    p.push(part(box(1.1, 0.07, 0.36), { pos: [0, 0.93, 0.02], color: WOOD[2] }));
    p.push(part(box(0.06, 0.75, 0.3), { pos: [-0.5, 1.25, 0], color: WOOD_D }), part(box(0.06, 0.75, 0.3), { pos: [0.5, 1.25, 0], color: WOOD_D }));
    p.push(part(box(0.48, 0.5, 0.02), { pos: [-0.28, 1.27, 0.09], rot: [0, 0.05, 0.1], color: HIDE, jitter: 0.1 }));
    p.push(band(0.5), band(1.9));
    return { parts: p };
  },
  beam() {
    const p = [part(cyl(0.16, 0.14, 2.7, 7), { pos: [0, 1.0, 0], color: wood(), jitter: 0.1 })];
    [0.3, 1.6].forEach((y) => p.push(part(cyl(0.17, 0.17, 0.07, 7), { pos: [0, y, 0], color: FIBER })));
    p.push(part(ico(0.12, 0), { pos: [0, 2.32, 0], scale: [1, 0.6, 1], color: STONE_L, flat: true }));
    return { parts: p };
  },
  roof() {
    const g = wedge(1.2, 1.2, 0.14, 0.66, (x, y, z) => {
      const stripe = 0.5 + 0.5 * Math.sin(x * 15 + Math.sin(z * 4) * 0.6);
      return new THREE.Color(THATCH).lerp(new THREE.Color(THATCH_D), stripe * 0.55 + (y < 0.01 ? 0.4 : 0));
    });
    const p = [g];
    [-0.78, -0.26, 0.26, 0.78].forEach((x) => p.push(part(cyl(0.05, 0.05, 2.4, 6), { pos: [x, -0.05, 0], rot: [Math.PI / 2, 0, 0], color: WOOD_D })));
    for (let i = 0; i < 14; i++) p.push(part(cyl(0.02, 0.005, 0.28, 4), { pos: [-1.1 + i * 0.17, 0.06, 1.24], rot: [0.15, 0, 0], color: THATCH, jitter: 0.2 }));
    p.push(part(cyl(0.05, 0.05, 2.45, 6), { pos: [0, 0.66, -1.2], rot: [0, 0, Math.PI / 2], color: WOOD_D }));
    return { parts: p, flat: false };
  },
  stairs() {
    const p = [];
    for (let i = 0; i < 5; i++) {
      const top = 0.44 * (i + 1), z = 0.8 - i * 0.4;
      p.push(part(box(1.7, top + 0.1, 0.4), { pos: [0, (top - 0.1) / 2, z], color: wood(), jitter: 0.1 }));
      p.push(part(box(1.72, 0.05, 0.42), { pos: [0, top - 0.02, z], color: WOOD[2] }));
    }
    [-0.9, 0.9].forEach((x) => p.push(limb([x, -0.1, 1.05], [x, 2.25, -1.05], 0.09, 0.08, WOOD_D)));
    return { parts: p };
  },
  fire() {
    const p = [part(cyl(0.42, 0.42, 0.04, 12), { pos: [0, 0.02, 0], color: 0x2a2521 })];
    for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; p.push(part(ico(0.15, 1), { pos: [Math.cos(a) * 0.47, 0.1, Math.sin(a) * 0.47], scale: [1, 0.8, 1], color: [STONE, STONE_D, STONE_L][i % 3], flat: true, jitter: 0.15 })); }
    [0, 1.05, 2.1].forEach((a) => p.push(part(cyl(0.06, 0.05, 0.7, 6), { pos: [Math.cos(a) * 0.14, 0.14, Math.sin(a) * 0.14], rot: [Math.PI / 2 - 0.35, -a + Math.PI / 2, 0], color: 0x3a2a1c })));
    return { parts: p };
  },
  bed() {
    const p = [];
    [[-0.45, -0.95], [0.45, -0.95], [-0.45, 0.95], [0.45, 0.95]].forEach(([x, z]) => p.push(part(cyl(0.07, 0.07, 0.42, 6), { pos: [x, 0.21, z], color: WOOD[1] })));
    [-0.45, 0.45].forEach((x) => p.push(part(cyl(0.06, 0.06, 2.0, 6), { pos: [x, 0.38, 0], rot: [Math.PI / 2, 0, 0], color: WOOD[0] })));
    [-0.9, 0.9].forEach((z) => p.push(part(cyl(0.05, 0.05, 1.0, 6), { pos: [0, 0.38, z], rot: [0, 0, Math.PI / 2], color: WOOD[0] })));
    p.push(part(box(0.9, 0.16, 1.9), { pos: [0, 0.46, 0], color: FUR_L, jitter: 0.12 }));
    p.push(part(ico(0.42, 1), { pos: [0, 0.56, 0.2], scale: [1, 0.22, 1.45], color: HIDE, flat: true, jitter: 0.1 }));
    p.push(part(sph(0.22), { pos: [0, 0.62, -0.7], scale: [1.6, 0.55, 1], color: 0xc9b58f }));
    return { parts: p };
  },
  chest() {
    const p = [part(box(0.92, 0.5, 0.56), { pos: [0, 0.25, 0], color: 0x7b5632, jitter: 0.06 })];
    for (let i = 0; i < 3; i++) p.push(part(box(0.93, 0.012, 0.57), { pos: [0, 0.1 + i * 0.16, 0], color: WOOD_D }));
    const lid = new THREE.CylinderGeometry(0.29, 0.29, 0.94, 10, 1, false, 0, Math.PI);
    p.push(part(lid, { pos: [0, 0.5, 0], rot: [0, 0, Math.PI / 2], scale: [1, 1, 1], color: 0x86603a }));
    [-0.3, 0.3].forEach((x) => p.push(part(box(0.06, 0.62, 0.6), { pos: [x, 0.3, 0], color: FIBER })));
    p.push(part(ico(0.06, 0), { pos: [0, 0.48, 0.3], color: STONE_L, flat: true }));
    return { parts: p };
  },
  table() {
    const p = [part(cyl(0.6, 0.6, 0.1, 12), { pos: [0, 0.75, 0], color: 0x8a6238, jitter: 0.08 })];
    for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 0.4; p.push(part(cyl(0.07, 0.06, 0.75, 6), { pos: [Math.cos(a) * 0.35, 0.37, Math.sin(a) * 0.35], color: WOOD[1] })); }
    p.push(part(cyl(0.11, 0.09, 0.08, 8), { pos: [0.12, 0.84, 0.08], color: 0x5a3a26 }), part(ico(0.05, 0), { pos: [-0.2, 0.83, -0.1], color: STONE, flat: true }), part(cyl(0.02, 0.02, 0.3, 5), { pos: [-0.25, 0.81, 0.18], rot: [0, 0, Math.PI / 2 - 0.2], color: BONE }));
    return { parts: p };
  },
  chair() {
    const p = [part(cyl(0.26, 0.28, 0.4, 9), { pos: [0, 0.2, 0], color: WOOD[0] }), part(cyl(0.28, 0.28, 0.04, 9), { pos: [0, 0.41, 0], color: FUR_L })];
    p.push(part(cyl(0.05, 0.05, 0.6, 6), { pos: [-0.2, 0.65, -0.22], color: WOOD[1] }), part(cyl(0.05, 0.05, 0.6, 6), { pos: [0.2, 0.65, -0.22], color: WOOD[1] }));
    p.push(part(box(0.5, 0.3, 0.05), { pos: [0, 0.75, -0.24], color: HIDE }));
    return { parts: p };
  },
  workbench() {
    const p = [part(box(1.7, 0.12, 0.8), { pos: [0, 0.9, 0], color: 0x86603a, jitter: 0.08 })];
    [[-0.75, -0.3], [0.75, -0.3], [-0.75, 0.3], [0.75, 0.3]].forEach(([x, z]) => p.push(part(cyl(0.08, 0.07, 0.9, 6), { pos: [x, 0.45, z], color: WOOD[1] })));
    p.push(part(box(1.6, 0.06, 0.6), { pos: [0, 0.3, 0], color: WOOD[3] }));
    // outils
    p.push(limb([-0.5, 0.98, 0.1], [-0.15, 0.98, 0.2], 0.03, 0.03, WOOD_D), part(ico(0.1, 0), { pos: [-0.12, 0.99, 0.2], scale: [1.3, 0.6, 0.8], color: STONE, flat: true }));
    p.push(part(ico(0.16, 1), { pos: [0.45, 1.0, 0], scale: [1.2, 0.6, 0.9], color: STONE_L, flat: true }), part(cyl(0.02, 0.02, 0.35, 5), { pos: [0.1, 0.97, -0.15], rot: [0, 0, Math.PI / 2], color: BONE }));
    p.push(part(box(0.5, 0.03, 0.4), { pos: [-0.5, 0.97, -0.1], color: HIDE }));
    return { parts: p };
  },
  bones() {
    const p = [limb([-0.4, 0.08, -0.2], [0.4, 0.08, 0.2], 0.04, 0.04, BONE), limb([-0.4, 0.14, 0.2], [0.4, 0.14, -0.2], 0.04, 0.04, BONE)];
    [[-0.4, -0.2], [0.4, 0.2], [-0.4, 0.2], [0.4, -0.2]].forEach(([x, z], i) => p.push(part(sph(0.06), { pos: [x, i < 2 ? 0.08 : 0.14, z], color: BONE })));
    p.push(part(sph(0.13), { pos: [0, 0.27, 0], scale: [1, 0.9, 1.1], color: BONE }), part(cyl(0.05, 0.08, 0.16, 6), { pos: [0, 0.24, 0.16], rot: [Math.PI / 2, 0, 0], color: BONE }));
    p.push(part(sph(0.035), { pos: [-0.05, 0.3, 0.11], color: 0x18120c }), part(sph(0.035), { pos: [0.05, 0.3, 0.11], color: 0x18120c }));
    return { parts: p };
  },
  rack() {
    const p = [];
    [-0.7, 0.7].forEach((x) => p.push(part(cyl(0.07, 0.07, 1.6, 6), { pos: [x, 0.8, 0], color: WOOD[1] })));
    p.push(part(cyl(0.05, 0.05, 1.6, 6), { pos: [0, 1.3, 0], rot: [0, 0, Math.PI / 2], color: WOOD[0] }), part(cyl(0.05, 0.05, 1.6, 6), { pos: [0, 0.7, 0], rot: [0, 0, Math.PI / 2], color: WOOD[0] }));
    [[-0.3, 0.12], [0.1, -0.1], [0.42, 0.08]].forEach(([x, t]) => {
      p.push(limb([x, 0.05, 0.12], [x + t, 1.75, 0.08], 0.025, 0.02, WOOD_D), part(new THREE.ConeGeometry(0.04, 0.2, 5), { pos: [x + t, 1.85, 0.08], rot: [0, 0, -t * 0.4], color: STONE, flat: true }));
    });
    p.push(part(ico(0.1, 0), { pos: [0.72, 1.35, 0.06], scale: [1, 1.5, 0.5], color: FUR, flat: true }));
    return { parts: p };
  },
  torch() {
    const p = [part(cyl(0.05, 0.04, 1.7, 6), { pos: [0, 0.85, 0], color: WOOD_D }), part(cyl(0.09, 0.07, 0.24, 7), { pos: [0, 1.7, 0], color: 0x2a1c12 })];
    p.push(part(cyl(0.07, 0.07, 0.03, 6), { pos: [0, 1.62, 0], color: FIBER }));
    [0, 1, 2].forEach((i) => p.push(part(ico(0.08, 0), { pos: [Math.cos(i * 2.1) * 0.22, 0.06, Math.sin(i * 2.1) * 0.22], color: STONE, flat: true })));
    return { parts: p };
  },
  banner() {
    const p = [part(cyl(0.04, 0.04, 2.3, 6), { pos: [0, 1.15, 0], color: WOOD_D }), part(cyl(0.03, 0.03, 0.85, 6), { pos: [0, 2.15, 0], rot: [0, 0, Math.PI / 2], color: WOOD[0] })];
    p.push(part(box(0.7, 1.1, 0.03), { pos: [0, 1.55, 0.05], color: HIDE, jitter: 0.1 }));
    p.push(part(ico(0.16, 1), { pos: [0, 1.6, 0.075], scale: [1, 1, 0.2], color: OCHRE, flat: true }), part(box(0.44, 0.05, 0.02), { pos: [0, 1.25, 0.075], color: OCHRE }), part(box(0.44, 0.05, 0.02), { pos: [0, 1.95, 0.075], color: 0x2a2018 }));
    for (let i = 0; i < 5; i++) p.push(part(cyl(0.02, 0.005, 0.2, 4), { pos: [-0.28 + i * 0.14, 0.94, 0.05], color: HIDE }));
    p.push(part(sph(0.06), { pos: [0, 2.33, 0], color: BONE }));
    return { parts: p };
  },
  rug() {
    const p = [part(sph(1), { pos: [0, 0, 0], scale: [0.75, 0.03, 1.0], color: FUR_L, jitter: 0.15 }), part(sph(1), { pos: [0, 0.01, 0], scale: [0.55, 0.03, 0.78], color: FUR, jitter: 0.1 })];
    [[-0.7, -0.7], [0.7, -0.7], [-0.6, 0.85], [0.6, 0.85]].forEach(([x, z]) => p.push(part(sph(0.2), { pos: [x, 0.0, z], scale: [1, 0.15, 1.3], color: FUR_L })));
    p.push(part(sph(0.22), { pos: [0, 0.04, 1.05], scale: [1, 0.35, 1.2], color: FUR }));
    return { parts: p };
  },
  cairn() {
    const p = [];
    [[0.5, 0], [0.36, 0.3], [0.26, 0.55], [0.17, 0.75]].forEach(([r, y], i) => p.push(part(ico(r, 1), { pos: [(i % 2) * 0.03, y + r * 0.6, 0], scale: [1, 0.7, 1], color: [STONE, STONE_L, STONE_D, STONE][i], flat: true, jitter: 0.12 })));
    p.push(limb([0, 0.85, 0], [0.05, 1.3, 0], 0.03, 0.03, WOOD_D), part(sph(0.07), { pos: [0.05, 1.32, 0], color: BONE }));
    return { parts: p };
  },
  trophy_deer(o) {
    const p = plaque(o, 0.34);
    p.push(part(sph(0.13), { pos: [0, 0.02, 0.1], scale: [0.85, 1.1, 0.8], color: BONE }), part(cyl(0.035, 0.07, 0.26, 6), { pos: [0, -0.08, 0.2], rot: [Math.PI / 2 + 0.2, 0, 0], color: BONE }));
    p.push(part(sph(0.025), { pos: [-0.06, 0.04, 0.18], color: 0x18120c }), part(sph(0.025), { pos: [0.06, 0.04, 0.18], color: 0x18120c }));
    const off = 0.1;
    [-1, 1].forEach((s) => antler(s, 1.15).forEach((a) => p.push(part(a, { pos: [s * 0.06, 0.12, 0.05 + off * 0], rot: [-0.25, 0, 0] }))));
    return { parts: p, mountBase: true };
  },
  trophy_bison(o) {
    const p = plaque(o, 0.36);
    p.push(part(sph(0.17), { pos: [0, 0, 0.12], scale: [1, 1.15, 1.1], color: BONE }), part(cyl(0.06, 0.11, 0.3, 7), { pos: [0, -0.12, 0.24], rot: [Math.PI / 2 + 0.15, 0, 0], color: BONE }));
    p.push(part(sph(0.03), { pos: [-0.1, 0.05, 0.22], color: 0x18120c }), part(sph(0.03), { pos: [0.1, 0.05, 0.22], color: 0x18120c }));
    [-1, 1].forEach((s) => hornArc(s, 0.32, 0.05, 2.4, 0.08).forEach((h) => p.push(part(h, { pos: [s * 0.1, 0.05, 0.1], rot: [0.1, 0, 0] }))));
    p.push(part(ico(0.2, 1), { pos: [0, 0.16, 0.06], scale: [1.1, 0.6, 0.8], color: 0x3a2818, flat: true }));
    return { parts: p, mountBase: true };
  },
  trophy_ibex(o) {
    const p = plaque(o, 0.3);
    p.push(part(sph(0.1), { pos: [0, -0.02, 0.1], scale: [0.85, 1.15, 0.9], color: BONE }), part(cyl(0.03, 0.06, 0.22, 6), { pos: [0, -0.1, 0.19], rot: [Math.PI / 2 + 0.2, 0, 0], color: BONE }));
    p.push(part(sph(0.022), { pos: [-0.05, 0.02, 0.17], color: 0x18120c }), part(sph(0.022), { pos: [0.05, 0.02, 0.17], color: 0x18120c }));
    [-1, 1].forEach((s) => {
      let prev = null;
      for (let i = 0; i <= 10; i++) {
        const t = i / 10, ang = t * 1.9;
        const pt = [s * (0.06 + Math.sin(ang) * 0.12 + t * 0.06), 0.06 + Math.sin(ang) * 0.34 * (1 - t * 0.2), 0.02 - t * t * 0.55 * 0.5 + 0.1];
        if (prev) p.push(limb(prev, pt, 0.036 * (1 - (i - 1) / 10 * 0.75), 0.036 * (1 - i / 10 * 0.75), 0xcfc4a4, 5));
        for (let k = 0; k < 1 && i > 1 && i < 10 && i % 2 === 0; k++) p.push(part(cyl(0.041 * (1 - t * 0.7), 0.041 * (1 - t * 0.7), 0.012, 5), { pos: pt, rot: [0, 0, s * 0.4], color: 0xb1a682 }));
        prev = pt;
      }
    });
    return { parts: p, mountBase: true };
  },
};

function plaque(o, r) {
  const p = [part(cyl(r, r, 0.08, 14), { pos: [0, 0, 0.0], rot: [Math.PI / 2, 0, 0], color: 0x6d4b2c, jitter: 0.08 }), part(new THREE.TorusGeometry(r, 0.025, 6, 16), { pos: [0, 0, 0.04], color: HIDE })];
  if (o && o.mount === 'stand') {
    p.push(part(cyl(0.07, 0.08, 1.15, 6), { pos: [0, -0.6, -0.08], color: WOOD_D }));
    p.push(part(box(0.5, 0.06, 0.4), { pos: [0, -1.15, -0.08], color: STONE_D }));
  }
  return p;
}

// ---------- catalogue ----------
// kind : tile | wall | beam | free | mount ; box = colliders locaux {cx,cz,hx,hz,y0,y1}
export const PIECES = {
  foundation: { cat: 'struct', name: 'Fondation', kind: 'tile', cost: { wood: 2, stone: 4 }, surface: 'flat', tag: 'floor' },
  floor:      { cat: 'struct', name: 'Sol en bois', kind: 'tile', cost: { wood: 3 }, surface: 'flat', tag: 'floor' },
  wall:       { cat: 'struct', name: 'Mur', kind: 'wall', cost: { wood: 3, fiber: 1 }, boxes: [{ cx: 0, cz: 0, hx: 1, hz: 0.14, y0: 0, y1: WALL_H }], tag: 'wall' },
  halfwall:   { cat: 'struct', name: 'Demi-mur', kind: 'wall', cost: { wood: 2 }, boxes: [{ cx: 0, cz: 0, hx: 1, hz: 0.14, y0: 0, y1: 1.1 }], tag: 'wall' },
  beam:       { cat: 'struct', name: 'Poutre', kind: 'beam', cost: { wood: 2 }, boxes: [{ cx: 0, cz: 0, hx: 0.15, hz: 0.15, y0: 0, y1: 2.4 }], tag: 'beam' },
  roof:       { cat: 'struct', name: 'Toit', kind: 'tile', cost: { wood: 2, fiber: 3 }, tag: 'roof' },
  door:       { cat: 'struct', name: 'Porte', kind: 'wall', cost: { wood: 3, fiber: 2 }, boxes: [{ cx: -0.78, cz: 0, hx: 0.24, hz: 0.14, y0: 0, y1: WALL_H }, { cx: 0.78, cz: 0, hx: 0.24, hz: 0.14, y0: 0, y1: WALL_H }], tag: 'door' },
  window:     { cat: 'struct', name: 'Fenêtre', kind: 'wall', cost: { wood: 3, fiber: 1 }, boxes: [{ cx: 0, cz: 0, hx: 1, hz: 0.14, y0: 0, y1: WALL_H }], tag: 'window' },
  stairs:     { cat: 'struct', name: 'Escalier', kind: 'tile', cost: { wood: 5 }, surface: 'ramp', tag: 'stairs' },

  fire:       { cat: 'furn', name: 'Feu de camp', kind: 'free', cost: { wood: 3, stone: 4 }, boxes: [{ cx: 0, cz: 0, hx: 0.42, hz: 0.42, y0: 0, y1: 0.3 }], tag: 'fire', light: { color: 0xff8a3c, intensity: 34, dist: 16, y: 0.8 } },
  bed:        { cat: 'furn', name: 'Lit de fourrure', kind: 'free', cost: { wood: 4, hide: 2, fiber: 2 }, boxes: [{ cx: 0, cz: 0, hx: 0.5, hz: 1.0, y0: 0, y1: 0.6 }], tag: 'bed' },
  chest:      { cat: 'furn', name: 'Coffre', kind: 'free', cost: { wood: 6, fiber: 1 }, boxes: [{ cx: 0, cz: 0, hx: 0.46, hz: 0.29, y0: 0, y1: 0.7 }], tag: 'chest' },
  table:      { cat: 'furn', name: 'Table', kind: 'free', cost: { wood: 5 }, boxes: [{ cx: 0, cz: 0, hx: 0.55, hz: 0.55, y0: 0, y1: 0.85 }], tag: 'table' },
  chair:      { cat: 'furn', name: 'Siège', kind: 'free', cost: { wood: 2, hide: 1 }, boxes: [{ cx: 0, cz: 0, hx: 0.25, hz: 0.25, y0: 0, y1: 0.5 }], tag: 'chair' },
  workbench:  { cat: 'furn', name: 'Établi', kind: 'free', cost: { wood: 6, stone: 3 }, boxes: [{ cx: 0, cz: 0, hx: 0.85, hz: 0.4, y0: 0, y1: 1.0 }], tag: 'workbench' },

  trophy_deer:  { cat: 'decor', name: 'Trophée : Cerf géant', kind: 'mount', cost: { wood: 2, trophy_deer: 1 }, tag: 'trophy', trophy: true },
  trophy_bison: { cat: 'decor', name: 'Trophée : Bison', kind: 'mount', cost: { wood: 2, trophy_bison: 1 }, tag: 'trophy', trophy: true },
  trophy_ibex:  { cat: 'decor', name: 'Trophée : Bouquetin', kind: 'mount', cost: { wood: 2, trophy_ibex: 1 }, tag: 'trophy', trophy: true },
  bones:      { cat: 'decor', name: 'Ossements', kind: 'free', cost: { bone: 2 }, tag: 'decor' },
  rack:       { cat: 'decor', name: 'Râtelier à lances', kind: 'free', cost: { wood: 3, fiber: 2 }, boxes: [{ cx: 0, cz: 0, hx: 0.8, hz: 0.12, y0: 0, y1: 1.7 }], tag: 'decor' },
  torch:      { cat: 'decor', name: 'Torche', kind: 'free', cost: { wood: 1, fiber: 1 }, boxes: [{ cx: 0, cz: 0, hx: 0.1, hz: 0.1, y0: 0, y1: 1.7 }], tag: 'decor', light: { color: 0xffa04a, intensity: 14, dist: 9, y: 1.85 } },
  banner:     { cat: 'decor', name: 'Étendard en peau', kind: 'free', cost: { hide: 1, wood: 1 }, boxes: [{ cx: 0, cz: 0, hx: 0.1, hz: 0.1, y0: 0, y1: 2.3 }], tag: 'decor' },
  rug:        { cat: 'decor', name: 'Tapis de fourrure', kind: 'free', cost: { hide: 1 }, tag: 'decor', flat: true },
  cairn:      { cat: 'decor', name: 'Cairn totem', kind: 'free', cost: { stone: 3, bone: 1 }, boxes: [{ cx: 0, cz: 0, hx: 0.4, hz: 0.4, y0: 0, y1: 1.3 }], tag: 'decor' },
};
for (const [k, d] of Object.entries(PIECES)) d.id = k;

export const CATEGORIES = [
  { id: 'struct', name: 'Structures' },
  { id: 'furn', name: 'Mobilier' },
  { id: 'decor', name: 'Décoration' },
];

// ---------- fabrique ----------
const geoCache = new Map();
const flameMat = new THREE.MeshBasicMaterial({ color: 0xff9a2a, transparent: true, opacity: 0.92, fog: true, depthWrite: false });
const flameMat2 = new THREE.MeshBasicMaterial({ color: 0xffd25a, transparent: true, opacity: 0.95, fog: true, depthWrite: false });
const flameMat3 = new THREE.MeshBasicMaterial({ color: 0xfff2b0, transparent: true, opacity: 0.95, fog: true, depthWrite: false });

function geometryFor(type, opts) {
  const key = type + '|' + (opts && opts.mount || '');
  let g = geoCache.get(key);
  if (!g) {
    const built = B[type](opts);
    g = merge(built.parts);
    geoCache.set(key, g);
  }
  return g;
}

/** Retourne un THREE.Group. opts.mount : 'wall' | 'stand' pour les trophées/étendards. */
export function buildPiece(type, opts = {}) {
  const def = PIECES[type];
  const group = new THREE.Group();
  group.userData.type = type;
  if (def.kind === 'mount' && def.standBanner) {
    // l'étendard est déjà sur sa hampe : pas de variante murale
    const m = new THREE.Mesh(geometryFor(type, {}), matVC); m.castShadow = m.receiveShadow = true; group.add(m);
    return group;
  }
  const o = def.kind === 'mount' ? { mount: opts.mount || 'stand' } : {};
  const mesh = new THREE.Mesh(geometryFor(type, o), matVC);
  mesh.castShadow = true; mesh.receiveShadow = true;
  if (def.kind === 'mount' && o.mount === 'stand') mesh.position.y = 1.15 + 0.06;
  group.add(mesh);
  group.userData.mount = o.mount || null;
  if (type === 'fire' || type === 'torch') {
    const fl = new THREE.Group();
    const y0 = type === 'fire' ? 0.16 : 1.78;
    const s = type === 'fire' ? 1 : 0.55;
    const cones = [[0.24, 0.7, flameMat], [0.17, 0.55, flameMat2], [0.1, 0.38, flameMat3]].map(([r, h, m]) => {
      const c = new THREE.Mesh(new THREE.ConeGeometry(r * s, h * s, 7, 1, true), m);
      c.position.y = y0 + h * s / 2; fl.add(c); c.userData.h = h * s; return c;
    });
    group.add(fl);
    group.userData.flames = cones;
    group.userData.animated = true;
  }
  return group;
}

export function animatePiece(group, t, phase = 0) {
  const fl = group.userData.flames;
  if (!fl) return;
  fl.forEach((c, i) => {
    const s = 0.85 + 0.25 * Math.sin(t * (9 + i * 3) + phase + i) + 0.1 * Math.sin(t * 23 + i * 5);
    c.scale.set(1 + 0.12 * Math.sin(t * 13 + i), s, 1 + 0.12 * Math.cos(t * 11 + i));
    c.rotation.y = t * (1 + i);
    c.position.y = c.userData.h * s * 0.5 + (group.userData.type === 'fire' ? 0.16 : 1.78) - c.userData.h * 0.5 + c.userData.h * 0.5;
  });
}
