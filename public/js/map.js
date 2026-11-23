// Köy haritası: bölge bölge ilerleyen, çizimli bölüm haritası
import { LEVELS, REGIONS, LEVELS_PER_REGION } from './data.js';
import { rng } from './textures.js';

const STEP = 150, PAD = 140;

export function renderMap(wrap, save, onPick) {
  wrap.innerHTML = '';
  const W = Math.min(wrap.clientWidth || innerWidth, 760), H = PAD * 2 + (LEVELS.length - 1) * STEP;
  const inner = document.createElement('div'); inner.className = 'map-inner'; inner.style.width = W + 'px'; inner.style.height = H + 'px';
  const cv = document.createElement('canvas'); const dpr = Math.min(2, devicePixelRatio || 1);
  cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
  inner.appendChild(cv); wrap.appendChild(inner);
  const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
  const r = rng(42);
  // bölüm noktaları (aşağıdan yukarı)
  const pts = LEVELS.map((l, i) => ({ x: W / 2 + Math.sin(i * 1.15) * W * 0.28, y: H - PAD - i * STEP, l }));
  const regionY = (ri) => [H - PAD - (ri * LEVELS_PER_REGION) * STEP + STEP * 0.6 + (ri === 0 ? PAD : 0), H - PAD - ((ri + 1) * LEVELS_PER_REGION - 1) * STEP - STEP * 0.5 - (ri === REGIONS.length - 1 ? PAD : 0)];
  const BG = { village: ['#8bc34a', '#7cb342'], forest: ['#2e7d32', '#3d8b40'], desert: ['#f2c879', '#e6b45c'], snow: ['#e8f1f8', '#d3e3f0'], city: ['#1f2a4d', '#2c3a66'] };
  REGIONS.forEach((reg, ri) => {
    const [y0, y1] = regionY(ri);
    const g = ctx.createLinearGradient(0, y1, 0, y0); g.addColorStop(0, BG[reg.theme][0]); g.addColorStop(1, BG[reg.theme][1]);
    ctx.fillStyle = g; ctx.fillRect(0, y1, W, y0 - y1);
    // geçiş
    const tg = ctx.createLinearGradient(0, y1 - 30, 0, y1 + 30); tg.addColorStop(0, 'rgba(0,0,0,0)'); tg.addColorStop(0.5, 'rgba(255,255,255,0.12)'); tg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = tg; ctx.fillRect(0, y1 - 30, W, 60);
    for (let i = 0; i < 46; i++) {
      const x = r() * W, y = y1 + 20 + r() * (y0 - y1 - 40);
      if (pts.some(p => Math.hypot(p.x - x, p.y - y) < 70)) continue;
      decor(ctx, reg.theme, x, y, 0.7 + r() * 0.6, r);
    }
  });
  // nehir
  ctx.strokeStyle = 'rgba(66,165,245,0.85)'; ctx.lineWidth = 22; ctx.lineCap = 'round'; ctx.beginPath();
  const [, vy1] = regionY(1);
  for (let y = H; y > vy1; y -= 20) { const x = W * 0.12 + Math.sin(y * 0.01) * 30; y === H ? ctx.moveTo(x, y) : ctx.lineTo(x, y); }
  ctx.stroke(); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 3; ctx.stroke();
  // yol
  const path = () => { ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y + PAD); ctx.lineTo(pts[0].x, pts[0].y); for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i]; ctx.bezierCurveTo(a.x, a.y - STEP * 0.55, b.x, b.y + STEP * 0.55, b.x, b.y); } };
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  path(); ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 34; ctx.stroke();
  path(); ctx.strokeStyle = '#e9e2d0'; ctx.lineWidth = 30; ctx.stroke();
  path(); ctx.strokeStyle = '#4a4d52'; ctx.lineWidth = 24; ctx.stroke();
  path(); ctx.setLineDash([10, 12]); ctx.strokeStyle = '#ffd54f'; ctx.lineWidth = 2.5; ctx.stroke(); ctx.setLineDash([]);
  // bölge başlıkları
  REGIONS.forEach((reg, ri) => {
    const [, y1] = regionY(ri); const y = y1 + 34;
    ctx.font = 'bold 20px system-ui, sans-serif'; const tw = ctx.measureText(reg.name).width + 36;
    ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.beginPath(); ctx.roundRect(W - tw - 14, y - 18, tw, 36, 18); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(reg.name, W - tw / 2 - 14, y + 1);
  });
  // bölüm düğmeleri
  let current = null;
  pts.forEach((p) => {
    const l = p.l, unlocked = l.n <= save.unlocked, best = save.levels[l.n] || 0;
    const b = document.createElement('button'); b.className = 'node' + (unlocked ? '' : ' locked') + (l.n === save.unlocked ? ' current' : '');
    b.style.left = p.x + 'px'; b.style.top = p.y + 'px';
    b.innerHTML = `${l.mode === 'police' ? '<span class="mode">🚓</span>' : ''}<span class="num">${unlocked ? l.n : '🔒'}</span><span class="nstars">${[1, 2, 3].map(i => `<i class="${i <= best ? 'on' : ''}">★</i>`).join('')}</span>`;
    if (unlocked) b.onclick = () => onPick(l);
    inner.appendChild(b);
    if (l.n === Math.min(save.unlocked, LEVELS.length)) current = p;
  });
  if (current) {
    const car = document.createElement('div'); car.className = 'map-car'; car.textContent = '🚗';
    car.style.left = current.x + 'px'; car.style.top = (current.y - 52) + 'px'; inner.appendChild(car);
    requestAnimationFrame(() => { wrap.scrollTop = current.y - wrap.clientHeight * 0.6; });
  }
}

