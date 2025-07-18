// src/components/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import services from '../data/services';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) return <div className="p-5 text-center">Service not found.</div>;

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-secondary mb-3">⬅ Back to Clinic</Link>
      <h2 className="mb-3">{service.title}</h2>
      <img src={service.image} alt={service.title} className="img-fluid mb-3" style={{ maxHeight: '300px', borderRadius: '10px' }} />
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
