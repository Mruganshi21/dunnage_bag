import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const sendEmail = () => {
    // Open directly in Gmail
    window.open('https://mail.google.com/mail/u/0/?to=sales@dunnage-bag.com&tf=cm', '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const res = await fetch('https://api.dunnage-bag.com/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
              <button 
                type="button" 
                className="email-btn"
                onClick={sendEmail}
              >
                sales@dunnage-bag.com
              </button>
            </div>

            <div className="info-section map-section">
              <h3>Our Location</h3>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.568185146756!2d73.0064273!3d21.7219861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be02100388ab63d%3A0x708b5b1f9ec47f55!2sDunnage+Bag+Pvt.+Ltd.!5e0!3m2!1sen!2sin!4v1717094400!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dunnage Bag Pvt. Ltd."
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
              {status === 'error' && <p className="error-msg">Failed to send message. Try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;