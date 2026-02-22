import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !dueDate) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      status: "To Do",
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
  <h3>Add New Task</h3>

  <div className="task-input-box">
    <input
      type="text"
      placeholder="Task Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      placeholder="Task Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <select
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
    >
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <input
      type="date"
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
    />
  </div>

  <button type="submit" className="add-task-btn">Add Task</button>
</form>

  );
}

export default TaskForm;
