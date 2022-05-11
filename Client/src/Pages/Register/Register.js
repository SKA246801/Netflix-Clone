import React, { useRef, useState } from 'react'
import './Register.css'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }

  return (
    <div className='register'>
      <div className='top'>
        <img src={require('../../Assets/Images/netflix-logo.png')} className='register-logo' alt='' />
        <button className='login-btn'>Sign In</button>
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
          <form className='register-input'>
            <input type='password' placeholder='Enter password' ref={passwordRef} />
            <button className='register-btn' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Register
