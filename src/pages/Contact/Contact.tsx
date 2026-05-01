import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h2>Contact Us</h2>
          <p>Get in touch with us for inquiries or orders</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>Address</h3>
              <p>Plot No: 157/3, Phase-II, Bharuch GIDC Estate, Next to SMP House, Bharuch-392001, Gujarat.</p>
            </div>

            <div className="info-section">
              <h3>Phone</h3>
              <p>+91 98980 14279</p>
              <p>+91 93280 14279</p>
            </div>

            <div className="info-section">
              <h3>Email</h3>
              <p>sales@dunnage-bag.com</p>
              <p></p>
            </div>

            
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your Message" rows={5}></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;