import TaskItem from './TaskItem';

export default function TaskList({ tasks, onStatusChange, onDelete }) {
  if (tasks.length === 0) {
    return <p className="task-list-empty">No tasks found.</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
      ))}
    </div>
  );
}