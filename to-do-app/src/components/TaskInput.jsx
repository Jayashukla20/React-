import React from 'react'

const TaskInput = ({newTaskText, setNewTaskText, addTask}) => {

  return (
    <div>
        <input
        type="text"
        value={newTaskText}
        onChange={event => setNewTaskText(event.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

        
  
    </div>
  )
}

export default TaskInput