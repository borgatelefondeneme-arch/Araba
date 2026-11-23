// Ortam: gökyüzü, ışık, sis, zemin, yol ve tema dekorları (instanced)
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { makeRoadTextures, makeGroundTextures, makeFacadeTexture, makeWindowTexture, ROAD, rng } from './textures.js';

export const THEMES = {
  village: { elev: 32, azim: 150, turb: 3, rayl: 1.4, fog: 0xbcd3e4, fogD: 0.0042, sun: 0xfff0d8, sunI: 3.0, hemiS: 0xcfe4ff, hemiG: 0x5a6b3a, hemiI: 0.9, exposure: 0.62, bloom: 0, clouds: 0.45 },
  forest: { elev: 9, azim: 120, turb: 6, rayl: 2.2, fog: 0xd8b68a, fogD: 0.0062, sun: 0xffc48a, sunI: 2.6, hemiS: 0xffd9b0, hemiG: 0x2f4020, hemiI: 0.8, exposure: 0.62, bloom: 0, clouds: 0.35 },
  desert: { elev: 58, azim: 170, turb: 9, rayl: 1.0, fog: 0xe7d2ae, fogD: 0.0048, sun: 0xfff6e6, sunI: 3.6, hemiS: 0xfff0d8, hemiG: 0xb88a50, hemiI: 1.0, exposure: 0.55, bloom: 0, clouds: 0.1 },
  snow: { elev: 16, azim: 140, turb: 12, rayl: 3.0, fog: 0xdbe4ee, fogD: 0.0075, sun: 0xeef4ff, sunI: 2.2, hemiS: 0xe6efff, hemiG: 0xb8c4d0, hemiI: 1.2, exposure: 0.6, bloom: 0, clouds: 0.75 },
  city: { night: true, fog: 0x0d1428, fogD: 0.0085, sun: 0x9fb4ff, sunI: 0.55, hemiS: 0x2a3a70, hemiG: 0x101018, hemiI: 0.55, exposure: 1.0, bloom: 0.85 },
};

// ---------- paylaşılan dekor geometrileri ----------
function jitter(geo, amt, seed) {
  const r = rng(seed), p = geo.attributes.position, map = new Map();
  for (let i = 0; i < p.count; i++) {
    const k = `${p.getX(i).toFixed(3)},${p.getY(i).toFixed(3)},${p.getZ(i).toFixed(3)}`;
    if (!map.has(k)) map.set(k, [(r() - 0.5) * amt, (r() - 0.5) * amt, (r() - 0.5) * amt]);
    const j = map.get(k); p.setXYZ(i, p.getX(i) + j[0], p.getY(i) + j[1], p.getZ(i) + j[2]);
  }
  geo.computeVertexNormals(); return geo;
}
let GEO = null;
function geos() {
  if (GEO) return GEO;
  const trunk = new THREE.CylinderGeometry(0.12, 0.2, 1, 7); trunk.translate(0, 0.5, 0);
  const leafy = mergeGeometries([
    jitter(new THREE.IcosahedronGeometry(1, 2), 0.25, 1).translate(0, 0, 0),
    jitter(new THREE.IcosahedronGeometry(0.75, 2), 0.2, 2).translate(0.5, 0.35, 0.2),
    jitter(new THREE.IcosahedronGeometry(0.7, 2), 0.2, 3).translate(-0.45, 0.25, -0.3),
  ]); leafy.translate(0, 0.9, 0);
  const pine = mergeGeometries([0, 1, 2, 3].map(i => jitter(new THREE.ConeGeometry(0.9 - i * 0.18, 0.9, 10, 2), 0.08, 10 + i).translate(0, 0.45 + i * 0.5, 0))); pine.translate(0, 0.3, 0);
  const snowcap = mergeGeometries([0, 1, 2, 3].map(i => new THREE.ConeGeometry(0.75 - i * 0.16, 0.42, 10, 1).translate(0, 0.94 + i * 0.5, 0)));
  const rock = jitter(new THREE.DodecahedronGeometry(1, 1), 0.35, 7); rock.scale(1, 0.6, 1);
  const bush = jitter(new THREE.IcosahedronGeometry(1, 1), 0.3, 8); bush.scale(1, 0.7, 1);
  const cactus = mergeGeometries([
    new THREE.CapsuleGeometry(0.28, 2.4, 4, 10).translate(0, 1.5, 0),
    new THREE.CapsuleGeometry(0.18, 0.8, 4, 8).translate(0.62, 1.6, 0),
    new THREE.CapsuleGeometry(0.18, 0.5, 4, 8).rotateZ(Math.PI / 2).translate(0.38, 1.2, 0),
    new THREE.CapsuleGeometry(0.16, 0.6, 4, 8).translate(-0.55, 1.9, 0),
    new THREE.CapsuleGeometry(0.16, 0.4, 4, 8).rotateZ(Math.PI / 2).translate(-0.33, 1.55, 0),
  ]);
  const wall = new THREE.BoxGeometry(1, 1, 1); wall.translate(0, 0.5, 0);
  const rs = new THREE.Shape([new THREE.Vector2(-0.58, 0), new THREE.Vector2(0.58, 0), new THREE.Vector2(0, 0.55)]);
  const roof = new THREE.ExtrudeGeometry(rs, { depth: 1.1, bevelEnabled: false }); roof.translate(0, 0, -0.55);
  const box = new THREE.BoxGeometry(1, 1, 1);
  const pole = new THREE.CylinderGeometry(0.07, 0.1, 1, 8); pole.translate(0, 0.5, 0);
  const lampHead = new THREE.BoxGeometry(0.9, 0.12, 0.35);
  const hay = new THREE.CylinderGeometry(0.7, 0.7, 1.3, 16); hay.rotateZ(Math.PI / 2); hay.translate(0, 0.7, 0);
  const snowman = mergeGeometries([new THREE.SphereGeometry(0.6, 16, 12).translate(0, 0.55, 0), new THREE.SphereGeometry(0.42, 16, 12).translate(0, 1.35, 0), new THREE.SphereGeometry(0.3, 16, 12).translate(0, 1.9, 0)]);
  const mountain = jitter(new THREE.ConeGeometry(1, 1, 18, 6), 0.08, 21); mountain.translate(0, 0.5, 0);
  GEO = { trunk, leafy, pine, snowcap, rock, bush, cactus, wall, roof, box, pole, lampHead, hay, snowman, mountain };
  return GEO;
}

// Bina geometrisi: UV'ler boyuta göre ölçeklenir (pencere dokusu bozulmasın)
function buildingGeo(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0);
  const uv = g.attributes.uv, n = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i));
    const sx = nx > 0.5 ? d : w, sy = ny > 0.5 ? d : h;
    uv.setXY(i, uv.getX(i) * sx / 9, uv.getY(i) * sy / 18);
  }
  return g;
}

class Instanced {
  constructor(scene, geo, mat, cap, shadow = true) {
    this.mesh = new THREE.InstancedMesh(geo, mat, cap); this.mesh.castShadow = shadow; this.mesh.receiveShadow = true;
    this.mesh.count = 0; this.mesh.frustumCulled = false; this.cap = cap; scene.add(this.mesh);
  }
}

