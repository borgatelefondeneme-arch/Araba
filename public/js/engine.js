// Renderer, son işleme (bloom) ve kalite ayarları
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const QUALITY = {
  // props: dekor yoğunluğu, range: görüş mesafesi (m), propShadows: ağaç/ev gölgesi, grass: çim/ayçiçeği yoğunluğu
  low: { pr: 0.8, shadows: 0, bloom: false, props: 0.22, range: 140, aa: false, propShadows: false, grass: 0, normals: false, lite: true },
  medium: { pr: 1.25, shadows: 1024, bloom: false, props: 0.55, range: 210, aa: false, propShadows: false, grass: 0.4, normals: false },
  high: { pr: 2, shadows: 2048, bloom: true, props: 1, range: 340, aa: true, propShadows: true, grass: 1, normals: true },
};

export class Engine {
  constructor(canvas, level = 'auto') {
    const mobile = matchMedia('(pointer: coarse)').matches;
    this.level = level === 'auto' ? (mobile ? 'medium' : 'high') : level;
    this.quality = QUALITY[this.level];
    const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: this.quality.aa, powerPreference: 'high-performance', alpha: false });
    r.setClearColor(0x0e1420, 1); // opak tuval: iPhone'da ekran birleştirme maliyeti yok
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
    const c = this.renderer.domElement, w = c.clientWidth || innerWidth, h = c.clientHeight || innerHeight; // tuvalin gerçek boyutu (iOS ana ekran uygulamasında tam ekran)
    this.renderer.setPixelRatio(this.pr); this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.pr); this.composer.setSize(w, h);
    this.bloom.setSize(w * this.pr / 2, h * this.pr / 2);
    this.aspect = w / h;
    if (this.onResize) this.onResize(w, h);
  }
  setBloom(strength) { this.bloom.strength = strength; this.bloom.enabled = strength > 0; }
  render(scene, camera) {
    // bloom kapalıyken ek tam ekran geçişleri yapmadan doğrudan çiz (mobilde büyük kazanç)
    if (this.quality.bloom && this.bloom.enabled) { this.renderPass.scene = scene; this.renderPass.camera = camera; this.composer.render(); }
    else this.renderer.render(scene, camera);
    // uyarlanabilir çözünürlük: gerçek kare süresini ölç; sadece düşür (iniş-çıkış takılma yaratır)
    const now = performance.now();
    if (!this.fpsT0) { this.fpsT0 = now; this.fpsN = 0; return; }
    this.fpsN++;
    if (now - this.fpsT0 > 2500) {
      const fps = this.fpsN * 1000 / (now - this.fpsT0); this.fpsT0 = now; this.fpsN = 0;
      this.lastFps = fps;
      const cap = Math.min(devicePixelRatio || 1, this.quality.pr);
      if (now - (this.lastChange || 0) < 8000) return; // çözünürlüğü sık değiştirme (her değişim kısa bir takılma yapar)
      if (fps < 45 && this.pr > 0.75) { this.lastChange = now; if (this.raised) this.prLocked = true; this.pr = Math.max(0.75, this.pr - 0.25); this.resize(); this.goodN = 0; }
      // akıcıysa netliği geri yükselt (iki ölçüm üst üste iyi olmalı; iniş-çıkış olursa kilitlenir)
      else if (fps >= 56 && !this.prLocked && this.pr < cap) { this.goodN = (this.goodN || 0) + 1; if (this.goodN >= 2) { this.lastChange = now; this.pr = Math.min(cap, this.pr + 0.25); this.raised = true; this.goodN = 0; this.resize(); } }
      else this.goodN = 0;
      if (fps < 38 && this.pr <= 0.75 && this.onSlow) { this.slowN = (this.slowN || 0) + 1; this.onSlow(this.slowN); }
    }
  }
  resetFps() { this.fpsT0 = 0; this.slowN = 0; this.goodN = 0; this.prLocked = false; this.raised = false; }
}
