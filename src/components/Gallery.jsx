// src/components/Gallery.js
import React from 'react';
import services from '../data/services';
import './Gallery.css'; // Optional for hover effect or styling

const Gallery = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center fw-bold mb-4">Treatment Image Gallery</h3>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <div className="gallery-img-wrapper">
              <img
                src={service.image}
                alt={`Service ${index + 1}`}
                className="img-fluid rounded shadow-sm gallery-img"
                style={{ height: '180px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
