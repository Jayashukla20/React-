import React from 'react'
import Foot from "./components/Foot.jsx"
import Head from  "./components/Head.jsx"
import Left from "./components/Left.jsx"
import Right from "./components/Right.jsx"
import "./App.css"
function App() {
  return (
    <>
      <Head/>
      <div className='flex'>
      <Left />
      <Right />
      </div>
      <Foot />
    </>
  )
}

export default App