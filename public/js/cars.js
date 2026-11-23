// Prosedürel, PBR malzemeli araba modelleri
import * as THREE from 'three';

// İç uzayda: +x = ileri, y = yukarı, z = genişlik. Dış grup -z yönüne bakar.
export const CAR_SHAPES = {
  hatch: { L: 3.95, W: 1.78, c: 0.24, wr: 0.33, rear: 0.72, front: 3.2,
    top: [[0, 0.42], [0.02, 0.98], [0.25, 1.02], [3.0, 1.0], [3.78, 0.8], [3.95, 0.55], [3.93, 0.38]],
    cabin: [[0.12, 0.98], [0.32, 1.56], [1.0, 1.64], [2.2, 1.62], [3.05, 0.98]], cabinW: 0.86 },
  sport: { L: 4.45, W: 1.96, c: 0.16, wr: 0.35, rear: 0.85, front: 3.62,
    top: [[0, 0.42], [0.02, 0.82], [0.4, 0.92], [1.3, 0.9], [3.3, 0.8], [4.28, 0.56], [4.45, 0.36]],
    cabin: [[0.55, 0.88], [1.3, 1.24], [2.3, 1.27], [3.25, 0.82]], cabinW: 0.8, spoiler: true },
  suv: { L: 4.65, W: 1.98, c: 0.38, wr: 0.43, rear: 0.9, front: 3.75,
    top: [[0, 0.6], [0.02, 1.3], [0.2, 1.36], [3.5, 1.33], [4.48, 1.15], [4.65, 0.72]],
    cabin: [[0.08, 1.32], [0.22, 1.98], [3.15, 1.98], [3.75, 1.32]], cabinW: 0.9, rails: true },
  pickup: { L: 5.15, W: 2.0, c: 0.38, wr: 0.43, rear: 0.95, front: 4.15,
    top: [[0, 0.68], [0.02, 1.24], [2.1, 1.24], [4.25, 1.22], [5.02, 1.05], [5.15, 0.7]],
    cabin: [[2.05, 1.22], [2.12, 1.98], [3.55, 1.98], [4.2, 1.22]], cabinW: 0.9, bed: true },
  muscle: { L: 4.85, W: 1.98, c: 0.2, wr: 0.37, rear: 0.9, front: 3.95,
    top: [[0, 0.48], [0.02, 0.98], [0.3, 1.02], [1.2, 1.0], [4.05, 0.98], [4.78, 0.86], [4.85, 0.48]],
    cabin: [[0.95, 0.98], [1.55, 1.36], [2.6, 1.38], [3.35, 0.98]], cabinW: 0.82, stripes: true, scoop: true },
  race: { L: 4.7, W: 1.15, c: 0.12, wr: 0.36, rear: 0.7, front: 3.75, noArch: true, wheelZ: 0.98, wheelW: 0.38,
    top: [[0, 0.38], [0.0, 0.86], [0.6, 0.92], [1.65, 0.94], [2.35, 0.74], [4.45, 0.42], [4.7, 0.3]],
    cabin: [[1.6, 0.88], [1.95, 1.08], [2.35, 0.8]], cabinW: 0.55, wings: true },
  // trafik araçları
  van: { L: 5.2, W: 2.05, c: 0.3, wr: 0.38, rear: 0.9, front: 4.25,
    top: [[0, 0.5], [0.02, 2.3], [0.15, 2.38], [4.1, 2.38], [4.7, 1.3], [5.15, 1.05], [5.2, 0.55]],
    cabin: [[4.08, 2.2], [4.62, 1.32], [4.0, 1.32]], cabinW: 0.92, traffic: true },
};

