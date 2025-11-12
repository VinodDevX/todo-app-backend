import Todo from '../models/todo.model.js';

export const createTodo = async (req, res) => {
    try {
        const { title, discription, status, startDate, endDate } = req.body;

        const todo = await Todo.create({ title, discription, status, startDate, endDate });
        console.log('New todo created:', todo);

        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};