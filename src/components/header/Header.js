import React from 'react'
import Topbar from './Topbar'
import BottomBar from './bottombar/BottomBar'
import Navbar from './navbar/Navbar'

function Header() {
  return (
    <div>
        <Topbar/>
        <BottomBar/>
        <Navbar/>
    </div>
  )
}

export default Header