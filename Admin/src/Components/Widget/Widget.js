import React from 'react'
import './Widget.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import AccountBalanceOutlined from '@mui/icons-material/AccountBalanceOutlined'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlined from '@mui/icons-material/MonetizationOnOutlined'

function Widget({ type }) {
  let data

  // temporary
  const amount = 100
  const percentage = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: <PersonOutlineIcon className='widgetIcon' style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />,
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: <ShoppingCartOutlined className='widgetIcon' style={{ color: 'goldenrod', backgroundColor: 'rgba(218,165,32,0.2)' }} />,
      }
      break
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: <MonetizationOnOutlined className='widgetIcon' style={{ color: 'green', backgroundColor: 'rgba(0,128,0,0.2)' }} />,
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: <AccountBalanceOutlined className='widgetIcon' style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' }} />,
      }
      break
    default:
      break
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='widgetTitle'>{data.title}</span>
        <span className='widgetCounter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='widgetLink'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
