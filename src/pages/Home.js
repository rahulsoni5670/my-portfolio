import React, { useEffect, useState } from 'react'; // Removed useRef as canvas is removed
import '../App.css'; // Changed from index.css to App.css
import userImage from '../assets/me.jpg'; // Correct import for image in src/assets

function Home() {
  // Removed canvasRef as canvas is removed
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });
  const [isPhotoHovered, setIsPhotoHovered] = useState(false); // State for photo hover

  // Effect to apply theme class to document.documentElement (html tag)
  useEffect(() => {
    document.documentElement.className = theme + '-mode'; // Add 'dark-mode' or 'light-mode' class
    localStorage.setItem('theme', theme); // Save theme preference
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Removed useEffect for canvas animation

  return (
    // Removed home-section-height as animation is removed. min-h-screen is handled by App.js
    <div id="home" className="home-page-wrapper text-white flex flex-col relative">
      {/* Removed canvas element */}
      <main className="flex-grow container-main page-section flex flex-col md:flex-row items-center justify-center gap-12 z-10"> {/* Added z-10 to content */}
        {/* Left Section: Image and Buttons */}
        <div className="image-and-buttons-wrapper"> {/* New wrapper div */}
          <div
            className="image-container"
            onMouseEnter={() => setIsPhotoHovered(true)} // Set hover state
            onMouseLeave={() => setIsPhotoHovered(false)} // Clear hover state
          >
            <button className="arrow-button left-arrow">&lt;</button>
            <img
              src={userImage} // Using the imported image
              alt="Rahul Soni"
              className="user-image"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/3B82F6/FFFFFF?text=Image+Not+Found"; }} // Changed placeholder color
            />
            <button className="arrow-button right-arrow">&gt;</button>

            {/* Social Icons Overlay */}
            <div className={`social-icons-overlay ${isPhotoHovered ? 'visible' : ''}`}>
              <a href="https://www.linkedin.com/in/rahul-soni-8b281728b/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                {/* LinkedIn Icon SVG (Corrected) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/rahulsoni5670" target="_blank" rel="noopener noreferrer" className="social-icon github-icon">
                {/* GitHub Icon SVG (Corrected) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3s-1.09-.28-3.64 1.35a13.37 13.37 0 0 0-7 0c-2.55-1.63-3.64-1.35-3.64-1.35A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Buttons moved here, below the image */}
          <div className="button-group-below-image"> {/* New class for button group below image */}
            {/* Corrected: Wrap the button with the <a> tag */}
            <a href="https://313941981030506496.hello.cv/" target="_blank" rel="noopener noreferrer">
              <button className="button primary-button-blue">
                My Resume
              </button>
            </a>
            <button className="button secondary-button-blue"> {/* Changed class */}
              Let's Connect!
            </button>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="text-content">
          <p className="greeting">Hello ! I'm Rahul Soni</p>
          <h1 className="main-heading">
            I am an <span className="highlight-text-blue">Electronics and Computer Engineering student</span><span className="blinking-cursor">|</span> {/* Changed text */}
          </h1>
          <p className="sub-text">
            I'm an Electronics and Computer Engineering student with a passion for building smart and efficient systems.
            <br />
            Currently, I am pursuing my B.Tech at <span className="highlight-text-blue">Thapar Institute of Engineering and Technology</span>, with a strong focus on web development, Java programming, and system-level design.
            <br />
            I enjoy creating seamless user experiences and exploring the intersection of hardware and software.
          </p>
          {/* Original button group removed from here */}
        </div>
      </main>

      {/* Theme Toggle Button (replaces Resume Link at bottom right) */}
      <div className="theme-toggle-container z-10"> {/* New container for theme toggle */}
        <button onClick={toggleTheme} className="icon-button-blue theme-toggle-button">
          {theme === 'dark' ? (
            // Sun icon for light mode (when current theme is dark)
            <svg xmlns="http://www.w3.org/24/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
              <circle cx="12" cy="12" r="8"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            // Moon icon for dark mode (when current theme is light)
            <svg xmlns="http://www.w3.org/24/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default Home;