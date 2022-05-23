import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../Assets/Context/Auth/AuthAPICalls'
import { AuthContext } from '../../Assets/Context/Auth/AuthContext'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { authDispatch } = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    login({ email, password }, authDispatch)
  }

  return (
    <div className='login'>
      <div className='top'>
        <img src={require('../../Assets/Images/netflix-logo.png')} className='login-logo' alt='' />
      </div>
      <div className='login-container'>
        <form className='login-form'>
          <h1>Sign In</h1>
          <input type='email' placeholder='Email or phone number' onChange={e => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
          <button className='login-btn' onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?{' '}
            <Link to='/register' style={{ textDecoration: 'none' }}>
              <b>Sign up now</b>.
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  )
}

export default Login
