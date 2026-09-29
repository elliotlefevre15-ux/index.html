// Cycle jour/nuit : ciel (shader), soleil/lune, hémisphère, brouillard.
import * as THREE from 'three';
import { clamp, lerp, smooth } from './noise.js';

const C = (h) => new THREE.Color(h);
const KEY = {
  day: { top: C(0x2f6fc4), hor: C(0xb7d3e6), fog: C(0xb3cbd6), sun: C(0xfff0d2), hemiSky: C(0xbfd8ff), hemiGround: C(0x5a4d38) },
  dusk: { top: C(0x35437c), hor: C(0xf0a070), fog: C(0xc79a80), sun: C(0xff9852), hemiSky: C(0xc9a4a0), hemiGround: C(0x4a3a32) },
  night: { top: C(0x050b1a), hor: C(0x14233f), fog: C(0x0d1a2e), sun: C(0x8ea8ff), hemiSky: C(0x4a6cae), hemiGround: C(0x141a26) },
};

export class DayNight {
  constructor(scene, renderer) {
    this.scene = scene;
    this.hours = 9.0;
    this.dayLength = 600; // secondes réelles pour 24 h
    this.frozen = false;
    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.nightFactor = 0; this.dayFactor = 1; this.twilight = 0;

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -42; sc.right = 42; sc.top = 42; sc.bottom = -42; sc.near = 1; sc.far = 260;
    this.sun.shadow.bias = -0.0004; this.sun.shadow.normalBias = 0.05;
    scene.add(this.sun, this.sun.target);
    this.moon = new THREE.DirectionalLight(0x8ea8ff, 0.3);
    scene.add(this.moon, this.moon.target);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(this.hemi);
    scene.fog = new THREE.FogExp2(0xb3cbd6, 0.0085);

    this.skyUniforms = {
      uTop: { value: new THREE.Color() }, uHor: { value: new THREE.Color() },
      uSun: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color() },
      uNight: { value: 0 }, uTime: { value: 0 }, uTwi: { value: 0 },
    };
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(450, 32, 16), new THREE.ShaderMaterial({
      uniforms: this.skyUniforms, side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: /* glsl */`
        uniform vec3 uTop, uHor, uSun, uSunColor; uniform float uNight, uTime, uTwi;
        varying vec3 vDir;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float h31(vec3 p){ return fract(sin(dot(p, vec3(127.1,311.7,74.7))) * 43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
          return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
        void main(){
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.2, 1.0);
          vec3 col = mix(uHor, uTop, pow(max(h,0.0), 0.55));
          col = mix(col, uHor*0.8, smoothstep(0.0, -0.2, d.y));
          float sd = max(dot(d, normalize(uSun)), 0.0);
          col += uSunColor * (pow(sd, 6.0)*0.25*(0.4+uTwi) + smoothstep(0.9975, 0.9992, sd) * 1.6) * (1.0 - uNight*0.9);
          // lune
          float md = max(dot(d, -normalize(uSun)), 0.0);
          col += vec3(0.85,0.9,1.0) * smoothstep(0.9988, 0.9994, md) * uNight;
          col += vec3(0.25,0.3,0.45) * pow(md, 40.0) * 0.25 * uNight;
          // étoiles
          if (d.y > 0.0) {
            vec3 sp = floor(d*140.0);
            float st = step(0.9965, h31(sp));
            col += vec3(1.0) * st * uNight * (0.6 + 0.4*h31(sp+3.0));
          }
          // nuages
          if (d.y > 0.02) {
            vec2 cp = d.xz / (d.y + 0.35) * 1.6 + vec2(uTime*0.006, uTime*0.002);
            float c = vn(cp*1.5)*0.55 + vn(cp*3.1)*0.3 + vn(cp*6.3)*0.15;
            float cl = smoothstep(0.52, 0.78, c) * smoothstep(0.02, 0.25, d.y);
            vec3 cc = mix(vec3(1.0), uHor*1.1, 0.35) * (1.0 - uNight*0.85);
            cc = mix(cc, uSunColor, uTwi*0.4);
            col = mix(col, cc, cl*0.75);
          }
          gl_FragColor = vec4(col, 1.0);
        }`,
    }));
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);
    this.apply(0);
  }

  get clockText() {
    const h = Math.floor(this.hours), m = Math.floor((this.hours - h) * 60);
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
  }
  get isNight() { return this.nightFactor > 0.55; }

  update(dt, focus, camera) {
    if (!this.frozen) this.hours = (this.hours + dt * 24 / this.dayLength) % 24;
    this.apply(dt, focus, camera);
  }

  apply(dt, focus, camera) {
    const a = ((this.hours - 6) / 12) * Math.PI;      // 6h lever, 18h coucher
    this.sunDir.set(Math.cos(a) * 0.9, Math.sin(a), 0.42).normalize();
    const sy = this.sunDir.y;
    const day = smooth(-0.08, 0.35, sy);
    const twi = Math.exp(-Math.pow((sy - 0.0) / 0.2, 2));
    this.dayFactor = day; this.nightFactor = 1 - smooth(-0.22, 0.05, sy); this.twilight = twi;
    const mix = (k) => {
      const c = new THREE.Color().copy(KEY.night[k]).lerp(KEY.day[k], day);
      return c.lerp(KEY.dusk[k], twi * 0.85);
    };
    const top = mix('top'), hor = mix('hor'), fog = mix('fog');
    const u = this.skyUniforms;
    u.uTop.value.copy(top); u.uHor.value.copy(hor); u.uSun.value.copy(this.sunDir);
    u.uSunColor.value.copy(KEY.day.sun).lerp(KEY.dusk.sun, twi);
    u.uNight.value = this.nightFactor; u.uTwi.value = twi;
    u.uTime.value += dt;
    this.scene.fog.color.copy(fog);
    this.scene.fog.density = lerp(0.0085, 0.011, this.nightFactor) + twi * 0.001;
    // lumières
    const sunI = smooth(-0.05, 0.3, sy) * 3.4;
    this.sun.color.copy(KEY.day.sun).lerp(KEY.dusk.sun, twi * 0.9);
    this.sun.intensity = sunI;
    this.moon.intensity = this.nightFactor * 1.1;
    this.hemi.intensity = 0.36 + 0.72 * smooth(-0.14, 0.35, sy) + twi * 0.08;
    this.hemi.color.copy(KEY.night.hemiSky).lerp(KEY.day.hemiSky, day).lerp(KEY.dusk.hemiSky, twi * 0.7);
    this.hemi.groundColor.copy(KEY.night.hemiGround).lerp(KEY.day.hemiGround, day);
    this.sun.castShadow = sy > 0.03;
    if (focus) {
      const f = focus;
      this.sun.position.set(f.x + this.sunDir.x * 110, f.y + this.sunDir.y * 110 + 5, f.z + this.sunDir.z * 110);
      this.sun.target.position.set(f.x, f.y, f.z);
      this.moon.position.set(f.x - this.sunDir.x * 80, f.y - this.sunDir.y * 80 + 10, f.z - this.sunDir.z * 80);
      this.moon.target.position.set(f.x, f.y, f.z);
      this.sun.target.updateMatrixWorld(); this.moon.target.updateMatrixWorld();
    }
    if (camera) this.sky.position.copy(camera.position);
  }
}
