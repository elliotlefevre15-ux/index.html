// Assemble le monde : terrain, eau, végétation, cycle jour/nuit, sol lointain.
import * as THREE from 'three';
import { Terrain } from './terrain.js';
import { Vegetation } from './vegetation.js';
import { createWater } from './water.js';

export class World {
  constructor(scene) {
    this.scene = scene;
    this.terrain = new Terrain();
    scene.add(this.terrain.mesh);
    this.veg = new Vegetation(scene, this.terrain);
    this.water = createWater(this.terrain);
    scene.add(this.water.mesh);
    // sol lointain sous le brouillard
    const far = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), new THREE.MeshBasicMaterial({ color: 0x35502c }));
    far.rotation.x = -Math.PI / 2; far.position.y = -3;
    scene.add(far);
    this.far = far;
    this.colliders = this.veg.colliders;
    this.veg.cull({ x: 0, z: 0 });
    this._cullT = 0;
  }

  heightAt(x, z) { return this.terrain.heightAt(x, z); }

  update(dt, t, daynight, camera) {
    this.veg.update(dt, t);
    this._cullT -= dt;
    if (this._cullT <= 0) { this._cullT = 0.2; this.veg.cull(camera.position); }
    const u = this.water.uniforms;
    u.uTime.value = t;
    u.uSky.value.copy(daynight.skyUniforms.uHor.value);
    u.uSunDir.value.copy(daynight.sunDir);
    u.uSunColor.value.copy(daynight.skyUniforms.uSunColor.value);
    u.uLight.value = 0.15 + 0.85 * daynight.dayFactor;
    this.far.material.color.copy(daynight.scene.fog.color).multiplyScalar(0.6);
  }
}
