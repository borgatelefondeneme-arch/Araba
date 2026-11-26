# Fikir: Bursa Sofra (çalışma adı)

Bursa'ya özel, **komisyonsuz** yemek sipariş ağı. Tezgâh Dijital'in "Sipariş Al" paketinin büyütülmüş hâli.
Durum: **taslak, sahibin onayını bekliyor** (26.11.2026)

## 1. Tek cümlede
Her restorana kendi adıyla bir sipariş sitesi kuruyoruz. Siparişler restoranın kendi WhatsApp'ına düşüyor. Tüm restoranlar ortak bir Bursa rehberinde de listeleniyor. Restorandan komisyon değil, **kurulum + yıllık sabit ücret** alıyoruz.

## 2. Yapı (ana gemi + filo)

```
bursasofra.com                 ← ana gemi: Bursa restoran rehberi, arama, kampanyalar
 ├─ murat.bursasofra.com       ← her restoranın sipariş sayfası (ücretsiz alt alan adı)
 ├─ ahmetkebap.com             ← isteyen restoranın kendi alan adı, aynı sayfayı gösterir
 └─ panel.bursasofra.com       ← restoran menü ve fiyatlarını buradan günceller
```

- Restoranın kendi alan adı (`ahmetkebap.com`) **yönlendirme değil**, aynı sayfayı kendi adıyla gösterir (DNS/CNAME). Müşteri adres çubuğunda restoranın adını görür, marka restoranda kalır.
- Tek bir yazılım, tüm restoranlar. Yeni restoran eklemek = menüyü sisteme girmek. Kurulum süresi birkaç saat.

## 3. Sipariş akışı

**Aşama 1 (pilot, hemen yapılabilir, API gerektirmez):**
1. Müşteri sayfada yemekleri sepete ekler, adres ve not yazar.
2. "Siparişi gönder" düğmesine basar. Kendi WhatsApp'ı, **sipariş metni hazır yazılmış** hâlde restoranın numarasına açılır. Gönder'e basar.
3. Restoran siparişi WhatsApp'ta görür, cevabı oradan verir.

Avantajı: Meta onayı, mesaj ücreti ve sunucu riski yok. Restoran ilk gün kullanmaya başlar.
Dezavantajı: Sipariş durumunu ve istatistikleri otomatik tutamayız.

**Aşama 2 (pilot başarılı olursa):** WhatsApp Business API + yapay zekâ asistanı. Onay mesajı, "siparişiniz yolda" bildirimi, menü sorularına otomatik cevap, sipariş paneli ve istatistikler. Her restoranın numarası Meta'da ayrı ayrı doğrulanır.

