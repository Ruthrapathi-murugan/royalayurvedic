import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import services from '../data/services';
import './ClinicPage.css';
import AyurvedicPackages from './AyurvedicPackages';
import wellnessImg from '../assets/wellness.jpg'; // Import local asset
import gallery1 from '../assets/gallery-1.jpg'; // Import newly downloaded local gallery image 1
import gallery4 from '../assets/gallery-4.jpg';
import gallery2 from '../assets/male-health.jpg';
import gallery3 from '../assets/joint-muscle.jpg';
import sparoomImg from '../assets/sparoom.jpg';
  
const ClinicPage = () => {
  const content = {
    title: 'Royal Ayurveda & Varma Clinic, Palani',
    notice1: 'This treatment center is exclusively for women – Expert care in this field.',
    notice2: 'Only for Females – We have very special expertise in this field.',
    notice3: ' - Doorstep service available',
    call: 'Mobile Number',
    servicesTitle: 'Our Clinic Offers',
    note: 'Treatments available for children to elderly. Prior appointment required.',
    galleryTitle: 'Treatment Image Gallery'
  };

  // High-quality online photos for the gallery
  const galleryImages = [
  gallery1, // Local image 1
  gallery2,
  gallery3,
  gallery4 // Local image 4
];
  return (
    <div className="clinic-page pb-5">
      {/* Hero Header */}
      <div className="hero-section text-white text-center p-5 mb-5 shadow-premium position-relative">
        <h1 className="fw-bold display-4 text-white position-relative z-1 mb-3">{content.title}</h1>
        <p className="fs-4 lead text-white-50 position-relative z-1">Experience Authentic Wellness and Holistic Healing</p>
      </div>

      <div className="container">
        
        {/* Welcome Intro Section with Image */}
        <div className="row g-5 align-items-center mb-5 mt-2">
          <div className="col-lg-6">
            <div className="card-3d border-0 p-2 glass-panel">
  <img
    src={sparoomImg}
    alt="Ayurvedic Spa Welcome"
    className="img-fluid rounded hover-zoom"
    style={{ width: "100%", height: "350px", objectFit: "cover" }}
  />
</div>
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold text-gradient mb-4 display-6">Welcome to Your Sanctuary of Healing</h2>
            <p className="fs-5 text-muted lh-lg mb-4">
              At Royal Ayurveda, we blend ancient wisdom with modern comfort to provide you with an unparalleled wellness experience. Our specialized treatments are designed to restore the natural balance of your mind, body, and spirit.
            </p>
             <Link to="/services">
                <button className="btn-3d px-4 py-2">Explore All Therapies <i className="bi bi-arrow-right ms-2"></i></button>
             </Link>
          </div>
        </div>

        {/* Notice Section Redesigned */}
        <div className="notice-box mx-auto mt-2 mb-5 card-3d border-0 overflow-hidden">
          <div className="row g-0 align-items-center">
           <div className="col-md-5">
  <img
    src={wellnessImg}
    alt="Women Wellness"
    className="img-fluid h-100 w-100"
    style={{ objectFit: "cover", minHeight: "350px" }}
  />
</div>
             <div className="col-md-7 p-5 bg-gradient-custom text-white h-100 d-flex flex-column justify-content-center">
                <h2 className='text-center mb-4 display-5 fw-bold' style={{color: '#d4af37'}}>Exclusive For Women</h2>
                <div className="fs-5 lh-lg">
                  <p className="mb-3"><i className="bi bi-person-hearts me-3 text-warning"></i>{content.notice1}</p>
                  <p className="mb-4"><i className="bi bi-shield-check me-3 text-warning"></i>{content.notice2}</p>
                  <hr className="border-warning opacity-50"/>
                  <h4 className="m-0 text-center mt-4">
                    <i className="bi bi-house-door-fill me-2" style={{color: '#d4af37'}}></i>{content.notice3}
                  </h4>
                </div>
             </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="contact-box text-center p-4 mb-5 card-3d" style={{background: 'linear-gradient(145deg, #112211, #1a421a)'}}>
          <h3 className="m-0 text-white">
            <i className="bi bi-telephone-fill me-3" style={{color: '#d4af37'}}></i>
            {content.call}: <strong style={{color: '#a5d6a7'}}>9952161959</strong>
          </h3>
        </div>

        {/* Services List Block */}
        <div className="p-5 rounded card-3d service-box mx-auto mb-5 border-0 bg-white">
          <h2 className="text-center mb-5 text-gradient display-6">{content.servicesTitle}</h2>
          <div className="row gy-3">
            {services.map((s, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <Link to={`/services/${s.id}`} style={{ textDecoration: 'none' }}>
                  <div className="service-item glass-panel p-3 text-center h-100 d-flex align-items-center justify-content-center fw-bold">
                    {s.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <AyurvedicPackages />

        {/* Note Bar */}
        <div className="text-center fw-bold mt-5 mb-5 p-4 card-3d border-0 bg-white glass-panel">
          <h5 className="m-0" style={{ color: 'var(--primary-color)' }}>
            <i className="bi bi-info-circle-fill me-2" style={{color: '#d4af37'}}></i>{content.note}
          </h5>
        </div>

        {/* Dynamic Photo Gallery */}
        <h2 className="text-center fw-bold mt-5 mb-4 text-gradient display-6">{content.galleryTitle}</h2>
        <div className="row g-4 mb-4">
          {galleryImages.map((imgUrl, index) => (
            <div className="col-6 col-md-3" key={index}>
              <div className="gallery-img-wrapper card-3d p-2 bg-white border-0 hover-zoom">
                <img src={imgUrl} alt={`Spa Element ${index + 1}`} className="img-fluid gallery-img rounded" style={{height: '250px', objectFit: 'cover', width: '100%'}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
