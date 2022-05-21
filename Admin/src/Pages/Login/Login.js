import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
  }

  return (
    <div className='login'>
      <form className='loginForm'>
        <input type='email' placeholder='Enter Email' className='loginInput' onChange={e => setEmail(e.target.value)} />
        <input type='password' placeholder='Enter Password' className='loginInput' onChange={e => setPassword(e.target.value)} />
        <button className='loginBtn' onClick={handleLogin}>
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
