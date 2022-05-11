import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <div className='top'>
        <img src={require('../../Assets/Images/netflix-logo.png')} className='login-logo' alt='' />
      </div>
      <div className='login-container'>
        <form className='login-form'>
          <h1>Sign In</h1>
          <input type='email' placeholder='Email or phone number' />
          <input type='password' placeholder='Password' />
          <button className='login-btn'>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now</b>.
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
