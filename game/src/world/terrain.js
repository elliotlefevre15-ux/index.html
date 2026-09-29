// Terrain : grille de hauteurs analytique + mesh coloré + texture de profondeur pour l'eau.
import * as THREE from 'three';
import { fbm, noise2, smooth, lerp, clamp } from '../systems/noise.js';
import { WORLD, WATER_Y, RIVER_BED, CAMP, ROCK_ZONE, PATHS, riverX, riverStrength } from './config.js';

const N = WORLD.cells, S = WORLD.size, H = WORLD.half, CELL = S / N;

function ridged(x, z, oct, seed) {
  return 1 - Math.abs(2 * fbm(x, z, oct, seed) - 1);
}

function rawHeight(x, z) {
  let h = 1.4 + (fbm(x * 0.02 + 10, z * 0.02 + 3, 4, 3) - 0.5) * 9;
  h += (fbm(x * 0.09, z * 0.09, 2, 9) - 0.5) * 1.1;
  // montagne au nord
  const m = smooth(-28, -88, z);
  const rg = ridged(x * 0.024 + 50, z * 0.024 + 20, 4, 11);
  h += m * (9 + rg * 27) + smooth(-50, -80, z) * fbm(x * 0.06, z * 0.06, 3, 5) * 6;
  // zone rocheuse
  const dr = Math.hypot(x - ROCK_ZONE.x, z - ROCK_ZONE.z);
  const rz = 1 - smooth(ROCK_ZONE.r * 0.35, ROCK_ZONE.r * 1.3, dr);
  h += rz * (2 + ridged(x * 0.07, z * 0.07, 3, 21) * 9);
  // cuvette : les bords remontent
  const e = smooth(70, 100, Math.max(Math.abs(x), Math.abs(z)));
  h += e * e * 22;
  // pas de cuvettes hors rivière
  if (h < 0.7) h = 0.7 + (h - 0.7) * 0.15;
  // clairière du camp, aplatie
  const dc = Math.hypot(x - CAMP.x, z - CAMP.z);
  h = lerp(h, CAMP.h, 1 - smooth(CAMP.r - 1, CAMP.r + 9, dc));
  // rivière
  const st = riverStrength(z);
  if (st > 0) {
    const dx = Math.abs(x - riverX(z));
    const w = 3.2 + 1.2 * Math.sin(z * 0.09);
    const carve = (1 - smooth(w, w * 2.6 + 2, dx)) * st;
    const bed = RIVER_BED + (1 - smooth(0, w, dx)) * -0.1 + noise2(x * 0.3, z * 0.3, 4) * 0.25;
    h = lerp(h, Math.min(h, bed + smooth(w * 0.7, w * 2.0, dx) * 2.4), carve);
  }
  return h;
}

// distance au sentier le plus proche
const segs = [];
for (const p of PATHS) for (let i = 0; i < p.length - 1; i++) segs.push([p[i][0], p[i][1], p[i + 1][0], p[i + 1][1]]);
export function pathDist(x, z) {
  let best = 1e9;
  for (const s of segs) {
    const dx = s[2] - s[0], dz = s[3] - s[1];
    const t = clamp(((x - s[0]) * dx + (z - s[1]) * dz) / (dx * dx + dz * dz), 0, 1);
    const d = Math.hypot(x - (s[0] + dx * t), z - (s[1] + dz * t));
    if (d < best) best = d;
  }
  // tracé sinueux
  return best + (noise2(x * 0.25, z * 0.25, 8) - 0.5) * 1.2;
}

