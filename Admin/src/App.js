import React, { useContext } from 'react'
import './Assets/Style/Dark.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import List from './Pages/List/List'
import Single from './Pages/Single/Single'
import Create from './Pages/Create/Create'
import { productInputs, userInputs } from './Assets/Utils/FormSource'
import { DarkModeContext } from './Assets/Context/DarkModeContext'

function App() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List type='Users' />} />
              <Route path=':userId' element={<Single />} />
              <Route path='create' element={<Create inputs={userInputs} title='Add New User' />} />
            </Route>
            <Route path='movies'>
              <Route index element={<List type='Movies' />} />
              <Route path=':movieId' element={<Single />} />
              <Route path='create' element={<Create inputs={productInputs} title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
