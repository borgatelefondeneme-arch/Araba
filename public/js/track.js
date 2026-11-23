// Bölüm içeriği: engeller, rampalar, yıldızlar, elmaslar, güçlendiriciler
import * as THREE from 'three';
import { buildCar, spinWheels, TRAFFIC_MODELS, LOW_TRAFFIC } from './cars.js';
import { propObject, propReady } from './env.js';
import { rng, makeCheckerTexture, ROAD } from './textures.js';

const LANES = ROAD.lanes;

// Engel tipleri: hw yarı genişlik, hl yarı uzunluk, h yükseklik
const OBST = {
  barrier: { hw: 1.4, hl: 0.3, h: 1.05 }, cones: { hw: 1.3, hl: 0.4, h: 0.8 }, hay: { hw: 1.4, hl: 0.8, h: 1.45 },
  logs: { hw: 1.5, hl: 0.6, h: 0.95 }, rocks: { hw: 1.3, hl: 1.0, h: 1.35 }, snowman: { hw: 0.8, hl: 0.8, h: 2.1 }, jersey: { hw: 1.5, hl: 0.5, h: 0.95 },
};
const THEME_OBST = { village: ['barrier', 'cones', 'hay'], forest: ['stumps', 'cones', 'cbarrier', 'barrels'], desert: ['rocks', 'barrier', 'barrels'], snow: ['snowman', 'cones', 'cbarrier'], city: ['jersey', 'cones', 'barrels', 'cbarrier'] };
OBST.stumps = { hw: 1.4, hl: 0.6, h: 0.9 }; OBST.barrels = { hw: 1.3, hl: 0.5, h: 1.05 }; OBST.cbarrier = { hw: 1.4, hl: 0.4, h: 1.1 };
// 3B modelli engeller (Grab3D CC0): [model, adet, yükseklik, genişlik]
const OBST_MODEL = { barrier: ['road-barrier', 1, 1.05, 2.9], cones: ['traffic-cone', 3, 0.75], hay: ['hay-bale', 2, 1.45, 1.45], stumps: ['tree-stump', 2, 0.85, 1.3], barrels: ['traffic-barrel', 2, 1.05], cbarrier: ['construction-barrier', 1, 1.1, 2.9], rocks: ['boulder-rock-set', 1, 1.35, 2.7], snowman: ['snowman', 1, 2.1], jersey: ['jersey-barrier', 1, 0.95, 3.0], logs: ['tree-stump', 2, 0.85, 1.3] };
function modelObstacle(kind) {
  const d = OBST_MODEL[kind]; if (!d || !propReady(d[0])) return null;
  const [name, n, h, w] = d, g = new THREE.Group();
  for (let i = 0; i < n; i++) { const o = propObject(name, { h, w }); if (!o) return null; o.position.x = n === 1 ? 0 : (i - (n - 1) / 2) * (2.6 / n) * 1.1; o.rotation.y = (i * 1.3) % 0.6 - 0.3 + (name === 'road-barrier' || name === 'construction-barrier' || name === 'jersey-barrier' ? (o.userData.size.z > o.userData.size.x ? Math.PI / 2 : 0) : 0); g.add(o); }
  g.userData = OBST[kind]; return g;
}

