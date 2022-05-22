import React, { useState } from 'react'
import './Create.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined'
import storage from '../../Firebase'

function Create({ inputs, title }) {
  const [file, setFile] = useState('')

  const [movie, setMovie] = useState({})
  const [img, setImg] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSmall, setImgSmall] = useState(null)
  const [uploaded, setUploaded] = useState(0)

  const handleChange = e => {
    const value = e.target.value
    setMovie({ ...movie, [e.target.name]: value })
  }

  const upload = items => {
    items.forEach(item => {
      const fileName = new Date().getTime() + item.label + item.file.name
      const uploadTask = storage.ref(`/items/${fileName}`).put(item)
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log(progress)
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
      {
        file: imgTitle,
        label: 'imgTitle',
      },
      {
        file: imgSmall,
        label: 'imgSmall',
      },
    ])
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  console.log(movie)

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
                {title === 'Add New Movie' && (
                  <>
                    <label htmlFor='titleImg'>
                      Title Image: <DriveFolderUploadOutlined className='fileIcon' />
                    </label>
                    <input type='file' id='titleImg' style={{ display: 'none' }} name='imgTitle' onChange={e => setImgTitle(e.target.files[0])} />
                    <label htmlFor='thumbnailImg'>
                      Thumbnail Image: <DriveFolderUploadOutlined className='fileIcon' />
                    </label>
                    <input type='file' id='thumbnailImg' style={{ display: 'none' }} name='imgSmall' onChange={e => setImgSmall(e.target.files[0])} />
                  </>
                )}
              </div>
              {inputs.map(input => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} name={input.name} onChange={handleChange} />
                </div>
              ))}
              {title === 'Add New Movie' && (
                <div className='formInput select'>
                  <label>Series</label>
                  <select name='isSeries' id='isSeries'>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                  </select>
                </div>
              )}
              {uploaded === 3 ? <button onClick={handleSubmit}>Create</button> : <button onClick={handleUpload}>Upload</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
