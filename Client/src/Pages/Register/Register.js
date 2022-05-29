import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = async e => {
    e.preventDefault()
    setPassword(passwordRef.current.value)
    setUsername(usernameRef.current.value)
    try {
      await axios.post('api/auth/register', { email, username, password })
      navigate('/login')
    } catch (e) {}
  }

  return (
    <div className='register'>
      <div className='top'>
        <img src={require('../../Assets/Images/netflix-logo.png')} className='register-logo' alt='' />
        <Link to='/login'>
          <button className='login-btn'>Sign In</button>
        </Link>
      </div>
      <div className='register-container'>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        {!email ? (
          <div className='register-input'>
            <input type='email' placeholder='Email address' ref={emailRef} />
            <button className='register-btn' onClick={handleStart}>
              Get Started {'>'}
            </button>
          </div>
        ) : (
          <form className='register-input-2'>
            <input type='username' placeholder='Enter Username' ref={usernameRef} />
            <input type='password' placeholder='Enter password' ref={passwordRef} />
            <button className='register-btn-2' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register
