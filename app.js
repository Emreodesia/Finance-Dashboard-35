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

    // Hisse senetleri grafik örneği
    const stocksChart = new Chart(
        document.getElementById('stocksChart'),
        {
            type: 'line',
            data: {
                labels: ['1 Ocak', '2 Ocak', '3 Ocak', '4 Ocak', '5 Ocak'],
                datasets: [{
                    label: 'Apple Fiyatı',
                    data: [150, 152, 148, 155, 150],
                    borderColor: '#ff6384',
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

    // Değerli metaller grafik örneği
    const metalsChart = new Chart(
        document.getElementById('metalsChart'),
        {
            type: 'line',
            data: {
                labels: ['1 Ocak', '2 Ocak', '3 Ocak', '4 Ocak', '5 Ocak'],
                datasets: [{
                    label: 'Altın Fiyatı',
                    data: [1800, 1820, 1780, 1850, 1800],
                    borderColor: '#ffd700',
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

    

// Döviz kuru grafiği
const forexChart = new Chart(
    document.getElementById('forexChart'),
    {
        type: 'line',
        data: {
            labels: ['1 Ocak', '2 Ocak', '3 Ocak', '4 Ocak', '5 Ocak'],
            datasets: [{
                label: 'USD/TRY',
                data: [36, 37, 35, 38, 36],
                borderColor: '#36a2eb',
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

 // Borsa İstanbul grafiği
 const stocksCharts = new Chart(
    document.getElementById('stocksCharts'),
    {
        type: 'line',
        data: {
            labels: ['1 Ocak', '2 Ocak', '3 Ocak', '4 Ocak', '5 Ocak'],
            datasets: [{
                label: 'Borsa İstanbul',
                data: [45, 50, 48, 53, 49],
                borderColor: '#ff6384',
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

    // Haberleri çek ve göster
    fetchNews();
});

async function updatePrices() {
    try {
        // Kripto para fiyatlarını al
        const cryptoResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,avalanche-2,dogecoin&vs_currencies=usd');
        const cryptoData = await cryptoResponse.json();
        
        const cryptoPrices = {
            btc: cryptoData.bitcoin.usd,
            eth: cryptoData.ethereum.usd,
            sol: cryptoData.solana.usd,
            avax: cryptoData['avalanche-2'].usd,
            doge: cryptoData.dogecoin.usd
        };

        // Değerli metaller fiyatlarını al
        const metalsResponse = await fetch('https://metals-api.com/api/latest?access_key=YOUR_API_KEY&base=USD&symbols=XAU,XAG');
        const metalsData = await metalsResponse.json();
        
        const metalsPrices = {
            gold: metalsData.rates.XAU,
            silver: metalsData.rates.XAG
        };

        // Hisse senedi fiyatlarını al
        const stockResponse = await fetch('https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=AAPL,GOOGL,IXIC,N225&apikey=YOUR_API_KEY');
        const stockData = await stockResponse.json();
        
        const stockPrices = {
            apple: stockData['Stock Quotes'][0]['2. price'],
            google: stockData['Stock Quotes'][1]['2. price'],
            nasdaq: stockData['Stock Quotes'][2]['2. price'],
            nikkei: stockData['Stock Quotes'][3]['2. price']
        };

        // DOM güncelleme
        document.querySelectorAll('.market-data .data-item').forEach(item => {
            const value = item.querySelector('.value');
            if (item.textContent.includes('Bitcoin')) {
                value.textContent = `$${cryptoPrices.btc}`;
            } else if (item.textContent.includes('Ethereum')) {
                value.textContent = `$${cryptoPrices.eth}`;
            } else if (item.textContent.includes('Solana')) {
                value.textContent = `$${cryptoPrices.sol}`;
            } else if (item.textContent.includes('Avalanche')) {
                value.textContent = `$${cryptoPrices.avax}`;
            } else if (item.textContent.includes('Dogecoin')) {
                value.textContent = `$${cryptoPrices.doge}`;
            } else if (item.textContent.includes('Altın')) {
                value.textContent = `$${metalsPrices.gold}`;
            } else if (item.textContent.includes('Gümüş')) {
                value.textContent = `$${metalsPrices.silver}`;
            } else if (item.textContent.includes('Apple')) {
                value.textContent = `$${stockPrices.apple}`;
            } else if (item.textContent.includes('Google')) {
                value.textContent = `$${stockPrices.google}`;
            } else if (item.textContent.includes('NASDAQ')) {
                value.textContent = `$${stockPrices.nasdaq}`;
            } else if (item.textContent.includes('Nikkei 225')) {
                value.textContent = `$${stockPrices.nikkei}`;
            }
        });
    } catch (error) {
        console.error('Fiyatları güncellerken bir hata oluştu:', error);
    }
}

async function fetchNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=business&apiKey=YOUR_NEWS_API_KEY');
        const data = await response.json();
        const newsList = document.getElementById('news-list');
        data.articles.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = article.url;
            link.textContent = article.title;
            link.target = '_blank';
            listItem.appendChild(link);
            newsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Haberleri çekerken bir hata oluştu:', error);
    }

    
}