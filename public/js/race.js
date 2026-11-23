// Yarış: oyuncu fiziği, kontroller, çarpışma, kamera, HUD, çok oyunculu hayalet arabalar
import * as THREE from 'three';
import { World } from './world.js';
import { TrackView } from './track.js';
import { buildCar, spinWheels } from './cars.js';
import { applyMods, animateMods } from './mods.js';
import { ROAD, makeBlobShadow, makeLabel } from './textures.js';
import { sfx, engineStart, engineSet, engineStop } from './audio.js';

const $ = (id) => document.getElementById(id);
const G = 30;

export class Race {
  constructor(engine, opts) {
    this.engine = engine; this.o = opts;
    const { level, carDef, color, stats } = opts;
    this.level = level; this.stats = stats; this.mp = !!opts.mp;
    this.world = new World(engine, level.theme, opts.seed);
    this.scene = this.world.scene;
    this.track = new TrackView(this.scene, level, opts.seed);
    engine.renderer.toneMapping = THREE.NeutralToneMapping; engine.renderer.toneMappingExposure = this.world.T.exposure;
    engine.setBloom(this.world.T.bloom);
    this.camera = new THREE.PerspectiveCamera(62, engine.aspect, 0.3, 6000);
    // oyuncu arabası
    this.car = buildCar(carDef.type, color, { finish: opts.custom?.finish }); this.scene.add(this.car);
    try { applyMods(this.car, opts.custom || {}, opts.upg || {}); } catch (e) { console.warn('mods', e); }
    if (this.world.T.night) { // gece farları
      const hl = new THREE.SpotLight(0xfff1d6, 60, 70, 0.45, 0.6, 1.2); hl.position.set(0, 0.9, -this.car.userData.halfL); hl.target.position.set(0, 0, -this.car.userData.halfL - 25);
      this.car.add(hl); this.car.add(hl.target);
    }
    this.halfW = this.car.userData.halfW; this.halfL = this.car.userData.halfL;
    const shadowTex = makeBlobShadow();
    const blob = new THREE.Mesh(new THREE.PlaneGeometry(this.halfW * 2.6, this.halfL * 2.4), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.85 }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.02; this.scene.add(blob); this.blob = blob;
    // nitro alevleri
    const flameMat = new THREE.MeshBasicMaterial({ color: 0x3d8bff, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false });
    this.flames = [];
    for (const x of [-0.35, 0.35]) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.13, 1.1, 12), flameMat); f.rotation.x = Math.PI / 2; f.position.set(x, 0.3, this.halfL + 0.65); f.visible = false; this.car.add(f); this.flames.push(f); }
    const core = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
    for (const x of [-0.35, 0.35]) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.55, 10), core); f.rotation.x = Math.PI / 2; f.position.set(x, 0.3, this.halfL + 0.4); f.visible = false; this.car.add(f); this.flames.push(f); }
    // kalkan baloncuğu
    this.bubble = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), new THREE.MeshPhysicalMaterial({ color: 0x80deea, transparent: true, opacity: 0.22, roughness: 0, clearcoat: 1, emissive: 0x00bcd4, emissiveIntensity: 0.4, depthWrite: false }));
    this.bubble.scale.set(this.halfW * 1.5, 1.4, this.halfL * 1.3); this.bubble.position.y = 0.8; this.bubble.visible = false; this.car.add(this.bubble);
    // hız çizgileri (rüzgar parçacıkları)
    const N = 160, pos = new Float32Array(N * 6);
    this.windGeo = new THREE.BufferGeometry(); this.windGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.wind = new THREE.LineSegments(this.windGeo, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.wind.frustumCulled = false; this.scene.add(this.wind); this.windP = Array.from({ length: N }, () => this.newWind(true));

    // durum
    this.state = 'countdown'; this.cd = opts.countdown ?? 3.2; this.lastBeep = 4;
    this.dist = 0; this.speed = 0; this.lane = 1; this.prevLane = 1; this.x = 0; this.y = 0; this.vy = 0; this.onRamp = null;
    this.time = 0; this.starsGot = 0; this.diamondsGot = 0; this.crashes = 0;
    this.maxHearts = 1 + Math.floor(stats.armor / 2); this.hearts = this.maxHearts;
    this.nitro = 0.35; this.nitroT = 0; this.magnetT = 0; this.shieldT = 0; this.invT = 0; this.shake = 0; this.endT = 0;
    this.camPos = new THREE.Vector3(0, 4, 9); this.camLook = new THREE.Vector3();
    this.remotes = new Map(); this.sendT = 0;
    if (this.mp) for (const p of opts.players || []) if (p.id !== opts.myId) this.addRemote(p);

    this.bindInput();
    this.hudInit();
    engineStart();
  }

  newWind(init) { return { x: (Math.random() - 0.5) * 16, y: 0.5 + Math.random() * 5, z: -(init ? Math.random() * 60 : 60), l: 1 + Math.random() * 3 }; }

  addRemote(p) {
    const car = buildCar(p.model || 'hatchback', p.color || 'orig', { lite: true });
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabel(p.name, '#ffffff'), depthTest: false, transparent: true }));
    label.scale.set(2.8, 0.7, 1); label.position.y = car.userData.height + 1.2; car.userData.label = label; label.renderOrder = 10; car.add(label);
    car.visible = false; this.scene.add(car);
    this.remotes.set(p.id, { id: p.id, name: p.name, color: p.color, car, d: 0, x: 0, y: 0, s: 0, rd: 0, rx: 0, has: false, finished: false });
    this.hudMarkers();
  }
  remoteState(m) {
    const r = this.remotes.get(m.id); if (!r) return;
    r.d = m.d; r.x = m.x; r.y = m.y; r.s = m.s; if (!r.has) { r.rd = m.d; r.rx = m.x; } r.has = true;
  }
  removeRemote(id) { const r = this.remotes.get(id); if (r) { this.scene.remove(r.car); this.remotes.delete(id); this.hudMarkers(); } }

  // ---------- Kontroller ----------
  bindInput() {
    const el = $('touch');
    let sx = 0, sy = 0, st = 0, used = false;
    this.onTS = (e) => { const t = e.changedTouches ? e.changedTouches[0] : e; sx = t.clientX; sy = t.clientY; st = performance.now(); used = false; };
    this.onTM = (e) => {
      if (used) return; const t = e.changedTouches ? e.changedTouches[0] : e;
      if (e.type === 'mousemove' && !(e.buttons & 1)) return;
      const dx = t.clientX - sx, dy = t.clientY - sy, th = Math.min(innerWidth, innerHeight) * 0.06;
      if (Math.abs(dx) > th || Math.abs(dy) > th) {
        used = true;
        if (Math.abs(dx) > Math.abs(dy)) this.steer(dx > 0 ? 1 : -1); else if (dy < 0) this.jump(); else this.useNitro();
      }
      if (e.cancelable) e.preventDefault();
    };
    this.onTE = (e) => {
      if (used) return; const t = e.changedTouches ? e.changedTouches[0] : e;
      if (performance.now() - st < 350) this.steer(t.clientX < innerWidth / 2 ? -1 : 1);
    };
    this.onKey = (e) => {
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      if (k === 'arrowleft' || k === 'a') this.steer(-1);
      else if (k === 'arrowright' || k === 'd') this.steer(1);
      else if (k === 'arrowup' || k === 'w' || k === ' ') this.jump();
      else if (k === 'arrowdown' || k === 's' || k === 'shift') this.useNitro();
      else if (k === 'escape' || k === 'p') this.o.onPause?.();
    };
    el.addEventListener('touchstart', this.onTS, { passive: true }); el.addEventListener('touchmove', this.onTM, { passive: false }); el.addEventListener('touchend', this.onTE);
    el.addEventListener('mousedown', this.onTS); el.addEventListener('mousemove', this.onTM); el.addEventListener('mouseup', this.onTE);
    addEventListener('keydown', this.onKey);
    this.onNitroBtn = (e) => { e.stopPropagation(); e.preventDefault(); this.useNitro(); };
    $('nitro-btn').addEventListener('pointerdown', this.onNitroBtn);
  }
  unbindInput() {
    const el = $('touch');
    el.removeEventListener('touchstart', this.onTS); el.removeEventListener('touchmove', this.onTM); el.removeEventListener('touchend', this.onTE);
    el.removeEventListener('mousedown', this.onTS); el.removeEventListener('mousemove', this.onTM); el.removeEventListener('mouseup', this.onTE);
    removeEventListener('keydown', this.onKey); $('nitro-btn').removeEventListener('pointerdown', this.onNitroBtn);
  }
  steer(dir) {
    if (this.state !== 'run') return;
    const nl = Math.max(0, Math.min(2, this.lane + dir));
    if (nl !== this.lane) { this.prevLane = this.lane; this.lane = nl; if (this.speed > 20 && Math.random() < 0.6) sfx.tires(); }
  }
  jump() { if (this.state !== 'run' || this.y > 0.05 || this.onRamp) return; this.vy = 9.5; sfx.jump(); }
  useNitro() {
    if (this.state !== 'run' || this.nitro < 1 || this.nitroT > 0) return;
    this.nitroT = 2.6 + this.stats.nitro * 0.35; this.nitroDur = this.nitroT; sfx.nitro(); this.flash('#4fc3f7');
  }

  // ---------- HUD ----------
  hudInit() {
    $('hud').classList.remove('hidden'); $('touch').classList.remove('hidden');
    $('hud-level').textContent = this.mp ? 'Birlikte Yarış' : `Bölüm ${this.level.n}`;
    $('hud-hearts').classList.toggle('hidden', this.mp);
    $('countdown').textContent = ''; this.hudMarkers(); this.hudT = 0;
    $('hud-pause').classList.toggle('hidden', this.mp);
  }
  hudMarkers() {
    const box = $('hud-markers'); box.innerHTML = '';
    for (const r of this.remotes.values()) { const m = document.createElement('div'); m.className = 'marker'; m.style.background = r.color; m.title = r.name; m.id = 'mk-' + r.id; box.appendChild(m); }
    const me = document.createElement('div'); me.className = 'marker me'; me.id = 'mk-me'; me.style.background = this.o.color; box.appendChild(me);
  }
  hud(dt) {
    this.hudT -= dt; if (this.hudT > 0) return; this.hudT = 0.08;
    $('hud-stars').textContent = this.starsGot; $('hud-diamonds').textContent = this.diamondsGot;
    $('hud-speed').textContent = Math.round(this.speed * 3.6);
    $('hud-hearts').textContent = '❤️'.repeat(this.hearts) + '🖤'.repeat(Math.max(0, this.maxHearts - this.hearts));
    const p = Math.min(1, this.dist / this.level.length);
    $('hud-bar').style.width = (p * 100) + '%'; $('mk-me').style.left = (p * 100) + '%';
    for (const r of this.remotes.values()) { const m = $('mk-' + r.id); if (m) m.style.left = Math.min(100, r.rd / this.level.length * 100) + '%'; }
    const nb = $('nitro-btn'); nb.style.setProperty('--fill', (this.nitroT > 0 ? this.nitroT / this.nitroDur : Math.min(1, this.nitro)) * 100 + '%');
    nb.classList.toggle('ready', this.nitro >= 1 && this.nitroT <= 0); nb.classList.toggle('active', this.nitroT > 0);
    let pw = ''; if (this.magnetT > 0) pw += `<span>🧲 ${Math.ceil(this.magnetT)}</span>`; if (this.shieldT > 0) pw += `<span>🛡️ ${Math.ceil(this.shieldT)}</span>`;
    $('hud-power').innerHTML = pw;
  }
  flash(color) { const f = $('flash'); f.style.background = color; f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
  popText(txt) { const el = $('pop'); el.textContent = txt; el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); }

  // ---------- Güncelleme ----------
  update(dt) {
    dt = Math.min(dt, 0.05);
    this.time += dt;
    const st = this.stats;
    if (this.state === 'countdown') {
      this.cd -= dt; const n = Math.ceil(this.cd);
      if (n !== this.lastBeep && n >= 0) { this.lastBeep = n; if (n > 0) { $('countdown').textContent = n; sfx.beep(false); } else { $('countdown').textContent = 'BAŞLA!'; sfx.beep(true); } }
      if (this.cd <= 0) { this.state = 'run'; setTimeout(() => { if ($('countdown').textContent === 'BAŞLA!') $('countdown').textContent = ''; }, 700); }
    }
    const running = this.state === 'run';
    if (running) this.runT = (this.runT || 0) + dt;
    // hız
    const prog = this.dist / this.level.length;
    let target = this.level.speed + (st.speed - 1) * 1.1 + prog * 5;
    if (this.nitroT > 0) target *= 1.5;
    if (!running) target = this.state === 'finish' ? 8 : this.state === 'crashed' ? 0 : 0;
    const acc = this.speed < target ? (this.state === 'run' ? 0.9 + st.speed * 0.05 : 2) : 2.5;
    this.speed += (target - this.speed) * Math.min(1, dt * acc);
    if (this.state === 'crashed') this.speed *= Math.pow(0.02, dt);
    this.dist += this.speed * dt;
    // yatay
    const tx = ROAD.lanes[this.lane], k = 7 + st.handling * 0.9;
    const px = this.x; this.x += (tx - this.x) * (1 - Math.exp(-k * dt));
    const vx = (this.x - px) / Math.max(dt, 1e-4);
    // dikey (zıplama ve rampa)
    this.verticalUpdate(dt);
    // zamanlayıcılar
    if (this.nitroT > 0) { this.nitroT -= dt; this.nitro = Math.max(0, this.nitroT / this.nitroDur); if (this.nitroT <= 0) this.nitro = 0; }
    if (this.magnetT > 0) this.magnetT -= dt;
    if (this.shieldT > 0) this.shieldT -= dt;
    if (this.invT > 0) this.invT -= dt;
    // içerik ve çarpışma
    this.track.update(this.dist, dt, this.time);
    if (running) this.collide();
    if (running && this.dist >= this.level.length) this.finish();
    if (this.state === 'finish' || this.state === 'crashed') { this.endT += dt; if (this.endT > 2.2 && !this.ended) { this.ended = true; this.o.onEnd?.(this.result()); } }
    // araba görseli
    const c = this.car; c.position.set(this.x, this.y, -this.dist);
    this.roll = THREE.MathUtils.lerp(this.roll || 0, vx * 0.012, 0.2);
    const pitch = this.onRamp ? 0.18 : (this.y > 0.05 ? THREE.MathUtils.clamp(this.vy * 0.015, -0.12, 0.12) : Math.sin(this.time * 30) * 0.002 * this.speed / 30);
    c.rotation.set(pitch, -vx * 0.035, this.roll);
    spinWheels(c, this.dist); animateMods(c, this.time);
    c.visible = !(this.invT > 0 && Math.floor(this.time * 12) % 2 === 0);
    for (const f of this.flames) { f.visible = this.nitroT > 0; f.scale.set(1, 0.8 + Math.random() * 0.5, 1); }
    this.bubble.visible = this.shieldT > 0; this.bubble.material.opacity = 0.18 + Math.sin(this.time * 8) * 0.05;
    this.blob.position.set(this.x, 0.02, -this.dist); this.blob.material.opacity = 0.85 / (1 + this.y * 0.6);
    // uzak oyuncular
    for (const r of this.remotes.values()) {
      if (!r.has) continue;
      if (!r.finished) r.d += r.s * dt;
      r.rd += (r.d - r.rd) * Math.min(1, dt * 6); r.rx += (r.x - r.rx) * Math.min(1, dt * 10);
      const rel = r.rd - this.dist;
      r.car.visible = rel > -30 && rel < 300; r.car.userData.label.visible = rel > 4;
      r.car.position.set(r.rx, r.y || 0, -r.rd); spinWheels(r.car, r.rd);
    }
    if (this.mp && (this.sendT -= dt) <= 0) { this.sendT = 0.1; this.o.net.send({ t: 'state', d: +this.dist.toFixed(2), x: +this.x.toFixed(2), y: +this.y.toFixed(2), s: +this.speed.toFixed(2) }); }
    this.updateCamera(dt);
    this.updateWind(dt);
    this.world.update(-this.dist, this.camera, dt);
    engineSet(this.speed, this.nitroT > 0);
    this.hud(dt);
  }

  verticalUpdate(dt) {
    // rampa kontrolü
    if (!this.onRamp && this.y < 0.3) {
      for (const e of this.track.active) if (e.kind === 'ramp' && Math.abs(this.x - e.x) < 1.6 && this.dist >= e.z && this.dist < e.z + e.len) { this.onRamp = e; this.vy = 0; break; }
    }
    if (this.onRamp) {
      const e = this.onRamp;
      if (this.dist >= e.z + e.len || Math.abs(this.x - e.x) > 1.9) { this.onRamp = null; this.vy = 11 + this.speed * 0.02; this.y = e.h; sfx.jump(); this.popText('UÇUŞ! ✈️'); }
      else { this.y = (this.dist - e.z) / e.len * e.h; return; }
    }
    if (this.y > 0 || this.vy > 0) {
      this.vy -= G * dt; this.y += this.vy * dt;
      if (this.y <= 0) { if (this.vy < -8) { sfx.land(); this.shake = 0.25; } this.y = 0; this.vy = 0; }
    }
  }

  collide() {
    const dist = this.dist, magnetR = this.magnetT > 0 ? 30 + this.stats.magnet * 2 : 0;
    for (const e of this.track.active) {
      if (!e.alive) continue;
      const dz = e.z - dist;
      if (e.kind === 'star' || e.kind === 'diamond' || e.kind === 'magnet' || e.kind === 'nitro' || e.kind === 'shield') {
        if (magnetR && (e.kind === 'star' || e.kind === 'diamond') && dz < magnetR && dz > -3) { e.magnet = { x: this.x, y: this.y }; e.z += (dist - e.z) * Math.min(1, 0.016 * 14); }
        const ey = e.obj ? e.obj.position.y : (e.y || 1);
        if (Math.abs(dz) < this.halfL + 0.6 && Math.abs((e.obj ? e.obj.position.x : e.x) - this.x) < this.halfW + 0.6 && Math.abs(ey - (this.y + 0.9)) < 1.6) this.collect(e);
        continue;
      }
      if (e.kind === 'obst' || e.kind === 'traffic') {
        if (Math.abs(dz) < e.hl + this.halfL * 0.85 && Math.abs(e.x - this.x) < e.hw + this.halfW * 0.8 && this.y < e.h - 0.05) this.hit(e, dz);
      }
    }
  }
  collect(e) {
    e.alive = false; e.collectT = 0.001;
    switch (e.kind) {
      case 'star': this.starsGot++; this.nitro = Math.min(1, this.nitro + (this.nitroT > 0 ? 0 : 0.03)); sfx.star(); break;
      case 'diamond': this.diamondsGot++; sfx.diamond(); this.popText('+1 💎'); break;
      case 'magnet': this.magnetT = 6 + this.stats.magnet * 1.2; sfx.power(); this.popText('MIKNATIS 🧲'); break;
      case 'nitro': this.nitro = 1; sfx.power(); this.popText('NİTRO HAZIR 🔥'); break;
      case 'shield': this.shieldT = 12; sfx.power(); this.popText('KALKAN 🛡️'); break;
    }
  }
  knock(e, dir) {
    e.alive = false;
    e.fly = { vx: (Math.random() - 0.5) * 10 + dir * 6, vy: 8 + Math.random() * 4, vz: this.speed * 0.9 + 10, rx: (Math.random() - 0.5) * 10, rz: (Math.random() - 0.5) * 10, t: 0 };
  }
  hit(e, dz) {
    if (this.nitroT > 0 || this.shieldT > 0) {
      this.knock(e, Math.sign(e.x - this.x) || 1); sfx.bump(); this.shake = 0.35;
      if (this.nitroT <= 0) { this.shieldT = 0; this.popText('KALKAN KIRILDI!'); this.invT = 1; }
      return;
    }
    if (this.invT > 0) return;
    // yandan sürtünme: önceki şeride geri sek
    const sideways = Math.abs(dz) > (e.hl + this.halfL) * 0.45 && this.prevLane !== this.lane;
    if (sideways) { this.lane = this.prevLane; this.speed *= 0.85; sfx.bump(); this.shake = 0.3; this.flash('rgba(255,180,0,0.35)'); this.invT = 0.4; return; }
    this.crashes++; sfx.crash(); this.shake = 0.7; this.flash('rgba(255,40,40,0.55)'); this.knock(e, Math.sign(e.x - this.x) || 1);
    if (this.mp) { this.speed *= 0.25; this.invT = 1.6; this.popText('ÇARPIŞMA! 💥'); return; }
    this.hearts--;
    if (this.hearts <= 0) { this.state = 'crashed'; this.endT = 0; this.vy = 6; this.y = Math.max(this.y, 0.01); engineStop(); sfx.lose(); this.popText('KAZA! 💥'); }
    else { this.speed *= 0.3; this.invT = 2; this.popText(`${this.hearts} can kaldı`); }
  }
  finish() {
    this.state = 'finish'; this.endT = 0; this.finishTime = this.runT || 0; sfx.win(); this.popText('BİTİŞ! 🏁');
    if (this.mp) this.o.net.send({ t: 'finish', time: +this.finishTime.toFixed(2), stars: this.starsGot });
  }
  result() {
    const ratio = this.track.totalStars ? this.starsGot / this.track.totalStars : 1;
    const success = this.state === 'finish';
    const rating = !success ? 0 : (ratio >= 0.7 && this.crashes === 0) ? 3 : ratio >= 0.4 ? 2 : 1;
    return { success, rating, stars: this.starsGot, diamonds: this.diamondsGot, total: this.track.totalStars, crashes: this.crashes, time: this.finishTime || this.time, dist: this.dist };
  }

  updateCamera(dt) {
    const cam = this.camera, portrait = this.engine.aspect < 1;
    const boost = this.nitroT > 0 ? 1 : 0;
    const back = portrait ? 8.8 : 7.6, up = portrait ? 4.4 : 3.5;
    const fov = (portrait ? 74 : 60) + boost * 12 + Math.min(8, this.speed * 0.15);
    cam.fov += (fov - cam.fov) * Math.min(1, dt * 3); cam.aspect = this.engine.aspect; cam.updateProjectionMatrix();
    const tp = new THREE.Vector3(this.x * 0.75, up + this.y * 0.6, -this.dist + back - boost * 1.2);
    if (this.state === 'countdown') tp.add(new THREE.Vector3(Math.sin(this.cd) * 3 * Math.max(0, this.cd - 0.5) / 3, Math.max(0, this.cd - 0.5) * 0.6, 0));
    this.camPos.lerp(tp, Math.min(1, dt * 8));
    this.camPos.z = tp.z; // ileri yönde sıkı takip
    cam.position.copy(this.camPos);
    if (this.shake > 0) { this.shake -= dt; const s = this.shake * 0.4; cam.position.x += (Math.random() - 0.5) * s; cam.position.y += (Math.random() - 0.5) * s; }
    this.camLook.set(this.x * 0.85, 1 + this.y * 0.5, -this.dist - 9);
    cam.lookAt(this.camLook);
  }
  updateWind(dt) {
    const show = this.nitroT > 0 ? 0.55 : Math.max(0, (this.speed - 30) / 30) * 0.3;
    this.wind.material.opacity += (show - this.wind.material.opacity) * Math.min(1, dt * 4);
    if (this.wind.material.opacity < 0.01) { this.wind.visible = false; return; }
    this.wind.visible = true;
    const a = this.windGeo.attributes.position.array, base = -this.dist;
    this.windP.forEach((p, i) => {
      p.z += this.speed * dt * 1.2; if (p.z > 8) Object.assign(p, this.newWind(false));
      const L = p.l * (1 + this.speed / 20);
      a.set([this.x + p.x, p.y, base + p.z, this.x + p.x, p.y, base + p.z - L], i * 6);
    });
    this.windGeo.attributes.position.needsUpdate = true;
  }

  render(dt) { this.engine.render(this.scene, this.camera, dt); }

  dispose() {
    this.engine.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.unbindInput(); engineStop();
    this.track.dispose(); this.world.dispose();
    $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); $('countdown').textContent = '';
  }
}
