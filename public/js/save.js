const KEY = 'turbo-koy-save-v1';
const DEF = () => ({
  name: 'Oyuncu', stars: 150, diamonds: 5, car: 'hatch',
  owned: { hatch: true }, colors: {}, upgrades: {}, levels: {}, unlocked: 1,
  quality: 'auto', sound: true, custom: {}, items: {},
});
let data;
try { data = Object.assign(DEF(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { data = DEF(); }
// eski sürüm araba kimliklerini taşı
for (const [o, n] of [['suv', 'offroad'], ['race', 'rally']]) {
  if (data.owned[o]) { data.owned[n] = true; delete data.owned[o]; }
  if (data.upgrades[o]) { data.upgrades[n] = data.upgrades[o]; delete data.upgrades[o]; }
  if (data.car === o) data.car = n;
  delete data.colors[o];
}
data.custom ||= {}; data.items ||= {};
// v4: bölge başına 4 -> 8 bölüm; eski bölüm numaralarını yenilerine taşı
if (!data.levelsV) {
  const old = data.levels || {}, nl = {}; const map = (n) => Math.floor((n - 1) / 4) * 8 + ((n - 1) % 4) + 1;
  for (const [n, st] of Object.entries(old)) nl[map(+n)] = st;
  data.levels = nl; data.unlocked = map(Math.max(1, data.unlocked || 1)); data.levelsV = 2;
}
for (const [id, col] of Object.entries(data.colors || {})) { (data.custom[id] ||= {}).paint ||= col; }
export const save = data;
export function persist() { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {} }
export function resetSave() { const d = DEF(); for (const k of Object.keys(data)) delete data[k]; Object.assign(data, d); persist(); }
