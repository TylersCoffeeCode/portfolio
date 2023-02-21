import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/hero/Hero';

function App() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

export default App;
