import express from 'express';
import userRoutes from './auth.routes.js';

const router = express.Router();

router.use('/users', userRoutes); // /api/users/signup, /api/users/login , /api/users/check-email

export default router;
