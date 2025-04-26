import express from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controllers/UserController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getCurrentUser);

export default router;
