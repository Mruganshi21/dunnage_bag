import { Link } from 'react-router-dom';
import './Overview.css';

const Features = () => {
  const featuresData = [
    {
      title: 'Superior Protection',
      description: 'Our dunnage bags provide excellent cushioning and impact absorption, protecting your goods during transit.',
      icon: '🛡️'
    },
    {
      title: 'Cost-Effective',
      description: 'Reusable and durable design helps reduce packaging costs significantly.',
      icon: '💰'
    },
    {
      title: 'Easy to Use',
      description: 'Simple inflation and deflation process, saving time and labor costs.',
      icon: '⚡'
    },
    {
      title: 'Eco-Friendly',
      description: 'Made from recyclable materials, helping you meet sustainability goals.',
      icon: '🌱'
    },
    {
      title: 'Versatile Applications',
      description: 'Suitable for various industries including automotive, pharmaceuticals, food & beverage, and more.',
      icon: '📦'
    },
    {
      title: 'Customizable',
      description: 'Available in multiple sizes and specifications to meet specific cargo requirements.',
      icon: '🔧'
    }
  ];

  return (
    <div className="features-page">
      <div className="features-container">
        <div className="features-header">
          <Link to="/about" className="back-link">← Back to Overview</Link>
          <h2>Features & Benefits</h2>
          <p>Discover why Stuffex dunnage bags are the preferred choice for safe cargo transport</p>
        </div>
        <div className="features-grid">
          {featuresData.map((item, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;