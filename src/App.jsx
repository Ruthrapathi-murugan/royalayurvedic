import React, { useEffect } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ClinicPage from './components/ClinicPage';
import ServiceDetail from './components/ServiceDetail';
import Navbar1 from './components/Navbar1';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Packages from './components/Packages';

// ✅ Custom hook to update the document title based on the route
function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    let title = "Royal Ayurvedic Body Massage | Best Ayurvedic Spa in Palani";

    if (location.pathname === "/services") title = "Our Ayurvedic Services | Royal Ayurvedic Spa Palani";
    else if (location.pathname.startsWith("/services/")) title = "Ayurvedic Treatment Details | Royal Ayurvedic Spa Palani";
    else if (location.pathname === "/gallery") title = "Gallery | Royal Ayurvedic Body Massage Palani";
    else if (location.pathname === "/contact") title = "Contact Us | Royal Ayurvedic Body Massage Palani";
    else if (location.pathname === "/packages") title = "Ayurvedic Treatment Packages | Royal Ayurvedic Spa Palani";

    document.title = title;
  }, [location]);
}

// ✅ A wrapper component that has Router context
function PageWrapper() {
  usePageTitle();

  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<ClinicPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
      <Footer />
    </>
  );
}

// ✅ Main App component
function App() {
  return (
    <Router>
      <PageWrapper />
    </Router>
  );
}

export default App;
