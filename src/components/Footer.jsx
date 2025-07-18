// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="footer-brand">Royal Ayurvedic Treatment, Palani</h5>
        <p className="mb-1">No. 45, Adivaram Road, Near Palani Temple, Palani, Tamil Nadu - 624601</p>
        <p className="mb-1">Phone: <a href="tel:9952161959" className="footer-link">9952161959</a></p>
        <p className="mb-1">Email: <a href="mailto:royalayurvedictreatment@gmail.com" className="footer-link">royalayurvedictreatment@gmail.com</a></p>
        <div className="social-icons mt-3">
          <a href="https://wa.me/919952161959" target="_blank" rel="noopener noreferrer" className="footer-link mx-2">WhatsApp</a> |
          <a href="https://www.google.com/maps?q=palani+royal+ayurvedic+treatment" target="_blank" rel="noopener noreferrer" className="footer-link mx-2">Google Maps</a>
        </div>
        <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Royal Ayurvedic Treatment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
