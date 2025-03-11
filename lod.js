document.addEventListener('DOMContentLoaded', function () {
    const loading = document.getElementById('loading');
    const app = document.getElementById('app');

    if (loading && app) {
        setTimeout(() => {
            loading.classList.add('fade-out');  // Yavaşça kaybol
            setTimeout(() => {
                loading.style.display = 'none'; // Tamamen gizle
                app.classList.add('visible');   // İçeriği göster
            }, 1000); // 1 saniye sonra tamamen kaybolsun
        }, 2000); // Sayfa açıldıktan 1 saniye sonra animasyon başlasın
    } else {
        console.error("Hata: 'loading' veya 'app' ID'sine sahip element bulunamadı.");
    }
});
