import React, { forwardRef, useRef, useState } from 'react'
import './List.css'

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

import ListItem from '../ListItem/ListItem'
import MovieModal from '../MovieModal/MovieModal'

function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230)

  const [showModal, setShowModal] = useState(false)
  const [movieId, setMovieId] = useState(null)

  const openModal = e => {
    setMovieId(e.target.dataset.id)
    setShowModal(!showModal)
  }

  const listRef = useRef()

  const handleClick = direction => {
    setIsMoved(true)
    listRef.current.disabled = true
    let distance = listRef.current.getBoundingClientRect().x - 50
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === 'right' && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${distance - 230}px)`
    }
  }

  return (
    <>
      <div className='list'>
        <span className='list-title'>{list.title}</span>
        <div className='wrapper'>
          <ArrowBackIos className='arrow left-arrow' onClick={() => handleClick('left')} style={{ display: !isMoved && 'none' }} />
          <div className='container' ref={listRef} onClick={e => openModal(e)}>
            {list.content.map((item, i) => (
              <ListItem key={i} item={item} />
            ))}
          </div>
          <ArrowForwardIos className='arrow right-arrow' onClick={() => handleClick('right')} />
        </div>
      </div>
      <MovieModal showModal={showModal} setShowModal={setShowModal} movieId={movieId} />
    </>
  )
}

export default List
