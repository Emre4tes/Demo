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

const yurtlar = [
  { id: '1', name: 'Yediveren Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 1', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '2', name: 'Akif Emre Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 2', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '2', name: 'Aksa Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 4', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '4', name: ' Alanya Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 5', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '5', name: 'Efeler Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 6', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '6', name: ' Bolu Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 7', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '7', name: 'Ramazan Karaalp Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 8', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '8', name: 'Kayapınar Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 9', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '9', name: 'Erzincan Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 10', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '10', name: 'Atatürk Üniversitesi Süheyla Sıtkı Alp Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 11', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '11', name: 'Isparta Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 12', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '12', name: ' Prof. Dr. Ahmet Haluk Dursun Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 13', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '13', name: 'Maltepe Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 14', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '14', name: 'Ihlamurkuyu Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 15', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '15', name: 'Metin Yüksel Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 16', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '16', name: 'Mehmet Akif Ersoy Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 17', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '17', name: 'Bakırköy Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 18', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '18', name: 'Bahçelievler Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 19', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '19', name: 'Bahçelievler Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 20', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '20', name: 'Şehit Bahattin Yıldız Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 21', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '21', name: ' Nevres Ongun Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 22', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '22', name: 'Medeniyet Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 23', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '23', name: 'Vefa Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 24', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '24', name: 'Mavera Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 24', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '25', name: 'Vera Yükseköğretim Kız Öğrenci Yurdu', address: 'Address 24', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  { id: '26', name: 'Diriliş Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 24', capacity: 150, price: 1700, description: 'Description of Yurt 2' },

];

app.use(express.json());

// Yurt detayları için endpoint
app.get('/api/yurtlar/:id', (req, res) => {
  const yurtId = parseInt(req.params.id, 10);
  const yurt = yurtlar.find(y => y.id === yurtId);
  if (yurt) {
    res.json(yurt);
  } else {
    res.status(404).json({ message: 'Yurt bulunamadı' });
  }
});


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
