import { Link } from 'react-router-dom';
import './Overview.css';
import one from '../../assets/features/one.png';
import two from '../../assets/features/two.png';
import three from '../../assets/features/three.png';
import four from '../../assets/features/four.png';
import five from '../../assets/features/five.png';
import six from '../../assets/features/six.png';

const Features = () => {
  const featuresData = [
    {
      title: '100% Virgin & Recyclable',
      description: 'Made from 100% virgin & recyclable outer material for sustainable packaging.',
      image: one
    },
    {
      title: 'Multilayer Film Technology',
      description: 'Multilayer film for long lasting air holding characteristic.',
      image: two
    },
    {
      title: 'Imported Spring Valve',
      description: 'Universally approved imported spring valve for reliable performance.',
      image: three
    },
    {
      title: 'Double Folding & Stitching',
      description: 'Double folding and double stitching finishing for extra safety.',
      image: four
    },
    {
      title: 'Quality Assured',
      description: 'Each and every bag checked physically before dispatch to assure zero leakage.',
      image: five
    },
    {
      title: 'Customizable Sizes',
      description: 'Available in multiple sizes and specifications to meet specific cargo requirements.',
      image: six
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
              <img src={item.image} alt={item.title} className="feature-image" />
              <div className="feature-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;