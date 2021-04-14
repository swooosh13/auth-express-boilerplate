const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(400).json({
        message: "user is not logged in."
      })
    }

    const decodeData = jwt.verify(token, secret);
    req.user = decodeData;

    next();
  } catch (e) {
    return res.status(400).json({
      message: "user is not logged in."
    })
  }
}