import React from "react";
import "./Footer.css";
import logo from '../../Assests/Images/FooterImages/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} className="logo"/>
          <span className='logo-text'>Agency</span> 
        </div>
        <div className="diamond-square"></div>
        <div className="diamond-bigsquare"></div>
        <p>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
        <p>© Skyrev Theme 2020</p>
      </div>
      <div className="footer-center">
      <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>Donec dignissim</li>
            <li>Curabitur egestas</li>
            <li>Nam posuere</li>
            <li>Aenean facilisis</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Cras convallis</li>
            <li>Vestibulum faucibus</li>
            <li>Quisque lacinia purus</li>
            <li>Aliquam nec ex</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li>Suspisse porttitor</li>
            <li>Nam posuere</li>
            <li>Curabitur egestas</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <div className="facebook"><FaFacebookF /></div>
          <div className="linkedin"><FaLinkedin /></div>
          <div className="twitter"><FaTwitter /></div>
          <div className="instagram"><TiSocialInstagram /></div>
        </div>
        <div className="language-selector">
         <span>🌐</span>
          <p>English - En</p>  
          <div className="diamond-square1"></div>
        <div className="diamond-bigsquare1"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
