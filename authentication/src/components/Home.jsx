import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to Auth Simulation 👋</h1>
      <p>
        This project demonstrates how to use <strong>React Context</strong> 
        to manage global Authentication and protect routes using <strong>React Router</strong>.
      </p>

      <div className='card'>
        <h2><strong>Concepts Covered</strong></h2>
        <div className='concepts'>
          <p>Context API & useContext</p>
          <p>Protected routes</p>
          <p>Custom hooks (useAuth)</p>
          <p>Conditional rendering</p>
        </div>
      </div>
    </div>
  )
}

export default Home
