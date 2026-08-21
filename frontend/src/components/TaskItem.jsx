import { FiCheckCircle, FiClock, FiTrash2 } from 'react-icons/fi';

export default function TaskItem({ task, onStatusChange, onDelete }) {
  const isCompleted = task.status === 'completed';

  const priorityColors = {
    low: '#888',
    medium: '#d97706', // orange
    high: '#dc2626'    // red
  };

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <div className="task-details">
        <h4>
          {task.title}
          <span className="priority-badge" style={{ '--priority-color': priorityColors[task.priority] || '#888' }}>
            {task.priority}
          </span>
        </h4>
        <span className="task-status">{isCompleted ? 'Completed' : 'In progress'}</span>
      </div>
      <div className="task-actions">
        <button
          onClick={() => onStatusChange(task._id, isCompleted ? 'pending' : 'completed')}
          className="status-btn"
          aria-label={isCompleted ? 'Mark task pending' : 'Mark task completed'}
        >
          {isCompleted ? <FiClock color="orange" /> : <FiCheckCircle color="green" />}
        </button>
        <button onClick={() => onDelete(task._id)} className="delete-btn" aria-label="Delete task">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}