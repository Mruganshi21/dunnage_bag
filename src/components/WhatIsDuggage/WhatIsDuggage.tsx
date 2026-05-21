import { Link } from 'react-router-dom';
import dunnageImage from '../../assets/whatisdunnagebag.png';
import './WhatIsDuggage.css';

const WhatIsDuggage = () => {
  return (
    <section className="what-is-section">
      <div className="what-is-container">
        <div className="what-is-header">
          <h1>Why Choose Air Dunnage Bag?</h1>
        </div>

        <div className="dunnage-info">
          <div className="dunnage-image">
            <img src={dunnageImage} alt="Dunnage Bag" />
          </div>
          <div className="dunnage-description">
            <p>
              Dunnage Air Bags are large, industrial-grade inflatable bags designed to provide superior stability
              to boxes and pallets within cargo loads. Strategically positioned in the gaps between cargo, 
              these bags inflate rapidly with compressed air within seconds — effectively filling void spaces
              and creating a reliable cushioning effect that prevents shifting, impact, and mechanical damage to
              both the outer packaging and the contents within.
            </p>
            
            <Link to="/products" className="dunnage-btn">View Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDuggage;