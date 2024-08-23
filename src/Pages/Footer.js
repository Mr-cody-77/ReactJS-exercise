// Footer.js

import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="links">
          <ul className="footer-links">
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/Termsandconditions">Terms of Service</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-content">
          <p>&copy; Sonu-{new Date().getFullYear()} Coding Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
