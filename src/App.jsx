import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/category/:id' element={<Home/>} />
        <Route path='/search/:text' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App