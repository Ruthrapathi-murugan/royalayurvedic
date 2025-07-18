// src/App.jsx
import React from 'react';
import './App.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for interactivity
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClinicPage from './components/ClinicPage';
import ServiceDetail from './components/ServiceDetail';
import Navbar1 from './components/Navbar1';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar1 />
              
      <Routes>
        <Route path="/" element={<ClinicPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
           <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
         <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
