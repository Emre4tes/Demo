// server.js

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // userRoutes dosyasını içe aktarıyoruz

const app = express();
const port = 3000;
const SECRET_KEY = '3b5c6d1e-8a6a-44c8-9baf-7a2b4c1e9c59';
const saltRounds = 10;

// Middleware'leri ekliyoruz
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(bodyParser.json());

let users = [
  { username: 'emre', password: bcrypt.hashSync('14989Agony', saltRounds) },
  { username: 'MFS', password: bcrypt.hashSync('41602Adıyaman', saltRounds) },
  { username: 'Ramo', password: bcrypt.hashSync('41221Diyarbakır', saltRounds) },
  { username: 'Mutlu', password: bcrypt.hashSync('47875Ardahan', saltRounds) },
  { username: 'Seyit', password: bcrypt.hashSync('45252Ordu', saltRounds) }
];


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);//Gelen kullanıcı adıyla eşleşen kullanıcıyı buluyoruz.

  if (user && bcrypt.compareSync(password, user.password)) {//bcrypt.compareSync Kullanıcının girdiği şifreyi veritabanındaki hash'lenmiş şifreyle karşılaştırır.
    const token = jwt.sign({ username: user.username }, SECRET_KEY);//Kullanıcı adına dayalı bir JWT token oluşturur.
    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Kullanıcı rotalarını ekliyoruz
app.use('/api/login', userRoutes);

// 404 hatası için route
app.use((_req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Sunucuyu başlatıyoruz
app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
