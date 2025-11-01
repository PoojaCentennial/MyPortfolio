import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer" >
      <p>Let's connect! 👋</p>
      <p>
        Email: <a href="mailto:jane.doe@example.com">pvyas13@my.centennialcollege.com</a> | Phone: (647) 647-4567
      </p>
      <p>&copy; {new Date().getFullYear()} Pooja Vyas Portfolio. Built with React.</p>
    </footer>
  );
};

export default Footer;