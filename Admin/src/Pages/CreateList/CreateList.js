import React, { useContext, useEffect, useState } from 'react'
import './CreateList.css'
import { MovieContext } from '../../Assets/Context/Movie/MovieContext'
import { ListContext } from '../../Assets/Context/List/ListContext'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { getMovies } from '../../Assets/Context/Movie/MovieAPICalls'

function CreateList({ inputs }) {
  const [list, setList] = useState(null)

  const { lists, listDispatch } = useContext(ListContext)
  const { movies, movieDispatch } = useContext(MovieContext)

  useEffect(() => {
    getMovies(movieDispatch)
    setList({ type: 'movie' })
  }, [movieDispatch])

  const handleChange = e => {
    const value = e.target.value
    setList({ ...list, [e.target.name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('sumbuigfdsa')
    console.log(list)
  }

  const handleSelect = e => {
    let value = Array.from(e.target.selectedOptions, option => option.value)
    setList({ ...list, [e.target.name]: value })
  }

  console.log(list)
  return (
    <div className='create'>
      <Sidebar />
      <div className='createContainer'>
        <Navbar />{' '}
        <div className='createTop'>
          <h1>Add New List</h1>
        </div>
        <div className='createBottom'>
          <div className='createRight'>
            <form className='createListForm'>
              <div className='createListFormLeft'>
                {inputs.map(input => (
                  <div className='createListFormInput' key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} name={input.name} onChange={handleChange} />
                  </div>
                ))}
                <div className='createListFormInput select'>
                  <label>Type</label>
                  <select name='type' onChange={handleChange}>
                    <option value='movie'>Movie</option>
                    <option value='series'>Series</option>
                  </select>
                </div>
              </div>
              <div className='createListFormRight'>
                <div className='createListFormInput'>
                  <label>Content</label>
                  <select multiple name='content' onChange={handleSelect} style={{ height: '180px', width: '300px', marginTop: '10px' }}>
                    {movies.map(movie => (
                      <option key={movie._id} value={movie._id}>
                        {movie.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button onClick={handleSubmit}>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateList
