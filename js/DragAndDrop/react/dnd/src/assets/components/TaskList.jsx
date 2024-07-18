import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ title, tasks, onDragStart, onDragOver, onDrop }) => {
  return (
    <div
      className="task-list"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem 
            key={task.id}
            task={task}
            index={index}
            onDragStart={onDragStart}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
