import express from 'express'
import { allUser, createUser, deleteUser, singleUser, updateUser, userLogin, getLoggedInUser, userAccountVerified,  } from '../controllers/userController.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';
import { userhMiddleware } from '../middlewares/userMiddleware.js';
const router = express.Router();



// User Login Route
router.route('/login').post(userLogin);
router.route('/register').post(createUser);
router.route('/me').get(getLoggedInUser);
router.route('/verify').post(userAccountVerified);

// students route manage
router.route('/').get( authMiddleware, allUser).post(authMiddleware, createUser)
router.route('/:id').get(adminMiddleware, singleUser).patch(userhMiddleware, updateUser).put( adminMiddleware,updateUser).delete(adminMiddleware, deleteUser)

export default router