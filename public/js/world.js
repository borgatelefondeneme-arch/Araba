// Ortam: gerçek gökyüzü fotoğrafı (HDRI), tepeli arazi, PBR asfalt/zemin dokuları, 3D çevre modelleri (instanced)
import * as THREE from 'three';
import { makeFacadeTexture, makeWindowTexture, makeSignTexture, ROAD, rng } from './textures.js';
import { PropInstancer, preloadProps, THEME_PROPS, OBSTACLE_PROPS, propReady, setPropQuality } from './env.js';
import { assetURL } from './assets.js';

// Gökyüzü: Poly Haven CC0 HDRI'lerden üretilmiş fotoğraflar (public/sky). u,v: güneşin görüntüdeki yeri
export const THEMES = {
  village: { sky: 'village', u: 0.595, v: 0.234, horizon: 0xc4ccd6, fogD: 0.0028, sun: 0xfff0d8, sunI: 3.2, hemiS: 0xcfe4ff, hemiG: 0x5a6b3a, hemiI: 0.5, env: 0.9, exposure: 1.0, ground: 'leafy_grass', groundTint: 0xe6f0d0, hills: { near: 18, far: 90 }, bloom: 0 },
  forest: { sky: 'forest', u: 0.596, v: 0.445, horizon: 0xd6dde0, fogD: 0.0034, sun: 0xffd2a0, sunI: 2.8, hemiS: 0xffe2c4, hemiG: 0x2f4020, hemiI: 0.5, env: 0.85, exposure: 1.0, ground: 'forest_floor', groundTint: 0xffffff, hills: { near: 26, far: 140 }, bloom: 0 },
  desert: { sky: 'desert', u: 0.600, v: 0.450, horizon: 0xd9e2e4, fogD: 0.0026, sun: 0xfff1dc, sunI: 3.6, hemiS: 0xfff0d8, hemiG: 0xb88a50, hemiI: 0.5, env: 0.9, exposure: 0.95, ground: 'aerial_sand', groundTint: 0xf3dcb4, hills: { near: 10, far: 70, dunes: true }, bloom: 0 },
  snow: { sky: 'snow', u: 0.582, v: 0.372, horizon: 0xdadce0, fogD: 0.0042, sun: 0xeef4ff, sunI: 2.0, hemiS: 0xe6efff, hemiG: 0xb8c4d0, hemiI: 0.6, env: 1.0, exposure: 1.0, ground: 'snow_02', groundTint: 0xffffff, hills: { near: 30, far: 240 }, bloom: 0 },
  city: { sky: 'city', night: true, u: 0.599, v: 0.406, horizon: 0x1a2230, fogD: 0.0050, sun: 0x9fb4ff, sunI: 0.6, hemiS: 0x2a3a70, hemiG: 0x101018, hemiI: 0.45, env: 0.5, exposure: 1.05, ground: 'grass_path_2', groundTint: 0x7a8a7a, hills: { near: 0, far: 0 }, bloom: 0.8 },
};

// ---------- önden yükleme (gökyüzü, dokular, modeller) ----------
const texCache = new Map();
const texLoader = new THREE.TextureLoader();
function loadTex(url, srgb) {
  if (texCache.has(url)) return texCache.get(url);
  const p = new Promise((ok) => texLoader.load(assetURL(url), (t) => { if (srgb) t.colorSpace = THREE.SRGBColorSpace; ok(t); }, undefined, () => ok(null)));
  texCache.set(url, p); return p;
}
const loaded = {};
export async function preloadWorld(theme, quality) {
  if (quality) setPropQuality(quality);
  const T = THEMES[theme];
  const [sky, gd, gn, gr, ad, an, ar] = await Promise.all([
    loadTex(`sky/${T.sky}.jpg`, true),
    loadTex(`tex/${T.ground}_diff.jpg`, true), loadTex(`tex/${T.ground}_nor_gl.jpg`), loadTex(`tex/${T.ground}_rough.jpg`),
    loadTex('tex/asphalt_02_diff.jpg', true), loadTex('tex/asphalt_02_nor_gl.jpg'), loadTex('tex/asphalt_02_rough.jpg'),
  ]);
  loaded[theme] = { sky, gd, gn, gr, ad, an, ar };
  await preloadProps([...THEME_PROPS[theme], ...OBSTACLE_PROPS]);
}

