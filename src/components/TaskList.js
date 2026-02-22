import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div className="task-list-box">
      <h3>Task List</h3>

      <div className="task-grid">
        {tasks.length === 0 && <p>No tasks yet</p>}

        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
