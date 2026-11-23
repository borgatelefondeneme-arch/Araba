// Uygulama: menüler, garaj, harita, yarış akışı ve çok oyunculu lobi
import { Engine } from './engine.js';
import { Showroom } from './showroom.js';
import { Race } from './race.js';
import { renderMap } from './map.js';
import { Net } from './net.js';
import { CARS, UPGRADES, MAX_UPG, upgradeCost, carStats, LEVELS, PAINTS, FINISHES, RIMS, SPOILERS, NEONS, DECALS, TINTS, defaultCustom } from './data.js';
import { FOCUS } from './mods.js';
import { save, persist, resetSave } from './save.js';
import { initAudio, setSound, sfx } from './audio.js';
import { preloadModels } from './cars.js';
import { trafficSet } from './track.js';

const $ = (id) => document.getElementById(id);
const engine = new Engine($('gl'), save.quality);
const showroom = new Showroom(engine);
showroom.onLoading = (on) => $('car-loading').classList.toggle('hidden', !on);
const net = new Net();
let screen = 'home', race = null, paused = false, currentLevel = null, raceMode = null, mpRoom = null, mpResults = [], garageIdx = 0;
setSound(save.sound);

// ---------- yardımcılar ----------
function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2200); }
function wallet() { $('w-stars').textContent = save.stars; $('w-dias').textContent = save.diamonds; }
const carById = (id) => CARS.find(c => c.id === id) || CARS[0];
const customOf = (c) => ({ ...defaultCustom(c), ...(save.custom[c.id] || {}) });
const carColor = (c) => customOf(c).paint;
const upgOf = (c) => save.upgrades[c.id] || {};
// arabanın ekranda büyük görüneceği bölge
function zoneFor(name) {
  const W = innerWidth, H = innerHeight, land = W > H;
  if (name === 'garage') { const r = $('car-zone').getBoundingClientRect(); if (r.width > 50 && r.height > 50) return { x: r.left, y: r.top, w: r.width, h: r.height }; return { x: 0, y: H * 0.15, w: W, h: H * 0.4 }; }
  if (name === 'home') return land ? { x: 0, y: H * 0.25, w: W * 0.55, h: H * 0.7 } : { x: 0, y: H * 0.22, w: W, h: H * 0.34 };
  return { x: 0, y: H * 0.2, w: W, h: H * 0.6 };
}
const stars = (n) => [1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}">★</i>`).join('');
const costHtml = (p) => [p.stars ? `★ ${p.stars}` : '', p.diamonds ? `◆ ${p.diamonds}` : ''].filter(Boolean).join(' + ');
const canPay = (p) => save.stars >= (p.stars || 0) && save.diamonds >= (p.diamonds || 0);
function pay(p) { save.stars -= p.stars || 0; save.diamonds -= p.diamonds || 0; persist(); wallet(); }

function show(name) {
  screen = name;
  for (const s of ['home', 'map', 'garage', 'mp', 'settings']) $(s).classList.toggle('hidden', s !== name);
  $('wallet').classList.toggle('hidden', name === 'race');
  document.body.classList.toggle('menu-bg', name !== 'race' && name !== 'map');
  showroom.active = name === 'garage' || name === 'home';
  if (name === 'home' || name === 'mp' || name === 'settings') { showroom.zone = zoneFor(name); const c = carById(save.car); showroom.setCar(c.type, customOf(c), upgOf(c)); showroom.resetView(); }
  if (name === 'map') renderMap($('map-wrap'), save, openLevelCard);
  if (name === 'garage') { garageIdx = CARS.findIndex(c => c.id === save.car); preview = {}; gtab = 'up'; renderGarage(); requestAnimationFrame(() => { showroom.zone = zoneFor('garage'); }); }
  if (name === 'mp') enterMp();
  if (name === 'settings') { $('s-name').value = save.name; $('s-quality').value = save.quality; $('s-sound').checked = save.sound; }
  wallet();
}
document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { initAudio(); sfx.click(); show(b.dataset.go); }));

