import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Watch from './Pages/Watch/Watch'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import { AuthContext } from './Assets/Context/Auth/AuthContext'

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={user ? <Home /> : <Navigate to='/register' />} />
          <Route path='/movies' element={user ? <Home type='movie' /> : <Navigate to='/register' />} />
          <Route path='/series' element={user ? <Home type='series' /> : <Navigate to='/register' />} />
          <Route path='/watch' element={user ? <Watch /> : <Navigate to='/register' />} />
          <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
