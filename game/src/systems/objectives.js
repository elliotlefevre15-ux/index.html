// Fil conducteur : chaque étape dit clairement quoi faire ; le monde reste libre.
import { BISON_MEADOW, DEER_TRAIL_START, CAMP, IBEX_ZONES } from '../world/config.js';

export class Objectives {
  constructor(ctx) {
    this.ctx = ctx;
    this.index = 0;
    this.deerSeen = false;
    this._t = 0;
    const g = (id) => ctx.inventory.stats.gathered[id] || 0;
    const c = () => ctx.camp.counts();
    this.steps = [
      { id: 'gather', title: 'Récolte de quoi construire',
        text: () => `Bois ${Math.min(8, g('wood'))}/8 · Pierre ${Math.min(4, g('stone'))}/4 · Fibre ${Math.min(4, g('fiber'))}/4`,
        detail: 'Approche-toi d’un arbre, d’un rocher ou d’une plante et appuie sur E.',
        done: () => g('wood') >= 8 && g('stone') >= 4 && g('fiber') >= 4, target: () => ({ x: CAMP.x + 8, z: CAMP.z - 6 }) },
      { id: 'walls', title: 'Construis ton abri',
        text: () => `Sols ${Math.min(1, c().floor)}/1 · Murs ${Math.min(4, c().wall)}/4`,
        detail: 'Ouvre le mode construction (bouton marteau ou B). Pose un sol, puis 4 murs autour.',
        done: () => c().floor >= 1 && c().wall >= 4, target: () => ({ x: CAMP.x, z: CAMP.z }) },
      { id: 'roof', title: 'Ferme ta cabane',
        text: () => `Toit ${Math.min(1, c().roof)}/1 · Porte ${Math.min(1, c().door)}/1`,
        detail: 'Ajoute un toit sur les murs (il s’aimante à leur sommet) et une porte.',
        done: () => c().roof >= 1 && c().door >= 1, target: () => ({ x: CAMP.x, z: CAMP.z }) },
      { id: 'fire', title: 'Allume un feu',
        text: () => `Feu ${Math.min(1, c().fire)}/1`,
        detail: 'Mobilier → Feu de camp. Il éclaire la nuit et cuit la viande (E).',
        done: () => c().fire >= 1, target: () => ({ x: CAMP.x, z: CAMP.z }) },
      { id: 'bison', title: 'Chasse un bison',
        text: () => `Peaux ${Math.min(2, g('hide'))}/2`,
        detail: 'Direction la clairière à l’est. Reste accroupi (C), observe (Q), clic droit + clic gauche pour lancer la lance. Dépèce avec E.',
        done: () => g('hide') >= 2, target: () => ({ x: BISON_MEADOW.x, z: BISON_MEADOW.z }) },
      { id: 'tracks', title: 'Trouve les empreintes du Cerf géant',
        text: () => (ctx.animals.tracks.discovered > 0 ? 'Empreintes trouvées !' : 'Cherche dans la forêt, à l’ouest du camp'),
        detail: 'Le Cerf géant est rare. Maintiens Q pour observer : les traces brillent.',
        done: () => ctx.animals.tracks.discovered > 0, target: () => ({ x: DEER_TRAIL_START.x, z: DEER_TRAIL_START.z }) },
      { id: 'follow', title: 'Suis la piste',
        text: () => 'Empreintes, branches cassées, lits d’herbe couchée…',
        detail: 'Avance lentement, accroupi. Le cerf t’entend et te voit de loin.',
        done: () => this.deerSeen || (ctx.inventory.stats.killed.deer || 0) > 0, target: null },
      { id: 'hunt', title: 'Abats le Cerf géant',
        text: () => 'Approche-toi sans te faire repérer, puis lance ta lance.',
        detail: 'Un cerf blessé laisse des traces de sang. Rapporte-en le trophée.',
        done: () => ctx.inventory.count('trophy_deer') > 0 || ctx.camp.counts().trophy > 0, target: null },
      { id: 'mount', title: 'Expose ton trophée',
        text: () => 'Construire → Décoration → Trophée : Cerf géant',
        detail: 'Place-le sur un mur de ta cabane ou sur un pied dans ta maison.',
        done: () => ctx.camp.counts().trophy > 0, target: () => ({ x: CAMP.x, z: CAMP.z }) },
      { id: 'ibex', title: 'Monte vers les crêtes',
        text: () => `Bouquetin abattu ${Math.min(1, ctx.inventory.stats.killed.ibex || 0)}/1`,
        detail: 'Les bouquetins vivent sur les rochers, au nord. Ils bondissent et fuient vers les hauteurs : approche par le dessous du vent.',
        done: () => (ctx.inventory.stats.killed.ibex || 0) >= 1, target: () => ({ x: IBEX_ZONES[1].x, z: IBEX_ZONES[1].z }) },
      { id: 'grow', title: 'Agrandis ton camp',
        text: () => `Camp niv. ${Math.min(3, ctx.camp.level().level)}/3 — ${ctx.camp.level().name}`,
        detail: 'Rien n’impose la forme : ' + 'sols, murs et toits à ta guise. Un établi permet de fabriquer de meilleurs sacs et lances.',
        done: () => ctx.camp.level().level >= 3, target: () => ({ x: CAMP.x, z: CAMP.z }) },
      { id: 'master', title: 'Deviens maître du camp',
        text: () => `Camp niv. ${ctx.camp.level().level}/5 — ${ctx.camp.level().name}`,
        get detail() { return ctx.camp.level().next.hint; },
        done: () => ctx.camp.level().level >= 5, target: null },
    ];
  }

  get current() { return this.steps[this.index] || null; }
  get finished() { return this.index >= this.steps.length; }

  update(dt) {
    this._t -= dt;
    if (this._t > 0) return;
    this._t = 0.4;
    const { animals, player } = this.ctx;
    const d = animals.deer;
    if (d && Math.hypot(d.x - player.pos.x, d.z - player.pos.z) < 42 && player.observing) this.deerSeen = true;
    if (d && Math.hypot(d.x - player.pos.x, d.z - player.pos.z) < 20) this.deerSeen = true;
    const s = this.current;
    if (s && s.done()) {
      this.ctx.ui.toast(`✓ ${s.title}`, 'good');
      this.ctx.audio.play('level');
      this.index++;
      const n = this.current;
      if (n) setTimeout(() => this.ctx.ui.toast(n.title, 'info'), 1200);
      else setTimeout(() => this.ctx.ui.toast('Tu es le maître du camp. Construis, chasse, explore librement !', 'good'), 1200);
    }
  }
  serialize() { return { i: this.index, seen: this.deerSeen }; }
  load(d) { if (d) { this.index = d.i || 0; this.deerSeen = !!d.seen; } }
}
