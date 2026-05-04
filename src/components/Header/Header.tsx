import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
  ];

  const productItems = [
    { name: 'All Products', path: '/products' },
    { name: 'Air Dunnage Bag', path: '/products?cat=plastic' },
    { name: 'Paper Dunnage', path: '/products?cat=paper' },
    { name: 'Tools & Equipment', path: '/products?cat=tools' },
  ];

  const overviewItems = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Features & Benefits', path: '/overview/features' },
    { name: 'Technical Specifications', path: '/overview/technical' },
    { name: 'Our Certificates', path: '/overview/certificates' },
  ];

  const otherNavItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-left">
          <img src={logo} alt="Dunnage Bag" className="header-logo" />
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
          
          <div className="dropdown">
            <Link to="/products" className="nav-link dropdown-trigger">
              Products <span className="dropdown-arrow">▼</span>
            </Link>
            <div className="dropdown-menu">
              {productItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="dropdown-item"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="dropdown">
            <Link to="/overview" className="nav-link dropdown-trigger">
              Overview <span className="dropdown-arrow">▼</span>
            </Link>
            <div className="dropdown-menu">
              {overviewItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="dropdown-item"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {otherNavItems.map((item) => (
            <Link key={item.name} to={item.path} className="nav-link">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <span className="company-name">dunnage bag</span>
          <span className="company-sub">pvt. ltd.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;