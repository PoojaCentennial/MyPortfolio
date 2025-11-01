import React from 'react';

const servicesData = [
  { id: 1, title: 'Web Development', description: 'Building fast, responsive, and scalable full-stack web applications using React and Node.js.', iconText: '🌐' },
  { id: 2, title: 'Mobile App Development', description: 'Creating cross-platform mobile experiences using React Native for iOS and Android.', iconText: '📱' },
  { id: 3, title: 'API & Backend Programming', description: 'Designing and implementing robust RESTful and GraphQL APIs, optimized for high performance.', iconText: '⚙️' },
  { id: 4, title: 'General Programming & Consulting', description: 'Offering consultation, code review, and implementation services for complex algorithms and infrastructure.', iconText: '💡' },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Services I Offer 🛠️</h2>
      <div className="services-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.iconText}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;