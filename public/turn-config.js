// =====================================================================
//  BİRLİKTE OYNA — FARKLI AĞLAR (farklı Wi-Fi / mobil veri) İÇİN TURN AYARI
//
//  Aynı Wi-Fi'deki cihazlar bu ayar olmadan da bağlanır. Davet bağlantısıyla
//  başka ağlardaki arkadaşların da bağlanabilmesi için bir TURN aktarma
//  sunucusu gerekir (ör. Metered: https://www.metered.ca/tools/openrelay/).
//  Metered panelinde: TURN Server → Credentials → USERNAME ve PASSWORD'u
//  aşağıya yaz. Not: Bu bilgiler oyun sayfasında herkese görünür.
// =====================================================================
window.GK_TURN = {
  turnKullanici: "",   // Metered → Credentials → USERNAME
  turnSifre: "",       // Metered → Credentials → PASSWORD
  turnSunucu: "standard.relay.metered.ca",
  sunucular: []
};