**Ödeme:** Kapıda nakit veya kart (restoranın kendi POS'u). Para bizim üzerimizden geçmez. Böylece ödeme kuruluşu lisansı ve kart verisi yükü olmaz.

**Teslimat:** Restoranın kendi kuryesi ya da anlaştığı esnaf kurye. Teslimatı biz yapmayız.

## 4. Gelir modeli

| Kalem | Fiyat (hedef) |
|---|---|
| Kurulum (menü girişi, sayfa, QR sticker paketi, Google profil bağlantısı) | 3.000 – 5.000 TL |
| Yıllık işletme ücreti (alt alan adıyla) | 9.000 TL/yıl (aylık 750 TL karşılığı) |
| Kendi alan adı + Aşama 2 WhatsApp asistanı | +3.000 – 6.000 TL/yıl |

**Restorana söylenecek hesap:** Platformlar sipariş başına yüksek komisyon alıyor. Ayda 100 direkt sipariş × 300 TL × %20 = 6.000 TL/ay komisyon tasarrufu. Bizim yıllık ücretimiz bunun bir aylık karşılığı kadar.
(Komisyon oranı restorana ve platforma göre değişir; restoranın kendi faturasından hesaplanır.)

**6. ay hedefi (30.000 TL/ay):** 30 restoran × 750 TL = 22.500 TL tekrarlayan gelir + ayda 3-4 yeni kurulum × 4.000 TL ≈ 14.000 TL → ~36.000 TL brüt.

## 5. En büyük risk: tavuk-yumurta

Yemeksepeti, Trendyol Yemek, Getir ve Migros Yemek'in reklam bütçesiyle tüketici çekmek için yarışamayız. 20.000 TL'lik bütçe bir günlük reklamlarına bile yetmez.

**Çözüm:** Tüketiciyi biz getirmeyiz. **Her restoran kendi müşterisini taşır**, rehber bunun üzerine bir bonus olur:
- Masadaki ve kapıdaki **QR sticker**: "Bir dahakine buradan sipariş ver, %10 daha ucuz"
- Paket servis poşetine konan küçük kart: aynı mesaj + QR
- Telefonla sipariş veren müşteriye: "WhatsApp'tan menü linki gönderelim mi?"
- Restoranın Google profilindeki "Sipariş ver" bağlantısı

Restoran sayısı arttıkça `bursasofra.com` rehberi kendiliğinden değer kazanır. Rehberin tanıtımı **Aşama 2 işidir**, ilk iş değildir.

## 6. Tanıtım kanalları: ne yapılabilir, ne yapılmaz

| Kanal | Kime | Durum |
|---|---|---|
| Google Ads, Instagram reklamı (Bursa) | Restoran sahipleri | Evet |
| Kişisel e-posta (sitesinde e-postası olan restoranlar) | Restoran (tacir) | Evet. Kanunen izin gerekmez, ama her mesajda "istemiyorum" seçeneği şart. Günde ≤15 |
| WhatsApp'tan ilk mesaj | Tanımadığımız restoranlar | **Hayır.** Meta kuralı, numara kapanır |
| WhatsApp | Bize yazan restoranlar ve müşteriler | Evet |
| Toplu SMS/WhatsApp/e-posta | Tüketiciler | **Hayır.** Önceden izin ve İYS kaydı şart |
| QR sticker, poşet kartı | Restoranın kendi müşterisi | Evet. Asıl tüketici kanalı |
| Motor kurye ortaklığı (aşağıda) | Restoranlar | Evet |

### Kurye ortaklık programı
- Kurye, hatta herhangi biri, kişisel **tavsiye kodu** alır (ör. `KURYE-AHMET`).
- Bu kodla üye olan restoran kurulumda indirim alır. Kurye **kurulum ücretinin %20'si** kadar tek seferlik prim kazanır, ödeme restoran ilk ücreti ödedikten sonra yapılır.
- Kuryeler zaten her gün onlarca restoranla görüşüyor. En ucuz satış ekibimiz olabilirler.
- Prim ödemeleri kayıtlı ve vergisel olarak doğru yapılmalı (mali müşavir).

## 7. Hukuki kontrol listesi (mali müşavir / avukat ile)
- **E-ticaret aracı hizmet sağlayıcı** sayılıp sayılmadığımız (6563 sayılı Kanun) ve ETBİS kaydı.
- **KVKK:** müşterinin adı, adresi ve telefonu restorana gider. Aydınlatma metni gerekir; veri sorumlusu restoran, biz veri işleyen olabiliriz.
- **"Daha ucuz" iddiası:** Restoranın platform sözleşmesinde fiyat eşitliği şartı olup olmadığına her restoran kendisi bakmalı. Rekabet Kurulu 2016'da Yemeksepeti'ne bu tür kısıtlamalar nedeniyle ceza vermişti, ama güncel sözleşmeleri bilmiyoruz. Biz bu iddiayı reklamlarımızda genel olarak kullanmayız; indirimi restoran kendisi belirler.
- **Platform poşetine kart koymak:** Platform sözleşmesine aykırı olabilir. Restoranın kontrol etmesi gerekir.
- **Alan adı:** `bursayemek.com` alınmış ve park edilmiş (satılık olabilir, pahalı olabilir). `bursasofra.com` ve `bursapaket.com` boş görünüyor (26.11.2026).
- Marka tescili (TÜRKPATENT).

## 8. Yol haritası

| Dönem | İş | Para |
|---|---|---|
| Hafta 1-2 | Ben: çok restoranlı sipariş sitesi (Aşama 1), demo restoran, QR sticker şablonu | Alan adı ~500 TL |
| Hafta 3-8 | **Kurucu Restoran programı** (bölüm 9): Görükle'den başlayarak 10 restoran, kurulum + 3 ay ücretsiz | Sticker baskısı ~1.000 TL |
| 2-3. ay | Pilot sayıları iyiyse ücretli satış, kurye programı, Google Ads denemesi | Reklam 3.000 TL, şirket kuruluşu |
| 3. ay sonu | **Karar:** 10 kurucudan 6'dan azı ücretli devam ediyorsa ve ücretli yeni restoran yoksa dur | — |
| 4-6. ay | Aşama 2 (WhatsApp API ve asistan), rehberin tanıtımı, diğer semtler | Gelirden |

**Pilot başarı ölçütü:** 5 restoranda, 4 haftada, restoran başına haftada en az 10 direkt sipariş.

## 9. Kurucu Restoran programı (ücretsiz deneme)

Sahibin önerisi (26.11.2026): İlk katılanlara kurulum ve 3 ay kullanım ücretsiz.

**Kurallar:**
- Sadece **ilk 10 restoran**. Sayının sınırlı olması aciliyet yaratır ve bizim emeğimizi korur.
- **Kurulum ücreti alınmaz.** 3. ayın sonunda devam eden restorandan da hiçbir zaman alınmaz.
- **3 ay kullanım ücretsiz.** Sonrasında yıllık ücret, kurucu indirimiyle **6.000 TL/yıl** (normali 9.000 TL). Bu fiyat restoran ayrılmadığı sürece sabit kalır.
- 3. ayın sonunda restoran hiçbir ceza ödemeden ayrılabilir. Alan adı ve müşteri listesi restoranda kalır.

**Restoranın karşılığında yapacakları (yazılı, bir sayfalık katılım formu):**
1. QR sticker'ı kasaya, masalara ve kapıya yapıştırmak; paket servis kartlarını poşete koymak.
2. Direkt siparişte bir indirim ya da ikram sunmak (miktarı restoran belirler).
3. Her hafta direkt sipariş sayısını paylaşmak. WhatsApp'tan tek bir sayı yazmak yeterli.
4. Memnunsa, adını ve görüşünü referans olarak kullanmamıza izin vermek.

**Nakit akışına etkisi:** İlk 3 ay bu 10 restorandan gelir yok. Pilot dönemi giderleri düşük (~1.500 TL: alan adı ve sticker), bu yüzden "ilk ay zarar yok" hedefi korunur. 11. restorandan itibaren normal fiyat geçerli. 3. ay sonu kararı artık **"10 kurucu restorandan en az 6'sı ücretli devam ediyor mu + ücretli yeni restoran var mı"** sorusuna göre verilir.

**Gelir örneği (4-6. ay):** 7 kurucu × 6.000 TL + 20 normal restoran × 9.000 TL = 222.000 TL yıllık sözleşme. Peşin tahsil edilirse ilk aylarda nakit güçlü olur; aylık bazda ≈ 18.500 TL tekrarlayan gelir + yeni kurulumlar (ayda 3-4 × 4.000 TL ≈ 14.000 TL) ≈ **32.000 TL/ay**.
