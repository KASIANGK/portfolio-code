import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/index.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import darkModeVideo from '../src/assets/webDev2.mp4';
import lightModeVideo from '../src/assets/webDevLight.mp4';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
    document.body.classList.toggle('dark-mode', !isLightMode);
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <Navbar onToggleMode={toggleMode} isLightMode={isLightMode} />
      <Routes>
        <Route path="/" element={<Home isLightMode={isLightMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


