// src/pages/TasksPage.jsx
import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TasksPage = () => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default TasksPage;
