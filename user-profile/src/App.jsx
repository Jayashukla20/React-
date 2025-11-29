import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Akshay from './components/Akshay'
import Priya from './components/Priya'
import Tushar from './components/Tushar'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/akshay',
      element: <Akshay />
    },
    { 
      path: '/priya',
      element: <Priya />
    },
    {
      path: '/tushar',
      element: <Tushar />
    }
    
    
  ]
)
import './App.css'

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
