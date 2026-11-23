# Turbo Köy – Yeniden Tasarım Planı (v4)

Bu dosya bir sonraki çalışma oturumunda doğrudan uygulanmak üzere yazıldı.

## 1. Neden takılıyor? (teşhis, 23 Kasım 2026, iPhone ekran görüntüsü: ortalama 60 FPS, 132 çizim, 245k üçgen)
Ortalama FPS iyi göründüğü halde oyun **ara ara donuyor**. Sebepler:

1. **Dekor her 40 m'de sıfırdan kuruluyor.** `world.rebuildInstances()` 213 km/sa'te ~0,7 sn'de bir tüm
   ağaç/ev/çit matrislerini (binlerce) yeniden yazıyor + yeni parçanın içeriğini üretiyor. Bu bir kare
   içinde olduğu için 30–80 ms'lik duraklama yapıyor. (Ortalama FPS bunu gizliyor.)
2. **Yarış içinde yeni nesne oluşturma ve çöp toplama.** Engeller/trafik `propObject` ile klonlanıyor,
   her karede `new THREE.Vector3()` gibi küçük nesneler üretiliyor → iOS çöp toplayıcısı ara ara durduruyor.
3. **Ağır varlıklar.** 53 çevre modeli + HDRI + PBR dokular (~30 MB). Gök Kartalı'ndaki gibi low‑poly ve
   az sayıda model kullanılmalı.

## 2. Hedef ve ölçüt
- iPhone ve Samsung tablette **sabit 60 FPS, hiç takılma yok** (en uzun kare < 25 ms).
- Kare başına **< 80 çizim, < 150k üçgen**, yarış sırasında **sıfır** yeni nesne/malzeme/gölgelendirici.
- İlk yükleme < 8 MB (Gök Kartalı ~19 MB ama pilotlar hariç ~3 MB).
- Ölçüm: oyuna "en uzun kare (ms)" göstergesi eklenecek; FPS göstergesinin yanında görünecek.

## 3. Teknik yeniden yapı
- **Halka (ring) tamponlu dekor:** Yol 16 sabit "dilim"e bölünür, her dilimin örnekleme (instancing) yuvaları
  sabittir. Oyuncu ilerledikçe sadece arkada kalan TEK dilim öne taşınır (≈30 matris), tüm dekor yeniden yazılmaz.
- **Sabit havuzlar:** Engel, trafik, yıldız, elmas, güçlendirici için yarış başında havuz kurulur; yarış içinde
  `new` yok. Kamera/fizik vektörleri modül düzeyinde tekrar kullanılır.
- **Hafif sanat yönü (Gök Kartalı gibi):** Low‑poly ama şık: Quaternius "Cars Bundle" (CC0, poly.pizza) ve
  Kenney araçları gibi 500–3000 üçgenlik araçlar; ağaç/ev/kaya low‑poly CC0 setleri. Garajda yine
  Konsept X ve detaylı Grab3D araçları gösterilebilir, yarışta her aracın hafif eşi kullanılır.
- **Işık:** Tek yönlü ışık + yarım küre ışığı, gölge yalnızca oyuncu arabasında (küçük gölge haritası).
  Gökyüzü: renk geçişli kubbe (HDRI sadece "Ultra"da). Sis ile uzak dekor gizlenir.
- **Varsayılan kalite telefonda "Orta"**, tablette Samsung için WebGL2 yoksa uyarı (mevcut).

## 4. Oyun tasarımı – daha eğlenceli
Şu anki "3 şerit + yıldız topla" tek düze. Yeni döngü:
1. **Rakiplerle gerçek yarış:** Her bölümde 3–5 yapay zekâ rakip; ekranda sıra (1./2./3.). Bitişte kupa.
2. **Serbest direksiyon:** Gök Kartalı'ndaki gibi parmağı sürükleyerek analog sürüş (şerit sistemi kalkar),
   isteğe bağlı eğim (tilt) kontrolü. Drift: keskin dönüşte kayma + nitro doldurur.
3. **Kıl payı bonusu:** Trafiğe çok yakın geçince "Kıl payı! +50" ve nitro dolar; art arda yapınca **kombo çarpanı**.
4. **Hız şeritleri (boost pad), rampalar ve takla:** Havada sağa‑sola kaydırarak takla/dönüş, inişte bonus.
5. **Kırılabilir nesneler:** Karton kutu, saman balyası, kardan adam – nitroyla çarpınca dağılır, puan verir.
6. **Bölüm türleri:** Normal yarış · Polis kovalamacası (kaç!) · Zamana karşı · "Patron" bölümü (dev kamyon/tır).
7. **Görevler:** Her bölümde 3 görev (ör. "5 kıl payı yap", "hiç çarpma", "1. ol") → yıldız puanı bunlardan.
8. **Birlikte oyna:** Gök Kartalı'nın PeerJS + TURN (turn-config.js) yapısı aynen taşınır; farklı ağlarda da bağlanır.
9. Garaj, boya/kaplama/neon/çıkartma, gizli deneme modu (TURBO2026) ve harita korunur.

## 5. Uygulama sırası (bir sonraki oturum)
1. Ölçüm altyapısı: "en uzun kare" göstergesi + otomatik test (Playwright) ile 20 bölümde kare süresi raporu.
2. Halka tamponlu dekor + sabit havuzlar (takılmayı bitiren adım) → yayınla, kullanıcıya test ettir.
3. Low‑poly yarış varlıkları (Quaternius/Kenney CC0) + hafif ışık/gökyüzü.
4. Serbest direksiyon + rakip yapay zekâ + sıralama.
5. Kıl payı/kombo, boost pad, takla, kırılabilir nesneler.
6. Bölüm türleri (polis, zamana karşı, patron) ve görevler; haritaya bölüm türü simgeleri.
7. Çok oyunculuyu Gök Kartalı yapısına geçir (TURN ile).
8. Ses: motor sesi kalır (vites benzetimi), kıl payı/kombo/takla sesleri eklenir.

## 6. Kullanıcıya sorulacaklar
- Serbest direksiyon mu, yoksa 3 şerit (Subway Surfers gibi) kalsın mı? (Öneri: serbest direksiyon.)
- Rakiplerle yarış mı öncelikli, yoksa polis kovalamacası mı?
- Gök Kartalı'ndaki gibi silah/füze benzeri eğlenceli eklentiler istenir mi (ör. önündeki arabayı iten şok dalgası)?
