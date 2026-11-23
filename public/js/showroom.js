// Menü / garaj sahnesi: büyük, parmakla çevrilebilen ve yakınlaştırılabilen araba
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCar, loadModel } from './cars.js';
import { applyMods, animateMods } from './mods.js';
import { assetURL } from './assets.js';

export class Showroom {
  constructor(engine) {
    this.engine = engine;
    const s = this.scene = new THREE.Scene();
    // arka plan: köy fotoğrafı (opak tuvalde 'cover' kırpma ile)
    this.bg = new THREE.TextureLoader().load(assetURL('img/village-bg.jpg'), (t) => { t.colorSpace = THREE.SRGBColorSpace; this.fitBg(); });
    this.bg.colorSpace = THREE.SRGBColorSpace; s.background = this.bg; s.backgroundIntensity = 1;
    const pm = new THREE.PMREMGenerator(engine.renderer);
    s.environment = pm.fromScene(new RoomEnvironment(), 0.03).texture; s.environmentIntensity = 0.7; pm.dispose();
    this.camera = new THREE.PerspectiveCamera(35, engine.aspect, 0.1, 200);
    const sun = new THREE.DirectionalLight(0xffe2b8, 2.6); sun.position.set(-7, 9, 4); sun.castShadow = engine.quality.shadows > 0;
    sun.shadow.mapSize.set(engine.quality.shadows || 1024, engine.quality.shadows || 1024); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 4;
    const sc = sun.shadow.camera; sc.left = sc.bottom = -6; sc.right = sc.top = 6; sc.near = 1; sc.far = 30; s.add(sun);
    s.add(new THREE.HemisphereLight(0xbfd8ff, 0x6b5a40, 0.9));
    const fill = new THREE.DirectionalLight(0xcfe0ff, 0.7); fill.position.set(5, 3, 6); s.add(fill);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.45 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; s.add(floor);
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    const g = x.createRadialGradient(64, 64, 8, 64, 64, 64); g.addColorStop(0, 'rgba(0,0,0,0.75)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    this.blob.rotation.x = -Math.PI / 2; this.blob.position.y = 0.01; this.blob.visible = false; s.add(this.blob);
    this.neonLight = new THREE.PointLight(0xffffff, 0, 6, 1.5); this.neonLight.position.y = 0.2; s.add(this.neonLight);
    this.turn = new THREE.Group(); s.add(this.turn);
    this.t = 0; this.car = null; this.req = 0;
    // görünüm durumu
    this.rot = 0.6; this.rotV = 0; this.el = 0.28; this.zoom = 1; this.auto = true; this.idleT = 0;
    this.target = null; // {rot, el, zoom}
    this.zone = { x: 0, y: 0, w: 1, h: 1 }; this.active = false;
    this.bindInput(engine.renderer.domElement);
    const zone = document.getElementById('car-zone'); if (zone) this.bindInput(zone, true);
  }

  bindInput(el, always = false) {
    const pts = new Map(); let lastDist = 0;
    const down = (e) => { if (!this.active && !always) return; e.preventDefault?.(); pts.set(e.pointerId, { x: e.clientX, y: e.clientY }); el.setPointerCapture?.(e.pointerId); this.auto = false; this.target = null; this.idleT = 0; this.rotV = 0; lastDist = 0; };
    const move = (e) => {
      if ((!this.active && !always) || !pts.has(e.pointerId)) return; e.preventDefault?.();
      const p = pts.get(e.pointerId), dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
      if (pts.size === 1) { const k = 6 / Math.max(300, innerWidth); this.rot += dx * k; this.rotV = dx * k * 60; this.el = THREE.MathUtils.clamp(this.el + dy * 0.004, 0.02, 1.1); }
      else if (pts.size === 2) { const [a, b] = [...pts.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y); if (lastDist) this.zoom = THREE.MathUtils.clamp(this.zoom * d / lastDist, 0.7, 2.6); lastDist = d; }
      this.idleT = 0;
    };
    const up = (e) => { pts.delete(e.pointerId); lastDist = 0; };
    el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', (e) => { if (!this.active) return; this.zoom = THREE.MathUtils.clamp(this.zoom * (e.deltaY > 0 ? 0.92 : 1.08), 0.7, 2.6); this.idleT = 0; this.auto = false; }, { passive: true });
  }

  async setCar(type, custom = {}, upg = {}, highlight = null) {
    const id = ++this.req;
    this.onLoading?.(true);
    try { await loadModel(type); } catch (e) { console.warn(e); }
    if (id !== this.req) return;
    this.onLoading?.(false);
    let car;
    try { car = buildCar(type, custom.paint, { finish: custom.finish }); } catch (e) { console.warn(e); return; }
    if (this.car) this.turn.remove(this.car);
    this.car = car; this.turn.add(car);
    let mods = null; try { mods = applyMods(car, custom, upg); } catch (e) { console.warn('mods', e); }
    const ud = car.userData; this.blob.visible = true; this.blob.scale.set(ud.halfW * 2.6, ud.halfL * 2.4, 1);
    this.R = Math.hypot(ud.halfL, ud.halfW); this.Hc = ud.height;
    const neon = custom.neon && custom.neon !== 'none';
    this.neonLight.intensity = neon ? 3 : 0; if (neon && custom.neon !== 'rainbow') this.neonLight.color.set(custom.neon);
    this.neonRainbow = custom.neon === 'rainbow';
    if (highlight && mods?.userData.parts?.[highlight]) { this.pop = { obj: mods.userData.parts[highlight], t: 0 }; }
  }
  focus(f) { if (!f) return; const a0 = 0.35; let r = a0 - f.phi; while (r - this.rot > Math.PI) r -= Math.PI * 2; while (r - this.rot < -Math.PI) r += Math.PI * 2; this.target = { rot: r, el: f.el, zoom: f.zoom }; this.auto = false; this.idleT = 0; }
  resetView() { this.target = { rot: this.rot, el: 0.28, zoom: 1 }; this.auto = true; }

  fitBg() {
    const img = this.bg?.image; if (!img) return;
    const cv = this.engine.renderer.domElement, sa = (cv.clientWidth || innerWidth) / (cv.clientHeight || innerHeight), ia = img.width / img.height;
    if (sa > ia) { this.bg.repeat.set(1, ia / sa); this.bg.offset.set(0, (1 - ia / sa) * 0.6); } else { this.bg.repeat.set(sa / ia, 1); this.bg.offset.set((1 - sa / ia) / 2, 0); }
    this._bgA = sa;
  }
  update(dt) {
    { const cv = this.engine.renderer.domElement, sa = (cv.clientWidth || 1) / (cv.clientHeight || 1); if (sa !== this._bgA) this.fitBg(); }
    this.t += dt; this.idleT += dt;
    if (this.target) {
      const k = 1 - Math.exp(-dt * 4);
      this.rot += (this.target.rot - this.rot) * k; this.el += (this.target.el - this.el) * k; this.zoom += (this.target.zoom - this.zoom) * k;
      if (Math.abs(this.target.rot - this.rot) < 0.002 && Math.abs(this.target.zoom - this.zoom) < 0.002) this.target = null;
    } else {
      this.rot += this.rotV * dt; this.rotV *= Math.pow(0.04, dt);
      if (this.auto || this.idleT > 6) { this.auto = true; this.rot += dt * 0.25; }
    }
    this.turn.rotation.y = this.rot; this.blob.rotation.z = this.rot;
    if (this.car) animateMods(this.car, this.t);
    if (this.neonRainbow) this.neonLight.color.setHSL((this.t * 0.15) % 1, 1, 0.55);
    if (this.pop) { this.pop.t += dt; const p = this.pop.t, s = p < 0.5 ? 1 + Math.sin(p / 0.5 * Math.PI) * 0.35 : 1; this.pop.obj.scale.setScalar(s); if (p > 0.5) { this.pop.obj.scale.setScalar(1); this.pop = null; } }
    // kamerayı arabayı "bölge" içinde büyük gösterecek şekilde yerleştir
    const cv = this.engine.renderer.domElement, cam = this.camera, W = cv.clientWidth || innerWidth, H = cv.clientHeight || innerHeight, z = this.zone;
    cam.aspect = W / H; cam.fov = 35; cam.updateProjectionMatrix();
    const tv = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)), th = tv * cam.aspect;
    const R = this.R || 2.3, Hc = this.Hc || 1.5;
    const dW = R / (th * (z.w * 0.94 / W)), dH = (Hc * 0.55 + R * 0.5 * Math.sin(this.el) + 0.3) / (tv * (z.h * 0.92 / H));
    const d = Math.max(dW, dH) / this.zoom;
    const a = 0.35, ce = Math.cos(this.el);
    const ty = Hc * 0.42;
    cam.position.set(Math.sin(a) * d * ce, ty + Math.sin(this.el) * d, Math.cos(a) * d * ce);
    cam.lookAt(0, ty, 0);
    cam.setViewOffset(W, H, W / 2 - (z.x + z.w / 2), H / 2 - (z.y + z.h / 2), W, H);
    this.engine.renderer.toneMappingExposure = 0.9; this.engine.setBloom(0);
  }
  render(dt) { this.engine.render(this.scene, this.camera, dt); }
}
