import React from 'react';

const TaskItem = ({ task, index, onDragStart }) => {
  return (
    <li
      draggable
      onDragStart={(event) => onDragStart(event, index)}
      className="task"
    >
      {task.name}
    </li>
  );
};

export default TaskItem;
