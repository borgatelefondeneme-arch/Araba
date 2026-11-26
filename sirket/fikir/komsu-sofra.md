# Komşu Sofra

> **Marka kararı (26.11.2026):** Tüketiciye görünen marka **Komşu Sofra** (komsusofra.com, alınmadan önce TÜRKPATENT kontrolü yapılacak). Şirketin resmi adı Tezgâh Dijital. Aşağıdaki eski "Bursa Sofra / komsusofra.com" ifadeleri bu marka ile okunmalı.

Bursa'ya özel, **komisyonsuz** yemek sipariş ağı. Tezgâh Dijital'in "Sipariş Al" paketinin büyütülmüş hâli.
Durum: **isim onaylandı, demo bekliyor** (26.11.2026)

## 1. Tek cümlede
Her restorana kendi adıyla bir sipariş sitesi kuruyoruz. Siparişler restoranın kendi WhatsApp'ına düşüyor. Tüm restoranlar ortak bir Bursa rehberinde de listeleniyor. Restorandan komisyon değil, **kurulum + yıllık sabit ücret** alıyoruz.

## 2. Yapı (ana gemi + filo)

```
komsusofra.com                 ← ana gemi: Bursa restoran rehberi, arama, kampanyalar
 ├─ murat.komsusofra.com       ← her restoranın sipariş sayfası (ücretsiz alt alan adı)
 ├─ ahmetkebap.com             ← isteyen restoranın kendi alan adı, aynı sayfayı gösterir
 └─ panel.komsusofra.com       ← restoran menü ve fiyatlarını buradan günceller
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

Restoran sayısı arttıkça `komsusofra.com` rehberi kendiliğinden değer kazanır. Rehberin tanıtımı **Aşama 2 işidir**, ilk iş değildir.

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
- **Alan adı:** `bursayemek.com` alınmış ve park edilmiş (satılık olabilir, pahalı olabilir). `komsusofra.com` ve `bursapaket.com` boş görünüyor (26.11.2026).
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

## 10. Rakip notu: neyiyelim.com (26.11.2026)

`neyiyelim.com` 2005'ten beri kayıtlı ve bugün **tam olarak bizim fikrimizle** çalışıyor: "Komisyonsuz yemek siparişi. Restoran komisyon ödemez, müşteri ekstra ücret ödemez. Menünü ekle, kuryeni bağla, bedava başla." Türkiye (İstanbul, Ankara, İzmir, diğer iller) ve Avrupa, Körfez, ABD'de listeleniyor.

**Sonuçlar:**
- Bu ismi ve benzerlerini kullanmıyoruz (karışıklık ve marka riski).
- Rakip **ücretsiz ve kendin kur** modelinde. "Komisyonsuz" tek başına fark değil.
- Bizim farkımız hizmet olmalı: menüyü biz gireriz, sticker ve poşet kartını biz basarız, restoranın WhatsApp'ını biz bağlarız, sorun olursa Bursa'da yerelde biz çözeriz. Restoranın emeği sıfır.
- Satış konuşmasında bu rakip sorulursa saklamıyoruz: "İsterseniz kendiniz ücretsiz kurabilirsiniz; biz anahtar teslim yapıyor ve müşterinizi direkt siparişe taşımanıza yardım ediyoruz."
- Ücretsiz rakip, kurulum ücretini savunmayı zorlaştırır. Kurucu Restoran programındaki ücretsiz kurulum bu yüzden daha da önemli. Pilot verisiyle fiyatlar yeniden değerlendirilecek.

## 11. Ödeme, şikâyet ve iade yönetimi

**Sorun:** Ödemeyi tamamen restorana bırakırsak, müşteri memnun kalmadığında devreye girebileceğimiz bir araç olmaz. Kötü bir deneyim de Komşu Sofra markasına yazılır.

**İlke:** Şikâyeti **biz yönetiriz**, parayı **lisanslı bir ödeme kuruluşu** tutar, iadeyi **restoran öder**. Müşteri tek bir muhatap görür: Komşu Sofra.

### 11.1 Komşu Sofra Güvencesi (müşteriye görünen kurallar)
| Durum | Kanıt | Çözüm |
|---|---|---|
| Eksik ürün | Teslimden sonra 2 saat içinde fotoğraf | Eksik ürün bedeli iade |
| Yanlış sipariş | Fotoğraf | Ürün yeniden gönderilir veya bedeli iade |
| Çok geç teslimat (taahhüt edilen sürenin 45 dk fazlası) | Sipariş saati kaydı | Sonraki siparişte restoran indirimi veya kısmi iade |
| Bozuk veya sağlığa uygun olmayan ürün | Fotoğraf | Tam iade. Restoran incelemeye alınır |
| Hiç gelmedi | — | Tam iade |
| Lezzeti beğenmedim | — | İade yok; geri bildirim restorana iletilir |

Hukuki zemin: Mesafeli Sözleşmeler Yönetmeliği m.15'e göre çabuk bozulan gıdada **cayma hakkı yok**, yani "vazgeçtim" iadesi yok. Ama ürün **ayıplıysa** (eksik, yanlış, bozuk) 6502 sayılı Kanun'un ayıplı mal hükümleri geçerli ve sorumlu satıcı olan restoran. Güvence kuralları bu ayrıma göre kuruldu (avukata teyit ettirilecek).

### 11.2 Şikâyet akışı
1. Her siparişin sonunda ve onay mesajında **"Sorun bildir"** bağlantısı olur. Şikâyet restorana değil **Komşu Sofra destek hattına** gelir.
2. Ben (Claude) kaydı açarım, fotoğrafı ve güvence tablosunu karşılaştırır, çözüm önerisi hazırlarım. Restorana ve müşteriye mesaj taslakları hazırlanır.
3. Restoranın 24 saat içinde cevap verme yükümlülüğü var (Kurucu Restoran formuna ve restoran sözleşmesine eklenir).
4. Restoran haklı bir şikâyette iadeyi reddederse karar Komşu Sofra'nındır. Ödeme online yapılmışsa iade ödeme kuruluşu üzerinden yapılır (11.3). Kapıda ödemede restoran iade etmezse uyarı alır.
5. **Yaptırım:** 30 günde 3 haklı şikâyet → uyarı; ikinci uyarıda rehberden geçici kaldırma; sonraki adımda sözleşme feshi. Restoranın en büyük kaybı rehberden ve QR sistemden çıkmak, elimizdeki koz bu.
6. Sadece gerçekten sipariş vermiş müşteriler restorana puan ve yorum verebilir.

### 11.3 Ödeme seçenekleri (aşamalı)
| Aşama | Ödeme | İade nasıl yapılır |
|---|---|---|
| **Pilot** | Kapıda nakit veya kart (restoranın POS'u) | Restoran nakit iade eder, POS'tan iptal/iade yapar ya da sonraki sipariş için indirim kodu verir. Takibi biz yaparız |
| **Aşama 2** | **Online kart ödemesi**, lisanslı ödeme kuruluşunun pazaryeri altyapısıyla (iyzico Pazaryeri, PayTR, Param vb.). Her restoran "alt üye işyeri" olur | Para önce ödeme kuruluşunda bekler, teslimat onaylanınca restorana aktarılır. Şikâyette iade **beklemedeki paradan** yapılır, restorana sormaya gerek kalmaz |

**Neden parayı kendi hesabımızda tutmuyoruz?** Başkası adına para toplayıp dağıtmak 6493 sayılı Kanun'a göre TCMB lisansı gerektiren bir ödeme hizmeti. Lisanslı kuruluşun pazaryeri ürünü bu yükü üstleniyor.

**Maliyet:** Kart işlem kesintisi ödeme kuruluşuna gider. Bir kaynağa göre iyzico özel tekliflerde %2,49 + 0,25 TL'den başlıyor (resmi değil, teyit edilecek); iade işlemlerinden ücret alınmadığını belirtiyor. Bu kesinti **bizim komisyonumuz değil**. Restoran nakit veya POS seçeneğini de sunmaya devam edebilir. Pazarlamada "Komşu Sofra komisyon almaz; kart ile ödemede yalnızca banka/ödeme kuruluşu kesintisi uygulanır" diye açık yazılır.

### 11.4 Küçük bir güvence fonu
Restoran iadeyi geciktirdiğinde müşteriyi bekletmemek için yıllık ücretlerin bir kısmından (ör. **ayda 1.000 TL'ye kadar**) küçük bir fon ayrılabilir. İade bu fondan hemen yapılır, tutar restorandan sonradan tahsil edilir. Fondan yapılan her ödeme `defter.csv`'ye yazılır. Aşama 2'de online ödemeyle bu fona ihtiyaç büyük ölçüde kalkar.

## 12. Lojistik ortaklık: Bursa'nın büyük yerel kurye firmaları (26.11.2026)

Sahibin önerisi: Tek tek kuryeler yerine **büyük bir yerel kurye firmasıyla** ortaklık. Ayrıntılı teklif: `../ortaklik/kurye-firmasi-teklif.md`.

**Neden güçlü bir fikir:**
1. **Teslimat açığını kapatıyor.** Kendi kuryesi olmayan restoran da Komşu Sofra'ya katılabilir. Bu, modelin en zayıf halkasıydı.
2. **Hazır satış ağı.** Kurye firmasının zaten anlaşmalı olduğu onlarca restoran var ve hepsini her gün görüyor.
3. **Çıkarlar aynı yönde.** Komşu Sofra'dan gelen her sipariş kurye firmasına bir paket ücreti demek (piyasada paket başına ~70-100 TL konuşuluyor, doğrulanmadı). Günde 10 sipariş alan tek bir restoran, kurye firmasına ayda **~20-30 bin TL** iş getirebilir. Firmanın asıl kazancı bizim abonelik gelirimiz değil, teslimat hacmi.

**Bu yüzden pazarlık dengesi bizden yana:** Kurye firması bu işten bizden çok daha fazla kazanır. Abonelik gelirimizi onlarla paylaşmamız gerekmez. Onların payı teslimat işi.

### 12.1 Ortaklık yapısı (önerilen)
| | Kurye firması verir | Komşu Sofra verir |
|---|---|---|
| Satış | Kuryeleri ve satış ekibiyle restoranlara tanıtım, restoran başına prim (kendi kuryelerine kendisi öder) | Satış materyali, demo, kurulumun tamamı |
| Teslimat | Belirlenen bölgelerde Komşu Sofra siparişlerini sabit ve açık bir tarifeyle taşır, süre taahhüdü verir | Siparişi otomatik olarak firmaya iletir ("Kurye çağır" düğmesi) |
| Tanıtım | Her teslimatta Komşu Sofra QR kartı (sadece Komşu Sofra restoranlarının siparişlerinde) | Sticker, kart, dijital tanıtım |
| Kazanç | Teslimat ücretleri | Restoran abonelikleri |
| Ayrıcalık | Bölgesinde **"Resmi Lojistik Ortağı"** unvanı, hedefe bağlı ve süreli münhasırlık | — |

**Hisse (şirket ortaklığı) verilmeli mi?** Başlangıçta **hayır**. Önce 6 aylık bir **iş birliği protokolü**. Hedefler tutarsa (ör. firmanın getirdiği ≥ 25 ödeyen restoran) firmaya hisse alma **opsiyonu** tanınabilir. Hisse sermaye, nakit ya da ölçülmüş katkı karşılığında, kademeli hak edişle verilir. Hisseyi baştan vermek, kontrolü ve markayı daha iş kanıtlanmadan bölüşmek demek.

**Münhasırlık:** Bütün Bursa'yı tek firmaya vermiyoruz. İlçe bazında, 6 ay süreli ve hedefe bağlı (ör. 3 ayda 10 restoran). Hedef tutmazsa münhasırlık düşer.

### 12.2 Abonelik modeli (güncel, bölüm 4 ve 9'un yerine geçer)
| | |
|---|---|
| Site kurulumu | **Ücretsiz** |
| 1. ay | **Ücretsiz** |
| 2. aydan itibaren | **990 TL/ay** (otomatik kart çekimi veya her ay başı IBAN) |
| Yıllık peşin | **9.900 TL** (2 ay bedava) |
| İlk 20 restoran (Kurucu) | **690 TL/ay**, restoran ayrılmadığı sürece sabit |
| Taahhüt | Yok. İstediği ay bırakır, alan adı restoranda kalır |

Kurucu Restoran karşılıkları (bölüm 9: sticker, haftalık sipariş sayısı, referans izni) aynen geçerli.

**6. ay hesabı:** 20 kurucu × 690 = 13.800 + 20 normal × 990 = 19.800 → **33.600 TL/ay**. Hedef 40 ödeyen restoran. Bir kurye firması 50-200 restoranla çalışıyorsa, bunun %20-30'unu kazanmak yeter.

**Risk:** Aylık modelde bırakma kolay. Önlem: her ay restorana "Bu ay Komşu Sofra'dan X sipariş geldi, platform komisyonuna göre ~Y TL tasarruf ettiniz" raporu. Rapor iyi değilse zaten kalmamaları gerekir.

### 12.3 Riskler
- **Kurye firması fikri kopyalayıp kendisi yapabilir.** Önlem: restoran sözleşmeleri, alan adları ve yazılım Komşu Sofra'da. Protokole gizlilik ve rekabet etmeme maddesi. Hız: pilot 4 haftada canlı.
- **Tek firmaya bağımlılık.** Münhasırlık ilçe bazlı ve süreli. 2. bir firma yedekte.
- **Teslimat kalitesi markamızı etkiler.** Güvence kurallarındaki (bölüm 11) "geç teslimat" ve "hiç gelmedi" durumlarında kurye firması kusurluysa bedeli kurye firması öder. Protokole yazılır.
- **Veri:** Müşteri adres ve telefonu teslimat için kurye firmasıyla paylaşılır. KVKK'ya göre amaçla sınırlı paylaşım; firma bu veriyi kendi pazarlamasında kullanamaz.
