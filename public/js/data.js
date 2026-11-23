// Oyun verileri: arabalar, yükseltmeler, bölgeler ve bölümler
export const CARS = [
  { id: 'hatch', name: 'Köy Kaşifi', type: 'hatch', price: { stars: 0 }, base: { speed: 1, handling: 2, nitro: 1, magnet: 1, armor: 1 }, colors: ['#d32f2f', '#1e88e5', '#fdd835', '#43a047', '#f5f5f5'] },
  { id: 'sport', name: 'Şimşek GT', type: 'sport', price: { stars: 600 }, base: { speed: 3, handling: 3, nitro: 2, magnet: 1, armor: 1 }, colors: ['#ff6d00', '#c62828', '#212121', '#00b0ff', '#ffd600'] },
  { id: 'suv', name: 'Dağ Kurdu', type: 'suv', price: { stars: 1400 }, base: { speed: 2, handling: 1, nitro: 2, magnet: 2, armor: 3 }, colors: ['#37474f', '#2e7d32', '#6d4c41', '#eceff1', '#1565c0'] },
  { id: 'pickup', name: 'Tarla Pikabı', type: 'pickup', price: { stars: 2200 }, base: { speed: 2, handling: 2, nitro: 1, magnet: 3, armor: 3 }, colors: ['#b71c1c', '#455a64', '#f9a825', '#1b5e20', '#fafafa'] },
  { id: 'muscle', name: 'Kas Kral', type: 'muscle', price: { diamonds: 40 }, base: { speed: 4, handling: 2, nitro: 3, magnet: 1, armor: 2 }, colors: ['#1a237e', '#000000', '#b71c1c', '#ff8f00', '#4a148c'] },
  { id: 'race', name: 'Roket F', type: 'race', price: { diamonds: 90 }, base: { speed: 5, handling: 5, nitro: 4, magnet: 2, armor: 1 }, colors: ['#e53935', '#00e5ff', '#76ff03', '#ffffff', '#ff4081'] },
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
export const LEVELS_PER_REGION = 4;
export const LEVELS = [];
REGIONS.forEach((r, ri) => {
  for (let i = 0; i < LEVELS_PER_REGION; i++) {
    const n = ri * LEVELS_PER_REGION + i + 1;
    LEVELS.push({
      n, region: r.id, theme: r.theme, regionName: r.name,
      length: 900 + n * 110,
      speed: 24 + n * 0.55,           // başlangıç hızı (m/sn)
      density: 0.45 + n * 0.025,      // engel yoğunluğu
      traffic: Math.min(0.55, 0.15 + n * 0.02),
      reward: 60 + n * 15,
      seed: 1000 + n * 7919,
    });
  }
});
