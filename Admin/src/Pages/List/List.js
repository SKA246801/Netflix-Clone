import React from 'react'
import './List.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import DataTable from '../../Components/DataTable/DataTable'

function List() {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listComponentContainer'>
        <Navbar />
        <DataTable />
      </div>
    </div>
  )
}

export default List
