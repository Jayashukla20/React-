import { useState } from 'react'
import Login from './components/Login'
import './App.css'
import Logout from './components/Logout'
// import Logout from './components/Logout'

function App() {
  const [isLoggedIn, setIsLogeedIn] = useState(true)

  //  if(isLoggedIn){
  //   return<Logout/>
  //  }else{
  //   return<Login/>
  //  }
  // return (
  //   <div>{isLoggedIn ? <Logout /> : <Login />}</div>
  // )
  if(!isLoggedIn){
    return<Login/>
  }
  return(
    <div>{isLoggedIn&&<Logout/>}</div>
  )
}

export default App
