// Pool de particules (points) : débris, poussière, étincelles, fumée, lucioles, sang.
import * as THREE from 'three';

export class ParticlePool {
  constructor(scene, max = 600, additive = false) {
    this.max = max;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.life = new Float32Array(max);    // restant
    this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.grow = new Float32Array(max);
    this.base = new Float32Array(max);
    this.flick = new Float32Array(max);
    this.cursor = 0;
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.p, 3);
    this.aCol = new THREE.BufferAttribute(this.col, 3);
    this.aSize = new THREE.BufferAttribute(this.size, 1);
    this.aAlpha = new THREE.BufferAttribute(this.alpha, 1);
    for (const a of [this.aPos, this.aCol, this.aSize, this.aAlpha]) a.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos); g.setAttribute('color', this.aCol);
    g.setAttribute('size', this.aSize); g.setAttribute('alpha', this.aAlpha);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, fog: true,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uScale: { value: 600 } }]),
      vertexShader: `
        attribute vec3 color; attribute float size; attribute float alpha;
        varying vec3 vCol; varying float vA; uniform float uScale;
        #include <fog_pars_vertex>
        void main(){ vCol = color; vA = alpha;
          vec4 mvPosition = modelViewMatrix * vec4(position,1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = size * uScale / max(-mvPosition.z, 0.5);
          #include <fog_vertex>
        }`,
      fragmentShader: `
        varying vec3 vCol; varying float vA;
        #include <fog_pars_fragment>
        void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.2, d) * vA;
          if (a < 0.01) discard; gl_FragColor = vec4(vCol, a);
          #include <fog_fragment>
        }`,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 5;
    scene.add(this.points);
  }

  setScale(s) { this.mat.uniforms.uScale.value = s; }

  emit(x, y, z, vx, vy, vz, { color = 0xffffff, size = 0.1, life = 1, gravity = 0, drag = 0, alpha = 1, grow = 0, flicker = 0 } = {}) {
    const i = this.cursor; this.cursor = (this.cursor + 1) % this.max;
    const c = new THREE.Color(color);
    this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.col[i * 3] = c.r; this.col[i * 3 + 1] = c.g; this.col[i * 3 + 2] = c.b;
    this.base[i] = size; this.size[i] = size; this.alpha[i] = alpha;
    this.life[i] = life; this.maxLife[i] = life; this.grav[i] = gravity; this.drag[i] = drag; this.grow[i] = grow; this.flick[i] = flicker;
    this._a0 = this._a0 || new Float32Array(this.max); this._a0[i] = alpha;
  }

  burst(x, y, z, n, opts, spread = 1.5, up = 1.5) {
    for (let k = 0; k < n; k++) {
      this.emit(x, y, z, (Math.random() - 0.5) * spread, Math.random() * up, (Math.random() - 0.5) * spread, {
        ...opts, life: (opts.life || 1) * (0.7 + Math.random() * 0.6), size: (opts.size || 0.1) * (0.7 + Math.random() * 0.6) });
    }
  }

  update(dt, time) {
    const a0 = this._a0 || (this._a0 = new Float32Array(this.max));
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      const k = this.life[i] / this.maxLife[i];
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.v[i * 3] *= dr; this.v[i * 3 + 1] = this.v[i * 3 + 1] * dr - this.grav[i] * dt; this.v[i * 3 + 2] *= dr;
      this.p[i * 3] += this.v[i * 3] * dt; this.p[i * 3 + 1] += this.v[i * 3 + 1] * dt; this.p[i * 3 + 2] += this.v[i * 3 + 2] * dt;
      let f = Math.min(1, k * 3) * Math.min(1, (1 - k) * 6 + 0.001);
      if (this.flick[i]) f *= 0.55 + 0.45 * Math.sin(time * this.flick[i] + i * 1.7);
      this.alpha[i] = Math.max(0, a0[i] * f);
      this.size[i] = this.base[i] * (1 + this.grow[i] * (1 - k));
    }
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aSize.needsUpdate = this.aAlpha.needsUpdate = true;
  }
}
