// Petits utilitaires pour fabriquer des géométries procédurales (couleurs de sommets + fusion).
import * as THREE from 'three';
import { mergeGeometries } from 'BufferGeometryUtils';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
const _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1), _c = new THREE.Color();

/** Transforme une géométrie et lui applique une couleur (hex, Color, ou fn(x,y,z)->hex). */
export function part(geo, o = {}) {
  const g = geo.index ? geo.toNonIndexed() : geo.clone();
  const pos = o.pos || [0, 0, 0], rot = o.rot || [0, 0, 0];
  const sc = o.scale == null ? [1, 1, 1] : typeof o.scale === 'number' ? [o.scale, o.scale, o.scale] : o.scale;
  _e.set(rot[0], rot[1], rot[2], 'YXZ');
  _q.setFromEuler(_e);
  _m.compose(_p.set(pos[0], pos[1], pos[2]), _q, _s.set(sc[0], sc[1], sc[2]));
  g.applyMatrix4(_m);
  if (o.flat) g.computeVertexNormals();
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  const pa = g.attributes.position;
  for (let i = 0; i < n; i++) {
    let hex = o.color == null ? 0xffffff : o.color;
    if (typeof hex === 'function') hex = hex(pa.getX(i), pa.getY(i), pa.getZ(i), i);
    _c.set(hex);
    let j = o.jitter ? 1 + (Math.random() - 0.5) * o.jitter : 1;
    col[i * 3] = _c.r * j; col[i * 3 + 1] = _c.g * j; col[i * 3 + 2] = _c.b * j;
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  return g;
}

export function merge(parts) {
  const g = mergeGeometries(parts, false);
  g.computeBoundingSphere();
  g.computeBoundingBox();
  return g;
}

/** Cylindre orienté entre deux points (poutres, branches, cornes). */
export function limb(a, b, r0, r1, color, seg = 6) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const len = va.distanceTo(vb);
  const geo = new THREE.CylinderGeometry(r1, r0, len, seg, 1);
  const g = geo.toNonIndexed();
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), vb.clone().sub(va).normalize());
  const mid = va.clone().add(vb).multiplyScalar(0.5);
  g.applyMatrix4(new THREE.Matrix4().compose(mid, q, new THREE.Vector3(1, 1, 1)));
  const n = g.attributes.position.count;
  const col = new Float32Array(n * 3);
  _c.set(color);
  for (let i = 0; i < n; i++) { col[i * 3] = _c.r; col[i * 3 + 1] = _c.g; col[i * 3 + 2] = _c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

export const matVC = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0 });
export const matVCFlat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, flatShading: true });
export function glowMat(color, opacity = 1) {
  return new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, fog: true });
}
export { THREE };
