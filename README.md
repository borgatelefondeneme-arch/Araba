# 🏁 Turbo Köy

Telefon ve tablette oynanan, **aynı Wi-Fi ağında çocuğunla birlikte** yarışabileceğin 3D araba yarışı.
Subway Surfers tarzında 3 şeritli yolda kayarak ilerlersin; köy haritasında bölüm bölüm açılan yollarda
yıldız ⭐ ve elmas 💎 toplar, bunlarla yeni arabalar alır ve arabalarını yükseltirsin.

## Nasıl çalıştırılır?

Oyunu bir bilgisayar (Windows / Mac / Linux) "sunucu" olarak yayınlar; telefon ve tabletler tarayıcıdan bağlanır.

1. Bilgisayara [Node.js](https://nodejs.org) kur (LTS sürümü).
2. Bu klasörde bir kere: `npm install`
3. Oyunu başlat: `npm start`
4. Ekranda yazan adresi (ör. `http://192.168.1.34:3000`) telefon ve tabletin tarayıcısına yaz.
   - Tüm cihazlar **aynı Wi-Fi**'ye bağlı olmalı.
   - Tarayıcı menüsünden **"Ana ekrana ekle"** dersen tam ekran uygulama gibi açılır.

> Windows güvenlik duvarı "Node.js'e izin verilsin mi?" diye sorarsa **Özel ağlar** için izin ver.

## Kurulumsuz oynamak
- **Tek dosya:** `node tools/build.mjs` komutu `dist/turbo-koy.html` dosyasını üretir (tüm araçlar, sesler ve görseller içinde). Bu dosyayı bilgisayarda Chrome/Edge/Safari ile açman yeterli. Tek dosyada birlikte oynama kapalıdır.
- **claude.ai yayını:** Aynı komut `dist/artifact` klasörünü de üretir; bu klasör claude.ai'de yayınlanır ve orada birlikte oynama sunucusuz çalışır.

## Garaj
Arabayı parmakla çevir, iki parmakla yakınlaştır. Sekmeler: Yükselt (motor → kaput hava girişi, nitro → egzoz ve N₂O yazısı, mıknatıs → tavanda mıknatıs, zırh → koruma demiri ve tavan lambası, yol tutuş → alçaltılmış gövde), Boya (24 renk), Kaplama (parlak, metalik, mat, sedef, şeker cila, krom), Jant, Kanat, Neon, Çıkartma, Cam filmi. Kilitli parçalar önce denenir, beğenirsen yıldızla alınır.

## Birlikte oynamak
1. İki cihazda da **Birlikte Oyna**'ya gir.
2. Biri **Oda Kur**'a bassın; diğeri listede çıkan odaya **Katıl** desin (ya da 4 harfli kodu yazsın).
3. Oda sahibi bölümü seçip **Başlat**'a bassın. Herkes aynı yolu, aynı engelleri görür;
   rakibin arabasını yolda ve üstteki ilerleme çubuğunda görürsün.
4. Birlikte modda kaza yapınca oyun bitmez, sadece yavaşlarsın (çocuklar için).
   Birinci gelen ekstra 3 elmas kazanır; topladığın yıldız/elmaslar kendi cihazına kaydedilir.

## Kontroller
| Hareket | Dokunmatik | Klavye |
|---|---|---|
| Şerit değiştir | Sola/sağa kaydır veya ekranın sol/sağ yarısına dokun | ← → / A D |
| Zıpla (alçak engellerin üstünden) | Yukarı kaydır | ↑ / W / Boşluk |
| Nitro (dolunca) | Aşağı kaydır veya 🔥 düğmesi | ↓ / S |

## Oyunda neler var?
- **20 bölüm, 5 bölge:** Yeşil Köy → Çam Ormanı → Kızgın Çöl → Karlı Dağ → Gece Şehri. Her bölüm 1–3 yıldızla puanlanır, bir sonrakini açar.
- **10 araç (yüksek poligonlu 3D modeller):** Köy Kaşifi, Şimşek GT, Dağ Kurdu, Tarla Pikabı, Polis Arabası, Kas Kral, Ralli Roket, Canavar Kamyon, İtfaiye ve ultra gerçekçi Konsept X. Çoğunun 5 renk seçeneği var. Yolda taksi, dondurma kamyonu, kargo minibüsü gibi trafik araçları dolaşır.
- **Gerçekçi sesler:** Motor (rölanti → yüksek devir, hıza göre perde değişir), rüzgâr, nitro patlaması, lastik sesi, çarpışma, korna 📯, yıldız/elmas toplama.
- **Yol levhaları:** İnek geçidi, okul, traktör, geyik, deve, kar uyarıları; hız sınırı, yön ve köy/bölge tabelaları.
- **5 yükseltme:** Motor, Yol Tutuş, Nitro, Mıknatıs, Zırh (ekstra can). Yıldızla, son seviyeler elmasla alınır.
- **Güçlendiriciler:** 🧲 mıknatıs, 🔥 nitro (engelleri devirir), 🛡️ kalkan. **Rampalar** havaya uçurup elmas toplatır.
- **Grafik:** Fiziksel tabanlı (PBR) malzemeler, cilalı araba boyası, fiziksel gökyüzü ve bulutlar, gerçek zamanlı gölgeler,
  gökyüzünden yansımalar, sis, gece şehrinde ıslak yol ve ışık parlaması (bloom), nitroda hız çizgileri.
  Ayarlar'dan kalite seçilebilir; yavaş cihazlarda çözünürlük otomatik düşer.

## Teknik
- `server.js` – statik dosya sunucusu + WebSocket oda sistemi (`ws`)
- `public/js/` – Three.js ile oyun: `race.js` (oynanış), `world.js` (ortam), `track.js` (bölüm üretimi),
  `cars.js` (prosedürel araba modelleri), `map.js` (köy haritası), `main.js` (menüler)
- İlerleme her cihazın tarayıcısında (localStorage) saklanır.

## Kaynaklar ve lisanslar
- Araç modelleri (Konsept X hariç): [Grab3D](https://grab3d.com) – CC0 (kamu malı).
- Konsept X: [Khronos glTF Sample Assets – CarConcept](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/CarConcept), © 2024 Darmstadt Graphics Group GmbH, model ve dokular Eric Chadwick, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
- Ses efektleri: ElevenLabs Sound Effects ile bu oyun için üretildi (`public/sfx`).
- Uygulama simgesi ve köy yolu arka planı: yapay zekâ ile üretildi (`public/img`).