// ---------- Paylaşılan malzeme ve geometriler ----------
let R = null;
function res() {
  if (R) return R;
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64; const c = cv.getContext('2d');
  c.fillStyle = '#fff'; c.fillRect(0, 0, 256, 64); c.fillStyle = '#d50000';
  for (let i = -2; i < 10; i++) { c.beginPath(); c.moveTo(i * 32, 64); c.lineTo(i * 32 + 16, 64); c.lineTo(i * 32 + 48, 0); c.lineTo(i * 32 + 32, 0); c.fill(); }
  const stripeT = new THREE.CanvasTexture(cv); stripeT.colorSpace = THREE.SRGBColorSpace;
  const cv2 = document.createElement('canvas'); cv2.width = 64; cv2.height = 256; const c2 = cv2.getContext('2d');
  c2.fillStyle = '#ffcc00'; c2.fillRect(0, 0, 64, 256); c2.fillStyle = '#111';
  for (let y = 0; y < 256; y += 64) { c2.beginPath(); c2.moveTo(0, y + 40); c2.lineTo(32, y + 10); c2.lineTo(64, y + 40); c2.lineTo(64, y + 58); c2.lineTo(32, y + 28); c2.lineTo(0, y + 58); c2.fill(); }
  const chevT = new THREE.CanvasTexture(cv2); chevT.colorSpace = THREE.SRGBColorSpace; chevT.wrapS = chevT.wrapT = THREE.RepeatWrapping;
  const starShape = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2 + Math.PI / 2, rr = i % 2 ? 0.24 : 0.55; const x = Math.cos(a) * rr, y = Math.sin(a) * rr; i ? starShape.lineTo(x, y) : starShape.moveTo(x, y); }
  const starGeo = new THREE.ExtrudeGeometry(starShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 3 }); starGeo.center();
  const rampShape = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(7, 0), new THREE.Vector2(7, 1.3)]);
  const rampGeo = new THREE.ExtrudeGeometry(rampShape, { depth: 3, bevelEnabled: false }); rampGeo.translate(0, 0, -1.5); rampGeo.rotateY(Math.PI / 2);
  // rampanın üst yüzeyine UV ayarı
  const coneGeo = new THREE.ConeGeometry(0.28, 0.75, 16); coneGeo.translate(0, 0.375, 0);
  const M = (o) => new THREE.MeshStandardMaterial(o);
  R = {
    stripeMat: M({ map: stripeT, roughness: 0.5 }), metal: M({ color: 0x8a9099, metalness: 0.8, roughness: 0.4 }),
    cone: M({ color: 0xff5a00, roughness: 0.55 }), coneBand: M({ color: 0xf2f2f2, roughness: 0.4 }), coneGeo,
    hay: M({ color: 0xd8b45c, roughness: 1 }), wood: M({ color: 0x7a5534, roughness: 0.9 }), woodEnd: M({ color: 0xc9a36b, roughness: 0.9 }),
    rock: M({ color: 0x8c6a4c, roughness: 0.95, flatShading: true }), snow: M({ color: 0xffffff, roughness: 0.55 }), coal: M({ color: 0x111111 }), carrot: M({ color: 0xff7a00 }),
    concrete: M({ color: 0xb8b6b0, roughness: 0.9 }),
    gold: M({ color: 0xffc21a, metalness: 1, roughness: 0.2, emissive: 0x7a4a00, emissiveIntensity: 0.55 }), starGeo,
    diamond: new THREE.MeshPhysicalMaterial({ color: 0x7ef0ff, metalness: 0.05, roughness: 0.02, emissive: 0x0b9cc4, emissiveIntensity: 0.9, clearcoat: 1, iridescence: 0.8, flatShading: true }),
    diamondGeo: new THREE.OctahedronGeometry(0.5, 0).scale(0.8, 1.15, 0.8),
    rampTop: M({ map: chevT, roughness: 0.5 }), rampSide: M({ color: 0x2c2f33, metalness: 0.7, roughness: 0.5 }), rampGeo,
    glow: new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false }),
    checker: makeCheckerTexture(),
  };
  return R;
}

function mesh(geo, mat, x = 0, y = 0, z = 0, cast = true) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; return m; }

