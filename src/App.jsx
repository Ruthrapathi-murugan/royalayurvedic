// src/App.jsx
import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClinicPage from './components/ClinicPage';
import ServiceDetail from './components/ServiceDetail';
import Navbar1 from './components/Navbar1';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Packages from './components/Packages'; // ← Import Packages

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
        <Route path="/packages" element={<Packages />} /> {/* ← Add this route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
