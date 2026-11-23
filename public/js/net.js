// Yerel ağ çok oyunculu bağlantı
export class Net {
  constructor() { this.handlers = {}; this.id = null; this.ws = null; this.queue = []; }
  connect() {
    if (this.ws && this.ws.readyState <= 1) return;
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    this.ws = new WebSocket(`${proto}://${location.host}/ws`);
    this.ws.onopen = () => { for (const m of this.queue) this.ws.send(JSON.stringify(m)); this.queue = []; this.emit('open'); };
    this.ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data); } catch { return; } if (m.t === 'welcome') this.id = m.id; this.emit(m.t, m); };
    this.ws.onclose = () => { this.emit('close'); };
    this.ws.onerror = () => this.emit('neterror');
  }
  get connected() { return this.ws && this.ws.readyState === 1; }
  send(m) { if (this.connected) this.ws.send(JSON.stringify(m)); else this.queue.push(m); }
  on(t, f) { (this.handlers[t] ||= []).push(f); }
  emit(t, m) { for (const f of this.handlers[t] || []) f(m); }
}
