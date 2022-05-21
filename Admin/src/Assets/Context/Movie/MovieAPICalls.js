import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from './MovieActions'
import axios from 'axios'

export const getMovies = async movieDispatch => {
  movieDispatch(getMoviesStart())
  try {
    const response = await axios.get('/movies', {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    })
    movieDispatch(getMoviesSuccess(response.data))
  } catch (e) {
    movieDispatch(getMoviesFailure())
  }
}
