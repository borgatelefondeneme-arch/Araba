// Araç modifiyeleri: yükseltmeler ve aksesuarlar arabanın gövdesine "yapışık" görünür parçalar olarak eklenir.
// Gövde yüzeyi ışın (raycast) ile bulunur; şerit ve çıkartmalar yüzeyin eğrisini takip eder.
import * as THREE from 'three';
import { computeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;

const ray = new THREE.Raycaster();
const M = {
  chrome: new THREE.MeshStandardMaterial({ color: 0xf0f0f4, metalness: 1, roughness: 0.12 }),
  black: new THREE.MeshStandardMaterial({ color: 0x141518, metalness: 0.3, roughness: 0.45 }),
  carbon: new THREE.MeshPhysicalMaterial({ color: 0x1b1c20, metalness: 0.4, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.08 }),
  red: new THREE.MeshPhysicalMaterial({ color: 0xe01818, metalness: 0.2, roughness: 0.3, clearcoat: 1 }),
  amber: new THREE.MeshStandardMaterial({ color: 0xffb300, emissive: 0xff9800, emissiveIntensity: 2.2 }),
  blueGlow: new THREE.MeshBasicMaterial({ color: 0x40a8ff }),
};

const MEMO = new Map();
class Surface {
  constructor(car) {
    this.car = car; car.updateMatrixWorld(true);
    this.inv = car.matrixWorld.clone().invert();
    this.meshes = []; car.userData.body.traverse(o => { if (o.isMesh && o.visible) this.meshes.push(o); });
    this.ready = false;
    const ud = car.userData; this.L = ud.halfL; this.W = ud.halfW; this.H = ud.height;
    this.memo = MEMO.get(ud.key) || new Map(); MEMO.set(ud.key, this.memo); // yüzey sorguları model başına bir kez hesaplanır
  }
  cast(o, d) {
    const key = `${o.x.toFixed(3)},${o.y.toFixed(3)},${o.z.toFixed(3)}|${d.x},${d.y},${d.z}`;
    if (this.memo.has(key)) { const h = this.memo.get(key); return h && { p: h.p.clone(), n: h.n.clone() }; }
    const r = this.castRaw(o, d); this.memo.set(key, r && { p: r.p.clone(), n: r.n.clone() }); return r;
  }
  castRaw(o, d) {
    if (!this.ready) { // ilk ışında hızlandırma ağaçlarını kur (geometri başına bir kez)
      for (const ms of this.meshes) { if (!ms.geometry.boundsTree) { try { ms.geometry.computeBoundsTree(); } catch {} } ms.raycast = acceleratedRaycast; }
      this.ready = true; ray.firstHitOnly = true;
    }
    const m = this.car.matrixWorld;
    ray.set(o.clone().applyMatrix4(m), d.clone().transformDirection(m)); ray.far = 20;
    const h = ray.intersectObjects(this.meshes, false)[0]; if (!h) return null;
    const p = this.car.worldToLocal(h.point.clone());
    const n = h.face ? h.face.normal.clone().transformDirection(h.object.matrixWorld).transformDirection(this.inv) : new THREE.Vector3(0, 1, 0);
    if (n.dot(d) > 0) n.negate();
    return { p, n };
  }
  top(x, z) { return this.cast(new THREE.Vector3(x, this.H + 3, z), new THREE.Vector3(0, -1, 0)); }
  side(s, y, z) { return this.cast(new THREE.Vector3(s * (this.W + 3), y, z), new THREE.Vector3(-s, 0, 0)); }
  front(x, y) { return this.cast(new THREE.Vector3(x, y, -this.L - 3), new THREE.Vector3(0, 0, 1)); }
  rear(x, y) { return this.cast(new THREE.Vector3(x, y, this.L + 3), new THREE.Vector3(0, 0, -1)); }
  roof() { let best = null; for (let z = -this.L; z <= this.L; z += 0.1) { const h = this.top(0, z); if (h && (!best || h.p.y > best.p.y)) best = h; } return best; }
}

// Yüzeyi takip eden ızgara yaması (çıkartma / şerit)
function patch(grid, mat) {
  const rows = grid.length, cols = grid[0].length, pos = [], uv = [], idx = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const c = grid[j][i]; pos.push(c.p.x + c.n.x * 0.012, c.p.y + c.n.y * 0.012, c.p.z + c.n.z * 0.012); uv.push(i / (cols - 1), j / (rows - 1));
  }
  for (let j = 0; j < rows - 1; j++) for (let i = 0; i < cols - 1; i++) {
    const a = j * cols + i, b = a + 1, c = a + cols, d = c + 1;
    if (grid[j][i].ok && grid[j][i + 1].ok && grid[j + 1][i].ok && grid[j + 1][i + 1].ok) idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat); m.renderOrder = 2; return m;
}
function fillGrid(grid) { // eksik noktaları komşulardan doldur
  for (const row of grid) { let last = null; for (const c of row) { if (c.p) last = c; else if (last) { c.p = last.p.clone(); c.n = last.n.clone(); } } }
  for (const row of grid) for (const c of row) if (!c.p) { c.p = new THREE.Vector3(); c.n = new THREE.Vector3(0, 1, 0); c.ok = false; }
}
function sidePatch(S, s, z0, z1, y0, y1, cols, rows, uToRear) {
  const grid = [];
  for (let j = 0; j < rows; j++) { const y = y0 + (y1 - y0) * j / (rows - 1); const row = [];
    for (let i = 0; i < cols; i++) { const t = i / (cols - 1); const z = uToRear ? z0 + (z1 - z0) * t : z1 - (z1 - z0) * t; const h = S.side(s, y, z); row.push(h ? { ...h, ok: Math.abs(h.n.x) > 0.25 } : { ok: false }); }
    grid.push(row); }
  fillGrid(grid); return grid;
}
function topPatch(S, x0, x1, z0, z1, cols, rows) {
  const grid = [];
  for (let j = 0; j < rows; j++) { const z = z1 - (z1 - z0) * j / (rows - 1); const row = [];
    for (let i = 0; i < cols; i++) { const x = x0 + (x1 - x0) * i / (cols - 1); const h = S.top(x, z); row.push(h ? { ...h, ok: true } : { ok: false }); }
    grid.push(row); }
  fillGrid(grid); return grid;
}

