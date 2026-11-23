// Çok oyunculu bağlantı. İki yol:
//  1) Yerel sunucu (npm start) -> WebSocket
//  2) claude.ai yayını -> "room" yeteneği (sunucu gerekmez)
// Her ikisi de main.js'e aynı mesajları verir: welcome, rooms, room, start, state, left, finish, raceEnd, error, open, close.

export class Net {
  constructor() { this.handlers = {}; this.impl = null; this.queue = []; }
  get id() { return this.impl?.id ?? null; }
  get mode() { return this.impl?.mode || null; }
  connect() {
    if (!this.impl) this.impl = window.TURBO_NET === 'peer' ? new PeerImpl(this) : (window.TURBO_NET === 'room' || (window.claude && typeof window.claude.use === 'function')) ? new RoomImpl(this) : window.TURBO_NET === 'none' ? new NoNet(this) : new WsImpl(this);
    this.impl.connect();
  }
  get connected() { return !!this.impl?.connected; }
  send(m) { if (this.impl) this.impl.send(m); else this.queue.push(m); }
  on(t, f) { (this.handlers[t] ||= []).push(f); }
  emit(t, m) { for (const f of this.handlers[t] || []) f(m); }
}

class NoNet {
  constructor(net) { this.net = net; this.mode = 'none'; this.id = null; this.connected = false; }
  connect() { this.net.emit('close'); this.net.emit('error', { msg: 'Birlikte oynamak için oyunu bilgisayardan (npm start) ya da claude.ai bağlantısından aç.' }); }
  send() {}
}
class WsImpl {
  constructor(net) { this.net = net; this.mode = 'ws'; this.ws = null; this.queue = []; this.id = null; }
  connect() {
    if (this.ws && this.ws.readyState <= 1) return;
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    this.ws = new WebSocket(`${proto}://${location.host}/ws`);
    this.ws.onopen = () => { for (const m of this.queue) this.ws.send(JSON.stringify(m)); this.queue = []; this.net.emit('open'); };
    this.ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data); } catch { return; } if (m.t === 'welcome') this.id = m.id; this.net.emit(m.t, m); };
    this.ws.onclose = () => this.net.emit('close');
    this.ws.onerror = () => this.net.emit('neterror');
  }
  get connected() { return this.ws && this.ws.readyState === 1; }
  send(m) { if (this.connected) this.ws.send(JSON.stringify(m)); else this.queue.push(m); }
}

