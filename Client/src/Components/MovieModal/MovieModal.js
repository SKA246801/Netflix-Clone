import React, { useRef } from 'react'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function MovieModal({ showModal, setShowModal, movie }) {
  const modalRef = useRef()

  console.log(showModal)
  console.log(movie)

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
            <video src={movie.trailer} autoPlay={true} loop className='movie-trailer' />
            <div className='item-info'>
              <div className='list-item-icons-container'>
                <Link to='/watch' state={movie}>
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
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MovieModal
