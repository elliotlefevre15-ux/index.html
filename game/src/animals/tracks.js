// Traces : empreintes, branches cassées, zones de repos, gouttes de sang. Le joueur les suit pour trouver le gibier.
import * as THREE from 'three';
import { part, merge, limb } from '../systems/geo.js';

const SIZES = { deer: 1.0, bison: 1.5, ibex: 0.65 };

function printGeo() {
  const mk = (x) => {
    const g = new THREE.CircleGeometry(0.068, 7);
    g.rotateX(-Math.PI / 2);
    g.scale(0.7, 1, 1.5);
    g.translate(x, 0, 0);
    return part(g, { color: 0xffffff });
  };
  return merge([mk(-0.033), mk(0.033)]);
}

export class Tracks {
  constructor(scene, world) {
    this.world = world; this.scene = scene;
    const mat = (color, em) => new THREE.MeshStandardMaterial({ color, roughness: 1, emissive: em, emissiveIntensity: 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2, vertexColors: true });
    this.kinds = {
      print: this._mk(printGeo(), mat(0x33261a, 0xffc060), 700),
      blood: this._mk(printGeo(), mat(0x6a1210, 0xff4030), 300),
      branch: this._mk(merge([limb([-0.28, 0.04, -0.1], [0.3, 0.06, 0.12], 0.02, 0.014, 0xd9bd8e), limb([-0.1, 0.05, 0.14], [0.22, 0.05, -0.2], 0.014, 0.01, 0xcfae7c)]), mat(0xffffff, 0xffc060), 120),
      bed: this._mk(merge([part(new THREE.CircleGeometry(0.85, 12).rotateX(-Math.PI / 2), { color: 0xffffff })]), mat(0x8d8a45, 0xffe090), 24),
    };
    this.entries = [];
    this.discovered = 0;
    this.onDiscover = null;
    this._d = new THREE.Object3D();
    this._t = 0;
  }

  _mk(geo, material, max) {
    const m = new THREE.InstancedMesh(geo, material, max);
    m.frustumCulled = false; m.receiveShadow = true; m.count = max;
    const z = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < max; i++) m.setMatrixAt(i, z);
    this.scene.add(m);
    return { mesh: m, free: Array.from({ length: max }, (_, i) => max - 1 - i), max, live: [] };
  }

  add(kind, x, z, yaw, { sp = 'deer', life = 600, mirror = 1 } = {}) {
    const K = this.kinds[kind];
    if (!K) return null;
    let idx = K.free.pop();
    if (idx == null) { // recycler le plus ancien
      const old = K.live.shift();
      idx = old.idx; this.entries.splice(this.entries.indexOf(old), 1);
    }
    const e = { kind, x, z, yaw, sp, life, age: 0, idx, mirror, found: kind !== 'print' || sp !== 'deer' ? true : false, scale: (SIZES[sp] || 1) };
    K.live.push(e); this.entries.push(e);
    this._place(e, 1);
    return e;
  }

  _place(e, s) {
    const K = this.kinds[e.kind];
    const d = this._d;
    const y = this.world.heightAt(e.x, e.z) + 0.035;
    d.position.set(e.x, y, e.z);
    d.rotation.set(0, e.yaw, 0);
    const k = e.scale * s;
    d.scale.set(k * e.mirror, k, k);
    d.updateMatrix();
    K.mesh.setMatrixAt(e.idx, d.matrix);
    K.mesh.instanceMatrix.needsUpdate = true;
    e.y = y;
  }

  update(dt, playerPos, observing, t) {
    // pulsation d'émission en mode observation
    for (const K of Object.values(this.kinds)) {
      K.mesh.material.emissiveIntensity = observing ? 1.1 + 0.6 * Math.sin(t * 5) : 0;
      K.mesh.material.depthTest = !observing; K.mesh.renderOrder = observing ? 30 : 0;
    }
    this._t -= dt;
    if (this._t > 0) return;
    this._t = 0.4;
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const e = this.entries[i];
      e.age += 0.4;
      const left = e.life - e.age;
      if (left <= 0) {
        const K = this.kinds[e.kind];
        this._place(e, 0);
        K.free.push(e.idx); K.live.splice(K.live.indexOf(e), 1); this.entries.splice(i, 1);
        continue;
      }
      if (left < 45) this._place(e, left / 45);
      if (!e.found) {
        const dx = e.x - playerPos.x, dz = e.z - playerPos.z;
        if (dx * dx + dz * dz < 3.6 * 3.6) { e.found = true; this.discovered++; if (this.onDiscover) this.onDiscover(e); }
      }
    }
  }

  /** pistes de cerf visibles (pour la carte) */
  foundDeerTracks() { return this.entries.filter((e) => e.sp === 'deer' && e.found && e.kind === 'print'); }
}
