import express from 'express';
import { signup, login,checkEmail } from '../controllers/user.controller.js';
import { signupSchema, loginSchema } from '../validations/user.validation.js';
import { validateRequest } from '../middlewares/validate.middleware.js';

const router = express.Router();

router.post('/signup', validateRequest(signupSchema), signup);
router.post('/login', validateRequest(loginSchema), login);
router.post('/check-email', checkEmail);

export default router;