// ---- claude.ai room ile sunucusuz çok oyunculu ----
const LETTERS = 'ABCDEFGHJKLMNPRSTUVYZ';
class RoomImpl {
  constructor(net) {
    this.net = net; this.mode = 'room'; this.lobby = null; this.game = null; this.id = null; this.connected = false;
    this.profile = { name: 'Oyuncu', car: 'hatch', color: 'orig' }; this.level = 1; this.code = null;
    this.epoch = 0; this.results = []; this.ended = 0; this.endTimer = null; this.pending = []; this.starting = false;
  }
  async connect() {
    if (this.starting) return; this.starting = true;
    const lobby = window.claude?.use ? await window.claude.use('room').catch(() => null) : null;
    if (!lobby) { this.net.emit('close'); this.net.emit('error', { msg: 'Birlikte oynama bu görünümde kullanılamıyor (giriş yapmış olmalısın).' }); this.starting = false; return; }
    this.lobby = lobby;
    lobby.onConnection((c) => { this.connected = c; this.net.emit(c ? 'open' : 'close'); }, () => { this.connected = false; this.net.emit('close'); });
    lobby.onPeers((ch) => { const me = ch.peers.find(p => p.sameTab); if (me && !this.id) { this.id = me.peer; this.net.emit('welcome', { id: this.id }); } this.pushRooms(); });
    for (const m of this.net.queue.splice(0)) this.send(m);
  }
  pushRooms() {
    if (!this.lobby) return;
    const list = this.lobby.peers().filter(p => !p.sameTab && p.presence?.game?.open).map(p => ({ code: String(p.presence.game.code), host: String(p.presence.game.host || '?'), count: Number(p.presence.game.count) || 1, level: Number(p.presence.game.level) || 1 }));
    this.net.emit('rooms', { t: 'rooms', list });
  }
  advertise(open) {
    if (!this.lobby) return;
    const peers = this.game ? this.game.peers().length : 1;
    this.lobby.presence({ game: open && this.code ? { code: this.code, host: this.profile.name, level: this.level, count: peers, open: true } : null }).catch(() => {});
  }
  players() {
    return (this.game?.peers() || []).filter(p => p.presence && p.presence.name).map(p => ({ id: p.peer, name: String(p.presence.name).slice(0, 16), car: String(p.presence.car || 'hatch'), color: String(p.presence.color || 'orig') }));
  }
  hostId() {
    const ps = this.game?.peers() || [];
    const h = ps.find(p => p.presence?.host === true);
    if (h) return h.peer;
    const sorted = ps.map(p => p.peer).sort(); return sorted[0] || null;
  }
  roomMsg() { return { t: 'room', code: this.code, hostId: this.hostId(), level: this.level, state: this.racing ? 'race' : 'lobby', players: this.players() }; }
  async joinGame(code, asHost) {
    if (!this.lobby) { this.net.queue.push({ t: asHost ? 'create' : 'join', code }); return; }
    await this.leaveGame();
    let g;
    try { g = await this.lobby.join('g-' + code.toLowerCase()); } catch { this.net.emit('error', { t: 'error', msg: 'Odaya bağlanılamadı' }); return; }
    this.game = g; this.code = code;
    await g.presence({ ...this.profile, host: !!asHost, level: this.level }).catch(() => {});
    g.onPeers((ch) => {
      // seviye: oda sahibinin seçtiği
      const h = ch.peers.find(p => p.peer === this.hostId());
      if (h && h.presence?.level) this.level = Number(h.presence.level) || this.level;
      if (this.hostId() === this.id && !ch.peers.find(p => p.sameTab)?.presence?.host) g.presence({ host: true }).catch(() => {});
      for (const p of ch.left) this.net.emit('left', { t: 'left', id: p.peer });
      for (const p of [...ch.updated, ...ch.joined]) {
        if (p.sameTab) continue;
        const s = p.presence?.st;
        if (this.racing && s && s.e === this.epoch) this.net.emit('state', { t: 'state', id: p.peer, d: +s.d || 0, x: +s.x || 0, y: +s.y || 0, s: +s.s || 0 });
      }
      this.checkResults();
      this.net.emit('room', this.roomMsg());
      if (this.hostId() === this.id) this.advertise(!this.racing);
    });
    g.on('start', (msg) => {
      if (msg.peer !== this.hostId()) return;
      const d = msg.data || {}; const ep = Number(d.epoch) || 0; if (ep <= this.epoch) return;
      this.epoch = ep; this.level = Number(d.level) || 1; this.results = []; this.ended = 0; this.racing = true; clearTimeout(this.endTimer);
      g.presence({ st: null, fin: null }).catch(() => {});
      this.net.emit('start', { t: 'start', level: this.level, seed: Number(d.seed) || 1, countdown: 6000, players: this.players() });
      if (this.hostId() === this.id) this.advertise(false);
    });
    if (!asHost) {
      setTimeout(() => { if (this.game === g && !g.peers().some(p => p.presence?.host === true && !p.sameTab)) { this.net.emit('error', { t: 'error', msg: 'Oda bulunamadı' }); this.leaveGame(); this.net.emit('rooms', { t: 'rooms', list: [] }); this.pushRooms(); } }, 2500);
    }
    this.net.emit('room', this.roomMsg());
  }
  async leaveGame() {
    if (this.game) { const g = this.game; this.game = null; this.code = null; this.racing = false; try { await g.leave(); } catch {} }
    this.advertise(false);
  }
  checkResults() {
    if (!this.racing || !this.game) return;
    const ps = this.game.peers();
    const res = ps.filter(p => p.presence?.fin && p.presence.fin.e === this.epoch).map(p => ({ id: p.peer, name: String(p.presence.name || '?').slice(0, 16), time: +p.presence.fin.time || 0, stars: +p.presence.fin.stars || 0 }))
      .sort((a, b) => a.time - b.time).map((r, i) => ({ ...r, place: i + 1 }));
    if (res.length !== this.results.length) {
      this.results = res; this.net.emit('finish', { t: 'finish', results: res });
      if (res.length === 1 && !this.endTimer) this.endTimer = setTimeout(() => this.endRace(), 45000);
    }
    if (res.length && res.length >= ps.length) this.endRace();
  }
  endRace() {
    if (!this.racing || this.ended === this.epoch) return;
    this.ended = this.epoch; this.racing = false; clearTimeout(this.endTimer); this.endTimer = null;
    this.net.emit('raceEnd', { t: 'raceEnd', results: this.results });
    this.net.emit('room', this.roomMsg());
    if (this.hostId() === this.id) this.advertise(true);
  }
  send(m) {
    if (!this.lobby) { this.net.queue.push(m); return; }
    const g = this.game;
    switch (m.t) {
      case 'profile':
        this.profile = { name: String(m.name || 'Oyuncu').slice(0, 16), car: String(m.car || 'hatch'), color: String(m.color || 'orig') };
        g?.presence(this.profile).catch(() => {}); break;
      case 'listRooms': this.pushRooms(); break;
      case 'create': {
        const code = Array.from({ length: 4 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join('');
        this.level = Number(m.level) || 1; this.joinGame(code, true).then(() => this.advertise(true)); break;
      }
      case 'join': this.joinGame(String(m.code || '').toUpperCase(), false); break;
      case 'leave': this.leaveGame(); break;
      case 'setLevel': if (g && this.hostId() === this.id) { this.level = Number(m.level) || 1; g.presence({ level: this.level }).catch(() => {}); this.advertise(true); this.net.emit('room', this.roomMsg()); } break;
      case 'start': if (g && this.hostId() === this.id) g.emit('start', { level: this.level, seed: Math.floor(Math.random() * 1e9), epoch: Date.now() }).catch(() => this.net.emit('error', { t: 'error', msg: 'Başlatılamadı' })); break;
      case 'state': if (g && this.racing) g.presence({ st: { e: this.epoch, d: m.d, x: m.x, y: m.y, s: m.s } }).catch(() => {}); break;
      case 'finish': if (g && this.racing) { g.presence({ fin: { e: this.epoch, time: m.time, stars: m.stars } }).catch(() => {}); setTimeout(() => this.checkResults(), 50); } break;
    }
  }
}

// ---- GitHub Pages: sunucusuz, tarayıcıdan tarayıcıya (WebRTC / PeerJS) ----
// Odayı kuran cihaz "sunucu" gibi davranır; diğerleri 4 harfli kodla doğrudan ona bağlanır.
const PEERJS = 'https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js';
const PREFIX = 'turbokoy-oda-';
function loadScript(src) { return new Promise((ok, no) => { if (window.Peer) return ok(); const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); }); }
class PeerImpl {
  constructor(net) { this.net = net; this.mode = 'peer'; this.id = null; this.connected = false; this.peer = null; this.conn = null; this.host = null; this.profile = { name: 'Oyuncu', car: 'hatch', color: 'orig' }; }
  async connect() {
    try { await loadScript(PEERJS); this.connected = true; this.net.emit('open'); this.net.emit('rooms', { t: 'rooms', list: [] }); }
    catch { this.net.emit('close'); this.net.emit('error', { t: 'error', msg: 'İnternet bağlantısı gerekli' }); }
  }
  makePeer(id) {
    return new Promise((ok, no) => {
      const p = new window.Peer(id, { debug: 0 });
      p.on('open', (pid) => ok(p)); p.on('error', (e) => no(e));
    });
  }
  async create(level) {
    this.close();
    const code = Array.from({ length: 4 }, () => LETTERS[Math.floor(Math.random() * LETTERS.length)]).join('');
    let p; try { p = await this.makePeer(PREFIX + code.toLowerCase()); } catch { return this.create(level); }
    this.peer = p; this.id = p.id; this.net.emit('welcome', { id: this.id });
    const me = { id: this.id, ...this.profile, conn: null };
    this.host = { code, hostId: this.id, level: Number(level) || 1, state: 'lobby', results: [], players: new Map([[this.id, me]]) };
    p.on('connection', (c) => {
      c.on('data', (m) => this.hostHandle(c.peer, m, c));
      c.on('close', () => this.hostLeave(c.peer));
      c.on('error', () => this.hostLeave(c.peer));
    });
    p.on('disconnected', () => { try { p.reconnect(); } catch {} });
    this.hostBroadcast(this.roomInfo());
  }
  async join(code) {
    this.close();
    let p; try { p = await this.makePeer(); } catch { this.net.emit('error', { t: 'error', msg: 'Bağlantı kurulamadı' }); return; }
    this.peer = p; this.id = p.id; this.net.emit('welcome', { id: this.id });
    const c = p.connect(PREFIX + code.toLowerCase(), { reliable: true });
    const to = setTimeout(() => { if (!c.open) { this.net.emit('error', { t: 'error', msg: 'Oda bulunamadı – kodu kontrol et' }); this.close(); } }, 8000);
    p.on('error', (e) => { if (String(e?.type) === 'peer-unavailable') { clearTimeout(to); this.net.emit('error', { t: 'error', msg: 'Oda bulunamadı – kodu kontrol et' }); this.close(); } });
    c.on('open', () => { clearTimeout(to); this.conn = c; c.send({ t: 'hello', ...this.profile }); });
    c.on('data', (m) => { if (m && typeof m.t === 'string') this.net.emit(m.t, m); });
    c.on('close', () => { if (this.conn === c) { this.conn = null; this.net.emit('error', { t: 'error', msg: 'Oda kapandı' }); this.net.emit('room', null); } });
  }
  close() { try { this.conn?.close(); } catch {} try { this.peer?.destroy(); } catch {} this.conn = null; this.peer = null; this.host = null; }
  // --- oda sahibi (sunucu rolü) ---
  roomInfo() { const r = this.host; return { t: 'room', code: r.code, hostId: r.hostId, level: r.level, state: r.state, players: [...r.players.values()].map(p => ({ id: p.id, name: p.name, car: p.car, color: p.color })) }; }
  hostBroadcast(m, exceptId) { const r = this.host; if (!r) return; for (const p of r.players.values()) { if (p.id === exceptId) continue; if (p.conn) { try { p.conn.send(m); } catch {} } else this.net.emit(m.t, m); } }
  hostLeave(id) { const r = this.host; if (!r || !r.players.has(id)) return; r.players.delete(id); this.hostBroadcast({ t: 'left', id }); this.hostBroadcast(this.roomInfo()); this.checkEnd(); }
  hostHandle(from, m, conn) {
    const r = this.host; if (!r || !m || typeof m.t !== 'string') return;
    const s = (v, n) => String(v ?? '').slice(0, n);
    switch (m.t) {
      case 'hello': case 'profile': {
        if (!r.players.has(from)) { if (r.state !== 'lobby') { conn?.send({ t: 'error', msg: 'Yarış sürüyor, biraz bekle' }); return; } if (r.players.size >= 6) { conn?.send({ t: 'error', msg: 'Oda dolu' }); return; } }
        const p = r.players.get(from) || { id: from, conn }; Object.assign(p, { name: s(m.name, 16) || 'Oyuncu', car: s(m.car, 20) || 'hatch', color: s(m.color, 9) || 'orig' });
        r.players.set(from, p); this.hostBroadcast(this.roomInfo()); break;
      }
      case 'setLevel': if (from === r.hostId && r.state === 'lobby') { r.level = Math.max(1, Number(m.level) || 1); this.hostBroadcast(this.roomInfo()); } break;
      case 'start': if (from === r.hostId && r.state === 'lobby') {
        r.state = 'race'; r.results = []; clearTimeout(r.timer);
        this.hostBroadcast({ t: 'start', level: r.level, seed: Math.floor(Math.random() * 1e9), countdown: 6000, players: this.roomInfo().players });
        r.timer = setTimeout(() => this.endRace(), 6 * 60 * 1000);
      } break;
      case 'state': if (r.state === 'race') this.hostBroadcast({ t: 'state', id: from, d: +m.d || 0, x: +m.x || 0, y: +m.y || 0, s: +m.s || 0 }, from); break;
      case 'finish': if (r.state === 'race' && !r.results.some(x => x.id === from)) {
        const p = r.players.get(from); r.results.push({ id: from, name: p?.name || '?', time: +m.time || 0, stars: +m.stars || 0, place: r.results.length + 1 });
        this.hostBroadcast({ t: 'finish', results: r.results });
        if (r.results.length === 1) { clearTimeout(r.timer); r.timer = setTimeout(() => this.endRace(), 45000); }
        this.checkEnd();
      } break;
    }
  }
  checkEnd() { const r = this.host; if (r && r.state === 'race' && [...r.players.keys()].every(id => r.results.some(x => x.id === id))) this.endRace(); }
  endRace() { const r = this.host; if (!r || r.state !== 'race') return; clearTimeout(r.timer); r.state = 'lobby'; this.hostBroadcast({ t: 'raceEnd', results: r.results }); this.hostBroadcast(this.roomInfo()); }
  send(m) {
    switch (m.t) {
      case 'profile': this.profile = { name: String(m.name || 'Oyuncu').slice(0, 16), car: String(m.car || 'hatch'), color: String(m.color || 'orig') }; if (this.host) this.hostHandle(this.id, m); else this.conn?.send(m); break;
      case 'listRooms': this.net.emit('rooms', { t: 'rooms', list: [] }); break;
      case 'create': this.create(m.level); break;
      case 'join': this.join(String(m.code || '').toUpperCase()); break;
      case 'leave': this.close(); break;
      default: if (this.host) this.hostHandle(this.id, m); else this.conn?.send(m);
    }
  }
}
