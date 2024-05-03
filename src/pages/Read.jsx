import React from 'react'
import './Read.css'
import Sidebar from '../components/Sidebar'
import Singleblog from '../components/Singleblog'

export default function () {
  return (
    <div className='read'>
      <Singleblog/>
      <Sidebar/>
    </div>
  )
}
