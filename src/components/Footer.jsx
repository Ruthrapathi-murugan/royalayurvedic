import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-premium">
      {/* Gold accent top line */}
      <div className="footer-accent-bar"></div>

      <div className="container">
        {/* Main Footer Grid */}
        <div className="row g-5 py-5">
          
          {/* Column 1: Brand & About */}
          <div className="col-lg-4 col-md-6">
            <h4 className="footer-logo">
              <i className="bi bi-flower2 me-2"></i>Royal Ayurvedic
            </h4>
            <p className="footer-about">
              Experience authentic Kerala Ayurvedic treatments in Palani. Our expert therapists bring ancient wisdom to modern wellness, healing your body, mind, and spirit naturally.
            </p>
            <div className="footer-social-row">
              <a href="https://wa.me/919952161959" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-circle">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-circle">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.google.com/maps?q=palani+royal+ayurvedic+treatment" target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="social-circle">
                <i className="bi bi-geo-alt-fill"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Our Treatments</h5>
            <ul className="footer-links-list">
              <li><Link to="/packages">De-stress Program</Link></li>
              <li><Link to="/packages">Detox (Panchakarma)</Link></li>
              <li><Link to="/packages">Slimming Program</Link></li>
              <li><Link to="/packages">Bridal Readiness</Link></li>
              <li><Link to="/packages">Post Natal Care</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Get In Touch</h5>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                <span>No. 45, Adivaram Road, Near Palani Temple, Palani, Tamil Nadu - 624601</span>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:9952161959">995 216 1959</a>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:royalayurvedictreatment@gmail.com">royalayurvedictreatment@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <i className="bi bi-clock-fill"></i>
                <span>Mon – Sun: 8:00 AM – 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; {new Date().getFullYear()} Royal Ayurvedic Treatment. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 creator-text">
                Crafted with <i className="bi bi-heart-fill text-danger"></i> by{' '}
                <a href="https://www.ruthradigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="creator-link">
                  Ruthra Digital Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
