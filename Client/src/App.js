import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Watch from './Pages/Watch/Watch'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Home type='movies' />} />
          <Route path='/series' element={<Home type='series' />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
