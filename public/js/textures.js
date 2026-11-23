// Prosedürel (kod ile üretilen) gerçekçi dokular
import * as THREE from 'three';

function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

// Döşenebilir değer gürültüsü (fbm)
function fbm(w, h, seed, octaves = 5, base = 8) {
  const r = rng(seed); const out = new Float32Array(w * h);
  let amp = 1, total = 0;
  for (let o = 0; o < octaves; o++) {
    const gx = base << o, gy = Math.max(1, Math.round(base * h / w)) << o;
    const g = new Float32Array(gx * gy); for (let i = 0; i < g.length; i++) g[i] = r();
    for (let y = 0; y < h; y++) {
      const fy = y / h * gy, y0 = Math.floor(fy), ty = fy - y0, sy = ty * ty * (3 - 2 * ty);
      const y1 = (y0 + 1) % gy;
      for (let x = 0; x < w; x++) {
        const fx = x / w * gx, x0 = Math.floor(fx), tx = fx - x0, sx = tx * tx * (3 - 2 * tx);
        const x1 = (x0 + 1) % gx;
        const a = g[y0 * gx + x0], b = g[y0 * gx + x1], c = g[y1 * gx + x0], d = g[y1 * gx + x1];
        out[y * w + x] += amp * ((a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy);
      }
    }
    total += amp; amp *= 0.5;
  }
  for (let i = 0; i < out.length; i++) out[i] /= total;
  return out;
}

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c, srgb = true, rep = true) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 8;
  return t;
}
function normalFromHeight(hgt, w, h, strength = 2) {
  const c = canvas(w, h), ctx = c.getContext('2d'), img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const l = hgt[y * w + (x - 1 + w) % w], rr = hgt[y * w + (x + 1) % w];
    const u = hgt[((y - 1 + h) % h) * w + x], d = hgt[((y + 1) % h) * w + x];
    let nx = (l - rr) * strength, ny = (u - d) * strength, nz = 1;
    const len = Math.hypot(nx, ny, nz); nx /= len; ny /= len; nz /= len;
    const i = (y * w + x) * 4;
    img.data[i] = (nx * 0.5 + 0.5) * 255; img.data[i + 1] = (ny * 0.5 + 0.5) * 255; img.data[i + 2] = nz * 255; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0); return tex(c, false);
}

export const ROAD = { lanes: [-3.4, 0, 3.4], halfWidth: 6.2, texLen: 12 };

