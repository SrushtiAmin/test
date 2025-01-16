import React from 'react'
import './Header.css'
import logo from '../../Assests/Images/headerImages/logo.png';
import { IoMdSettings } from "react-icons/io";



const Header = () => {
  return (
    <header className='header'>
    <div className='container'>
        <div className='logo'>
            <img src ={logo} alt='Agency Logo' className='logo-img'/>
            <span className='logo-text'>Agency</span>
        </div>
        <nav className='nav-bar'>
          <ul className='nav-list'>
            <li><a href ="#services">Services</a></li> 
            <li><a href ="#values">Our Values</a></li>
            <li><a href ="#studies">Case Studies</a></li>
            
            <li><a href ="#blog">Blogs</a></li>
            <li><a href ="#pages">Inner Pages</a></li>
          </ul>
          
        </nav>
       
        <div className="header-actions">
          
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
          <span className="line">|</span>
          <span className="settings">< IoMdSettings /></span>
          
        </div>
       
      
    </div>
    </header>
  )
}

export default Header
