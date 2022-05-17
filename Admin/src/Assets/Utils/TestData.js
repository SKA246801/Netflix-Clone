export const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 250,
    renderCell: params => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={require(`../Images/${params.row.img}`)} alt='avatar' />
          {params.row.username}
        </div>
      )
    },
  },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'age', headerName: 'Age', width: 100 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: params => {
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
    },
  },
]

export const rows = [
  { id: 1, username: 'Snow', img: 'marvel.jpg', age: 35, status: 'active', email: 'snow@snow.com' },
  { id: 2, username: 'CerseiLannister', img: 'marvel.jpg', age: 42, status: 'active', email: 'Lannister@Lannister.com' },
  { id: 3, username: 'Lannister', img: 'marvel.jpg', age: 45, status: 'passive', email: 'Lan@Lan.com' },
  { id: 4, username: 'Stark', img: 'marvel.jpg', age: 16, status: 'active', email: 'stark@stark.com' },
  { id: 5, username: 'Targaryen', img: 'marvel.jpg', age: 37, status: 'passive', email: 'Tar@Tar.com' },
  { id: 6, username: 'Melisandre', img: 'marvel.jpg', age: 150, status: 'pending', email: 'melisandre@melisandre.com' },
  { id: 7, username: 'Clifford', img: 'marvel.jpg', age: 44, status: 'active', email: 'clifford@clifford.com' },
  { id: 8, username: 'Frances', img: 'marvel.jpg', age: 36, status: 'passive', email: 'Frances@Frances.com' },
  { id: 9, username: 'Roxie', img: 'marvel.jpg', age: 65, status: 'pending', email: 'rox@rox.com' },
]
