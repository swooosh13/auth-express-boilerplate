const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = function (roles) {
  return function (req, res, next) {
    let decodeData;
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(400).json({
          message: 'user is not logged in.'
        })
      }

      const {role} = jwt.verify(token, secret);
      let hasRole = false;
      if (roles.includes(role)){
        hasRole = true;
      }

      if (!hasRole) {
        return res.status(400).json({
          message: "you don't have enough rights."
        })
      }

      next();
    } catch (e) {
      console.log(decodeData);
      console.log(e);
    }
  }
}