import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/ayur.jpg';
import img3 from '../assets/img2.jpg';
import img4 from '../assets/img4.jpg';
import { Link } from 'react-router-dom';
import services from '../data/services';
import './ClinicPage.css'; // Custom CSS for styling
import AyurvedicPackages from './AyurvedicPackages';

const ClinicPage = () => {
  const content = {
    title: 'Royal Ayurveda & Varma Clinic, Palani',
    notice1: 'This treatment center is exclusively for women – Expert care in this field.',
    notice2: 'Only for Females – We have very special expertise in this field.',
    notice3: ' -Doorstep service available',
    call: 'Mobile Number',
    servicesTitle: 'Our Clinic Offers',
    services: [
      'Ayurvedic Oil Massage', 'All Joint Pains', 'All Muscle Stiffness', 'All Paralysis Issues',
      'Joint & Muscle Disorders', 'Child Wind Issues', 'Gynecological Problems', 'Improving Blood Circulation',
      'Mental Calmness', 'Body Detox', 'Insomnia', 'Migraine Headache', 'Heavy Head Feeling',
      'Hand/Leg Numbness', 'Foot Burning Sensation', 'Chronic Wounds', 'Male Health Issues',
      'Kidney Disorders', 'Reproductive Issues'
    ],
    note: 'Treatments available for children to elderly. Prior appointment required.',
    galleryTitle: 'Treatment Image Gallery'
  };

  return (
    <div className="clinic-page">
      {/* Header */}
      <div className="hero-section text-white text-center p-4">
        <h1 className="fw-bold">{content.title}</h1>
      </div>

      {/* Notice */}
    <div className="notice-box notice-bg mx-auto mt-1 mb-1 text-white">
    
  <div className="notice-content">
    <h1 className='text-center'><u>Women's Only</u></h1>
    👩‍🦰 {content.notice1} <br />
    <span>{content.notice2}</span>
    <span className="d-block"><h4><i class="bi bi-house-door">{content.notice3}</i></h4></span>
  </div>
</div>

      {/* Contact */}
      <div className="contact-box text-white text-center fw-bold p-4 mb-4">
        {content.call}: <strong>9952161959</strong>
      </div>

      {/* Services */}
    <div className="bg-white p-4 rounded shadow service-box mx-auto mb-4">
  <h3 className="text-center mb-4">{content.servicesTitle}</h3>
  <div className="row">
    {services.map((s, index) => (
      <div className="col-12 col-md-4 mb-2" key={index}>
        <Link  to={`/services/${s.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <li>{s.title}</li>
        </Link>
      </div>
    ))}
  </div>
</div>
<AyurvedicPackages/>


      {/* Note */}
      <div className="text-center fw-bold mt-3" style={{ color: '#333' }}>
        {content.note}
      </div>
    
   {/* Gallery */}
<h4 className="text-center fw-bold mt-4">{content.galleryTitle}</h4>
<div className="container">
  <div className="row">
    {[img1, img2, img3, img4].map((img, index) => (
      <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
        <div className="gallery-img-wrapper">
          <img
            src={img}
            alt={`Treatment ${index + 1}`}
            className="img-fluid gallery-img"
          />
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default ClinicPage;