// ---------- Garaj ----------
let gtab = 'up', preview = {};
const TABS = [['up', '⚡ Yükselt'], ['paint', '🎨 Boya'], ['finish', '✨ Kaplama'], ['rim', '🛞 Jant'], ['spoiler', '🪽 Kanat'], ['neon', '💡 Neon'], ['decal', '🏷️ Çıkartma'], ['tint', '🕶️ Cam']];
const ITEMS = { finish: FINISHES, rim: RIMS, spoiler: SPOILERS, neon: NEONS, decal: DECALS, tint: TINTS };
const itemOwned = (field, it) => !it.price || !!save.items[field + ':' + it.id];
let lastCarKey = '';
function garageCar(highlight) {
  const car = CARS[garageIdx], view = { ...customOf(car), ...preview };
  showroom.setCar(car.type, view, upgOf(car), highlight);
}
function renderGarage(highlight) {
  const car = CARS[garageIdx], owned = !!save.owned[car.id], cust = customOf(car), view = { ...cust, ...preview };
  garageCar(highlight);
  $('g-name').textContent = car.name;
  $('g-lock').textContent = owned ? (save.car === car.id ? '✓ Kullanılıyor' : 'Senin') : '🔒 Kilitli – önce satın al';
  // satın al / seç
  const act = $('g-action'); act.innerHTML = '';
  const b = document.createElement('button'); b.className = 'btn big';
  if (owned) {
    if (save.car === car.id) { b.textContent = '✓ Bu arabayla yarışıyorsun'; b.disabled = true; }
    else { b.textContent = 'Bu arabayı seç'; b.classList.add('primary'); b.onclick = () => { save.car = car.id; persist(); sfx.buy(); renderGarage(); }; }
  } else {
    b.innerHTML = `Satın al: ${costHtml(car.price)}`; b.classList.add('primary'); b.disabled = !canPay(car.price);
    b.onclick = () => { if (!canPay(car.price)) return; pay(car.price); save.owned[car.id] = true; save.car = car.id; persist(); sfx.buy(); toast(`${car.name} senin! 🎉`); renderGarage(); };
  }
  act.appendChild(b);
  // sekmeler
  const tabs = $('g-tabs'); tabs.innerHTML = '';
  for (const [id, label] of TABS) { const t = document.createElement('button'); t.className = 'tab' + (gtab === id ? ' on' : ''); t.textContent = label; t.onclick = () => { gtab = id; preview = {}; sfx.click(); showroom.focus(FOCUS[id === 'up' ? 'paint' : id]); renderGarage(); }; tabs.appendChild(t); }
  const body = $('g-body'); body.innerHTML = '';
  const fixed = car.colors.length === 1 && car.colors[0] === 'orig';
  if (gtab === 'up') {
    const box = document.createElement('div'); box.className = 'upgrades'; body.appendChild(box);
    const u = upgOf(car);
    for (const g of UPGRADES) {
      const lv = u[g.id] || 0, base = car.base[g.id];
      const row = document.createElement('div'); row.className = 'upg';
      const pips = Array.from({ length: 5 + MAX_UPG }, (_, i) => `<i class="${i < base ? 'b' : i < base + lv ? 'u' : ''}"></i>`).join('');
      row.innerHTML = `<div class="ico">${g.icon}</div><div><div class="nm">${g.name} <span class="muted small">Sv ${lv}/${MAX_UPG}</span></div><div class="ds">${g.desc}</div><div class="pips">${pips}</div></div>`;
      row.onclick = () => showroom.focus(FOCUS[g.id]);
      const btn = document.createElement('button'); btn.className = 'btn';
      if (!owned) { btn.textContent = '🔒'; btn.disabled = true; }
      else if (lv >= MAX_UPG) { btn.textContent = 'MAKS'; btn.disabled = true; }
      else {
        const cost = upgradeCost(lv); btn.innerHTML = costHtml(cost); btn.disabled = !canPay(cost); if (!btn.disabled) btn.classList.add('primary');
        btn.onclick = (e) => { e.stopPropagation(); if (!canPay(cost)) return; pay(cost); (save.upgrades[car.id] ||= {})[g.id] = lv + 1; persist(); sfx.buy(); toast(`${g.name} seviye ${lv + 1}! Arabaya bak 👀`); showroom.focus(FOCUS[g.id]); renderGarage(g.id); };
      }
      row.appendChild(btn); box.appendChild(row);
    }
  } else if (gtab === 'paint') {
    if (fixed) body.innerHTML = '<p class="note">Bu aracın boyası özeldir 🚓🚒 – Kaplama, Jant, Neon ve diğerlerini deneyebilirsin!</p>';
    else {
      const sw = document.createElement('div'); sw.className = 'swatches'; body.appendChild(sw);
      for (const col of [...PAINTS.map(p => p.id), 'orig']) {
        const d = document.createElement('div'); d.className = 'swatch' + (view.paint === col ? ' on' : ''); d.title = col === 'orig' ? 'Orijinal' : PAINTS.find(p => p.id === col).name;
        d.style.background = col === 'orig' ? 'conic-gradient(#ff8a80, #ffd180, #b9f6ca, #80d8ff, #ea80fc, #ff8a80)' : col;
        d.onclick = () => { sfx.click(); showroom.focus(FOCUS.paint); if (owned) { (save.custom[car.id] ||= {}).paint = col; persist(); preview = {}; } else preview = { paint: col }; renderGarage(); };
        sw.appendChild(d);
      }
    }
  } else {
    const list = ITEMS[gtab], grid = document.createElement('div'); grid.className = 'items'; body.appendChild(grid);
    if (gtab === 'finish' && fixed) { body.insertAdjacentHTML('afterbegin', '<p class="note small">Bu araçta kaplama sadece özel boyaya uygulanır.</p>'); }
    for (const it of list) {
      const has = itemOwned(gtab, it), on = view[gtab] === it.id;
      const el = document.createElement('button'); el.className = 'item' + (on ? ' on' : '');
      let pv = '';
      if (gtab === 'rim') pv = `<span class="pv" style="background:${it.id === 'orig' ? 'radial-gradient(#ddd,#777)' : `radial-gradient(circle at 35% 30%, #fff8, ${it.id})`}">🛞</span>`;
      else if (gtab === 'neon') pv = `<span class="pv" style="background:${it.id === 'none' ? '#333' : it.id === 'rainbow' ? 'conic-gradient(red,orange,yellow,lime,cyan,blue,magenta,red)' : it.id};box-shadow:0 0 14px ${it.id === 'none' ? 'transparent' : it.id === 'rainbow' ? '#f0f' : it.id}">💡</span>`;
      else if (gtab === 'finish') pv = `<span class="pv" style="background:${{ gloss: 'radial-gradient(circle at 30% 25%,#fff,#d32f2f 45%)', metal: 'radial-gradient(circle at 30% 25%,#fff,#9e9e9e 40%,#424242)', matte: '#7a2424', pearl: 'linear-gradient(135deg,#fff,#f8bbd0,#b3e5fc,#fff)', candy: 'radial-gradient(circle at 30% 25%,#ffcdd2,#c2185b 50%,#4a0020)', chrome: 'linear-gradient(135deg,#fff,#888 40%,#fff 55%,#555)' }[it.id]}"></span>`;
      else if (gtab === 'tint') pv = `<span class="pv" style="background:rgba(10,15,25,${{ none: 0.15, light: 0.45, dark: 0.75, black: 0.95 }[it.id]});border:2px solid #9ab">🕶️</span>`;
      else pv = `<span class="pv" style="background:rgba(255,255,255,.12)">${it.icon || '•'}</span>`;
      el.innerHTML = `${pv}<span>${it.name}</span><span class="pr ${it.price ? '' : 'free'}">${has ? (it.price ? 'Senin' : 'Ücretsiz') : '★ ' + it.price}</span>${has ? '' : '<span class="lk">🔒</span>'}`;
      el.onclick = () => {
        sfx.click(); showroom.focus(FOCUS[gtab]);
        if (has && owned) { (save.custom[car.id] ||= {})[gtab] = it.id; persist(); preview = {}; renderGarage(gtab); }
        else { preview = { [gtab]: it.id }; renderGarage(gtab); showTry(car, gtab, it, owned); }
      };
      grid.appendChild(el);
    }
  }
  if (!preview || !Object.keys(preview).length) $('g-try').classList.add('hidden');
  wallet();
}
function showTry(car, field, it, owned) {
  const t = $('g-try'); t.classList.remove('hidden'); t.innerHTML = '';
  const cancel = document.createElement('button'); cancel.className = 'btn'; cancel.textContent = 'Vazgeç';
  cancel.onclick = () => { preview = {}; renderGarage(); };
  const buy = document.createElement('button'); buy.className = 'btn primary';
  const has = itemOwned(field, it);
  if (!owned) { buy.textContent = 'Önce arabayı satın al'; buy.disabled = true; }
  else if (has) { buy.textContent = 'Uygula'; }
  else { buy.textContent = `Satın al ★ ${it.price}`; buy.disabled = save.stars < it.price; }
  buy.onclick = () => {
    if (!has) { if (save.stars < it.price) return; pay({ stars: it.price }); save.items[field + ':' + it.id] = true; }
    (save.custom[car.id] ||= {})[field] = it.id; persist(); preview = {}; sfx.buy(); toast(`${it.name} takıldı! ✨`); renderGarage(field);
  };
  t.append(cancel, buy);
}
$('g-prev').onclick = () => { garageIdx = (garageIdx + CARS.length - 1) % CARS.length; preview = {}; sfx.click(); showroom.resetView(); renderGarage(); };
$('g-next').onclick = () => { garageIdx = (garageIdx + 1) % CARS.length; preview = {}; sfx.click(); showroom.resetView(); renderGarage(); };
let hintT = 0; addEventListener('pointerdown', () => { if (screen === 'garage' && ++hintT > 2) $('drag-hint').classList.add('off'); });

// ---------- Harita / bölüm kartı ----------
function openLevelCard(l) {
  initAudio(); sfx.click(); currentLevel = l;
  $('lc-title').textContent = `Bölüm ${l.n}`; $('lc-region').textContent = l.regionName;
  $('lc-stars').innerHTML = stars(save.levels[l.n] || 0);
  $('lc-len').textContent = `${(l.length / 1000).toFixed(1)} km`;
  $('lc-reward').textContent = `★ ${l.reward} + topladıkların`;
  $('level-card').classList.remove('hidden');
}
$('lc-close').onclick = () => $('level-card').classList.add('hidden');
$('lc-go').onclick = () => { $('level-card').classList.add('hidden'); startRace(currentLevel, { mp: false }); };

// ---------- Yarış ----------
function tryFullscreen() { if (matchMedia('(pointer: coarse)').matches && !document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {}); }
async function startRace(level, o) {
  initAudio(); tryFullscreen();
  if (race) { race.dispose(); race = null; }
  for (const id of ['result', 'pause', 'level-card']) $(id).classList.add('hidden');
  $('loading').classList.remove('hidden');
  for (const s of ['home', 'map', 'garage', 'mp', 'settings']) $(s).classList.add('hidden');
  $('wallet').classList.add('hidden'); document.body.classList.remove('menu-bg');
  screen = 'race'; raceMode = o; currentLevel = level; paused = false;
  const car = carById(save.car);
  const players = (o.players || []).map(p => ({ ...p, model: carById(p.car).type }));
  try { await preloadModels([car.type, ...trafficSet(level), ...players.map(p => p.model)]); }
  catch (e) { console.warn(e); toast('Araç modelleri yüklenemedi'); }
  if (screen !== 'race' || raceMode !== o) return;
  race = new Race(engine, {
    level, carDef: car, color: carColor(car), custom: customOf(car), upg: upgOf(car), stats: carStats(car, save.upgrades[car.id]),
    seed: o.mp ? o.seed : level.seed, mp: o.mp, net, players, myId: net.id, countdown: o.mp ? Math.max(1.5, o.countdown / 1000 - (performance.now() - o.t0) / 1000) : 3.2,
    onEnd: (r) => raceEnded(r), onPause: () => togglePause(true),
  });
  $('loading').classList.add('hidden');
}
function raceEnded(r) {
  if (raceMode.mp) { showMpResults(r); return; }
  const l = currentLevel, firstTime = r.success && !save.levels[l.n];
  let bonusStars = 0, bonusDia = 0;
  if (r.success) { bonusStars = l.reward; if (r.rating === 3 && (save.levels[l.n] || 0) < 3) bonusDia = 3; if (firstTime) bonusDia += 1; }
  save.stars += r.stars + bonusStars; save.diamonds += r.diamonds + bonusDia;
  if (r.success) { save.levels[l.n] = Math.max(save.levels[l.n] || 0, r.rating); save.unlocked = Math.max(save.unlocked, Math.min(LEVELS.length, l.n + 1)); }
  persist();
  $('r-title').textContent = r.success ? (r.rating === 3 ? 'Muhteşem! 🏆' : 'Bölüm Tamam! 🏁') : 'Kaza Yaptın! 💥';
  $('r-rating').innerHTML = stars(r.rating);
  $('r-body').innerHTML = `<div class="reward"><span>★ +${r.stars + bonusStars}</span><span>◆ +${r.diamonds + bonusDia}</span></div>
    <p class="muted">Toplanan yıldız: ${r.stars} / ${r.total}${r.success ? ` · Süre: ${r.time.toFixed(1)} sn` : ` · Yol: %${Math.round(r.dist / l.length * 100)}`}</p>
    ${r.success && r.rating < 3 ? '<p class="hint">3 yıldız için yıldızların %70\'ini topla ve hiç çarpma!</p>' : ''}`;
  const btns = $('r-buttons'); btns.innerHTML = '';
  const B = (t, cls, f) => { const b = document.createElement('button'); b.className = 'btn ' + cls; b.textContent = t; b.onclick = () => { sfx.click(); f(); }; btns.appendChild(b); };
  B('Harita', '', () => exitRace('map'));
  B('Tekrar', '', () => startRace(l, { mp: false }));
  if (r.success && l.n < LEVELS.length) B('Sonraki ▶', 'primary', () => startRace(LEVELS[l.n], { mp: false }));
  $('result').classList.remove('hidden');
}
function exitRace(to) {
  if (race) { race.dispose(); race = null; }
  for (const id of ['result', 'pause']) $(id).classList.add('hidden');
  show(to);
}
function togglePause(on) {
  if (!race || raceMode.mp) return;
  paused = on; $('pause').classList.toggle('hidden', !on);
}
$('hud-pause').onclick = () => togglePause(true);
$('horn-btn').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); sfx.horn(); });
$('p-resume').onclick = () => togglePause(false);
$('p-retry').onclick = () => startRace(currentLevel, { mp: false });
$('p-map').onclick = () => exitRace('map');
document.addEventListener('visibilitychange', () => { if (document.hidden && race && !raceMode.mp && race.state === 'run') togglePause(true); });

