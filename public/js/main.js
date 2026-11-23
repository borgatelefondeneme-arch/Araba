// Uygulama: menüler, garaj, harita, yarış akışı ve çok oyunculu lobi
import { Engine } from './engine.js';
import { Showroom } from './showroom.js';
import { Race } from './race.js';
import { renderMap } from './map.js';
import { Net } from './net.js';
import { CARS, UPGRADES, MAX_UPG, upgradeCost, carStats, LEVELS } from './data.js';
import { save, persist, resetSave } from './save.js';
import { initAudio, setSound, sfx } from './audio.js';

const $ = (id) => document.getElementById(id);
const engine = new Engine($('gl'), save.quality);
const showroom = new Showroom(engine);
const net = new Net();
let screen = 'home', race = null, paused = false, currentLevel = null, raceMode = null, mpRoom = null, mpResults = [], garageIdx = 0;
setSound(save.sound);

// ---------- yardımcılar ----------
function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('on'), 2200); }
function wallet() { $('w-stars').textContent = save.stars; $('w-dias').textContent = save.diamonds; }
const carById = (id) => CARS.find(c => c.id === id) || CARS[0];
const carColor = (c) => save.colors[c.id] || c.colors[0];
const stars = (n) => [1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}">★</i>`).join('');
const costHtml = (p) => [p.stars ? `★ ${p.stars}` : '', p.diamonds ? `◆ ${p.diamonds}` : ''].filter(Boolean).join(' + ');
const canPay = (p) => save.stars >= (p.stars || 0) && save.diamonds >= (p.diamonds || 0);
function pay(p) { save.stars -= p.stars || 0; save.diamonds -= p.diamonds || 0; persist(); wallet(); }

function show(name) {
  screen = name;
  for (const s of ['home', 'map', 'garage', 'mp', 'settings']) $(s).classList.toggle('hidden', s !== name);
  $('wallet').classList.toggle('hidden', name === 'race');
  if (name === 'home' || name === 'mp' || name === 'settings') { showroom.offsetX = 0; showroom.offsetY = 0; const c = carById(save.car); showroom.setCar(c.type, carColor(c)); }
  if (name === 'map') renderMap($('map-wrap'), save, openLevelCard);
  if (name === 'garage') { garageIdx = CARS.findIndex(c => c.id === save.car); renderGarage(); }
  if (name === 'mp') enterMp();
  if (name === 'settings') { $('s-name').value = save.name; $('s-quality').value = save.quality; $('s-sound').checked = save.sound; }
  wallet();
}
document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { initAudio(); sfx.click(); show(b.dataset.go); }));

