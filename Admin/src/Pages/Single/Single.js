import React, { useState } from 'react'
import './Single.css'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'
import PublishIcon from '@mui/icons-material/Publish'

function Single({ type }) {
  const location = useLocation()
  const movie = location.state
  const [file, setFile] = useState('')

  const list = location.state

  return (
    <div className='single'>
      <Sidebar />
      {type === 'user' && (
        <div className='singleContainer'>
          <Navbar />
          <div className='singleTop'>
            <div className='singleLeft'>
              <div className='editBtn'>Edit</div>
              <h1 className='singleTitle'>Information</h1>
              <div className='singleItem'>
                <img src={require('../../Assets/Images/marvel.jpg')} alt='' className='singleItemImg' />
                <div className='details'>
                  <h1 className='singleItemTitle'>John Smith</h1>
                  <div className='detailItem'>
                    <span className='itemKey'>Email:</span>
                    <span className='itemValue'>smith@smith.com</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Phone:</span>
                    <span className='itemValue'>123 123 4567</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Address:</span>
                    <span className='itemValue'>SomeStreet SomeCity, SomeState SomeZipcode</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Country:</span>
                    <span className='itemValue'>USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='singleRight'>
              <Chart title='User Spending (Last 6 Months)' />
            </div>
          </div>
          <div className='singleBottom'>
            <h1 className='singleTitle'>Last Transactions</h1>
            <Table />
          </div>
        </div>
      )}
      {type === 'movie' && (
        <div className='singleContainer'>
          <Navbar />
          <div className='singleTop'>
            <div className='singleLeft'>
              <h1 className='singleTitle'>Information</h1>
              <div className='singleItem'>
                {/* <img src={require('../../Assets/Images/marvel.jpg')} alt='' className='singleItemImg' /> */}
                <img src={movie.img} alt='' className='singleMovieImg' />
                <div className='details'>
                  <h1 className='singleItemTitle'>{movie.title}</h1>
                  <div className='detailItem'>
                    <span className='itemKey'>ID:</span>
                    <span className='itemValue'>{movie._id}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Description</span>
                    <span className='itemValue'>{movie.description}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Genre:</span>
                    <span className='itemValue'>{movie.genre}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Year:</span>
                    <span className='itemValue'>{movie.year}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Rating:</span>
                    <span className='itemValue'>{movie.rating}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Duration:</span>
                    <span className='itemValue'>{movie.duration}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Series:</span>
                    <span className='itemValue'>{movie.isSeries ? 'True' : 'False'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='editContainer'>
            <div className='editBottom'>
              <div className='editLeft'>
                <img className='editImg' src={file ? URL.createObjectURL(file) : movie.img} alt='' />
              </div>
              <div className='editRight'>
                <form className='editForm'>
                  <div className='formInput'>
                    <label htmlFor='file'>
                      Image: <PublishIcon className='fileIcon' />
                    </label>
                    <input type='file' id='file' onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }} />
                  </div>
                  <div className='formInput'>
                    <label>Title</label>
                    <input type='text' placeholder={movie.title} />
                  </div>
                  <div className='formInput'>
                    <label>Year</label>
                    <input type='text' placeholder={movie.year} />
                  </div>
                  <div className='formInput'>
                    <label>Genre</label>
                    <input type='text' placeholder={movie.genre} />
                  </div>
                  <div className='formInput'>
                    <label>Rating</label>
                    <input type='text' placeholder={movie.rating} />
                  </div>
                  <div className='formInput'>
                    <label>Trailer</label>
                    <input type='text' placeholder={movie.trailer} />
                  </div>
                  <button>Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === 'list' && (
        <div className='singleContainer'>
          <Navbar />
          <div className='singleTop'>
            <div className='singleLeft'>
              <h1 className='singleTitle'>Information</h1>
              <div className='singleItem'>
                <div className='details'>
                  <h1 className='singleItemTitle'>{list.title}</h1>
                  <div className='detailItem'>
                    <span className='itemKey'>ID:</span>
                    <span className='itemValue'>{list._id}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Genre:</span>
                    <span className='itemValue'>{list.genre}</span>
                  </div>
                  <div className='detailItem'>
                    <span className='itemKey'>Type:</span>
                    <span className='itemValue'>{list.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='editContainer'>
            <div className='editBottom'>
              <div className='editLeft'></div>
              <div className='editRight'>
                <form className='editForm'>
                  <div className='formInput'>
                    <label>Title</label>
                    <input type='text' placeholder={list.title} />
                  </div>
                  <div className='formInput'>
                    <label>Genre</label>
                    <input type='text' placeholder={list.genre} />
                  </div>
                  <div className='formInput'>
                    <label>Type</label>
                    <input type='text' placeholder={list.type} />
                  </div>
                  <button>Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Single
