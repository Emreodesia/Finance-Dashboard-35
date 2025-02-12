const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Örnek veri
let marketData = {
    crypto: {
        BTC: { price: 45000, change: 2.5 },
        ETH: { price: 2800, change: -1.2 }
    },
    stocks: {
        BIST100: { price: 9500, change: 1.8 }
    }
};

// Ana endpoint
app.get('/api/market-data', (req, res) => {
    res.json(marketData);
});

// Spesifik veri endpointleri
app.get('/api/crypto', (req, res) => {
    res.json(marketData.crypto);
});

app.get('/api/stocks', (req, res) => {
    res.json(marketData.stocks);
});

app.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor`);
}); 