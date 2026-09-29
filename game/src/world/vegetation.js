// Végétation, rochers, plantes récoltables : tout en InstancedMesh pour rester fluide.
import * as THREE from 'three';
import { part, merge, limb, matVC, matVCFlat } from '../systems/geo.js';
import { mulberry32, fbm, noise2, smooth, clamp } from '../systems/noise.js';
import { WORLD, CAMP, BISON_MEADOW, ROCK_ZONE } from './config.js';
import { pathDist } from './terrain.js';
import { CircleGrid } from './colliders.js';

const rnd = mulberry32(20240607);
const R = (a, b) => a + rnd() * (b - a);

function displace(geo, amt) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const d = Math.sin(x * 3.7 + y * 2.9 + 1.3) * Math.cos(z * 3.1 - y * 2.3) + Math.sin((x + z) * 5.1) * 0.5;
    const k = 1 + d * amt;
    p.setXYZ(i, x * k, y * (1 + d * amt * 0.6), z * k);
  }
  geo.computeVertexNormals();
  return geo;
}

function grassGeo({ blades = 7, h = 0.55, w = 0.07, base = 0x3b6124, tip = 0x9cc04d, spread = 0.18 }) {
  const parts = [];
  const bc = new THREE.Color(base), tc = new THREE.Color(tip);
  for (let i = 0; i < blades; i++) {
    const a = rnd() * Math.PI * 2, d = rnd() * spread;
    const hh = h * (0.6 + rnd() * 0.7), lean = (rnd() - 0.4) * 0.35;
    const g = new THREE.BufferGeometry();
    const ww = w * (0.7 + rnd() * 0.6);
    const v = new Float32Array([
      -ww, 0, 0, ww, 0, 0, -ww * 0.6, hh * 0.55, 0,
      ww, 0, 0, ww * 0.6, hh * 0.55, 0, -ww * 0.6, hh * 0.55, 0,
      -ww * 0.6, hh * 0.55, 0, ww * 0.6, hh * 0.55, 0, 0, hh, 0,
    ]);
    g.setAttribute('position', new THREE.BufferAttribute(v, 3));
    const cols = [];
    for (let k = 0; k < 9; k++) {
      const y = v[k * 3 + 1] / hh;
      const c = bc.clone().lerp(tc, y);
      cols.push(c.r, c.g, c.b);
    }
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(cols), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(27).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(18), 2));
    const m = new THREE.Matrix4().compose(
      new THREE.Vector3(Math.cos(a) * d, 0, Math.sin(a) * d),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(lean, a, 0, 'YXZ')),
      new THREE.Vector3(1, 1, 1));
    g.applyMatrix4(m);
    parts.push(g);
  }
  return merge(parts);
}


function plantMaterial(timeUniform) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = timeUniform;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3]);
        float sw = sin(uTime*1.7 + ip.x*0.35 + ip.z*0.27) * 0.5 + sin(uTime*2.9 + ip.x*0.9)*0.25;
        transformed.x += sw * 0.13 * position.y;
        transformed.z += sw * 0.07 * position.y;
      #endif`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\n normal = normalize(vNormal);');
  };
  return mat;
}

// Feuillage : léger balancement au vent, proportionnel à la hauteur (aucun coût CPU)
function treeMaterial(timeUniform) {
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = timeUniform;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float uTime;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec3 ip = vec3(instanceMatrix[3]);
        float ph = ip.x * 0.31 + ip.z * 0.23;
        float h2 = position.y * position.y;
        transformed.x += sin(uTime * 1.25 + ph) * 0.0022 * h2;
        transformed.z += sin(uTime * 0.95 + ph * 1.7) * 0.0016 * h2;
      #endif`);
  };
  return mat;
}

export class Vegetation {
  constructor(scene, terrain) {
    this.scene = scene; this.terrain = terrain;
    this.nodes = [];            // récoltables
    this.colliders = new CircleGrid(8);
    this.time = { value: 0 };
    this.group = new THREE.Group();
    scene.add(this.group);
    this.buckets = []; this.chunks = [];
    this._dummy = new THREE.Object3D();
    this.trees = [];
    this.plantMat = plantMaterial(this.time);
    this.treeMat = treeMaterial(this.time);
    this._buildTrees();
    this._buildRocks();
    this._buildPlants();
    this._buildGrass();
    this._buildFlowers();
    this._finalize();
  }

