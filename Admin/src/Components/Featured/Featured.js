import React from 'react'
import './Featured.css'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import MoreVert from '@mui/icons-material/MoreVert'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpOutlined from '@mui/icons-material/KeyboardArrowUpOutlined'

function Featured() {
  return (
    <div className='featured'>
      <div className='featuredTop'>
        <h1 className='featuredTitle'>Total Revenue</h1>
        <MoreVert fontSize='small' />
      </div>
      <div className='featuredBottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={50} text={'50%'} strokeWidth={5} />
        </div>
        <p className='salesTitle'>Total Sales made today</p>
        <p className='amount'>$250</p>
        <p className='description'>Previous transactions processing. Last payments may not be included.</p>
        <div className='summary'>
          <div className='summaryItem'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positiveResult'>
              <KeyboardArrowUpOutlined fontSize='small' />
              <div className='resultAmount'>$15k</div>
            </div>
          </div>
          <div className='summaryItem'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negativeResult'>
              <KeyboardArrowDown fontSize='small' />
              <div className='resultAmount'>$15k</div>
            </div>
          </div>
          <div className='summaryItem'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positiveResult'>
              <KeyboardArrowUpOutlined fontSize='small' />
              <div className='resultAmount'>$15k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
