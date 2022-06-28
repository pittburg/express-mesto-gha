const router = require('express').Router();
const {
  getUsers,
  getUserById,
  getCurrentUser,
  // createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:userId', getUserById);

// router.post('/users', createUser);
router.get('/users/me', getCurrentUser);

router.patch('/users/me', updateUserProfile);

router.patch('/users/me/avatar', updateUserAvatar);

module.exports = router;
