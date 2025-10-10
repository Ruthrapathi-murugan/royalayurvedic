import React from 'react';
import './Navbar1.css'; // Custom CSS for 3D effect
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


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
                {/* ✅ Packages Dropdown */}
            {/* --- Packages Dropdown --- */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Packages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/packages/weight-loss">
                      Ayurvedic Weight Loss
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/packages/panchakarma">
                      Panchakarma Therapy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/packages/rejuvenation">
                      Rejuvenation Treatment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/packages/detox">
                      Detox & Wellness
                    </a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="/packages">
                      View All Packages
                    </a>
                  </li>
                </ul>
              </li>
              {/* --- End Dropdown --- */}
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
