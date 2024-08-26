const express = require('express');
const router = express.Router();

// Dummy data for demonstration
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

// Get all yurts
router.get('/yurtlar', (req, res) => {
  res.json(yurtlar);
});

// Get yurt by ID
router.get('/yurtlar/:id', (req, res) => {
  const yurt = yurtlar.find(y => y.id === req.params.id);
  if (yurt) {
    res.json(yurt);
  } else {
    res.status(404).send('Yurt not found');
  }
});

module.exports = router;
