import React, { useEffect, useState } from 'react'
import './Table.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'

function TableComponent({ type }) {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const response = await axios.get('/users?new=true', {
          headers: {
            token: 'Bearer ' + JSON.parse(sessionStorage.getItem('user')).accessToken,
          },
        })
        setNewUsers(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    getNewUsers()
  }, [])
  const rows = [
    {
      id: 12345,
      product: 'Samsung Galaxy S21 5G 128GB (Unlocked)',
      img: 'galaxy.jpg',
      customer: 'John Smith',
      date: 'March 1',
      amount: 800,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 54321,
      product: 'Samsung Galaxy Buds Live, Mystic Black',
      img: 'galaxy-buds.jpg',
      customer: 'Michael Smith',
      date: 'March 1',
      amount: 170,
      method: 'Online Payment',
      status: 'Pending',
    },
    {
      id: 54565,
      product: 'Samsung 55" TU7000 Crystal UHD 4K Smart TV ',
      img: 'TV.jpg',
      customer: 'John Doe',
      date: 'March 1',
      amount: 500,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 12332,
      product: 'Samsung Galaxy Watch4 40mm Bluetooth Smartwatch',
      img: 'watch.jpg',
      customer: 'Michael Doe',
      date: 'March 1',
      amount: 250,
      method: 'Cash on Delivery',
      status: 'Approved',
    },
    {
      id: 54322,
      product: 'Samsung Galaxy Book Pro 360',
      img: 'galaxy-book.jpg',
      customer: 'James Smith',
      date: 'March 1',
      amount: 1200,
      method: 'Online',
      status: 'Pending',
    },
  ]
  return (
    <>
      {type === 'Users' && (
        <TableContainer component={Paper} className='table'>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell className='tableCell'>ID</TableCell>
                <TableCell className='tableCell'>User</TableCell>
                <TableCell className='tableCell'>Email</TableCell>
                <TableCell className='tableCell'>Date Joined</TableCell>
                <TableCell className='tableCell'>Status</TableCell>
                <TableCell className='tableCell'>Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newUsers.map(data => (
                <TableRow key={data._id}>
                  <TableCell className='tableCell' sx={{ minWidth: 75 }}>
                    {data._id}
                  </TableCell>
                  <TableCell className='tableCell'>
                    <div className='cellWrapper'>
                      <img src={require(`../../Assets/Images/${data.profilePic || 'marvel.jpg'}`)} alt='' className='productImg' />
                      {data.username}
                    </div>
                  </TableCell>
                  <TableCell className='tableCell'>{data.email}</TableCell>
                  <TableCell className='tableCell'>{data.createdAt}</TableCell>
                  <TableCell className='tableCell'>Offline</TableCell>
                  <TableCell className='tableCell'>{data.isAdmin === true ? 'Yes' : 'No'}</TableCell>
                  {/* <TableCell className='tableCell'>
                    <span className={`status ${data.status}`}>{data.status}</span>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {type === 'Transactions' && (
        <TableContainer component={Paper} className='table'>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell className='tableCell'>Tracking ID</TableCell>
                <TableCell className='tableCell'>Product</TableCell>
                <TableCell className='tableCell'>Customer</TableCell>
                <TableCell className='tableCell'>Date</TableCell>
                <TableCell className='tableCell'>Amount</TableCell>
                <TableCell className='tableCell'>Payment Method</TableCell>
                <TableCell className='tableCell'>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell className='tableCell' sx={{ minWidth: 75 }}>
                    {row.id}
                  </TableCell>
                  <TableCell className='tableCell'>
                    <div className='cellWrapper'>
                      <img src={require(`../../Assets/Images/${row.img}`)} alt='' className='productImg' />
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className='tableCell'>{row.customer}</TableCell>
                  <TableCell className='tableCell'>{row.date}</TableCell>
                  <TableCell className='tableCell'>{row.amount}</TableCell>
                  <TableCell className='tableCell'>{row.method}</TableCell>
                  <TableCell className='tableCell'>
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default TableComponent
