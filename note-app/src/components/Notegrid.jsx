import React from 'react'
import Notecard from './Notecard'
import './notegrid.css'

function Notegrid({ notes }) {
    return (
        <div className="notes-center-container">
            {notes.map((note, index) => (
                <Notecard key={index} text={note} />
            ))}
        </div>


    )
}

export default Notegrid