// ---------- arazi yüksekliği (z yönünde 1200 m periyodik) ----------
const PERIOD = 1200;
function terrainH(hills, x, z, seed) {
  const ax = Math.abs(x); if (!hills || (!hills.near && !hills.far)) return 0;
  const w = (k) => (2 * Math.PI * k) / PERIOD, sx = x > 0 ? 1.7 : 0.6;
  const n1 = 0.5 + 0.25 * Math.sin(w(3) * z + sx + seed) + 0.15 * Math.sin(w(7) * z + x * 0.021) + 0.1 * Math.sin(w(13) * z + x * 0.05 + seed * 2);
  const n2 = 0.55 + 0.3 * Math.sin(w(2) * z + sx * 2 + seed) + 0.15 * Math.sin(w(5) * z + x * 0.008);
  const s = (a, b, t) => { const k = Math.min(1, Math.max(0, (t - a) / (b - a))); return k * k * (3 - 2 * k); };
  let h = hills.near * s(16, 90, ax) * n1 + hills.far * s(120, 420, ax) * n2;
  if (hills.dunes) h += 2.2 * s(14, 40, ax) * (Math.sin(x * 0.09 + w(17) * z) * 0.5 + 0.5) * Math.sin(w(23) * z + x * 0.03);
  return h;
}

// Yol dokusu: gerçek asfalt fotoğrafı + şerit çizgileri
function roadTextures(L, theme) {
  const W = 512, H = 1024, c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  const px = W / (ROAD.halfWidth * 2), toX = (m) => (m + ROAD.halfWidth) * px;
  const tileW = W / 3, tileH = tileW;
  const tile = (img, ctx) => { for (let ty = 0; ty < H; ty += tileH) for (let tx = 0; tx < W; tx += tileW) ctx.drawImage(img, tx, ty, tileW, tileH); };
  if (L.ad?.image) tile(L.ad.image, x); else { x.fillStyle = '#3a3b3e'; x.fillRect(0, 0, W, H); }
  x.fillStyle = theme === 'city' ? 'rgba(10,12,16,0.35)' : 'rgba(30,30,32,0.18)'; x.fillRect(0, 0, W, H);
  for (const lx of [-3.4, 0, 3.4]) { const g = x.createLinearGradient(toX(lx - 1.1), 0, toX(lx + 1.1), 0); g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.3, 'rgba(0,0,0,0.16)'); g.addColorStop(0.5, 'rgba(0,0,0,0.02)'); g.addColorStop(0.7, 'rgba(0,0,0,0.16)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(toX(lx - 1.1), 0, 2.2 * px, H); }
  const mark = (x0, x1, y0, y1, col = '#f1f1ee') => { x.fillStyle = col; x.globalAlpha = 0.93; x.fillRect(toX(x0), y0, (x1 - x0) * px, y1 - y0); x.globalAlpha = 1; };
  for (const e of [-5.2, 5.05]) mark(e, e + 0.15, 0, H);
  for (const d of [-1.7, 1.7]) { mark(d - 0.07, d + 0.07, 0, H * 0.25); mark(d - 0.07, d + 0.07, H * 0.5, H * 0.75); }
  // kenar: toprak / kar / kaldırım
  const sh = { desert: '#b08c5c', snow: '#e9eef5', city: '#6b6e74', forest: '#5a4a35', village: '#6f6247' }[theme];
  x.fillStyle = sh; x.fillRect(0, 0, toX(-5.75), H); x.fillRect(toX(5.75), 0, W - toX(5.75), H);
  const map = new THREE.CanvasTexture(c); map.colorSpace = THREE.SRGBColorSpace;
  const mk = (img) => { if (!img?.image) return null; const cc = document.createElement('canvas'); cc.width = W; cc.height = H; tile(img.image, cc.getContext('2d')); return new THREE.CanvasTexture(cc); };
  const normal = mk(L.an), rough = mk(L.ar);
  for (const t of [map, normal, rough]) if (t) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; }
  return { map, normal, rough };
}

