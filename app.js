document.addEventListener('DOMContentLoaded', function() {
    // Kripto grafik örneği
    const cryptoChart = new Chart(
        document.getElementById('cryptoChart'),
        {
            type: 'line',
            data: {
                labels: ['1 Ocak', '2 Ocak', '3 Ocak', '4 Ocak', '5 Ocak'],
                datasets: [{
                    label: 'Bitcoin Fiyatı',
                    data: [45000, 46000, 44000, 47000, 45000],
                    borderColor: '#00ff9d',
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#b3b3b3'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#b3b3b3'
                        }
                    }
                }
            }
        }
    );

    // Canlı veri güncelleme simülasyonu
    setInterval(updatePrices, 5000);
});

function updatePrices() {
    // API'den veri çekme simülasyonu
    const prices = {
        btc: Math.random() * (50000 - 40000) + 40000,
        eth: Math.random() * (3000 - 2500) + 2500
    };

    // DOM güncelleme
    document.querySelectorAll('.market-data .data-item').forEach(item => {
        const value = item.querySelector('.value');
        if (value.textContent.includes('$')) {
            const newPrice = (Math.random() * (50000 - 40000) + 40000).toFixed(2);
            value.textContent = `$${newPrice}`;
        }
    });
} 