const matCache = new Map();
export function paintMat(color) {
  const k = 'p' + color; if (matCache.has(k)) return matCache.get(k);
  const m = new THREE.MeshPhysicalMaterial({ color, metalness: 0.15, roughness: 0.5, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 0.8 });
  matCache.set(k, m); return m;
}
export const MAT = {
  glass: new THREE.MeshPhysicalMaterial({ color: 0x0a0f16, metalness: 0.2, roughness: 0.04, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xe8e8ec, metalness: 1, roughness: 0.15 }),
  rim: new THREE.MeshStandardMaterial({ color: 0xb8bcc4, metalness: 1, roughness: 0.28 }),
  tire: new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.92 }),
  plastic: new THREE.MeshStandardMaterial({ color: 0x18191b, roughness: 0.55, metalness: 0.1 }),
  under: new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 1 }),
  head: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3d6, emissiveIntensity: 2.2, roughness: 0.1 }),
  tail: new THREE.MeshStandardMaterial({ color: 0x550000, emissive: 0xff1a10, emissiveIntensity: 1.6, roughness: 0.2 }),
  stripe: new THREE.MeshPhysicalMaterial({ color: 0xf5f5f5, roughness: 0.3, clearcoat: 1 }),
  helmet: new THREE.MeshPhysicalMaterial({ color: 0xffd600, roughness: 0.2, clearcoat: 1 }),
  plate: new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.5 }),
};

function roundedPath(path, pts, r) {
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i];
    if (i === pts.length - 1) { path.lineTo(p[0], p[1]); break; }
    const a = pts[i - 1], b = pts[i + 1];
    const d1 = Math.hypot(p[0] - a[0], p[1] - a[1]), d2 = Math.hypot(b[0] - p[0], b[1] - p[1]);
    const rr = Math.min(r, d1 * 0.45, d2 * 0.45);
    path.lineTo(p[0] + (a[0] - p[0]) / d1 * rr, p[1] + (a[1] - p[1]) / d1 * rr);
    path.quadraticCurveTo(p[0], p[1], p[0] + (b[0] - p[0]) / d2 * rr, p[1] + (b[1] - p[1]) / d2 * rr);
  }
}
function extrude(shape, width, bevel = 0.07, seg = 4) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: seg, curveSegments: 10 });
  g.translate(0, 0, -(width - bevel * 2) / 2);
  return g;
}

const geoCache = new Map();
function carGeometries(type) {
  if (geoCache.has(type)) return geoCache.get(type);
  const d = CAR_SHAPES[type];
  const { L, W, c, wr } = d, wy = wr, ar = wr + 0.08;
  // gövde yan profili (tekerlek kemerleri dahil)
  const s = new THREE.Shape(); s.moveTo(0.05, c);
  if (!d.noArch) {
    for (const ax of [d.rear, d.front]) {
      s.lineTo(ax - ar, c); s.lineTo(ax - ar, wy);
      s.absarc(ax, wy, ar, Math.PI, 0, true); s.lineTo(ax + ar, c);
    }
  }
  s.lineTo(L - 0.05, c);
  const top = d.top.slice().reverse();
  s.lineTo(top[0][0], top[0][1]);
  roundedPath(s, top, 0.22);
  s.lineTo(0.05, c);
  const body = extrude(s, W, 0.13, 6);
  // cam kabin
  const cs = new THREE.Shape(); cs.moveTo(d.cabin[0][0], d.cabin[0][1]);
  roundedPath(cs, [...d.cabin, d.cabin[0]], 0.12);
  const cabin = extrude(cs, W * d.cabinW, 0.06, 3);
  // tavan (boyalı)
  let roof = null;
  if (d.cabin.length >= 4) {
    const tp = d.cabin.slice(1, -1);
    const rs = new THREE.Shape(); rs.moveTo(tp[0][0] + 0.02, tp[0][1] - 0.06);
    const up = tp.map(([x, y]) => [x, y + 0.035]);
    rs.lineTo(up[0][0], up[0][1]); roundedPath(rs, up, 0.15);
    const dn = tp.slice().reverse().map(([x, y]) => [x, y - 0.07]);
    rs.lineTo(dn[0][0], dn[0][1]); for (const p of dn) rs.lineTo(p[0], p[1]);
    roof = extrude(rs, W * d.cabinW + 0.04, 0.03, 2);
  }
  // tekerlek
  const ww = d.wheelW || 0.26;
  const tire = new THREE.CylinderGeometry(wr, wr, ww, 32, 1); tire.rotateX(Math.PI / 2);
  const side = new THREE.TorusGeometry(wr * 0.82, wr * 0.17, 8, 28);
  const rim = new THREE.CylinderGeometry(wr * 0.66, wr * 0.66, 0.05, 24); rim.rotateX(Math.PI / 2);
  const spoke = new THREE.BoxGeometry(wr * 1.15, wr * 0.16, 0.05);
  const hub = new THREE.CylinderGeometry(wr * 0.16, wr * 0.16, 0.08, 12); hub.rotateX(Math.PI / 2);
  const g = { body, cabin, roof, tire, side, rim, spoke, hub };
  geoCache.set(type, g); return g;
}

