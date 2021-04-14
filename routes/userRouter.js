const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// /api/user?id=2
router.get('/user', authMiddleware, roleMiddleware(['ADMIN']), userController.getUser)

router.delete('/user/:id',authMiddleware, roleMiddleware(['ADMIN']),  userController.deleteUser);
router.put('/user', authMiddleware, roleMiddleware(['ADMIN']), userController.updateUser);

module.exports = router;