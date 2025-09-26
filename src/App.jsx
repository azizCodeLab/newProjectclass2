import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'
import ProtectRoute from './component/ProtectRoute'
import DashboardLoyout from './pages/DashboardLoyout'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/dashboard' element={<ProtectRoute><DashboardLoyout/></ProtectRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