// ---- çıkartma dokuları ----
const texCache = new Map();
function decalTex(kind, accent) {
  const k = kind + accent; if (texCache.has(k)) return texCache.get(k);
  const c = document.createElement('canvas'); c.width = 512; c.height = 128; const x = c.getContext('2d');
  if (kind === 'flames') {
    const g = x.createLinearGradient(0, 0, 512, 0); g.addColorStop(0, '#ffeb3b'); g.addColorStop(0.35, '#ff9800'); g.addColorStop(0.75, '#f4511e'); g.addColorStop(1, '#b71c1c');
    x.fillStyle = g; x.strokeStyle = '#3e0000'; x.lineWidth = 5;
    x.beginPath(); x.moveTo(0, 20); x.lineTo(0, 108);
    const tips = [[150, 104], [250, 86], [360, 100], [470, 70], [400, 58], [500, 40], [330, 36], [420, 14], [230, 28], [150, 8], [60, 22]];
    for (let i = 0; i < tips.length; i++) { const [tx, ty] = tips[i]; const px = i ? tips[i - 1][0] : 0; x.quadraticCurveTo((px + tx) / 2, ty + (i % 2 ? -26 : 26), tx, ty); }
    x.closePath(); x.fill(); x.stroke();
  } else if (kind === 'number') {
    x.fillStyle = '#fff'; x.beginPath(); x.arc(256, 64, 58, 0, 7); x.fill(); x.lineWidth = 8; x.strokeStyle = accent; x.stroke();
    x.fillStyle = '#111'; x.font = 'bold 84px Arial Black, Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('7', 256, 70);
  } else if (kind === 'stars') {
    const star = (cx, cy, r, col) => { x.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; i ? x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr) : x.moveTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.closePath(); x.fillStyle = col; x.fill(); x.lineWidth = 4; x.strokeStyle = '#fff'; x.stroke(); };
    star(90, 64, 46, '#ffd600'); star(220, 50, 32, '#ff4081'); star(330, 74, 40, '#40c4ff'); star(440, 52, 30, '#76ff03');
  } else if (kind === 'bolt') {
    x.fillStyle = '#ffeb3b'; x.strokeStyle = '#111'; x.lineWidth = 7; x.beginPath();
    x.moveTo(10, 70); x.lineTo(180, 40); x.lineTo(170, 62); x.lineTo(340, 30); x.lineTo(325, 56); x.lineTo(505, 22); x.lineTo(320, 96); x.lineTo(334, 72); x.lineTo(165, 104); x.lineTo(176, 82); x.closePath(); x.fill(); x.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; texCache.set(k, t); return t;
}
const decalMat = (t) => new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.35, roughness: 0.35, metalness: 0.1, polygonOffset: true, polygonOffsetFactor: -4, depthWrite: false });

