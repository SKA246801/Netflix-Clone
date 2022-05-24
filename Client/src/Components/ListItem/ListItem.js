import React, { useEffect, useState } from 'react'
import './ListItem.css'

import axios from 'axios'
import MovieModal from '../MovieModal/MovieModal'

function ListItem({ item }) {
  const [movie, setMovie] = useState(null)

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`/movies/find/${item}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
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
    <div className='list-item' onClick={openModal}>
      {!movie && <h3>Movie is loading</h3>}
      {movie && (
        <>
          <img src={movie.img} className={showModal ? 'movie-img hideImg' : 'movie-img'} alt='' />
        </>
      )}
      <MovieModal showModal={showModal} setShowModal={setShowModal} movie={movie} />
    </div>
  )
}

export default ListItem
