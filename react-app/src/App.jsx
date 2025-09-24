import { useState } from 'react'
import './App.css'
import Greet from './Components/Greet'

function App() {

  return (
    <>
      <Greet firstName="Jaya" lastName="Shukla" />
      <Greet firstName="Koushiki" lastName="Shukla" />
      <Greet firstName="Pavitra" lastName="kadari" />
    </>
  )
}

export default App
