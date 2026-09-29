// Interface 9:16 : HUD minimaliste, menu de construction, sac, fabrication, carte, coffre. Tout en DOM (prêt pour le tactile).
import * as THREE from 'three';
import { icon } from './icons.js';
import { Save } from '../systems/save.js';
import { ITEMS, RES_ORDER, RECIPES } from '../inventory/items.js';
import { PIECES, CATEGORIES } from '../building/pieces.js';
import { DEFS } from '../animals/animal.js';

const $ = (s, r = document) => r.querySelector(s);
const costChips = (cost, inv, moving = false) => Object.entries(cost).map(([k, v]) => {
  const ok = moving || inv.count(k) >= v;
  return `<span class="chip ${ok ? '' : 'bad'}" title="${ITEMS[k].name}">${icon(ITEMS[k].icon)}<b>${v}</b></span>`;
}).join('');

export class UI {
  constructor(ctx, root) {
    this.ctx = ctx; this.root = root;
    this.modal = null;
    this.thumbs = {};
    this.toasts = [];
    this._acc = 0; this._miniAcc = 0;
    this.labels = new Map();
    this.hintsOn = true;
    this._buildKey = '';
    root.innerHTML = this._template();
    this.el = {
      hp: $('#b-hp i'), food: $('#b-food i'), water: $('#b-water i'), hpN: $('#b-hp b'),
      obj: $('#obj'), objT: $('#obj .ot'), objX: $('#obj .ox'), objD: $('#obj .od'),
      mini: $('#mini'), clock: $('#clock'), camp: $('#camp'), toasts: $('#toasts'), prompt: $('#prompt'), promptT: $('#prompt span'),
      cross: $('#cross'), build: $('#buildui'), sheet: $('#sheet'), tabs: $('#tabs'), cards: $('#cards'), bmsg: $('#bmsg'), btop: $('#btop'),
      inv: $('#inv'), invBody: $('#inv-body'), map: $('#mapm'), mapCv: $('#mapcv'), mapLeg: $('#mapleg'), chest: $('#chest'), chestBody: $('#chest-body'),
      start: $('#start'), death: $('#death'), dmg: $('#dmg'), fade: $('#fade'), resume: $('#resume'), labels: $('#labels'), quick: $('#quick'), hud: $('#hud'),
    };
    this.miniCtx = this.el.mini.getContext('2d');
    this.mapCtx = this.el.mapCv.getContext('2d');
    this._wire();
    this._buildHints();
  }

