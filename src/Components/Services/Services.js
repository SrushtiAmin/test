import React from 'react'
import './Services.css'
import camera from '../../Assests/Images/ServicesImages/camera.jpeg';
import screen from '../../Assests/Images/ServicesImages/screen.jpeg';
import accesories from '../../Assests/Images/ServicesImages/accesories.jpeg';
import Background from '../../Assests/Images/ServicesImages/Background.png';


const Services = () => {
  return (
        <div className="services-section">
         <h2 className="services-title">Our Services</h2>
           <a href="#" className="see-all"> SEE ALL →</a>
          <div className="services-carousel">
            <div className="service-card">
              <img src={camera}alt="Service 1" className="service-image"/>
              <h3 className="service-title">Lorem ipsum dolor</h3>
              <p className="service-description">
                Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget
                lobortis lacus.
              </p>
              <a href="details"className="service-button">See Detail</a>
            </div>
            <div className="service-card">
              <img src={screen}  alt="Service 2" className="service-image"/>
              <h3 className="service-title">Lorem ipsum dolor</h3>
              <p className="service-description">
                Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget
                lobortis lacus.
              </p>
              <a href="details"className="service-button">See Detail</a>
            </div>
            <div className="service-card">
              <img src={accesories} alt="Service 3" className="service-image"/>
              <h3 className="service-title">Lorem ipsum dolor</h3>
              <p className="service-description">
                Pellentesque ac bibendum tortor, vel blandit nulla. Nulla eget
                lobortis lacus.
              </p>
              <a href="deatils" className="service-button">See Detail</a>
            </div>
          </div>
        </div>
  )
}

export default Services
