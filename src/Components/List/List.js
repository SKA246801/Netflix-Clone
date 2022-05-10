import React, { useRef, useState } from 'react'
import './List.css'

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

import ListItem from '../ListItem/ListItem'

function List() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)

  const listRef = useRef()

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
      <span className='list-title'>Continue to Watch</span>
      <div className='wrapper'>
        <ArrowBackIos className='arrow left-arrow' onClick={() => handleClick('left')} style={{ display: !isMoved && 'none' }} />

        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIos className='arrow right-arrow' onClick={() => handleClick('right')} />
      </div>
    </div>
  )
}

export default List
