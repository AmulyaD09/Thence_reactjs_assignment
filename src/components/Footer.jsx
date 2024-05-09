import React from 'react';
import logo1 from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo1} alt="Logo" className="footer-logo" />
        <p className="footer-text">Talup 2023. All rights reserved</p>
        </div>
        <div className="footer-links">
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy Policy</a>
          
        
      </div>
    </footer>
  );
};

export default Footer;
