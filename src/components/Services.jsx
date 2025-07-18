import React from "react";
import './Services.css';

const services = [
  {
    id: 1,
    title: "Ayurvedic Oil Massage",
    desc: "Traditional herbal massage for full-body relaxation.",
    icon: "💆‍♀️"
  },
  {
    id: 2,
    title: "Joint Pain Relief",
    desc: "Chronic joint pain relief using warm herbal oils.",
    icon: "🦴"
  },
  {
    id: 3,
    title: "Detox Therapy",
    desc: "Deep detoxification to remove toxins and improve immunity.",
    icon: "💧"
  },
  {
    id: 4,
    title: "Foot Reflexology",
    desc: "Foot zone therapy that stimulates energy pathways.",
    icon: "🦶"
  },
  {
    id: 5,
    title: "Head & Shoulder Massage",
    desc: "Stress-relieving massage for head, neck, and shoulders.",
    icon: "🧖"
  },
  {
    id: 6,
    title: "Steam Bath Therapy",
    desc: "Boosts circulation and detox through herbal steam.",
    icon: "🌫️"
  },
  {
    id: 7,
    title: "Kizhi Therapy",
    desc: "Herbal pouch therapy for pain and inflammation relief.",
    icon: "🌿"
  },
  {
    id: 8,
    title: "Spine Therapy",
    desc: "Special therapy for spine alignment and back pain.",
    icon: "🧍"
  },
  {
    id: 9,
    title: "Weight Loss Massage",
    desc: "Stimulates fat-burning and improves metabolism.",
    icon: "⚖️"
  },
  {
    id: 10,
    title: "Skin Rejuvenation",
    desc: "Herbal facials and treatments for glowing skin.",
    icon: "✨"
  },
];


const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
