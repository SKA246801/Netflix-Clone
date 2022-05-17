import React, { useState } from 'react'
import './DataTable.css'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from '../../Assets/Utils/TestData'
import { Link } from 'react-router-dom'

function DataTable() {
  const [data, setData] = useState(rows)

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        )
      },
    },
  ]
  return (
    <div className='dataTable'>
      <div className='dataTableTitle'>
        Current Users
        <Link to='/users/create' className='createUserLink'>
          Add New
        </Link>
      </div>
      <DataGrid className='dataGrid' rows={data} columns={columns.concat(actionColumn)} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection />
    </div>
  )
}

export default DataTable
