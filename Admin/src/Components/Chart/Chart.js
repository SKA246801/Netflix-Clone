import React from 'react'
import './Chart.css'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'January', Total: 1300 },
  { name: 'February', Total: 2000 },
  { name: 'March', Total: 1500 },
  { name: 'April', Total: 1000 },
  { name: 'May', Total: 1400 },
  { name: 'June', Total: 2500 },
]

function Chart({ title }) {
  return (
    <div className='chart'>
      <div className='chartTitle'>{title}</div>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='rgb(58, 179, 58)' stopOpacity={0.8} />
              <stop offset='95%' stopColor='rgb(58, 179, 58)' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' stroke='gray' />
          <CartesianGrid strokeDasharray='3 3' className='chartGrid' />
          <Tooltip />
          <Area type='monotone' dataKey='Total' stroke='rgb(58, 179, 58)' fillOpacity={1} fill='url(#total)' />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
