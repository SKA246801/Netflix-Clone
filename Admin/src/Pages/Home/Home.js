import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Chart from '../../Components/Chart/Chart'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Table from '../../Components/Table/Table'
import Widget from '../../Components/Widget/Widget'
import './Home.css'

function Home() {
  const MONTHS = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [])

  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get('/users/stats', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QxYmIxODMzNGUxZGRhZWQxZWRkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzE3MDA4MiwiZXhwIjoxNjUzMTc3MjgyfQ.FlCCT3cLDYZszKw_ozwxKRK6f-dtv2KDzG1cVcUmQ_E',
          },
        })
        const stats = response.data.sort((a, b) => {
          return a._id - b._id
        })
        stats.map(item => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], 'New User': item.total }]))
      } catch (e) {
        console.log(e)
      }
    }
    getStats()
  }, [])

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title='New Users in the Last Year' data={userStats} dataKey='New User' />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Users</div>
          <Table type='Users' />
        </div>
      </div>
    </div>
  )
}

export default Home
