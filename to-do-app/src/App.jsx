import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import './App.css'
import TaskInput from './components/TaskInput'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a single page react App", completed: false },
    { id: 3, text: "Complete the Assignment", completed: false },
  ])
  const [newTaskText, setNewTaskText] = useState('')

  function addTask() {
    if (newTaskText.trim() !== '') {
      let newTask = { id: Date.now(), text: newTaskText, completed: false }
      setTasks([...tasks, newTask])
      setNewTaskText('')
    }
  }

  function toggleTaskCompletion(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter(task => task.id !== id)
    )
  }

  return (
    <div className="App">
      <h1>To-Do App</h1>
      {/* Input box + Add button */}
      <TaskInput newTaskText={newTaskText}
        setNewTaskText={setNewTaskText}
        addTask={addTask} />
      {/*Task List */}

      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask} />

    </div>

  )
}

export default App
