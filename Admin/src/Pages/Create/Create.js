import React, { useContext, useState } from 'react'
import './Create.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined'
import storage from '../../Firebase'
import { createMovie } from '../../Assets/Context/Movie/MovieAPICalls'
import { MovieContext } from '../../Assets/Context/Movie/MovieContext'
import { useNavigate } from 'react-router-dom'

function Create({ inputs, title }) {
  const [file, setFile] = useState('')
  const [movie, setMovie] = useState({})
  const [img, setImg] = useState(null)
  const [uploaded, setUploaded] = useState(0)
  const { movieDispatch } = useContext(MovieContext)
  const navigate = useNavigate()

  const handleChange = e => {
    const value = e.target.value
    setMovie({ ...movie, [e.target.name]: value })
  }
  const [progress, setProgress] = useState(0)
  const upload = items => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          setProgress(progress)
        },
        e => console.log(e),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            setMovie(prev => {
              return { ...prev, [item.label]: url }
            })
            setUploaded(prev => prev + 1)
          })
        }
      )
    })
  }

  const handleUpload = e => {
    e.preventDefault()
    upload([
      {
        file: img,
        label: 'img',
      },
    ])
  }

  const handleSubmit = e => {
    e.preventDefault()
    createMovie(movie, movieDispatch)
    navigate('/movies')
  }

  return (
    <div className='create'>
      <Sidebar />
      <div className='createContainer'>
        <Navbar />{' '}
        <div className='createTop'>
          <h1>{title}</h1>
        </div>
        <div className='createBottom'>
          <div className='createLeft'>
            <img className='createImg' src={file ? URL.createObjectURL(file) : require('../../Assets/Images/no-img.jpg')} alt='' />
          </div>
          <div className='createRight'>
            <form className='createForm'>
              <div className='formInput'>
                <label htmlFor='img'>
                  Image: <DriveFolderUploadOutlined className='fileIcon' />
                </label>
                <input
                  type='file'
                  id='img'
                  onChange={e => {
                    setImg(e.target.files[0])
                    setFile(e.target.files[0])
                  }}
                  style={{ display: 'none' }}
                  name='img'
                />
              </div>
              {inputs.map(input => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} name={input.name} onChange={handleChange} />
                </div>
              ))}
              {title === 'Add New Movie' && (
                <div className='formInput select'>
                  <label>Type</label>
                  <select name='isSeries' id='isSeries' onChange={handleChange}>
                    <option value=''></option>
                    <option value='false'>Movie</option>
                    <option value='true'>Series</option>
                  </select>
                </div>
              )}
              {uploaded === 1 ? <button onClick={handleSubmit}>Create</button> : <button onClick={handleUpload}>Upload</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
