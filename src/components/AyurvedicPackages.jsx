import React from "react";
import "./AyurvedicPackages.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import weightloss from "../assets/men.jpg"; // Keeping import for reference but using URL below
import stressrelief from "../assets/Shirodhara.jpg";
import arthritis from "../assets/Arthritis.jpg";
import skincare from "../assets/skin-treatment-treat.jpg";
import { Link } from "react-router-dom";

const packages = [
  {
    title: "Weight loss Treatments",
    description:
      "Specially packaged Ayurvedic Treatment to reduce overweight and related problems.",
    duration: "14 to 21 Days Packages",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Stress Relief Therapies",
    description:
      "Ayurvedic Treatments and therapies to get relief from stress, anxiety, insomnia and sleep disorders.",
    duration: "1 to 14 Days Packages",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Arthritis Treatments",
    description:
      "Result Oriented Ayurvedic treatment for all types of arthritis. Long lasting results and minimal recurrence.",
    duration: "7 to 21 Days Packages",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Skin Care Treatment",
    description:
      "Ayurvedic Skin Care Treatment for rejuvenation and diseases. Pure herbal and no side effects.",
    duration: "3 to 14 Days Packages",
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AyurvedicPackages() {
  return (
    <section className="py-5 bg-transparent text-center">
      <div className="container">
        <h2 className="fw-bold mb-1 text-gradient">Have a look at our</h2>
        <h3 className="fw-bold mb-4" style={{color: 'var(--text-primary)'}}>Specialised Ayurvedic Treatment Packages</h3>
        <p className="text-secondary mb-5 fs-5">
          Our Specialised Kerala Ayurvedic Packages in Coimbatore includes Detoxification programme,
          Slimming therapy, Skincare Treatments, Stress relief packages etc.
        </p>

        <div className="row g-4 mb-5">
          {packages.map((pkg, index) => (
            <div className="col-md-6" key={index}>
              <div className="card-3d border-0 h-100 overflow-hidden glass-panel">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <img
                      src={pkg.img}
                      className="img-fluid h-100"
                      alt={pkg.title}
                      style={{ objectFit: "cover", minHeight: "200px", width: "100%" }}
                    />
                  </div>
                  <div className="col-md-7 d-flex flex-column justify-content-center p-4 text-start bg-transparent">
                    <h5 className="fw-bold" style={{color: 'var(--primary-color)'}}>
                      <i className="bi bi-leaf-fill text-success me-2"></i>
                      {pkg.title}
                    </h5>
                    <p className="text-muted small mb-3 flex-grow-1">{pkg.description}</p>
                    <div className="p-2 rounded bg-white bg-opacity-50 border shadow-sm d-inline-block text-center mt-auto" style={{borderColor: 'rgba(46, 125, 50, 0.2) !important'}}>
                      <span className="fw-bold text-dark"><i className="bi bi-clock-history me-2 text-warning"></i>{pkg.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Link to="/packages">
            <button className="btn-3d px-5 py-3 fs-5">
              MORE TREATMENTS <i className="bi bi-arrow-right-circle-fill ms-2"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