  // ---------- helpers ----------
  // Les instances sont regroupées par "chunks" de 25 m : culling par frustum et par distance (fluidité).
  _inst(geo, mat, count, { cast = true, receive = true, range = 120 } = {}) {
    const b = { geo, mat, cast, receive, range, items: [] };
    this.buckets.push(b);
    return b;
  }
  _push(bucket, x, y, z, yaw, sc, color, tilt = 0) {
    const d = this._dummy;
    d.position.set(x, y, z);
    d.rotation.set(tilt, yaw, 0, 'YXZ');
    if (typeof sc === 'number') d.scale.set(sc, sc, sc); else d.scale.set(sc[0], sc[1], sc[2]);
    d.updateMatrix();
    const it = { m: d.matrix.clone(), color: color ? color.clone() : null, x, z, mesh: null, i: 0 };
    bucket.items.push(it);
    return it;
  }
  _setScale(node, s) {
    const d = this._dummy;
    d.position.set(node.x, node.y, node.z);
    d.rotation.set(node.tilt || 0, node.yaw, 0, 'YXZ');
    const k = node.baseScale * s;
    d.scale.set(k, k, k);
    d.updateMatrix();
    const it = node.idx;
    it.mesh.setMatrixAt(it.i, d.matrix);
    it.mesh.instanceMatrix.needsUpdate = true;
  }
  _finalize() {
    const CH = 25;
    this.chunks = [];
    for (const b of this.buckets) {
      const groups = new Map();
      for (const it of b.items) {
        const k = Math.floor((it.x + 100) / CH) * 1000 + Math.floor((it.z + 100) / CH);
        let a = groups.get(k); if (!a) groups.set(k, (a = []));
        a.push(it);
      }
      for (const arr of groups.values()) {
        const m = new THREE.InstancedMesh(b.geo, b.mat, arr.length);
        arr.forEach((it, i) => { m.setMatrixAt(i, it.m); if (it.color) m.setColorAt(i, it.color); it.mesh = m; it.i = i; });
        m.castShadow = b.cast; m.receiveShadow = b.receive;
        m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
        m.computeBoundingSphere();
        m.userData.range = b.range;
        this.group.add(m); this.chunks.push(m);
      }
    }
  }
  cull(focus) {
    const f = focus;
    for (const m of this.chunks) {
      const s = m.boundingSphere;
      const d = Math.hypot(s.center.x - f.x, s.center.z - f.z) - s.radius;
      m.visible = d < m.userData.range;
    }
  }
  _ok(x, z, { maxSlope = 0.8, minH = 0.35, maxH = 26, avoidPath = 0, avoidCamp = 0 } = {}) {
    const t = this.terrain;
    if (Math.abs(x) > WORLD.half - 6 || Math.abs(z) > WORLD.half - 6) return false;
    const h = t.heightAt(x, z);
    if (h < minH || h > maxH) return false;
    if (t.slopeAt(x, z) > maxSlope) return false;
    if (avoidCamp && Math.hypot(x - CAMP.x, z - CAMP.z) < avoidCamp) return false;
    if (avoidPath && pathDist(x, z) < avoidPath) return false;
    return true;
  }

  // ---------- arbres ----------
  _buildTrees() {
    const t = this.terrain;
    // pin
    const pg = [];
    pg.push(part(new THREE.CylinderGeometry(0.16, 0.3, 2.6, 7), { pos: [0, 1.3, 0], color: 0x5a4030, jitter: 0.15 }));
    const layers = [[2.0, 2.5, 2.4], [1.6, 2.3, 3.7], [1.15, 2.1, 4.9], [0.7, 1.7, 6.0]];
    layers.forEach(([r, hgt, y], i) => pg.push(part(displace(new THREE.ConeGeometry(r, hgt, 9, 1), 0.12), {
      pos: [0, y, 0], rot: [0, i * 0.7, 0], flat: true,
      color: (x, yy) => new THREE.Color(0x24462a).lerp(new THREE.Color(0x4c7a3a), clamp((yy - (y - hgt / 2)) / hgt, 0, 1) * 0.8 + (i / 6)), jitter: 0.12 })));
    const pineGeo = merge(pg);
    // chêne
    const og = [];
    og.push(part(new THREE.CylinderGeometry(0.2, 0.36, 2.8, 7), { pos: [0, 1.4, 0], color: 0x6a5238, jitter: 0.15 }));
    og.push(limb([0, 2.2, 0], [0.9, 3.5, 0.3], 0.14, 0.07, 0x6a5238));
    og.push(limb([0, 2.4, 0], [-0.8, 3.4, -0.4], 0.14, 0.07, 0x6a5238));
    [[0, 4.1, 0, 1.75], [1.0, 3.6, 0.3, 1.3], [-1.0, 3.5, -0.4, 1.35], [0.2, 3.5, -1.0, 1.2], [-0.2, 4.9, 0.3, 1.1]].forEach(([x, y, z, r], i) =>
      og.push(part(displace(new THREE.IcosahedronGeometry(r, 1), 0.22), {
        pos: [x, y, z], flat: true, scale: [1, 0.85, 1],
        color: (px, py) => new THREE.Color(0x2f5b26).lerp(new THREE.Color(0x7aa43a), clamp((py - y + r) / (2 * r), 0, 1)), jitter: 0.14 })));
    const oakGeo = merge(og);
    const stumpGeo = merge([part(new THREE.CylinderGeometry(0.2, 0.34, 0.5, 7), { pos: [0, 0.25, 0], color: 0x6b5238 })]);

    const pines = this._inst(pineGeo, this.treeMat, 1000, { range: 200 });
    const oaks = this._inst(oakGeo, this.treeMat, 1000, { range: 170 });
    const stumps = this._inst(stumpGeo, matVC, 1000, { cast: false, range: 90 });
    const tint = new THREE.Color();
    let attempts = 0;
    while (this.trees.length < 1000 && attempts++ < 16000) {
      const x = R(-WORLD.half + 5, WORLD.half - 5), z = R(-WORLD.half + 5, WORLD.half - 5);
      if (!this._ok(x, z, { maxSlope: 0.85, maxH: 25, minH: 0.5, avoidPath: 2.4, avoidCamp: CAMP.r + 3 })) continue;
      if (Math.hypot(x - BISON_MEADOW.x, z - BISON_MEADOW.z) < BISON_MEADOW.r - 2) continue;
      const mask = fbm(x * 0.035 + 200, z * 0.035 + 9, 4, 1);
      const dens = smooth(0.44, 0.62, mask) * 0.95 + 0.05;
      // clairières nommées : zones de repos du cerf gardent quelques arbres mais plus ouvert
      if (rnd() > dens) continue;
      const h = t.heightAt(x, z);
      const pine = h > 11 ? rnd() < 0.95 : rnd() < 0.5;
      const s = (pine ? R(0.8, 1.5) : R(0.85, 1.35)) * (1 - smooth(14, 26, h) * 0.4);
      const yaw = rnd() * 6.28;
      tint.setHSL(R(0.22, 0.29), 0.28, R(0.42, 0.62));
      tint.setRGB(R(0.8, 1.1), R(0.85, 1.15), R(0.8, 1.05));
      const mesh = pine ? pines : oaks;
      const idx = this._push(mesh, x, h - 0.05, z, yaw, s, tint);
      const node = { kind: 'tree', x, y: h - 0.05, z, yaw, baseScale: s, mesh, idx, hits: 3, maxHits: 3, alive: true, respawnAt: 0, r: 0.9 * s + 0.5, stumps };
      node.stumpIdx = this._push(stumps, x, h - 0.05, z, yaw, s * 0.001, null);
      node.col = this.colliders.add(x, z, 0.32 * s + 0.08, node);
      this.trees.push(node); this.nodes.push(node);
    }
  }