// ---------- Birlikte oyna ----------
function enterMp() {
  $('mp-name').value = save.name;
  net.connect();
  $('mp-hint').textContent = net.mode === 'peer' ? 'Bir cihaz "Oda Kur"a bassın. Diğeri ekranda çıkan 4 harfli kodu yazıp "Katıl"a bassın. İnternet bağlantısı yeterli, aynı Wi-Fi gerekmez.' : net.mode === 'room' ? 'İki cihazda da bu sayfayı aynı Claude hesabıyla aç. Biri oda kursun, diğeri listeden katılsın.' : 'Tüm cihazlar aynı Wi-Fi\'de olmalı. Bir cihaz oda kurar, diğeri listeden katılır.';
  net.send({ t: 'profile', name: save.name, car: save.car, color: carColor(carById(save.car)) });
  net.send({ t: 'listRooms' });
  renderMpRoom();
}
function renderRooms(list) {
  const box = $('mp-rooms'); box.innerHTML = '';
  if (!list.length) { box.innerHTML = '<p class="muted">Henüz açık oda yok. Bir oda kur!</p>'; return; }
  for (const r of list) {
    const d = document.createElement('div'); d.className = 'room';
    d.innerHTML = `<div><b>${escapeHtml(r.host)}</b> <span class="muted">· ${r.count} kişi · Bölüm ${r.level}</span></div>`;
    const b = document.createElement('button'); b.className = 'btn primary'; b.textContent = 'Katıl'; b.onclick = () => joinRoom(r.code);
    d.appendChild(b); box.appendChild(d);
  }
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function profileFromInput() {
  const n = $('mp-name').value.trim(); if (n) { save.name = n; persist(); }
  net.send({ t: 'profile', name: save.name, car: save.car, color: carColor(carById(save.car)) });
}
function joinRoom(code) { initAudio(); sfx.click(); profileFromInput(); net.send({ t: 'join', code }); }
$('mp-create').onclick = () => { initAudio(); sfx.click(); profileFromInput(); net.send({ t: 'create', level: Math.min(save.unlocked, LEVELS.length) }); };
$('mp-join').onclick = () => { const c = $('mp-code').value.trim().toUpperCase(); if (c.length === 4) joinRoom(c); else toast('4 harfli oda kodunu yaz'); };
$('mp-leave').onclick = () => { net.send({ t: 'leave' }); mpRoom = null; renderMpRoom(); };
$('mp-back').onclick = () => { if (mpRoom) net.send({ t: 'leave' }); mpRoom = null; show('home'); };
$('mp-start').onclick = () => { initAudio(); net.send({ t: 'start' }); };
$('mp-level').onchange = () => net.send({ t: 'setLevel', level: +$('mp-level').value });
function renderMpRoom() {
  $('mp-lobby-list').classList.toggle('hidden', !!mpRoom); $('mp-room').classList.toggle('hidden', !mpRoom);
  if (!mpRoom) return;
  const host = mpRoom.hostId === net.id;
  $('mp-rcode').textContent = mpRoom.code;
  $('mp-players').innerHTML = mpRoom.players.map(p => `<div class="player"><span class="c" style="background:${escapeHtml(p.color)}"></span>${escapeHtml(p.name)} <span class="muted">· ${escapeHtml(carById(p.car).name)}</span>${p.id === mpRoom.hostId ? ' 👑' : ''}${p.id === net.id ? ' <span class="muted">(sen)</span>' : ''}</div>`).join('');
  const sel = $('mp-level');
  const maxL = host ? Math.max(save.unlocked, mpRoom.level) : mpRoom.level;
  sel.innerHTML = LEVELS.filter(l => l.n <= maxL).map(l => `<option value="${l.n}">Bölüm ${l.n} – ${l.regionName}</option>`).join('');
  sel.value = mpRoom.level; sel.disabled = !host;
  $('mp-start').classList.toggle('hidden', !host);
  $('mp-wait').textContent = host ? (mpRoom.players.length < 2 ? 'Diğer oyuncunun katılmasını bekle (tek başına da başlatabilirsin).' : 'Hazır olunca başlat!') : 'Oda sahibinin başlatması bekleniyor…';
}
net.on('open', () => $('mp-status').classList.add('on'));
net.on('close', () => { $('mp-status').classList.remove('on'); if (screen === 'mp' && net.mode === 'ws') toast('Sunucu bağlantısı yok. Bilgisayarda "npm start" çalışıyor mu?'); });
net.on('rooms', (m) => renderRooms(m.list));
net.on('room', (m) => { mpRoom = m; if (screen === 'mp') renderMpRoom(); });
net.on('rooms', (m) => { if (net.mode === 'peer' && !m.list.length) $('mp-rooms').innerHTML = '<p class="muted">Arkadaşının oda kodunu aşağıya yaz 👇</p>'; });
net.on('error', (m) => toast(m.msg));
net.on('start', (m) => { mpResults = []; startRace(LEVELS[m.level - 1], { mp: true, seed: m.seed, players: m.players, countdown: m.countdown, t0: performance.now() }); });
net.on('state', (m) => race?.remoteState(m));
net.on('left', (m) => race?.removeRemote(m.id));
net.on('finish', (m) => { mpResults = m.results; if (race?.ended || race?.state === 'finish') renderMpResults(false); for (const r of m.results) { const rr = race?.remotes.get(r.id); if (rr) rr.finished = true; } });
net.on('raceEnd', (m) => { mpResults = m.results; if (race) { if (!race.ended) { race.ended = true; showMpResults(race.result(), true); } else renderMpResults(true); } });
let mpMine = null;
function showMpResults(r, forced) {
  mpMine = r;
  save.stars += r.stars; save.diamonds += r.diamonds; persist();
  renderMpResults(!!forced);
}
function renderMpResults(final) {
  const me = mpResults.find(x => x.id === net.id);
  const won = me && me.place === 1;
  if (final && won && !renderMpResults.paid) { save.diamonds += 3; persist(); renderMpResults.paid = true; }
  $('r-title').textContent = me ? (me.place === 1 ? '1. oldun! 🏆' : `${me.place}. oldun 🏁`) : 'Yarış bitti';
  $('r-rating').innerHTML = '';
  const list = mpResults.map(x => `<li class="${x.id === net.id ? 'me' : ''}"><span>${x.place}. ${escapeHtml(x.name)}</span><span>${x.time.toFixed(1)} sn · ★${x.stars}</span></li>`).join('');
  $('r-body').innerHTML = `<ul class="results">${list || ''}</ul>${final ? '' : '<p class="muted">Diğer oyuncular bekleniyor…</p>'}
    ${mpMine ? `<div class="reward"><span>★ +${mpMine.stars}</span><span>◆ +${mpMine.diamonds + (won && final ? 3 : 0)}</span></div>` : ''}`;
  const btns = $('r-buttons'); btns.innerHTML = '';
  if (final) { const b = document.createElement('button'); b.className = 'btn primary'; b.textContent = 'Lobiye Dön'; b.onclick = () => { renderMpResults.paid = false; mpMine = null; exitRace('mp'); }; btns.appendChild(b); }
  $('result').classList.remove('hidden');
}

// ---------- Ayarlar ----------
$('s-name').onchange = () => { save.name = $('s-name').value.trim() || 'Oyuncu'; persist(); };
$('s-quality').onchange = () => { save.quality = $('s-quality').value; persist(); toast('Kalite, oyunu yeniden açınca uygulanır'); };
$('s-sound').onchange = () => { save.sound = $('s-sound').checked; persist(); setSound(save.sound); };
$('s-full').onclick = () => document.documentElement.requestFullscreen?.().catch(() => toast('Bu cihaz tam ekranı desteklemiyor'));
let resetArm = 0;
$('s-reset').onclick = () => {
  if (Date.now() - resetArm > 3000) { resetArm = Date.now(); $('s-reset').textContent = 'Emin misin? Silmek için tekrar bas'; setTimeout(() => { $('s-reset').textContent = 'İlerlemeyi sıfırla'; }, 3000); return; }
  resetArm = 0; resetSave(); show('home'); toast('Sıfırlandı');
};
addEventListener('resize', () => { if (screen === 'garage' || screen === 'home') setTimeout(() => { showroom.zone = zoneFor(screen); }, 50); });

// ---------- Ana döngü ----------
let last = performance.now();
function loop(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (race) { if (!paused) race.update(dt); race.render(dt); }
  else if (screen !== 'map') { showroom.update(dt); showroom.render(dt); }
  requestAnimationFrame(loop);
}
show('home');
$('loading').classList.add('hidden');
requestAnimationFrame(loop);
window.__game = { get race() { return race; }, save, startRace, LEVELS, show };
