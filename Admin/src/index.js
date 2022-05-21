import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './Assets/Context/Auth/AuthContext'
import { DarkModeContextProvider } from './Assets/Context/Dark/DarkModeContext'
import { MovieContextProvider } from './Assets/Context/Movie/MovieContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
