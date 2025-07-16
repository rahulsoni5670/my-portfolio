import React from 'react';
// Removed Link as we are now doing single-page scrolling with anchor links
import '../App.css'; // Changed from index.css to App.css

function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-title">
        Rahul Soni
      </div>
      <nav className="navbar-nav">
        {/* Changed Link to a tags for smooth scrolling */}
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#achievements" className="nav-link">Achievements</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
      <div className="mobile-menu-toggle">
        <button className="menu-button">
          <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;