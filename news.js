let haberIndex = 0;

async function haberleriYukle() {
    try {
        const response = await fetch('haberler.json'); // JSON dosyasını çek
        if (!response.ok) throw new Error("JSON yüklenemedi!");

        const haberler = await response.json(); // JSON'u parse et

        function haberiGuncelle() {
            let haber = haberler[haberIndex];

            // Eğer HTML içinde ID yoksa hata verir. Kontrol edelim:
            let haberIcerik = document.getElementById('haber-icerik');
            let haberResim = document.getElementById('haber-resim');

            if (haberIcerik) {
                haberIcerik.innerHTML = `<p>${haber.icerik}</p>`;
            }
            if (haberResim) {
                haberResim.src = haber.resim;
            }

            haberIndex = (haberIndex + 1) % haberler.length; // Sonraki habere geç
        }

        haberiGuncelle(); // İlk haberi göster
        setInterval(haberiGuncelle, 5000); // 5 saniyede bir güncelle

    } catch (error) {
        console.error("Haberler yüklenirken hata oluştu:", error);
    }
}

document.addEventListener("DOMContentLoaded", haberleriYukle); // Sayfa yüklendiğinde çalıştır
