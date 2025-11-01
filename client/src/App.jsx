import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // For basic styling
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;