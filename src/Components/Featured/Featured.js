import React from 'react'
import './Featured.css'

import { InfoOutlined, PlayArrow } from '@mui/icons-material'

function Featured({ type }) {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
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
      <img
        src={require('../../Assets/Images/marvel.jpg')}
        className='background-img'
        alt=''
      />

      <div className='info'>
        <img
          src={require('../../Assets/Images/marvel.jpg')}
          className='featured-img'
          alt='movie'
        />
        <span className='featured-description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
          autem ex accusantium magni tenetur incidunt quasi nostrum repellendus
          voluptatem omnis velit voluptatibus est aspernatur laboriosam odio
          fuga aliquam vel blanditiis.
        </span>
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
