// Ses: ElevenLabs ile üretilmiş gerçekçi kayıtlar (public/sfx) + yedek sentez sesler
import { assetURL } from './assets.js';
let ctx = null, master, comp, enabled = true;
const buf = {};
const FILES = ['eng_idle.wav', 'eng_low.wav', 'eng_mid.wav', 'eng_high.wav', 'road.wav', 'shift.wav', 'nitro2.wav', 'crash2.wav', 'coin2.wav', 'bump', 'diamond', 'powerup', 'jump', 'land', 'horn', 'countdown', 'go', 'win', 'lose', 'tires'];

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  master = ctx.createGain(); master.gain.value = enabled ? 0.8 : 0; master.connect(ctx.destination);
  for (const f of FILES) { const file = f.includes('.') ? f : f + '.mp3', key = f.replace(/\.\w+$/, '');
    fetch(assetURL(`sfx/${file}`)).then(r => r.arrayBuffer()).then(a => new Promise((ok, no) => ctx.decodeAudioData(a, ok, no))).then(b => { buf[key] = b; }).catch(() => {}); }
  // yumuşatma: hafif sıkıştırıcı (patlamaları törpüler)
  comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.005; comp.release.value = 0.2;
  master.disconnect(); master.connect(comp); comp.connect(ctx.destination);
}
export function setSound(on) { enabled = on; if (master) master.gain.value = on ? 0.8 : 0; }

function play(name, vol = 1, rate = 1) {
  if (!ctx || !buf[name]) return false;
  const s = ctx.createBufferSource(), g = ctx.createGain();
  s.buffer = buf[name]; s.playbackRate.value = rate; g.gain.value = vol;
  s.connect(g); g.connect(master); s.start(); return true;
}
function tone(freq, dur, type = 'sine', vol = 0.3, slide = 0, delay = 0) {
  if (!ctx) return; const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
}
let lastStar = 0, siren = null;
export const sfx = {
  star: () => { const n = performance.now(); if (n - lastStar < 45) return; lastStar = n; play('coin2', 0.32, 0.97 + Math.random() * 0.08) || tone(1300, 0.12, 'sine', 0.15, 1.5); },
  diamond: () => play('diamond', 0.8) || tone(1320, 0.25, 'triangle', 0.2),
  power: () => play('powerup', 0.7) || tone(400, 0.3, 'square', 0.12, 3),
  crash: () => play('crash2', 0.85) || tone(90, 0.4, 'sawtooth', 0.25, 0.5),
  bump: () => play('bump', 0.7) || tone(120, 0.2, 'square', 0.2),
  jump: () => play('jump', 0.7) || tone(300, 0.25, 'triangle', 0.15, 2.2),
  land: () => play('land', 0.7),
  nitro: () => play('nitro2', 0.8) || tone(200, 0.6, 'sawtooth', 0.12, 3),
  beep: (hi) => (hi ? play('go', 0.8) : play('countdown', 0.7)) || tone(hi ? 1046 : 523, 0.3, 'square', 0.15),
  click: () => tone(700, 0.04, 'square', 0.05),
  win: () => play('win', 0.8) || [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.3, 'triangle', 0.2, 1, i * 0.12)),
  lose: () => play('lose', 0.8) || [392, 330, 262].forEach((f, i) => tone(f, 0.35, 'triangle', 0.2, 1, i * 0.15)),
  buy: () => play('powerup', 0.6) || tone(990, 0.2, 'square', 0.12),
  horn: () => play('horn', 0.9) || tone(440, 0.3, 'square', 0.2),
  tires: () => play('tires', 0.25, 0.9 + Math.random() * 0.2),
  nearMiss: () => { play('tires', 0.18, 1.3); tone(900, 0.18, 'triangle', 0.12, 1.8); },
  shock: () => { play('crash2', 0.6, 0.6); tone(60, 0.7, 'sine', 0.5, 0.5); tone(220, 0.5, 'sawtooth', 0.12, 0.3); return true; },
  sirenStart: () => { if (!ctx || siren) return; const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'square'; o.frequency.value = 700; g.gain.value = 0; const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1800; o.connect(f); f.connect(g); g.connect(master); o.start(); siren = { o, g, t0: ctx.currentTime }; },
  sirenSet: (v) => { if (!siren) return; const t = ctx.currentTime, ph = Math.floor((t - siren.t0) / 0.45) % 2; siren.o.frequency.setTargetAtTime(ph ? 960 : 680, t, 0.04); siren.g.gain.setTargetAtTime(0.06 * v, t, 0.1); },
  sirenStop: () => { if (!siren) return; try { siren.g.gain.setTargetAtTime(0, ctx.currentTime, 0.05); siren.o.stop(ctx.currentTime + 0.3); } catch {} siren = null; },
};

