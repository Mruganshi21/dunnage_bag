import './Hero.css';
import heroImage from '../../assets/hero-bg.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-bottom">
          <h1 className="hero-company">DUNNAGE BAG PVT. LTD.</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;