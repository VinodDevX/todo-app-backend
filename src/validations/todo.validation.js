import Joi from 'joi';

// todo validation
export const todoSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  discription: Joi.string().min(10).max(500).required(),
  status: Joi.string().valid('pending', 'in-progress', 'completed').required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().greater(Joi.ref('startDate')).required(),
});

