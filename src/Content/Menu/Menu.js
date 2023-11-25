import React from 'react'
import { Left } from '../../Component/menu/Left'
import { Right } from '../../Component/menu/Right'
import { Nevbar } from '../../Component/Nevbar/Nevbar'
import { Footer } from '../../Component/footer/Footer'
const Menu = () => {
  return (
    <div>
    <Nevbar/>
    <div className='menuContainer'>
      <div className='menuLeft'><Left/></div>
      <div className='menuright'><Right/></div>
    </div>
    <Footer/></div>
  )
}

export default Menu