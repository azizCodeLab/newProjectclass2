
import React from 'react'
import Sidebar from '../component/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLoyout = () => {
  return (
    <>
     <div className='flex'>
      <div>

        <Sidebar/>
      </div>
      <div>

        Main content

        <Outlet/>
      </div>
     </div>
    </>
  )
}

export default DashboardLoyout
