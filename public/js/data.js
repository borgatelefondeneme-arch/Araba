// Oyun verileri: arabalar, yükseltmeler, bölgeler ve bölümler
// type = models/ klasöründeki glTF modeli. 'orig' = modelin kendi boyası
export const CARS = [
  { id: 'hatch', name: 'Köy Kaşifi', type: 'hatchback', price: { stars: 0 }, base: { speed: 1, handling: 2, nitro: 1, magnet: 1, armor: 1 }, colors: ['#d32f2f', '#1e88e5', '#fdd835', '#f5f5f5', 'orig'] },
  { id: 'sport', name: 'Şimşek GT', type: '1990s-sports-car', price: { stars: 600 }, base: { speed: 3, handling: 3, nitro: 2, magnet: 1, armor: 1 }, colors: ['#ff6d00', '#c62828', '#212121', '#ffd600', 'orig'] },
  { id: 'offroad', name: 'Dağ Kurdu', type: '1990s-off-roader', price: { stars: 1400 }, base: { speed: 2, handling: 1, nitro: 2, magnet: 2, armor: 3 }, colors: ['#2e7d32', '#37474f', '#c62828', '#eceff1', 'orig'] },
  { id: 'pickup', name: 'Tarla Pikabı', type: '1990s-pickup-truck', price: { stars: 2200 }, base: { speed: 2, handling: 2, nitro: 1, magnet: 3, armor: 3 }, colors: ['#b71c1c', '#455a64', '#f9a825', '#1b5e20', 'orig'] },
  { id: 'police', name: 'Polis Arabası', type: 'police-car', price: { stars: 3200 }, base: { speed: 3, handling: 3, nitro: 3, magnet: 2, armor: 2 }, colors: ['orig'] },
  { id: 'muscle', name: 'Kas Kral', type: 'muscle-car', price: { diamonds: 40 }, base: { speed: 4, handling: 2, nitro: 3, magnet: 1, armor: 2 }, colors: ['#1a237e', '#212121', '#b71c1c', '#4a148c', 'orig'] },
  { id: 'rally', name: 'Ralli Roket', type: 'rally-car', price: { diamonds: 60 }, base: { speed: 4, handling: 5, nitro: 3, magnet: 2, armor: 1 }, colors: ['#e53935', '#76ff03', '#ffffff', '#ff4081', 'orig'] },
  { id: 'monster', name: 'Canavar Kamyon', type: 'monster-truck', price: { diamonds: 80 }, base: { speed: 3, handling: 2, nitro: 3, magnet: 3, armor: 5 }, colors: ['#43a047', '#e53935', '#ff9800', '#212121', 'orig'] },
  { id: 'fire', name: 'İtfaiye', type: 'fire-truck', price: { diamonds: 100 }, base: { speed: 3, handling: 2, nitro: 4, magnet: 4, armor: 5 }, colors: ['orig'] },
  { id: 'conceptgt', name: 'Konsept X GT', type: 'concept', price: { diamonds: 200 }, base: { speed: 5, handling: 5, nitro: 5, magnet: 2, armor: 2 }, colors: ['#ff6d00', '#121212', '#fafafa', '#ffd600', '#304ffe'],
    kit: { finish: 'metal', spoiler: 'big', decal: 'stripes', rim: '#1a1a1a', tint: 'dark' }, look: { speed: 4, handling: 5, nitro: 5 } },
  { id: 'conceptrally', name: 'Konsept X Ralli', type: 'concept', price: { diamonds: 170 }, base: { speed: 4, handling: 5, nitro: 4, magnet: 3, armor: 5 }, colors: ['#1e88e5', '#fafafa', '#43a047', '#d32f2f', '#ff9100'],
    kit: { finish: 'gloss', spoiler: 'gt', decal: 'number', rim: '#e0e0e0' }, look: { armor: 5, speed: 2, nitro: 2 } },
  { id: 'concept', name: 'Konsept X (Ultra)', type: 'concept', price: { diamonds: 150 }, base: { speed: 5, handling: 5, nitro: 5, magnet: 3, armor: 3 }, colors: ['#a80000', '#e8e8ec', '#2b2d33', '#0d47a1', '#ff6d00'] },
];

export const UPGRADES = [
  { id: 'speed', name: 'Motor', icon: '⚡', desc: 'Daha yüksek azami hız' },
  { id: 'handling', name: 'Yol Tutuş', icon: '🛞', desc: 'Şeritler arası daha hızlı geçiş' },
  { id: 'nitro', name: 'Nitro', icon: '🔥', desc: 'Daha uzun ve güçlü nitro' },
  { id: 'magnet', name: 'Mıknatıs', icon: '🧲', desc: 'Mıknatıs süresi ve menzili' },
  { id: 'armor', name: 'Zırh', icon: '🛡️', desc: 'Ekstra can (kalp)' },
];
export const MAX_UPG = 6;
export function upgradeCost(level) {
  // level: mevcut seviye (0..MAX_UPG-1)
  const stars = Math.round(120 * Math.pow(level + 1, 1.7) / 10) * 10;
  const diamonds = level >= 4 ? (level - 2) * 4 : 0;
  return { stars, diamonds };
}
export function carStats(car, upg) {
  const s = {};
  for (const u of UPGRADES) s[u.id] = car.base[u.id] + (upg?.[u.id] || 0);
  return s; // 1..11 aralığı
}

export const REGIONS = [
  { id: 'village', name: 'Yeşil Köy', theme: 'village', color: '#7cb342' },
  { id: 'forest', name: 'Çam Ormanı', theme: 'forest', color: '#2e7d32' },
  { id: 'desert', name: 'Kızgın Çöl', theme: 'desert', color: '#e0a64b' },
  { id: 'snow', name: 'Karlı Dağ', theme: 'snow', color: '#cfe3f2' },
  { id: 'city', name: 'Gece Şehri', theme: 'city', color: '#3949ab' },
];
export const LEVELS_PER_REGION = 8; // 5 bölge × 8 = 40 bölüm
export const LEVELS = [];
REGIONS.forEach((r, ri) => {
  for (let i = 0; i < LEVELS_PER_REGION; i++) {
    const n = ri * LEVELS_PER_REGION + i + 1;
    LEVELS.push({
      n, region: r.id, theme: r.theme, regionName: r.name,
      length: 1000 + ri * 230 + i * 110,
      speed: 24 + n * 0.28,           // başlangıç hızı (m/sn)
      density: 0.45 + n * 0.0125,     // engel yoğunluğu
      traffic: Math.min(0.55, 0.15 + n * 0.01),
      reward: 60 + n * 8,
      seed: 1000 + n * 7919,
      mode: i === 2 || i === 6 ? 'police' : 'race', // her bölgenin 3. ve 7. bölümü polis kovalamacası
    });
  }
});

// ---------- Kişiselleştirme (garaj) ----------
export const PAINTS = [
  ['#d32f2f', 'Kırmızı'], ['#b71c1c', 'Bordo'], ['#ff1744', 'Ateş'], ['#ff6d00', 'Turuncu'], ['#ffab00', 'Kehribar'], ['#ffd600', 'Sarı'],
  ['#c6ff00', 'Limon'], ['#43a047', 'Yeşil'], ['#1b5e20', 'Orman'], ['#00bfa5', 'Turkuaz'], ['#00b8d4', 'Camgöbeği'], ['#40c4ff', 'Gök'],
  ['#1e88e5', 'Mavi'], ['#0d47a1', 'Lacivert'], ['#304ffe', 'Elektrik'], ['#7c4dff', 'Mor'], ['#4a148c', 'Patlıcan'], ['#f50057', 'Pembe'],
  ['#ff80ab', 'Şeker Pembe'], ['#8d6e63', 'Kahve'], ['#fafafa', 'Beyaz'], ['#b0bec5', 'Gümüş'], ['#546e7a', 'Antrasit'], ['#121212', 'Siyah'],
].map(([id, name]) => ({ id, name }));
export const FINISHES = [
  { id: 'gloss', name: 'Parlak', price: 0 }, { id: 'metal', name: 'Metalik', price: 0 }, { id: 'matte', name: 'Mat', price: 200 },
  { id: 'pearl', name: 'Sedef', price: 400 }, { id: 'candy', name: 'Şeker Cila', price: 600 }, { id: 'chrome', name: 'Krom', price: 900 },
];
export const RIMS = [
  { id: 'orig', name: 'Orijinal', price: 0 }, { id: '#e0e0e0', name: 'Gümüş', price: 100 }, { id: '#1a1a1a', name: 'Siyah', price: 120 },
  { id: '#d4af37', name: 'Altın', price: 300 }, { id: '#e53935', name: 'Kırmızı', price: 150 }, { id: '#1e88e5', name: 'Mavi', price: 150 },
  { id: '#76ff03', name: 'Neon Yeşil', price: 200 }, { id: '#ff4081', name: 'Pembe', price: 150 }, { id: '#ff9100', name: 'Turuncu', price: 150 },
];
export const SPOILERS = [
  { id: 'none', name: 'Yok', price: 0, icon: '—' }, { id: 'lip', name: 'Dudak', price: 100, icon: '▁' }, { id: 'duck', name: 'Ördek Kuyruk', price: 200, icon: '◢' },
  { id: 'gt', name: 'GT Kanat', price: 350, icon: '╤' }, { id: 'big', name: 'Dev Kanat', price: 600, icon: '╦' },
];
export const NEONS = [
  { id: 'none', name: 'Kapalı', price: 0 }, { id: '#00e5ff', name: 'Buz Mavisi', price: 250 }, { id: '#ff00e5', name: 'Pembe', price: 250 },
  { id: '#00ff6a', name: 'Yeşil', price: 250 }, { id: '#8a2bff', name: 'Mor', price: 250 }, { id: '#ff7a00', name: 'Turuncu', price: 250 },
  { id: '#ff1a1a', name: 'Kırmızı', price: 250 }, { id: 'rainbow', name: 'Gökkuşağı', price: 500 },
];
export const DECALS = [
  { id: 'none', name: 'Yok', price: 0, icon: '—' }, { id: 'stripes', name: 'Yarış Şeridi', price: 150, icon: '║' }, { id: 'flames', name: 'Alev', price: 300, icon: '🔥' },
  { id: 'number', name: 'Yarış No', price: 120, icon: '7' }, { id: 'stars', name: 'Yıldızlar', price: 200, icon: '⭐' }, { id: 'bolt', name: 'Şimşek', price: 250, icon: '⚡' },
];
export const TINTS = [
  { id: 'none', name: 'Şeffaf', price: 0 }, { id: 'light', name: 'Açık Film', price: 80 }, { id: 'dark', name: 'Koyu Film', price: 120 }, { id: 'black', name: 'Limuzin', price: 160 },
];
export function defaultCustom(car) { return { paint: car.colors[0], finish: 'gloss', rim: 'orig', spoiler: 'none', neon: 'none', decal: 'none', tint: 'none', ...(car.kit || {}) }; }
