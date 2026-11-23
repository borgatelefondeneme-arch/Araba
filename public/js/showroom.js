// Menü / garaj sahnesi: köy yolu fotoğrafının önünde, gölge düşüren gerçek araba modeli
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCar, loadModel } from './cars.js';

export class Showroom {
  constructor(engine) {
    this.engine = engine;
    const s = this.scene = new THREE.Scene();
    s.background = null; // arka plan: CSS'teki köy fotoğrafı (şeffaf tuval)
    const pm = new THREE.PMREMGenerator(engine.renderer);
    s.environment = pm.fromScene(new RoomEnvironment(), 0.03).texture; s.environmentIntensity = 0.7; pm.dispose();
    this.camera = new THREE.PerspectiveCamera(32, engine.aspect, 0.1, 100);
    // fotoğraftaki ışığa uygun: soldan alçak, sıcak gün batımı güneşi
    const sun = new THREE.DirectionalLight(0xffe2b8, 2.6); sun.position.set(-7, 6, 3); sun.castShadow = engine.quality.shadows > 0;
    sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02; sun.shadow.radius = 4;
    const sc = sun.shadow.camera; sc.left = sc.bottom = -6; sc.right = sc.top = 6; sc.near = 1; sc.far = 30; s.add(sun);
    s.add(new THREE.HemisphereLight(0xbfd8ff, 0x6b5a40, 0.9));
    const fill = new THREE.DirectionalLight(0xcfe0ff, 0.6); fill.position.set(5, 3, 6); s.add(fill);
    // sadece gölgeyi gösteren zemin
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.45 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; s.add(floor);
    // temas gölgesi
    const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
    const g = x.createRadialGradient(64, 64, 8, 64, 64, 64); g.addColorStop(0, 'rgba(0,0,0,0.75)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    this.blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    this.blob.rotation.x = -Math.PI / 2; this.blob.position.y = 0.01; s.add(this.blob);
    this.turn = new THREE.Group(); s.add(this.turn);
    this.t = 0; this.car = null; this.offsetX = 0; this.offsetY = 0; this.req = 0;
  }
  async setCar(type, color) {
    const id = ++this.req;
    this.onLoading?.(true);
    try { await loadModel(type); } catch (e) { console.warn(e); }
    if (id !== this.req) return;
    this.onLoading?.(false);
    if (this.car) this.turn.remove(this.car);
    this.car = buildCar(type, color); this.turn.add(this.car);
    const ud = this.car.userData; this.blob.scale.set(ud.halfW * 2.6, ud.halfL * 2.4, 1);
    this.fit = Math.max(ud.halfL * 2, 4.2);
  }
  update(dt) {
    this.t += dt; this.turn.rotation.y += dt * 0.3; this.blob.rotation.z = this.turn.rotation.y;
    const portrait = this.engine.aspect < 1, f = (this.fit || 4.4) / 4.4;
    const r = (portrait ? 17 : 12.5) * f, a = 0.35 + Math.sin(this.t * 0.25) * 0.08;
    const cam = this.camera; cam.aspect = this.engine.aspect; cam.fov = portrait ? 42 : 30; cam.updateProjectionMatrix();
    cam.position.set(Math.sin(a) * r, 2.2 * f, Math.cos(a) * r);
    cam.lookAt(0, 0.7 * f, 0);
    const w = innerWidth, h = innerHeight;
    // araba ekranın alt kısmında, yolun üstünde dursun
    const oy = this.offsetY + (portrait ? -h * 0.02 : -h * 0.12);
    cam.setViewOffset(w, h, this.offsetX, oy, w, h);
    this.engine.renderer.toneMappingExposure = 0.85; this.engine.setBloom(0);
  }
  render(dt) { this.engine.render(this.scene, this.camera, dt); }
}