export class World {
  constructor(engine, theme, seed = 1) {
    this.engine = engine; this.theme = theme; this.T = THEMES[theme]; this.seed = seed;
    const scene = this.scene = new THREE.Scene();
    const T = this.T, q = engine.quality;
    scene.fog = new THREE.FogExp2(T.fog, T.fogD);
    // gökyüzü + ortam yansımaları
    const pmrem = new THREE.PMREMGenerator(engine.renderer);
    if (!T.night) {
      const sky = this.sky = new Sky(); sky.scale.setScalar(4500);
      const u = sky.material.uniforms;
      u.turbidity.value = T.turb; u.rayleigh.value = T.rayl; u.mieCoefficient.value = 0.005; u.mieDirectionalG.value = 0.8;
      if (u.cloudCoverage) { u.cloudCoverage.value = T.clouds; u.cloudDensity.value = 0.45; }
      const phi = THREE.MathUtils.degToRad(90 - T.elev), th = THREE.MathUtils.degToRad(T.azim);
      this.sunDir = new THREE.Vector3().setFromSphericalCoords(1, phi, th);
      u.sunPosition.value.copy(this.sunDir);
      const envScene = new THREE.Scene(); const sky2 = new Sky(); sky2.scale.setScalar(1000); sky2.material = sky.material; envScene.add(sky2);
      const gnd = new THREE.Mesh(new THREE.CircleGeometry(900, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(T.hemiG).multiplyScalar(0.6) })); gnd.rotation.x = -Math.PI / 2; gnd.position.y = -5; envScene.add(gnd);
      scene.environment = pmrem.fromScene(envScene, 0.02).texture;
      scene.add(sky);
    } else {
      this.sunDir = new THREE.Vector3(-0.4, 0.8, -0.3).normalize();
      scene.background = new THREE.Color(0x070b18);
      const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = env; scene.environmentIntensity = 0.18;
      // yıldızlar
      const sp = new Float32Array(1500 * 3), r = rng(4);
      for (let i = 0; i < 1500; i++) { const v = new THREE.Vector3().setFromSphericalCoords(1500, Math.acos(r() * 0.9), r() * Math.PI * 2); sp.set([v.x, v.y, v.z], i * 3); }
      const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
      this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, fog: false }));
      scene.add(this.stars);
      const moon = this.moon = new THREE.Mesh(new THREE.SphereGeometry(40, 24, 16), new THREE.MeshBasicMaterial({ color: 0xfff6dd, fog: false }));
      scene.add(moon);
    }
    pmrem.dispose();
    // ışıklar
    this.hemi = new THREE.HemisphereLight(T.hemiS, T.hemiG, T.hemiI); scene.add(this.hemi);
    const sun = this.sun = new THREE.DirectionalLight(T.sun, T.sunI);
    sun.castShadow = q.shadows > 0;
    if (sun.castShadow) {
      sun.shadow.mapSize.set(q.shadows, q.shadows);
      const c = sun.shadow.camera; c.left = -28; c.right = 28; c.top = 40; c.bottom = -40; c.near = 1; c.far = 160;
      sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03; sun.shadow.radius = 3;
    }
    scene.add(sun); scene.add(sun.target);
    // zemin
    const gt = makeGroundTextures(theme);
    const GS = 10; gt.map.repeat.set(700 / GS, 900 / GS); gt.normal.repeat.copy(gt.map.repeat);
    this.groundTile = GS;
    const ground = this.ground = new THREE.Mesh(new THREE.PlaneGeometry(700, 900), new THREE.MeshStandardMaterial({ map: gt.map, normalMap: gt.normal, roughness: theme === 'snow' ? 0.6 : 0.95, normalScale: new THREE.Vector2(0.8, 0.8) }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.04; ground.receiveShadow = true; scene.add(ground);
    // yol
    const rt = makeRoadTextures(theme);
    const RL = 600; for (const t of [rt.map, rt.rough, rt.normal]) t.repeat.set(1, RL / ROAD.texLen);
    const road = this.road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD.halfWidth * 2, RL), new THREE.MeshStandardMaterial({ map: rt.map, roughnessMap: rt.rough, normalMap: rt.normal, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 1, metalness: theme === 'city' ? 0.15 : 0 }));
    road.rotation.x = -Math.PI / 2; road.position.y = 0.005; road.receiveShadow = true; scene.add(road);
    this.roadLen = RL;
    // bordür / bariyer
    this.rail = new Instanced(scene, geos().box, new THREE.MeshStandardMaterial({ color: theme === 'city' ? 0x9aa0a8 : 0xc9ccd0, metalness: 0.85, roughness: 0.35 }), 2, true);
    this.posts = new Instanced(scene, geos().box, new THREE.MeshStandardMaterial({ color: 0x6b6e72, metalness: 0.6, roughness: 0.5 }), 260, true);
    this.reflectors = new Instanced(scene, geos().box, new THREE.MeshStandardMaterial({ color: 0xff6a00, emissive: 0xff4400, emissiveIntensity: 1.2 }), 260, false);
    this.buildProps();
    this.buildBackdrop();
    this.chunks = new Map(); this.chunkLen = 40; this.lastKey = '';
  }

  buildProps() {
    const G = geos(), th = this.theme, S = this.scene, cap = 1400;
    const M = (o) => new THREE.MeshStandardMaterial(o);
    this.kinds = {};
    const K = (name, geo, mat, c = cap, shadow = true) => { this.kinds[name] = new Instanced(S, geo, mat, c, shadow); };
    K('trunk', G.trunk, M({ color: 0x5a4030, roughness: 0.95 }));
    K('leafy', G.leafy, M({ color: 0xffffff, roughness: 0.85 }));
    K('pine', G.pine, M({ color: 0xffffff, roughness: 0.9 }));
    K('snowcap', G.snowcap, M({ color: 0xf4f8ff, roughness: 0.7 }), cap, false);
    K('rock', G.rock, M({ color: 0xffffff, roughness: 0.9, flatShading: true }));
    K('bush', G.bush, M({ color: 0xffffff, roughness: 0.9 }));
    K('cactus', G.cactus, M({ color: 0x4f7a3a, roughness: 0.75 }), 400);
    K('wall', G.wall, M({ color: 0xffffff, roughness: 0.85 }), 300);
    K('roof', G.roof, M({ color: 0xffffff, roughness: 0.7 }), 300);
    K('win', G.box, M({ color: 0x1a2430, roughness: 0.08, metalness: 0.4, emissive: th === 'city' ? 0xffc870 : 0x000000, emissiveIntensity: 0.8 }), 1200, false);
    K('door', G.box, M({ color: 0x5b3a22, roughness: 0.6 }), 300, false);
    K('pole', G.pole, M({ color: 0x3c4046, metalness: 0.7, roughness: 0.4 }), 300);
    K('lamp', G.lampHead, M({ color: 0xffffff, emissive: 0xffe2a8, emissiveIntensity: th === 'city' ? 4 : 0.3 }), 300, false);
    K('fence', G.box, M({ color: 0x8a6a48, roughness: 0.9 }), 1200);
    K('hay', G.hay, M({ color: 0xd9b45a, roughness: 1 }), 200);
    K('snowman', G.snowman, M({ color: 0xffffff, roughness: 0.6 }), 100);
    if (th === 'city') {
      this.bVariants = [];
      for (let i = 0; i < 6; i++) {
        const w = 10 + (i % 3) * 5, h = 22 + i * 9, d = 12;
        const mat = M({ map: makeFacadeTexture(30 + i), emissiveMap: makeWindowTexture(50 + i, 0.4), emissive: 0xffffff, emissiveIntensity: 1.6, roughness: 0.4, metalness: 0.3 });
        this.bVariants.push({ w, h, d, inst: new Instanced(S, buildingGeo(w, h, d), mat, 120, true) });
      }
    }
  }

  buildBackdrop() {
    const G = geos(), r = rng(this.seed + 99), th = this.theme;
    this.backdrop = new THREE.Group(); this.scene.add(this.backdrop);
    const col = th === 'snow' ? 0xe8eef6 : th === 'desert' ? 0xc89a62 : th === 'city' ? 0x0f1424 : th === 'forest' ? 0x34502e : 0x6f8f5a;
    const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 1, flatShading: true });
    const capMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, flatShading: true });
    for (let i = 0; i < 26; i++) {
      const side = i % 2 ? 1 : -1, x = side * (260 + r() * 300), z = -200 - r() * 700;
      const h = th === 'village' ? 60 + r() * 80 : 120 + r() * 220, w = 160 + r() * 200;
      const m = new THREE.Mesh(G.mountain, mat); m.scale.set(w, h, w * (0.7 + r() * 0.5)); m.position.set(x, -2, z); this.backdrop.add(m);
      if (th === 'snow' || (th === 'forest' && h > 250)) { const c = new THREE.Mesh(G.mountain, capMat); c.scale.set(w * 0.36, h * 0.36, w * 0.3); c.position.set(x, h * 0.66 - 2, z); this.backdrop.add(c); }
    }
  }

  // Bir 40m'lik parça için dekor listesi (deterministik)
  chunkProps(k) {
    const r = rng(this.seed * 31 + k * 977 + 13), th = this.theme, items = [];
    const z0 = -k * this.chunkLen, q = this.engine.quality.props;
    const P = (kind, x, y, z, sx, sy, sz, ry = 0, color) => items.push({ kind, x, y, z, sx, sy, sz, ry, color });
    const treeCol = () => new THREE.Color().setHSL(th === 'forest' ? 0.3 + r() * 0.06 : 0.22 + r() * 0.1, 0.45 + r() * 0.2, th === 'forest' ? 0.18 + r() * 0.08 : 0.26 + r() * 0.1);
    const pineCol = () => new THREE.Color().setHSL(0.36 + r() * 0.05, 0.4, th === 'snow' ? 0.2 + r() * 0.08 : 0.15 + r() * 0.07);
    const n = Math.round((th === 'forest' ? 18 : th === 'city' ? 4 : 10) * q);
    for (let i = 0; i < n; i++) {
      const side = r() < 0.5 ? -1 : 1, x = side * (9.5 + Math.pow(r(), 1.6) * 90), z = z0 - r() * this.chunkLen, s = 0.8 + r() * 0.8;
      if (th === 'village') {
        if (r() < 0.6) { P('trunk', x, 0, z, s, 2.2 * s, s); P('leafy', x, 2.1 * s, z, 1.7 * s, 1.6 * s, 1.7 * s, r() * 6, treeCol()); }
        else if (r() < 0.6) P('bush', x, 0.2, z, 1.2 * s, 1.1 * s, 1.2 * s, r() * 6, treeCol());
        else { P('trunk', x, 0, z, s * 0.9, 1.6 * s, s * 0.9); P('pine', x, 0.8 * s, z, 2 * s, 3.2 * s, 2 * s, 0, pineCol()); }
      } else if (th === 'forest') {
        const h = 3 + r() * 4; P('trunk', x, 0, z, s, h * 0.5, s); P('pine', x, h * 0.25, z, 2.3 * s, h * 1.3, 2.3 * s, r() * 6, pineCol());
        if (r() < 0.2) P('rock', x + 2, 0.2, z, 0.8 * s, 0.8 * s, 0.8 * s, r() * 6, new THREE.Color(0x6b6b66));
      } else if (th === 'snow') {
        const h = 3 + r() * 3.5; P('trunk', x, 0, z, s, h * 0.5, s); P('pine', x, h * 0.25, z, 2.2 * s, h * 1.3, 2.2 * s, r() * 6, pineCol()); P('snowcap', x, h * 0.25, z, 2.2 * s, h * 1.3, 2.2 * s, 0);
      } else if (th === 'desert') {
        if (r() < 0.45) P('cactus', x, 0, z, s, s * (0.8 + r() * 0.6), s, r() * 6);
        else P('rock', x, 0.2, z, 1.5 * s * (1 + r() * 2), 1.3 * s * (1 + r()), 1.5 * s * (1 + r()), r() * 6, new THREE.Color().setHSL(0.07, 0.45, 0.38 + r() * 0.12));
      } else if (th === 'city') {
        P('trunk', side * (8 + r() * 1.5), 0, z, 0.8, 2, 0.8); P('leafy', side * (8 + r() * 1.5), 1.9, z, 1.2, 1.2, 1.2, r() * 6, treeCol());
      }
    }
    // evler / binalar
    if (th === 'village' || th === 'snow' || (th === 'forest' && r() < 0.35)) {
      const hn = th === 'village' ? 2 : 1;
      for (let i = 0; i < hn; i++) if (r() < 0.8) {
        const side = r() < 0.5 ? -1 : 1, x = side * (16 + r() * 18), z = z0 - 8 - r() * 24;
        const w = 6 + r() * 3, d = 7 + r() * 4, h = 3 + r() * 1.6;
        const wallC = new THREE.Color().setHSL([0.1, 0.12, 0.08, 0.55, 0][Math.floor(r() * 5)], 0.25 + r() * 0.25, 0.75 + r() * 0.15);
        const roofC = th === 'snow' ? new THREE.Color(0xf2f6fb) : new THREE.Color().setHSL(0.02 + r() * 0.04, 0.6, 0.35 + r() * 0.1);
        P('wall', x, 0, z, w, h, d, 0, wallC); P('roof', x, h, z, w * 1.12, 3.6 + r() * 1.2, d * 1.08, 0, roofC);
        P('pole', x - side * w * 0.2, h + w * 0.1, z + d * 0.25, 4, 1.4, 4, 0); // baca
        const fx = x - side * (w / 2 + 0.02);
        P('door', fx, 1.05, z, 0.08, 2.1, 1.0);
        for (const dz of [-d * 0.3, d * 0.3]) P('win', fx, h * 0.55, z + dz, 0.1, 1.0, 1.2);
        if (th === 'village' && r() < 0.7) for (let f = 0; f < 6; f++) P('fence', x - side * (w / 2 + 3), 0.5, z - d / 2 + f * (d / 5), 0.12, 1.0, 0.12);
        if (th === 'village' && r() < 0.5) P('fence', x - side * (w / 2 + 3), 0.75, z, 0.08, 0.1, d, 0);
        if (th === 'village' && r() < 0.4) P('hay', x + side * 6, 0, z + 8, 1, 1, 1, r() * 6);
        if (th === 'snow' && r() < 0.5) P('snowman', x - side * (w / 2 + 4), 0, z + 4, 1, 1, 1, side > 0 ? -Math.PI / 2 : Math.PI / 2);
      }
    }
    if (th === 'city') {
      for (const side of [-1, 1]) {
        let z = z0; while (z > z0 - this.chunkLen) {
          const v = Math.floor(r() * this.bVariants.length), b = this.bVariants[v];
          items.push({ kind: 'b' + v, x: side * (14 + b.d / 2 + r() * 4), y: 0, z: z - b.w / 2, sx: 1, sy: 1, sz: 1, ry: Math.PI / 2 });
          z -= b.w + 2 + r() * 4;
        }
      }
    }
    // sokak lambaları
    if (th === 'city' || th === 'village' || th === 'snow') {
      for (const side of [-1, 1]) {
        const x = side * 7.2, z = z0 - (side > 0 ? 0 : this.chunkLen / 2);
        P('pole', x, 0, z, 1, 6, 1); P('lamp', x - side * 0.6, 6, z, 1, 1, 1);
      }
    }
    return items;
  }

  rebuildInstances(minK, maxK) {
    const all = [];
    for (let k = minK; k <= maxK; k++) {
      if (!this.chunks.has(k)) this.chunks.set(k, this.chunkProps(k));
      all.push(...this.chunks.get(k));
    }
    for (const k of this.chunks.keys()) if (k < minK - 1 || k > maxK + 1) this.chunks.delete(k);
    const m = new THREE.Matrix4(), qt = new THREE.Quaternion(), e = new THREE.Euler(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
    const counts = {};
    const target = (kind) => kind[0] === 'b' && kind.length <= 2 ? this.bVariants[+kind.slice(1)].inst : this.kinds[kind];
    for (const it of all) {
      const inst = target(it.kind); if (!inst) continue;
      const i = counts[it.kind] || 0; if (i >= inst.cap) continue; counts[it.kind] = i + 1;
      e.set(0, it.ry, 0); qt.setFromEuler(e); pos.set(it.x, it.y, it.z); sc.set(it.sx, it.sy, it.sz);
      m.compose(pos, qt, sc); inst.mesh.setMatrixAt(i, m);
      if (it.color) inst.mesh.setColorAt(i, it.color);
    }
    const allInst = [...Object.values(this.kinds), ...(this.bVariants || []).map(b => b.inst)];
    for (const inst of allInst) {
      const name = Object.keys(this.kinds).find(k => this.kinds[k] === inst) || ('b' + this.bVariants.findIndex(b => b.inst === inst));
      inst.mesh.count = counts[name] || 0; inst.mesh.instanceMatrix.needsUpdate = true;
      if (inst.mesh.instanceColor) inst.mesh.instanceColor.needsUpdate = true;
    }
  }

  update(pz, camera, dt) {
    // pz: oyuncunun z konumu (negatif ilerler)
    const gs = this.groundTile; this.ground.position.z = Math.round(pz / gs) * gs - 250;
    this.road.position.z = Math.round(pz / 12) * 12 - this.roadLen / 2 + 120;
    this.backdrop.position.z = pz;
    if (this.sky) this.sky.position.copy(camera.position);
    if (this.sky?.material.uniforms.time) this.sky.material.uniforms.time.value += dt;
    if (this.stars) this.stars.position.copy(camera.position);
    if (this.moon) this.moon.position.set(camera.position.x - 500, 420, camera.position.z - 1100);
    const s = this.sun; s.target.position.set(0, 0, pz - 18); s.position.copy(s.target.position).addScaledVector(this.sunDir, 90);
    // bariyer ve direkler
    const segZ = Math.round(pz / 4) * 4, m = new THREE.Matrix4();
    let i = 0;
    for (const side of [-1, 1]) {
      m.makeScale(0.08, 0.28, 520); m.setPosition(side * 6.55, 0.62, segZ - 200); this.rail.mesh.setMatrixAt(side > 0 ? 1 : 0, m);
    }
    this.rail.mesh.count = this.theme === 'city' || this.theme === 'snow' || this.theme === 'forest' || this.theme === 'desert' ? 2 : 0;
    for (let z = segZ + 40; z > segZ - 440 && i < 258; z -= 4) for (const side of [-1, 1]) {
      m.makeScale(0.12, 0.8, 0.12); m.setPosition(side * 6.62, 0.4, z); this.posts.mesh.setMatrixAt(i, m);
      m.makeScale(0.03, 0.08, 0.18); m.setPosition(side * 6.5, 0.62, z); this.reflectors.mesh.setMatrixAt(i, m); i++;
    }
    this.posts.mesh.count = this.reflectors.mesh.count = this.rail.mesh.count ? i : (this.theme === 'village' ? i : 0);
    if (this.theme === 'village') { this.reflectors.mesh.count = 0; }
    this.posts.mesh.instanceMatrix.needsUpdate = true; this.reflectors.mesh.instanceMatrix.needsUpdate = true; this.rail.mesh.instanceMatrix.needsUpdate = true;
    // dekor parçaları
    const ck = Math.floor(-pz / this.chunkLen);
    const range = this.engine.quality.range;
    const minK = ck - 1, maxK = ck + Math.ceil(range / this.chunkLen);
    const key = minK + ':' + maxK;
    if (key !== this.lastKey) { this.lastKey = key; this.rebuildInstances(minK, maxK); }
  }

  dispose() {
    this.scene.environment?.dispose?.();
    for (const m of [this.ground.material, this.road.material]) { for (const k of ['map', 'normalMap', 'roughnessMap']) m[k]?.dispose(); m.dispose(); }
  }
}
