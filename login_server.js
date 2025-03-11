require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB bağlantısı 
mongoose.connect('mongodb://127.0.0.1:27017/loginDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Kullanıcı şema modeli
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// Kayıt olma endpoint'i
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });

    try {
        await user.save();
        res.json({ message: 'Kayıt başarılı!' });
    } catch (err) {
        res.status(500).json({ error: 'Kayıt başarısız!' });
    }
});

// Giriş yapma endpoint'i
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(400).json({ error: 'Kullanıcı bulunamadı!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Şifre yanlış!' });
    }

    const token = jwt.sign({ username }, 'gizliAnahtar', { expiresIn: '1h' });
    res.json({ message: 'Giriş başarılı!', token });
});

// Sunucuyu başlat
app.listen(5000, () => {
    console.log('Server 5000 portunda çalışıyor');
});
