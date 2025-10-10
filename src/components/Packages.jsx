import React from "react";
import "./Packages.css";

const Packages = () => {
  // Helper function for smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="packages py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4 text-success">
          Best Wellness Programs for Your Body and Mind
        </h2>
        <p className="text-center mb-5">
          Our Ayurvedic treatments offer the best wellness care programs in Coimbatore:
        </p>

        {/* Buttons to scroll */}
        <ul className="text-center list-inline mb-5">
          <li className="list-inline-item m-2">
            <button className="btn btn-success" onClick={() => scrollToSection("destress")}>
              De-Stress
            </button>
          </li>
          <li className="list-inline-item m-2">
            <button className="btn btn-success" onClick={() => scrollToSection("detox")}>
              Detox
            </button>
          </li>
          <li className="list-inline-item m-2">
            <button className="btn btn-success" onClick={() => scrollToSection("slimming")}>
              Slimming
            </button>
          </li>
          <li className="list-inline-item m-2">
            <button className="btn btn-success" onClick={() => scrollToSection("bridal")}>
              Bridal
            </button>
          </li>
          <li className="list-inline-item m-2">
            <button className="btn btn-success" onClick={() => scrollToSection("postnatal")}>
              Post Natal
            </button>
          </li>
        </ul>

        {/* De-stress Program */}
        <div className="program mb-5" id="destress">
          <h3 className="text-success">De-stress Program</h3>
          <p>
            This program relieves mental stress, improves focus, and promotes deep relaxation through Ayurvedic
            therapies and herbal treatments.
          </p>
          <h5>Benefits:</h5>
          <ul>
            <li>Relieves tension and fatigue</li>
            <li>Promotes better sleep</li>
            <li>Improves overall vitality and wellness</li>
          </ul>
          <h5>Therapies:</h5>
          <ul>
            <li>Abhyanga (Ayurvedic full body massage)</li>
            <li>Shirodhara (oil pouring therapy)</li>
            <li>Herbal steam therapy</li>
          </ul>
        </div>

        {/* Detox Program */}
        <div className="program mb-5" id="detox">
          <h3 className="text-success">Detox Program</h3>
          <p>
            Cleanses toxins from your body and rejuvenates your system through personalized Ayurvedic detox treatments.
          </p>
          <h5>Benefits:</h5>
          <ul>
            <li>Removes impurities and toxins</li>
            <li>Improves metabolism</li>
            <li>Boosts immunity</li>
          </ul>
          <h5>Therapies:</h5>
          <ul>
            <li>Abhyanga (massage with herbal oils)</li>
            <li>Swedana (herbal steam)</li>
            <li>Panchakarma cleansing</li>
          </ul>
        </div>

        {/* Slimming Program */}
        <div className="program mb-5" id="slimming">
          <h3 className="text-success">Slimming Program</h3>
          <p>
            Designed for healthy weight management using natural methods, herbal preparations, and Ayurveda diet guidance.
          </p>
          <h5>Benefits:</h5>
          <ul>
            <li>Reduces excess body fat naturally</li>
            <li>Improves metabolism</li>
            <li>Increases energy levels</li>
          </ul>
          <h5>Therapies:</h5>
          <ul>
            <li>Udwarthanam (herbal powder massage)</li>
            <li>Abhyanga (oil massage)</li>
            <li>Swedana (herbal steam bath)</li>
          </ul>
        </div>

        {/* Bridal Readiness Program */}
        <div className="program mb-5" id="bridal">
          <h3 className="text-success">Bridal Readiness Program</h3>
          <p>
            A complete rejuvenation and beauty-enhancing program to make your skin glow and relieve stress before your big day.
          </p>
          <h5>Benefits:</h5>
          <ul>
            <li>Enhances skin glow and tone</li>
            <li>Improves relaxation</li>
            <li>Boosts natural beauty</li>
          </ul>
          <h5>Therapies:</h5>
          <ul>
            <li>Face packs and herbal scrubs</li>
            <li>Full body massage</li>
            <li>Steam therapy</li>
          </ul>
        </div>

        {/* Post Natal Care */}
        <div className="program mb-5" id="postnatal">
          <h3 className="text-success">Post Natal Care</h3>
          <p>
            Helps new mothers regain energy, strength, and hormonal balance through specialized Ayurvedic postnatal care.
          </p>
          <h5>Benefits:</h5>
          <ul>
            <li>Improves lactation</li>
            <li>Strengthens back and joints</li>
            <li>Enhances overall recovery</li>
          </ul>
          <h5>Therapies:</h5>
          <ul>
            <li>Abhyanga (warm oil massage)</li>
            <li>Steam therapy</li>
            <li>Herbal tonics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Packages;