  // ---------- rochers ----------
  _buildRocks() {
    const mk = (seedOff, sx, sy, sz) => {
      const g = displace(new THREE.DodecahedronGeometry(1, 1), 0.28 + seedOff * 0.03);
      return merge([part(g, {
        scale: [sx, sy, sz], flat: true,
        color: (x, y) => new THREE.Color(0x7d7a72).lerp(new THREE.Color(0x9a978d), clamp(y * 0.5 + 0.5, 0, 1)).lerp(new THREE.Color(0x5f7345), clamp((y - 0.4) * 0.7, 0, 0.35)), jitter: 0.12 })]);
    };
    const meshes = [this._inst(mk(0, 1, 0.75, 1.1), matVCFlat, 400, { range: 180 }), this._inst(mk(1, 1.2, 0.6, 0.9), matVCFlat, 400, { range: 180 }), this._inst(mk(2, 0.8, 1.1, 0.85), matVCFlat, 400, { range: 180 })];
    const tint = new THREE.Color();
    const put = (x, z, s, gather) => {
      const t = this.terrain, h = t.heightAt(x, z);
      const mesh = meshes[Math.floor(rnd() * 3)];
      const yaw = rnd() * 6.28;
      tint.setRGB(R(0.85, 1.1), R(0.85, 1.1), R(0.85, 1.1));
      const y = h - s * 0.25;
      const idx = this._push(mesh, x, y, z, yaw, s, tint);
      const node = { kind: 'rock', x, y, z, yaw, baseScale: s, mesh, idx, alive: true, respawnAt: 0, gather, hits: 3, maxHits: 3, r: s * 0.9 + 0.6 };
      node.col = this.colliders.add(x, z, s * 0.85, node);
      if (gather) this.nodes.push(node);
      else this._staticRocks = (this._staticRocks || 0) + 1;
    };
    // pierres à ramasser : quelques-unes près du camp
    let n = 0, a = 0;
    while (n < 16 && a++ < 3000) {
      const ang = rnd() * 6.28, d = R(CAMP.r + 2, 34);
      const x = CAMP.x + Math.cos(ang) * d, z = CAMP.z + Math.sin(ang) * d;
      if (!this._ok(x, z, { maxSlope: 0.7, minH: 0.6 })) continue;
      put(x, z, R(0.5, 0.75), true); n++;
    }
    n = 0; a = 0;
    while (n < 90 && a++ < 6000) {
      const x = R(-95, 95), z = R(-95, 95);
      if (!this._ok(x, z, { maxSlope: 1.4, minH: 0.6, maxH: 40, avoidPath: 1.5, avoidCamp: CAMP.r + 2 })) continue;
      put(x, z, R(0.5, 0.85), true); n++;
    }
    // gros rochers / zone rocheuse / pied de montagne
    n = 0; a = 0;
    while (n < 240 && a++ < 20000) {
      const x = R(-95, 95), z = R(-95, 95);
      const dr = Math.hypot(x - ROCK_ZONE.x, z - ROCK_ZONE.z);
      const inZone = dr < ROCK_ZONE.r * 1.1;
      const mtn = z < -38;
      const rock = this.terrain.slopeAt(x, z) > 0.75 && this.terrain.heightAt(x, z) < 34;
      if (!(inZone || (mtn && rnd() < 0.3) || (rock && rnd() < 0.3) || rnd() < 0.02)) continue;
      if (!this._ok(x, z, { maxSlope: 2.2, minH: 0.6, maxH: 40, avoidPath: 2, avoidCamp: CAMP.r + 2 })) continue;
      const big = inZone ? R(1.1, 3.2) : R(0.9, 2.6);
      put(x, z, big, false); n++;
    }
  }

