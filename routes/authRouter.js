const Router = require('express');
const router = new Router();
const { check } = require("express-validator");

const authController = require('../controllers/authController');

router.post('/registration', [
  check('email', "email must be non empty").notEmpty(),
  check('password', "password must be more 2 symbols").isLength({ min: 2, max: 24 })
], authController.registration);

router.post('/login', authController.login);

module.exports = router;