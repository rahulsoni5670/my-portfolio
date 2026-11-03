import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Offline from './components/Offline';
import AmbientBackground from './components/AmbientBackground';
import RecruiterModal from './components/RecruiterModal';
import './App.css';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-container ${theme === 'light' ? 'light-mode' : ''}`}>
      {/* Interactive Particle & Ambient Canvas Background */}
      <AmbientBackground theme={theme} />

      {/* Offline Alert Banner if network drops */}
      {!isOnline && <Offline />}

      {/* Recruiter 30-Second Snapshot Modal */}
      <RecruiterModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
      />

      {/* Main Header with Recruiter trigger */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenRecruiterModal={() => setRecruiterModalOpen(true)}
      />

      <main className="main-content-flow">
        <Home onOpenRecruiterModal={() => setRecruiterModalOpen(true)} />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
