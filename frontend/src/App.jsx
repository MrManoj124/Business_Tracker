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
    <main className="app-shell">
      <aside className="info-rail">
        <div className="rail-brand">BUSINESS<br /><span>TRACKER</span></div>
        <div className="rail-rule" />
        <p className="rail-kicker">WORKSPACE</p>
        <h1>Weekly<br />Report<br /><strong>Tracker</strong></h1>
        <p className="rail-copy">Keep your weekly priorities visible, current, and moving forward.</p>
        <div className="rail-meta">
          <div><span>VIEW</span><strong>{filter}</strong></div>
          <div><span>TOTAL TASKS</span><strong>{tasks.length}</strong></div>
        </div>
        <div className="rail-footer">BUSINESS OPERATIONS<br />2026 EDITION</div>
      </aside>

      <section class