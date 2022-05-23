import React, { useRef, useState } from 'react'
import './List.css'

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

import ListItem from '../ListItem/ListItem'

function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)

  const listRef = useRef()
  console.log(list)

  const handleClick = direction => {
    setIsMoved(true)
    listRef.current.disabled = true
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === 'right' && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${distance - 230}px)`
    }
  }

  return (
    <div className='list'>
      <span className='list-title'>{list.title}</span>
      <div className='wrapper'>
        <ArrowBackIos className='arrow left-arrow' onClick={() => handleClick('left')} style={{ display: !isMoved && 'none' }} />

        <div className='container' ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIos className='arrow right-arrow' onClick={() => handleClick('right')} />
      </div>
    </div>
  )
}

export default List
