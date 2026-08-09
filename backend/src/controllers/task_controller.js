import * as taskService from '../services/task_service.js';

export const getTasks = async (req, res) => {
  try {
    const { status } = req.query;
    const tasks = await taskService.getAllTasks(status);
    res.status(200).json({ message: 'Tasks retrieved successfully', data: tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    
    if (!title) {
      // 400 Bad Request
      return res.status(400).json({ message: 'Task title is strictly required.' });
    }
    
    const task = await taskService.createNewTask({ title, description, priority });
    // 201 Created
    res.status(201).json({ message: 'Task successfully created!', data: task });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error during creation' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await taskService.updateTaskProgress(id, req.body);
    
    if (!updatedTask) {
      // 404 Not Found
      return res.status(404).json({ message: 'Task not found. It may have been deleted.' });
    }
    // 200 OK
    res.status(200).json({ message: 'Task status updated successfully', data: updatedTask });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task status' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await taskService.removeTask(id);
    
    if (!deletedTask) {
      // 404 Not Found
      return res.status(404).json({ message: 'Cannot delete: Task not found.' });
    }
    // 200 OK
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};