function makeObstacle(kind, r) {
  const mo = modelObstacle(kind); if (mo) return mo;
  const g = new THREE.Group(), S = res();
  switch (kind) {
    case 'barrier': {
      g.add(mesh(new THREE.BoxGeometry(2.8, 0.42, 0.12), S.stripeMat, 0, 0.78));
      for (const x of [-1.15, 1.15]) { g.add(mesh(new THREE.BoxGeometry(0.08, 1.0, 0.08), S.metal, x, 0.5)); g.add(mesh(new THREE.BoxGeometry(0.08, 0.06, 0.7), S.metal, x, 0.03)); }
      const l = mesh(new THREE.SphereGeometry(0.09, 10, 8), new THREE.MeshStandardMaterial({ color: 0xff9100, emissive: 0xff6d00, emissiveIntensity: 3 }), -1.15, 1.05, 0, false); g.add(l);
      break;
    }
    case 'cones': for (const x of [-1, 0, 1]) { g.add(mesh(S.coneGeo, S.cone, x, 0)); g.add(mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.14, 16), S.coneBand, x, 0.42, 0, false)); g.add(mesh(new THREE.BoxGeometry(0.6, 0.05, 0.6), S.cone, x, 0.025)); } break;
    case 'hay': {
      const hg = new THREE.CylinderGeometry(0.7, 0.7, 1.3, 20); hg.rotateZ(Math.PI / 2);
      g.add(mesh(hg, S.hay, -0.7, 0.7)); g.add(mesh(hg, S.hay, 0.7, 0.7)); break;
    }
    case 'logs': {
      const lg = new THREE.CylinderGeometry(0.3, 0.3, 3, 14); lg.rotateZ(Math.PI / 2);
      for (const [y, z] of [[0.3, -0.32], [0.3, 0.32], [0.82, 0]]) g.add(mesh(lg, [S.wood, S.woodEnd, S.woodEnd], 0, y, z));
      break;
    }
    case 'rocks': {
      for (let i = 0; i < 3; i++) { const m = mesh(new THREE.DodecahedronGeometry(0.6 + r() * 0.3, 0), S.rock, -0.9 + i * 0.9, 0.5, (r() - 0.5) * 0.8); m.rotation.set(r() * 3, r() * 3, 0); g.add(m); }
      break;
    }
    case 'snowman': {
      g.add(mesh(new THREE.SphereGeometry(0.65, 20, 14), S.snow, 0, 0.6)); g.add(mesh(new THREE.SphereGeometry(0.46, 20, 14), S.snow, 0, 1.4)); g.add(mesh(new THREE.SphereGeometry(0.32, 20, 14), S.snow, 0, 1.95));
      const n = mesh(new THREE.ConeGeometry(0.06, 0.35, 8), S.carrot, 0, 1.95, 0.4, false); n.rotation.x = Math.PI / 2; g.add(n);
      for (const x of [-0.11, 0.11]) g.add(mesh(new THREE.SphereGeometry(0.04, 8, 6), S.coal, x, 2.05, 0.28, false));
      g.add(mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.32, 16), S.coal, 0, 2.35, 0)); g.add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.04, 16), S.coal, 0, 2.2, 0));
      break;
    }
    case 'jersey': {
      const sh = new THREE.Shape([new THREE.Vector2(-0.3, 0), new THREE.Vector2(0.3, 0), new THREE.Vector2(0.12, 0.3), new THREE.Vector2(0.09, 0.95), new THREE.Vector2(-0.09, 0.95), new THREE.Vector2(-0.12, 0.3)]);
      const jg = new THREE.ExtrudeGeometry(sh, { depth: 1.45, bevelEnabled: false }); jg.rotateY(Math.PI / 2);
      for (const x of [-1.48, 0.03]) g.add(mesh(jg, S.concrete, x, 0));
      g.add(mesh(new THREE.BoxGeometry(2.9, 0.12, 0.2), S.stripeMat, 0, 0.75, 0, false));
      break;
    }
  }
  g.userData = OBST[kind];
  return g;
}

function makeCollectible(kind) {
  const S = res(), g = new THREE.Group();
  if (kind === 'star') { const m = mesh(S.starGeo, S.gold, 0, 0, 0, true); g.add(m); }
  else if (kind === 'diamond') { g.add(mesh(S.diamondGeo, S.diamond, 0, 0, 0, true)); }
  else {
    const col = kind === 'magnet' ? 0xff1744 : kind === 'nitro' ? 0x2979ff : 0x00e5ff;
    const mat = new THREE.MeshPhysicalMaterial({ color: col, metalness: 0.3, roughness: 0.2, clearcoat: 1, emissive: col, emissiveIntensity: 0.35 });
    if (kind === 'magnet') { const t = mesh(new THREE.TorusGeometry(0.42, 0.14, 12, 24, Math.PI), mat); t.rotation.z = Math.PI; g.add(t); for (const x of [-0.42, 0.42]) g.add(mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.24, 12), R.metal, x, 0.12)); }
    else if (kind === 'nitro') { g.add(mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.9, 20), mat)); g.add(mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.25, 12), R.metal, 0, 0.55)); }
    else { const sm = new THREE.MeshPhysicalMaterial({ color: 0x80deea, transparent: true, opacity: 0.35, roughness: 0, clearcoat: 1, emissive: 0x00bcd4, emissiveIntensity: 0.5 }); g.add(mesh(new THREE.SphereGeometry(0.6, 24, 16), sm, 0, 0, 0, false)); g.add(mesh(new THREE.OctahedronGeometry(0.28), mat)); }
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.7, 0.95, 32), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = -1.15; g.add(ring);
  }
  return g;
}