export class Terrain {
  constructor() {
    this.heights = new Float32Array((N + 1) * (N + 1));
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
      this.heights[j * (N + 1) + i] = rawHeight(-H + i * CELL, -H + j * CELL);
    }
    this.mesh = this._buildMesh();
    this.depthTexture = this._buildDepthTexture();
  }

  heightAt(x, z) {
    const fx = (x + H) / CELL, fz = (z + H) / CELL;
    let i = Math.floor(fx), j = Math.floor(fz);
    if (i < 0) i = 0; else if (i > N - 1) i = N - 1;
    if (j < 0) j = 0; else if (j > N - 1) j = N - 1;
    const tx = clamp(fx - i, 0, 1), tz = clamp(fz - j, 0, 1);
    const w = N + 1, hs = this.heights;
    const a = hs[j * w + i], b = hs[j * w + i + 1], c = hs[(j + 1) * w + i], d = hs[(j + 1) * w + i + 1];
    return a + (b - a) * tx + (c - a) * tz + (a - b - c + d) * tx * tz;
  }

  slopeAt(x, z) {
    const e = 0.8;
    const dx = this.heightAt(x + e, z) - this.heightAt(x - e, z);
    const dz = this.heightAt(x, z + e) - this.heightAt(x, z - e);
    return Math.hypot(dx, dz) / (2 * e);
  }

  isWater(x, z) { return this.heightAt(x, z) < WATER_Y; }
  waterDepth(x, z) { return Math.max(0, WATER_Y - this.heightAt(x, z)); }

  _buildMesh() {
    const geo = new THREE.PlaneGeometry(S, S, N, N);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    const grass1 = new THREE.Color(0x5f8a3a), grass2 = new THREE.Color(0x7d9a45), forest = new THREE.Color(0x3f6a30);
    const dirt = new THREE.Color(0x8a6a44), rock = new THREE.Color(0x8b8578), rock2 = new THREE.Color(0x6d6a63);
    const sand = new THREE.Color(0xb59e73), snow = new THREE.Color(0xeef2f5), mud = new THREE.Color(0x5a4a34), dry = new THREE.Color(0x9b9a52);
    for (let k = 0; k < pos.count; k++) {
      const x = pos.getX(k), z = pos.getZ(k);
      const idx = k;
      const i = idx % (N + 1), j = Math.floor(idx / (N + 1));
      const h = this.heights[j * (N + 1) + i];
      pos.setY(k, h);
      const sl = this.slopeAt(x, z);
      const n1 = fbm(x * 0.05, z * 0.05, 3, 31), n2 = noise2(x * 0.4, z * 0.4, 32);
      c.copy(grass1).lerp(grass2, smooth(0.35, 0.7, n1));
      c.lerp(forest, smooth(0.45, 0.7, fbm(x * 0.035 + 200, z * 0.035 + 9, 4, 1)) * 0.75);
      c.lerp(dry, smooth(0.6, 0.85, fbm(x * 0.03 + 90, z * 0.03, 3, 44)) * 0.5);
      c.multiplyScalar(0.92 + n2 * 0.16);
      // rocheux (pente + altitude)
      const rk = smooth(0.55, 1.1, sl + (n1 - 0.5) * 0.3) + smooth(15, 26, h + n1 * 4) * 0.8;
      c.lerp(rock.clone().lerp(rock2, n2), clamp(rk, 0, 1));
      c.lerp(snow, smooth(34, 44, h + (n1 - 0.5) * 6) * (1 - smooth(1.0, 1.5, sl) * 0.4));
      // berges
      c.lerp(sand, (1 - smooth(-0.1, 0.45, h)) * 0.9);
      c.lerp(mud, (1 - smooth(WATER_Y - 0.3, WATER_Y + 0.05, h)) * 0.8);
      // sentiers
      const pd = pathDist(x, z);
      c.lerp(dirt, (1 - smooth(0.7, 1.7, pd)) * 0.85 * (1 - smooth(0.8, 1.3, sl)));
      col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 }));
    mesh.receiveShadow = true;
    return mesh;
  }

  _buildDepthTexture() {
    const data = new Uint8Array((N + 1) * (N + 1) * 4);
    for (let k = 0; k < this.heights.length; k++) {
      const d = clamp((WATER_Y - this.heights[k]) / 1.6, 0, 1);
      data[k * 4] = Math.round(d * 255);
      data[k * 4 + 1] = 0; data[k * 4 + 2] = 0; data[k * 4 + 3] = 255;
    }
    // texture indexée [j][i] avec j = z
    const tex = new THREE.DataTexture(data, N + 1, N + 1, THREE.RGBAFormat);
    tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.needsUpdate = true;
    return tex;
  }
}