// ---------- Garaj ----------
function renderGarage() {
  const car = CARS[garageIdx], owned = !!save.owned[car.id], color = carColor(car);
  showroom.setCar(car.type, color);
  const wide = engine.aspect > 1 && innerWidth >= 700;
  showroom.offsetX = wide ? 200 : 0; showroom.offsetY = wide ? 0 : Math.round(innerHeight * 0.2);
  $('g-name').textContent = car.name;
  $('g-lock').textContent = owned ? (save.car === car.id ? 'Kullanılıyor' : 'Senin') : 'Kilitli';
  $('g-colors').innerHTML = '';
  car.colors.forEach(col => {
    const s = document.createElement('div'); s.className = 'swatch' + (col === color ? ' on' : ''); s.style.background = col;
    s.onclick = () => { save.colors[car.id] = col; persist(); sfx.click(); renderGarage(); };
    $('g-colors').appendChild(s);
  });
  const act = $('g-action'); act.innerHTML = '';
  const b = document.createElement('button'); b.className = 'btn big';
  if (owned) {
    if (save.car === car.id) { b.textContent = '✓ Seçili'; b.disabled = true; }
    else { b.textContent = 'Bu arabayı seç'; b.classList.add('primary'); b.onclick = () => { save.car = car.id; persist(); sfx.buy(); renderGarage(); }; }
  } else {
    b.innerHTML = `Satın al: ${costHtml(car.price)}`; b.classList.add('primary'); b.disabled = !canPay(car.price);
    b.onclick = () => { if (!canPay(car.price)) return; pay(car.price); save.owned[car.id] = true; save.car = car.id; persist(); sfx.buy(); toast(`${car.name} senin! 🎉`); renderGarage(); };
  }
  act.appendChild(b);
  const up = $('g-upgrades'); up.innerHTML = '';
  const u = save.upgrades[car.id] || {};
  for (const g of UPGRADES) {
    const lv = u[g.id] || 0, base = car.base[g.id];
    const row = document.createElement('div'); row.className = 'upg';
    const pips = Array.from({ length: 5 + MAX_UPG }, (_, i) => `<i class="${i < base ? 'b' : i < base + lv ? 'u' : ''}"></i>`).join('');
    row.innerHTML = `<div class="ico">${g.icon}</div><div><div class="nm">${g.name}</div><div class="ds">${g.desc}</div><div class="pips">${pips}</div></div>`;
    const btn = document.createElement('button'); btn.className = 'btn';
    if (!owned) { btn.textContent = '🔒'; btn.disabled = true; }
    else if (lv >= MAX_UPG) { btn.textContent = 'MAKS'; btn.disabled = true; }
    else {
      const cost = upgradeCost(lv); btn.innerHTML = costHtml(cost); btn.disabled = !canPay(cost); if (!btn.disabled) btn.classList.add('primary');
      btn.onclick = () => { if (!canPay(cost)) return; pay(cost); (save.upgrades[car.id] ||= {})[g.id] = lv + 1; persist(); sfx.buy(); toast(`${g.name} yükseltildi!`); renderGarage(); };
    }
    row.appendChild(btn); up.appendChild(row);
  }
  wallet();
}
$('g-prev').onclick = () => { garageIdx = (garageIdx + CARS.length - 1) % CARS.length; sfx.click(); renderGarage(); };
$('g-next').onclick = () => { garageIdx = (garageIdx + 1) % CARS.length; sfx.click(); renderGarage(); };

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
function startRace(level, o) {
  initAudio(); tryFullscreen();
  if (race) { race.dispose(); race = null; }
  for (const id of ['result', 'pause', 'level-card']) $(id).classList.add('hidden');
  $('loading').classList.remove('hidden');
  for (const s of ['home', 'map', 'garage', 'mp', 'settings']) $(s).classList.add('hidden');
  $('wallet').classList.add('hidden'); screen = 'race'; raceMode = o; currentLevel = level; paused = false;
  setTimeout(() => {
    const car = carById(save.car);
    race = new Race(engine, {
      level, carDef: car, color: carColor(car), stats: carStats(car, save.upgrades[car.id]),
      seed: o.mp ? o.seed : level.seed, mp: o.mp, net, players: o.players, myId: net.id, countdown: o.mp ? o.countdown / 1000 : 3.2,
      onEnd: (r) => raceEnded(r), onPause: () => togglePause(true),
    });
    $('loading').classList.add('hidden');
  }, 60);
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
$('p-resume').onclick = () => togglePause(false);
$('p-retry').onclick = () => startRace(currentLevel, { mp: false });
$('p-map').onclick = () => exitRace('map');
document.addEventListener('visibilitychange', () => { if (document.hidden && race && !raceMode.mp && race.state === 'run') togglePause(true); });

// ---------- Birlikte oyna ----------
function enterMp() {
  $('mp-name').value = save.name;
  net.connect();
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
net.on('close', () => { $('mp-status').classList.remove('on'); if (screen === 'mp') toast('Sunucu bağlantısı yok. Bilgisayarda "npm start" çalışıyor mu?'); });
net.on('rooms', (m) => renderRooms(m.list));
net.on('room', (m) => { mpRoom = m; if (screen === 'mp') renderMpRoom(); });
net.on('error', (m) => toast(m.msg));
net.on('start', (m) => { mpResults = []; startRace(LEVELS[m.level - 1], { mp: true, seed: m.seed, players: m.players, countdown: m.countdown }); });
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
$('s-quality').onchange = () => { save.quality = $('s-quality').value; persist(); if (confirm('Kalite değişti. Sayfa yenilensin mi?')) location.reload(); };
$('s-sound').onchange = () => { save.sound = $('s-sound').checked; persist(); setSound(save.sound); };
$('s-full').onclick = () => document.documentElement.requestFullscreen?.().catch(() => toast('Bu cihaz tam ekranı desteklemiyor'));
$('s-reset').onclick = () => { if (confirm('Tüm ilerleme silinsin mi?')) { resetSave(); show('home'); toast('Sıfırlandı'); } };
addEventListener('resize', () => { if (screen === 'garage') renderGarage(); });

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
