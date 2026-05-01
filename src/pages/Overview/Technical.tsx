import { Link } from 'react-router-dom';
import './Overview.css';

const Technical = () => {
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

  return (
    <div className="specs-page">
      <div className="specs-container">
        <div className="specs-header">
          <Link to="/about" className="back-link">← Back to Overview</Link>
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
    </div>
  );
};

export default Technical;