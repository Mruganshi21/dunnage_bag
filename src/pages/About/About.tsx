import eliteLogo from '../../assets/elite-logo.png';
import sishLogo from '../../assets/sish-logo.png';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          
          <h1>About Us</h1>
          <p className="about-hero-description">
            <h3>Dunnage Bag Pvt. Ltd. was established in 2010 in Bharuch,
Gujarat, with a clear purpose — to redefine how India
approaches export packaging and cargo protection.</h3>
<br />
<h3>Over the past 14+ years, we have grown from a regional
supplier into one of India's most professional, progressive,
and punctual industry in the Dunnage Air Bags
Manufacturing.</h3>
<br />
<h3>Our products are precisely manufactured by following high
quality standards for best performance matching
international standards. We understand that our success is
dependent upon yours. We offer top quality packaging
materials at competitive prices.</h3>
<br />
<h3>In a bid to help our customers order in confidence, we
always stand behind our products and back every order with
a 100% satisfaction guarantee.</h3>
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-grid">
          <div className="mission-card mission-card--vision">
            <div className="mission-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h1>Our Vision</h1>
            <h1><p>To be India’s Most trusted Manufacturer Of Dunnage
Air Bags to meet international quality standards, at
competitive price, with unwavering commitment to
on-time delivery and 100% customer satisfaction.</p></h1>
          </div>
          <div className="mission-card mission-card--mission">
            <div className="mission-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h1>Our Mission</h1>
           <h2> <p>To emerge as a globally recognized leader in Packaging
material, empowering businesses of every scale to ship
with confidence – by continuously innovating,
maintaining the highest product quality and building
lasting partnerships rooted in reliability and value.</p></h2>
          </div>
        </div>
      </section>

      <section className="about-companies">
        <div className="about-companies-content">
          <span className="section-badge">Our Group</span>
          <h2>Part of a trusted network</h2>
          <p>We are proud to be associated with industry-leading organizations that share our commitment to quality and excellence.</p>
          <div className="companies-links">
            <a href="http://eliteind.in/" target="_blank" rel="noopener noreferrer" className="company-link">
              <img src={eliteLogo} alt="Elite Industries" />
            </a>
            <a href="https://www.shishind.com/" target="_blank" rel="noopener noreferrer" className="company-link">
              <img src={sishLogo} alt="Sish Industries" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;