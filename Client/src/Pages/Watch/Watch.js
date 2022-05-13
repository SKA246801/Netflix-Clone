import React from 'react'
import './Watch.css'
import { Link, useLocation } from 'react-router-dom'
import { ArrowBackOutlined } from '@mui/icons-material'

function Watch() {
  const location = useLocation()
  console.log(location)
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
        src='https://www.youtube.com/embed/Fq6gqi9Ubog'
        // src={movie.video}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  )
}
export default Watch
