import { FiCheckCircle, FiClock, FiTrash2 } from 'react-icons/fi';

export default function TaskItem({ task, onStatusChange, onDelete }) {
  const isCompleted = task.status === 'completed';

  const priorityColors = {
    low: '#888',
    medium: '#d97706', // orange
    high: '#dc2626'    // red
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '12px',
        borderRadius: '6px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isCompleted ? '#f0fff0' : '#fff',
      }}
    >
      <div>
        <h4 style={{ margin: 0, textDecoration: isCompleted ? 'line-through' : 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          {task.title}
          <span style={{ 
            fontSize: '11px', 
            padding: '2px 6px', 
            borderRadius: '12px', 
            backgroundColor: priorityColors[task.priority] || '#ccc',
            color: 'white',
            textDecoration: 'none'
          }}>
            {task.priority}
          </span>
        </h4>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button
          onClick={() => onStatusChange(task._id, isCompleted ? 'pending' : 'completed')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          {isCompleted ? <FiClock color="orange" /> : <FiCheckCircle color="green" />}
          {isCompleted ? 'Mark Pending' : 'Mark Completed'}
        </button>
        <button onClick={() => onDelete(task._id)} style={{ cursor: 'pointer', color: 'red' }}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}