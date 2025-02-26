const jwt = require('jsonwebtoken'); // Changed from import to require
const config = require('config');

module.exports = function auth(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};