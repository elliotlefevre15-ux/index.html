// Interactions contextuelles (touche E) : récolte, dépeçage, coffre, feu, lit, établi, eau.
import * as THREE from 'three';
import { ITEMS } from '../inventory/items.js';

const NAMES = { tree: 'l’arbre', rock: 'la pierre', plant: 'des fibres', bush: 'les baies', branch: 'une branche' };
const VERB = { tree: 'Couper', rock: 'Casser', plant: 'Cueillir', bush: 'Cueillir', branch: 'Ramasser' };

export class Interact {
  constructor(ctx) {
    this.ctx = ctx; this.target = null; this.cd = 0; this._t = 0;
    // petit halo pulsant au-dessus de la cible
    const cv = document.createElement('canvas'); cv.width = cv.height = 64;
    const g = cv.getContext('2d'), gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,240,190,1)'); gr.addColorStop(0.35, 'rgba(255,214,120,.55)'); gr.addColorStop(1, 'rgba(255,200,90,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    this.marker = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
    this.marker.renderOrder = 40; this.marker.visible = false; this.marker.scale.setScalar(0.7);
    ctx.scene.add(this.marker);
  }

  scan() {
    const { player, world, camp, animals, inventory: inv } = this.ctx;
    const p = player.pos, f = player.forward;
    const cands = [];
    const c = animals.nearestCarcass(p.x, p.z, 3.4);
    if (c) cands.push({ score: 0.2 + Math.hypot(c.x - p.x, c.z - p.z) * 0.1, label: `Dépecer : ${c.animal.def.name}`, run: () => this.skin(c), pos: [c.x, world.heightAt(c.x, c.z) + 1.3, c.z] });
    // pièces du camp
    for (const tag of ['chest', 'fire', 'bed', 'workbench']) {
      const q = camp.nearest(tag, p.x, p.z, 3.0);
      if (!q || Math.abs(q.y - p.y) > 2) continue;
      const d = Math.hypot(q.x - p.x, q.z - p.z);
      let label, run;
      if (tag === 'chest') { label = 'Ouvrir le coffre'; run = () => this.ctx.ui.openChest(q); }
      else if (tag === 'workbench') { label = 'Utiliser l’établi'; run = () => this.ctx.ui.openInventory('craft'); }
      else if (tag === 'fire') {
        if (inv.count('meat') > 0) { label = `Cuire la viande (${inv.count('meat')})`; run = () => this.cook(); }
        else { label = 'Se réchauffer près du feu'; run = () => this.ctx.ui.toast('Le feu crépite. Rapporte de la viande crue pour la cuire.', 'info'); }
      } else { label = this.ctx.daynight.isNight ? 'Dormir jusqu’au matin' : 'Se reposer'; run = () => this.sleep(q); }
      cands.push({ score: d * 0.12, label, run, pos: [q.x, q.y + (tag === 'chest' ? 0.9 : tag === 'fire' ? 1.5 : 1.2), q.z] });
    }
    // eau
    const ax = p.x + f.x * 1.3, az = p.z + f.z * 1.3;
    if (world.terrain.waterDepth(ax, az) > 0.08 || world.terrain.waterDepth(p.x, p.z) > 0.08) {
      cands.push({ score: 0.35, label: 'Boire', run: () => this.drink(), pos: null });
    }
    // ressources
    const n = world.veg.nearest(p.x, p.z, 2.9, (nd) => {
      const dx = nd.x - p.x, dz = nd.z - p.z, d = Math.hypot(dx, dz);
      return d < nd.r + 0.4 && (d < 1.1 || (dx * f.x + dz * f.z) / d > 0.15);
    });
    if (n) {
      const label = `${VERB[n.kind]} ${NAMES[n.kind]}${n.maxHits > 1 ? ` (${n.hits})` : ''}`;
      const hh = { tree: 1.7, rock: 0.5 + n.baseScale * 0.7, plant: 1.2, bush: 1.3, branch: 0.5 }[n.kind];
      cands.push({ score: Math.hypot(n.x - p.x, n.z - p.z) * 0.15, label, run: () => this.gather(n), pos: [n.x, n.y + hh, n.z] });
    }
    cands.sort((a, b) => a.score - b.score);
    this.target = cands[0] || null;
    return this.target;
  }

  update(dt, input) {
    this.cd = Math.max(0, this.cd - dt);
    this._t -= dt;
    if (this._t <= 0) { this._t = 0.08; this.scan(); }
    const tg = this.target;
    if (tg && tg.pos && !this.ctx.builder.active && input.enabled) {
      this.marker.visible = true; this.marker.position.set(tg.pos[0], tg.pos[1], tg.pos[2]);
      this.marker.scale.setScalar(0.55 + 0.12 * Math.sin(this.ctx.time * 5)); this.marker.material.opacity = 0.75 + 0.25 * Math.sin(this.ctx.time * 5);
    } else this.marker.visible = false;
    if (input.enabled && input.pressed('interact')) this.use();
    if (input.enabled && input.pressed('eat')) this.ctx.player.eat();
  }