// ---------- tabela tanımları ----------
const SIGNS = {
  village: [['warn', '🐄'], ['warn', '🚸'], ['warn', '🚜'], ['warn', '🐑'], ['limit', '50'], ['dir', 'Köy Meydanı|2 km'], ['name', 'YEŞİL KÖY']],
  forest: [['warn', '🦌'], ['warn', '🐻'], ['warn', '🌲'], ['limit', '70'], ['dir', 'Şelale|5 km'], ['name', 'ÇAM ORMANI']],
  desert: [['warn', '🐪'], ['warn', '☀️'], ['warn', '🦂'], ['limit', '90'], ['dir', 'Vaha|12 km'], ['name', 'KIZGIN ÇÖL']],
  snow: [['warn', '❄️'], ['warn', '⛷️'], ['warn', '🦌'], ['limit', '40'], ['dir', 'Kayak Merkezi|3 km'], ['name', 'KARLI DAĞ']],
  city: [['warn', '🚦'], ['warn', '🚸'], ['warn', '🚲'], ['limit', '60'], ['dir', 'Şehir Merkezi|1 km'], ['name', 'GECE ŞEHRİ']],
};
function buildingGeo(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0);
  const uv = g.attributes.uv, n = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) { const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i)); uv.setXY(i, uv.getX(i) * (nx > 0.5 ? d : w) / 9, uv.getY(i) * (ny > 0.5 ? d : h) / 18); }
  return g;
}

