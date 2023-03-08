import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/hero/Hero';
import Projects from './components/projects/Projects';
import SideBar from './components/sideBar/SideBar';

function App() {
  
  const handleNavClick = (section) => {
    const el = document.getElementById(section);
    el.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className='app'>
      <SideBar onNavClick={handleNavClick}/>
      <Hero onNavClick={handleNavClick} id="hero"/>
      <About onNavClick={handleNavClick} id="about"/>
      <Projects onNavClick={handleNavClick} id="projects"/>
      <Contact onNavClick={handleNavClick} id="contact"/>
    </div>
  );
}

export default App;
