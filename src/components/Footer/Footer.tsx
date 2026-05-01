import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="footer-address">
          <h3>Visit Us</h3>
          <p>[Your Company Address]</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Stuffex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;