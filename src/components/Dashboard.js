function Dashboard({ tasks = [] }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const pendingTasks = tasks.filter(
    (task) => task.status !== "Completed"
  ).length;

  return (
    <div className="dashboard">
      <h3>Dashboard Summary</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed: {completedTasks}</p>
      <p>Pending: {pendingTasks}</p>
    </div>
  );
}

export default Dashboard;