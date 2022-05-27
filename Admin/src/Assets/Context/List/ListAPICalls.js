import axios from 'axios'
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from './ListActions'

export const getLists = async listDispatch => {
  listDispatch(getListsStart())
  try {
    const response = await axios.get('/lists', {
      headers: {
        token: 'Bearer ' + JSON.parse(sessionStorage.getItem('user')).accessToken,
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
        token: 'Bearer ' + JSON.parse(sessionStorage.getItem('user')).accessToken,
      },
    })
    listDispatch(deleteListSuccess(id))
  } catch (e) {
    listDispatch(deleteListFailure())
  }
}

export const createList = async (list, listDispatch) => {
  listDispatch(createListStart())
  try {
    const response = await axios.post('/lists', list, {
      headers: {
        token: 'Bearer ' + JSON.parse(sessionStorage.getItem('user')).accessToken,
      },
    })
    listDispatch(createListSuccess(response.data))
  } catch (e) {
    listDispatch(createListFailure())
  }
}
