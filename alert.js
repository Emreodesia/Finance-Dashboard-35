let targetPrice = null;

// API'den veri çekme
async function fetchBitcoinPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    return data.bitcoin.usd; // Bitcoin fiyatını döndür
}

// Fiyat alarmını kontrol etme
async function checkPrice() {
    if (targetPrice !== null) {
        let currentPrice = await fetchBitcoinPrice();
        document.getElementById('status').innerText = `Şu an Bitcoin Fiyatı: $${currentPrice}`;

        // Fiyat hedefi aşıldığında alarm ver
        if (currentPrice >= targetPrice) {
            alert(`Fiyat Hedefiniz Gerçekleşti! Bitcoin $${currentPrice} oldu.`);
            targetPrice = null; // Alarm bir kez çaldıktan sonra sıfırlanır
        }
    }
}

// Kullanıcının hedef fiyatı girip alarmı kurması
document.getElementById('set-alert').addEventListener('click', () => {
    targetPrice = parseFloat(document.getElementById('target-price').value);
    if (targetPrice && targetPrice > 0) {
        alert(`Fiyat Alarmınız $${targetPrice} olarak ayarlandı!`);
        document.getElementById('status').innerText = "Alarm aktif! Fiyat takibi yapılıyor.";
    } else {
        alert("Geçerli bir hedef fiyat girin.");
    }
});

// Fiyatı her 10 saniyede bir kontrol et
setInterval(checkPrice, 10000); // 10 saniyede bir fiyatı kontrol et




document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('set-alert').addEventListener('click', () => {
        targetPrice = parseFloat(document.getElementById('target-price').value);
        if (targetPrice && targetPrice > 0) {
            alert(`Fiyat Alarmınız $${targetPrice} olarak ayarlandı!`);
            document.getElementById('status').innerText = "Alarm aktif! Fiyat takibi yapılıyor.";
        } else {
            alert("Geçerli bir hedef fiyat girin.");
        }
    });
});
// Compare this snippet from Fintec-Open-/index.html: