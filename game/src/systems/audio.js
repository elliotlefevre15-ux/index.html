// Ambiance sonore 100 % procédurale (WebAudio) : aucun fichier audio à charger.
import { clamp } from './noise.js';
import { riverX } from '../world/config.js';

export class GameAudio {
  constructor() {
    this.ctx = null; this.muted = false; this.master = null;
    this.listener = { x: 0, z: 0 };
    this._birdT = 2; this._fireT = 0; this._owlT = 30;
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = this.muted ? 0 : 0.8; this.master.connect(c.destination);
    // bruit blanc bouclé
    const len = c.sampleRate * 2, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2; }
    this.noiseBuf = buf;
    const white = c.createBuffer(1, len, c.sampleRate), wd = white.getChannelData(0);
    for (let i = 0; i < len; i++) wd[i] = Math.random() * 2 - 1;
    this.whiteBuf = white;
    // nappes ambiantes
    const loop = (bufr, type, freq, q) => {
      const s = c.createBufferSource(); s.buffer = bufr; s.loop = true;
      const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
      const g = c.createGain(); g.gain.value = 0;
      s.connect(f); f.connect(g); g.connect(this.master); s.start();
      return { s, f, g };
    };
    this.wind = loop(buf, 'bandpass', 500, 0.6);
    this.river = loop(white, 'lowpass', 900, 0.4);
    this.cricket = this._makeCrickets();
  }

  _makeCrickets() {
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 4300;
    const am = c.createGain(); am.gain.value = 0;
    const lfo = c.createOscillator(); lfo.frequency.value = 9; const lg = c.createGain(); lg.gain.value = 0.5;
    const out = c.createGain(); out.gain.value = 0;
    lfo.connect(lg); lg.connect(am.gain); o.connect(am); am.connect(out); out.connect(this.master);
    am.gain.value = 0.5; o.start(); lfo.start();
    return { out };
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) this.master.gain.value = this.muted ? 0 : 0.8;
    return this.muted;
  }

  // ---- briques ----
  _noise(dur, { type = 'bandpass', f = 1000, f2 = null, q = 1, gain = 0.2, delay = 0, buf = 'noiseBuf', attack = 0.005 }) {
    const c = this.ctx; if (!c || this.muted) return;
    const t = c.currentTime + delay;
    const s = c.createBufferSource(); s.buffer = this[buf];
    const fl = c.createBiquadFilter(); fl.type = type; fl.frequency.setValueAtTime(f, t); if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur); fl.Q.value = q;
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(fl); fl.connect(g); g.connect(this.master);
    s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
  }
  _tone(freq, dur, { type = 'sine', gain = 0.15, f2 = null, delay = 0, attack = 0.005 } = {}) {
    const c = this.ctx; if (!c || this.muted) return;
    const t = c.currentTime + delay;
    const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.05);
  }

  step(surface, vol = 0.6) {
    if (surface === 'wood') { this._tone(150 + Math.random() * 30, 0.1, { type: 'triangle', gain: 0.16 * vol }); this._noise(0.06, { f: 1800, gain: 0.05 * vol }); }
    else if (surface === 'water') this._noise(0.28, { type: 'lowpass', f: 1800, f2: 500, gain: 0.16 * vol, buf: 'whiteBuf' });
    else this._noise(0.1, { f: 700 + Math.random() * 400, q: 0.6, gain: 0.13 * vol });
  }

  play(name) {
    if (!this.ctx) return;
    switch (name) {
      case 'swing': this._noise(0.22, { f: 500, f2: 2200, q: 1.2, gain: 0.14 }); break;
      case 'throw': this._noise(0.35, { f: 400, f2: 2600, q: 1.0, gain: 0.18 }); this._tone(120, 0.15, { type: 'triangle', gain: 0.08 }); break;
      case 'hit': this._noise(0.16, { type: 'lowpass', f: 600, gain: 0.3 }); this._tone(90, 0.18, { type: 'sine', gain: 0.3, f2: 50 }); break;
      case 'thud': this._noise(0.12, { type: 'lowpass', f: 400, gain: 0.25 }); this._tone(80, 0.15, { gain: 0.2, f2: 50 }); break;
      case 'chop': this._tone(190, 0.09, { type: 'triangle', gain: 0.3, f2: 110 }); this._noise(0.09, { f: 1800, gain: 0.2 }); break;
      case 'mine': this._tone(1100, 0.06, { type: 'square', gain: 0.07, f2: 700 }); this._noise(0.08, { f: 3000, gain: 0.2 }); this._tone(140, 0.1, { gain: 0.12 }); break;
      case 'pluck': this._noise(0.18, { type: 'highpass', f: 2500, gain: 0.1 }); break;
      case 'place': this._tone(120, 0.14, { type: 'triangle', gain: 0.3, f2: 70 }); this._noise(0.1, { f: 1200, gain: 0.15 }); this._tone(520, 0.08, { gain: 0.05, delay: 0.03 }); break;
      case 'remove': this._noise(0.2, { f: 900, f2: 300, gain: 0.16 }); break;
      case 'deny': this._tone(140, 0.18, { type: 'sawtooth', gain: 0.1, f2: 100 }); break;
      case 'pickup': this._tone(660, 0.07, { gain: 0.1 }); this._tone(990, 0.1, { gain: 0.1, delay: 0.06 }); break;
      case 'eat': [0, 0.12, 0.24].forEach((d) => this._noise(0.07, { f: 1500, q: 2, gain: 0.14, delay: d })); break;
      case 'drink': [0, 0.11, 0.2].forEach((d) => this._tone(500 + Math.random() * 300, 0.09, { gain: 0.08, f2: 900, delay: d })); break;
      case 'hurt': this._tone(180, 0.35, { type: 'sawtooth', gain: 0.16, f2: 70 }); this._noise(0.2, { type: 'lowpass', f: 500, gain: 0.2 }); break;
      case 'click': this._tone(700, 0.04, { type: 'triangle', gain: 0.06 }); break;
      case 'craft': this._tone(440, 0.09, { gain: 0.09 }); this._tone(660, 0.09, { gain: 0.09, delay: 0.08 }); this._tone(880, 0.16, { gain: 0.09, delay: 0.16 }); break;
      case 'level': [523, 659, 784, 1046].forEach((f, i) => this._tone(f, 0.28, { type: 'triangle', gain: 0.11, delay: i * 0.11 })); break;
      case 'cook': this._noise(0.5, { f: 3500, q: 0.8, gain: 0.12, buf: 'whiteBuf' }); break;
      case 'sleep': this._tone(220, 1.2, { type: 'sine', gain: 0.08, f2: 110 }); break;
      case 'open': this._tone(200, 0.12, { type: 'triangle', gain: 0.14, f2: 260 }); this._noise(0.14, { f: 800, gain: 0.08 }); break;
      case 'skin': this._noise(0.35, { f: 1000, f2: 400, gain: 0.16 }); this._tone(100, 0.2, { gain: 0.14 }); break;
    }
  }

  /** son positionnel (volume selon la distance à l'écouteur) */
  at(name, x, z) {
    if (!this.ctx || this.muted) return;
    const d = Math.hypot(x - this.listener.x, z - this.listener.z);
    const v = clamp(1 - d / 60, 0, 1); if (v <= 0.02) return;
    const g = v * v;
    switch (name) {
      case 'grunt': this._tone(85, 0.55, { type: 'sawtooth', gain: 0.16 * g, f2: 55 }); this._noise(0.4, { type: 'lowpass', f: 300, gain: 0.12 * g }); break;
      case 'bark': this._noise(0.12, { f: 900, f2: 500, q: 1.5, gain: 0.22 * g }); this._tone(420, 0.14, { type: 'square', gain: 0.05 * g, f2: 260 }); break;
      case 'hit': this._noise(0.18, { type: 'lowpass', f: 500, gain: 0.32 * g }); this._tone(85, 0.2, { gain: 0.3 * g, f2: 45 }); break;
    }
  }

  update(dt, { player, daynight, camp, world }) {
    const c = this.ctx; if (!c) return;
    this.listener.x = player.pos.x; this.listener.z = player.pos.z;
    const t = c.currentTime;
    const alt = clamp(player.pos.y / 30, 0, 1);
    this.wind.g.gain.setTargetAtTime(this.muted ? 0 : 0.05 + alt * 0.12 + 0.02 * Math.sin(t * 0.3), t, 0.4);
    this.wind.f.frequency.setTargetAtTime(350 + alt * 500 + 120 * Math.sin(t * 0.21), t, 0.3);
    const rx = player.pos.z > -70 ? Math.abs(player.pos.x - riverX(player.pos.z)) : 200;
    this.river.g.gain.setTargetAtTime(this.muted ? 0 : clamp(1 - (rx - 3) / 38, 0, 1) * 0.16, t, 0.3);
    const night = daynight.nightFactor;
    this.cricket.out.gain.setTargetAtTime(this.muted ? 0 : night * 0.008, t, 1);
    // oiseaux le jour
    this._birdT -= dt;
    if (this._birdT <= 0) {
      this._birdT = 2 + Math.random() * 7;
      if (night < 0.35 && !this.muted) {
        const base = 2200 + Math.random() * 1800, n = 2 + Math.floor(Math.random() * 3);
        for (let i = 0; i < n; i++) this._tone(base, 0.1, { type: 'sine', gain: 0.035, f2: base * (1.2 + Math.random() * 0.5), delay: i * 0.13 });
      }
    }
    this._owlT -= dt;
    if (this._owlT <= 0) { this._owlT = 20 + Math.random() * 30; if (night > 0.7) { this._tone(340, 0.5, { gain: 0.05, f2: 290 }); this._tone(340, 0.5, { gain: 0.05, f2: 290, delay: 0.7 }); } }
    // crépitement du feu
    this._fireT -= dt;
    if (this._fireT <= 0 && camp) {
      this._fireT = 0.08 + Math.random() * 0.25;
      const f = camp.nearest('fire', player.pos.x, player.pos.z, 22);
      if (f) {
        const d = Math.hypot(f.x - player.pos.x, f.z - player.pos.z);
        this._noise(0.05 + Math.random() * 0.05, { f: 1500 + Math.random() * 3000, q: 1.5, gain: clamp(1 - d / 22, 0, 1) * 0.12, buf: 'whiteBuf' });
      }
    }
  }
}
