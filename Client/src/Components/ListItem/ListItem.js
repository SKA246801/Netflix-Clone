import React, { useEffect, useState } from 'react'
import './ListItem.css'
import axios from 'axios'

function ListItem({ item }) {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`api/movies/find/${item}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(sessionStorage.getItem('user')).accessToken,
          },
        })
        setMovie(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    getMovie()
  }, [item])

  return (
    <>
      <div className='list-item'>
        {!movie && <h3>Movie is loading</h3>}
        {movie && <img src={movie.img} className='movie-img' alt='' data-id={movie._id} />}
      </div>
    </>
  )
}

export default ListItem
