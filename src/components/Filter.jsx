// src/components/Filter.jsx
import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar tareas..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
