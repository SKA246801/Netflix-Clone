import React, { useEffect, useState } from 'react'
import './ListItem.css'

import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'
import axios from 'axios'
axios.defaults.headers = {
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
}

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`/movies/find/${item}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QxYmIxODMzNGUxZGRhZWQxZWRkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjM5MzkwNSwiZXhwIjoxNjUyNDAxMTA1fQ.nGlkGqD_YBSjdR3OTqUXs_WEdFF-HwTZty3iijIhWTQ',
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
    <div
      className='list-item'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!movie && <h3>Movie is loading</h3>}
      {movie && <img src={movie.img} className='movie-img' alt='' />}
      {isHovered && movie && (
        <>
          <video src={movie.trailer} autoPlay={true} loop className='movie-trailer' />
          <div className='item-info'>
            <div className='list-item-icons-container'>
              <PlayArrow className='list-item-icon' />
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
        </>
      )}
    </div>
  )
}

export default ListItem