  use() {
    if (this.cd > 0 || this.ctx.player.dead) return;
    if (!this.target) return;
    this.cd = 0.4;
    this.target.run();
  }

  gather(n) {
    const { player, world, inventory: inv, ui, audio, fx } = this.ctx;
    player.playAction('gather');
    player.yaw = Math.atan2(n.x - player.pos.x, n.z - player.pos.z);
    const kind = n.kind;
    audio.play(kind === 'tree' ? 'chop' : kind === 'rock' ? 'mine' : 'pluck');
    player.addNoise(kind === 'tree' ? 22 : kind === 'rock' ? 26 : 7);
    const col = kind === 'tree' ? 0x5f8a35 : kind === 'rock' ? 0x9a978d : kind === 'bush' ? 0x4f7a2c : 0x8fb04e;
    fx.burst(n.x, n.y + (kind === 'tree' ? 2.4 : 0.6), n.z, kind === 'tree' ? 10 : 7, { color: col, size: kind === 'rock' ? 0.14 : 0.2, life: 1.2, gravity: 3, alpha: 0.9 }, 2.4, 1.6);
    const loot = world.veg.hit(n, this.ctx.time);
    if (loot) {
      const parts = [];
      let full = false;
      for (const [id, q] of Object.entries(loot)) {
        const got = inv.add(id, q);
        if (got < q) full = true;
        if (got > 0) parts.push(`+${got} ${ITEMS[id].name}`);
      }
      ui.toast(parts.length ? parts.join('  ') : 'Sac plein !', full ? 'warn' : 'good');
      if (kind === 'tree') fx.burst(n.x, n.y + 3, n.z, 22, { color: 0x4f7a2c, size: 0.26, life: 1.8, gravity: 2.2, alpha: 0.9 }, 4, 1);
    }
  }

  skin(c) {
    const { animals, inventory: inv, ui, audio, player } = this.ctx;
    player.playAction('gather');
    audio.play('skin');
    const loot = animals.lootCarcass(c);
    const parts = [];
    for (const [id, q] of Object.entries(loot)) {
      const got = inv.add(id, q);
      if (got > 0) parts.push(`+${got} ${ITEMS[id].name}`);
    }
    ui.toast(parts.join('  ') || 'Sac plein !', 'good');
    if (loot.trophy_deer) setTimeout(() => ui.toast('Trophée rare : Bois du Cerf géant ! Expose-le dans ta cabane.', 'good'), 900);
    else if (loot.trophy_bison || loot.trophy_ibex) setTimeout(() => ui.toast('Un trophée ! Il ira bien sur un mur de ta cabane.', 'good'), 900);
    if (loot.meat && !this._meatTip) { this._meatTip = true; setTimeout(() => ui.toast('Astuce : la viande crue rend malade — cuis-la au feu (E).', 'info'), 2200); }
  }

  cook() {
    const { inventory: inv, ui, audio, fx, player } = this.ctx;
    const n = inv.count('meat');
    if (!n) return;
    inv.remove('meat', n);
    inv.add('cooked', n, false);
    player.playAction('gather');
    audio.play('cook');
    ui.toast(`${n} viande cuite${n > 1 ? 's' : ''} — bon appétit (F pour manger)`, 'good');
    fx.burst(player.pos.x + player.forward.x, player.pos.y + 0.9, player.pos.z + player.forward.z, 12, { color: 0xd9d9d9, size: 0.3, life: 1.4, alpha: 0.4, grow: 2 }, 0.6, 1.2);
  }

  drink() {
    const { player, ui } = this.ctx;
    if (player.water > 96) { ui.toast('Tu n’as pas soif', 'info'); return; }
    player.drink();
  }

  sleep(bed) {
    const { daynight, ui, player, audio } = this.ctx;
    const h = daynight.hours;
    const night = h >= 19 || h < 5;
    if (!night) { ui.toast('Tu n’as pas sommeil. Reviens à la nuit tombée.', 'info'); return; }
    audio.play('sleep');
    ui.fade(() => {
      daynight.hours = 6.2;
      player.health = 100; player.food = Math.max(20, player.food - 10); player.water = Math.max(20, player.water - 10);
      ui.toast('Tu te réveilles à l’aube, reposé', 'good');
      this.ctx.save();
    });
  }
}
