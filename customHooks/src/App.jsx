import { useState } from 'react'
import DogGallery from './components/DogGallery'
import DogImage from './components/DogImage'
import './App.css'

function App() {


  return (
    <div style={{ fontFamily: "Poppins, Arial", padding: "20px", textAlign: "center" }}>
      <h1>🐕‍🦺 Custom Hook Demo – useFetch</h1>
      <p>
        Demonstrating how the same <strong>custom hook</strong> can be reused in multiple components.
      </p>

      <hr style={{ width: "50%", margin: "20px auto", borderColor: "#007bff" }} />

      <DogImage />

      <hr style={{ width: "50%", margin: "20px auto", borderColor: "#007bff" }} />

      <DogGallery />
    </div>
  )
}

export default App
