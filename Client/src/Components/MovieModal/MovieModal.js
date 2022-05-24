import React, { useEffect, useRef, useState } from 'react'
import './MovieModal.css'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import axios from 'axios'

function MovieModal({ showModal, setShowModal, movieId }) {
  const modalRef = useRef()
  const [movie, setMovie] = useState(null)
  console.log(movieId)

  useEffect(() => {
    setMovie(null)
    const getMovie = async () => {
      try {
        const response = await axios.get(`/movies/find/${movieId}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        })
        setMovie(response.data)
        console.log(movie)
      } catch (e) {
        console.log(e)
      }
    }
    if (movieId) {
      getMovie()
    }
  }, [movieId])

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  return (
    <>
      {showModal ? (
        <div className='modalBackdrop' ref={modalRef} onClick={closeModal}>
          <div className='modalContainer'>
            {!movie && <h1>Movie is loading</h1>}
            {movie && (
              <div className='item-info'>
                <img src={movie.img} className='movie-img' alt='' />
                <div className='list-item-icons-container'>
                  <Link to='/watch' state={movie} style={{ color: 'white' }}>
                    <PlayArrow className='list-item-icon' />
                  </Link>
                  <Add className='list-item-icon' />
                  <ThumbUpOffAltOutlined className='list-item-icon' />
                  <ThumbDownAltOutlined className='list-item-icon' />
                </div>
                <div className='item-info-top'>
                  <span>{movie.duration}</span>
                  <span className='age-limit'>{movie.ageLimit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className='movie-description'>{movie.description}</div>
                <div className='list-item-genre'>{movie.genre}</div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MovieModal
