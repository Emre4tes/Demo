const express = require('express');
const router = express.Router();

// Dummy data for demonstration
const yurtlar = [
  { id: '1', name: 'Özel İnsan Vakfı Yediveren Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 1', capacity: 100, price: 1500, description: 'Description of Yurt 1' },
  { id: '2', name: 'Özel İnsan Vakfı Akif Emre Yükseköğretim Erkek Öğrenci Yurdu', address: 'Address 2', capacity: 150, price: 1700, description: 'Description of Yurt 2' },
  // Add more yurts here
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