// Polis arabasına tepe lambası + parıltı
let copGlow = null;
function addPoliceLights(car) {
  if (!copGlow) { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); copGlow = new THREE.CanvasTexture(c); }
  const mk = (col, xo) => { const g = new THREE.Group(); const b = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.14, 0.25), new THREE.MeshBasicMaterial({ color: col })); const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: copGlow, color: col, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })); s.scale.setScalar(3); g.add(b, s); g.position.set(xo, car.userData.height + 0.1, 0); car.add(g); return g; };
  car.userData.cop = [mk(0xff2020, -0.25), mk(0x3070ff, 0.25)];
}
// Hız şeridi: yerde parlayan ok desenli şerit
let boostTex = null;
function makeBoost() {
  if (!boostTex) { const c = document.createElement('canvas'); c.width = 64; c.height = 256; const x = c.getContext('2d'); x.fillStyle = '#00131f'; x.fillRect(0, 0, 64, 256);
    for (let y = 0; y < 256; y += 64) { x.fillStyle = '#00e5ff'; x.beginPath(); x.moveTo(6, y + 50); x.lineTo(32, y + 14); x.lineTo(58, y + 50); x.lineTo(58, y + 62); x.lineTo(32, y + 28); x.lineTo(6, y + 62); x.fill(); }
    boostTex = new THREE.CanvasTexture(c); boostTex.colorSpace = THREE.SRGBColorSpace; boostTex.wrapT = THREE.RepeatWrapping; boostTex.repeat.set(1, 2); }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 9), new THREE.MeshBasicMaterial({ map: boostTex, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.03; const g = new THREE.Group(); g.add(m); g.userData.boost = m; return g;
}
// Kırılabilir karton kutu yığını (nitro/kalkan gerekmez, çarpınca dağılır)
let crateMat = null;
function makeCrates() {
  if (!crateMat) { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); x.fillStyle = '#c9a06a'; x.fillRect(0, 0, 64, 64); x.fillStyle = '#a57c48'; x.fillRect(0, 28, 64, 8); x.strokeStyle = '#7a5a30'; x.lineWidth = 3; x.strokeRect(2, 2, 60, 60); x.fillStyle = '#5a3d1e'; x.font = 'bold 14px Arial'; x.fillText('↑↑', 22, 22);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; crateMat = new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }); }
  const g = new THREE.Group(), geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
  for (const [x, y, z] of [[-0.85, 0.4, 0], [0, 0.4, 0.1], [0.85, 0.4, -0.05], [-0.42, 1.2, 0], [0.42, 1.2, 0.05]]) { const b = new THREE.Mesh(geo, crateMat); b.position.set(x, y, z); b.rotation.y = (x * 7) % 0.4; b.castShadow = true; g.add(b); }
  return g;
}

function makeRamp() { const S = res(); const m = new THREE.Mesh(S.rampGeo, [S.rampSide, S.rampTop]); m.castShadow = true; m.receiveShadow = true; return m; }

function makeFinish() {
  const S = res(), g = new THREE.Group();
  const ck = S.checker.clone(); ck.needsUpdate = true; ck.wrapS = ck.wrapT = THREE.RepeatWrapping; ck.repeat.set(1, 1);
  const line = new THREE.Mesh(new THREE.PlaneGeometry(12, 2), new THREE.MeshStandardMaterial({ map: ck, roughness: 0.6 })); line.rotation.x = -Math.PI / 2; line.position.y = 0.02; line.receiveShadow = true; g.add(line);
  const pm = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.6, roughness: 0.3 });
  for (const x of [-7.2, 7.2]) g.add(mesh(new THREE.CylinderGeometry(0.25, 0.3, 7, 16), pm, x, 3.5));
  const bt = S.checker.clone(); bt.needsUpdate = true; bt.wrapS = THREE.RepeatWrapping; bt.repeat.set(2, 1);
  g.add(mesh(new THREE.BoxGeometry(15, 1.4, 0.3), new THREE.MeshStandardMaterial({ map: bt, roughness: 0.5, emissive: 0x222222 }), 0, 6.6));
  for (let i = 0; i < 8; i++) { const b = mesh(new THREE.SphereGeometry(0.25, 12, 8), new THREE.MeshStandardMaterial({ color: [0xff1744, 0xffea00, 0x00e676, 0x2979ff][i % 4], emissive: [0xff1744, 0xffea00, 0x00e676, 0x2979ff][i % 4], emissiveIntensity: 0.6 }), -6 + i * 1.7, 5.7, 0, false); g.add(b); }
  return g;
}

