import React from 'react';
import { Link } from 'react-router-dom';

const educationData = [
  { id: 1, degree: 'B.S. in Microbiology', institution: 'Sardar Patel University', dates: '2010 - 2013' },
  { id: 2, degree: 'Lab Technician', institution: 'Seneca College', dates: '2014 - 2016' },
  { id: 3, degree: 'Software Engineering Technician', institution: 'Centennial College', dates: '2025 -' },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education 🎓</h2>
      <div className="education-list">
        {educationData.map(item => (
          <div key={item.id} className="education-item">
            <div className="education-date">{item.dates}</div>
            <div className="education-details">
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/educationForm" className="cta-button-small">Add New Qualification</Link>
    </section>
  );
};

export default Education;