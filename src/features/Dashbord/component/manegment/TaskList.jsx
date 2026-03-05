import { useTask } from "./TaskContext";

function TaskList() {
  const { state } = useTask();

  return (
    <div>
      {state.tasks.map(task => (
        <div key={task.id} className="card p-2 mb-2">
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default TaskList;