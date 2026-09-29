// Génère les vignettes du menu de construction en rendant chaque pièce hors écran (une seule fois).
import * as THREE from 'three';
import { PIECES, buildPiece } from '../building/pieces.js';

export function makeThumbnails(renderer, size = 112) {
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xdfeaff, 0x5a4a38, 1.4));
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.8); sun.position.set(3, 5, 4); scene.add(sun);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  const rt = new THREE.WebGLRenderTarget(size * 2, size * 2, { samples: 4, colorSpace: THREE.SRGBColorSpace });
  const buf = new Uint8Array(size * 2 * size * 2 * 4);
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = size * 2;
  const g = canvas.getContext('2d');
  const out = {};
  const prevTarget = renderer.getRenderTarget();
  const prevClear = renderer.getClearColor(new THREE.Color()); const prevAlpha = renderer.getClearAlpha();
  renderer.setClearColor(0x000000, 0);
  for (const def of Object.values(PIECES)) {
    const grp = buildPiece(def.id, { mount: def.kind === 'mount' ? 'wall' : undefined });
    grp.traverse((o) => { if (o.isMesh) { o.castShadow = false; } });
    scene.add(grp);
    if (grp.userData.animated) grp.userData.flames.forEach((f) => { f.scale.set(1, 1, 1); });
    const box = new THREE.Box3().setFromObject(grp);
    const c = box.getCenter(new THREE.Vector3()), s = box.getSize(new THREE.Vector3());
    const r = Math.max(s.x, s.y, s.z) * 0.5 + 0.1;
    const dist = r / Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * 1.25;
    const dir = new THREE.Vector3(0.75, 0.62, 1).normalize();
    cam.position.copy(c).addScaledVector(dir, dist);
    cam.lookAt(c);
    renderer.setRenderTarget(rt);
    renderer.clear();
    renderer.render(scene, cam);
    renderer.readRenderTargetPixels(rt, 0, 0, size * 2, size * 2, buf);
    const img = g.createImageData(size * 2, size * 2);
    for (let y = 0; y < size * 2; y++) {
      const src = (size * 2 - 1 - y) * size * 2 * 4;
      img.data.set(buf.subarray(src, src + size * 2 * 4), y * size * 2 * 4);
    }
    g.putImageData(img, 0, 0);
    out[def.id] = canvas.toDataURL('image/png');
    scene.remove(grp);
  }
  renderer.setRenderTarget(prevTarget);
  renderer.setClearColor(prevClear, prevAlpha);
  rt.dispose();
  return out;
}
