import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/hero/Hero';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className='app'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