  // ---------- plantes récoltables ----------
  _buildPlants() {
    const t = this.terrain;
    // fibres
    const fiberGeo = grassGeo({ blades: 9, h: 1.0, w: 0.06, base: 0x6c8a3a, tip: 0xd7d47a, spread: 0.25 });
    const fibers = this._inst(fiberGeo, this.plantMat, 200, { cast: false, receive: false, range: 80 });
    // buissons à baies
    const bg = [];
    [[0, 0.5, 0, 0.75], [0.5, 0.4, 0.2, 0.55], [-0.45, 0.4, -0.1, 0.55], [0.1, 0.5, -0.5, 0.5]].forEach(([x, y, z, r]) =>
      bg.push(part(displace(new THREE.IcosahedronGeometry(r, 1), 0.18), { pos: [x, y, z], flat: true, scale: [1, 0.85, 1], color: (px, py) => new THREE.Color(0x2b4d22).lerp(new THREE.Color(0x5f8a35), clamp(py * 0.9, 0, 1)), jitter: 0.15 })));
    for (let i = 0; i < 14; i++) {
      const a = rnd() * 6.28, b = rnd() * 3.1, r = 0.72;
      bg.push(part(new THREE.IcosahedronGeometry(0.06, 0), { pos: [Math.cos(a) * Math.sin(b) * r, 0.55 + Math.cos(b) * 0.45, Math.sin(a) * Math.sin(b) * r], color: 0xb02838 }));
    }
    const bushes = this._inst(merge(bg), matVCFlat, 160, { range: 90 });
    // branches
    const sticks = this._inst(merge([
      limb([-0.5, 0.04, 0], [0.5, 0.06, 0.05], 0.045, 0.03, 0x6d5138),
      limb([-0.15, 0.06, 0.02], [0.3, 0.1, 0.35], 0.03, 0.02, 0x7a5c40),
      limb([0.1, 0.05, 0.02], [0.4, 0.05, -0.3], 0.025, 0.02, 0x5d4530)]), matVC, 240, { receive: false, range: 60 });
    let n = 0, a = 0;
    const place = (kind, mesh, count, opts, mk) => {
      n = 0; a = 0;
      while (n < count && a++ < count * 60) {
        const bias = opts.near && rnd() < opts.near;
        let x, z;
        if (bias) { const an = rnd() * 6.28, d = R(CAMP.r - 2, 40); x = CAMP.x + Math.cos(an) * d; z = CAMP.z + Math.sin(an) * d; }
        else { x = R(-92, 92); z = R(-92, 92); }
        if (!this._ok(x, z, { maxSlope: 0.7, minH: opts.minH ?? 0.5, maxH: opts.maxH ?? 14 })) continue;
        if (opts.forest && fbm(x * 0.035 + 200, z * 0.035 + 9, 4, 1) < opts.forest) continue;
        const h = t.heightAt(x, z), yaw = rnd() * 6.28, s = R(0.85, 1.25);
        const idx = this._push(mesh, x, h - 0.02, z, yaw, s, null);
        this.nodes.push({ kind, x, y: h - 0.02, z, yaw, baseScale: s, mesh, idx, alive: true, respawnAt: 0, hits: 1, maxHits: 1, r: 1.0, ...mk });
        n++;
      }
    };
    place('plant', fibers, 130, { near: 0.5 }, {});
    place('bush', bushes, 80, { near: 0.3, forest: 0.4 }, {});
    place('branch', sticks, 170, { near: 0.55, forest: 0.35 }, {});
  }

  // ---------- herbe décorative ----------
  _buildGrass() {
    const t = this.terrain;
    const mat = this.plantMat;
    const geoA = grassGeo({ blades: 6, h: 0.4, w: 0.045, base: 0x2f5220, tip: 0x79a23c, spread: 0.14 }), geoB = grassGeo({ blades: 5, h: 0.55, w: 0.045, base: 0x2b4a1b, tip: 0x6f9a38, spread: 0.14 });
    const fern = grassGeo({ blades: 4, h: 0.7, w: 0.12, base: 0x274d1f, tip: 0x5d8e39, spread: 0.3 });
    const gA = this._inst(geoA, mat, 16000, { cast: false, receive: false, range: 48 });
    const gB = this._inst(geoB, mat, 6000, { cast: false, receive: false, range: 62 });
    const gF = this._inst(fern, mat, 2200, { cast: false, receive: false, range: 50 });
    const tint = new THREE.Color();
    let a = 0;
    while ((gA.items.length < 16000 || gB.items.length < 6000 || gF.items.length < 2200) && a++ < 160000) {
      const x = R(-96, 96), z = R(-96, 96);
      const h = t.heightAt(x, z);
      if (h < 0.3 || h > 22 || t.slopeAt(x, z) > 0.85) continue;
      const pd = pathDist(x, z);
      if (pd < 1.2) continue;
      const camp = Math.hypot(x - CAMP.x, z - CAMP.z);
      if (camp < CAMP.r - 2 && rnd() < 0.85) continue;
      const forest = fbm(x * 0.035 + 200, z * 0.035 + 9, 4, 1);
      const meadow = Math.hypot(x - BISON_MEADOW.x, z - BISON_MEADOW.z) < BISON_MEADOW.r;
      const roll = rnd();
      const fade = smooth(0.3, 1.3, pd) * (1 - smooth(16, 24, h));
      if (roll > 0.35 + fade * 0.5 && !meadow) continue;
      tint.setRGB(R(0.8, 1.15), R(0.85, 1.15), R(0.75, 1.1));
      const yaw = rnd() * 6.28;
      if (forest > 0.55 && gF.items.length < 2200 && rnd() < 0.3) this._push(gF, x, h - 0.03, z, yaw, R(0.8, 1.4), tint);
      else if (rnd() < 0.5 && gB.items.length < 6000) this._push(gB, x, h - 0.03, z, yaw, R(0.9, 1.6), tint);
      else if (gA.items.length < 16000) this._push(gA, x, h - 0.03, z, yaw, R(0.9, 1.7), tint);
    }
  }

