import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Overview.css';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<null | {title: string; file: string}>(null);

  const certificates = [
    {
      id: 1,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      icon: '🏆',
      file: '/src/assets/ISO-9001-CERTIFICATE.pdf'
    },
    {
      id: 2,
      title: 'DBPL AAR Certificate',
      description: 'Dunnage Bag Private Limited - AAR Certification',
      icon: '📜',
      file: '/src/assets/DBPL-AAR-CERTIFICATE.pdf'
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
              onClick={() => setSelectedCert({ title: cert.title, file: cert.file })}
            >
              <div className="cert-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <span className="view-cert">Click to view →</span>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-close-btn" onClick={() => setSelectedCert(null)}>&times;</button>
            <div className="cert-image-container">
              <embed 
                src={selectedCert.file} 
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;