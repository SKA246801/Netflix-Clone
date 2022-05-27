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
      if (!type) {
        setGenre(null)
      }
      try {
        const response = await axios.get(`api/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(sessionStorage.getItem('user')).accessToken,
          },
        })
        setLists(response.data)
        return response.data
      } catch (e) {
        console.log(e)
      }
    }
    getRandomLists()
  }, [type, genre])

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map(list => (
        <List key={list._id} list={list} />
      ))}
    </div>
  )
}

export default Home
