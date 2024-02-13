import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Follow Us</h3>
        <ul className="social-links">
          <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Address</h3>
        <p>123 Wild One Street, City, Country</p>
      </div>
    </footer>
  );
}

export default Footer;
