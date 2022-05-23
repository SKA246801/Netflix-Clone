import React, { useContext, useEffect, useState } from 'react'
import './DataTable.css'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, rows, movieColumns, listColumns } from '../../Assets/Utils/TestData'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../Assets/Context/Movie/MovieContext'
import { deleteMovie, getMovies } from '../../Assets/Context/Movie/MovieAPICalls'

function DataTable({ type }) {
  const [userData, setData] = useState(rows)
  const { movies, movieDispatch } = useContext(MovieContext)

  useEffect(() => {
    getMovies(movieDispatch)
  }, [movieDispatch])
  const handleDelete = id => {
    deleteMovie(id, movieDispatch)
    window.location.reload()
  }
  console.log(userData)
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 180,
      renderCell: params => {
        return (
          <div className='cellAction'>
            {params.row.description ? (
              <Link to={`/movies/${params.row._id}`} state={params.row} style={{ textDecoration: 'none' }}>
                {' '}
                <div className='viewButton'>View</div>
              </Link>
            ) : params.row.username ? (
              <Link to='/users/test' style={{ textDecoration: 'none' }}>
                <div className='viewButton'>View</div>
              </Link>
            ) : (
              <Link to={`/lists/${params.row._id}`} style={{ textDecoration: 'none' }}>
                <div className='viewButton'>View</div>
              </Link>
            )}
            <div className='deleteButton' onClick={() => handleDelete(params.row._id)}>
              Delete
            </div>
          </div>
        )
      },
    },
  ]
  return (
    <>
      {type === 'Users' && (
        <div className='dataTable'>
          <div className='dataTableTitle'>
            Current Users
            <Link to='/users/create' className='createUserLink'>
              Add New
            </Link>
          </div>
          <DataGrid
            className='dataGrid'
            rows={userData}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      )}
      {type === 'Movies' && (
        <div className='dataTable'>
          <div className='dataTableTitle'>
            Current Movies
            <Link to='/movies/create' className='createUserLink'>
              Add New
            </Link>
          </div>
          <DataGrid
            className='dataGrid'
            rows={movies}
            columns={movieColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            getRowId={row => row._id}
          />
        </div>
      )}
      {type === 'Lists' && (
        <div className='dataTable'>
          <div className='dataTableTitle'>
            Current Lists
            <Link to='/movies/create' className='createUserLink'>
              Add New
            </Link>
          </div>
          <DataGrid
            className='dataGrid'
            rows={movies}
            columns={listColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            getRowId={row => row._id}
          />
        </div>
      )}
    </>
  )
}

export default DataTable
