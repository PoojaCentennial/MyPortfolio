import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // For basic styling
import AboutMe from './components/AboutMe';
import Signin from './components/Signin';
import EducationForm from './components/EducationForm';
import Registration from './components/Registration';
import ProjectForm from './components/ProjectForm';
import logoImg from '../src/assets/android-chrome-192x192.png';


function App() {

  const getUserFromStorage = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    console.log("Retrieved username from storage:", username);

    return token && username ? { username } : null;
  }
  const [user, setUser] = useState(getUserFromStorage());


  useEffect(() => {
    setUser(getUserFromStorage());
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  }



  return (
    <>

      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <img src={logoImg}  alt="Logo" />
            </div>
            <Link className='navbar-brand' to="/"><h1>Pooja Vyas</h1></Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link' to="/contact">Contact</Link>
                </li>

                {user ? (
                  <div className="navbar-nav ms-auto d-flex align-items-center">
                    <span className="navbar-text me-3">Welcome, {user.username}</span>
                    <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                  </div>
                ) : (
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className='nav-link' to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='nav-link' to="/login">Login</Link>
                    </li>
                  </ul>
                )}
              </ul>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path="/register" element={<Registration setUser={setUser} />} />
          <Route path="/login" element={<Signin setUser={setUser} />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/education' element={<Education />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/projectForm' element={<ProjectForm />} />
          <Route path='/educationForm' element={<EducationForm />} />
        </Routes>
      </Router>
      <Footer />

    </>
  )

  /*
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <Hero />
         <Router>
            <Routes>
              <Route path="/personal-portfolio/#signup" element={<Signin />} />
              <Route path="/personal-portfolio/#registration" element={<Registration />} />
              <Route path="/personal-portfolio/#projectForm" element={<ProjectForm />} />
              <Route path="/personal-portfolio/#educationFrom" element={<EducationForm />} />
            </Routes>
          </Router>
        <AboutMe />
        <Projects />
        <Education />
        <Services /> 
        <Signin />
        <Registration />
        <ProjectForm />
        <EducationForm />       
        <Contact />
      </main>
      <Footer />
    </div>
  );*/
}

export default App;