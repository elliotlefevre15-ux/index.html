// Entrées : clavier (par position physique => marche en AZERTY et QWERTY), souris, verrouillage du pointeur.
// Le reste du jeu ne lit que des ACTIONS abstraites : on pourra brancher des contrôles tactiles à la place.
const KEYMAP = {
  KeyW: 'forward',
  KeyS: 'back', KeyA: 'left', KeyD: 'right',
  ShiftLeft: 'sprint', ShiftRight: 'sprint',
  ControlLeft: 'crouch', KeyC: 'crouch',
  Space: 'jump', KeyE: 'interact', KeyF: 'eat', KeyQ: 'observe',
  KeyB: 'build', KeyI: 'inventory', Tab: 'inventory', KeyM: 'map', KeyH: 'hints', KeyN: 'mute',
  KeyR: 'rotate', KeyG: 'grab', Delete: 'delete', Backspace: 'delete', KeyX: 'delete',
  KeyT: 'snap', PageUp: 'raise', PageDown: 'lower', Escape: 'escape',
  Digit1: 'n1', Digit2: 'n2', Digit3: 'n3', Digit4: 'n4', Digit5: 'n5', Digit6: 'n6', Digit7: 'n7', Digit8: 'n8', Digit9: 'n9',
  Numpad1: 'n1', Numpad2: 'n2', Numpad3: 'n3', Numpad4: 'n4', Numpad5: 'n5', Numpad6: 'n6', Numpad7: 'n7', Numpad8: 'n8', Numpad9: 'n9',
};

export class Input {
  constructor(canvas, root) {
    this.canvas = canvas;
    this.root = root;
    this.down = new Set();
    this.pressedQ = new Set();
    this.releasedQ = new Set();
    this.look = { x: 0, y: 0 };
    this.mouse = { x: 0, y: 0, nx: 0, ny: 0, inside: false, left: false, right: false };
    this.wheel = 0;
    this.locked = false;
    this.enabled = true;       // désactivé quand un panneau est ouvert
    this.wantLock = true;      // le mode courant utilise-t-il le verrouillage ?
    this.clicks = [];          // {button, drag}
    this._drag = { down: false, moved: 0, button: -1 };
    this.layout = null;
    this.onLockChange = () => {};
    this._bind();
    if (navigator.keyboard && navigator.keyboard.getLayoutMap) navigator.keyboard.getLayoutMap().then((m) => { this.layout = m; }).catch(() => {});
  }

  /** Nom de touche tel qu'imprimé sur le clavier de l'utilisateur (AZERTY/QWERTY). */
  keyLabel(code) {
    const m = { Space: 'Espace', Escape: 'Échap', Delete: 'Suppr', ControlLeft: 'Ctrl', ShiftLeft: 'Maj', Tab: 'Tab' };
    if (m[code]) return m[code];
    if (this.layout && this.layout.get(code)) return this.layout.get(code).toUpperCase();
    return code.replace('Key', '').replace('Digit', '');
  }

  _bind() {
    addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      const a = KEYMAP[e.code];
      if (!a) return;
      if (['Tab', 'Space', 'Backspace', 'PageUp', 'PageDown'].includes(e.code)) e.preventDefault();
      if (!this.down.has(e.code)) this.pressedQ.add(a);
      this.down.add(e.code);
    });
    addEventListener('keyup', (e) => {
      const a = KEYMAP[e.code];
      this.down.delete(e.code);
      if (a) this.releasedQ.add(a);
    });
    addEventListener('blur', () => { this.down.clear(); this.mouse.left = this.mouse.right = false; });
    const c = this.canvas;
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    c.addEventListener('mousedown', (e) => {
      this._drag = { down: true, moved: 0, button: e.button };
      if (e.button === 0) this.mouse.left = true;
      if (e.button === 2) this.mouse.right = true;
      this._updateMouse(e);
      if (this.locked) this.clicks.push({ button: e.button, drag: false, locked: true });
    });
    addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.left = false;
      if (e.button === 2) this.mouse.right = false;
      if (this._drag.down && this._drag.button === e.button) {
        if (!this.locked) this.clicks.push({ button: e.button, drag: this._drag.moved > 5, locked: false });
        this._drag.down = false;
      }
    });
    addEventListener('mousemove', (e) => {
      if (this.locked) { this.look.x += e.movementX; this.look.y += e.movementY; }
      else {
        this._updateMouse(e);
        this.mouse.inside = e.target === this.canvas;
        if (this._drag.down) {
          this._drag.moved += Math.abs(e.movementX) + Math.abs(e.movementY);
          // glisser = tourner la caméra (hors verrouillage)
          if (this._drag.moved > 5 && (this._drag.button === 2 || this._drag.button === 1 || !this.wantLock || this._dragLook)) {
            this.look.x += e.movementX; this.look.y += e.movementY;
          }
        }
      }
    });
    c.addEventListener('mouseleave', () => { this.mouse.inside = false; });
    c.addEventListener('wheel', (e) => { e.preventDefault(); this.wheel += Math.sign(e.deltaY) * (e.shiftKey ? 0.001 : 1); this._shiftWheel = e.shiftKey; }, { passive: false });
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.onLockChange(this.locked);
    });
  }

  _updateMouse(e) {
    const r = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - r.left; this.mouse.y = e.clientY - r.top;
    this.mouse.nx = (this.mouse.x / r.width) * 2 - 1; this.mouse.ny = -((this.mouse.y / r.height) * 2 - 1);
    this.mouse.inside = true;
  }

  requestLock() {
    if (this.canvas.requestPointerLock) {
      try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* ignore */ }
    }
  }
  releaseLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  /** Vrai une seule fois par appui. */
  pressed(a) { return this.pressedQ.has(a); }
  released(a) { return this.releasedQ.has(a); }
  isDown(a) {
    for (const code of this.down) if (KEYMAP[code] === a) return true;
    return false;
  }
  get move() {
    let x = 0, y = 0;
    if (this.isDown('forward')) y += 1;
    if (this.isDown('back')) y -= 1;
    if (this.isDown('right')) x += 1;
    if (this.isDown('left')) x -= 1;
    // AZERTY : Z et Q sont à la place de W et A ; codes physiques déjà gérés, mais on accepte aussi les flèches
    if (this.down.has('ArrowUp')) y += 1;
    if (this.down.has('ArrowDown')) y -= 1;
    if (this.down.has('ArrowRight')) x += 1;
    if (this.down.has('ArrowLeft')) x -= 1;
    const l = Math.hypot(x, y);
    return l > 1 ? { x: x / l, y: y / l } : { x, y };
  }
  takeLook() { const l = { ...this.look }; this.look.x = 0; this.look.y = 0; return l; }
  takeWheel() { const w = this.wheel; this.wheel = 0; return w; }
  takeClicks() { const c = this.clicks; this.clicks = []; return c; }
  endFrame() { this.pressedQ.clear(); this.releasedQ.clear(); }
}
