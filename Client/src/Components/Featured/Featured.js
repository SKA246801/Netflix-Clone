import React, { useEffect, useState } from 'react'
import './Featured.css'

import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({})

  useEffect(() => {
    setGenre(null)
    const getRandomContent = async () => {
      try {
        const response = await axios.get(`movies/random${type ? `?type=${type}` : ''}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        })
        setContent(response.data[0])
      } catch (e) {
        console.log(e)
      }
    }
    getRandomContent()
  }, [type])

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span className='featured-page-title'>{type === 'movie' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre' className='categories' onChange={e => setGenre(e.target.value)}>
            <option value='genre'>Genre</option>
            <option value='action'>Action</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='family'>Family</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} className='background-img' alt='' />

      <div className='info'>
        {/* <img src={content.img} className='featured-img' alt='movie' /> */}
        <h1 className='featured-img-title'>{content.title}</h1>
        <span className='featured-description'>{content.description}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
