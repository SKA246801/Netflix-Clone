import React from 'react'
import './Watch.css'

import { ArrowBackOutlined } from '@mui/icons-material'

function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video src='' className='watch-video' autoplay progress controls></video>
    </div>
  )
}

export default Watch
