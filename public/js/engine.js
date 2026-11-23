// Renderer, son işleme (bloom) ve kalite ayarları
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const QUALITY = {
  low: { pr: 1, shadows: 0, bloom: false, props: 0.5, range: 200, aa: false },
  medium: { pr: 1.5, shadows: 1024, bloom: true, props: 0.8, range: 280, aa: true },
  high: { pr: 2, shadows: 2048, bloom: true, props: 1, range: 360, aa: true },
};

export class Engine {
  constructor(canvas, level = 'auto') {
    const mobile = matchMedia('(pointer: coarse)').matches;
    this.level = level === 'auto' ? (mobile ? 'medium' : 'high') : level;
    this.quality = QUALITY[this.level];
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: this.quality.aa, powerPreference: 'high-performance', alpha: true });
    r.setClearColor(0x000000, 0);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 0.7;
    r.shadowMap.enabled = this.quality.shadows > 0; r.shadowMap.type = THREE.PCFShadowMap;
    this.composer = new EffectComposer(r);
    this.renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.3, 0.5, 0.9);
    this.composer.addPass(this.renderPass); this.composer.addPass(this.bloom); this.composer.addPass(new OutputPass());
    this.pr = Math.min(devicePixelRatio || 1, this.quality.pr);
    this.resize(); addEventListener('resize', () => this.resize());
    this.fpsAcc = 0; this.fpsN = 0; this.adaptT = 0;
    // grafik bağlamı kaybolursa (bellek dolarsa) sayfayı yeniden yükle
    canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); setTimeout(() => location.reload(), 600); });
  }
  resize() {
    const w = innerWidth, h = innerHeight;
    this.renderer.setPixelRatio(this.pr); this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.pr); this.composer.setSize(w, h);
    this.bloom.setSize(w * this.pr / 2, h * this.pr / 2);
    this.aspect = w / h;
    if (this.onResize) this.onResize(w, h);
  }
  setBloom(strength) { this.bloom.strength = strength; this.bloom.enabled = strength > 0; }
  render(scene, camera, dt = 0.016) {
    if (this.quality.bloom) { this.renderPass.scene = scene; this.renderPass.camera = camera; this.composer.render(dt); }
    else this.renderer.render(scene, camera);
    // uyarlanabilir çözünürlük: yavaş cihazlarda keskinliği düşür
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsAcc > 2) {
      const fps = this.fpsN / this.fpsAcc; this.fpsAcc = 0; this.fpsN = 0;
      if (fps < 40 && this.pr > 0.8) { this.pr = Math.max(0.8, this.pr - 0.25); this.resize(); }
      else if (fps > 57 && this.pr < Math.min(devicePixelRatio || 1, this.quality.pr)) { this.pr = Math.min(this.pr + 0.25, devicePixelRatio || 1, this.quality.pr); this.resize(); }
    }
  }
}
