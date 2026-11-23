// Tek dosyalık HTML sürümünde tüm dosyalar sayfanın içine gömülür (window.TURBO_ASSETS: yol -> data URL)
export function assetURL(url) {
  const A = window.TURBO_ASSETS; if (!A) return url;
  const key = String(url).replace(/^\.\//, '').replace(location.href.replace(/[^/]*$/, ''), '');
  return A[key] || url;
}
