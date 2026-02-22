import { useState } from "react";

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      priority,
      dueDate,
      status,
    };
    updateTask(updatedTask);
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    const updatedTask = { ...task, status: e.target.value };
    updateTask(updatedTask);
  };

  return (
    <div  className="task-item" style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <br /><br />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br /><br />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <br /><br />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <br /><br />

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <br /><br />

          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Due Date: {task.dueDate}</p>

          <label>Status: </label>
<select value={task.status} onChange={handleStatusChange}>
  <option>To Do</option>
  <option>In Progress</option>
  <option>Completed</option>
</select>

<p className={task.status === "Completed" ? "status-completed" : "status-pending"}>
  Status: {task.status}
</p>

<br />

<div className="task-buttons">
  <button onClick={() => setIsEditing(true)}>Edit</button>
  <button onClick={() => deleteTask(task.id)}>Delete</button>
</div>

        </>
      )}
    </div>
  );
}

export default TaskItem;
