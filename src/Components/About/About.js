import React from 'react';        
import './About.css';
import image1 from '../../Assests/Images/AboutImages/image1.jpeg';
import image2 from '../../Assests/Images/AboutImages/image2.jpeg';
import Rectangle from '../../Assests/Images/AboutImages/Rectangle.png';
import Rectangle2 from '../../Assests/Images/AboutImages/Rectangle2.png';


function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-left">
            <img src={Rectangle2} className='rectangle2'/>
            <img src={Rectangle} className='rectangle'/>
          <div className="about-box">
            <h2 className='box-text'>About Us</h2>
          </div>
          <div className="about-images">
            <img src={image1} alt="Workplace" className='img1'/>
            <img src={image2} alt="Building" className='img2' />
          </div>
        </div>
        <div className="about-right">
          <h3>Nulla lobortis nunc vitae purus facilisis</h3>
          <p>
            Vestibulum sit amet tortor libero lobortis semper at et odio. In eu
            tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis
            vitae purus facilisis semper.
          </p>
          <div className="about-states">
            <div className="state-item">
              <h4>+200</h4>
              <p>EMPLOYEE</p>
            </div>
            <div className="state-item">
              <h4>+500</h4>
              <p>PROJECT</p>
            </div>
            <div className="state-item">
              <h4>+300</h4>
              <p>CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;