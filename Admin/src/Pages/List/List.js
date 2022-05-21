import React from 'react'
import './List.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import DataTable from '../../Components/DataTable/DataTable'

function List({ type }) {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listComponentContainer'>
        <Navbar />
        <DataTable type={type} />
      </div>
    </div>
  )
}

export default List
