import React, { useState } from 'react'
import './Navbar.css'

// material ui icons
import SearchIcon from '@mui/icons-material/Search'
import NotifactionsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='left'>
        <img
          className='netflix-logo'
          src={require('../../Assets/Images/netflix-logo.png')}
          alt='netflix-logo'
        />
        <span className='nav-tags'>Homepage</span>
        <span className='nav-tags'>Series</span>
        <span className='nav-tags'>Movies</span>
        <span className='nav-tags'>New and Popular</span>
        <span className='nav-tags'>My List</span>
      </div>
      <div className='right'>
        <SearchIcon className='icon' />
        <span>KID</span>
        <NotifactionsIcon className='icon' />
        <img
          className='profile-picture'
          src={require('../../Assets/Images/marvel.jpg')}
          alt='profile'
        />
        <div className='profile'>
          <ArrowDropDownIcon className='icon' />
          <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
