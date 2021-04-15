const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// /user?id=2
router.get('/user', authMiddleware, roleMiddleware(['ADMIN', 'SUPERUSER']), userController.getUser);

// /user/1
router.delete('/user/:id',authMiddleware, roleMiddleware(['ADMIN', 'SUPERUSER']),  userController.deleteUser);

// /user/1
router.put('/user', authMiddleware, roleMiddleware(['ADMIN', 'SUPERUSER']), userController.updateUsername);

router.put('/user/role', authMiddleware, roleMiddleware(['SUPERUSER']), userController.updateRole);
module.exports = router;