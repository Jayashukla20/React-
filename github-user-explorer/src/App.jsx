import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/viewUsers/:username",
      element: <UserCard />
    }
  ])

  return (
    <>
     <h1>🚀GitHub Users Explorer</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