export function buildCar(type, color, opts = {}) {
  const d = CAR_SHAPES[type] || CAR_SHAPES.hatch;
  const G = carGeometries(type);
  const paint = paintMat(color);
  const outer = new THREE.Group();
  const inner = new THREE.Group(); inner.rotation.y = Math.PI / 2; outer.add(inner);
  const bodyG = new THREE.Group(); inner.add(bodyG);
  const off = -d.L / 2;
  const add = (geo, mat, x = 0, y = 0, z = 0, parent = bodyG, shadow = true) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = shadow && !opts.noShadow; m.receiveShadow = false; parent.add(m); return m; };
  add(G.body, paint, off);
  add(G.cabin, MAT.glass, off);
  if (G.roof) add(G.roof, paint, off);
  // şasi (kemerlerden içeriyi göstermemek için)
  add(new THREE.BoxGeometry(d.L * 0.92, 0.35, d.W * 0.72), MAT.under, 0, d.c + 0.2, 0, bodyG, false);
  // B direği
  const lite = !!opts.lite;
  if (d.cabin.length >= 4 && !d.traffic && !lite) { const cx = (d.cabin[1][0] + d.cabin[2][0]) / 2; const y0 = d.cabin[0][1], y1 = d.cabin[1][1]; add(new THREE.BoxGeometry(0.1, y1 - y0, d.W * d.cabinW + 0.03), paint, off + cx, (y0 + y1) / 2); }
  // farlar ve stoplar (bevel 0.09 dışarı taşar)
  const B = 0.13;
  const frontX = (y) => { const t = d.top; for (let i = t.length - 1; i > 0; i--) { const a = t[i - 1], b = t[i]; if ((y - a[1]) * (y - b[1]) <= 0 && a[1] !== b[1]) return a[0] + (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]); } return d.L; };
  const n = d.top.length;
  const fy = Math.max(d.c + 0.28, (d.top[n - 3][1] + d.top[n - 2][1]) / 2 - 0.06);
  const ry = d.top[1][1] - 0.18;
  const hw = d.W * 0.34;
  for (const z of [-hw, hw]) {
    add(new THREE.BoxGeometry(0.1, 0.12, type === 'race' ? 0.18 : 0.34), MAT.head, off + frontX(fy) + B - 0.03, fy, z, bodyG, false);
    add(new THREE.BoxGeometry(0.06, 0.13, type === 'race' ? 0.16 : 0.32), MAT.tail, off - B + 0.01, ry, z, bodyG, false);
  }
  if (!d.traffic && type !== 'race' && !lite) {
    add(new THREE.BoxGeometry(0.06, 0.16, d.W * 0.4), MAT.plastic, off + frontX(d.c + 0.25) + B - 0.02, d.c + 0.25, 0, bodyG, false); // ızgara
    add(new THREE.BoxGeometry(0.03, 0.12, 0.45), MAT.plate, off - B - 0.01, d.c + 0.3, 0, bodyG, false); // plaka
    for (const z of [-d.W / 2 - 0.02, d.W / 2 + 0.02]) add(new THREE.BoxGeometry(0.16, 0.08, 0.12), paint, off + d.cabin[d.cabin.length - 1][0] - 0.1, d.cabin[0][1] + 0.12, z); // aynalar
  }
  // tamponlar, marşpiyel, egzoz
  if (!d.traffic && type !== 'race') {
    const bw = d.W - 0.02;
    add(new THREE.BoxGeometry(0.16, 0.2, bw), MAT.plastic, off - B + 0.05, d.c + 0.06, 0, bodyG, false);
    add(new THREE.BoxGeometry(0.16, 0.16, bw), MAT.plastic, off + frontX(d.c + 0.1) + B - 0.06, d.c + 0.04, 0, bodyG, false);
    if (!lite) {
      for (const z of [-1, 1]) add(new THREE.BoxGeometry(d.front - d.rear - (d.wr + 0.1) * 2, 0.08, 0.06), MAT.plastic, off + (d.front + d.rear) / 2, d.c - 0.02, z * (d.W / 2 + 0.005), bodyG, false);
      const ex = new THREE.CylinderGeometry(0.05, 0.05, 0.18, 12); ex.rotateZ(Math.PI / 2);
      for (const z of type === 'muscle' || type === 'sport' ? [-0.35, 0.35] : [0.45]) add(ex, MAT.chrome, off - B - 0.04, d.c + 0.02, z, bodyG, false);
    }
  }
  // ekstralar
  if (d.spoiler) { add(new THREE.BoxGeometry(0.32, 0.04, d.W * 0.9), paint, off + 0.15, d.top[1][1] + 0.22); for (const z of [-0.5, 0.5]) add(new THREE.BoxGeometry(0.08, 0.2, 0.05), MAT.plastic, off + 0.2, d.top[1][1] + 0.1, z); }
  if (d.rails) for (const z of [-d.W * 0.4, d.W * 0.4]) add(new THREE.BoxGeometry(2.6, 0.05, 0.05), MAT.chrome, off + 1.7, 2.16, z);
  if (d.bed) { add(new THREE.BoxGeometry(1.95, 0.04, d.W * 0.84), MAT.plastic, off + 1.05, 1.375); }
  if (d.stripes) { for (const z of [-0.17, 0.17]) { add(new THREE.BoxGeometry(0.85, 0.012, 0.16), MAT.stripe, off + 0.75, 1.15, z, bodyG, false); add(new THREE.BoxGeometry(1.0, 0.012, 0.16), MAT.stripe, off + 2.05, 1.455, z, bodyG, false); } }
  if (d.scoop) add(new THREE.BoxGeometry(0.7, 0.1, 0.5), MAT.plastic, off + 3.7, 1.15);
  if (d.wings) {
    add(new THREE.BoxGeometry(0.45, 0.05, 2.1), paint, -off - 0.15, 0.22);
    add(new THREE.BoxGeometry(0.4, 0.05, 1.7), paint, off + 0.2, 1.12);
    for (const z of [-0.8, 0.8]) add(new THREE.BoxGeometry(0.5, 0.65, 0.04), MAT.plastic, off + 0.25, 0.82, z);
    add(new THREE.SphereGeometry(0.19, 20, 14), MAT.helmet, off + 1.95, 1.08);
    for (const z of [-0.62, 0.62]) add(new THREE.BoxGeometry(1.6, 0.32, 0.3), paint, off + 1.6, 0.42, z);
  }
  // tekerlekler
  const wheels = [];
  const wz = d.wheelZ ?? (d.W / 2 - 0.16), ww = d.wheelW || 0.26;
  for (const ax of [d.rear, d.front]) for (const sgn of [-1, 1]) {
    const w = new THREE.Group(); w.position.set(off + ax, d.wr, sgn * wz); inner.add(w);
    add(G.tire, MAT.tire, 0, 0, 0, w);
    add(G.rim, MAT.rim, 0, 0, sgn * (ww / 2 - 0.01), w, false);
    if (!lite) {
      add(G.side, MAT.tire, 0, 0, sgn * ww * 0.42, w, false);
      for (let i = 0; i < 5; i++) { const sp = add(G.spoke, MAT.chrome, 0, 0, sgn * (ww / 2 + 0.005), w, false); sp.rotation.z = i * Math.PI / 5; }
      add(G.hub, MAT.chrome, 0, 0, sgn * (ww / 2 + 0.02), w, false);
    }
    wheels.push(w);
  }
  outer.userData = { wheels, body: bodyG, inner, def: d, halfW: Math.max(d.W, (d.wheelZ || 0) * 2 + 0.3) / 2, halfL: d.L / 2, height: d.cabin[1][1] };
  return outer;
}

export function spinWheels(car, dist) {
  const ud = car.userData; const a = -dist / ud.def.wr;
  for (const w of ud.wheels) w.rotation.z = a;
}
