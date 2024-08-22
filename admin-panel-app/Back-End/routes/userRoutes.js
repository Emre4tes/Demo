// routes/userRoutes.js

const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { loginUser } = require('../controllers/userController');

const router = express.Router();

// Giriş işlemi için route
router.post('/login', loginUser);

// Korunan route
router.get('/protected-route', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user.username}`, user: req.user });
});

module.exports = router;