function decor(ctx, theme, x, y, s, r) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  const shadow = () => { ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.beginPath(); ctx.ellipse(4, 4, 16, 6, 0, 0, 7); ctx.fill(); };
  const k = r();
  if (theme === 'village') {
    if (k < 0.3) { // ev
      shadow(); ctx.fillStyle = ['#fff3e0', '#ffe0b2', '#f5f5f5'][Math.floor(r() * 3)]; ctx.fillRect(-14, -14, 28, 18);
      ctx.fillStyle = '#c62828'; ctx.beginPath(); ctx.moveTo(-18, -14); ctx.lineTo(0, -30); ctx.lineTo(18, -14); ctx.fill();
      ctx.fillStyle = '#5d4037'; ctx.fillRect(-3, -6, 6, 10); ctx.fillStyle = '#4fc3f7'; ctx.fillRect(-11, -10, 5, 5); ctx.fillRect(6, -10, 5, 5);
    } else if (k < 0.45) { // tarla
      ctx.fillStyle = '#c0ca33'; ctx.fillRect(-26, -12, 52, 24); ctx.strokeStyle = '#9e9d24'; ctx.lineWidth = 2;
      for (let i = -22; i < 26; i += 7) { ctx.beginPath(); ctx.moveTo(i, -12); ctx.lineTo(i, 12); ctx.stroke(); }
    } else if (k < 0.52) { // inek :)
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.ellipse(0, 0, 9, 6, 0, 0, 7); ctx.fill(); ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(-2, -1, 2.5, 0, 7); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(9, -3, 3.5, 0, 7); ctx.fill();
    } else tree(ctx, '#388e3c', '#66bb6a');
  } else if (theme === 'forest') { pine(ctx, k < 0.5 ? '#1b5e20' : '#2e7d32'); }
  else if (theme === 'desert') {
    if (k < 0.5) { ctx.fillStyle = '#558b2f'; ctx.fillRect(-3, -24, 6, 24); ctx.fillRect(-11, -16, 5, 10); ctx.fillRect(6, -20, 5, 10); ctx.fillRect(-11, -10, 8, 4); ctx.fillRect(3, -13, 8, 4); }
    else { ctx.fillStyle = '#d7a35a'; ctx.beginPath(); ctx.ellipse(0, 0, 26, 9, 0, Math.PI, 0); ctx.fill(); }
  } else if (theme === 'snow') {
    if (k < 0.4) { ctx.fillStyle = '#90a4ae'; ctx.beginPath(); ctx.moveTo(-30, 8); ctx.lineTo(0, -36); ctx.lineTo(30, 8); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(-10, -21); ctx.lineTo(0, -36); ctx.lineTo(10, -21); ctx.lineTo(4, -24); ctx.lineTo(-3, -20); ctx.fill(); }
    else { pine(ctx, '#2e5d3a'); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(-6, -22); ctx.lineTo(0, -32); ctx.lineTo(6, -22); ctx.fill(); }
  } else if (theme === 'city') {
    const w = 14 + r() * 14, h = 26 + r() * 40; ctx.fillStyle = '#0d1430'; ctx.fillRect(-w / 2, -h, w, h);
    ctx.fillStyle = '#ffd54f'; for (let yy = -h + 4; yy < -4; yy += 7) for (let xx = -w / 2 + 3; xx < w / 2 - 3; xx += 6) if (r() < 0.5) ctx.fillRect(xx, yy, 3, 3);
  }
  ctx.restore();
}
function tree(ctx, a, b) { ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.beginPath(); ctx.ellipse(4, 4, 12, 5, 0, 0, 7); ctx.fill(); ctx.fillStyle = '#6d4c41'; ctx.fillRect(-2, -8, 4, 10); ctx.fillStyle = a; ctx.beginPath(); ctx.arc(0, -14, 11, 0, 7); ctx.fill(); ctx.fillStyle = b; ctx.beginPath(); ctx.arc(-3, -17, 6, 0, 7); ctx.fill(); }
function pine(ctx, c) { ctx.fillStyle = 'rgba(0,0,0,0.2)'; ctx.beginPath(); ctx.ellipse(4, 4, 10, 4, 0, 0, 7); ctx.fill(); ctx.fillStyle = '#5d4037'; ctx.fillRect(-2, -4, 4, 7); ctx.fillStyle = c; for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(-12 + i * 3, -4 - i * 9); ctx.lineTo(0, -20 - i * 9); ctx.lineTo(12 - i * 3, -4 - i * 9); ctx.fill(); } }
