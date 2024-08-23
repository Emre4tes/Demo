
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = '3b5c6d1e-8a6a-44c8-9baf-7a2b4c1e9c59';
const saltRounds = 10;

// Kullanıcı verilerini saklıyoruz (genellikle bir veritabanında olur)
let users = [
  { username: 'emre', password: bcrypt.hashSync(' ', saltRounds) },
  { username: 'MFS', password: bcrypt.hashSync('41602Adıyaman', saltRounds) },
  { username: 'Ramo', password: bcrypt.hashSync('41221Diyarbakır', saltRounds) },
  { username: 'Mutlu', password: bcrypt.hashSync('47875Ardahan', saltRounds) },
  { username: 'Seyit', password: bcrypt.hashSync('45252Ordu', saltRounds) }
];

// Login işlemi
const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username: user.username }, SECRET_KEY);
    res.status(200).json({ message: 'Login successful', token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = { loginUser };
