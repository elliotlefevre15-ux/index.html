// WILDHEARTH — point d'entrée : assemble les systèmes et lance la boucle de jeu.
import * as THREE from 'three';
import { World } from './world/world.js';
import { DayNight } from './systems/daynight.js';
import { ParticlePool } from './systems/particles.js';
import { Input } from './systems/input.js';
import { GameAudio } from './systems/audio.js';
import { Events } from './systems/events.js';
import { Save } from './systems/save.js';
import { Objectives } from './systems/objectives.js';
import { Inventory } from './inventory/inventory.js';
import { Camp } from './building/camp.js';
import { Builder } from './building/builder.js';
import { Player } from './player/player.js';
import { CameraRig } from './player/camera.js';
import { Interact } from './player/interact.js';
import { Animals } from './animals/animals.js';
import { UI } from './ui/ui.js';
import { MapView } from './ui/mapview.js';
import { makeThumbnails } from './ui/thumbs.js';

class Game {
  constructor() {
    const canvas = document.getElementById('gl');
    const screen = document.getElementById('screen');
    this.canvas = canvas; this.screen = screen;
    const renderer = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    const scene = this.scene = new THREE.Scene();
    const camera = this.camera = new THREE.PerspectiveCamera(62, 9 / 16, 0.1, 700);
    scene.add(camera);

    // contexte partagé entre les systèmes
    const ctx = this.ctx = this;
    this.time = 0; this.started = false;
    this.events = new Events();
    this.inventory = new Inventory();
    this.audio = new GameAudio();
    this.world = new World(scene);
    this.daynight = new DayNight(scene, renderer);
    this.camp = new Camp(scene, this.world);
    this.fx = new ParticlePool(scene, 700, false);
    this.glow = new ParticlePool(scene, 500, true);
    this.input = new Input(canvas, screen);
    this.cam = new CameraRig(camera, this.world);
    this.cam.camp = this.camp;
    this.player = new Player(ctx);
    this.animals = new Animals(ctx);
    this.builder = new Builder(ctx);
    this.interact = new Interact(ctx);
    this.mapview = new MapView(this.world, ctx);
    this.objectives = new Objectives(ctx);
    this.ui = new UI(ctx, document.getElementById('ui'));
    this.save = () => Save.save(this);
    this.toggleBuild = () => this._toggleBuild();

    this.animals.tracks.onDiscover = (e) => {
      const first = this.animals.tracks.discovered === 1;
      if (!first && this.time - (this._lastTrackToast || -99) < 12) return;
      this._lastTrackToast = this.time;
      this.ui.toast(first ? 'Empreintes de Cerf géant ! Suis la piste…' : 'Les traces continuent…', 'good');
      this.audio.play('pickup');
    };
    this.events.on('placed', () => { this._saveSoon = 2.5; });
    this.camp.onChange(() => { this._saveSoon = 2.5; });

    this._resize();
    new ResizeObserver(() => this._resize()).observe(screen);
    // vignettes du menu de construction (rendu hors écran, une seule fois)
    try { this.ui.thumbs = makeThumbnails(renderer, 112); } catch (e) { console.warn('thumbs', e); }
    this._place();
    addEventListener('beforeunload', () => { if (this.started) this.save(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.started) this.save(); });

    document.getElementById('ui').classList.add('prestart');
    this.ui.showStart(Save.has(), (fresh) => this.start(fresh));
    const ld = document.getElementById('loading'); if (ld) { ld.classList.add('gone'); setTimeout(() => ld.remove(), 600); }
    this.last = performance.now();
    this._saveT = 15;
    requestAnimationFrame((t) => this.loop(t));
  }

  _place() {
    this.cam.yaw = this.player.yaw + Math.PI; this.cam.pitch = 0.28;
    this.cam.update(0.016, this.player, this.input, 'explore', { x: 0, y: 0 }, 0);
  }

  start(fresh) {
    document.getElementById('ui').classList.remove('prestart');
    this.audio.init();
    if (fresh) { Save.clear(); }
    else Save.load(this);
    this.started = true;
    this.input.enabled = true;
    this.input.requestLock();
    this._place();
    this.ui.toast('Astuce : Q maintenu = observer · E = interagir', 'info');
  }

