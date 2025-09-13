// src/components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <div>{task.name}</div>
      <div>{task.completed ? 'Completada' : 'Pendiente'}</div>
      <div>Autor: {task.author}</div>
    </li>
  );
};

export default TaskItem;
