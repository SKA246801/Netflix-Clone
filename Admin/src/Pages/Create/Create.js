import React, { useState } from 'react'
import './Create.css'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined'

function Create({ inputs, title }) {
  const [file, setFile] = useState('')

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
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlined className='fileIcon' />
                </label>
                <input type='file' id='file' onChange={e => setFile(e.target.files[0])} style={{ display: 'none' }} />
              </div>
              {inputs.map(input => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
