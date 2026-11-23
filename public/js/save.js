const KEY = 'turbo-koy-save-v1';
const DEF = () => ({
  name: 'Oyuncu', stars: 150, diamonds: 5, car: 'hatch',
  owned: { hatch: true }, colors: {}, upgrades: {}, levels: {}, unlocked: 1,
  quality: 'auto', sound: true,
});
let data;
try { data = Object.assign(DEF(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { data = DEF(); }
export const save = data;
export function persist() { try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {} }
export function resetSave() { const d = DEF(); for (const k of Object.keys(data)) delete data[k]; Object.assign(data, d); persist(); }
