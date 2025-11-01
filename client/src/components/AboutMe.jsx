import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="about-me-section">
      <div className="about-header-content">
        {/* Placeholder image for the person's portrait */}
        <img 
          src="/images/Pooja_Portrait.jpeg" 
          alt="Profile Portrait" 
          className="profile-image" 
        />
        <h2>Pooja R Vyas</h2>
        {/* Professional Tagline */}
        <p className="about-tagline">Software Engineer</p>
      </div>
      
      <div className="about-me-content">
        <h3>My Professional Journey</h3> 
        <p>
          I am a dedicated software engineer with over 5 years of experience specializing in the **MERN stack (MongoDB, Express, React, Node.js)**. My journey began with a passion for transforming complex business requirements into intuitive and efficient user experiences.
        </p>
        <a href="#contact" className="cta-button-small">Let's Connect</a>
      </div>
    </section>
  );
};

export default AboutMe;