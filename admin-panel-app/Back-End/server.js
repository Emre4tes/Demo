const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;
const SECRET_KEY = '3b5c6d1e-8a6a-44c8-9baf-7a2b4c1e9c59';
const saltRounds = 10;//Parola hash'leme sırasında bcrypt'in kullanacağı tuzlama miktarını verdik deger ne kadar buyurse surede o kadar uzar.


app.use(cors({     //cors ayarlarını verdik
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // şifreyi diğer sunucuya göndererek, web sitesinin bu veriye ulaşmasını sağladık.
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


app.use((_req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});


app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});


/*
Bu Express.js tabanlı backend API, kullanıcı doğrulama işlemlerini yönetmek amacıyla oluşturulmuş bir yapıdır.
cors ve bodyParser middleware'leri kullanılarak, farklı origin'lerden gelen isteklerin kabul edilmesi ve gelen
JSON verilerinin işlenmesi sağladım. Kullanıcı şifreleri, bcrypt kütüphanesi ile güvenli hale getirdim,
böylece veritabanında düz metin yerine hashlenmiş şifreler saklandı. Giriş yapan kullanıcılar,
JWT (JSON Web Token) kullanarak doğrulanmaktadır. Eğer kullanıcı adı ve şifre doğruysa, kullanıcıya bir token gönderilir.
Aksi halde, hatalı giriş denemesi için 401 hatası döndürülür.
*/
