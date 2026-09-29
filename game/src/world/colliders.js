// Collisions statiques 2D (cercles) via grille spatiale. Sert au joueur et aux animaux.
export class CircleGrid {
  constructor(cell = 8) { this.cell = cell; this.map = new Map(); }
  _key(i, j) { return i * 73856093 ^ j * 19349663; }
  add(x, z, r, ref) {
    const c = { x, z, r, ref, active: true };
    const k = this._key(Math.floor(x / this.cell), Math.floor(z / this.cell));
    let a = this.map.get(k);
    if (!a) this.map.set(k, (a = []));
    a.push(c);
    return c;
  }
  /** vrai si un cercle recouvre le point (x,z) élargi de r */
  hits(x, z, r) {
    const ci = Math.floor(x / this.cell), cj = Math.floor(z / this.cell);
    for (let i = ci - 1; i <= ci + 1; i++) for (let j = cj - 1; j <= cj + 1; j++) {
      const a = this.map.get(this._key(i, j));
      if (!a) continue;
      for (const c of a) if (c.active) { const dx = x - c.x, dz = z - c.z, rr = c.r + r; if (dx * dx + dz * dz < rr * rr) return true; }
    }
    return false;
  }
  /** Repousse pos (objet {x,z}) hors des cercles. Retourne true si contact. */
  resolve(pos, radius) {
    let hit = false;
    const ci = Math.floor(pos.x / this.cell), cj = Math.floor(pos.z / this.cell);
    for (let i = ci - 1; i <= ci + 1; i++) for (let j = cj - 1; j <= cj + 1; j++) {
      const a = this.map.get(this._key(i, j));
      if (!a) continue;
      for (const c of a) {
        if (!c.active) continue;
        const dx = pos.x - c.x, dz = pos.z - c.z, rr = c.r + radius;
        const d2 = dx * dx + dz * dz;
        if (d2 < rr * rr) {
          const d = Math.sqrt(d2) || 0.0001;
          pos.x = c.x + (dx / d) * rr; pos.z = c.z + (dz / d) * rr;
          hit = true;
        }
      }
    }
    return hit;
  }
}
