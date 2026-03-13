import React from "react";
import './Services.css';

const servicesList = [
  { id: 1, title: "Ayurvedic Oil Massage", desc: "Traditional herbal massage for full-body relaxation.", icon: "bi-flower1" },
  { id: 2, title: "Joint Pain Relief", desc: "Chronic joint pain relief using warm herbal oils.", icon: "bi-activity" },
  { id: 3, title: "Detox Therapy", desc: "Deep detoxification to remove toxins and improve immunity.", icon: "bi-droplet-half" },
  { id: 4, title: "Foot Reflexology", desc: "Foot zone therapy that stimulates energy pathways.", icon: "bi-bandaid" },
  { id: 5, title: "Head & Shoulder Massage", desc: "Stress-relieving massage for head, neck, and shoulders.", icon: "bi-person-heart" },
  { id: 6, title: "Steam Bath Therapy", desc: "Boosts circulation and detox through herbal steam.", icon: "bi-cloud-haze2" },
  { id: 7, title: "Kizhi Therapy", desc: "Herbal pouch therapy for pain and inflammation relief.", icon: "bi-bag-heart-fill" },
  { id: 8, title: "Spine Therapy", desc: "Special therapy for spine alignment and back pain.", icon: "bi-person-standing" },
  { id: 9, title: "Weight Loss Massage", desc: "Stimulates fat-burning and improves metabolism.", icon: "bi-heart-pulse" },
  { id: 10, title: "Skin Rejuvenation", desc: "Herbal facials and treatments for glowing skin.", icon: "bi-stars" },
];

const Services = () => {
  return (
    <section className="services-container py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="services-title text-gradient display-5 fw-bold mb-3">Our Premium Services</h2>
          <p className="text-muted fs-5">Experience authentic Ayurvedic healing through our specialized treatments.</p>
        </div>
        
        <div className="row g-4">
          {servicesList.map(service => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <div className="service-card card-3d h-100 p-4 text-center glass-panel border-0">
                <div className="icon-wrapper mb-3 mx-auto shadow-sm">
                  <i className={`bi ${service.icon} text-success`}></i>
                </div>
                <h4 className="fw-bold mb-3" style={{color: 'var(--text-primary)'}}>{service.title}</h4>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
