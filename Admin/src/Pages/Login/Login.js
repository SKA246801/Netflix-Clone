import React, { useContext, useState } from 'react'
import './Login.css'
import { AuthContext } from '../../Assets/Context/Auth/AuthContext'
import { login } from '../../Assets/Context/Auth/AuthAPICalls'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isFetching, authDispatch } = useContext(AuthContext)

  const handleLogin = e => {
    e.preventDefault()
    login({ email, password }, authDispatch)
  }

  return (
    <div className='login'>
      <form className='loginForm'>
        <input type='email' placeholder='Enter Email' className='loginInput' onChange={e => setEmail(e.target.value)} />
        <input type='password' placeholder='Enter Password' className='loginInput' onChange={e => setPassword(e.target.value)} />
        <button className='loginBtn' onClick={handleLogin} disabled={isFetching}>
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
