import { FiCheckCircle, FiClock, FiTrash2 } from 'react-icons/fi';

export default function TaskItem({ task, onStatusChange, onDelete }) {
  const isCompleted = task.status === 'completed';

  const priorityColors = {
    low: '#888',
    medium: '#d97706', // orange
    high: '#dc2626'    // red
  };

  return (
    
          {isCompleted ? <FiClock color="orange" /> : <FiCheckCircle color="green" />}
        </button>
        <button onClick={() => onDelete(task._id)} className="delete-btn" aria-label="Delete task">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}