// ---------- Bölüm üretimi (deterministik, çok oyunculuda herkes aynı yolu görür) ----------
// Bölüm başına 4 trafik modeli (bellek için); 'compact-car' her zaman var (rampa sonrası park aracı)
export function trafficSet(level) {
  const r = rng(level.n * 31 + 7), pool = TRAFFIC_MODELS.filter(m => m !== 'compact-car'), out = ['compact-car'];
  while (out.length < 4) { const m = pool.splice(Math.floor(r() * pool.length), 1)[0]; out.push(m); }
  return out;
}
export function generateLevel(level, seed) {
  const TRAFFIC_TYPES = trafficSet(level), RAMP_TYPES = TRAFFIC_TYPES.filter(m => LOW_TRAFFIC.includes(m));
  const r = rng(seed), ents = [], L = level.length, d = (level.n - 1) / 39;
  let z = 90, prevFree = [0, 1, 2], trafficLanes = new Set(), lastRamp = -999, totalStars = 0;
  const themeObst = THEME_OBST[level.theme] || THEME_OBST.village;
  const pick = (a) => a[Math.floor(r() * a.length)];
  const addStars = (lane, z0, z1, yFn) => { for (let s = z0; s < z1; s += 3.4) { ents.push({ kind: 'star', lane, z: s, y: yFn ? yFn(s) : 1.0 }); totalStars++; } };
  const reachable = (lane) => prevFree.some(p => Math.abs(p - lane) <= 1);
  while (z < L - 80) {
    const spacing = (46 - d * 18) * (0.85 + r() * 0.4) * (level.speed / 26);
    const roll = r();
    let free = [0, 1, 2], newTraffic = new Set();
    if (roll < 0.11 + d * 0.05 && z - lastRamp > 160) {
      // rampa + park etmiş araç + elmas yayı
      const cand = [0, 1, 2].filter(reachable); const lane = pick(cand);
      ents.push({ kind: 'ramp', lane, z, len: 7, h: 1.3 });
      const carZ = z + 7 + 13;
      ents.push({ kind: 'traffic', lane, z: carZ, speed: 0, ttype: pick(RAMP_TYPES), color: 'orig' });
      const v = level.speed + 2;
      for (let i = 1; i <= 6; i++) { const t = i * 0.1; ents.push({ kind: i === 3 || i === 4 ? 'diamond' : 'star', lane, z: z + 7 + v * t, y: 1.3 + 11 * t - 15 * t * t + 0.9 }); if (!(i === 3 || i === 4)) totalStars++; }
      free = [0, 1, 2].filter(l => l !== lane); lastRamp = z;
      if (r() < 0.5) { const other = pick(free.filter(l => !trafficLanes.has(l))); if (other !== undefined && free.length > 1) { ents.push({ kind: 'obst', type: 'barrier', lane: other, z: carZ }); free = free.filter(l => l !== other); } }
      z += 50; prevFree = free.length ? free : [lane]; trafficLanes = new Set();
      continue;
    }
    if (roll < 0.11 + level.density) {
      const two = r() < 0.3 + d * 0.4;
      const candFree = [0, 1, 2].filter(reachable);
      const f = pick(candFree);
      let others = [0, 1, 2].filter(l => l !== f);
      if (!two) others = [pick(others)];
      for (const lane of others) {
        if (trafficLanes.has(lane)) continue;
        if (level.mode === 'police' && r() < 0.3) { ents.push({ kind: 'traffic', lane, z, speed: 0, ttype: 'police-car', color: 'orig', block: true }); } // polis barikatı
        else if (r() < level.traffic) { ents.push({ kind: 'traffic', lane, z, speed: 4 + r() * 5, ttype: pick(TRAFFIC_TYPES), color: 'orig' }); newTraffic.add(lane); }
        else {
          const type = pick(themeObst); ents.push({ kind: 'obst', type, lane, z });
          if (OBST[type].h <= 1.1 && r() < 0.35) { for (let i = -1; i <= 1; i++) { ents.push({ kind: 'star', lane, z: z + i * 2.6, y: 2.1 - Math.abs(i) * 0.4 }); totalStars++; } }
        }
        free = free.filter(l => l !== lane);
      }
    }
    // hız şeridi (boost) ve kırılabilir kutular
    if (r() < 0.16) ents.push({ kind: 'boost', lane: pick(free), z: z + spacing * 0.35 });
    if (r() < 0.14 + d * 0.06) { const l = pick(free); ents.push({ kind: 'crates', lane: l, z: z + spacing * 0.65 }); }
    // yıldız dizisi
    const sl = pick(free);
    if (r() < 0.85) addStars(sl, z + 8, z + spacing - 8);
    const spare = free.filter(l => l !== sl);
    if (r() < 0.075 + d * 0.02) ents.push({ kind: 'diamond', lane: spare.length ? pick(spare) : sl, z: z + spacing * 0.5, y: 1.1 });
    else if (r() < 0.07) ents.push({ kind: pick(['magnet', 'nitro', 'shield', 'magnet', 'nitro']), lane: spare.length ? pick(spare) : sl, z: z + spacing * 0.55, y: 1.3 });
    prevFree = free; trafficLanes = newTraffic;
    z += spacing;
  }
  // bitişe kadar yıldızlar
  addStars(1, L - 70, L - 10);
  ents.push({ kind: 'finish', lane: 1, z: L });
  ents.sort((a, b) => a.z - b.z);
  for (const e of ents) e.x = LANES[e.lane];
  return { ents, totalStars };
}

