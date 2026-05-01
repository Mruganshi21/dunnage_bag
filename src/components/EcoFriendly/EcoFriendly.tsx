import './EcoFriendly.css';

const EcoFriendly = () => {
  return (
    <section className="eco-section">
      <div className="eco-container">
        <span className="eco-badge">🌱 Eco-Friendly</span>
        <h2>Sustainable Packaging</h2>
        <p>Our duggage bags are made from 100% recycled materials and are fully biodegradable. Pack with peace knowing you're helping the environment.</p>
        
        <div className="eco-features">
          <div className="eco-item">
            <span className="eco-icon">♻️</span>
            <h4>100% Recycled</h4>
            <p>Made from post-consumer waste</p>
          </div>
          <div className="eco-item">
            <span className="eco-icon">🌿</span>
            <h4>Biodegradable</h4>
            <p>Breaks down naturally</p>
          </div>
          <div className="eco-item">
            <span className="eco-icon">📦</span>
            <h4>Zero Waste</h4>
            <p>Fully recyclable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendly;