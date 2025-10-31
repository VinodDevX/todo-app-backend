import express from 'express';
import { signup, login } from '../controllers/user.controller.js';
import { signupSchema, loginSchema } from '../validations/user.validation.js';
import { validateRequest } from '../middlewares/validate.middleware.js';

const router = express.Router();

router.post('/signup', validateRequest(signupSchema), signup);
router.post('/login', validateRequest(loginSchema), login);

export default router;
