import React from 'react'
import { Nevbar } from '../../Component/Nevbar/Nevbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../Component/footer/Footer'
const Layout = () => {
  return (
  <>
    <Nevbar/>
    <Outlet/>
    <Footer/>

  </>
  )
}

export default Layout