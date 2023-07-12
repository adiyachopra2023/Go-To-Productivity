import React, { useState, useEffect } from 'react';
import './ToDoList.css';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  useEffect(() => {
    // Retrieve tasks from localStorage on component mount
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever the tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return;
    }
    const newTask = {
      id: Date.now(),
      content: task,
      completed: false, // Add completed property to the task
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask('');
  };

  const handleTaskComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          // Toggle the completed property of the completed task
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
    setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1); // Increment completed tasks
  };

  const handleTaskDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1); // Decrement completed tasks
  };

  const totalTasks = tasks.length;
  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const productivity = totalTasks === 0 ? 0 : (completedTasksCount / totalTasks) * 100;

  return (
    <div className="todo-list">
      <h2 className="todo-header">To-Do List</h2>
      <form onSubmit={handleFormSubmit}>
        <input className="todo-input" type="text" value={task} onChange={handleInputChange} placeholder="Add a task" />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li className={`todo-item ${task.completed ? 'completed' : ''}`} key={task.id}>
            {task.content}
            {!task.completed && (
              <button className="btn1" onClick={() => handleTaskComplete(task.id)}>
                Completed
              </button>
            )}
            <button className="btn1" onClick={() => handleTaskDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="tiles-container">
        {/* Completed tasks tile */}
        <div className="tile">
          <div className="tile-header">Completed Tasks</div>
          <div className="tile-content completed-tasks">{completedTasksCount}/{totalTasks}</div>
        </div>

        {/* Productivity tile */}
        <div className="tile">
          <div className="tile-header">Productivity</div>
          <div className="tile-content productivity">{productivity.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
