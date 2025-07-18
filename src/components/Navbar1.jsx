import React from 'react';
import './Navbar1.css'; // Custom CSS for 3D effect

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand display-6 text-white fw-bold" href="/">
            ROYAL AYURVEDIC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">Home</a>
              </li>
        
              <li className="nav-item">
                <a className="nav-link text-white" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
