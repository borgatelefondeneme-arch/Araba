// Turbo Köy - yerel ağ sunucusu (statik dosyalar + çok oyunculu WebSocket)
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { WebSocketServer } = require('ws');

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC = path.join(__dirname, 'public');
const THREE_DIR = path.join(__dirname, 'node_modules', 'three');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon',
};

function send(res, file) {
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); res.end('Bulunamadı'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  let url = decodeURIComponent(req.url.split('?')[0]);
  if (url === '/') url = '/index.html';
  let base = PUBLIC, rel = url;
  if (url.startsWith('/vendor/three/')) { base = THREE_DIR; rel = url.slice('/vendor/three'.length); }
  else if (url.startsWith('/vendor/bvh/')) { base = path.join(__dirname, 'node_modules', 'three-mesh-bvh'); rel = url.slice('/vendor/bvh'.length); }
  const file = path.normalize(path.join(base, rel));
  if (!file.startsWith(base)) { res.writeHead(403); res.end(); return; }
  send(res, file);
});

// ---------- Çok oyunculu odalar ----------
const wss = new WebSocketServer({ server, path: '/ws' });
const rooms = new Map();
const clients = new Map();
let nextId = 1;

function code4() {
  const L = 'ABCDEFGHJKLMNPRSTUVYZ';
  let c;
  do { c = Array.from({ length: 4 }, () => L[Math.floor(Math.random() * L.length)]).join(''); } while (rooms.has(c));
  return c;
}
const out = (ws, m) => { if (ws.readyState === 1) ws.send(JSON.stringify(m)); };
const pub = (p) => ({ id: p.id, name: p.name, car: p.car, color: p.color });
function roomInfo(r) {
  return { t: 'room', code: r.code, hostId: r.hostId, level: r.level, state: r.state, players: [...r.players.values()].map(pub) };
}
function broadcast(r, m, exceptId) { for (const p of r.players.values()) if (p.id !== exceptId) out(p.ws, m); }
function roomList() {
  return { t: 'rooms', list: [...rooms.values()].filter(r => r.state === 'lobby').map(r => ({ code: r.code, host: r.players.get(r.hostId)?.name || '?', count: r.players.size, level: r.level })) };
}
function sendRoomListAll() { const m = roomList(); for (const c of clients.values()) if (!c.room) out(c.ws, m); }

function leave(c) {
  const r = c.room && rooms.get(c.room);
  c.room = null;
  if (!r) return;
  r.players.delete(c.id);
  if (r.players.size === 0) { rooms.delete(r.code); }
  else {
    if (r.hostId === c.id) r.hostId = r.players.keys().next().value;
    broadcast(r, { t: 'left', id: c.id });
    broadcast(r, roomInfo(r));
    checkRaceEnd(r);
  }
  sendRoomListAll();
}

function checkRaceEnd(r) {
  if (r.state !== 'race') return;
  const all = [...r.players.keys()].every(id => r.results.some(x => x.id === id));
  if (all) endRace(r);
}
function endRace(r) {
  if (r.state !== 'race') return;
  clearTimeout(r.timer);
  r.state = 'lobby';
  broadcast(r, { t: 'raceEnd', results: r.results });
  broadcast(r, roomInfo(r));
  sendRoomListAll();
}

wss.on('connection', (ws) => {
  const c = { id: nextId++, ws, name: 'Oyuncu', car: 'hatch', color: '#d32f2f', room: null };
  clients.set(c.id, c);
  out(ws, { t: 'welcome', id: c.id });
  out(ws, roomList());

  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    const r = c.room && rooms.get(c.room);
    switch (m.t) {
      case 'profile':
        c.name = String(m.name || 'Oyuncu').slice(0, 16); c.car = String(m.car || 'hatch').slice(0, 20); c.color = String(m.color || '#d32f2f').slice(0, 9);
        if (r) broadcast(r, roomInfo(r));
        break;
      case 'listRooms': out(ws, roomList()); break;
      case 'create': {
        leave(c);
        const room = { code: code4(), hostId: c.id, players: new Map([[c.id, c]]), level: Number(m.level) || 1, state: 'lobby', results: [], seed: 0 };
        rooms.set(room.code, room); c.room = room.code;
        out(ws, roomInfo(room)); sendRoomListAll();
        break;
      }
      case 'join': {
        const room = rooms.get(String(m.code || '').toUpperCase());
        if (!room) { out(ws, { t: 'error', msg: 'Oda bulunamadı' }); break; }
        if (room.state !== 'lobby') { out(ws, { t: 'error', msg: 'Yarış sürüyor, biraz bekle' }); break; }
        if (room.players.size >= 6) { out(ws, { t: 'error', msg: 'Oda dolu' }); break; }
        leave(c); room.players.set(c.id, c); c.room = room.code;
        broadcast(room, roomInfo(room)); sendRoomListAll();
        break;
      }
      case 'leave': leave(c); out(ws, roomList()); break;
      case 'setLevel': if (r && r.hostId === c.id && r.state === 'lobby') { r.level = Math.max(1, Number(m.level) || 1); broadcast(r, roomInfo(r)); } break;
      case 'start':
        if (r && r.hostId === c.id && r.state === 'lobby') {
          r.state = 'race'; r.results = []; r.seed = Math.floor(Math.random() * 1e9);
          broadcast(r, { t: 'start', level: r.level, seed: r.seed, countdown: 6000, players: [...r.players.values()].map(pub) });
          r.timer = setTimeout(() => endRace(r), 6 * 60 * 1000);
          sendRoomListAll();
        }
        break;
      case 'state': if (r && r.state === 'race') broadcast(r, { t: 'state', id: c.id, d: m.d, x: m.x, y: m.y, s: m.s }, c.id); break;
      case 'finish':
        if (r && r.state === 'race' && !r.results.some(x => x.id === c.id)) {
          r.results.push({ id: c.id, name: c.name, time: Number(m.time) || 0, stars: Number(m.stars) || 0, place: r.results.length + 1 });
          broadcast(r, { t: 'finish', results: r.results });
          if (r.results.length === 1) { clearTimeout(r.timer); r.timer = setTimeout(() => endRace(r), 45000); }
          checkRaceEnd(r);
        }
        break;
    }
  });
  ws.on('close', () => { leave(c); clients.delete(c.id); });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('\n  🏁 Turbo Köy çalışıyor!\n');
  console.log(`  Bu bilgisayarda:   http://localhost:${PORT}`);
  for (const list of Object.values(os.networkInterfaces())) {
    for (const a of list || []) if (a.family === 'IPv4' && !a.internal) console.log(`  Telefon / tablet:  http://${a.address}:${PORT}`);
  }
  console.log('\n  Tüm cihazlar aynı Wi-Fi ağına bağlı olmalı.\n');
});