  _template() {
    return `
    <div id="hud">
      <div id="stats">
        <div class="stat" id="b-hp">${icon('heart')}<div class="bar"><i></i></div><b>100</b></div>
        <div class="stat" id="b-food">${icon('food')}<div class="bar"><i></i></div></div>
        <div class="stat" id="b-water">${icon('water')}<div class="bar"><i></i></div></div>
      </div>
      <div id="obj"><div class="ot"></div><div class="ox"></div><div class="od"></div></div>
      <div id="topright">
        <button id="btn-map" class="mapbtn"><canvas id="mini" width="240" height="240"></canvas><span>${icon('map')} MAP</span></button>
        <div class="row"><button data-act="mute" id="mutebtn" title="Son (N)">${icon('sound')}</button><div id="clock"></div></div>
      </div>
      <div id="camp"></div>
      <div id="toasts"></div>
      <div id="cross"></div>
      <div id="prompt"><kbd>E</kbd><span></span></div>
      <div id="quick">
        <button data-act="eat" title="Manger (F)" data-k="KeyF">${icon('eat')}<i class="key"></i></button>
        <button data-act="crouch" title="Accroupi (C)" data-k="KeyC">${icon('crouch')}<i class="key"></i></button>
        <button data-act="observe" title="Observer (Q, maintenu)" data-k="KeyQ">${icon('eye')}<i class="key"></i></button>
        <button data-act="inventory" class="big" title="Sac (I)" data-k="KeyI">${icon('bag')}<small>SAC</small><i class="key"></i></button>
        <button data-act="build" class="big accent" title="Construire (B)" data-k="KeyB">${icon('build')}<small>BÂTIR</small><i class="key"></i></button>
      </div>
      <div id="labels"></div>
    </div>
    <div id="buildui" class="hidden">
      <div id="btop">
        <button data-act="build" class="pill exit">${icon('close')} Quitter</button>
        <div class="bt-title">CONSTRUCTION<small></small></div>
        <button data-act="snap" class="pill snap">${icon('snap')} <span>Aimant</span></button>
      </div>
      <div id="bside">
        <button data-act="rotate" title="Pivoter (R)">${icon('rotate')}<small>R</small></button>
        <button data-act="grab" title="Déplacer (G)">${icon('move')}<small>G</small></button>
        <button data-act="delete" title="Supprimer (Suppr)">${icon('trash')}<small>Suppr</small></button>
        <button data-act="help" title="Aide">${icon('hint')}<small>H</small></button>
      </div>
      <div id="bmsg"></div>
      <div id="sheet"><div id="tabs"></div><div id="cards"></div></div>
    </div>
    <div class="modal hidden" id="inv"><div class="panel"><div class="ph"><div id="inv-tabs"></div><button data-close class="x">${icon('close')}</button></div><div id="inv-body"></div></div></div>
    <div class="modal hidden" id="mapm"><div class="panel"><div class="ph"><h3>Carte</h3><button data-close class="x">${icon('close')}</button></div><canvas id="mapcv" width="720" height="720"></canvas><div id="mapleg"></div></div></div>
    <div class="modal hidden" id="chest"><div class="panel"><div class="ph"><h3>Coffre</h3><button data-close class="x">${icon('close')}</button></div><div id="chest-body"></div></div></div>
    <div id="resume" class="hidden"><div>Clique pour reprendre — souris capturée<br><small>Échap pour libérer la souris</small></div></div>
    <div id="dmg"></div><div id="fade"></div>
    <div id="death" class="hidden"><div>Tu t’évanouis…<small>Tu te réveilles au camp.</small></div></div>
    <div id="start"></div>`;
  }

