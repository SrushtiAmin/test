import React from 'react'
import './CaseStudies.css'
import RightSideImage from '../../Assests/Images/CaseStudiesImages/RightSideImage.png';; // Replace with the actual path to your image

const CaseStudies = () => {
  return (
    <div className="case-studies-container">
    <div className="sidebar">
      <h1 className="sidebar-title">Case<br />Studies</h1>
      <button className="filter-button">Corporate</button>
      <div className='para'>
       <p>Advertising</p>
       <p>Marketing</p>
       <p>Government</p>
       <p>Creative</p>
       </div>
    </div>
    <div className="right-content">
      <div className="right-image-container">
        <img src={RightSideImage} alt="Case Study" className="right-image" />
      </div>
    </div>
  </div>
  )
}

export default CaseStudies
