// Eau : un plan unique dont l'apparence dépend d'une texture de profondeur (rivière, berges, écume).
import * as THREE from 'three';
import { WORLD, WATER_Y } from './config.js';

export function createWater(terrain) {
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    uTime: { value: 0 },
    uDepth: { value: terrain.depthTexture },
    uSize: { value: WORLD.size },
    uSky: { value: new THREE.Color(0xbcd6e8) },
    uShallow: { value: new THREE.Color(0x6fae9a) },
    uDeep: { value: new THREE.Color(0x1f5a72) },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunColor: { value: new THREE.Color(0xffffff) },
    uLight: { value: 1 },
  }]);
  const mat = new THREE.ShaderMaterial({
    uniforms, fog: true, transparent: true, depthWrite: false,
    vertexShader: /* glsl */`
      varying vec3 vWorld;
      #include <fog_pars_vertex>
      void main(){
        vec4 wp = modelMatrix * vec4(position,1.0);
        vWorld = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime, uSize, uLight;
      uniform sampler2D uDepth;
      uniform vec3 uSky, uShallow, uDeep, uSunDir, uSunColor;
      varying vec3 vWorld;
      #include <fog_pars_fragment>
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 uv = (vWorld.xz + uSize*0.5) / uSize;
        float d = texture2D(uDepth, uv).r * 1.6;
        if (d < 0.004) discard;
        vec2 flow = vec2(0.0, uTime*0.9);
        float n1 = vn(vWorld.xz*vec2(2.2,0.9) - flow);
        float n2 = vn(vWorld.xz*vec2(5.0,2.2) - flow*1.6 + 7.0);
        vec3 N = normalize(vec3((n1-0.5)*0.55 + (n2-0.5)*0.3, 1.0, (n2-0.5)*0.4));
        vec3 V = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(dot(N,V),0.0), 3.0);
        vec3 base = mix(uShallow, uDeep, smoothstep(0.0, 1.1, d)) * (0.35 + 0.65*uLight);
        vec3 col = mix(base, uSky, clamp(fres*0.85 + 0.12, 0.0, 1.0));
        vec3 H = normalize(uSunDir + V);
        float spec = pow(max(dot(N,H),0.0), 90.0) * uLight;
        col += uSunColor * spec * 1.4;
        // écume sur les bords + filets
        float edge = 1.0 - smoothstep(0.0, 0.22, d);
        float foam = edge * smoothstep(0.35, 0.75, vn(vWorld.xz*3.5 + vec2(0.0, -uTime*0.4)) + edge*0.35);
        float streak = smoothstep(0.72, 0.9, n1) * 0.18 * smoothstep(0.1, 0.5, d);
        col = mix(col, vec3(0.92,0.96,0.97)*(0.4+0.6*uLight), clamp(foam*0.8 + streak, 0.0, 1.0));
        float alpha = smoothstep(0.0, 0.12, d) * (0.62 + 0.3*smoothstep(0.0, 1.0, d));
        alpha = max(alpha, foam*0.7);
        gl_FragColor = vec4(col, alpha);
        #include <fog_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(WORLD.size, WORLD.size), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = WATER_Y;
  mesh.renderOrder = 2;
  return { mesh, uniforms };
}
