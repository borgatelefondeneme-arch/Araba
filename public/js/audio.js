// Web Audio ile sentezlenen sesler (dosya gerektirmez)
let ctx = null, master, engineOsc, engineOsc2, engineGain, engineFilt, enabled = true;
export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return; }
  master = ctx.createGain(); master.gain.value = enabled ? 0.6 : 0; master.connect(ctx.destination);
}
export function setSound(on) { enabled = on; if (master) master.gain.value = on ? 0.6 : 0; }
function tone(freq, dur, type = 'sine', vol = 0.3, slide = 0, delay = 0) {
  if (!ctx) return; const t = ctx.currentTime + delay;
  const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, vol = 0.4, freq = 800) {
  if (!ctx) return; const n = ctx.sampleRate * dur, b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
  const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  f.type = 'lowpass'; f.frequency.value = freq; g.gain.value = vol; s.buffer = b; s.connect(f); f.connect(g); g.connect(master); s.start();
}
export const sfx = {
  star: () => tone(1300 + Math.random() * 200, 0.12, 'sine', 0.15, 1.5),
  diamond: () => { tone(880, 0.12, 'triangle', 0.2); tone(1320, 0.12, 'triangle', 0.2, 1, 0.08); tone(1760, 0.25, 'triangle', 0.2, 1, 0.16); },
  power: () => { tone(400, 0.3, 'square', 0.12, 3); },
  crash: () => { noise(0.6, 0.6, 1200); tone(90, 0.4, 'sawtooth', 0.25, 0.5); },
  bump: () => { noise(0.2, 0.3, 500); },
  jump: () => tone(300, 0.25, 'triangle', 0.15, 2.2),
  land: () => noise(0.15, 0.25, 300),
  nitro: () => { noise(0.8, 0.35, 3000); tone(200, 0.6, 'sawtooth', 0.12, 3); },
  beep: (hi) => tone(hi ? 1046 : 523, hi ? 0.5 : 0.25, 'square', 0.15),
  click: () => tone(700, 0.05, 'square', 0.08),
  win: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.3, 'triangle', 0.2, 1, i * 0.12)),
  lose: () => [392, 330, 262].forEach((f, i) => tone(f, 0.35, 'triangle', 0.2, 1, i * 0.15)),
  buy: () => { tone(660, 0.1, 'square', 0.12); tone(990, 0.2, 'square', 0.12, 1, 0.08); },
};
export function engineStart() {
  if (!ctx || engineOsc) return;
  engineOsc = ctx.createOscillator(); engineOsc.type = 'sawtooth';
  engineOsc2 = ctx.createOscillator(); engineOsc2.type = 'square';
  engineFilt = ctx.createBiquadFilter(); engineFilt.type = 'lowpass'; engineFilt.frequency.value = 500;
  engineGain = ctx.createGain(); engineGain.gain.value = 0.05;
  engineOsc.connect(engineFilt); engineOsc2.connect(engineFilt); engineFilt.connect(engineGain); engineGain.connect(master);
  engineOsc.start(); engineOsc2.start();
}
export function engineSet(speed, boost) {
  if (!engineOsc) return; const t = ctx.currentTime;
  const f = 38 + speed * 2.2 + (boost ? 25 : 0);
  engineOsc.frequency.setTargetAtTime(f, t, 0.1); engineOsc2.frequency.setTargetAtTime(f * 0.5, t, 0.1);
  engineFilt.frequency.setTargetAtTime(400 + speed * 18 + (boost ? 800 : 0), t, 0.1);
  engineGain.gain.setTargetAtTime(0.04 + speed * 0.0012, t, 0.1);
}
export function engineStop() { if (!engineOsc) return; try { engineOsc.stop(); engineOsc2.stop(); } catch {} engineOsc = engineOsc2 = null; }
