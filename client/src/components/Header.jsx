import React from 'react';

const Header = () => {
  return (
    <header className="header">      
      <div className="logo">  
        <img src="/images/favicon_io/android-chrome-192x192.png" alt="Logo" />      
        <h1>Pooja Vyas</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;