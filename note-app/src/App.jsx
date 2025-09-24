import { useState } from 'react'
import Nav from './components/Nav'
import Notecard from './components/Notecard'
import './App.css'

function App() {
  const [notes, setNotes] = useState([
    "This is your first note",
    "Welcome to the notes app!"
  ]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddNote() {
    if (inputValue.trim() !== "") {
      setNotes([...notes, inputValue]);
      setInputValue("");
    }
  }

  return (
    <>
      <Nav />
      <div className="add-note-container">
        <input
          type="text"
          placeholder="Type your note..."
          value={inputValue}
          onChange={handleChange}
          aria-label="Note input"
        />
        <button className="add-note-btn" onClick={handleAddNote}>+</button>
      </div>
      <div className="notes-center-container">
        {notes.map((note, index) => (
          <Notecard key={index} text={note} />
        ))}
      </div>
    </>
  )
}

export default App