  // ---------- câblage ----------
  _wire() {
    const g = this.ctx;
    this.root.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      if (b.dataset.act) { g.audio.play('click'); this.action(b.dataset.act); }
      if (b.hasAttribute('data-close')) this.closeModal();
    });
    this.root.addEventListener('mousedown', (e) => e.stopPropagation());
    $('#btn-map').addEventListener('click', () => this.openMap());
    // relâche du bouton "observer" tactile
    const ob = this.root.querySelector('[data-act="observe"]');
    ob.addEventListener('pointerdown', (e) => { e.preventDefault(); g.player.observeHold = true; });
    addEventListener('pointerup', () => { g.player.observeHold = false; });
    ob.addEventListener('click', (e) => e.stopPropagation());
    g.inventory.onChange(() => { this._invDirty = true; });
    g.builder.onChange(() => { this._buildDirty = true; });
    g.camp.onChange(() => { this._buildDirty = true; this._invDirty = true; });
    g.input.onLockChange = (locked) => { this._lockChanged = true; };
  }

  action(name) {
    const g = this.ctx;
    switch (name) {
      case 'eat': g.player.eat(); break;
      case 'crouch': g.player.crouching = !g.player.crouching; break;
      case 'observe': break;
      case 'inventory': this.modal === 'inv' ? this.closeModal() : this.openInventory('bag'); break;
      case 'build': g.toggleBuild(); break;
      case 'snap': g.builder.toggleSnap(); break;
      case 'rotate': g.builder.rotate(); break;
      case 'grab': g.builder.grab(); break;
      case 'delete': g.builder.deleteHover(); break;
      case 'help': this.toggleHints(); break;
      case 'mute': { const m = g.audio.toggleMute(); $('#mutebtn').innerHTML = icon(m ? 'mute' : 'sound'); break; }
    }
  }

  // ---------- panneaux ----------
  get modalOpen() { return !!this.modal; }
  _open(name, el) {
    this.closeModal(true);
    this.modal = name; el.classList.remove('hidden');
    this.ctx.input.enabled = false; this.ctx.input.releaseLock();
    this.ctx.audio.play('open');
  }
  closeModal(silent = false) {
    if (!this.modal) return;
    for (const e of [this.el.inv, this.el.map, this.el.chest]) e.classList.add('hidden');
    this.modal = null; this.chestPiece = null;
    this.ctx.input.enabled = true;
    if (!silent) { this.ctx.audio.play('click'); if (!this.ctx.builder.active && this.ctx.started) this.ctx.input.requestLock(); }
  }

  openInventory(tab = 'bag') {
    this.invTab = tab; this._open('inv', this.el.inv); this.renderInv();
  }
  renderInv() {
    const g = this.ctx, inv = g.inventory, tab = this.invTab;
    const tabs = [['bag', 'Sac'], ['craft', 'Fabrication'], ['trophy', 'Trophées']];
    $('#inv-tabs').innerHTML = tabs.map(([k, n]) => `<button class="tab ${tab === k ? 'on' : ''}" data-tab="${k}">${n}</button>`).join('');
    $('#inv-tabs').querySelectorAll('.tab').forEach((b) => b.onclick = () => { this.invTab = b.dataset.tab; this.renderInv(); g.audio.play('click'); });
    let h = '';
    if (tab === 'bag') {
      const cap = inv.cap;
      h += `<div class="sub">Capacité par ressource : <b>${cap}</b> · sac ${['', 'simple', 'en peau', 'de chasseur'][inv.bag]}</div><div class="grid">`;
      for (const id of RES_ORDER) {
        const n = inv.count(id), d = ITEMS[id];
        h += `<div class="cell ${n ? '' : 'empty'}">${icon(d.icon)}<div class="cn">${d.name}</div><div class="cv"><b>${n}</b><small>/${cap}</small></div>${d.cat === 'food' && n ? `<button class="mini" data-eat="${id}">Manger</button>` : ''}</div>`;
      }
      h += '</div>';
      const w = inv.weaponDef;
      h += `<div class="weapon">${icon('spear')}<div><div class="wn">${w.name}</div><div class="ws">Mêlée ${w.melee} · Lancer ${w.throw} · <b>${inv.spears}</b> lance${inv.spears > 1 ? 's' : ''} en réserve</div></div></div>`;
      h += `<div class="tip">Clic droit maintenu : viser · clic gauche : lancer. Une lance lancée se ramasse en marchant dessus.</div><button class="mini danger" data-reset>Nouvelle partie…</button>`;
    } else if (tab === 'craft') {
      const bench = g.camp.nearest('workbench', g.player.pos.x, g.player.pos.z, 7);
      h += `<div class="sub">${bench ? 'Établi à proximité ✓' : 'Certaines recettes demandent un établi (Mobilier) à moins de 7 m'}</div><div class="recipes">`;
      for (const r of RECIPES) {
        const can = inv.canCraft(r), need = r.bench && !bench;
        const owned = (r.give.bag && inv.bag >= r.give.bag) || (r.give.weapon && inv.weapon === r.give.weapon);
        h += `<div class="recipe"><div class="rt"><b>${r.name}</b><small>${r.desc}</small></div><div class="rc">${costChips(r.cost, inv)}</div><button class="mini ${can && !need && !owned ? 'go' : ''}" data-craft="${r.id}" ${can && !need && !owned ? '' : 'disabled'}>${owned ? 'Possédé' : need ? 'Établi requis' : 'Fabriquer'}</button></div>`;
      }
      h += '</div>';
    } else {
      const tro = Object.keys(ITEMS).filter((k) => ITEMS[k].cat === 'trophy');
      h += `<div class="sub">Trophées exposés dans ton camp : <b>${g.camp.counts().trophy}</b></div><div class="grid">`;
      for (const id of tro) {
        const n = inv.count(id);
        h += `<div class="cell ${n ? 'rare' : 'empty'}">${icon('trophy')}<div class="cn">${ITEMS[id].name}</div><div class="cv"><b>${n}</b></div><small class="rar">${ITEMS[id].rare}</small></div>`;
      }
      h += `</div><div class="tip">Place-les dans ta cabane : Construire → Décoration. Un trophée se pose sur un mur ou sur un pied.</div>`;
    }
    this.el.invBody.innerHTML = h;
    const rs = this.el.invBody.querySelector('[data-reset]');
    if (rs) rs.onclick = () => { if (confirm('Effacer la sauvegarde et recommencer ?')) { Save.clear(); this.ctx.started = false; location.reload(); } };
    this.el.invBody.querySelectorAll('[data-eat]').forEach((b) => b.onclick = () => { const id = b.dataset.eat; g.inventory.best('food'); this._eatSpecific(id); });
    this.el.invBody.querySelectorAll('[data-craft]').forEach((b) => b.onclick = () => {
      const r = RECIPES.find((x) => x.id === b.dataset.craft);
      if (g.inventory.craft(r)) { g.audio.play('craft'); this.toast(`${r.name} fabriquée`, 'good'); this.renderInv(); }
    });
  }
  _eatSpecific(id) {
    const g = this.ctx, inv = g.inventory, p = g.player;
    const d = ITEMS[id];
    if (!inv.remove(id, 1)) return;
    p.food = Math.min(100, p.food + d.food); p.water = Math.min(100, p.water + (d.water || 0));
    if (d.hurt) { p.health -= d.hurt; this.toast('Viande crue : mieux vaut la cuire !', 'warn'); }
    if (d.heal) p.health = Math.min(100, p.health + d.heal);
    g.audio.play('eat'); this.renderInv();
  }

  openMap() {
    this._open('map', this.el.map);
    const legend = this.ctx.mapview._poiList().map((p) => `<span>${icon(p.icon)} ${p.name}</span>`).join('');
    this.el.mapLeg.innerHTML = legend + `<span class="dim">Les zones inconnues se dévoilent en explorant.</span>`;
    this.drawMap();
  }
  drawMap() {
    const g = this.ctx, cv = this.el.mapCv;
    const obj = g.objectives.current && g.objectives.current.target ? g.objectives.current.target() : null;
    g.mapview.draw(this.mapCtx, cv.width, cv.height, { cx: 0, cz: 0, span: 200, rot: 0, full: true, player: g.player, objective: obj, camp: g.camp, tracks: g.animals.tracks });
  }

  openChest(piece) {
    this.chestPiece = piece; this._open('chest', this.el.chest); this.renderChest();
  }
  renderChest() {
    const g = this.ctx, p = this.chestPiece; if (!p) return;
    const store = p.data.items || (p.data.items = {});
    const inv = g.inventory;
    const list = (items, kind) => Object.entries(items).filter(([, n]) => n > 0).map(([id, n]) => `<button class="cell mv" data-${kind}="${id}">${icon(ITEMS[id].icon)}<div class="cn">${ITEMS[id].name}</div><div class="cv"><b>${n}</b></div></button>`).join('') || '<div class="dim pad">Vide</div>';
    this.el.chestBody.innerHTML = `<div class="cols"><div><h4>Sac <small>→ déposer</small></h4><div class="grid one">${list(inv.items, 'put')}</div></div><div><h4>Coffre <small>← reprendre</small></h4><div class="grid one">${list(store, 'take')}</div></div></div><button class="mini go wide" data-all>Tout déposer</button>`;
    this.el.chestBody.querySelectorAll('[data-put]').forEach((b) => b.onclick = () => { const id = b.dataset.put, n = inv.count(id); inv.remove(id, n); store[id] = (store[id] || 0) + n; g.audio.play('click'); this.renderChest(); });
    this.el.chestBody.querySelectorAll('[data-take]').forEach((b) => b.onclick = () => { const id = b.dataset.take, n = store[id] || 0; const got = inv.add(id, n, false); store[id] = n - got; if (got < n) this.toast('Sac plein', 'warn'); g.audio.play('click'); this.renderChest(); });
    this.el.chestBody.querySelector('[data-all]').onclick = () => { for (const id of Object.keys(inv.items)) { if (ITEMS[id].cat === 'trophy') continue; const n = inv.count(id); inv.remove(id, n); store[id] = (store[id] || 0) + n; } g.audio.play('click'); this.renderChest(); };
  }

  // ---------- messages ----------
  toast(msg, kind = 'info') {
    const d = document.createElement('div');
    d.className = 'toast ' + kind; d.textContent = msg;
    this.el.toasts.appendChild(d);
    setTimeout(() => d.classList.add('out'), 3200);
    setTimeout(() => d.remove(), 3700);
    while (this.el.toasts.children.length > 5) this.el.toasts.firstChild.remove();
  }
  flashDamage() { const d = this.el.dmg; d.style.opacity = 0.9; setTimeout(() => { d.style.opacity = 0; }, 90); }
  showDeath() { this.el.death.classList.remove('hidden'); }
  hideDeath() { this.el.death.classList.add('hidden'); }
  fade(mid) {
    const f = this.el.fade; f.style.opacity = 1;
    setTimeout(() => { mid(); f.style.opacity = 0; }, 1300);
  }

  // ---------- aide clavier ----------
  _buildHints() {
    const i = this.ctx.input;
    const K = (c) => `<kbd>${i.keyLabel(c)}</kbd>`;
    const el = document.createElement('aside');
    el.id = 'hints';
    el.innerHTML = `<h4>Contrôles <button data-h>${icon('close')}</button></h4>
      <div class="hg"><b>Explorer</b>
      <p>${K('KeyW')}${K('KeyA')}${K('KeyS')}${K('KeyD')} Se déplacer</p><p>Souris — Caméra</p>
      <p>${K('ShiftLeft')} Courir · ${K('KeyC')} S'accroupir · ${K('Space')} Sauter</p>
      <p>${K('KeyE')} Interagir (récolter, dépecer, boire…)</p>
      <p><kbd>Clic G</kbd> Coup de lance</p><p><kbd>Clic D</kbd> maintenu : viser, puis <kbd>Clic G</kbd> lancer</p>
      <p>${K('KeyQ')} maintenu — Observer (traces & animaux)</p>
      <p>${K('KeyF')} Manger · ${K('KeyI')} Sac · ${K('KeyM')} Carte</p></div>
      <div class="hg"><b>Construction (${K('KeyB')})</b>
      <p><kbd>Clic G</kbd> Poser · <kbd>Clic D</kbd> Annuler</p><p><kbd>Clic D</kbd> glisser — Tourner la caméra</p>
      <p>${K('KeyR')} Pivoter · ${K('KeyG')} Déplacer · ${K('Delete')} Supprimer</p>
      <p>${K('KeyT')} Aimant on/off · <kbd>Molette</kbd> Zoom</p><p>${K('PageUp')}${K('PageDown')} Hauteur · <kbd>1-9</kbd> Pièces · ${K('Escape')} Quitter</p></div>
      <div class="hg"><p>${K('KeyH')} Masquer l'aide · ${K('KeyN')} Son</p></div>`;
    document.getElementById('stage').appendChild(el);
    this.hintsEl = el;
    el.querySelector('[data-h]').onclick = () => this.toggleHints();
  }
  toggleHints() { this.hintsOn = !this.hintsOn; this.hintsEl.classList.toggle('off', !this.hintsOn); }

  // ---------- écran d'accueil ----------
  showStart(hasSave, onPlay) {
    const s = this.el.start;
    s.innerHTML = `<div class="sbox"><div class="logo">WILDHEARTH</div><div class="tag">Chasse · Survie · Construction — Cro-Magnon</div>
      <div class="how"><div>${icon('tree')}<span>Récolte bois, pierre, fibres</span></div><div>${icon('build')}<span>Bâtis ta cabane pièce par pièce</span></div><div>${icon('eye')}<span>Piste, observe, chasse</span></div><div>${icon('trophy')}<span>Expose le trophée du Cerf géant</span></div></div>
      <button class="play" id="play">${hasSave ? 'CONTINUER' : 'JOUER'}</button>${hasSave ? '<button class="ghost" id="newgame">Nouvelle partie</button>' : ''}
      <div class="fine">La souris sera capturée pour la caméra — Échap pour la libérer.<br>Clavier AZERTY et QWERTY pris en charge.</div></div>`;
    s.classList.remove('hidden');
    $('#play', s).onclick = () => { s.classList.add('hidden'); onPlay(false); };
    const ng = $('#newgame', s); if (ng) ng.onclick = () => { s.classList.add('hidden'); onPlay(true); };
  }

  // ---------- construction (rendu) ----------
  _renderBuild() {
    const g = this.ctx, b = g.builder, inv = g.inventory;
    this.el.tabs.innerHTML = CATEGORIES.map((c) => `<button class="tab ${b.category === c.id ? 'on' : ''}" data-cat="${c.id}">${c.name}</button>`).join('');
    this.el.tabs.querySelectorAll('[data-cat]').forEach((t) => t.onclick = () => { b.setCategory(t.dataset.cat); g.audio.play('click'); });
    const list = b.list();
    let h = `<button class="card sel ${b.tool === 'select' ? 'on' : ''}" data-tool="select">${icon('select')}<div class="cname">Sélection</div><div class="ccost"><small>survole · déplace · supprime</small></div></button>`;
    list.forEach((d, i) => {
      h += `<button class="card ${b.tool === d.id ? 'on' : ''}" data-tool="${d.id}"><img src="${this.thumbs[d.id] || ''}" alt=""><div class="cname">${d.name}<i>${i + 1}</i></div><div class="ccost">${costChips(d.cost, inv)}</div></button>`;
    });
    this.el.cards.innerHTML = h;
    this.el.cards.querySelectorAll('[data-tool]').forEach((c) => c.onclick = () => { g.audio.play('click'); b.selectTool(c.dataset.tool); });
    const lv = g.camp.level();
    $('.bt-title small', this.el.btop).textContent = `Niv. ${lv.level} · ${lv.name}`;
    this.el.btop.querySelector('.snap').classList.toggle('on', b.snap);
    this.el.btop.querySelector('.snap span').textContent = b.snap ? 'Aimant' : 'Libre';
  }

  // ---------- boucle ----------
  update(dt, cam) {
    const g = this.ctx, p = g.player;
    this._keyT = (this._keyT || 0) - dt;
    if (this._keyT <= 0) { this._keyT = 1.5; this.root.querySelectorAll('[data-k]').forEach((b) => { b.querySelector('.key').textContent = g.input.keyLabel(b.dataset.k); }); }
    // barres
    this.el.hp.style.width = p.health + '%'; this.el.hpN.textContent = Math.ceil(p.health);
    this.el.food.style.width = p.food + '%'; this.el.water.style.width = p.water + '%';
    $('#b-food').classList.toggle('low', p.food < 20); $('#b-water').classList.toggle('low', p.water < 20); $('#b-hp').classList.toggle('low', p.health < 30);
    // horloge & camp
    const dn = g.daynight;
    this.el.clock.innerHTML = `${icon(dn.isNight ? 'moon' : 'sun')} ${dn.clockText}`;
    const lv = g.camp.level();
    this.el.camp.innerHTML = `<b>Camp niv. ${lv.level}</b> ${lv.name}`;
    // objectif
    const o = g.objectives.current;
    if (g.objectives.index !== this._objIdx) { this._objIdx = g.objectives.index; this._objT = 0; }
    this._objT += dt; this.el.obj.classList.toggle('compact', this._objT > 30);
    if (o) { this.el.objT.textContent = o.title; this.el.objX.textContent = o.text(); this.el.objD.textContent = o.detail; this.el.obj.classList.remove('hidden'); }
    else { this.el.objT.textContent = 'Maître du camp'; this.el.objX.textContent = `Camp : ${lv.name}`; this.el.objD.textContent = lv.level < 5 ? lv.hint : 'Continue de construire et de chasser librement.'; }
    // mode
    const building = g.builder.active;
    this.el.build.classList.toggle('hidden', !building);
    this.el.hud.classList.toggle('building', building);
    this.el.hud.classList.toggle('observing', p.observing);
    this.el.cross.style.display = (!building && g.input.locked && !this.modal) ? 'block' : 'none';
    this.el.cross.classList.toggle('aim', p.aiming);
    const needResume = g.started && this.el.start.classList.contains('hidden') && !building && !this.modal && !g.input.locked && !p.dead;
    this.el.resume.classList.toggle('hidden', !needResume);
    // prompt
    const t = g.interact.target;
    const showPrompt = t && !building && !this.modal && !p.dead;
    this.el.prompt.style.opacity = showPrompt ? 1 : 0;
    if (showPrompt) { this.el.promptT.textContent = t.label; $('kbd', this.el.prompt).textContent = g.input.keyLabel('KeyE'); }
    // rendus événementiels
    if (this._invDirty && this.modal === 'inv') { this._invDirty = false; this.renderInv(); }
    if (this._buildDirty && building) { this._buildDirty = false; this._renderBuild(); }
    if (building) this._buildMessage();
    // mini-carte
    this._miniAcc += dt;
    if (this._miniAcc > 0.05) {
      this._miniAcc = 0;
      const obj = o && o.target ? o.target() : null;
      g.mapview.draw(this.miniCtx, 240, 240, { cx: p.pos.x, cz: p.pos.z, span: 70, rot: cam.yaw, player: p, objective: obj, camp: g.camp, tracks: g.animals.tracks });
    }
    if (this.modal === 'map') { this._mapAcc = (this._mapAcc || 0) + dt; if (this._mapAcc > 0.2) { this._mapAcc = 0; this.drawMap(); } }
    this._labels(cam.camera);
  }

  _buildMessage() {
    const b = this.ctx.builder, inv = this.ctx.inventory;
    const d = PIECES[b.tool];
    let m = '', cls = '';
    if (b.tool === 'select') m = b.hover ? `${b.hover.def.name} — <b>G</b> déplacer · <b>Suppr</b> retirer${b.hover.def.tag === 'chest' ? ' · clic : ouvrir' : ''}` : 'Sélection : vise une pièce pour la déplacer ou la retirer';
    else if (b.reason) { m = b.reason; cls = 'bad'; }
    else if (d) m = `${b.moving ? 'Déplacer' : 'Poser'} : ${d.name} · <b>R</b> pivoter · <b>T</b> aimant ${b.snap ? 'actif' : 'coupé'} · clic droit annuler`;
    const html = `<span class="${cls}">${m}</span>`;
    if (this._lastMsg !== html) { this.el.bmsg.innerHTML = html; this._lastMsg = html; }
  }

  _labels(camera) {
    const g = this.ctx, p = g.player;
    const on = p.observing && !g.builder.active;
    this.el.labels.style.display = on ? 'block' : 'none';
    if (!on) return;
    const v = new THREE.Vector3();
    const seen = new Set();
    for (const a of g.animals.all) {
      const d = Math.hypot(a.x - p.pos.x, a.z - p.pos.z);
      if (d > 85 || a.dead) continue;
      v.set(a.x, a.y + a.rig.height * a.scale + 0.4, a.z).project(camera);
      if (v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1) continue;
      let el = this.labels.get(a);
      if (!el) { el = document.createElement('div'); el.className = 'lab'; this.el.labels.appendChild(el); this.labels.set(a, el); }
      seen.add(a);
      const st = a.awareness >= 1 ? 'fuite' : a.awareness > 0.3 ? 'alerte' : 'calme';
      el.className = 'lab ' + st;
      el.innerHTML = `<b>${DEFS[a.kind].name}</b><span class="meter"><i style="width:${Math.min(100, a.awareness * 100)}%"></i></span><small>${Math.round(d)} m · ${st}${a.wounded ? ' · blessé' : ''}</small>`;
      el.style.left = ((v.x * 0.5 + 0.5) * 100) + '%'; el.style.top = ((-v.y * 0.5 + 0.5) * 100) + '%';
    }
    for (const [a, el] of this.labels) if (!seen.has(a)) { el.remove(); this.labels.delete(a); }
  }
}
