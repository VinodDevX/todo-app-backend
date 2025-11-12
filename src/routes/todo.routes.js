import express from 'express';
import { validateRequest } from '../middlewares/validate.middleware.js';
import { todoSchema } from '../validations/todo.validation.js';
import { createTodo as todo } from '../controllers/todo.controller.js'; 

const router = express.Router();

router.post('/createTodo', validateRequest(todoSchema), todo);

export default router;



