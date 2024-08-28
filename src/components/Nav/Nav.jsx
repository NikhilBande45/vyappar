import React from 'react'
import './Nav.css'
import logo from '../../Assets/Voxizo-Logo.png'
const Nav = () => {
  return (
    <div className='nav-container'>
        <div className="nav-content">
            <div className="logo-container">
                <img src={logo} alt="logo" width="120px"/>
            </div>

            <div className="nav-link-container">
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Partners</li>
                    <li>Solutions</li>
                    <li>Contact</li>
                </ul>
            </div>

            
        </div>
    </div>
  )
}

export default Nav
