import React, { useState } from 'react';

const tarefas = [ {
  description:"Escovar os dentes",
  isDone: true
},
{
  description: "Ir ao trabalho",
  isDone: true
},
{
  description: "Estudar",
  isDone: true
},
{ 
description: "Fazer exercicios",
isDone: true
}
];

const App = () => {
  const [tasks, setTasks] = useState(tarefas);

  const handleTaskToggle = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => handleTaskToggle(index)}
          />
          <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>{task.description}</span>
        </div>
      ))}
    </div>
  );
};

export default App;