import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Achievements from './pages/Achievements.js';
import Contact from './pages/Contact.js';
import Offline from './components/Offline.js'; // Import the new Offline component
import './App.css'; // Import your main CSS file

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initialize with current online status

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen app-background text-white flex flex-col">
      {/* Conditionally render the Offline component */}
      {!isOnline && <Offline />}

      {/* Render main content only when online, or if you want it behind the offline screen */}
      {isOnline && (
        <>
          <Navbar />
          {/* Render all pages directly for a single-page scrolling experience */}
          <Home />
          <About />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </>
      )}
       {/* If you want the offline screen to overlay the content, remove the isOnline check around the main content */}
       {/*
       <Navbar />
       <Home />
       <About />
       <Projects />
       <Achievements />
       <Contact />
       <Footer />
       */}
    </div>
  );
}

export default App;