import { Link } from 'react-router-dom';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview-page">
      <div className="overview-container">
        <div className="overview-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>Overview</h2>
          <p>Everything you need to know about Stuffex dunnage bags</p>
        </div>
        
        <div className="overview-cards">
          <Link to="/overview/gallery" className="overview-card">
            <span className="overview-icon">🖼️</span>
            <h3>Gallery</h3>
            <p>View our product gallery and real-world applications</p>
          </Link>
          
          <Link to="/overview/features" className="overview-card">
            <span className="overview-icon">✨</span>
            <h3>Features & Benefits</h3>
            <p>Discover the advantages of using Stuffex dunnage bags</p>
          </Link>
          
          <Link to="/overview/technical" className="overview-card">
            <span className="overview-icon">📋</span>
            <h3>Technical Specifications</h3>
            <p>Detailed technical specifications and parameters</p>
          </Link>

          <Link to="/overview/certificates" className="overview-card">
            <span className="overview-icon">🏆</span>
            <h3>Our Certificates</h3>
            <p>Quality and safety certifications</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;