import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: '' },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// schema for task priority and status
const taskPrioritySchema = new mongoose.Schema({
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
});


const Task = mongoose.model('Task', taskSchema);

export const getAllTasks = async (status) => {
  const query = status && status !== 'all' ? { status } : {};
  return await Task.find(query).sort({ createdAt: -1 });
};

export const createNewTask = async (taskData) => {
  return await Task.create(taskData);
};

export const updateTaskProgress = async (id, updates) => {
  return await Task.findByIdAndUpdate(id, updates, { new: true });
};

export const removeTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

export default taskPrioritySchema;