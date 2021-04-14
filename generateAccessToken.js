const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const generateAcessToken = (id, role, email) => {
  const payload = {
    id,
    role,
    email
  };

  // TODO none expiresIn for submitted;
  return jwt.sign(payload, secret, { expiresIn: "1d" });
}

module.exports = generateAcessToken;