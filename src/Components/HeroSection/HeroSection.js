import React from 'react';
import './HeroSection.css';
import Hero from '../../Assests/Images/HeroSectionImages/Hero.png';
import Mask from '../../Assests/Images/HeroSectionImages/Mask.png';
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero" >
      <div className="container">
        <div className="hero-content">
          <h1>Aenean Facilisis Vitae</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing Integer id orci sed ante tincidunt</p>
          <button className="write-to-us-btn">
            WRITE TO US <span className="arrow"><FaArrowAltCircleRight /></span>
          </button>
        </div>
        <div className="hero-illustration">
          <img src={Hero} alt="Rocket Illustration" />
        </div>
      </div>
      <div className="continue-section">
        <div className="text-block">
          <h3>Business Solution</h3>
          <p>Interdum et malesuada fames ac ante...</p>
          <div className="underline"></div>
        </div>
        <div className="text-block">
          <h3>Free project quote</h3>
          <p>Interdum et malesuada fames ac ante...</p>
        </div>
        <div className="text-block">
          <h3>Nulla lobortis nunc</h3>
          <p>Interdum et malesuada fames ac ante...</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
