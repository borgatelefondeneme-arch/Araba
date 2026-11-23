// Yüksek poligonlu glTF araç modelleri: yükleme, boya rengi değiştirme, tekerlek döndürme
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { assetURL } from './assets.js';

// Grab3D modelleri: CC0 (grab3d.com). CarConcept: Khronos glTF Sample Assets, CC-BY 4.0 (Darmstadt Graphics Group / Eric Chadwick).
export const MODELS = {
  'hatchback': { file: 'hatchback.glb' },
  '1990s-sports-car': { file: '1990s-sports-car.glb' },
  '1990s-off-roader': { file: '1990s-off-roader.glb' },
  '1990s-pickup-truck': { file: '1990s-pickup-truck.glb' },
  'police-car': { file: 'police-car.glb', fixed: true },
  'muscle-car': { file: 'muscle-car.glb' },
  'rally-car': { file: 'rally-car.glb' },
  'monster-truck': { file: 'monster-truck.glb' },
  'fire-truck': { file: 'fire-truck.glb', fixed: true },
  'concept': { file: 'CarConcept.glb', concept: true },
  // trafik
  '1990s-taxi': { file: '1990s-taxi.glb', fixed: true },
  'delivery-van': { file: 'delivery-van.glb' },
  'ice-cream-truck': { file: 'ice-cream-truck.glb', fixed: true },
  'compact-car': { file: 'compact-car.glb' },
  'electric-car': { file: 'electric-car.glb' },
  '1990s-suv': { file: '1990s-suv.glb' },
  'coupe': { file: 'coupe.glb' },
  'convertible': { file: 'convertible.glb' },
};
export const TRAFFIC_MODELS = ['compact-car', '1990s-taxi', 'delivery-van', 'ice-cream-truck', 'electric-car', '1990s-suv', 'coupe', 'convertible'];
export const LOW_TRAFFIC = ['compact-car', 'coupe', 'electric-car', 'convertible', '1990s-taxi'];

const manager = new THREE.LoadingManager(); manager.setURLModifier(assetURL);
const loader = new GLTFLoader(manager); loader.setMeshoptDecoder(MeshoptDecoder);
// claude.ai yayınında .glb sunulmadığı için sayfa TURBO_FMT='json' ayarlar (glTF + ayrı dokular)
const FMT = () => window.TURBO_FMT || 'glb';
const cache = new Map();

export function loadModel(key) {
  if (!MODELS[key]) key = 'hatchback';
  if (cache.has(key)) return cache.get(key);
  const p = loader.loadAsync('models/' + MODELS[key].file.replace(/\.glb$/, '.' + FMT())).then(g => prepare(key, g.scene));
  cache.set(key, p);
  p.catch(() => cache.delete(key));
  return p;
}
export const preloadModels = (keys) => Promise.all([...new Set(keys)].map(loadModel));
const ready = new Map();

function prepare(key, scene) {
  const meta = MODELS[key];
  const outer = new THREE.Group();
  const inner = new THREE.Group(); inner.rotation.y = Math.PI; // modeller +z'ye bakıyor, oyunda -z ileri
  inner.add(scene); outer.add(inner);
  scene.traverse(o => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = true;
    const fix = (m) => {
      const n = (m.name || '').toLowerCase();
      if (meta.concept && m.transmission > 0) { // pahalı iletim (transmission) yerine hafif cam
        return new THREE.MeshPhysicalMaterial({ name: m.name, color: 0x101820, roughness: 0.02, metalness: 0, transparent: true, opacity: 0.4, clearcoat: 1, envMapIntensity: 1.5, side: THREE.DoubleSide });
      }
      if (n.includes('body_pbr')) { // cilalı otomobil boyası görünümü
        return new THREE.MeshPhysicalMaterial({ name: m.name, map: m.map, normalMap: m.normalMap, roughnessMap: m.roughnessMap, metalnessMap: m.metalnessMap, roughness: 1, metalness: 1, side: m.side, clearcoat: 0.9, clearcoatRoughness: 0.06, envMapIntensity: 1.1 });
      }
      if (n.includes('glass')) { m.envMapIntensity = 1.6; m.roughness = Math.min(m.roughness, 0.06); }
      return m;
    };
    o.material = Array.isArray(o.material) ? o.material.map(fix) : fix(o.material);
  });
  outer.updateMatrixWorld(true);
  // tekerlekler: dönme ekseni = arabanın yan ekseni (dış uzayda +x), her tekerleğin ebeveyn uzayına çevrilir
  const wheels = [];
  const parentQ = new THREE.Quaternion();
  scene.traverse(o => {
    const n = o.name || '';
    if (/_wheel_[fr][lr]$/i.test(n) || /^Wheel(Front|Rear)[LR]$/.test(n)) {
      o.parent.getWorldQuaternion(parentQ);
      const axis = new THREE.Vector3(1, 0, 0).applyQuaternion(parentQ.clone().invert()).normalize();
      const box = new THREE.Box3().setFromObject(o);
      wheels.push({ name: n, axis, base: o.quaternion.clone(), r: (box.max.y - box.min.y) / 2 });
    }
  });
  const box = new THREE.Box3().setFromObject(outer);
  const size = box.getSize(new THREE.Vector3());
  outer.userData = {
    key, wheels, wr: wheels.length ? wheels[0].r : 0.35,
    halfW: Math.min(size.x / 2, 1.05), halfL: size.z / 2, height: size.y,
  };
  // boya rengi tespiti (Grab3D: doku atlasındaki baskın renk)
  if (!meta.concept && !meta.fixed) outer.userData.paint = detectPaint(scene);
  ready.set(key, outer);
  return outer;
}

function bodyMaterial(scene) { let b = null; scene.traverse(o => { if (o.isMesh && (o.material.name || '').toLowerCase().includes('body_pbr')) b = o.material; }); return b; }
function rgb2hsv(r, g, b) { const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; let h = 0; if (d) { h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60; if (h < 0) h += 360; } return [h, mx ? d / mx : 0, mx]; }
function imgToCanvas(img, size) { const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(img, 0, 0, size, size); return c; }
function detectPaint(scene) {
  const m = bodyMaterial(scene); if (!m || !m.map?.image) return null;
  const c = imgToCanvas(m.map.image, 96), d = c.getContext('2d').getImageData(0, 0, 96, 96).data;
  const bins = new Array(36).fill(0).map(() => ({ n: 0, r: 0, g: 0, b: 0 }));
  for (let i = 0; i < d.length; i += 4) {
    const [h, s, v] = rgb2hsv(d[i] / 255, d[i + 1] / 255, d[i + 2] / 255);
    if (s < 0.22 || v < 0.25) continue;
    const bn = bins[Math.floor(h / 10) % 36]; bn.n++; bn.r += d[i]; bn.g += d[i + 1]; bn.b += d[i + 2];
  }
  const best = bins.reduce((a, b) => (b.n > a.n ? b : a));
  if (best.n < 50) return null;
  const r = best.r / best.n, g = best.g / best.n, b = best.b / best.n;
  return { rgb: [r, g, b], hsv: rgb2hsv(r / 255, g / 255, b / 255) };
}

// Belirli renk için boyanmış malzeme seti
const paintCache = new Map();
function paintedMaterials(tpl, color) {
  const key = tpl.userData.key + color;
  if (paintCache.has(key)) return paintCache.get(key);
  const meta = MODELS[tpl.userData.key], map = new Map();
  const target = new THREE.Color(color);
  if (meta.concept) {
    tpl.traverse(o => { if (o.isMesh && /^Paint 1/.test(o.material.name)) { const m = o.material.clone(); m.color.copy(target); m.metalness = 0.6; m.roughness = 0.3; map.set(o.material, m); } });
  } else if (tpl.userData.paint) {
    const P = tpl.userData.paint, [ph, ps, pv] = P.hsv;
    const tr = target.clone().convertLinearToSRGB(), T = [tr.r * 255, tr.g * 255, tr.b * 255];
    const body = bodyMaterial(tpl);
    const size = Math.min(1024, body.map.image.width);
    const cv = imgToCanvas(body.map.image, size), ctx = cv.getContext('2d'), id = ctx.getImageData(0, 0, size, size), d = id.data;
    for (let i = 0; i < d.length; i += 4) {
      const [h, s, v] = rgb2hsv(d[i] / 255, d[i + 1] / 255, d[i + 2] / 255);
      let dh = Math.abs(h - ph); if (dh > 180) dh = 360 - dh;
      if (dh > 26 || s < ps * 0.45) continue;
      const w = Math.min(1, (26 - dh) / 10) * Math.min(1, (s - ps * 0.45) / (ps * 0.3));
      const k = v / pv;
      for (let j = 0; j < 3; j++) d[i + j] = d[i + j] * (1 - w) + Math.min(255, T[j] * k) * w;
    }
    ctx.putImageData(id, 0, 0);
    const t = new THREE.CanvasTexture(cv); t.flipY = body.map.flipY; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    const nb = body.clone(); nb.map = t; map.set(body, nb);
    // boya renginde düz malzemeler (jant kapağı vb.)
    tpl.traverse(o => {
      if (!o.isMesh || map.has(o.material) || o.material.map) return;
      const c = o.material.color.clone().convertLinearToSRGB(); const [h, s] = rgb2hsv(c.r, c.g, c.b);
      let dh = Math.abs(h - ph); if (dh > 180) dh = 360 - dh;
      if (dh < 20 && s > 0.2) { const m = o.material.clone(); m.color.copy(target); map.set(o.material, m); }
    });
  }
  paintCache.set(key, map); return map;
}

// Boya kaplaması: parlak / metalik / mat / sedef / şeker / krom
const FIN = {
  metal: { metalness: 0.65, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.04, dropMaps: true },
  matte: { metalness: 0.0, roughness: 0.78, clearcoat: 0, clearcoatRoughness: 0.5, dropMaps: true },
  pearl: { metalness: 0.25, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.03, iridescence: 1, iridescenceIOR: 1.35, dropMaps: true },
  candy: { metalness: 0.85, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.02, dropMaps: true },
  chrome: { metalness: 1, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.02, dropMaps: true },
};
const finCache = new Map();
function finishMaterials(tpl, color, finish, base) {
  const key = tpl.userData.key + color + finish;
  if (finCache.has(key)) return finCache.get(key);
  const f = FIN[finish]; const out = new Map(base || []);
  if (!f) { finCache.set(key, out); return out; }
  tpl.traverse(o => {
    if (!o.isMesh) return;
    const orig = o.material, cur = out.get(orig) || orig, n = (orig.name || '');
    const isPaint = n.toLowerCase().includes('body_pbr') || /^Paint 1/.test(n) || (base && base.has(orig) && !n.toLowerCase().includes('body_pbr'));
    if (!isPaint || !cur.isMeshPhysicalMaterial && !cur.isMeshStandardMaterial) return;
    let m = cur.isMeshPhysicalMaterial ? cur.clone() : new THREE.MeshPhysicalMaterial({ map: cur.map, color: cur.color, normalMap: cur.normalMap });
    if (f.dropMaps) { m.metalnessMap = null; m.roughnessMap = null; }
    Object.assign(m, { metalness: f.metalness, roughness: f.roughness, clearcoat: f.clearcoat, clearcoatRoughness: f.clearcoatRoughness, iridescence: f.iridescence || 0 });
    if (f.iridescenceIOR) m.iridescenceIOR = f.iridescenceIOR;
    m.needsUpdate = true; out.set(orig, m);
  });
  finCache.set(key, out); return out;
}

// Senkron örnek oluşturma (model önceden yüklenmiş olmalı)
export function buildCar(key, color, opts = {}) {
  const tpl = ready.get(key) || ready.get('hatchback') || ready.values().next().value;
  const car = tpl.clone(true);
  const base = color && color !== 'orig' ? paintedMaterials(tpl, color) : null;
  const mats = opts.finish && opts.finish !== 'gloss' ? finishMaterials(tpl, color || 'orig', opts.finish, base) : base;
  car.traverse(o => {
    if (!o.isMesh) return;
    if (mats && mats.has(o.material)) o.material = mats.get(o.material);
    if (opts.noShadow || opts.lite) o.castShadow = false;
    if (opts.lite) o.receiveShadow = false;
  });
  const byName = {}; car.traverse(o => { if (o.name) byName[o.name] = o; });
  const wheels = tpl.userData.wheels.map(w => ({ obj: byName[w.name], axis: w.axis, base: w.base, r: w.r })).filter(w => w.obj);
  car.userData = { ...tpl.userData, wheels, body: car.children[0] };
  if (opts.lite) { const sh = shadowBlob(tpl.userData); car.add(sh); }
  return car;
}
export function isLoaded(key) { return ready.has(key); }

const _q = new THREE.Quaternion();
export function spinWheels(car, dist) {
  for (const w of car.userData.wheels) { _q.setFromAxisAngle(w.axis, -dist / w.r); w.obj.quaternion.copy(w.base).premultiply(_q); }
}

// trafik araçları için ucuz yumuşak gölge
let blobTex = null;
function shadowBlob(ud) {
  if (!blobTex) { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 4, 32, 32, 32); g.addColorStop(0, 'rgba(0,0,0,0.7)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); blobTex = new THREE.CanvasTexture(c); }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(ud.halfW * 2.5, ud.halfL * 2.3), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.03; return m;
}
