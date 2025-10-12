import React from "react";
import "./AyurvedicPackages.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import weightloss from "../assets/men.jpg";
import stressrelief from "../assets/Shirodhara.jpg";
import arthritis from "../assets/Arthritis.jpg";
import skincare from "../assets/skin-treatment-treat.jpg";


const packages = [
  {
    title: "Weight loss Treatments",
    description:
      "Specially packaged Ayurvedic Treatment to reduce overweight and related problems.",
    duration: "14 to 21 Days Packages",
    img: weightloss, // replace with your real image
  },
  {
    title: "Stress Relief Therapies",
    description:
      "Ayurvedic Treatments and therapies to get relief from stress, anxiety, insomnia and sleep disorders.",
    duration: "1 to 14 Days Packages",
    img:stressrelief,
  },
  {
    title: "Arthritis Treatments",
    description:
      "Result Oriented Ayurvedic treatment for all types of arthritis. Long lasting results and minimal recurrence.",
    duration: "7 to 21 Days Packages",
    img: arthritis,
  },
  {
    title: "Skin Care Treatment",
    description:
      "Ayurvedic Skin Care Treatment for rejuvenation and diseases. Pure herbal and no side effects.",
    duration: "3 to 14 Days Packages",
    img: skincare,
  },
];

export default function AyurvedicPackages() {
  return (
    <section className="py-5 bg-light text-center">
      <div className="container">
        <h1 className="fw-bold mb-1">Have a look at our</h1>
        <h2 className="fw-bold mb-3">Specialised Ayurvedic Treatment Packages</h2>
        <p className="text-secondary mb-5">
          Our Specialised Kerala Ayurvedic Packages in Coimbatore includes Detoxification programme,
          Slimming therapy, Skincare Treatments, Stress relief packages etc.
        </p>

        <div className="row g-4">
          {packages.map((pkg, index) => (
            <div className="col-md-6" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-6">
                    <img
                      src={pkg.img}
                      className="img-fluid h-100 rounded-start"
                      alt={pkg.title}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center p-3 text-start bg-white">
                  <h5 className="fw-bold">
  <i className="bi bi-leaf text-success me-2"></i>
  {pkg.title}
</h5>
                    <p className="text-muted small mb-2">{pkg.description}</p>
                    <p className="fw-semibold text-dark">{pkg.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <button className="btn btn-success rounded-pill px-4 py-2">
            MORE TREATMENTS
          </button>
        </div>
      </div>
    </section>
  );
}
