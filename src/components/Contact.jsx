// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section py-5 bg-light" id="contact">
      <div className="container">
        <h5 className="text-center section-subtitle">CONTACT US</h5>
        <h2 className="text-center section-title">
          Contact <span className="highlight">FOR ANY QUERY</span>
        </h2>

        <div className="row text-center my-4">
          <div className="col-md-4 mb-3">
            <h6 className="contact-heading">BOOKING</h6>
            <p><i className="bi bi-envelope-fill text-warning"></i> royalayurvedictreatment@gmail.com</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="contact-heading">CONTACT NUMBERS</h6>
            <p><i className="bi bi-telephone-fill text-warning"></i> +91 9952161959</p>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="contact-heading">GENERAL</h6>
            <p><i className="bi bi-envelope-fill text-warning"></i> royalayurvedictreatment@gmail.com</p>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-md-6 mb-4">
            <iframe
              title="Royal Ayurvedic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.8109978475445!2d77.52209462451165!3d10.443895358351728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de66ce6a9173%3A0x57ac49a0f712d146!2sPVT%20RESIDENCY!5e0!3m2!1sen!2sin!4v1761297406018!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="col-md-6">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100 fw-bold">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
