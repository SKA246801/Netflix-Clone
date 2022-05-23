import axios from 'axios'
import { deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from './ListActions'

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

export const deleteList = async (id, listDispatch) => {
  listDispatch(deleteListStart())
  try {
    await axios.delete(`/lists/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    listDispatch(deleteListSuccess(id))
  } catch (e) {
    listDispatch(deleteListFailure())
  }
}
