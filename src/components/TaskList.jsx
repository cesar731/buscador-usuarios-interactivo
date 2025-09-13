// src/components/TaskList.jsx
import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import Filter from './Filter';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <Filter setFilter={setFilter} />
      <ul>
        {tasks
          .filter(task => task.name.toLowerCase().includes(filter.toLowerCase()))
          .map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
