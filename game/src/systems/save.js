// Sauvegarde locale (localStorage) : camp, inventaire, joueur, heure, carte, progression.
const KEY = 'wildhearth_save_v1';

export const Save = {
  has() { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } },
  clear() { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } },
  save(g) {
    try {
      const data = {
        v: 1, t: Date.now(),
        player: g.player.serialize(), inv: g.inventory.serialize(), camp: g.camp.serialize(),
        hours: g.daynight.hours, obj: g.objectives.serialize(),
        map: btoa(String.fromCharCode(...g.mapview.explored.map((v) => (v > 150 ? 1 : 0)))),
      };
      localStorage.setItem(KEY, JSON.stringify(data));
      return true;
    } catch (e) { return false; }
  },
  load(g) {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return false;
      const d = JSON.parse(raw);
      g.inventory.load(d.inv); g.camp.load(d.camp); g.player.load(d.player);
      if (typeof d.hours === 'number') g.daynight.hours = d.hours;
      g.objectives.load(d.obj);
      if (d.map) {
        const s = atob(d.map);
        for (let i = 0; i < s.length && i < g.mapview.explored.length; i++) if (s.charCodeAt(i)) g.mapview.explored[i] = 255;
        g.mapview.dirty = true; g.mapview.syncPois(true);
      }
      return true;
    } catch (e) { return false; }
  },
};
