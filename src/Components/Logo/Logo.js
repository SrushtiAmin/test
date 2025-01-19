import React from 'react'
import './Logo.css'
import Object from '../../Assests/Images/LogoImages/Object.png';
import Object1 from '../../Assests/Images/LogoImages/Object1.png';
import Object2 from '../../Assests/Images/LogoImages/Object2.png';
import Object3 from '../../Assests/Images/LogoImages/Object3.png';
import Object4 from '../../Assests/Images/LogoImages/Object4.png';
import Object5 from '../../Assests/Images/LogoImages/Object5.png';

const Logo = () => {
  return (
    <div className='Logo-icons'>
     <img src={Object} className='icon'/>
     <img src={Object1} className='icon'/>
     <img src={Object2} className='icon'/>
     <img src={Object3} className='icon'/>
     <img src={Object4} className='icon'/>
     <img src={Object5} className='icon'/>

    </div>
  )
}

export default Logo
