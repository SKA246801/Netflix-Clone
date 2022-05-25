import axios from 'axios'
import { loginStart, loginSuccess, loginFailure } from './AuthActions'

export const login = async (user, authDispatch) => {
  authDispatch(loginStart())
  try {
    const response = await axios.post('api/auth/login', user)
    authDispatch(loginSuccess(response.data))
  } catch (e) {
    authDispatch(loginFailure())
  }
}
