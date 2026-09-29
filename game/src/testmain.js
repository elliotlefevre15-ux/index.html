import * as THREE from 'three';
import { World } from './world/world.js';
import { DayNight } from './systems/daynight.js';
import { CAMP } from './world/config.js';
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, 9/16, 0.1, 700);
const t0 = performance.now();
const world = new World(scene);
const dn = new DayNight(scene, renderer);
console.log('world built ms', performance.now() - t0);
function size(){ const r = canvas.parentElement.getBoundingClientRect(); renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)); renderer.setSize(r.width, r.height, false); camera.aspect=r.width/r.height; camera.updateProjectionMatrix(); }
size(); addEventListener('resize', size);
window.__t = { world, dn, camera, scene, renderer, THREE };
const q = new URLSearchParams(location.search);
dn.hours = +(q.get('h') || 10); dn.frozen = true;
const cx = +(q.get('x') ?? CAMP.x), cz = +(q.get('z') ?? CAMP.z), ang = +(q.get('a') ?? 0.5), hgt = +(q.get('y') ?? 6), dist = +(q.get('d') ?? 12);
function frame(){
  const tt = performance.now()/1000;
  const gy = world.heightAt(cx, cz);
  camera.position.set(cx + Math.sin(ang)*dist, gy + hgt, cz + Math.cos(ang)*dist);
  camera.lookAt(cx, gy + 1.5, cz);
  dn.update(0.016, camera.position.clone().setY(gy), camera);
  world.update(0.016, tt, dn, camera);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
frame();
