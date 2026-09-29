// Carte : fond peint depuis le terrain, brouillard de guerre progressif, points d'intérêt révélés à la découverte.
import { WORLD, WATER_Y, POIS, CAMP, DEER_ZONES } from '../world/config.js';
import { clamp } from '../systems/noise.js';

const GRID = 100;                 // cellules de brouillard (2 m)
const S = 400;                    // taille de l'image de fond

export class MapView {
  constructor(world, ctx) {
    this.world = world; this.ctx = ctx;
    this.explored = new Uint8Array(GRID * GRID);
    this.base = document.createElement('canvas'); this.base.width = this.base.height = S;
    this.fog = document.createElement('canvas'); this.fog.width = this.fog.height = GRID;
    this._paintBase();
    this.dirty = true;
    this._t = 0;
    this.deerHint = { x: 0, z: 0, ox: (Math.random() - 0.5) * 16, oz: (Math.random() - 0.5) * 16 };
    this.reveal(CAMP.x, CAMP.z, 34);
  }

  _paintBase() {
    const t = this.world.terrain, c = this.base.getContext('2d');
    const img = c.createImageData(S, S);
    const geo = t.mesh.geometry.attributes.color, N = WORLD.cells;
    for (let py = 0; py < S; py++) for (let px = 0; px < S; px++) {
      const x = (px / S) * WORLD.size - WORLD.half, z = (py / S) * WORLD.size - WORLD.half;
      const h = t.heightAt(x, z);
      const gi = Math.min(N, Math.round((px / S) * N)), gj = Math.min(N, Math.round((py / S) * N));
      const k = gj * (N + 1) + gi;
      let r = geo.getX(k), g = geo.getY(k), b = geo.getZ(k);
      // linéaire -> sRGB approximatif
      r = Math.pow(r, 1 / 2.2); g = Math.pow(g, 1 / 2.2); b = Math.pow(b, 1 / 2.2);
      // relief
      const shade = clamp(1 + (t.heightAt(x - 1.5, z - 1.5) - t.heightAt(x + 1.5, z + 1.5)) * 0.09, 0.62, 1.35);
      r *= shade; g *= shade; b *= shade;
      if (h < WATER_Y) { const d = clamp((WATER_Y - h) / 1.2, 0, 1); r = 0.22 - d * 0.08; g = 0.5 - d * 0.14; b = 0.66 - d * 0.1; }
      const i = (py * S + px) * 4;
      img.data[i] = clamp(r, 0, 1) * 255; img.data[i + 1] = clamp(g, 0, 1) * 255; img.data[i + 2] = clamp(b, 0, 1) * 255; img.data[i + 3] = 255;
    }
    c.putImageData(img, 0, 0);
    // arbres : petites taches sombres
    c.fillStyle = 'rgba(20,50,25,0.32)';
    for (const n of this.world.veg.trees) {
      const px = ((n.x + WORLD.half) / WORLD.size) * S, py = ((n.z + WORLD.half) / WORLD.size) * S;
      c.beginPath(); c.arc(px, py, 2.1 * n.baseScale, 0, 6.3); c.fill();
    }
  }

  reveal(x, z, r) {
    const cx = (x + WORLD.half) / 2, cz = (z + WORLD.half) / 2, rr = r / 2;
    for (let j = Math.max(0, Math.floor(cz - rr)); j <= Math.min(GRID - 1, Math.ceil(cz + rr)); j++)
      for (let i = Math.max(0, Math.floor(cx - rr)); i <= Math.min(GRID - 1, Math.ceil(cx + rr)); i++) {
        const d = Math.hypot(i + 0.5 - cx, j + 0.5 - cz);
        if (d <= rr) { const v = d < rr * 0.7 ? 255 : Math.round(255 * (1 - (d - rr * 0.7) / (rr * 0.3))); if (v > this.explored[j * GRID + i]) { this.explored[j * GRID + i] = v; this.dirty = true; } }
      }
  }
  isExplored(x, z) {
    const i = Math.floor((x + WORLD.half) / 2), j = Math.floor((z + WORLD.half) / 2);
    if (i < 0 || j < 0 || i >= GRID || j >= GRID) return false;
    return this.explored[j * GRID + i] > 150;
  }

  update(dt, player) {
    this._t -= dt;
    if (this._t <= 0) { this._t = 0.5; this.reveal(player.pos.x, player.pos.z, 30); }
    if (this.dirty) {
      const c = this.fog.getContext('2d'), img = c.createImageData(GRID, GRID);
      for (let i = 0; i < GRID * GRID; i++) {
        img.data[i * 4] = 22; img.data[i * 4 + 1] = 26; img.data[i * 4 + 2] = 24; img.data[i * 4 + 3] = 255 - this.explored[i] * 0.97;
      }
      c.putImageData(img, 0, 0);
      this.dirty = false;
    }
  }

