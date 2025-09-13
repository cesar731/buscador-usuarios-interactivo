// src/components/TaskForm.jsx
import React, { useState } from 'react';
import { saveTasksToLocalStorage } from '../utils/localStorage';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [author, setAuthor] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: taskName,
      author: author,
      completed: completed,
    };

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);

    setTaskName('');
    setAuthor('');
    setCompleted(false);
  };

  return (
    <div>
      <h3>Crear Tarea</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>
          Completada:
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
        </label>
        <button type="submit">Crear Tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;
