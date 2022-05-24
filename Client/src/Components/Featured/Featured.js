import React, { useEffect, useState } from 'react'
import './Featured.css'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
            <option value='horror'>Horror</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='drama'>Drama</option>
          </select>
        </div>
      )}
      <img src={content.img} className='background-img' alt='' />
      <div className='info'>
        <h1 className='featured-img-title'>{content.title}</h1>
        <span className='featured-description'>{content.description}</span>
        <div className='buttons'>
          <Link to='/watch' state={content} style={{ textDecoration: 'none' }}>
            <button className='play'>
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
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