  _toggleBuild() {
    if (this.ui.modalOpen) return;
    this.builder.toggle();
    if (this.builder.active) {
      this.ui._buildDirty = true;
      this.player.crouching = false;
      this.cam.pitch = Math.max(this.cam.pitch, 0.6); this.cam.buildDist = Math.max(this.cam.buildDist, 9);
      this.ui.toast('Mode construction — clic gauche pour poser', 'info');
    } else { this.save(); this.input.requestLock(); }
  }

  _resize() {
    const r = this.screen.getBoundingClientRect();
    this.maxPr = Math.min(window.devicePixelRatio || 1, 1.75);
    if (this.pr == null) this.pr = Math.min(this.maxPr, 1.4);
    const pr = this.pr;
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(r.width, r.height, false);
    this.camera.aspect = r.width / r.height; this.camera.updateProjectionMatrix();
    this.fx.setScale(r.height * pr * 0.62); this.glow.setScale(r.height * pr * 0.62);
  }

  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const raw = (now - this.last) / 1000;
    const dt = Math.min(0.05, raw); this.last = now;
    this._perf(raw);
    if (window.__manual) return;   // pilotage pas à pas pour les tests automatisés
    try { this.update(dt); } catch (e) { if (!this._err) { this._err = true; console.error(e); } }
    this.renderer.render(this.scene, this.camera);
    this.input.endFrame();
  }

  // résolution dynamique : fluidité avant tout
  _perf(raw) {
    if (window.__manual || raw > 0.5) return;
    this._ema = (this._ema || 0.016) * 0.94 + raw * 0.06;
    this._perfT = (this._perfT || 0) + raw;
    if (this._perfT < 2.5) return;
    this._perfT = 0;
    const fps = 1 / this._ema;
    if (fps < 40 && this.pr > 0.7) { this.pr = Math.max(0.7, this.pr - 0.15); this._resize(); }
    else if (fps > 57 && this.pr < this.maxPr - 0.01) { this.pr = Math.min(this.maxPr, this.pr + 0.1); this._resize(); }
  }

  update(dt) {
    const input = this.input, ui = this.ui;
    this.time += dt;
    if (!this.started) {
      // écran d'accueil : la caméra tourne doucement autour du camp
      this.cam.yaw += dt * 0.08;
      this.cam.update(dt, this.player, input, 'explore', { x: 0, y: 0 }, 0);
      this.daynight.update(dt * 0.3, this.player.pos, this.camera);
      this.world.update(dt, this.time, this.daynight, this.camera);
      this.animals.update(dt, this.time);
      this.player.rig.root.position.copy(this.player.pos);
      input.takeClicks(); input.takeLook();
      return;
    }
    // ---- touches globales ----
    if (input.pressed('escape')) {
      if (ui.modalOpen) ui.closeModal();
      else if (this.builder.active) this._toggleBuild();
    }
    if (input.pressed('build')) this._toggleBuild();
    if (input.pressed('inventory')) { ui.modal === 'inv' ? ui.closeModal() : (!ui.modalOpen && ui.openInventory('bag')); }
    if (input.pressed('map')) { ui.modal === 'map' ? ui.closeModal() : (!ui.modalOpen && ui.openMap()); }
    if (input.pressed('hints')) ui.toggleHints();
    if (input.pressed('mute')) ui.toast(this.audio.toggleMute() ? 'Son coupé' : 'Son activé', 'info');

    const building = this.builder.active;
    const look = input.takeLook(), wheel = input.takeWheel();
    const canLook = !ui.modalOpen && (input.locked || building || input.mouse.right || input.lockUnsupported);

    this.player.update(dt, this.cam, input, building ? 'build' : 'explore');
    this.cam.update(dt, this.player, input, building ? 'build' : 'explore', canLook ? look : { x: 0, y: 0 }, ui.modalOpen ? 0 : wheel);
    if (building) this.builder.update(dt); else { input.takeClicks(); }
    if (!building) this.interact.update(dt, input); else this.interact.target = null;
    this.camp.update(dt, this.time, this.player.pos);
    this.world.update(dt, this.time, this.daynight, this.camera);
    this.animals.update(dt, this.time);
    this.objectives.update(dt);
    this.mapview.update(dt, this.player);
    this.daynight.update(dt, { x: Math.round(this.player.pos.x / 2) * 2, y: Math.round(this.player.pos.y), z: Math.round(this.player.pos.z / 2) * 2 }, this.camera);
    this._dayToasts();
    this._ambientFx(dt);
    this.fx.update(dt, this.time); this.glow.update(dt, this.time);
    this.audio.update(dt, this);
    ui.update(dt, this.cam);

    // sauvegarde auto
    this._saveT -= dt;
    if (this._saveSoon != null) { this._saveSoon -= dt; if (this._saveSoon <= 0) { this._saveSoon = null; this.save(); } }
    if (this._saveT <= 0) { this._saveT = 15; this.save(); }
  }

  _dayToasts() {
    const h = this.daynight.hours, prev = this._prevH ?? h;
    this._prevH = h;
    if (Math.abs(h - prev) > 1) return;
    const cross = (t) => (prev < t && h >= t);
    if (cross(17)) this.ui.toast('Le soleil descend — les animaux sortent : le Cerf géant se déplace au crépuscule', 'info');
    if (cross(19.5)) this.ui.toast('La nuit tombe — allume un feu ou rentre au camp', 'info');
    if (cross(5)) this.ui.toast('L’aube se lève — le gibier est actif', 'info');
  }

  // particules d'ambiance : poussières/pollen le jour, lucioles la nuit, braises et fumée des feux
  _ambientFx(dt) {
    const p = this.player.pos, dn = this.daynight, w = this.world;
    this._pollen = (this._pollen || 0) + dt * (10 + dn.nightFactor * 22);
    while (this._pollen > 1) {
      this._pollen -= 1;
      const a = Math.random() * 6.28, r = 3 + Math.random() * 14;
      const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
      const y = w.heightAt(x, z) + 0.4 + Math.random() * 2.2;
      if (dn.nightFactor > 0.5) this.glow.emit(x, y, z, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.25, (Math.random() - 0.5) * 0.4, { color: 0xd8ff7a, size: 0.09, life: 5, alpha: 0.9, flicker: 3 + Math.random() * 4 });
      else if (Math.random() < 0.6) this.glow.emit(x, y, z, 0.25 + Math.random() * 0.3, 0.05, (Math.random() - 0.5) * 0.3, { color: 0xfff1c9, size: 0.05, life: 6, alpha: 0.35 });
    }
    this._emberT = (this._emberT || 0) - dt;
    if (this._emberT <= 0) {
      this._emberT = 0.09;
      for (const e of this.camp.emitters) {
        const d = Math.hypot(e.x - p.x, e.z - p.z); if (d > 32) continue;
        if (Math.random() < 0.6) this.glow.emit(e.x + (Math.random() - 0.5) * 0.3, e.y + (e.type === 'fire' ? 0.5 : 1.85), e.z + (Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.5, 0.9 + Math.random() * 1.2, (Math.random() - 0.5) * 0.5, { color: 0xffa040, size: 0.07, life: 1.3 + Math.random(), alpha: 1, drag: 0.4 });
        if (e.type === 'fire' && Math.random() < 0.45) this.fx.emit(e.x + (Math.random() - 0.5) * 0.2, e.y + 0.9, e.z + (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.15, 0.7, (Math.random() - 0.5) * 0.15, { color: 0x8a8a86, size: 0.5, life: 3, alpha: 0.22, grow: 3.5, drag: 0.3 });
      }
    }
  }
}

const game = new Game();
window.__game = game;
/** Test : avance la simulation de n pas sans rendre, puis rend une image. */
window.__step = (n = 1, dt = 0.05, render = true) => {
  for (let i = 0; i < n; i++) { game.update(dt); game.input.endFrame(); }
  if (render) game.renderer.render(game.scene, game.camera);
};
