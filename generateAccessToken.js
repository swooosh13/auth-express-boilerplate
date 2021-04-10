const jwt = require('jsonwebtoken');
const {secret} = require('./config');

const generateAcessToken = (id, email) => {
  const payload = {
    id,
    email
  };

  // TODO delete 24 h
  return jwt.sign(payload, secret, { expiresIn: "24h" });
}

module.exports = generateAcessToken;