  _buildFlowers() {
    const t = this.terrain;
    const geo = merge([
      part(new THREE.CylinderGeometry(0.008, 0.012, 0.32, 4), { pos: [0, 0.16, 0], color: 0x4f7a2f }),
      part(new THREE.IcosahedronGeometry(0.055, 0), { pos: [0, 0.34, 0], scale: [1, 0.55, 1], color: 0xffffff }),
      part(new THREE.IcosahedronGeometry(0.02, 0), { pos: [0, 0.37, 0], color: 0xf2c038 }),
    ]);
    const mesh = this._inst(geo, matVC, 1200, { cast: false, receive: false, range: 45 });
    const cols = [0xffffff, 0xf5d547, 0xb18adf, 0xe9668b, 0x8fb7ee].map((h) => new THREE.Color(h));
    let a = 0;
    while (mesh.items.length < 1200 && a++ < 60000) {
      const x = R(-92, 92), z = R(-92, 92);
      const h = t.heightAt(x, z);
      const meadow = Math.hypot(x - BISON_MEADOW.x, z - BISON_MEADOW.z) < BISON_MEADOW.r + 4 || Math.hypot(x - CAMP.x, z - CAMP.z) < CAMP.r + 10;
      if (!meadow || h < 0.5 || h > 10 || t.slopeAt(x, z) > 0.5 || pathDist(x, z) < 1) continue;
      // fleurs en bouquets
      if (noise2(x * 0.25, z * 0.25, 77) < 0.55) continue;
      this._push(mesh, x, h - 0.02, z, rnd() * 6.28, R(0.8, 1.5), cols[Math.floor(rnd() * cols.length)]);
    }
  }

  // ---------- gameplay ----------
  update(dt, t) {
    this.time.value = t;
    this._acc = (this._acc || 0) + dt;
    if (this._acc < 1) return;
    this._acc = 0;
    for (const n of this.nodes) if (!n.alive && t > n.respawnAt) this.setAlive(n, true);
  }

  setAlive(n, alive, now = 0) {
    n.alive = alive;
    if (n.kind === 'tree') {
      this._setScale(n, alive ? 1 : 0.0001);
      const d = this._dummy;
      d.position.set(n.x, n.y, n.z); d.rotation.set(0, n.yaw, 0); const s = alive ? 0.0001 : n.baseScale; d.scale.set(s, s, s); d.updateMatrix();
      n.stumpIdx.mesh.setMatrixAt(n.stumpIdx.i, d.matrix); n.stumpIdx.mesh.instanceMatrix.needsUpdate = true;
      n.col.active = alive ? true : true;
      n.col.r = alive ? 0.32 * n.baseScale + 0.08 : 0.3;
    } else if (n.kind === 'rock') {
      this._setScale(n, alive ? 1 : 0.35);
      n.col.r = n.baseScale * (alive ? 0.85 : 0.3);
    } else {
      this._setScale(n, alive ? 1 : 0.0001);
    }
    if (alive) n.hits = n.maxHits;
  }

  /** Coup sur un nœud. Retourne le butin ({item:qty}) quand il est épuisé, sinon null. */
  hit(n, now, mult = 1) {
    if (!n.alive) return null;
    n.hits--;
    if (n.hits > 0) return null;
    const respawn = { tree: 300, rock: 200, plant: 130, bush: 160, branch: 170 }[n.kind];
    n.respawnAt = now + respawn;
    this.setAlive(n, false);
    const q = (a, b) => Math.round(R(a, b) * mult);
    switch (n.kind) {
      case 'tree': return { wood: q(4, 6) };
      case 'rock': return { stone: q(2, 3) };
      case 'plant': return { fiber: q(2, 3) };
      case 'bush': return { berry: q(2, 4) };
      case 'branch': return { wood: q(1, 2) };
    }
    return null;
  }

  nearest(x, z, maxD, filter) {
    let best = null, bd = maxD * maxD;
    for (const n of this.nodes) {
      if (!n.alive) continue;
      if (filter && !filter(n)) continue;
      const dx = n.x - x, dz = n.z - z, d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  }
}
