import React from 'react'

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} 
      className={task.completed ? "completed-button" : ""}>
        Delete
      </button>
    </li>
  )
}

export default TaskItem
