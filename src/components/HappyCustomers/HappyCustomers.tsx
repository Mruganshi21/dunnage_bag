import './HappyCustomers.css';

const HappyCustomers = () => {
  const stats = [
    { id: 1, number: '150+', label: 'Happy Clients' },
    { id: 2, number: '10+', label: 'manufacturing years' },
    { id: 3, number: '20+', label: 'Countries Served' },
    { id: 4, number: '5000+', label: 'Bag produced every day' },
  ];

  return (
    <section className="happy-customers-section">
      <div className="happy-customers-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;