// ---------- Sahnede gösterme / havuz ----------
export class TrackView {
  constructor(scene, level, seed) {
    this.scene = scene; this.level = level;
    const g = generateLevel(level, seed); this.ents = g.ents; this.totalStars = g.totalStars;
    this.pools = new Map(); this.next = 0; this.active = [];
    const S = res(); this.starIM = new THREE.InstancedMesh(S.starGeo, S.gold, 400); this.starIM.count = 0; this.starIM.frustumCulled = false; this.starIM.castShadow = false; scene.add(this.starIM);
    this.r = rng(seed + 5);
  }
  acquire(key, make) {
    const p = this.pools.get(key); if (p && p.length) { const o = p.pop(); o.visible = true; return o; }
    return make();
  }
  release(key, obj) { obj.visible = false; if (!this.pools.has(key)) this.pools.set(key, []); this.pools.get(key).push(obj); }
  spawn(e) {
    let key, obj;
    switch (e.kind) {
      case 'obst': key = 'o:' + e.type; obj = this.acquire(key, () => makeObstacle(e.type, this.r)); Object.assign(e, obj.userData); break;
      case 'traffic': key = 't:' + e.ttype + e.color; obj = this.acquire(key, () => { const c = buildCar(e.ttype, e.color, { lite: true }); if (e.ttype === 'police-car') addPoliceLights(c); return c; });
        e.hw = obj.userData.halfW; e.hl = obj.userData.halfL; e.h = obj.userData.height + 0.15; break;
      case 'ramp': key = 'ramp'; obj = this.acquire(key, makeRamp); break;
      case 'boost': key = 'boost'; obj = this.acquire(key, makeBoost); break;
      case 'crates': key = 'crates'; obj = this.acquire(key, makeCrates); e.hw = 1.3; e.hl = 0.7; e.h = 1.4; break;
      case 'finish': key = 'finish'; obj = this.acquire(key, makeFinish); break;
      case 'star': key = 'star'; obj = this.acquire(key, () => new THREE.Object3D()); break; // yıldızlar tek seferde (instancing) çizilir
      default: key = e.kind; obj = this.acquire(key, () => makeCollectible(e.kind));
    }
    obj.rotation.set(0, 0, 0); obj.scale.setScalar(1);
    obj.position.set(e.x, e.y || 0, -e.z);
    if (!obj.parent) this.scene.add(obj);
    e.obj = obj; e.key = key; e.alive = true; e.active = false; e.fly = null; e.collectT = 0;
    this.active.push(e);
  }
  // ısınma: bu bölümde çıkabilecek her nesne türünden birer tane (sonra havuza döner)
  warmObjects() {
    const seen = new Set(), out = [];
    for (const e of this.ents) {
      const key = e.kind === 'obst' ? 'o:' + e.type : e.kind === 'traffic' ? 't:' + e.ttype + e.color : e.kind;
      if (seen.has(key)) continue; seen.add(key);
      const tmp = { ...e }; this.spawn(tmp); this.active.pop();
      tmp.obj.position.set(0, -50, 30 - this.active.length); out.push(tmp);
    }
    return out;
  }
  releaseWarm(list) { for (const e of list) this.despawn(e); }
  despawn(e) { if (e.obj) this.release(e.key, e.obj); e.obj = null; }
  update(dist, dt, time) {
    while (this.next < this.ents.length && this.ents[this.next].z < dist + 280) this.spawn(this.ents[this.next++]);
    for (let i = this.active.length - 1; i >= 0; i--) {
      const e = this.active[i];
      const o = e.obj;
      if (e.kind === 'traffic' && e.speed > 0 && e.alive) {
        if (!e.active && e.z - dist < 95) e.active = true;
        if (e.active) e.z += e.speed * dt;
      }
      if (e.fly) { // çarpılınca savrulma
        e.fly.vy -= 25 * dt; o.position.x += e.fly.vx * dt; o.position.y = Math.max(0, o.position.y + e.fly.vy * dt); o.position.z -= e.fly.vz * dt;
        o.rotation.x += e.fly.rx * dt; o.rotation.z += e.fly.rz * dt;
      } else if (e.collectT > 0) {
        e.collectT += dt; o.scale.setScalar(Math.max(0.01, 1 - e.collectT * 5)); o.position.y += dt * 5; o.position.z = -dist - 1.2; // arabayla birlikte gidip küçülerek kaybolur
        if (e.collectT > 0.18) { o.visible = false; }
      } else {
        o.position.z = -e.z;
        if (e.magnet) { o.position.x += (e.magnet.x - o.position.x) * Math.min(1, dt * 12); o.position.y += (e.magnet.y + 1 - o.position.y) * Math.min(1, dt * 12); }
        if (o.userData.cop) { const b = Math.floor(time * 6 + e.z) % 2 === 0; o.userData.cop[0].visible = b; o.userData.cop[1].visible = !b; }
        if (e.kind === 'boost') o.userData.boost.material.map.offset.y = -time * 1.5;
        if (e.kind === 'star') o.rotation.y = Math.sin(time * 2.5 + e.z * 0.3) * 0.7; // hep kameraya dönük salınır (yandan çubuk gibi görünmesin)
        else if (e.kind === 'diamond') { o.rotation.y = time * 2; o.position.y = e.y + Math.sin(time * 3 + e.z) * 0.15; }
        else if (['magnet', 'nitro', 'shield'].includes(e.kind)) { o.rotation.y = time * 2; o.position.y = e.y + Math.sin(time * 3) * 0.15; }
        if (e.kind === 'traffic') { spinWheels(o, e.z); }
      }
      if (e.z < dist - 25 || (e.fly && e.fly.t !== undefined && (e.fly.t += dt) > 2.5)) { this.despawn(e); this.active.splice(i, 1); }
    }
  }
  writeStars() {
    let n = 0; const im = this.starIM;
    for (const e of this.active) { if (e.kind !== 'star' || !e.obj || !e.obj.visible || n >= 400) continue; e.obj.updateMatrix(); im.setMatrixAt(n++, e.obj.matrix); }
    im.count = n; im.instanceMatrix.needsUpdate = true;
  }
  dispose() { for (const e of this.active) this.despawn(e); for (const p of this.pools.values()) for (const o of p) this.scene.remove(o); this.scene.remove(this.starIM); this.starIM.dispose(); }
}
