// Menü arka planı: döner platformda araba (stüdyo ışıklandırması)
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCar } from './cars.js';
import { makeBlobShadow } from './textures.js';

export class Showroom {
  constructor(engine) {
    this.engine = engine;
    const s = this.scene = new THREE.Scene();
    s.background = new THREE.Color(0x0e1420);
    s.fog = new THREE.Fog(0x0e1420, 14, 40);
    const pm = new THREE.PMREMGenerator(engine.renderer);
    s.environment = pm.fromScene(new RoomEnvironment(), 0.03).texture; s.environmentIntensity = 0.45; pm.dispose();
    this.camera = new THREE.PerspectiveCamera(40, engine.aspect, 0.1, 100);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.MeshPhysicalMaterial({ color: 0x0c1018, roughness: 0.35, metalness: 0.6, clearcoat: 1, clearcoatRoughness: 0.2 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; s.add(floor);
    const plat = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.7, 0.12, 64), new THREE.MeshStandardMaterial({ color: 0x2b3240, metalness: 0.9, roughness: 0.3 }));
    plat.position.y = 0.06; plat.receiveShadow = true; s.add(plat); this.plat = plat;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.68, 0.03, 8, 96), new THREE.MeshBasicMaterial({ color: 0x40c4ff }));
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.1; s.add(ring);
    const key = new THREE.DirectionalLight(0xfff6ec, 2.2); key.position.set(3, 10, 4); key.castShadow = engine.quality.shadows > 0;
    key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0005; const sc = key.shadow.camera; sc.left = sc.bottom = -5; sc.right = sc.top = 5; s.add(key);
    const rim = new THREE.DirectionalLight(0x6fa8ff, 1.4); rim.position.set(-6, 4, -6); s.add(rim);
    s.add(new THREE.HemisphereLight(0x8090b0, 0x101018, 0.35));
    // tavan ışık şeritleri (yansımalar için)
    const strip = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (const x of [-2.5, 0, 2.5]) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.05, 9), strip); m.position.set(x, 9, 0); s.add(m); }
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 6), new THREE.MeshBasicMaterial({ map: makeBlobShadow(), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.125; s.add(shadow); this.shadow = shadow;
    this.turn = new THREE.Group(); this.turn.position.y = 0.12; s.add(this.turn);
    this.t = 0; this.car = null; this.offsetX = 0; this.offsetY = 0;
  }
  setCar(type, color) {
    if (this.car) this.turn.remove(this.car);
    this.car = buildCar(type, color); this.turn.add(this.car);
  }
  update(dt) {
    this.t += dt; this.turn.rotation.y += dt * 0.35; this.shadow.rotation.z = this.turn.rotation.y;
    const portrait = this.engine.aspect < 1;
    const r = portrait ? 13 : 9.5, a = 2.5 + Math.sin(this.t * 0.2) * 0.15;
    const cam = this.camera; cam.aspect = this.engine.aspect; cam.fov = portrait ? 50 : 38; cam.updateProjectionMatrix();
    cam.position.set(Math.sin(a) * r, 2.8 + (portrait ? 1.5 : 0), Math.cos(a) * r);
    cam.lookAt(0, portrait ? 0.2 : 0.6, 0);
    const w = innerWidth, h = innerHeight;
    if (this.offsetX || this.offsetY) cam.setViewOffset(w, h, this.offsetX, this.offsetY, w, h); else cam.clearViewOffset();
    this.engine.renderer.toneMappingExposure = 0.9; this.engine.setBloom(0.12);
  }
  render(dt) { this.engine.render(this.scene, this.camera, dt); }
}
