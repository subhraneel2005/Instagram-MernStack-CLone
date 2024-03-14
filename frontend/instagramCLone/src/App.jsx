import React from 'react'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register />}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App