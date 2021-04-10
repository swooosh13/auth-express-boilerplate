const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware')

// /user?id=2
router.get('/user', authMiddleware, userController.getUser)
router.delete('/user/:id', authMiddleware, userController.deleteUser);
router.put('/user', authMiddleware, userController.updateUser);

module.exports = router;