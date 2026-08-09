import TaskItem from './TaskItem';

export default function TaskList({ tasks, onStatusChange, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
      ))}
    </div>
  );
}