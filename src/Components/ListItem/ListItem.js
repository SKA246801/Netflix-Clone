import React, { useState } from 'react'
import './ListItem.css'

import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOffAltOutlined } from '@mui/icons-material'

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = ''

  return (
    <div
      className='list-item'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={require('../../Assets/Images/marvel.jpg')} className='movie-img' alt='' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop className='movie-trailer' />
          <div className='item-info'>
            <div className='list-item-icons-container'>
              <PlayArrow className='list-item-icon' />
              <Add className='list-item-icon' />
              <ThumbUpOffAltOutlined className='list-item-icon' />
              <ThumbDownAltOutlined className='list-item-icon' />
            </div>
            <div className='item-info-top'>
              <span>1 hr 14mins</span>
              <span className='age-limit'>17+</span>
              <span>1999</span>
            </div>
            <div className='movie-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit aliquid reprehenderit tenetur</div>
            <div className='list-item-genre'>Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem
