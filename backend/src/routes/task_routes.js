import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/task_controller.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;


// For postman testing, you can use the following endpoints:
// GET: http://localhost:5000/api/tasks?status=completed
// POST: http://localhost:5000/api/tasks
// PATCH: http://localhost:5000/api/tasks/:id
// DELETE: http://localhost:5000/api/tasks/:id