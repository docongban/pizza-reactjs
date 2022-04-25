import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/category/:id' element={<Home/>} />
        <Route path='/search/:text' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App