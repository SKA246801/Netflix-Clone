import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Featured from '../Featured/Featured'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
    </div>
  )
}

export default Home
