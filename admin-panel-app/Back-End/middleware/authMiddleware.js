// authMiddleware.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = '3b5c6d1e-8a6a-44c8-9baf-7a2b4c1e9c59';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log('Token required');
    return res.status(403).json({ message: 'Token required' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log('Invalid token', err);
      return res.status(403).json({ message: 'Invalid token' });
    }
    console.log('Token is valid', user);
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
