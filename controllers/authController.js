const db = require('../db');
const bcrypt = require("bcryptjs");

const { validationResult } = require("express-validator");
const generateAcessToken = require('../generateAccessToken');

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "validation error.",
          errors
        });
      }

      const { email, password } = req.body;
      console.log("email: ", email);

      const candidate = await db.query(`SELECT * FROM users where email = '${email}'`);

      if (candidate.rows.length) {
        return res.status(400).json({
          message: "user already exists."
        })
      }
      const hashPassword = bcrypt.hashSync(password, 7);

      const username = 'user:' + email;
      await db.query("INSERT INTO users (email, password, username) values ($1, $2, $3) RETURNING *", [email, hashPassword, username]);
      return res.json({
        message: "user registered successfully."
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({
        message: "registration error."
      })
    }
  }

  async login(req, res) {
    let validPassword;
    let token;
    try {
      const { email, password } = req.body;

      const findUser = await db.query(`SELECT * FROM users where email = '${email}'`);
      if (!findUser.rows.length) {
        return res.status(400).json({
          message: "user does not exist with this email."
        });
      }

      validPassword = bcrypt.compareSync(password, findUser.rows[0].password);

      if (!validPassword) {
        return res.status(400).json({
          message: "incorrect password entered"
        });
      }

      token = generateAcessToken(findUser.rows[0].id, findUser.rows[0].role, findUser.rows[0].email);
      return res.json({
        token
      });

    } catch (e) {
      console.log(token);
      console.log("login error.");
    }
  }
}

module.exports = new authController();