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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <input
        type="text"
        placeholder="Enter task title (e.g. Weekly Report)..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', fontSize: '14px' }}
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
        style={{ padding: '8px', fontSize: '14px' }}
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>
      <button type="submit" style={{ padding: '8px 12px', cursor: 'poi