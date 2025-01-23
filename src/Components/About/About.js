import React from 'react';
import './About.css';
import Artwork from '../../Assests/Images/AboutImages/Artwork.png'; // Adjust the path as necessary

function About() {
  return (
    <div className="about-container">
      <div className="about-artwork">
        <img src={Artwork} alt="About Us Artwork" />
      </div>
      <div className="about-text">
        <h3>Nulla lobortis nunc vitae purus facilisis</h3>
        <p>
          Nulla lobortis nunc vitae purus facilisis. Vestibulum sit amet tortor libero lobortis semper at et odio. In eu
          tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <h4>+200</h4>
            <p>EMPLOYEES</p>
          </div>
          <div className="stat-item">
            <h4>+500</h4>
            <p>PROJECTS</p>
          </div>
          <div className="stat-item">
            <h4>+300</h4>
            <p>CLIENTS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
