import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  // ✅ Load from localStorage FIRST
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [darkMode, setDarkMode] = useState(false);


  // ✅ Only SAVE when tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  let filteredTasks = tasks.filter((task) => {
    return (
      (statusFilter === "All" || task.status === statusFilter) &&
      (priorityFilter === "All" || task.priority === priorityFilter)
    );
  });

  if (sortOrder === "asc") {
    filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (sortOrder === "desc") {
    filteredTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  }

return (
  <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
  <Header darkMode={darkMode} setDarkMode={setDarkMode} />

  <div className="content-wrapper">
    <TaskForm addTask={addTask} />

    <FilterBar
      statusFilter={statusFilter}
      setStatusFilter={setStatusFilter}
      priorityFilter={priorityFilter}
      setPriorityFilter={setPriorityFilter}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />

    <TaskList
      tasks={filteredTasks}
      deleteTask={deleteTask}
      updateTask={updateTask}
    />

    <Dashboard tasks={tasks} />
  </div>

  <Footer />
</div>

);



}

export default App;
