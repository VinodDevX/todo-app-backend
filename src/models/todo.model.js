import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    discription: { type: String, required: true },
    status: [{ type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' }],
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
}, { timestamps: true });


export default mongoose.model('Todo', todoSchema);
