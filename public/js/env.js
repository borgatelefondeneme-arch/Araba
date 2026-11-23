// Çevre modelleri (ağaç, ev, ahır, lamba, bariyer...): yükleme, boyut normalizasyonu, örnekleme (instancing)
import * as THREE from 'three';
import { loadGLTF } from './cars.js';

// h: hedef yükseklik aralığı (m). Grab3D modelleri (CC0).
export const PROPS = {
  'oak-tree': { h: [7, 10] }, 'apple-tree': { h: [4.5, 6] }, 'cypress-tree': { h: [9, 13] }, 'olive-tree': { h: [4, 5.5] },
  'bush': { h: [1.2, 2] }, 'cottage-house': { h: [6, 7], big: 1 }, 'stone-house': { h: [6, 7], big: 1 }, 'farmhouse': { h: [7, 8], big: 1 },
  'barn': { h: [8, 9], big: 1 }, 'windmill': { h: [12, 14], big: 1 }, 'silo': { h: [11, 13], big: 1 }, 'hay-bale': { h: [1.4, 1.6] },
  'hay-bale-stack': { h: [1.6, 1.9] }, 'wooden-fence': { h: [1.1, 1.2] }, 'village-well': { h: [3, 3.4] }, 'sunflower': { h: [1.6, 2.1] },
  'cow': { h: [1.5, 1.6] }, 'power-pole': { h: [9, 10] }, 'pine-tree': { h: [9, 14] }, 'spruce-tree': { h: [10, 16] },
  'birch-tree': { h: [9, 12] }, 'autumn-tree': { h: [7, 9] }, 'tree-stump': { h: [0.6, 0.8] }, 'log-cabin': { h: [6, 7], big: 1 },
  'boulder-rock-set': { h: [1.6, 3] }, 'cactus': { h: [3, 5] }, 'barrel-cactus': { h: [1, 1.4] }, 'palm-tree': { h: [8, 11] },
  'rocky-outcrop': { h: [5, 9] }, 'adobe-house': { h: [6, 7], big: 1 }, 'small-rock-set': { h: [0.6, 1] }, 'snowy-pine-tree': { h: [9, 14] },
  'snowy-cabin': { h: [6, 7], big: 1 }, 'alpine-chalet': { h: [9, 10], big: 1 }, 'snowman': { h: [1.9, 2.2] },
  'apartment-building': { h: [22, 26], big: 1 }, 'high-rise-apartment': { h: [45, 60], big: 1 }, 'office-tower': { h: [40, 55], big: 1 },
  'skyscraper': { h: [60, 80], big: 1 }, 'shop-front': { h: [10, 12], big: 1 }, 'corner-shop': { h: [12, 14], big: 1 },
  'street-light': { h: [7, 7.5] }, 'bus-stop-shelter': { h: [2.6, 2.8] }, 'fire-hydrant': { h: [0.8, 0.9] }, 'traffic-light': { h: [4.5, 5] },
  'park-bench': { h: [0.9, 1] }, 'guard-rail': { h: [0.8, 0.85] }, 'traffic-cone': { h: [0.75, 0.75] }, 'road-barrier': { h: [1.05, 1.05] },
  'construction-barrier': { h: [1.1, 1.1] }, 'jersey-barrier': { h: [0.95, 0.95] }, 'traffic-barrel': { h: [1.05, 1.05] }, 'grass-clump': { h: [0.5, 0.9] },
};
export const THEME_PROPS = {
  village: ['oak-tree', 'apple-tree', 'cypress-tree', 'olive-tree', 'bush', 'cottage-house', 'stone-house', 'farmhouse', 'barn', 'windmill', 'silo', 'hay-bale', 'wooden-fence', 'village-well', 'sunflower', 'cow', 'power-pole', 'street-light', 'grass-clump', 'guard-rail'],
  forest: ['pine-tree', 'spruce-tree', 'birch-tree', 'autumn-tree', 'tree-stump', 'log-cabin', 'boulder-rock-set', 'bush', 'grass-clump', 'guard-rail', 'small-rock-set'],
  desert: ['cactus', 'barrel-cactus', 'palm-tree', 'rocky-outcrop', 'adobe-house', 'small-rock-set', 'boulder-rock-set', 'guard-rail', 'power-pole'],
  snow: ['snowy-pine-tree', 'snowy-cabin', 'alpine-chalet', 'snowman', 'boulder-rock-set', 'guard-rail', 'street-light'],
  city: ['apartment-building', 'high-rise-apartment', 'office-tower', 'skyscraper', 'shop-front', 'corner-shop', 'street-light', 'bus-stop-shelter', 'fire-hydrant', 'traffic-light', 'park-bench', 'oak-tree', 'guard-rail'],
};
export const OBSTACLE_PROPS = ['traffic-cone', 'road-barrier', 'construction-barrier', 'jersey-barrier', 'traffic-barrel', 'hay-bale', 'tree-stump', 'boulder-rock-set', 'snowman'];

