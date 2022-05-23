import axios from 'axios'
import { getListsFailure, getListsStart, getListsSuccess } from './ListActions'

export const getLists = async listDispatch => {
  listDispatch(getListsStart())
  try {
    const response = await axios.get('/lists', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    listDispatch(getListsSuccess(response.data))
  } catch (e) {
    listDispatch(getListsFailure())
  }
}
