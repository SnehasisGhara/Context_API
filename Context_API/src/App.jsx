import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">
         Context API In React
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  
  )
}

export default App
