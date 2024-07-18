import React, { useState } from 'react';
import './App.css';
import TaskList from './assets/components/TaskList';


const obtenerFecha = () => {
  const fechaActual = new Date();
  const diaSemana = fechaActual.getDay(); // Obtiene el índice del día de la semana (0 para domingo, 1 para lunes, etc.)
  const diasSemana = ['Domingo', 'lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const nombreDia = diasSemana[diaSemana];
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript son base 0, por lo que se suma 1
  const año = fechaActual.getFullYear();
  
  return(`${nombreDia}, ${dia}/${mes}/${año}`); // Formato: nombre del día, dd/mm/yyyy       
}

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Tarea 1' },
    { id: 2, name: 'Tarea 2' },
    { id: 3, name: 'Tarea 3' },
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [draggedTaskIndex, setDraggedTaskIndex] = useState(null);
  const [draggedTaskList, setDraggedTaskList] = useState(null);

  const onDragStart = (event, index, listType) => {
    setDraggedTaskIndex(index);
    setDraggedTaskList(listType);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, targetListType) => {
    event.preventDefault();

    if (draggedTaskList === targetListType) {
      if (targetListType === 'tasks') {
        const updatedTasks = [...tasks];
        const draggedTask = updatedTasks.splice(draggedTaskIndex, 1)[0];
        updatedTasks.splice(updatedTasks.indexOf(draggedTask) + 1, 0, draggedTask);
        setTasks(updatedTasks);
      } else if (targetListType === 'completedTasks') {
        const updatedCompletedTasks = [...completedTasks];
        const draggedTask = updatedCompletedTasks.splice(draggedTaskIndex, 1)[0];
        updatedCompletedTasks.splice(updatedCompletedTasks.indexOf(draggedTask) + 1, 0, draggedTask);
        setCompletedTasks(updatedCompletedTasks);
      }
    } else {
      if (draggedTaskList === 'tasks' && targetListType === 'completedTasks') {
        const updatedTasks = [...tasks];
        const [draggedTask] = updatedTasks.splice(draggedTaskIndex, 1);
        setTasks(updatedTasks);
        setCompletedTasks([...completedTasks, draggedTask]);
      } else if (draggedTaskList === 'completedTasks' && targetListType === 'tasks') {
        const updatedCompletedTasks = [...completedTasks];
        const [draggedTask] = updatedCompletedTasks.splice(draggedTaskIndex, 1);
        setCompletedTasks(updatedCompletedTasks);
        setTasks([...tasks, draggedTask]);
      }
    }

    setDraggedTaskIndex(null);
    setDraggedTaskList(null);
  };

  return (
    <div className="App">
      <h1>{obtenerFecha()}</h1>
      <div className="task-container">
        <TaskList
          title="Tareas Pendientes"
          tasks={tasks}
          onDragStart={(event, index) => onDragStart(event, index, 'tasks')}
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, 'tasks')}
        />
        <TaskList
          title="Tareas Completadas"
          tasks={completedTasks}
          onDragStart={(event, index) => onDragStart(event, index, 'completedTasks')}
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, 'completedTasks')}
        />
      </div>
    </div>
  );
};

export default App;
