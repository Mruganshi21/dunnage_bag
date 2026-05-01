import './HappyCustomers.css';

const HappyCustomers = () => {
  const stats = [
    { id: 1, number: '150+', label: 'Happy Clients', sub: 'trust our products' },
    { id: 2, number: '15+', label: 'manufacturing years', sub: 'for every need' },
    { id: 3, number: '20+', label: 'Countries Served', sub: 'worldwide' },
    { id: 4, number: '2000+', label: 'Bag produced every day', sub: 'in packaging' },
  ];

  return (
    <section className="happy-customers-section">
      <div className="happy-customers-container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-sub">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;