// Asfalt yol: renk + pürüzlülük + normal haritası
export function makeRoadTextures(theme) {
  const W = 512, H = 1024;
  const n = fbm(W, H, 11, 6, 16), n2 = fbm(W, H, 29, 3, 4);
  const c = canvas(W, H), ctx = c.getContext('2d'), img = ctx.createImageData(W, H);
  const r = rng(5); const hgt = new Float32Array(W * H);
  const baseCol = theme === 'desert' ? [92, 86, 80] : theme === 'snow' ? [70, 72, 78] : theme === 'city' ? [38, 39, 42] : [58, 59, 62];
  for (let i = 0; i < W * H; i++) {
    let v = 0.75 + n[i] * 0.4 + n2[i] * 0.2;
    const sp = r(); if (sp > 0.985) v += 0.35; else if (sp < 0.02) v -= 0.25; // taş parçacıkları
    hgt[i] = n[i] * 0.6 + (sp > 0.985 ? 0.4 : 0);
    img.data[i * 4] = baseCol[0] * v; img.data[i * 4 + 1] = baseCol[1] * v; img.data[i * 4 + 2] = baseCol[2] * v; img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  // tamir yamaları ve lastik izleri
  for (let i = 0; i < 6; i++) { ctx.fillStyle = `rgba(20,20,22,${0.08 + r() * 0.1})`; ctx.beginPath(); ctx.ellipse(r() * W, r() * H, 20 + r() * 60, 40 + r() * 120, r(), 0, 7); ctx.fill(); }
  const px = W / (ROAD.halfWidth * 2), toX = (m) => (m + ROAD.halfWidth) * px;
  for (const lx of [-3.4, 0, 3.4]) { const g = ctx.createLinearGradient(toX(lx - 1.2), 0, toX(lx + 1.2), 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.3, 'rgba(10,10,10,0.18)'); g.addColorStop(0.5, 'rgba(0,0,0,0)'); g.addColorStop(0.7, 'rgba(10,10,10,0.18)'); g.addColorStop(1, 'rgba(0,0,0,0)'); ctx.fillStyle = g; ctx.fillRect(toX(lx - 1.2), 0, 2.4 * px, H); }
  const paint = theme === 'city' ? '#f2f2f2' : '#eeeeee';
  const mark = (x0, x1, y0, y1, col) => { ctx.fillStyle = col; ctx.globalAlpha = 0.92; ctx.fillRect(toX(x0), y0, (x1 - x0) * px, y1 - y0); ctx.globalAlpha = 1; };
  for (const e of [-5.15, 5.0]) mark(e, e + 0.15, 0, H, paint);
  for (const d of [-1.7, 1.7]) { mark(d - 0.07, d + 0.07, 0, H * 0.25, paint); mark(d - 0.07, d + 0.07, H * 0.5, H * 0.75, paint); }
  // yıpranmış boya
  ctx.globalCompositeOperation = 'multiply';
  for (let i = 0; i < 3000; i++) { ctx.fillStyle = `rgba(90,90,90,${r() * 0.5})`; ctx.fillRect(r() * W, r() * H, 1 + r() * 2, 1 + r() * 3); }
  ctx.globalCompositeOperation = 'source-over';
  // yol kenarı toprak/çakıl
  const shoulder = theme === 'desert' ? 'rgba(160,120,70,0.9)' : theme === 'snow' ? 'rgba(235,240,248,0.95)' : theme === 'city' ? 'rgba(80,80,85,1)' : 'rgba(110,100,80,0.9)';
  ctx.fillStyle = shoulder; ctx.fillRect(0, 0, toX(-5.75), H); ctx.fillRect(toX(5.75), 0, W - toX(5.75), H);

  // pürüzlülük: boya ve taşlar biraz daha pürüzsüz; şehirde ıslak yol
  const rc = canvas(W, H), rctx = rc.getContext('2d'), rimg = rctx.createImageData(W, H);
  const wet = theme === 'city' || theme === 'snow';
  for (let i = 0; i < W * H; i++) { let v = (wet ? 0.35 : 0.82) + (n2[i] - 0.5) * (wet ? 0.7 : 0.25) + (n[i] - 0.5) * 0.2; v = Math.max(0.05, Math.min(1, v)) * 255; rimg.data[i * 4] = rimg.data[i * 4 + 1] = rimg.data[i * 4 + 2] = v; rimg.data[i * 4 + 3] = 255; }
  rctx.putImageData(rimg, 0, 0);
  const map = tex(c), rough = tex(rc, false), normal = normalFromHeight(hgt, W, H, 3);
  return { map, rough, normal };
}

const GROUND = {
  village: [[88, 128, 52], [120, 150, 60], [70, 100, 40]],
  forest: [[52, 86, 40], [74, 96, 48], [60, 70, 38]],
  desert: [[214, 170, 110], [196, 150, 96], [230, 190, 130]],
  snow: [[236, 241, 248], [214, 224, 238], [250, 252, 255]],
  city: [[54, 64, 48], [70, 72, 70], [44, 50, 40]],
};
export function makeGroundTextures(theme) {
  const W = 512, H = 512; const cols = GROUND[theme] || GROUND.village;
  const n = fbm(W, H, 77, 6, 6), n2 = fbm(W, H, 99, 4, 3);
  const c = canvas(W, H), ctx = c.getContext('2d'), img = ctx.createImageData(W, H); const r = rng(3);
  for (let i = 0; i < W * H; i++) {
    const t = n2[i], v = 0.8 + n[i] * 0.4 + (r() - 0.5) * 0.12;
    const a = t < 0.5 ? cols[0] : cols[1], b = t < 0.5 ? cols[2] : cols[0], k = Math.abs(t - 0.5) * 2;
    for (let j = 0; j < 3; j++) img.data[i * 4 + j] = (a[j] * (1 - k) + b[j] * k) * v;
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  if (theme === 'village' || theme === 'forest' || theme === 'city') { // çimen yaprakları
    for (let i = 0; i < 9000; i++) { const x = r() * W, y = r() * H; ctx.strokeStyle = `rgba(${40 + r() * 60},${80 + r() * 70},${20 + r() * 30},0.5)`; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 3, y - 2 - r() * 5); ctx.stroke(); }
    if (theme === 'village') for (let i = 0; i < 160; i++) { ctx.fillStyle = ['#fff', '#ffeb3b', '#e57373', '#ba68c8'][i % 4]; ctx.fillRect(r() * W, r() * H, 2, 2); }
  }
  if (theme === 'desert') for (let i = 0; i < 40; i++) { ctx.strokeStyle = 'rgba(150,110,60,0.25)'; ctx.lineWidth = 2; ctx.beginPath(); const y = r() * H; ctx.moveTo(0, y); for (let x = 0; x <= W; x += 16) ctx.lineTo(x, y + Math.sin(x * 0.03 + i) * 6); ctx.stroke(); }
  const hgt = new Float32Array(W * H); for (let i = 0; i < W * H; i++) hgt[i] = n[i];
  return { map: tex(c), normal: normalFromHeight(hgt, W, H, theme === 'snow' ? 1.5 : 4) };
}

export function makeWindowTexture(seed, lit = 0.45) {
  const W = 128, H = 256, c = canvas(W, H), ctx = c.getContext('2d'), r = rng(seed);
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  for (let y = 6; y < H - 6; y += 16) for (let x = 6; x < W - 6; x += 14) {
    if (r() < lit) { const w = r(); ctx.fillStyle = w < 0.6 ? `rgb(255,${200 + r() * 40},${120 + r() * 60})` : w < 0.85 ? '#cfe8ff' : '#ffd27a'; ctx.globalAlpha = 0.6 + r() * 0.4; ctx.fillRect(x, y, 9, 10); ctx.globalAlpha = 1; }
  }
  const t = tex(c); return t;
}
export function makeFacadeTexture(seed) {
  const W = 128, H = 256, c = canvas(W, H), ctx = c.getContext('2d'), r = rng(seed);
  const base = 40 + r() * 40; ctx.fillStyle = `rgb(${base},${base + 4},${base + 10})`; ctx.fillRect(0, 0, W, H);
  for (let y = 6; y < H - 6; y += 16) for (let x = 6; x < W - 6; x += 14) { ctx.fillStyle = '#0c1018'; ctx.fillRect(x, y, 9, 10); }
  return tex(c);
}
export function makeBlobShadow() {
  const c = canvas(128, 128), ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 10, 64, 64, 64); g.addColorStop(0, 'rgba(0,0,0,0.75)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 128, 128); return tex(c, false, false);
}
export function makeLabel(text, color = '#fff') {
  const c = canvas(256, 64), ctx = c.getContext('2d');
  ctx.font = 'bold 34px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(0,0,0,0.55)'; const w = Math.min(250, ctx.measureText(text).width + 30);
  ctx.beginPath(); ctx.roundRect(128 - w / 2, 6, w, 52, 26); ctx.fill();
  ctx.fillStyle = color; ctx.fillText(text, 128, 33);
  return tex(c, true, false);
}
export function makeCheckerTexture() {
  const c = canvas(256, 64), ctx = c.getContext('2d');
  for (let y = 0; y < 4; y++) for (let x = 0; x < 16; x++) { ctx.fillStyle = (x + y) % 2 ? '#111' : '#fafafa'; ctx.fillRect(x * 16, y * 16, 16, 16); }
  const t = tex(c); t.magFilter = THREE.NearestFilter; return t;
}
export { rng };

// Yol levhaları (gerçek levha oranları; piktogramlar renkli emoji ile çocuk dostu)
export function makeSignTexture(kind, text) {
  const W = 256, H = kind === 'name' || kind === 'dir' ? 128 : 256;
  const c = canvas(W, H), x = c.getContext('2d');
  x.lineJoin = 'round';
  if (kind === 'warn') { // kırmızı kenarlı üçgen uyarı levhası
    x.beginPath(); x.moveTo(128, 10); x.lineTo(246, 226); x.lineTo(10, 226); x.closePath();
    x.fillStyle = '#d50000'; x.fill(); x.beginPath(); x.moveTo(128, 46); x.lineTo(216, 206); x.lineTo(40, 206); x.closePath(); x.fillStyle = '#fafafa'; x.fill();
    x.font = '84px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 128, 152);
  } else if (kind === 'limit') { // hız sınırı
    x.beginPath(); x.arc(128, 128, 120, 0, 7); x.fillStyle = '#d50000'; x.fill(); x.beginPath(); x.arc(128, 128, 92, 0, 7); x.fillStyle = '#fafafa'; x.fill();
    x.fillStyle = '#111'; x.font = 'bold 104px "Arial Narrow",Arial,sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 128, 134);
  } else if (kind === 'name') { // yerleşim yeri levhası
    x.fillStyle = '#0d47a1'; x.beginPath(); x.roundRect(4, 4, 248, 120, 12); x.fill(); x.strokeStyle = '#fff'; x.lineWidth = 6; x.beginPath(); x.roundRect(12, 12, 232, 104, 8); x.stroke();
    x.fillStyle = '#fff'; x.font = 'bold 40px Arial,sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 128, 66, 220);
  } else if (kind === 'dir') { // yön levhası (yeşil)
    x.fillStyle = '#1b5e20'; x.beginPath(); x.roundRect(4, 4, 248, 120, 12); x.fill(); x.strokeStyle = '#fff'; x.lineWidth = 5; x.beginPath(); x.roundRect(12, 12, 232, 104, 8); x.stroke();
    x.fillStyle = '#fff'; x.font = 'bold 30px Arial,sans-serif'; x.textAlign = 'left'; x.textBaseline = 'middle'; const [a, b] = text.split('|'); x.fillText(a, 28, 46, 160); x.fillText(b, 28, 86, 160);
    x.font = 'bold 44px Arial'; x.fillText('➜', 196, 66);
  }
  const t = tex(c, true, false); return t;
}
