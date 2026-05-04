import { Link } from 'react-router-dom';
import './Overview.css';

const Features = () => {
  const featuresData = [
    {
      title: '100% Virgin & Recyclable',
      description: 'Made from 100% virgin & recyclable outer material for sustainable packaging.',
      icon: '♻️'
    },
    {
      title: 'Multilayer Film Technology',
      description: 'Multilayer film for long lasting air holding characteristic.',
      icon: '🔒'
    },
    {
      title: 'Imported Spring Valve',
      description: 'Universally approved imported spring valve for reliable performance.',
      icon: '✓'
    },
    {
      title: 'Double Folding & Stitching',
      description: 'Double folding and double stitching finishing for extra safety.',
      icon: '🛡️'
    },
    {
      title: 'Quality Assured',
      description: 'Each and every bag checked physically before dispatch to assure zero leakage.',
      icon: '✅'
    },
    {
      title: 'Customizable Sizes',
      description: 'Available in multiple sizes and specifications to meet specific cargo requirements.',
      icon: '📏'
    }
  ];

  return (
    <div className="features-page">
      <div className="features-container">
        <div className="features-header">
          <Link to="/about" className="back-link">← Back to Overview</Link>
          <h2>Features & Benefits</h2>
          <p>Premium quality dunnage bags designed for superior cargo protection</p>
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