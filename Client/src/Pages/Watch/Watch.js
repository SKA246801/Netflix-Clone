import React from 'react'
import './Watch.css'
import { Link, useLocation } from 'react-router-dom'
import { ArrowBackOutlined } from '@mui/icons-material'

function Watch() {
  const location = useLocation()
  const movie = location.state

  return (
    <div className='watch'>
      <Link to='/'>
        <div className='back'>
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <iframe
        width='100%'
        height='100%'
        src={movie.video}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  )
}
export default Watch
