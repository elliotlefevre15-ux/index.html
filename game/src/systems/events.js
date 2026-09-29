export class Events {
  constructor() { this.m = new Map(); }
  on(n, f) { (this.m.get(n) || this.m.set(n, []).get(n)).push(f); }
  emit(n, ...a) { const l = this.m.get(n); if (l) for (const f of l) f(...a); }
}