// Motor: 4 farklı devir kaydı (900 / 2500 / 4500 / 6800 dev/dk) + vites kutusu benzetimi.
// Hız arttıkça devir yükselir, vites atınca düşer; kayıtlar devire göre karışır ve hafifçe perdelenir.
const LAYERS = [['eng_idle', 900], ['eng_low', 2500], ['eng_mid', 4500], ['eng_high', 6800]];
const GEARS = [9, 15, 22, 30, 40, 70]; // her vitesin üst hızı (m/sn)
let eng = null, engineWanted = false;
function loopSrc(name) {
  const s = ctx.createBufferSource(), g = ctx.createGain();
  s.buffer = buf[name]; s.loop = true; g.gain.value = 0; s.connect(g); g.connect(eng.bus); s.start(0, Math.random() * buf[name].duration);
  return { s, g };
}
export function engineStart() {
  if (!ctx || eng) return;
  engineWanted = true;
  if (!LAYERS.every(([n]) => buf[n])) { setTimeout(() => { if (!eng && engineWanted) engineStart(); }, 400); return; }
  eng = { bus: ctx.createGain(), lp: ctx.createBiquadFilter(), gear: 0, rpm: 900, lastV: 0, lastT: ctx.currentTime, dip: 0 };
  eng.lp.type = 'lowpass'; eng.lp.frequency.value = 5200; eng.bus.gain.value = 0.9;
  eng.bus.connect(eng.lp); eng.lp.connect(master);
  eng.layers = LAYERS.map(([n, rpm]) => ({ ...loopSrc(n), rpm }));
  eng.road = buf.road ? loopSrc('road') : null;
}
export function engineSet(speed, boost) {
  if (!eng) return;
  const t = ctx.currentTime, dt = Math.max(0.001, t - eng.lastT); eng.lastT = t;
  const v = Math.max(0, speed), acc = (v - eng.lastV) / dt; eng.lastV = v;
  // vites
  let g = eng.gear;
  while (g < GEARS.length - 1 && v > GEARS[g]) g++;
  while (g > 0 && v < GEARS[g - 1] * 0.8) g--;
  if (g > eng.gear && v > 6) { play('shift', 0.35, 0.95 + Math.random() * 0.1); eng.dip = 0.12; }
  eng.gear = g;
  const lo = g ? GEARS[g - 1] * 0.8 : 0, hi = GEARS[g];
  let target = 1000 + Math.min(1, Math.max(0, (v - lo) / (hi - lo))) * 5600;
  if (v < 1) target = 900;
  if (boost) target = Math.min(7000, target + 600);
  eng.rpm += (target - eng.rpm) * Math.min(1, dt * 7);
  eng.dip = Math.max(0, eng.dip - dt);
  const r = eng.rpm, load = Math.min(1, Math.max(0.25, 0.45 + acc * 0.08)) + (boost ? 0.2 : 0);
  // katman ağırlıkları (log devir uzayında üçgen), perde = devir / kayıt devri
  const lr = Math.log(r);
  const ws = eng.layers.map((L, i) => { const c = Math.log(L.rpm), w = 0.55; return Math.max(0, 1 - Math.abs(lr - c) / w); });
  const sum = ws.reduce((a, b) => a + b, 0) || 1;
  eng.layers.forEach((L, i) => {
    const w = ws[i] / sum, rate = Math.min(1.45, Math.max(0.7, r / L.rpm));
    L.g.gain.setTargetAtTime(Math.sqrt(w) * 0.42 * load * (eng.dip > 0 ? 0.55 : 1), t, 0.05);
    L.s.playbackRate.setTargetAtTime(rate, t, 0.05);
  });
  eng.lp.frequency.setTargetAtTime(2600 + r * 0.6 + (boost ? 1500 : 0), t, 0.1);
  if (eng.road) { eng.road.g.gain.setTargetAtTime(Math.min(0.3, v / 120), t, 0.15); eng.road.s.playbackRate.setTargetAtTime(0.85 + Math.min(0.4, v / 120), t, 0.15); }
}
export function engineStop() {
  engineWanted = false; if (!eng) return;
  const all = [...eng.layers, eng.road].filter(Boolean);
  for (const n of all) { try { n.g.gain.setTargetAtTime(0, ctx.currentTime, 0.1); n.s.stop(ctx.currentTime + 0.5); } catch {} }
  eng = null;
}
