import React from 'react'
import { Nevbar } from '../../Component/Nevbar/Nevbar'
import { Footer } from '../../Component/footer/Footer'
import {
  Routes,
  Route
}
from "react-router-dom"
import Home from '../Home/Home'
const Layout = () => {
  return (
  <>
  <Nevbar/>
  <Routes>
  <Route path="/home" element={<Home/>}/>
  </Routes>  

  <Footer/>
  </>
  )
}

export default Layout