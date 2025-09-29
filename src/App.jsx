import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import Logout from './pages/Logout'
import NotFound from './pages/NotFound'
import ProtectRoute from './component/ProtectRoute'
import DashboardLoyout from './pages/DashboardLoyout'
import DashboardHome from '../src/pages/dashboard/DashboardHome'
import About from '../src/pages/dashboard/About'
import Product from '../src/pages/dashboard/Product'
import Setting from '../src/pages/dashboard/Setting'


const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        {/* <Route path='/dashboard' element={<ProtectRoute><DashboardLoyout/></ProtectRoute>}> */}
        <Route path='/dashboard' element={<DashboardLoyout/>}>
           <Route  index   element={<DashboardHome/>}/>
           <Route path='about'   element={<About/>}/>
           <Route  path='product'  element={<Product/>}/>
           <Route path='setting'   element={<Setting/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

     
    </>
  )
}

export default App
