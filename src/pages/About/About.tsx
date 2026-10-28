import eliteLogo from '../../assets/elite-logo.png';
import sishLogo from '../../assets/sish-logo.png';
import aboutImage from '../../assets/aboutus.jpeg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <div className="about-hero-grid">
            <div className="about-hero-text">
              <span className="about-hero-eyebrow">Who We Are</span>
              <h1>About <span>Us</span></h1>
              <p className="about-hero-lead">
                Dunnage Bag Pvt. Ltd. was established in 2016 in Bharuch, Gujarat, with a clear
                purpose — to redefine how India approaches export packaging and cargo protection.
              </p>
              <p>
                Over the past 10+ years, we have grown from a regional supplier into one of India's
                most professional, progressive, and punctual industry in the Dunnage Air Bags
                Manufacturing.
              </p>
              <p>
                Our products are precisely manufactured by following high quality standards for best
                performance matching international standards. We understand that our success is
                dependent upon yours. We offer top quality packaging materials at competitive prices.
              </p>
              <div className="about-hero-guarantee">
                <span className="about-hero-guarantee-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </span>
                <p>
                  In a bid to help our customers order in confidence, we always stand behind our
                  products and back every order with a 100% satisfaction guarantee.
                </p>
              </div>
            </div>

            <div className="about-hero-media">
              <img src={aboutImage} alt="Dunnage Bag Pvt. Ltd. manufacturing facility in Bharuch, Gujarat" width={1600} height={1200} />
              <div className="about-hero-badge">
                <strong>2016</strong>
                <span>Established in Bharuch</span>
              </div>
            </div>
          </div>

          <ul className="about-hero-stats">
            <li><strong>2016</strong><span>Established</span></li>
            <li><strong>10<em>+</em></strong><span>Years of Experience</span></li>
            <li><strong>100<em>%</em></strong><span>Satisfaction Guarantee</span></li>
            <li><strong>Bharuch</strong><span>Gujarat, India</span></li>
          </ul>
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
          <span className="section-badge">Our Group Companies</span>
          <h4> <p>We are proud to be associated with industry-leading organizations <br></br> that share our commitment to quality and excellence.</p></h4>
          <br></br>
          
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