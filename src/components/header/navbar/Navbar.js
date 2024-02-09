import React from 'react'
import {navbar_wrapper, navlinks_bar} from './Navbar.module.css'
import {Link} from 'gatsby'

function Navbar() {
  return (
    <div className={`${navbar_wrapper} container`}>
        <div className={navlinks_bar}>
        <Link to='/'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/services'>Services</Link>
        </div>
        <button type='button' className='btn_large_blue'><Link to='/contactus'>Contact us</Link></button>
    </div>
  )
}

export default Navbar