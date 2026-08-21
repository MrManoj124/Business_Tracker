import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function TaskForm({ onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onTaskCreated({ title, priority });
    setTitle('');
    setPriority('medium');
  };

  return (
    
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
        </select>
      </label>
      <button type="submit" className="add-task-btn">
        <FiPlus /> Add Task
      </button>
    </form>
  );
}