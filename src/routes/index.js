import express from 'express';
import userRoutes from './auth.routes.js';
import todoRoutes from './todo.routes.js';
const router = express.Router();

router.use('/users', userRoutes); // /api/users/signup, /api/users/login , /api/users/check-email
router.use('/todo', todoRoutes); // /api/users/signup, /api/users/login , /api/users/check-email

export default router;
