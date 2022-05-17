import React, { useContext } from 'react'
import { DarkModeContext } from '../../Assets/Context/DarkModeContext'
import './Sidebar.css'
import { Link } from 'react-router-dom'

import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import StoreIcon from '@mui/icons-material/Store'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import BarChartIcon from '@mui/icons-material/BarChart'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <p className='logo'>KAINE</p>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span className='sidebarSubTitles'>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className='icon' />
              <span className='sidebarSubTitles'>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className='icon' />
              <span className='sidebarSubTitles'>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className='icon' />
            <span className='sidebarSubTitles'>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span className='sidebarSubTitles'>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <BarChartIcon className='icon' />
            <span className='sidebarSubTitles'>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span className='sidebarSubTitles'>Notifcations</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyIcon className='icon' />
            <span className='sidebarSubTitles'>System Health</span>
          </li>
          <li>
            <PsychologyIcon className='icon' />
            <span className='sidebarSubTitles'>Logs</span>
          </li>
          <li>
            <SettingsIcon className='icon' />
            <span className='sidebarSubTitles'>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span className='sidebarSubTitles'>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span className='sidebarSubTitles'>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption firstColor' onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className='colorOption secondColor' onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  )
}

export default Sidebar
