import React, { useContext } from 'react'
import './Assets/Style/Dark.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import List from './Pages/List/List'
import Single from './Pages/Single/Single'
import Create from './Pages/Create/Create'
import { listInputs, movieInputs, userInputs } from './Assets/Utils/FormSource'
import { DarkModeContext } from './Assets/Context/Dark/DarkModeContext'
import { AuthContext } from './Assets/Context/Auth/AuthContext'
import CreateList from './Pages/CreateList/CreateList'

function App() {
  const { darkMode } = useContext(DarkModeContext)
  const { user } = useContext(AuthContext)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='login' element={user ? <Navigate to='/' /> : <Login />} />
            <Route path='users'>
              <Route index element={user ? <List type='Users' /> : <Navigate to='/login' />} />
              <Route path=':userId' element={user ? <Single type='user' /> : <Navigate to='/login' />} />
              <Route path='create' element={user ? <Create inputs={userInputs} title='Add New User' /> : <Navigate to='/login' />} />
            </Route>
            <Route path='movies'>
              <Route index element={user ? <List type='Movies' /> : <Navigate to='/login' />} />
              <Route path=':movieId' element={user ? <Single type='movie' /> : <Navigate to='/login' />} />
              <Route path='create' element={user ? <Create inputs={movieInputs} title='Add New Movie' /> : <Navigate to='/login' />} />
            </Route>
            <Route path='lists'>
              <Route index element={user ? <List type='Lists' /> : <Navigate to='/login' />} />
              <Route path=':listid' element={user ? <Single type='list' /> : <Navigate to='/login' />} />
              <Route path='create' element={user ? <CreateList inputs={listInputs} title='Add New List' /> : <Navigate to='/login' />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
