import { ITEMS, WEAPONS, RECIPES, BAG_CAPS } from './items.js';

export class Inventory {
  constructor() {
    this.items = { wood: 10, stone: 4, fiber: 6 };
    this.spears = 2;           // lances à lancer disponibles
    this.weapon = 'spear';
    this.bag = 1;
    this.listeners = [];
    this.stats = { gathered: {}, killed: {}, trophies: 0 };
  }
  onChange(fn) { this.listeners.push(fn); }
  _emit() { for (const f of this.listeners) f(); }
  get cap() { return BAG_CAPS[this.bag]; }
  count(id) { return this.items[id] || 0; }
  has(cost) { return Object.entries(cost).every(([k, v]) => this.count(k) >= v); }
  /** Ajoute jusqu'à la capacité ; retourne la quantité réellement ajoutée. */
  add(id, n, track = true) {
    const def = ITEMS[id];
    const cap = def && def.cat === 'trophy' ? 99 : this.cap;
    const cur = this.count(id);
    const put = Math.max(0, Math.min(n, cap - cur));
    if (put > 0) {
      this.items[id] = cur + put;
      if (track) {
        this.stats.gathered[id] = (this.stats.gathered[id] || 0) + put;
        if (def && def.cat === 'trophy') this.stats.trophies++;
      }
      this._emit();
    }
    return put;
  }
  remove(id, n) {
    if (this.count(id) < n) return false;
    this.items[id] -= n;
    if (this.items[id] <= 0) delete this.items[id];
    this._emit();
    return true;
  }
  pay(cost) {
    if (!this.has(cost)) return false;
    for (const [k, v] of Object.entries(cost)) this.remove(k, v);
    return true;
  }
  refund(cost) { for (const [k, v] of Object.entries(cost)) { const c = ITEMS[k] && ITEMS[k].cat === 'trophy' ? 99 : 9999; this.items[k] = Math.min(c, this.count(k) + v); } this._emit(); }
  addSpear(n = 1) { this.spears += n; this._emit(); }
  canCraft(r) { return this.has(r.cost); }
  craft(r) {
    if (!this.pay(r.cost)) return false;
    const g = r.give;
    if (g.item === 'spear') this.spears += g.n;
    if (g.weapon) this.weapon = g.weapon;
    if (g.bag) this.bag = Math.max(this.bag, g.bag);
    this._emit();
    return true;
  }
  get weaponDef() { return WEAPONS[this.weapon]; }
  best(kind) { // meilleure nourriture
    const order = kind === 'water' ? ['berry'] : ['cooked', 'berry', 'meat'];
    return order.find((k) => this.count(k) > 0) || null;
  }
  serialize() { return { items: this.items, spears: this.spears, weapon: this.weapon, bag: this.bag, stats: this.stats }; }
  load(d) {
    if (!d) return;
    this.items = d.items || {}; this.spears = d.spears ?? 2; this.weapon = d.weapon || 'spear'; this.bag = d.bag || 1;
    this.stats = d.stats || this.stats; this._emit();
  }
}
export { RECIPES };