export class World {
  constructor(engine, theme, seed = 1) {
    this.engine = engine; this.theme = theme; this.T = THEMES[theme]; this.seed = seed;
    const T = this.T, L = loaded[theme] || {}, q = engine.quality;
    const scene = this.scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(T.horizon, T.fogD);
    // gökyüzü ve yansımalar
    const el = (0.5 - T.v) * Math.PI, az = (T.u - 0.5) * Math.PI * 2;
    const wantAz = Math.atan2(-0.35, -0.94); // güneş solda, hafif önde
    this.skyRot = az - wantAz;
    const lightEl = T.night ? 0.9 : Math.max(el, THREE.MathUtils.degToRad(28));
    this.sunDir = new THREE.Vector3(Math.cos(lightEl) * Math.cos(wantAz), Math.sin(lightEl), Math.cos(lightEl) * Math.sin(wantAz)).normalize();
    if (L.sky) {
      L.sky.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = L.sky; scene.backgroundRotation.set(0, this.skyRot, 0);
      const pm = new THREE.PMREMGenerator(engine.renderer);
      this.envRT = pm.fromEquirectangular(L.sky); scene.environment = this.envRT.texture; scene.environmentRotation.set(0, this.skyRot, 0);
      scene.environmentIntensity = T.env; pm.dispose();
    } else { scene.background = new THREE.Color(T.horizon); }
    // ışıklar
    this.hemi = new THREE.HemisphereLight(T.hemiS, T.hemiG, T.hemiI); scene.add(this.hemi);
    const sun = this.sun = new THREE.DirectionalLight(T.sun, T.sunI);
    sun.castShadow = q.shadows > 0;
    if (sun.castShadow) {
      sun.shadow.mapSize.set(q.shadows, q.shadows);
      const c = sun.shadow.camera; c.left = -40; c.right = 40; c.top = 60; c.bottom = -40; c.near = 1; c.far = 220;
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04;
    }
    scene.add(sun); scene.add(sun.target);
    // arazi (tepeler ve dağlar)
    this.buildTerrain(L);
    // yol
    const rt = roadTextures(L, theme), RL = 600;
    for (const t of [rt.map, rt.normal, rt.rough]) if (t) t.repeat.set(1, RL / ROAD.texLen);
    const road = this.road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD.halfWidth * 2, RL), new THREE.MeshStandardMaterial({
      map: rt.map, normalMap: rt.normal, roughnessMap: rt.rough, normalScale: new THREE.Vector2(0.9, 0.9), roughness: theme === 'city' ? 0.55 : 1, metalness: theme === 'city' ? 0.1 : 0 }));
    road.rotation.x = -Math.PI / 2; road.position.y = 0.01; road.receiveShadow = true; scene.add(road); this.roadLen = RL;
    // kaldırım taşı (bordür)
    const curbMat = new THREE.MeshStandardMaterial({ color: theme === 'snow' ? 0xdfe6ee : 0xb9b6ae, roughness: 0.8 });
    this.curbs = [-1, 1].map(s => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.16, RL), curbMat); m.position.set(s * (ROAD.halfWidth + 0.1), 0.06, 0); m.receiveShadow = true; scene.add(m); return m; });
    // dekor
    this.props = new PropInstancer(scene, Math.round(70 * q.props));
    for (const n of THEME_PROPS[theme]) this.props.ensure(n); // tüm örnek kümeleri baştan (yarış ortasında oluşturma takılması olmasın)
    this.buildSigns();
    if (theme === 'city') this.buildCityBlocks();
    this.chunks = new Map(); this.chunkLen = 40; this.lastKey = '';
    if (T.night) this.buildLampGlow();
  }

  buildTerrain(L) {
    const T = this.T, W = 1000, LEN = PERIOD * 2, SX = 100, SZ = 240;
    const g = new THREE.PlaneGeometry(W, LEN, SX, SZ); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i); const z = p.getZ(i);
      // yol kenarına daha sık köşe noktası
      const ax = Math.abs(x); if (ax < 100) x = Math.sign(x) * (ax * ax / 100);
      p.setX(i, x); p.setY(i, terrainH(T.hills, x, z, this.seed % 7) - 0.04);
      uv.setXY(i, x / 9, z / 9);
    }
    g.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ map: L.gd || null, normalMap: L.gn || null, roughnessMap: L.gr || null, color: L.gd ? T.groundTint : 0x6d8a4a, roughness: 1, normalScale: new THREE.Vector2(1.2, 1.2) });
    for (const t of [L.gd, L.gn, L.gr]) if (t) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; }
    this.terrain = new THREE.Mesh(g, mat); this.terrain.receiveShadow = true; this.scene.add(this.terrain);
  }
  heightAt(x, z) { return terrainH(this.T.hills, x, z, this.seed % 7); }

  buildSigns() {
    const S = this.scene, th = this.theme;
    this.signDefs = SIGNS[th] || SIGNS.village; this.signInst = [];
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x8a9098, metalness: 0.8, roughness: 0.35 });
    const poleGeo = new THREE.CylinderGeometry(0.05, 0.05, 1, 8); poleGeo.translate(0, 0.5, 0);
    this.poles = new THREE.InstancedMesh(poleGeo, poleMat, 60); this.poles.count = 0; this.poles.castShadow = true; this.poles.frustumCulled = false; S.add(this.poles);
    this.signDefs.forEach(([kind, text]) => {
      const t = makeSignTexture(kind, text), big = kind === 'name' || kind === 'dir';
      const w = big ? 2.4 : 1.25, h = big ? 1.2 : 1.25, g = new THREE.PlaneGeometry(w, h); g.translate(0, h / 2, 0);
      const mat = new THREE.MeshStandardMaterial({ map: t, alphaTest: 0.5, roughness: 0.35, metalness: 0.1, side: THREE.DoubleSide, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: th === 'city' ? 0.35 : 0.06 });
      const im = new THREE.InstancedMesh(g, mat, 30); im.count = 0; im.castShadow = true; im.frustumCulled = false; S.add(im); this.signInst.push(im);
    });
  }
  buildCityBlocks() {
    this.bVariants = [];
    for (let i = 0; i < 6; i++) {
      const w = 12 + (i % 3) * 6, h = 30 + i * 12, d = 14;
      const mat = new THREE.MeshStandardMaterial({ map: makeFacadeTexture(30 + i), emissiveMap: makeWindowTexture(50 + i, 0.45), emissive: 0xffffff, emissiveIntensity: 1.7, roughness: 0.35, metalness: 0.4 });
      const im = new THREE.InstancedMesh(buildingGeo(w, h, d), mat, 60); im.count = 0; im.frustumCulled = false; this.scene.add(im);
      this.bVariants.push({ w, h, d, im });
    }
  }
  buildLampGlow() {
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(255,240,200,1)'); g.addColorStop(0.3, 'rgba(255,200,120,0.5)'); g.addColorStop(1, 'rgba(255,180,90,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    this.glowGeo = new THREE.BufferGeometry(); this.glowGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(600 * 3), 3));
    this.glow = new THREE.Points(this.glowGeo, new THREE.PointsMaterial({ map: new THREE.CanvasTexture(c), size: 3.2, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: true }));
    this.glow.frustumCulled = false; this.scene.add(this.glow);
  }

  // 40 m'lik parça içeriği (deterministik)
  chunkProps(k) {
    const r = rng(this.seed * 31 + k * 977 + 13), th = this.theme, items = [], z0 = -k * this.chunkLen, CL = this.chunkLen, q = this.engine.quality.props;
    const pick = (a) => a[Math.floor(r() * a.length)];
    const P = (name, x, z, h, ry = r() * 6.28) => items.push({ name, x, z, h, ry, y: this.heightAt(x, z) });
    const H = (name) => { const pr = { 'oak-tree': [7, 10], 'apple-tree': [4.5, 6], 'cypress-tree': [9, 13], 'olive-tree': [4, 5.5], 'bush': [1.2, 2], 'pine-tree': [9, 14], 'spruce-tree': [10, 16], 'birch-tree': [9, 12], 'autumn-tree': [7, 9], 'snowy-pine-tree': [9, 14], 'cactus': [3, 5], 'barrel-cactus': [1, 1.4], 'palm-tree': [8, 11], 'rocky-outcrop': [5, 9], 'boulder-rock-set': [1.6, 3], 'small-rock-set': [0.6, 1], 'grass-clump': [0.5, 0.9], 'sunflower': [1.6, 2.1], 'tree-stump': [0.6, 0.8] }[name] || [1, 1]; return pr[0] + r() * (pr[1] - pr[0]); };
    const side = () => (r() < 0.5 ? -1 : 1);
    const far = (a, b) => a + Math.pow(r(), 1.4) * (b - a);
    const scatter = (names, n, a, b) => { for (let i = 0; i < n; i++) { const s = side(), nm = pick(names); P(nm, s * far(a, b), z0 - r() * CL, H(nm)); } };
    const house = (names, a, b, h) => { const s = side(), nm = pick(names); P(nm, s * (a + r() * (b - a)), z0 - 6 - r() * (CL - 12), h ?? 7, s > 0 ? -Math.PI / 2 : Math.PI / 2); };
    // korkuluk (bariyer) sırası
    const rail = propReady('guard-rail');
    if (rail && th !== 'village') {
      const sz = rail.size, len = Math.max(sz.x, sz.z) * (0.82 / sz.y), along = sz.x > sz.z;
      for (const s of [-1, 1]) for (let z = z0; z > z0 - CL; z -= len * 0.98) items.push({ name: 'guard-rail', x: s * 6.75, z: z - len / 2, h: 0.82, ry: along ? Math.PI / 2 : 0, y: 0 });
    }
    if (th === 'village') {
      scatter(['grass-clump'], Math.round(26 * this.engine.quality.grass), 7, 18);
      scatter(['oak-tree', 'apple-tree', 'olive-tree', 'oak-tree', 'bush'], Math.round(9 * q), 11, 90);
      if (r() < 0.6) { const s = side(), x0 = s * (12 + r() * 3); for (let i = 0; i < 5; i++) P('cypress-tree', x0, z0 - i * 7 - r() * 2, H('cypress-tree')); }
      if (r() < 0.75) house(['cottage-house', 'stone-house', 'farmhouse'], 18, 34, 6.5 + r() * 1.5);
      if (r() < 0.25) house(['barn', 'silo', 'windmill'], 34, 70, 10 + r() * 3);
      if (r() < 0.35 * Math.min(1, this.engine.quality.grass * 2)) { const s = side(), x0 = s * (16 + r() * 10), zc = z0 - 8 - r() * 20, nr = this.engine.quality.grass >= 1 ? 7 : 4, nc = this.engine.quality.grass >= 1 ? 4 : 3; for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) P('sunflower', x0 + s * j * 1.4 + (r() - 0.5) * 0.4, zc - i * 1.3, H('sunflower'), r() * 0.6 - 0.3 + (s > 0 ? -1.2 : 1.2)); }
      if (r() < 0.3) { const s = side(); P('cow', s * (14 + r() * 14), z0 - r() * CL, 1.55); }
      if (r() < 0.35) { const s = side(); P(pick(['hay-bale', 'hay-bale', 'village-well']), s * (12 + r() * 10), z0 - r() * CL, r() < 0.7 ? 1.5 : 3.2); }
      if (r() < 0.5) { const s = side(), x = s * (8.6 + r() * 0.4), zc = z0 - r() * 30; for (let i = 0; i < 4; i++) P('wooden-fence', x, zc - i * 2.6, 1.15, 0); }
      P('power-pole', 9.6, z0 - 20, 9.5, 0);
    } else if (th === 'forest') {
      scatter(['grass-clump'], Math.round(16 * this.engine.quality.grass), 7, 16);
      scatter(['pine-tree', 'spruce-tree', 'pine-tree', 'birch-tree', 'autumn-tree'], Math.round(22 * q), 9.5, 85);
      scatter(['tree-stump', 'small-rock-set', 'boulder-rock-set', 'bush'], Math.round(5 * q), 8, 30);
      if (r() < 0.12) house(['log-cabin'], 20, 34, 6.5);
    } else if (th === 'desert') {
      scatter(['cactus', 'barrel-cactus', 'cactus', 'small-rock-set'], Math.round(9 * q), 9, 70);
      scatter(['rocky-outcrop', 'boulder-rock-set'], Math.round(3 * q), 18, 110);
      if (r() < 0.12) { const s = side(), x0 = s * (20 + r() * 25), zc = z0 - r() * CL; for (let i = 0; i < 4; i++) P('palm-tree', x0 + (r() - 0.5) * 9, zc + (r() - 0.5) * 9, H('palm-tree')); }
      if (r() < 0.15) house(['adobe-house'], 18, 36, 6.5);
      if (k % 2 === 0) P('power-pole', -9.6, z0 - 12, 9.5, 0);
    } else if (th === 'snow') {
      scatter(['snowy-pine-tree'], Math.round(20 * q), 9.5, 90);
      scatter(['boulder-rock-set'], Math.round(2 * q), 10, 40);
      if (r() < 0.35) house(['snowy-cabin', 'alpine-chalet'], 18, 34, 7 + r() * 2);
      if (r() < 0.2) { const s = side(); P('snowman', s * (8.5 + r() * 4), z0 - r() * CL, 2, s > 0 ? -1.2 : 1.2); }
    } else if (th === 'city') {
      for (const s of [-1, 1]) {
        let z = z0 - r() * 4;
        while (z > z0 - CL) { const nm = pick(['shop-front', 'corner-shop', 'apartment-building', 'shop-front']); const h = nm === 'apartment-building' ? 24 : 11 + r() * 2; P(nm, s * (15 + h * 0.18), z - 7, h, s > 0 ? -Math.PI / 2 : Math.PI / 2); z -= 16 + r() * 4; }
        if (r() < 0.6) P(pick(['office-tower', 'high-rise-apartment', 'skyscraper']), s * (40 + r() * 30), z0 - r() * CL, 40 + r() * 30, s > 0 ? -Math.PI / 2 : Math.PI / 2);
      }
      if (r() < 0.5) { const s = side(); P(pick(['bus-stop-shelter', 'park-bench', 'fire-hydrant']), s * 8.4, z0 - r() * CL, 1, s > 0 ? -Math.PI / 2 : Math.PI / 2); }
      if (r() < 0.6) { const s = side(); P('oak-tree', s * (8.8 + r()), z0 - r() * CL, 6 + r() * 2); }
      // uzak ışıklı bloklar
      for (const s of [-1, 1]) { const v = Math.floor(r() * this.bVariants.length); items.push({ block: v, x: s * (90 + r() * 60), z: z0 - r() * CL, ry: Math.PI / 2 }); }
    }
    // sokak lambaları
    if (th === 'city' || th === 'village' || th === 'snow') for (const s of [-1, 1]) { const z = z0 - (s > 0 ? 4 : 24); P('street-light', s * 7.3, z, 7.2, s > 0 ? Math.PI : 0); items.push({ glow: true, x: s * 5.9, y: 7, z }); }
    // levhalar
    if (k % 3 === 1 || k % 25 === 3) {
      const nameIdx = this.signDefs.findIndex(d => d[0] === 'name'); const i = k % 25 === 3 ? nameIdx : Math.floor(r() * this.signDefs.length);
      const s = k % 25 === 3 ? 1 : (r() < 0.75 ? 1 : -1), big = this.signDefs[i][0] === 'name' || this.signDefs[i][0] === 'dir';
      items.push({ sign: i, x: s * 7.9, z: z0 - 30, big, ry: s > 0 ? -0.25 : 0.25 });
    }
    return items;
  }

  rebuildInstances(minK, maxK) {
    for (let k = minK; k <= maxK; k++) if (!this.chunks.has(k)) this.chunks.set(k, this.chunkProps(k));
    for (const k of this.chunks.keys()) if (k < minK - 1 || k > maxK + 1) this.chunks.delete(k);
    const m = new THREE.Matrix4(), qt = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), pos = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    this.props.begin();
    const signN = this.signInst.map(() => 0); let poleN = 0; const bN = (this.bVariants || []).map(() => 0); const glows = [];
    for (let k = minK; k <= maxK; k++) for (const it of this.chunks.get(k) || []) {
      if (it.name) this.props.add(it.name, it.x, it.y || 0, it.z, it.h, it.ry);
      else if (it.glow) glows.push(it.x, it.y, it.z);
      else if (it.sign !== undefined) {
        const im = this.signInst[it.sign]; if (signN[it.sign] >= 30) continue;
        qt.setFromAxisAngle(up, it.ry); pos.set(it.x + (it.big ? 0.45 : 0), it.big ? 2 : 2.1, it.z + 0.05); m.compose(pos, qt, one); im.setMatrixAt(signN[it.sign]++, m);
        for (const dx of it.big ? [0, 0.9] : [0]) { if (poleN >= 60) break; pos.set(it.x + dx, 0, it.z); m.compose(pos, qt, new THREE.Vector3(1, it.big ? 2.2 : 2.3, 1)); this.poles.setMatrixAt(poleN++, m); }
      } else if (it.block !== undefined) {
        const b = this.bVariants[it.block]; if (bN[it.block] >= 60) continue; qt.setFromAxisAngle(up, it.ry); pos.set(it.x, 0, it.z); m.compose(pos, qt, one); b.im.setMatrixAt(bN[it.block]++, m);
      }
    }
    this.props.end();
    this.signInst.forEach((im, i) => { im.count = signN[i]; im.instanceMatrix.needsUpdate = true; });
    this.poles.count = poleN; this.poles.instanceMatrix.needsUpdate = true;
    (this.bVariants || []).forEach((b, i) => { b.im.count = bN[i]; b.im.instanceMatrix.needsUpdate = true; });
    if (this.glow) { const a = this.glowGeo.attributes.position; a.array.fill(0); a.array.set(glows.slice(0, 1800)); a.needsUpdate = true; this.glowGeo.setDrawRange(0, Math.min(600, glows.length / 3)); }
  }

  update(pz, camera, dt) {
    this.terrain.position.z = Math.round(pz / PERIOD) * PERIOD;
    this.road.position.z = Math.round(pz / 12) * 12 - this.roadLen / 2 + 120;
    for (const c of this.curbs) c.position.z = this.road.position.z;
    const s = this.sun; s.target.position.set(0, 0, pz - 22); s.position.copy(s.target.position).addScaledVector(this.sunDir, 120);
    const ck = Math.floor(-pz / this.chunkLen), range = this.engine.quality.range;
    const minK = ck - 1, maxK = ck + Math.ceil(range / this.chunkLen), key = minK + ':' + maxK;
    if (key !== this.lastKey) { this.lastKey = key; this.rebuildInstances(minK, maxK); }
  }

  dispose() {
    this.envRT?.dispose();
    // örnekleme tamponları ve bu dünyaya ait doku/malzemeler (paylaşılan model malzemeleri hariç)
    this.scene.traverse(o => {
      if (o.isInstancedMesh) o.dispose();
      if ((o.isInstancedMesh && !o.userData.shared) || o === this.glow) { const m = o.material; if (m && !m.userData?.shared) { for (const k of ['map', 'emissiveMap']) if (m[k] && !m[k].userData?.shared) m[k].dispose(); } }
    });
    this.glowGeo?.dispose(); this.poles?.geometry.dispose();
    this.terrain.geometry.dispose(); this.road.material.map?.dispose(); this.road.material.normalMap?.dispose(); this.road.material.roughnessMap?.dispose();
  }
}
