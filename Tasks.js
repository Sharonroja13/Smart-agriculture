import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!title) return alert("Enter task name");

    await axios.post('http://localhost:5000/api/tasks', {
      title
    });

    setTitle('');
    fetchTasks();
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  // Mark as completed
  const markComplete = async (id) => {
  try {
    await axios.put(`http://127.0.0.1:5000/api/tasks/${id}`, {
      completed: true
    });
    fetchTasks();
  } catch (error) {
    console.error("ERROR:", error.response?.data);
  }
};

  return (
    <div className="container">
      <h2>Tasks 📋</h2>

      {/* Add Task */}
      <input
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {/* Task List */}
      {tasks.map(task => (
        <div className="crop-card" key={task._id}>
          <p><b>Title:</b> {task.title}</p>

          <p>
            <b>Status:</b> {task.completed ? "✅ Completed" : "⏳ Pending"}
          </p>

          {!task.completed && (
            <button onClick={() => markComplete(task._id)}>
              Mark Completed
            </button>
          )}

          <button onClick={() => deleteTask(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;