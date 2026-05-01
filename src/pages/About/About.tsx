import { useLocation, Link } from 'react-router-dom';
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
          <p>Elite Industries was established in 2010 in Bharuch, Gujarat, with a clear purpose — to redefine how India approaches export packaging and cargo protection. Over the past 14+ years, we have grown from a regional supplier into one of India's most professional, progressive, and punctual enterprises in the packaging and material handling industry.
Headquartered at the Bharuch GIDC Estate, we operate as a manufacturer and wholesaler of a comprehensive range of export packaging materials for containers and cargo. Our product portfolio includes Dunnage Air Bags, Polyester Composite Straps, PET Straps, Stretch Wrapping Films, PP Corrugated Sheets, Paper Edge Boards, Security Seals, and Cable Ties — making us a true one-stop destination for all packaging, material handling, and insulation needs.</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <h3>Our Mission</h3>
            <p>To be India's most trusted one-stop provider of export packaging, material handling, and insulation 
              solutions — delivering precision-manufactured products that meet international quality standards, 
              at competitive prices, with unwavering commitment to on-time delivery and 100% customer satisfaction.</p>
          </div>

          <div className="about-section">
            <h3>Our Vision</h3>
            <p>To emerge as a globally recognized leader in export packaging and cargo protection solutions,
               empowering businesses of every scale to ship with confidence — by continuously innovating, 
               maintaining the highest product quality, and building lasting partnerships rooted in reliability and value.</p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h4>Years Experience</h4>
              <p className="stat-number">[X]</p>
            </div>
            <div className="stat-card">
              <h4>Products</h4>
              <p className="stat-number">[X]+</p>
            </div>
            <div className="stat-card">
              <h4>Happy Customers</h4>
              <p className="stat-number">[X]+</p>
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