const cache = new Map();
// Model şablonu: alt parçalar (geometri+malzeme+yerel matris), taban merkezli normalizasyon bilgisi
export function loadProp(name) {
  if (cache.has(name)) return cache.get(name);
  const p = loadGLTF('env', name).then(g => {
    const root = g.scene; root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root), size = box.getSize(new THREE.Vector3());
    const parts = [];
    root.traverse(o => { if (o.isMesh) { const mats = Array.isArray(o.material) ? o.material : [o.material]; for (const m of mats) { m.userData.shared = true; for (const k of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap']) if (m[k]) m[k].userData.shared = true; } parts.push({ geometry: o.geometry, material: o.material, local: o.matrixWorld.clone() }); } });
    // tabanı (0,0,0)'a, merkezi eksene getir
    const base = new THREE.Matrix4().makeTranslation(-(box.min.x + box.max.x) / 2, -box.min.y, -(box.min.z + box.max.z) / 2);
    for (const pt of parts) pt.local.premultiply(base);
    return { name, parts, size, root };
  });
  cache.set(name, p); p.catch(() => cache.delete(name));
  return p;
}
export const loadProps = (names) => Promise.all([...new Set(names)].map(n => loadProp(n).catch(e => { console.warn('prop', n, e); return null; })));
const ready = new Map();
export async function preloadProps(names) { const r = await loadProps(names); for (const t of r) if (t) ready.set(t.name, t); return r.filter(Boolean).length; }
export const propReady = (n) => ready.get(n);

// Tek bir sahne nesnesi (engeller için): hedef yükseklik/genişliğe ölçekli klon
export function propObject(name, { h, w } = {}) {
  const t = ready.get(name); if (!t) return null;
  const g = new THREE.Group();
  let s = h ? h / t.size.y : 1; if (w) s = Math.min(s, w / Math.max(t.size.x, 0.01));
  for (const p of t.parts) { const m = new THREE.Mesh(p.geometry, p.material); m.matrixAutoUpdate = false; m.matrix.copy(p.local); m.castShadow = true; m.receiveShadow = true; const holder = new THREE.Group(); holder.add(m); g.add(holder); }
  g.scale.setScalar(s); g.userData.size = t.size.clone().multiplyScalar(s);
  return g;
}

// Örnekleme (instancing) havuzu: her modelin her alt parçası için bir InstancedMesh
export class PropInstancer {
  constructor(scene, cap = 64) { this.scene = scene; this.cap = cap; this.sets = new Map(); }
  ensure(name) {
    if (this.sets.has(name)) return this.sets.get(name);
    const t = ready.get(name); if (!t) return null;
    const cap = PROPS[name]?.big ? Math.ceil(this.cap / 3) : name === 'grass-clump' || name === 'sunflower' ? this.cap * 6 : name === 'guard-rail' ? 160 : this.cap;
    const meshes = t.parts.map(p => { const im = new THREE.InstancedMesh(p.geometry, p.material, cap); im.userData.shared = true; im.castShadow = name !== 'grass-clump' && name !== 'sunflower'; im.receiveShadow = true; im.frustumCulled = false; im.count = 0; this.scene.add(im); return { im, local: p.local }; });
    const set = { t, meshes, cap, n: 0 }; this.sets.set(name, set); return set;
  }
  begin() { for (const s of this.sets.values()) s.n = 0; }
  add(name, x, y, z, height, ry = 0) {
    const s = this.ensure(name); if (!s || s.n >= s.cap) return false;
    const k = height / s.t.size.y;
    _q.setFromAxisAngle(_up, ry); _p.set(x, y, z); _s.set(k, k, k); _m.compose(_p, _q, _s);
    for (const mm of s.meshes) { _m2.multiplyMatrices(_m, mm.local); mm.im.setMatrixAt(s.n, _m2); }
    s.n++; return true;
  }
  end() { for (const s of this.sets.values()) for (const mm of s.meshes) { mm.im.count = s.n; mm.im.instanceMatrix.needsUpdate = true; mm.im.computeBoundingSphere?.(); } }
}
const _q = new THREE.Quaternion(), _up = new THREE.Vector3(0, 1, 0), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _m = new THREE.Matrix4(), _m2 = new THREE.Matrix4();
