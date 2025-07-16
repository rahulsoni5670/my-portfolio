import React from 'react';
// Removed BrowserRouter, Routes, Route as we are now doing single-page scrolling
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Achievements from './pages/Achievements.js';
import Contact from './pages/Contact.js';
import './App.css'; // Import your main CSS file

function App() {
  return (
    <div className="min-h-screen app-background text-white flex flex-col">
      <Navbar />
      {/* Render all pages directly for a single-page scrolling experience */}
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