let glowTex = null;
function neonTex() {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 6, 64, 64, 64); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.45, 'rgba(255,255,255,0.55)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128); glowTex = new THREE.CanvasTexture(c); return glowTex;
}

function alignTo(obj, n) { obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n.clone().normalize()); }
const box = (w, h, d, mat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.castShadow = true; return m; };
const tube = (len, r, mat) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 14), mat); m.castShadow = true; return m; };

/**
 * custom: {paint, finish, rim, spoiler, neon, decal, tint}; upg: {speed, handling, nitro, magnet, armor} (0..6)
 * Dönen grup arabaya eklenir; parts[name] = parça grubu (vurgulama animasyonu için)
 */
export function applyMods(car, custom = {}, upg = {}) {
  const old = car.getObjectByName('mods'); if (old) car.remove(old);
  const ud = car.userData, S = new Surface(car);
  const g = new THREE.Group(); g.name = 'mods'; car.add(g);
  const parts = {}; const part = (name) => (parts[name] ||= (() => { const p = new THREE.Group(); p.name = name; g.add(p); return p; })());
  const paintHex = custom.paint && custom.paint !== 'orig' ? custom.paint : '#d32f2f';
  const paintMat = new THREE.MeshPhysicalMaterial({ color: paintHex, metalness: 0.3, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.04 });
  const L = ud.halfL, W = ud.halfW;

  // --- jant rengi ve cam filmi (malzeme değişimi) ---
  if (custom.rim && custom.rim !== 'orig') {
    const rm = new THREE.MeshStandardMaterial({ color: custom.rim, metalness: 0.9, roughness: 0.22 });
    for (const w of ud.wheels) w.obj.traverse(o => { if (o.isMesh && /hubcap|rim/i.test(o.material.name || '')) o.material = rm; });
  }
  const TINT = { light: 0.35, dark: 0.65, black: 0.9 }[custom.tint];
  if (TINT) car.userData.body.traverse(o => {
    if (!o.isMesh || !/glass|window|windshield/i.test((o.material.name || '') + ' ' + (o.name || ''))) return;
    const m = o.material.clone(); m.color = new THREE.Color(m.color || 0x202833).lerp(new THREE.Color(0x020304), TINT);
    if ('opacity' in m && m.transparent) m.opacity = Math.max(m.opacity, 0.5 + TINT * 0.45); m.roughness = 0.05; o.material = m;
  });

  // --- kanat (spoiler) ---
  if (custom.spoiler && custom.spoiler !== 'none') {
    const P = part('spoiler'); const zr = L * 0.86; const t = S.top(0, zr) || S.top(0, L * 0.75);
    if (t) {
      const span = W * 2 * (custom.spoiler === 'big' ? 1.0 : 0.88);
      if (custom.spoiler === 'lip') { const b = box(span * 0.92, 0.05, 0.16, paintMat); b.position.copy(t.p).add(new THREE.Vector3(0, 0.03, 0.02)); b.rotation.x = -0.25; P.add(b); }
      else if (custom.spoiler === 'duck') { const b = box(span * 0.95, 0.1, 0.32, paintMat); b.position.copy(t.p).add(new THREE.Vector3(0, 0.05, 0.04)); b.rotation.x = -0.35; P.add(b); }
      else {
        const big = custom.spoiler === 'big', hgt = big ? 0.55 : 0.3, chord = big ? 0.42 : 0.32;
        const wing = box(span, 0.045, chord, M.carbon); wing.position.set(0, t.p.y + hgt, t.p.z + 0.05); wing.rotation.x = 0.12; P.add(wing);
        if (big) { const w2 = box(span * 0.96, 0.035, chord * 0.55, paintMat); w2.position.set(0, t.p.y + hgt + 0.1, t.p.z + 0.18); w2.rotation.x = 0.35; P.add(w2); }
        for (const sx of [-1, 1]) {
          const post = box(0.05, hgt, 0.12, M.carbon); post.position.set(sx * span * 0.3, t.p.y + hgt / 2, t.p.z + 0.05); P.add(post);
          const ep = box(0.03, big ? 0.32 : 0.2, chord + 0.08, paintMat); ep.position.set(sx * span / 2, t.p.y + hgt + 0.04, t.p.z + 0.05); P.add(ep);
        }
      }
    }
  }

  // --- neon alt aydınlatma ---
  if (custom.neon && custom.neon !== 'none') {
    const P = part('neon');
    const mat = new THREE.MeshBasicMaterial({ map: neonTex(), color: custom.neon === 'rainbow' ? 0xff0000 : custom.neon, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.95 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(W * 2 + 1.4, L * 2 + 1.2), mat); pl.rotation.x = -Math.PI / 2; pl.position.y = 0.025; pl.renderOrder = 1; P.add(pl);
    const tubeMat = new THREE.MeshBasicMaterial({ color: mat.color });
    for (const sx of [-1, 1]) { const t = tube(L * 1.5, 0.025, tubeMat); t.rotation.x = Math.PI / 2; t.position.set(sx * (W - 0.15), 0.12, 0); t.castShadow = false; P.add(t); }
    P.userData.neon = { mat, tubeMat, rainbow: custom.neon === 'rainbow' };
  }

  // --- çıkartmalar ---
  const d = custom.decal;
  if (d && d !== 'none') {
    const P = part('decal');
    if (d === 'stripes') {
      const light = new THREE.Color(paintHex).getHSL({}).l > 0.6;
      const sm = new THREE.MeshStandardMaterial({ color: light ? 0x111111 : 0xffffff, roughness: 0.3, polygonOffset: true, polygonOffsetFactor: -4 });
      for (const cx of [-0.2, 0.2]) P.add(patch(topPatch(S, cx - 0.085, cx + 0.085, -L * 0.98, L * 0.98, 2, 44), sm));
    } else {
      const tex = decalTex(d, paintHex), mat = decalMat(tex);
      const fz = -L * 0.62, rz = L * 0.25, y0 = ud.wr * 0.75, y1 = y0 + (d === 'number' ? 0.5 : 0.36);
      for (const s of [-1, 1]) {
        if (d === 'number') { const zc = -L * 0.05; P.add(patch(sidePatch(S, s, zc - 0.25, zc + 0.25, y0 + 0.05, y0 + 0.55, 12, 10, s < 0), mat)); }
        else P.add(patch(sidePatch(S, s, fz, rz, y0, y1, 18, 5, true), mat));
      }
      if (d === 'number') P.add(patch(topPatch(S, -0.3, 0.3, -L * 0.72, -L * 0.42, 10, 10), mat));
    }
  }

  // --- MOTOR: kaput hava girişi ---
  const sp = upg.speed || 0;
  if (sp >= 1) {
    const P = part('speed'); const h = S.top(0, -L * 0.5);
    if (h) {
      const sz = 0.75 + Math.min(sp, 6) * 0.07, sc = new THREE.Group();
      const b = box(0.52 * sz, 0.12 * sz, 0.7 * sz, sp >= 4 ? M.carbon : paintMat); b.position.y = 0.04; sc.add(b);
      const mouth = box(0.42 * sz, 0.07 * sz, 0.04, M.black); mouth.position.set(0, 0.05, -0.36 * sz); sc.add(mouth);
      if (sp >= 3) for (const x of [-0.12, 0.12]) { const f = box(0.02, 0.07 * sz, 0.03, M.chrome); f.position.set(x * sz, 0.05, -0.37 * sz); sc.add(f); }
      sc.position.copy(h.p); alignTo(sc, h.n); P.add(sc);
    }
  }
  // --- NİTRO (ve motor 2+): egzoz uçları, mavi parıltı ---
  const ni = upg.nitro || 0;
  if (ni >= 1 || sp >= 2) {
    const P = part('nitro'); const r = S.rear(0, ud.wr * 0.9) || S.rear(0, ud.wr * 1.3);
    const z = r ? r.p.z : L, n = ni >= 5 ? 4 : ni >= 3 ? 2 : 1, xs = n === 1 ? [W * 0.45] : n === 2 ? [-W * 0.45, W * 0.45] : [-W * 0.52, -W * 0.36, W * 0.36, W * 0.52];
    for (const x of xs) {
      const p = tube(0.3, 0.055 + (ni >= 4 ? 0.015 : 0), M.chrome); p.rotation.x = Math.PI / 2; p.position.set(x, ud.wr * 0.62, z + 0.06); P.add(p);
      if (ni >= 1) { const ring = new THREE.Mesh(new THREE.CircleGeometry(0.045, 16), M.blueGlow); ring.position.set(x, ud.wr * 0.62, z + 0.215); P.add(ring); }
    }
    if (ni >= 3) { // yanlarda "N2O" yazısı
      const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
      x.fillStyle = '#29b6f6'; x.font = 'italic 900 50px Arial Black, Arial'; x.textBaseline = 'middle'; x.fillText('N₂O', 8, 34); x.strokeStyle = '#fff'; x.lineWidth = 2; x.strokeText('N₂O', 8, 34);
      const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const mat = decalMat(t);
      for (const s of [-1, 1]) P.add(patch(sidePatch(S, s, L * 0.35, L * 0.75, ud.wr * 1.6, ud.wr * 1.6 + 0.16, 10, 4, s < 0), mat));
    }
  }
  // --- MIKNATIS: tavanda mıknatıs ---
  const mg = upg.magnet || 0;
  if (mg >= 1) {
    const P = part('magnet'), h = S.roof();
    if (h) {
      const s = 0.45 + mg * 0.07, m = new THREE.Group();
      const u = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.09, 12, 24, Math.PI), M.red); u.rotation.z = Math.PI; u.position.y = 0.38; u.castShadow = true; m.add(u);
      for (const x of [-0.28, 0.28]) { const tip = tube(0.14, 0.09, M.chrome); tip.position.set(x, 0.44, 0); m.add(tip); }
      const stand = tube(0.12, 0.05, M.black); stand.position.y = 0.06; m.add(stand);
      m.scale.setScalar(s); m.position.copy(h.p); m.rotation.y = Math.PI / 2; P.add(m);
    }
  }
  // --- ZIRH: ön koruma demiri, tavan lambası, yan korumalar ---
  const ar = upg.armor || 0;
  if (ar >= 1) {
    const P = part('armor'); const f = S.front(0, ud.wr * 1.1) || S.front(0, ud.wr * 1.5);
    const hood = S.top(0, -L * 0.8), z = (f ? f.p.z : -L) - 0.14, w = W * 1.5, y0 = ud.wr * 0.55, y1 = Math.min(ud.wr * 0.55 + 0.6 + Math.min(ar, 4) * 0.05, (hood ? hood.p.y : 1) + 0.05), r = 0.035 + ar * 0.004;
    for (const x of [-w / 2, -w / 6, w / 6, w / 2]) { const t = tube(y1 - y0, r, M.chrome); t.position.set(x, (y0 + y1) / 2, z); P.add(t); }
    for (const y of [y0 + 0.08, y1]) { const t = tube(w, r, M.chrome); t.rotation.z = Math.PI / 2; t.position.set(0, y, z); P.add(t); }
    if (ar >= 3) {
      const h = S.roof();
      if (h) { const bar = box(W * 1.3, 0.1, 0.16, M.black); bar.position.set(0, h.p.y + 0.12, h.p.z - 0.3); P.add(bar);
        for (let i = 0; i < 4; i++) { const l = box(0.16, 0.08, 0.04, M.amber); l.position.set(-W * 0.45 + i * W * 0.3, h.p.y + 0.12, h.p.z - 0.39); P.add(l); } }
    }
    if (ar >= 5) for (const s of [-1, 1]) { const t = tube(L * 1.2, 0.045, M.chrome); t.rotation.x = Math.PI / 2; t.position.set(s * (W + 0.02), ud.wr * 0.75, 0); P.add(t); }
  }

  // --- yol tutuş: gövdeyi alçalt (tekerlekler yerinde) ---
  const low = Math.min(0.09, (upg.handling || 0) * 0.016);
  if (low && ud.wheels.length) {
    const wheelSet = new Set(ud.wheels.map(w => w.obj)); const parent = ud.wheels[0].obj.parent;
    const q = new THREE.Quaternion(); parent.getWorldQuaternion(q); const cq = new THREE.Quaternion(); car.getWorldQuaternion(cq);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(cq).applyQuaternion(q.invert()); // arabanın "yukarı"sı ebeveyn uzayında
    for (const ch of parent.children) if (!wheelSet.has(ch)) { ch.userData.basePos ??= ch.position.clone(); ch.position.copy(ch.userData.basePos).addScaledVector(up, -low); }
    g.position.y = -low; if (parts.neon) parts.neon.position.y = low; // gövdeye bağlı parçalar da alçalır
  }

  g.userData.parts = parts;
  return g;
}

