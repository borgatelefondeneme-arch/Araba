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
