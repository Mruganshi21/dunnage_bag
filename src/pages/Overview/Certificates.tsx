import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Overview.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'CE Certification',
      description: 'European Safety Standards Certification',
      icon: '✓'
    }
  ];

  return (
    <div className="certificates-page">
      <div className="certificates-container">
        <div className="certificates-header">
          <Link to="/about" className="back-link">← Back to Overview</Link>
          <h2>Our Certificates</h2>
          <p>Certified for quality, safety, and reliability</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="certificate-card"
              onClick={() => setSelectedCert(cert.id.toString())}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <span className="view-cert">Click to view →</span>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="cert-modal" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-close-btn" onClick={() => setSelectedCert(null)}>
                &times;
              </button>
              <div className="cert-image-container">
                <img 
                  src={`https://placehold.co/800x600/ff6600/ffffff?text=${selectedCert === '1' ? 'ISO+9001:2015' : 'CE+Certification'}`} 
                  alt="Certificate" 
                />
              </div>
              <h3>{selectedCert === '1' ? 'ISO 9001:2015' : 'CE Certification'}</h3>
              <p>{selectedCert === '1' ? 'Quality Management System Certification' : 'European Safety Standards Certification'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;