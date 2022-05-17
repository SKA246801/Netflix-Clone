import React from 'react'
import './Single.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/Chart/Chart'
import Table from '../../Components/Table/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebar />
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
    </div>
  )
}

export default Single
