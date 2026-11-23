// Yarış: oyuncu fiziği, kontroller, çarpışma, kamera, HUD, çok oyunculu hayalet arabalar
import * as THREE from 'three';
import { World } from './world.js';
import { TrackView } from './track.js';
import { buildCar, spinWheels, raceModel } from './cars.js';
import { applyMods, animateMods } from './mods.js';
import { ROAD, makeBlobShadow, makeLabel } from './textures.js';
import { sfx, engineStart, engineSet, engineStop } from './audio.js';

const $ = (id) => document.getElementById(id);
const G = 30;
let _glow = null;
function glowTex() { if (_glow) return _glow; const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 2, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,0.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); _glow = new THREE.CanvasTexture(c); return _glow; }
const _tp = new THREE.Vector3();

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
    this.car = buildCar(raceModel(carDef.type), color, { finish: opts.custom?.finish, merge: true });
    if (!engine.quality.propShadows) this.car.traverse(o => { if (o.isMesh) o.castShadow = o.geometry.index ? o.geometry.index.count < 30000 : true; }); this.scene.add(this.car);
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
    // yeni oyun döngüsü
    this.mode = this.mp ? 'mp' : (level.mode || 'race');
    this.steerMode = opts.steerMode || 'free'; this.tx = 0; this.keyDir = 0;
    this.score = 0; this.combo = 0; this.comboT = 0; this.shock = 0.3; this.boostT = 0; this.trick = null; this.nearMisses = 0;
    this.rivals = []; this.police = []; this.finishedOrder = [];
    if (this.mode === 'race') this.makeRivals(opts.rivals || []);
    if (this.mode === 'police') { this.makePolice(); this.maxHearts = Math.max(3, this.maxHearts); this.hearts = this.maxHearts; }
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 48), new THREE.MeshBasicMaterial({ color: 0x80d8ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.4; ring.visible = false; this.scene.add(ring); this.ring = ring; this.ringT = 0;
    this.shock = 0.5; this.lastRank = 0; this.finalBanner = false;
    this.touching = false; this.autoGas = !matchMedia('(pointer: coarse)').matches; // dokunmatikte: basılı tut = gaz
    // dikiz aynası (polis ve yarış modlarında): küçük hedefe 3 karede bir çizilir, her karede ekrana yapıştırılır
    if (false) { // dikiz aynası kaldırıldı (telefonda yavaşlatıyordu)
      this.mirrorRT = new THREE.WebGLRenderTarget(360, 120);
      this.mirrorCam = new THREE.PerspectiveCamera(48, 3, 0.5, 170);
      this.mirrorScene = new THREE.Scene(); this.mirrorOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const mt = this.mirrorRT.texture; mt.repeat.x = -1; mt.offset.x = 1; mt.wrapS = THREE.RepeatWrapping; // aynada sağ-sol ters
      this.mirrorScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: mt, depthTest: false })));
      this.mirrorN = 0;
    }
    if (this.mp) for (const p of opts.players || []) if (p.id !== opts.myId) this.addRemote(p);

    // takılma olursa kaliteyi kendiliğinden düşür
    engine.onSlow = (n) => {
      if (n === 1) { this.world.sun.castShadow = false; }
      else if (n === 2) { engine.quality.range = Math.min(engine.quality.range, 150); engine.quality.props = Math.min(engine.quality.props, 0.35); engine.quality.grass = 0; this.world.chunks.clear(); this.world.lastKey = ''; opts.onDegrade?.(); }
      else if (n === 3 && engine.pr > 0.6) { engine.pr = 0.6; engine.resize(); }
    };
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
    let sx = 0, sy = 0, st = 0, used = false, startTx = 0, vUsed = false, lx = 0, lt = 0;
    const roadW = 10.6;
    this.onTS = (e) => { this.touching = true; const t = e.changedTouches ? e.changedTouches[0] : e; sx = lx = t.clientX; sy = t.clientY; st = lt = performance.now(); used = false; vUsed = false; startTx = this.tx; };
    this.onTM = (e) => {
      const t = e.changedTouches ? e.changedTouches[0] : e;
      if (e.type === 'mousemove' && !(e.buttons & 1)) return;
      if (e.cancelable) e.preventDefault();
      const dx = t.clientX - sx, dy = t.clientY - sy, th = Math.min(innerWidth, innerHeight) * 0.06;
      const now = performance.now(), vx = (t.clientX - lx) / Math.max(1, now - lt); lx = t.clientX; lt = now;
      // havadayken hızlı yatay fiske = takla
      if (this.y > 0.6 && Math.abs(vx) > 1.2 && !this.trick) this.doTrick(Math.sign(vx));
      // dikey fiske: yukarı = zıpla, aşağı = nitro
      if (!vUsed && Math.abs(dy) > th * 1.3 && Math.abs(dy) > Math.abs(dx) * 1.6) { vUsed = true; if (dy < 0) this.jump(); else this.useNitro(); return; }
      if (this.steerMode === 'free') { if (!vUsed) this.tx = THREE.MathUtils.clamp(startTx + dx * roadW / (Math.min(innerWidth, 900) * 0.75), -5.1, 5.1); }
      else if (!used && Math.abs(dx) > th && Math.abs(dx) > Math.abs(dy)) { used = true; this.steer(dx > 0 ? 1 : -1); }
    };
    this.onTE = (e) => {
      this.touching = !!(e.touches && e.touches.length);
      const t = e.changedTouches ? e.changedTouches[0] : e;
      if (this.steerMode === 'lane' && !used && !vUsed && performance.now() - st < 350) this.steer(t.clientX < innerWidth / 2 ? -1 : 1);
    };
    this.onKey = (e) => {
      const k = e.key.toLowerCase(), down = e.type === 'keydown';
      if (k === 'arrowleft' || k === 'a' || k === 'arrowright' || k === 'd') {
        const dir = (k === 'arrowleft' || k === 'a') ? -1 : 1;
        if (this.steerMode === 'lane') { if (down && !e.repeat) { if (this.y > 0.6) this.doTrick(dir); else this.steer(dir); } }
        else { if (down) { this.keyDir = dir; if (this.y > 0.6 && !e.repeat) this.doTrick(dir); } else if (this.keyDir === dir) this.keyDir = 0; }
        return;
      }
      if (!down || e.repeat) return;
      if (k === 'arrowup' || k === 'w' || k === ' ') this.jump();
      else if (k === 'arrowdown' || k === 's' || k === 'shift') this.useNitro();
      else if (k === 'q' || k === 'e') this.useShock();
      else if (k === 'escape' || k === 'p') this.o.onPause?.();
    };
    el.addEventListener('touchstart', this.onTS, { passive: true }); el.addEventListener('touchmove', this.onTM, { passive: false }); el.addEventListener('touchend', this.onTE); el.addEventListener('touchcancel', this.onTE);
    el.addEventListener('mousedown', this.onTS); el.addEventListener('mousemove', this.onTM); el.addEventListener('mouseup', this.onTE);
    addEventListener('keydown', this.onKey); addEventListener('keyup', this.onKey);
    this.onNitroBtn = (e) => { e.stopPropagation(); e.preventDefault(); this.useNitro(); };
    $('nitro-btn').addEventListener('pointerdown', this.onNitroBtn);
    this.onShockBtn = (e) => { e.stopPropagation(); e.preventDefault(); this.useShock(); };
    $('shock-btn').addEventListener('pointerdown', this.onShockBtn);
  }
  unbindInput() {
    const el = $('touch');
    el.removeEventListener('touchstart', this.onTS); el.removeEventListener('touchmove', this.onTM); el.removeEventListener('touchend', this.onTE); el.removeEventListener('touchcancel', this.onTE);
    el.removeEventListener('mousedown', this.onTS); el.removeEventListener('mousemove', this.onTM); el.removeEventListener('mouseup', this.onTE);
    removeEventListener('keydown', this.onKey); removeEventListener('keyup', this.onKey); $('nitro-btn').removeEventListener('pointerdown', this.onNitroBtn); $('shock-btn').removeEventListener('pointerdown', this.onShockBtn);
  }
  steer(dir) {
    if (this.state !== 'run') return;
    const nl = Math.max(0, Math.min(2, this.lane + dir));
    if (nl !== this.lane) { this.prevLane = this.lane; this.lane = nl; this.tx = ROAD.lanes[nl]; if (this.speed > 20 && Math.random() < 0.6) sfx.tires(); }
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
    $('hud-hearts').classList.toggle('hidden', this.mp || this.mode === 'race');
    $('countdown').textContent = ''; this.hudMarkers(); this.hudT = 0;
    $('hud-pause').classList.toggle('hidden', this.mp);
    $('mirror').classList.toggle('hidden', !this.mirrorRT); $('police-glow').style.opacity = 0; $('police-glow').classList.remove('on');
    $('hud-rank').classList.toggle('hidden', this.mode === 'mp'); $('hud-rank').textContent = '';
  }
  hudMarkers() {
    const box = $('hud-markers'); box.innerHTML = '';
    for (const r of this.remotes.values()) { const m = document.createElement('div'); m.className = 'marker'; m.style.background = r.color; m.title = r.name; m.id = 'mk-' + r.id; box.appendChild(m); }
    const me = document.createElement('div'); me.className = 'marker me'; me.id = 'mk-me'; me.style.background = this.o.color; box.appendChild(me);
  }
  setT(id, v) { this._hc ||= {}; if (this._hc[id] === v) return; this._hc[id] = v; $(id).textContent = v; } // sadece değişince yaz
  hud(dt) {
    this.hudT -= dt; if (this.hudT > 0) return; this.hudT = 0.1;
    this.setT('hud-stars', this.starsGot); this.setT('hud-diamonds', this.diamondsGot);
    this.setT('hud-speed', Math.round(this.speed * 3.6));
    this.setT('hud-hearts', '❤️'.repeat(Math.max(0, this.hearts)) + '🖤'.repeat(Math.max(0, this.maxHearts - this.hearts)));
    const p = Math.min(1, this.dist / this.level.length);
    $('hud-bar').style.transform = `scaleX(${p})`; $('mk-me').style.left = (p * 100) + '%';
    for (const r of this.remotes.values()) { const m = $('mk-' + r.id); if (m) m.style.left = Math.min(100, r.rd / this.level.length * 100) + '%'; }
    const nb = $('nitro-btn'); nb.style.setProperty('--fill', (this.nitroT > 0 ? this.nitroT / this.nitroDur : Math.min(1, this.nitro)) * 100 + '%');
    nb.classList.toggle('ready', this.nitro >= 1 && this.nitroT <= 0); nb.classList.toggle('active', this.nitroT > 0);
    let pw = ''; if (this.magnetT > 0) pw += `<span>🧲 ${Math.ceil(this.magnetT)}</span>`; if (this.shieldT > 0) pw += `<span>🛡️ ${Math.ceil(this.shieldT)}</span>`;
    if (pw !== this._pw) { this._pw = pw; $('hud-power').innerHTML = pw; }
    // sıra / polis mesafesi, puan, kombo, şok
    if (this.mode === 'race') { const rank = 1 + this.rivals.filter(a => a.d > this.dist).length; this.setT('hud-rank', `${rank}/${this.rivals.length + 1}`); $('hud-rank').classList.toggle('first', rank === 1); }
    else if (this.mode === 'police') {
      const g = this.policeGap ?? 99; this.setT('hud-rank', this.policeAhead ? '🚓 önünde!' : `🚓 ${Math.max(0, Math.round(g))} m`); $('hud-rank').classList.toggle('danger', g < 25);
      const pg = $('police-glow'), close = this.state === 'run' && g < 45; pg.classList.toggle('on', close); pg.style.opacity = close ? Math.min(0.85, (45 - g) / 35 + 0.2) : 0;
    }
    if (this.mode === 'race' && this.state === 'run') {
      const rank = 1 + this.rivals.filter(a => a.d > this.dist).length;
      if (this.lastRank && rank !== this.lastRank) { if (rank < this.lastRank) { this.banner(rank === 1 ? 'LİDERSİN! 🏆' : `${rank}. SIRAYA YÜKSELDİN!`); sfx.power(); } else { const who = this.rivals.find(a => a.d > this.dist && a.d - this.dist < 15); this.popText(`${who ? who.name : 'Rakip'} seni geçti!`); } }
      this.lastRank = rank;
    }
    if (!this.finalBanner && this.state === 'run' && this.level.length - this.dist < 300) { this.finalBanner = true; this.banner('SON 300 METRE! 🏁'); }
    this.setT('hud-score', this.score); this.setT('hud-combo', this.combo > 1 ? `x${this.combo}` : '');
    const sb = $('shock-btn'); sb.style.setProperty('--fill', Math.min(1, this.shock) * 100 + '%'); sb.classList.toggle('ready', this.shock >= 1);
  }
  flash(color) { const f = $('flash'); f.style.background = color; f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
  banner(txt) { const el = $('banner'); el.textContent = txt; el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); }
  popText(txt) { const el = $('pop'); el.textContent = txt; el.classList.remove('go'); void el.offsetWidth; el.classList.add('go'); }

  // ---------- Güncelleme ----------
  update(dt) {
    dt = Math.min(dt, 0.05);
    this.time += dt;
    const st = this.stats;
    if (this.state === 'countdown') {
      this.cd -= dt; const n = Math.ceil(this.cd);
      if (n !== this.lastBeep && n >= 0) { this.lastBeep = n; if (n > 0) { $('countdown').textContent = n; sfx.beep(false); if (n === 3 && !this.autoGas) this.banner('Ekrana BASILI TUT = GAZ 👆'); } else { $('countdown').textContent = 'BAŞLA!'; sfx.beep(true); } }
      if (this.cd <= 0) { this.state = 'run'; setTimeout(() => { if ($('countdown').textContent === 'BAŞLA!') $('countdown').textContent = ''; }, 700); }
    }
    const running = this.state === 'run';
    if (running) this.runT = (this.runT || 0) + dt;
    // hız
    const prog = this.dist / this.level.length;
    let target = this.level.speed + (st.speed - 1) * 1.1 + prog * 5;
    this.baseSpeed = target;
    this.gas = this.autoGas || this.touching || this.nitroT > 0;
    if (!this.gas) target = Math.max(7, target * 0.3); // ekrana basılmıyorsa yavaşla
    if (this.nitroT > 0) target *= 1.5;
    if (this.boostT > 0) { this.boostT -= dt; target *= 1.3; }
    if (!running) target = this.state === 'finish' ? 8 : this.state === 'crashed' ? 0 : 0;
    const acc = this.speed < target ? (this.state === 'run' ? 0.9 + st.speed * 0.05 : 2) : (this.gas ? 2.5 : 1.1);
    this.speed += (target - this.speed) * Math.min(1, dt * acc);
    if (this.state === 'crashed') this.speed *= Math.pow(0.02, dt);
    this.dist += this.speed * dt;
    // yatay
    if (this.keyDir && this.state === 'run') this.tx = THREE.MathUtils.clamp(this.tx + this.keyDir * (8 + st.handling) * dt, -5.1, 5.1);
    const tx = this.steerMode === 'lane' ? ROAD.lanes[this.lane] : this.tx, k = 7 + st.handling * 0.9;
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
    this.updateAI(dt, running);
    if (running && this.shock < 1) { this.shock = Math.min(1, this.shock + dt / 25); if (this.shock >= 1) { this.popText('ŞOK DALGASI HAZIR! 💥'); sfx.power(); } }
    if (this.comboT > 0) { this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; }
    if (this.ringT > 0) { this.ringT -= dt; const k2 = 1 - this.ringT / 0.7; this.ring.scale.setScalar(2 + k2 * 45); this.ring.material.opacity = 0.8 * (1 - k2); this.ring.position.set(this.x, 0.4, -this.dist); if (this.ringT <= 0) this.ring.visible = false; }
    this.track.writeStars();
    if (running && this.dist >= this.level.length) this.finish();
    if (this.state === 'finish' || this.state === 'crashed') { this.endT += dt; if (this.endT > 2.2 && !this.ended) { this.ended = true; this.o.onEnd?.(this.result()); } }
    // araba görseli
    const c = this.car; c.position.set(this.x, this.y, -this.dist);
    this.roll = THREE.MathUtils.lerp(this.roll || 0, vx * 0.012, 0.2);
    const pitch = this.onRamp ? 0.18 : (this.y > 0.05 ? THREE.MathUtils.clamp(this.vy * 0.015, -0.12, 0.12) : Math.sin(this.time * 30) * 0.002 * this.speed / 30);
    let trickA = 0;
    if (this.trick) { this.trick.t += dt; const k3 = Math.min(1, this.trick.t / 0.6); trickA = this.trick.dir * k3 * Math.PI * 2; if (k3 >= 1) { this.trick.done = true; } }
    c.rotation.set(pitch, -vx * 0.035, this.roll - trickA);
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
    if (!this.autoGas) $('hud').classList.toggle('nogas', this.state === 'run' && !this.gas);
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
      if (this.y <= 0) { if (this.vy < -8) { sfx.land(); this.shake = 0.25; } this.y = 0; this.vy = 0; if (this.trick) { if (this.trick.done) { this.addScore(150, 'TAKLA! 🤸 +150'); this.shock = Math.min(1, this.shock + 0.25); this.nitro = Math.min(1, this.nitro + 0.2); } this.trick = null; } }
    }
  }

  collide() {
    const dist = this.dist, magnetR = this.magnetT > 0 ? 30 + this.stats.magnet * 2 : 0;
    for (const e of this.track.active) {
      if (!e.alive) continue;
      const dz = e.z - dist;
      if (e.kind === 'star' || e.kind === 'diamond' || e.kind === 'magnet' || e.kind === 'nitro' || e.kind === 'shield') {
        if (magnetR && (e.kind === 'star' || e.kind === 'diamond') && dz < magnetR && dz > -3) { (e.magnet ||= { x: 0, y: 0 }); e.magnet.x = this.x; e.magnet.y = this.y; e.z += (dist - e.z) * Math.min(1, 0.016 * 14); }
        const ey = e.obj ? e.obj.position.y : (e.y || 1);
        if (Math.abs(dz) < this.halfL + 0.6 && Math.abs((e.obj ? e.obj.position.x : e.x) - this.x) < this.halfW + 0.6 && Math.abs(ey - (this.y + 0.9)) < 1.6) this.collect(e);
        continue;
      }
      if (e.kind === 'boost') { if (!e.used && Math.abs(dz) < 4.5 && Math.abs(e.x - this.x) < 1.7 && this.y < 0.5) { e.used = true; this.boostT = 1.6; sfx.power(); this.popText('HIZ! ⚡'); this.shake = 0.15; } continue; }
      if (e.kind === 'crates') { if (Math.abs(dz) < e.hl + this.halfL * 0.85 && Math.abs(e.x - this.x) < e.hw + this.halfW * 0.8 && this.y < e.h) { this.knock(e, Math.sign(e.x - this.x) || 1); sfx.bump(); this.speed *= 0.96; this.shake = 0.2; this.addScore(25, 'KUTU! +25'); this.shock = Math.min(1, this.shock + 0.08); } continue; }
      if (e.kind === 'obst' || e.kind === 'traffic') {
        if (Math.abs(dz) < e.hl + this.halfL * 0.85 && Math.abs(e.x - this.x) < e.hw + this.halfW * 0.8 && this.y < e.h - 0.05) { this.hit(e, dz); continue; }
        // kıl payı: yanından çok yakın geçince
        if (e.kind === 'traffic' && !e.nm && dz < -(e.hl * 0.5)) { e.nm = true; if (Math.abs(e.x - this.x) < e.hw + this.halfW + 1.1 && this.y < e.h) this.nearMiss(); }
      }
    }
  }
  collect(e) {
    e.alive = false; e.collectT = 0.001;
    switch (e.kind) {
      case 'star': this.starsGot++; this.score += 10; this.nitro = Math.min(1, this.nitro + (this.nitroT > 0 ? 0 : 0.03)); this.shock = Math.min(1, this.shock + 0.03); sfx.star(); break;
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
    const sideways = Math.abs(dz) > (e.hl + this.halfL) * 0.45 && (this.steerMode === 'free' || this.prevLane !== this.lane);
    if (sideways && this.steerMode === 'free') { const sgn = Math.sign(this.x - e.x) || 1; this.x = e.x + sgn * (e.hw + this.halfW * 0.8 + 0.25); this.tx = THREE.MathUtils.clamp(this.x + sgn * 0.6, -5.1, 5.1); this.speed *= 0.88; sfx.bump(); this.shake = 0.3; this.flash('rgba(255,180,0,0.35)'); this.invT = 0.4; return; }
    if (sideways) { this.lane = this.prevLane; this.tx = ROAD.lanes[this.lane]; this.speed *= 0.85; sfx.bump(); this.shake = 0.3; this.flash('rgba(255,180,0,0.35)'); this.invT = 0.4; return; }
    this.crashes++; sfx.crash(); this.shake = 0.7; this.flash('rgba(255,40,40,0.55)'); this.knock(e, Math.sign(e.x - this.x) || 1);
    if (this.mp || this.mode === 'race') { this.speed *= 0.25; this.invT = 1.6; this.popText('ÇARPIŞMA! 💥'); this.combo = 0; return; } // yarışta ceza: yavaşlama ve sıra kaybı
    this.hearts--;
    if (this.hearts <= 0) { this.state = 'crashed'; this.endT = 0; this.vy = 6; this.y = Math.max(this.y, 0.01); engineStop(); sfx.lose(); this.popText('KAZA! 💥'); }
    else { this.speed *= 0.3; this.invT = 2; this.popText(`${this.hearts} can kaldı`); }
  }
  finish() {
    this.place = 1 + this.rivals.filter(a => a.d >= this.level.length).length;
    this.state = 'finish'; this.endT = 0; this.finishTime = this.runT || 0; sfx.win();
    this.popText(this.mode === 'race' ? (this.place === 1 ? 'BİRİNCİSİN! 🏆' : `${this.place}. oldun 🏁`) : this.mode === 'police' ? 'KAÇTIN! 🚓💨' : 'BİTİŞ! 🏁');
    if (this.mp) this.o.net.send({ t: 'finish', time: +this.finishTime.toFixed(2), stars: this.starsGot });
  }
  result() {
    const ratio = this.track.totalStars ? this.starsGot / this.track.totalStars : 1;
    const success = this.state === 'finish';
    let rating = !success ? 0 : (ratio >= 0.7 && this.crashes === 0) ? 3 : ratio >= 0.4 ? 2 : 1;
    if (success && this.mode === 'race') rating = this.place === 1 ? 3 : this.place === 2 ? 2 : 1;
    if (success && this.mode === 'police') rating = this.hearts >= this.maxHearts ? 3 : this.hearts >= 2 ? 2 : 1;
    const standings = this.mode === 'race' ? (() => { const list = [...this.rivals].sort((p, q) => q.d - p.d).map(a => ({ name: a.name })); const pl = success ? (this.place || list.length + 1) : list.length + 1; list.splice(pl - 1, 0, { name: 'Sen', me: true }); return list.map((x, i) => ({ place: i + 1, name: x.name, me: !!x.me })); })() : null;
    return { success, rating, mode: this.mode, place: this.place, standings, racers: this.rivals.length + 1, score: this.score, nearMisses: this.nearMisses, caught: this.caught, stars: this.starsGot, diamonds: this.diamondsGot, total: this.track.totalStars, crashes: this.crashes, time: this.finishTime || this.time, dist: this.dist };
  }

  // ---------- skor, kıl payı, takla, şok dalgası ----------
  addScore(n, txt) { this.score += n; if (txt) this.popText(txt); }
  nearMiss() {
    this.combo = this.comboT > 0 ? this.combo + 1 : 1; this.comboT = 3; this.nearMisses++;
    const pts = 50 * this.combo; this.addScore(pts, this.combo > 1 ? `KIL PAYI! x${this.combo} +${pts}` : `KIL PAYI! +${pts}`);
    this.nitro = Math.min(1, this.nitro + 0.12); this.shock = Math.min(1, this.shock + 0.25); sfx.nearMiss?.();
  }
  doTrick(dir) { if (this.trick || this.y < 0.6 || this.state !== 'run') return; this.trick = { dir, t: 0, done: false }; sfx.jump(); }
  useShock() {
    if (this.state !== 'run' || this.shock < 1) return;
    this.shock = 0; this.ringT = 0.7; this.ring.visible = true; this.shake = 0.5; this.flash('rgba(128,216,255,0.45)'); sfx.shock?.() || sfx.crash();
    let n = 0;
    for (const e of this.track.active) {
      if (!e.alive || !(e.kind === 'obst' || e.kind === 'traffic' || e.kind === 'crates')) continue;
      const dz = e.z - this.dist; if (dz > -8 && dz < 50) { this.knock(e, Math.sign(e.x - this.x) || 1); e.fly.vz = 8 + Math.random() * 6; e.fly.vy = 10 + Math.random() * 6; n++; }
    }
    for (const a of this.rivals) { const dz = a.d - this.dist; if (dz > -10 && dz < 40) { a.slowT = 1.8; a.spin = 1; } }
    for (const p of this.police) p.d = Math.min(p.d, this.dist - 70);
    this.addScore(20 * n, `ŞOK DALGASI! 💥 ${n ? '+' + 20 * n : ''}`);
  }

  // ---------- rakipler ve polis ----------
  makeRivals(list) {
    const names = ['Ali', 'Zeynep', 'Mert', 'Elif', 'Can', 'Defne', 'Emir', 'Ece'];
    list.slice(0, 4).forEach((r, i) => {
      const car = buildCar(r.model, r.color, { lite: true }); this.scene.add(car);
      const lane = [0, 2, 1, 0][i], d = [6, 6, 14, 22][i], nm = r.name || names[(this.level.n + i) % names.length];
      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabel(nm, ['#ffd54f', '#80d8ff', '#ff8a80', '#b9f6ca'][i]), depthTest: false, transparent: true })); label.scale.set(2.6, 0.65, 1); label.position.y = car.userData.height + 1.1; label.renderOrder = 10; car.add(label);
      const fl = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.3, 10), new THREE.MeshBasicMaterial({ color: 0x3d8bff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })); fl.rotation.x = Math.PI / 2; fl.position.set(0, 0.35, car.userData.halfL + 0.7); fl.visible = false; car.add(fl);
      this.rivals.push({ car, label, flame: fl, nitroT: 0, nitroCd: 6 + i * 3, name: nm, d, x: ROAD.lanes[lane], tx: ROAD.lanes[lane], speed: 0, skill: 0.9 + i * 0.025 + (this.level.n / 40) * 0.06, slowT: 0, think: 0, hw: car.userData.halfW, hl: car.userData.halfL, spin: 0, ov: 1 });
    });
  }
  makePolice() {
    for (let i = 0; i < 2; i++) {
      const car = buildCar('police-car', 'orig', { lite: true });
      const lb = new THREE.Group(); const red = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.14, 0.25), new THREE.MeshBasicMaterial({ color: 0xff1a1a })), blue = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.14, 0.25), new THREE.MeshBasicMaterial({ color: 0x2979ff }));
      red.position.x = -0.25; blue.position.x = 0.25; lb.add(red, blue); lb.position.y = car.userData.height + 0.08; car.add(lb);
      this.scene.add(car);
      const glowMat = (col) => new THREE.SpriteMaterial({ map: glowTex(), color: col, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
      const gr = new THREE.Sprite(glowMat(0xff2020)), gb = new THREE.Sprite(glowMat(0x3070ff)); gr.scale.setScalar(3.2); gb.scale.setScalar(3.2); gr.position.set(-0.3, car.userData.height + 0.2, 0); gb.position.set(0.3, car.userData.height + 0.2, 0); car.add(gr, gb);
      this.police.push({ car, red, blue, gr, gb, d: -32 - i * 16, x: ROAD.lanes[i ? 2 : 0], tx: 0, speed: 0, hw: car.userData.halfW, hl: car.userData.halfL });
    }
    sfx.sirenStart?.();
  }
  laneBlocked(x, d0, d1) {
    for (const e of this.track.active) {
      if (!e.alive || !(e.kind === 'obst' || e.kind === 'traffic' || e.kind === 'crates')) continue;
      if (e.z > d0 && e.z < d1 && Math.abs(e.x - x) < (e.hw || 1.3) + 1.1) return true;
    }
    return false;
  }
  updateAI(dt, running) {
    const prog = Math.min(1, this.dist / this.level.length);
    const base = this.level.speed + prog * 5 + 1.5; // rakipler bölüm hızına göre (yükseltmeler oyuncuya avantaj sağlar)
    for (const a of this.rivals) {
      const lead = a.d - this.dist;
      let ts = base * a.skill * (lead > 30 ? 0.86 : lead > 12 ? 0.95 : lead < -30 ? 1.14 : lead < -10 ? 1.05 : 1);
      if (a.slowT > 0) { a.slowT -= dt; ts *= 0.45; }
      // rakipler de nitro kullanır
      if (running) { a.nitroCd -= dt; if (a.nitroCd <= 0 && a.nitroT <= 0 && lead < 40) { a.nitroT = 2; a.nitroCd = 9 + Math.random() * 8; } }
      if (a.nitroT > 0) { a.nitroT -= dt; ts *= 1.35; } a.flame.visible = a.nitroT > 0; if (a.flame.visible) a.flame.scale.y = 0.8 + Math.random() * 0.5;
      if (a.d >= this.level.length) ts = 8;
      if (running || this.state === 'finish') a.speed += (ts - a.speed) * Math.min(1, dt * 0.9); else a.speed = 0;
      a.d += a.speed * dt;
      // engelden kaçınma
      if ((a.think -= dt) <= 0) {
        a.think = 0.2;
        if (this.laneBlocked(a.tx, a.d + 3, a.d + 32)) { const opts = ROAD.lanes.filter(l => !this.laneBlocked(l, a.d + 3, a.d + 32)).sort((p, q) => Math.abs(p - a.x) - Math.abs(q - a.x)); if (opts.length) a.tx = opts[0]; }
      }
      a.x += (a.tx - a.x) * (1 - Math.exp(-4 * dt));
      // engelle çarpışırsa onu savurur ve yavaşlar
      for (const e of this.track.active) {
        if (!e.alive || !(e.kind === 'obst' || e.kind === 'traffic' || e.kind === 'crates')) continue;
        if (Math.abs(e.z - a.d) < (e.hl || 0.6) + a.hl && Math.abs(e.x - a.x) < (e.hw || 1.3) + a.hw * 0.8) { this.knock(e, Math.sign(e.x - a.x) || 1); a.slowT = 1; }
      }
      // oyuncuyla temas: itişme (can kaybı yok)
      const dz = a.d - this.dist, dx = a.x - this.x;
      if (running && Math.abs(dz) < (a.hl + this.halfL) * 0.9 && Math.abs(dx) < a.hw + this.halfW && this.y < 1) {
        const s2 = Math.sign(dx) || 1; a.x += s2 * 0.6; a.tx = THREE.MathUtils.clamp(a.tx + s2 * 1.5, -3.4, 3.4); this.x -= s2 * 0.3; this.tx -= s2 * 0.3;
        if (dz > 0) this.speed *= 0.93; else a.slowT = Math.max(a.slowT, 0.4);
        if (!a.bumpT || this.time - a.bumpT > 0.6) { a.bumpT = this.time; sfx.bump(); this.shake = 0.2; }
      }
      // sollama (geçme) bonusu
      const ov = Math.sign(dz) || 1;
      if (running && a.ov > 0 && ov < 0) { if (Math.abs(dx) < a.hw + this.halfW + 1.1) this.nearMiss(); else this.addScore(30, `${a.name} geçildi! +30`); }
      a.ov = ov;
      const c = a.car; c.visible = dz > -60 && dz < 320; c.position.set(a.x, 0, -a.d); a.label.visible = dz > -60 && dz < 140;
      if (a.spin > 0) { a.spin = Math.max(0, a.spin - dt); c.rotation.y = (1 - a.spin) * Math.PI * 2; } else c.rotation.y = -(a.tx - a.x) * 0.05;
    }
    // polis
    for (const p of this.police) {
      const gap = this.dist - p.d, ps = this.baseSpeed || base;
      let ts = ps * (gap > 110 ? 1.2 : gap > 60 ? 1.04 : gap > 25 ? 0.98 : 0.95); // hata yapmazsan yetişemez
      // arada bir polis sirenle yandaki şeritten geçip önüne çıkar, sonra geri düşer
      if (running && !p.pass && (p.passCd = (p.passCd ?? 9 + this.police.indexOf(p) * 7) - dt) <= 0 && gap < 70) { p.pass = { t: 0, lane: Math.abs(this.x) > 1.7 ? 0 : (Math.random() < 0.5 ? -3.4 : 3.4) }; this.popText('🚓 POLİS GEÇİYOR!'); }
      if (p.pass) {
        p.pass.t += dt; const v0 = this.speed || ps;
        if (!p.pass.ph) p.pass.ph = 'over';
        if (p.pass.ph === 'over') { ts = v0 * 1.6 + 6; if (gap < -22 || p.pass.t > 9) { p.pass.ph = 'ahead'; p.pass.t = 0; } }      // hızla öne geç
        else if (p.pass.ph === 'ahead') { ts = v0; if (p.pass.t > 3) { p.pass.ph = 'back'; p.pass.t = 0; } }                       // birkaç saniye önünde kal
        else { ts = v0 * 0.6; if (gap > 30) { p.pass = null; p.passCd = 12 + Math.random() * 8; } }                                 // yavaşlayıp geri düş
        p.speed = ts; // geçiş sırasında hız doğrudan ayarlanır
      }
      else if (running) p.speed += (ts - p.speed) * Math.min(1, dt * 1.2); else if (this.state !== 'countdown') p.speed *= Math.pow(0.3, dt); else p.speed = 0;
      p.d += p.speed * dt; p.tx = p.pass ? p.pass.lane : this.x; p.x += (p.tx - p.x) * (1 - Math.exp(-2.2 * dt));
      for (const e of this.track.active) { if (e.alive && (e.kind === 'obst' || e.kind === 'traffic' || e.kind === 'crates') && Math.abs(e.z - p.d) < (e.hl || 0.6) + p.hl && Math.abs(e.x - p.x) < (e.hw || 1.3) + p.hw * 0.8) this.knock(e, Math.sign(e.x - p.x) || 1); }
      if (p.pass && Math.abs(gap) < this.halfL + p.hl && Math.abs(p.x - this.x) < this.halfW + p.hw) { const sg = Math.sign(p.x - this.x) || 1; p.x += sg * 0.3; this.x -= sg * 0.2; this.tx -= sg * 0.2; }
      else if (running && !p.pass && gap < this.halfL + p.hl && Math.abs(p.x - this.x) < 2.4) {
        p.d -= 45; this.crashes++; this.shake = 0.6; this.flash('rgba(41,121,255,0.5)'); sfx.crash();
        this.hearts--; this.popText(this.hearts > 0 ? `YAKALANDIN! ❤️-1` : 'YAKALANDIN! 🚓');
        if (this.hearts <= 0) { this.caught = true; this.state = 'crashed'; this.endT = 0; engineStop(); sfx.sirenStop?.(); sfx.lose(); }
      }
      const blink = Math.floor(this.time * 6) % 2 === 0; p.red.visible = p.gr.visible = blink; p.blue.visible = p.gb.visible = !blink;
      p.car.visible = gap > -320 && gap < 90; p.car.position.set(p.x, 0, -p.d);
    }
    if (this.police.length) { const chasers = this.police.filter(p => !p.pass), g = chasers.length ? Math.min(...chasers.map(p => this.dist - p.d)) : 99; this.policeGap = g; this.policeAhead = this.police.some(p => p.pass && this.dist - p.d < 0); const near = Math.min(...this.police.map(p => Math.abs(this.dist - p.d))); sfx.sirenSet?.(Math.max(0, 1 - near / 90)); }
  }

  updateCamera(dt) {
    const cam = this.camera, portrait = this.engine.aspect < 1;
    const boost = this.nitroT > 0 ? 1 : 0;
    const back = portrait ? 8.8 : 7.6, up = portrait ? 4.4 : 3.5;
    const fov = (portrait ? 74 : 60) + boost * 12 + Math.min(8, this.speed * 0.15);
    cam.fov += (fov - cam.fov) * Math.min(1, dt * 3); cam.aspect = this.engine.aspect; cam.updateProjectionMatrix();
    const tp = _tp.set(this.x * 0.75, up + this.y * 0.6, -this.dist + back - boost * 1.2);
    if (this.state === 'countdown') { tp.x += Math.sin(this.cd) * Math.max(0, this.cd - 0.5); tp.y += Math.max(0, this.cd - 0.5) * 0.6; }
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
    for (let i = 0; i < this.windP.length; i++) {
      const p = this.windP[i];
      p.z += this.speed * dt * 1.2; if (p.z > 8) { p.x = (Math.random() - 0.5) * 16; p.y = 0.5 + Math.random() * 5; p.z = -60; p.l = 1 + Math.random() * 3; }
      const L = p.l * (1 + this.speed / 20), o = i * 6, x = this.x + p.x;
      a[o] = x; a[o + 1] = p.y; a[o + 2] = base + p.z; a[o + 3] = x; a[o + 4] = p.y; a[o + 5] = base + p.z - L;
    }
    this.windGeo.attributes.position.needsUpdate = true;
  }

  render(dt) {
    this.engine.render(this.scene, this.camera, dt);
    if (this.mirrorRT && this.state !== 'countdown') this.drawMirror();
  }
  drawMirror() {
    const R = this.engine.renderer, cv = R.domElement, W = cv.clientWidth, H = cv.clientHeight;
    if ((this.mirrorN++ % 3) === 0) {
      const mc = this.mirrorCam; mc.position.set(this.x, 1.7 + this.y, -this.dist + 0.3); mc.lookAt(this.x * 0.6, 1.1, -this.dist + 45);
      const au = R.shadowMap.autoUpdate; R.shadowMap.autoUpdate = false;
      R.setRenderTarget(this.mirrorRT); R.render(this.scene, mc); R.setRenderTarget(null);
      R.shadowMap.autoUpdate = au;
    }
    const fr = document.getElementById('mirror').getBoundingClientRect();
    if (!fr.width) return;
    const ac = R.autoClear; R.autoClear = false; R.setScissorTest(true);
    R.setViewport(fr.left + 4, H - fr.bottom + 4, fr.width - 8, fr.height - 8); R.setScissor(fr.left + 4, H - fr.bottom + 4, fr.width - 8, fr.height - 8);
    R.render(this.mirrorScene, this.mirrorOrtho);
    R.setScissorTest(false); R.setViewport(0, 0, W, H); R.autoClear = ac;
  }
  // Tüm model/malzeme türlerini yükleme ekranında bir kez çiz: gölgelendirici derlemesi yarış sırasında olmasın
  async warmup() {
    const R = this.engine.renderer;
    this.world.update(-this.dist, this.camera, 0); this.track.update(this.dist, 0, 0); this.track.writeStars(); this.updateCamera(0.016);
    const tmp = this.track.warmObjects();
    if (R.compileAsync) await R.compileAsync(this.scene, this.camera); else R.compile(this.scene, this.camera);
    this.engine.render(this.scene, this.camera);
    this.track.releaseWarm(tmp);
  }

  dispose() {
    this.engine.onSlow = null;
    this.engine.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.unbindInput(); engineStop(); sfx.sirenStop?.();
    for (const a of [...this.rivals, ...this.police]) this.scene.remove(a.car);
    this.track.dispose(); this.world.dispose();
    $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); $('countdown').textContent = ''; $('police-glow').className = 'police-glow'; $('police-glow').style.opacity = 0;
    this.mirrorRT?.dispose();
  }
}
