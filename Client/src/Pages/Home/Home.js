import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Featured from '../../Components/Featured/Featured'
import List from '../../Components/List/List'
import axios from 'axios'

function Home({ type }) {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const response = await axios.get(`lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2QxYmIxODMzNGUxZGRhZWQxZWRkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjM5MzkwNSwiZXhwIjoxNjUyNDAxMTA1fQ.nGlkGqD_YBSjdR3OTqUXs_WEdFF-HwTZty3iijIhWTQ',
          },
        })
        setLists(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    getRandomLists()
  }, [type, genre])

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map(list => (
        <List key={list._id} list={list} />
      ))}
    </div>
  )
}

export default Home
