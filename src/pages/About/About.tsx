import { useLocation, Link } from 'react-router-dom';
import eliteLogo from '../../assets/elite-logo.png';
import sishLogo from '../../assets/sish-logo.png';
import './About.css';

const About = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tab = params.get('tab');

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

  const specsData = [
    { property: 'Material', value: 'Polyethylene (PE) / Kraft Paper' },
    { property: 'Inflated Dimensions', value: '48" x 48" (122cm x 122cm)' },
    { property: 'Operating Pressure', value: '2.5 - 3.5 PSI' },
    { property: 'Temperature Range', value: '-20°C to 60°C' },
    { property: 'Wall Thickness', value: '500 - 1000 microns' },
    { property: 'Valve Type', value: 'Auto-seal / Spring valve' },
    { property: 'Load Capacity', value: 'Up to 2000 kg' },
    { property: 'Recyclability', value: '100% recyclable' }
  ];

  const aboutHighlights = [
    {
      title: 'Trusted Since 2010',
      value: '14+ Years',
      description: 'Delivering consistent packaging quality and reliable service across export supply chains.'
    },
    {
      title: 'Export Ready',
      value: 'Global Standards',
      description: 'Manufactured for international shipping requirements and export-grade protection.'
    },
    {
      title: 'Customer Confidence',
      value: '100% Guarantee',
      description: 'Every order is backed by a commitment to quality and on-time delivery.'
    }
  ];

  const renderContent = () => {
    if (tab === 'features') {
      return (
        <div className="features-content">
          <div className="features-header">
            <Link to="/about" className="back-link">← Back to About</Link>
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
      );
    }

    if (tab === 'specs') {
      return (
        <div className="specs-content">
          <div className="specs-header">
            <Link to="/about" className="back-link">← Back to About</Link>
            <h2>Technical Specifications</h2>
            <p>Detailed specifications for Stuffex dunnage bags</p>
          </div>
          <div className="specs-table">
            {specsData.map((item, index) => (
              <div key={index} className="spec-row">
                <span className="spec-property">{item.property}</span>
                <span className="spec-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="about-container">
        <div className="about-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>About Us</h2>
          <p>Dunnage Bag Pvt. Ltd. was established in 2010 in Bharuch, Gujarat, with a clear purpose — to redefine how India approaches export packaging and cargo protection.</p>
        </div>

        <div className="about-hero">
          <div className="about-hero-copy">
            <h3>Reliable cargo protection made for export-ready shipments</h3>
            <p>We design and manufacture dunnage bags that strengthen export packaging, protect cargo during transit, and ensure customers can ship with confidence.</p>
            <ul className="about-hero-list">
              <li>Consistent quality built to international standards</li>
              <li>Competitive prices with guaranteed satisfaction</li>
              <li>Flexible sizes and reliable on-time delivery</li>
            </ul>
          </div>

          <div className="about-hero-cards">
            {aboutHighlights.map((item, index) => (
              <div key={index} className="hero-summary-card">
                <h4>{item.title}</h4>
                <div className="hero-value">{item.value}</div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-sections-row">
          <div className="about-section">
            <h3>Our Vision</h3>
            <p>To become a globally recognized leader in packaging materials, empowering businesses of every scale to ship confidently through continuous innovation, premium quality, and trusted partnerships.</p>
          </div>

          <div className="about-section">
            <h3>Our Mission</h3>
            <p>To be India's most trusted manufacturer of dunnage air bags, meeting international quality standards at competitive prices, with an unwavering commitment to on-time delivery and full customer satisfaction.</p>
          </div>
        </div>

        <div className="about-footer">
          <h3>Our Group Companies</h3>
          <div className="companies-links">
            <a href="http://eliteind.in/" target="_blank" rel="noopener noreferrer" className="company-link">
              <img src={eliteLogo} alt="Elite" />
            </a>
            <a href="https://www.shishind.com/" target="_blank" rel="noopener noreferrer" className="company-link">
              <img src={sishLogo} alt="Sish" />
            </a>
          </div>
        </div>

        <div className="about-content">
          <div className="about-impact">
            <div className="impact-card">
              <h4>Quality Assurance</h4>
              <p>We maintain strict manufacturing standards so every bag performs reliably under pressure.</p>
            </div>
            <div className="impact-card">
              <h4>Customer Support</h4>
              <p>Our team helps you choose the best packaging solution for your shipment and supports every order.</p>
            </div>
            <div className="impact-card">
              <h4>Production Capacity</h4>
              <p>With years of experience, we serve both small and large-scale businesses with prompt fulfillment.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="about-page">
      {renderContent()}
    </div>
  );
};

export default About;