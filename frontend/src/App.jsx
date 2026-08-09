import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks, createTask, updateTaskStatus, deleteTask } from './services/taskApi';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [notification, setNotification] = useState(null);

  // Helper to trigger message banners
  const notify = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const loadTasks = async () => {
    try {
      const response = await fetchTasks(filter);
      // Ensure we map the nested data structure from the updated controller
      setTasks(response.data || []); 
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  const handleCreate = async (taskData) => {
    try {
      const response = await createTask(taskData);
      notify(response.message, 'success'); // Reads the 201 message
      loadTasks();
    } catch (err) {
      notify(err.message, 'error'); // Reads the 400 error message
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await updateTaskStatus(id, status);
      notify(response.message, 'success'); // Reads the 200 message
      loadTasks();
    } catch (err) {
      notify(err.message, 'error'); // Reads the 404 message
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTask(id);
      notify(response.message, 'success');
      loadTasks();
    } catch (err) {
      notify(err.message, 'error');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' ,backgroundColor:'#57595B'}}>
      <h2>Weekly Report Tracker</h2>
      
      {/* Notification Banner */}
      {notification && (
        <div style={{
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '4px',
          backgroundColor: notification.type === 'error' ? '#fee2e2' : '#dcfce7',
          color: notification.type === 'error' ? '#991b1b' : '#166534',
          border: `1px solid ${notification.type === 'error' ? '#f87171' : '#4ade80'}`
        }}>
          {notification.message}
        </div>
      )}

      <TaskForm onTaskCreated={handleCreate} />

      <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
        {['all', 'pending', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              fontWeight: filter === status ? 'bold' : 'normal',
              textTransform: 'capitalize',
              cursor: 'pointer',
              padding: '6px 12px'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
}

