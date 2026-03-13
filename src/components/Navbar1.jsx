import React from 'react';
import './Navbar1.css'; // Custom CSS for 3D effect
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from 'react-router-dom';

const Navbar1 = () => {
  const navigate = useNavigate();

  const handlePackageClick = (e, sectionId) => {
    e.preventDefault();
    // Navigate to packages first, then scroll
    navigate('/packages');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand display-6 text-white fw-bold" to="/">
            ROYAL AYURVEDIC
          </Link>
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
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">Services</Link>
              </li>
              
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
                    <a className="dropdown-item" href="#" onClick={(e) => handlePackageClick(e, 'slimming')}>
                      Ayurvedic Weight Loss
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => handlePackageClick(e, 'detox')}>
                      Panchakarma Therapy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => handlePackageClick(e, 'bridal')}>
                      Rejuvenation Treatment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={(e) => handlePackageClick(e, 'destress')}>
                      Detox & Wellness
                    </a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link className="dropdown-item fw-bold text-success" to="/packages">
                      View All Packages
                    </Link>
                  </li>
                </ul>
              </li>
              {/* --- End Dropdown --- */}
              
              <li className="nav-item">
                <Link className="nav-link text-white" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