// neon gökkuşağı vb. animasyon
export function animateMods(car, t) {
  const n = car.getObjectByName('neon'); const nd = n?.userData.neon; if (!nd) return;
  if (nd.rainbow) { nd.mat.color.setHSL((t * 0.15) % 1, 1, 0.55); nd.tubeMat.color.copy(nd.mat.color); }
  nd.mat.opacity = 0.8 + Math.sin(t * 3) * 0.12;
}

// Kamera odakları: hangi parça seçilince araba nasıl dönsün (yerel açı φ: 0 = arka, π = ön)
export const FOCUS = {
  paint: { phi: 2.35, el: 0.28, zoom: 1 }, finish: { phi: 2.35, el: 0.4, zoom: 1.05 }, rim: { phi: 1.75, el: 0.12, zoom: 1.35 },
  spoiler: { phi: 0.55, el: 0.42, zoom: 1.15 }, neon: { phi: 1.6, el: 0.1, zoom: 1.05 }, decal: { phi: 1.45, el: 0.25, zoom: 1.1 }, tint: { phi: 2.2, el: 0.3, zoom: 1.15 },
  speed: { phi: 2.7, el: 0.6, zoom: 1.25 }, handling: { phi: 1.6, el: 0.08, zoom: 1.2 }, nitro: { phi: 0.35, el: 0.15, zoom: 1.3 },
  magnet: { phi: 2.0, el: 0.75, zoom: 1.15 }, armor: { phi: 2.85, el: 0.25, zoom: 1.25 },
};
