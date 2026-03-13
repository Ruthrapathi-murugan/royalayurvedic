import React, { useState } from "react";
import "./Packages.css";

const Packages = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  const programs = [
    {
      id: "destress",
      title: "De-stress Program",
      icon: "bi-flower3",
      shortDesc: "Relieves mental stress, improves focus, and promotes deep relaxation.",
      imgUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
      benefits: [
        "Relieves deep-seated tension and mental fatigue",
        "Promotes better sleep and cures insomnia",
        "Improves overall vitality and emotional wellness",
        "Reduces anxiety and harmonizes the nervous system"
      ],
      therapies: [
        "Abhyanga (Ayurvedic full body massage)",
        "Shirodhara (Continuous oil pouring therapy)",
        "Herbal steam therapy (Swedana)",
        "Nasyam (Nasal drops for head clarity)"
      ],
      detailedDesc: "Our De-stress program is specifically tailored to combat the fast-paced modern lifestyle. By using warm, medicated oils specifically chosen for your dosha, we target the nervous system directly to induce a state of profound peace. It is highly recommended for busy professionals and anyone experiencing burnout."
    },
    {
      id: "detox",
      title: "Detox Program (Panchakarma)",
      icon: "bi-droplet-half",
      shortDesc: "Cleanses toxins from your body and rejuvenates your entire system.",
      imgUrl: "https://images.unsplash.com/photo-1521500473859-0012e8ba6062?q=80&w=800&auto=format&fit=crop",
      benefits: [
        "Removes deep-rooted impurities and toxins (Ama)",
        "Restores healthy digestion and improves metabolism",
        "Boosts immunity and cellular regeneration",
        "Clears the skin and brings a natural radiant glow"
      ],
      therapies: [
        "Abhyanga (Massage with herbal oils)",
        "Swedana (Herbal steam bath to open pores)",
        "Virechana (Purgation therapy)",
        "Basti (Medicated enema therapy)"
      ],
      detailedDesc: "Detoxification is the cornerstone of Ayurveda. This intensive program not only flushes out toxins that accumulate from poor diet and pollution but also resets your metabolic fire (Agni). You will feel lighter, more energetic, and completely renewed from the inside out."
    },
    {
      id: "slimming",
      title: "Slimming Program",
      icon: "bi-person-heart",
      shortDesc: "Healthy weight management using natural herbal methods and diet guidance.",
      imgUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      benefits: [
        "Reduces excess body fat safely and naturally",
        "Improves lipid metabolism and prevents fat accumulation",
        "Increases sustained energy levels over the day",
        "Tones the skin and muscles"
      ],
      therapies: [
        "Udwarthanam (Vigorous herbal powder dry massage)",
        "Abhyanga (Specific fat-reducing oil massage)",
        "Swedana (Herbal steam bath to melt fat)",
        "Pizhichil (Warm medicated oil bath)"
      ],
      detailedDesc: "Unlike harsh crash diets, our Ayurvedic slimming program focuses on balancing the Kapha dosha. By using specialized dry powder massages (Udwarthanam), we break down subcutaneous fat, boost blood circulation, and rid the body of excess fluid retention. A customized diet plan ensures long-lasting results."
    },
    {
      id: "bridal",
      title: "Bridal Readiness Program",
      icon: "bi-stars",
      shortDesc: "A complete rejuvenation and beauty-enhancing program for your big day.",
      imgUrl: "https://images.unsplash.com/photo-1620608552391-abcf8d80cbe5?q=80&w=800&auto=format&fit=crop",
      benefits: [
        "Enhances natural skin glow and evens out tone",
        "Deeply relaxes the mind during stressful wedding prep",
        "Boosts natural beauty and hair health",
        "Purifies the blood for long-lasting radiance"
      ],
      therapies: [
        "Mukhalepam (Ayurvedic face packs and herbal scrubs)",
        "Sarvanga Abhyanga (Full body relaxation massage)",
        "Ksheeradhara (Medicated milk pouring therapy)",
        "Shiroabhyanga (Deep head and scalp massage)"
      ],
      detailedDesc: "Prepare for your special day with our luxurious bridal packages. We treat beauty holistically—meaning true radiance comes from within. Through detoxifying body therapies, stress-relieving head massages, and skin-brightening herbal pastes, you will walk down the aisle looking and feeling like royalty."
    },
    {
      id: "postnatal",
      title: "Post Natal Care",
      icon: "bi-heart-pulse",
      shortDesc: "Helps new mothers regain energy, strength, and hormonal balance naturally.",
      imgUrl: "https://images.unsplash.com/photo-1563229864-77bfdffdc8a8?q=80&w=800&auto=format&fit=crop",
      benefits: [
        "Improves natural lactation for the baby",
        "Strengthens the lower back, joints, and pelvic area",
        "Accelerates uterus recovery and prevents postpartum depression",
        "Restores hormonal balance and overall vitality"
      ],
      therapies: [
        "Post-natal Abhyanga (Warm oil massage tailored for mothers)",
        "Herbal Water Baths (To prevent infection and soothe)",
        "Belly Binding techniques (To tone abdominal muscles)",
        "Customized Herbal Tonics (Lehyams specific for mothers)"
      ],
      detailedDesc: "The postnatal phase is a incredibly delicate time requiring special care (Sutika Paricharya). Our expert treatments help new mothers to physically recover from childbirth, soothe the mind, and gain the necessary strength to care for their newborn with joy and energy. Treatments can be provided at home."
    }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: 'start' });
  };

  return (
    <section className="packages py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-gradient display-5 mb-3">
            Best Wellness Programs for Your Body and Mind
          </h2>
          <p className="text-muted fs-5">
            Discover our premium Ayurvedic care programs designed specifically for holistic healing in Coimbatore.
          </p>
        </div>

        {/* Beautiful 3D Navigation Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {programs.map((prog) => (
            <button key={prog.id} className="btn-3d" onClick={() => scrollToSection(prog.id)}>
              <i className={`bi ${prog.icon} me-2`}></i>{prog.title}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="row g-5">
          {programs.map((prog) => (
            <div className="col-lg-12" key={prog.id} id={prog.id}>
              <div className="program-card card-3d p-4 border-0 position-relative glass-panel">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center mb-3">
                  <div className="card-icon-wrapper text-gradient flex-shrink-0 mb-0">
                    <i className={`bi ${prog.icon} display-4`}></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-2" style={{color: 'var(--primary-color)'}}>{prog.title}</h3>
                    <p className="fs-5 m-0">{prog.shortDesc}</p>
                  </div>
                </div>
                
                {/* Expanded Content Section */}
                <div className={`expanded-content ${expanded === prog.id ? 'show' : ''}`}>
                  <hr style={{borderColor: 'var(--primary-color)', opacity: 0.2}} />
                  <p className="text-muted fst-italic mb-4">{prog.detailedDesc}</p>
                  
                  <div className="row mt-4 g-4 align-items-center">
                    <div className="col-lg-4">
                       <img src={prog.imgUrl} alt={prog.title} className="img-fluid rounded shadow-sm hover-zoom w-100" style={{objectFit: 'cover', height: '250px'}} />
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h5 className="fw-bold text-gradient border-bottom pb-2">Benefits</h5>
                          <ul className="list-unstyled custom-list mt-3">
                            {prog.benefits.map((b, i) => (
                              <li key={i} className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>{b}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-6 mb-3">
                          <h5 className="fw-bold text-gradient border-bottom pb-2">Core Therapies</h5>
                          <ul className="list-unstyled custom-list mt-3">
                            {prog.therapies.map((t, i) => (
                              <li key={i} className="mb-2"><i className="bi bi-droplet-fill me-2" style={{color: 'var(--accent-color)'}}></i>{t}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expand Toggle Button */}
                <div className="text-center pt-4">
                  <button 
                    className="btn btn-outline-success rounded-pill px-4" 
                    onClick={() => toggleExpand(prog.id)}
                    style={{borderWidth: '2px', fontWeight: '600'}}
                  >
                    {expanded === prog.id ? 'Show Less' : 'More Inside'}
                    <i className={`bi bi-chevron-${expanded === prog.id ? 'up' : 'down'} ms-2`}></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
