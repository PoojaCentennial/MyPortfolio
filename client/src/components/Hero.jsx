import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Welcome!</h1>
        {/*<p className="subtitle">
          I'm a **Full-Stack Developer** passionate about building beautiful, scalable, and accessible web applications using **React** and **Node.js**.
        </p>*/}
        <h3 >Mission Statement</h3>
        <p >
          My mission is to create seamless digital experiences that empower users and drive business success. I believe in writing clean, efficient code and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.
        </p>
        <a href="#projects" className="cta-button">View My Work</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/pooja-vyas-77973815a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' | '}
          <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      {/* Optional: Add an image of yourself here. */}
      {/* <div className="hero-image"></div> */}
    </section>
  );
};

export default Hero;