  // ---------- dessin ----------
  _poiList() {
    const out = [];
    for (const p of POIS) if (p.always || this.isExplored(p.x, p.z)) out.push(p);
    return out;
  }

  /** ctx2d, taille en px, centre monde, mètres visibles (largeur), rotation caméra */
  draw(g, w, h, { cx, cz, span, rot = 0, full = false, player, objective, camp, tracks }) {
    const ppm = w / span;              // pixels par mètre
    g.save();
    g.fillStyle = '#161a18'; g.fillRect(0, 0, w, h);
    g.translate(w / 2, h / 2); g.rotate(rot);
    g.translate(-cx * ppm, -cz * ppm);
    const size = WORLD.size * ppm, off = -WORLD.half * ppm;
    g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
    g.drawImage(this.base, off, off, size, size);
    g.drawImage(this.fog, off, off, size, size);
    // camp
    if (camp) {
      g.fillStyle = '#e8b45a';
      for (const p of camp.pieces.values()) { if (p.def.tag === 'floor' || p.def.tag === 'stairs') g.fillRect(p.x * ppm - 1.1 * ppm, p.z * ppm - 1.1 * ppm, 2.2 * ppm, 2.2 * ppm); }
    }
    // pistes de cerf
    if (tracks) {
      const found = tracks.foundDeerTracks();
      g.fillStyle = 'rgba(255,220,140,0.9)';
      for (const e of found) { g.beginPath(); g.arc(e.x * ppm, e.z * ppm, Math.max(1.4, 0.6 * ppm), 0, 6.3); g.fill(); }
      if (found.length >= 3 && this.deerHint.z !== undefined) {
        const d = this.ctx.animals.deer;
        if (d) {
          const zx = DEER_ZONES[d.zoneIdx].x + this.deerHint.ox, zz = DEER_ZONES[d.zoneIdx].z + this.deerHint.oz;
          g.strokeStyle = 'rgba(255,200,110,0.9)'; g.lineWidth = Math.max(1.5, ppm * 0.5); g.setLineDash([ppm * 1.6, ppm * 1.2]);
          g.beginPath(); g.arc(zx * ppm, zz * ppm, 20 * ppm, 0, 6.3); g.stroke(); g.setLineDash([]);
          if (full) { g.fillStyle = '#ffd38a'; g.font = `600 ${Math.max(10, ppm * 3.2)}px system-ui`; g.textAlign = 'center'; g.fillText('Zone du Cerf ?', zx * ppm, zz * ppm - 22 * ppm); }
        }
      }
    }
    // points d'intérêt
    for (const p of this._poiList()) {
      const x = p.x * ppm, z = p.z * ppm;
      g.fillStyle = p.always ? '#e8b45a' : '#f4efe2';
      g.strokeStyle = '#1b1f1c'; g.lineWidth = Math.max(1, ppm * 0.35);
      g.beginPath(); g.arc(x, z, Math.max(3, ppm * (full ? 1.5 : 1.3)), 0, 6.3); g.fill(); g.stroke();
      if (full) {
        g.save(); g.rotate(-rot); g.restore();
        g.fillStyle = '#f4efe2'; g.font = `600 ${Math.max(9, ppm * 2.8)}px system-ui`; g.textAlign = 'center';
        g.lineWidth = 3; g.strokeStyle = 'rgba(10,12,10,0.8)'; g.strokeText(p.name, x, z - ppm * 2.4); g.fillText(p.name, x, z - ppm * 2.4);
      }
    }
    // objectif
    if (objective) {
      const x = objective.x * ppm, z = objective.z * ppm, pulse = 1 + 0.25 * Math.sin(performance.now() / 260);
      g.strokeStyle = '#ffdb7a'; g.lineWidth = Math.max(1.5, ppm * 0.5);
      g.beginPath(); g.arc(x, z, Math.max(5, ppm * 3.2) * pulse, 0, 6.3); g.stroke();
      g.fillStyle = '#ffdb7a'; g.beginPath(); g.arc(x, z, Math.max(2, ppm * 0.9), 0, 6.3); g.fill();
    }
    // joueur
    g.save();
    g.translate(player.pos.x * ppm, player.pos.z * ppm); g.rotate(-player.yaw + Math.PI);
    const s = Math.max(6, ppm * (full ? 2.6 : 2.2));
    g.fillStyle = '#ffffff'; g.strokeStyle = '#1b1f1c'; g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(0, -s); g.lineTo(s * 0.7, s * 0.8); g.lineTo(0, s * 0.4); g.lineTo(-s * 0.7, s * 0.8); g.closePath(); g.fill(); g.stroke();
    g.restore();
    g.restore();
  }
}
