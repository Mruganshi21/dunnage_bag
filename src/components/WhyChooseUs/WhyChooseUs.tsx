import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    { id: 1, title: 'Quality Tested', description: 'Materials proven to withstand rough handling and long transit.', icon: '🛡️' },
    { id: 2, title: 'Fast Delivery', description: 'Quick turnaround to keep your operations running.', icon: '⚡' },
    { id: 3, title: 'Bulk Pricing', description: 'Competitive rates for business orders.', icon: '💵' },
    { id: 4, title: 'Expert Support', description: 'Team ready to help with your packaging needs.', icon: '🤝' },
  ];

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="why-choose-header">
          <h2>Why Choose Dunnage Bag?</h2>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;