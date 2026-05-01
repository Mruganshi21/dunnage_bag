import { useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  
  const [showFullAbout, setShowFullAbout] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1607166452427-7e5c4c5f8b7c?w=600" alt="Stuffex Air Dunnage Bag Packaging" />
          <div className="about-image-accent"></div>
        </div>
        <div className="about-content">
<h2>Protecting Shipments<br />Since 2015</h2>
          <p>
            A professional protective packaging solution that keeps cargo safe and secure during transit — inflating within seconds to fill void spaces, prevent load shifting, and cushion your goods from origin to destination.

Inflates in seconds,
Prevents load shifting,
Trucks, trailers & containers,
Virgin PE & Kraft paper
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
            <p>Air Dunnage Bags are inflated with compressed air and placed precisely in the void spaces between cargo units — acting as a reliable padding barrier that prevents movement, impact, and load shifting throughout transit.</p>
            <p>They are the most efficient and trustworthy solution for securing cargo across trucks, trailers, and sea containers, ensuring your products arrive safely and intact while preventing accidents during unloading at your customer's end.</p>
               <p>Equipped with an auto shut-off valve and the fastest-filling technology on earth, each bag is crafted from a Virgin PE Bladder and Extensible Kraft Paper — delivering superior cushioning and void-filling protection for your cargo's entire journey, worldwi</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;