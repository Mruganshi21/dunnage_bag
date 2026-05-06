import { useState } from 'react';
import aboutImage from '../../assets/aboutus.jpeg';
import './AboutSection.css';

const AboutSection = () => {
  
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Dunnage Bag pvt. ltd." />
          <div className="about-image-accent"></div>
        </div>
        <div className="about-content">
          <h1>Who Are We?</h1>
          <p>
Established In 2010, Dunnage Bag Pvt. Ltd. Is A Leading Manufacturer Of Air Dunnage Bags With Headquarter & Production Plant In Bharuch Gujarat, India.
          </p>
          <button className="about-btn" onClick={() => setShowFullAbout(true)}>
            Learn Our Story
          </button>
        </div>
      </div>

      {showFullAbout && (
        <div className="about-modal" onClick={() => setShowFullAbout(false)}>
          <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowFullAbout(false)}>&times;</button>
            <h2></h2>
            <p>Stuffex™ Air Dunnage Bags are engineered to deliver superior cargo stabilization, load protection, and transport safety across all modes of logistics — road, rail, sea, and intermodal shipping.</p>

<p>Manufactured using multi-layer co-extruded polyethylene (PE) inner bladders combined with high-strength woven polypropylene (PP) or kraft paper exteriors, Stuffex™ Air Dunnage Bags are designed to prevent load shifting, damage, and collapse during transit.</p>

<p>These lightweight, easy-to-use inflatable bags provide an economical, reliable, and reusable solution for filling voids, cushioning cargo, and ensuring goods arrive safely and intact — minimizing product damage, claims, and operational losses.</p>

<p className="highlight-text">Stuffex™ isn't just an airbag — it's your first line of defence against cargo damage</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;