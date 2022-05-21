import React, { useEffect, useState } from 'react'
import './Featured.css'

import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'

function Featured({ type }) {
  const [content, setContent] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const response = await axios.get(`movies/random${type ? `?type=${type}` : ''}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QxYmIxODMzNGUxZGRhZWQxZWRkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzA5MTg2NywiZXhwIjoxNjUzMDk5MDY3fQ.goYKDPwa-c0VtW50qeLyCm3KkWPzXEgNaecfCCd70pY',
          },
        })
        setContent(response.data[0])
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
    getRandomContent()
    console.log(content)
  }, [type])

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span className='featured-page-title'>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre' className='categories'>
            <option value='genre'>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
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
        <img src={content.imgTitle} className='featured-img' alt='movie' />
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
