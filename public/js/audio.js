// Ses: ElevenLabs ile üretilmiş gerçekçi kayıtlar (public/sfx) + yedek sentez sesler
let ctx = null, master, enabled = true;
const buf = {};
const FILES = ['engine_idle', 'engine_loop', 'engine_high', 'wind_loop', 'nitro', 'crash', 'bump', 'star', 'diamond', 'powerup', 'jump', 'land', 'horn', 'countdown', 'go', 'win', 'lose', 'tires'];

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  master = ctx.createGain(); master.gain.value = enabled ? 0.8 : 0; master.connect(ctx.destination);
  for (const f of FILES) fetch(`sfx/${f}.mp3`).then(r => r.arrayBuffer()).then(a => ctx.decodeAudioData(a)).then(b => { buf[f] = b; }).catch(() => {});
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
let lastStar = 0;
export const sfx = {
  star: () => { const n = performance.now(); if (n - lastStar < 45) return; lastStar = n; play('star', 0.45, 0.95 + Math.random() * 0.15) || tone(1300, 0.12, 'sine', 0.15, 1.5); },
  diamond: () => play('diamond', 0.8) || tone(1320, 0.25, 'triangle', 0.2),
  power: () => play('powerup', 0.7) || tone(400, 0.3, 'square', 0.12, 3),
  crash: () => play('crash', 0.9) || tone(90, 0.4, 'sawtooth', 0.25, 0.5),
  bump: () => play('bump', 0.7) || tone(120, 0.2, 'square', 0.2),
  jump: () => play('jump', 0.7) || tone(300, 0.25, 'triangle', 0.15, 2.2),
  land: () => play('land', 0.7),
  nitro: () => play('nitro', 0.9) || tone(200, 0.6, 'sawtooth', 0.12, 3),
  beep: (hi) => (hi ? play('go', 0.8) : play('countdown', 0.7)) || tone(hi ? 1046 : 523, 0.3, 'square', 0.15),
  click: () => tone(700, 0.04, 'square', 0.05),
  win: () => play('win', 0.8) || [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.3, 'triangle', 0.2, 1, i * 0.12)),
  lose: () => play('lose', 0.8) || [392, 330, 262].forEach((f, i) => tone(f, 0.35, 'triangle', 0.2, 1, i * 0.15)),
  buy: () => play('powerup', 0.6) || tone(990, 0.2, 'square', 0.12),
  horn: () => play('horn', 0.9) || tone(440, 0.3, 'square', 0.2),
  tires: () => play('tires', 0.25, 0.9 + Math.random() * 0.2),
};

// Motor: rölanti / orta / yüksek devir kayıtları hıza göre karışır, perde (pitch) devirle yükselir
let eng = null;
function loopSrc(name) {
  const s = ctx.createBufferSource(), g = ctx.createGain();
  s.buffer = buf[name]; s.loop = true; s.loopStart = 0.04; s.loopEnd = buf[name].duration - 0.04;
  g.gain.value = 0; s.connect(g); g.connect(master); s.start(0, 0.04);
  return { s, g };
}
export function engineStart() {
  if (!ctx || eng) return;
  if (!buf.engine_idle || !buf.engine_loop || !buf.engine_high) { setTimeout(() => { if (eng === null && engineWanted) engineStart(); }, 500); engineWanted = true; return; }
  engineWanted = true;
  eng = { idle: loopSrc('engine_idle'), mid: loopSrc('engine_loop'), high: loopSrc('engine_high'), wind: buf.wind_loop ? loopSrc('wind_loop') : null };
}
let engineWanted = false;
export function engineSet(speed, boost) {
  if (!eng) return; const t = ctx.currentTime, k = Math.min(1.3, speed / 40);
  const tri = (c, w) => Math.max(0, 1 - Math.abs(k - c) / w);
  const set = (n, gain, rate) => { n.g.gain.setTargetAtTime(gain, t, 0.12); n.s.playbackRate.setTargetAtTime(rate, t, 0.12); };
  set(eng.idle, 0.5 * tri(0, 0.35), 0.85 + k * 0.6);
  set(eng.mid, 0.5 * tri(0.5, 0.45), 0.8 + k * 0.5);
  set(eng.high, (0.45 * Math.min(1, Math.max(0, (k - 0.45) / 0.35))) + (boost ? 0.2 : 0), 0.75 + k * 0.35 + (boost ? 0.12 : 0));
  if (eng.wind) set(eng.wind, Math.min(0.5, k * 0.35) + (boost ? 0.15 : 0), 0.9 + k * 0.2);
}
export function engineStop() {
  engineWanted = false; if (!eng) return;
  for (const n of Object.values(eng)) if (n) { try { n.g.gain.setTargetAtTime(0, ctx.currentTime, 0.1); n.s.stop(ctx.currentTime + 0.5); } catch {} }
  eng = null;
}
