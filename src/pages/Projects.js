import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Changed from index.css to App.css

// You might create a separate ProjectCard.jsx in src/components
function ProjectCard({ title, description, technologies, githubLink, demoLink }) {
  return (
    <div className="project-card">
      <h3 className="project-title-blue">{title}</h3> {/* Changed class */}
      <p className="project-description">{description}</p>
      <p className="project-tech">{technologies}</p>
      <div className="project-links">
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link-blue">GitHub</a>} {/* Changed class */}
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link-blue">Live Demo</a>} {/* Changed class */}
      </div>
    </div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current; // Capture ref value

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) { // Use captured ref value in cleanup
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const projects = [ // Moved projects array definition inside the component
    {
      title: "IRCTC Ticket Booking System",
      description: "Built a console-based ticket booking system simulating IRCTC using Java, applying object-oriented programming and modular design principles. Integrated user authentication (sign-up/login) with secure password hashing and persistent storage via file I/O. Enabled train search by route, seat availability tracking, and booking/cancellation with a user-friendly CLI and real-time seat selection. Managed dynamic train and booking data using ArrayLists, HashMaps, and layered service architecture for clean and scalable code.",
      technologies: "Java, File I/O, OOPs, Data Structures",
      githubLink: "https://github.com/rahulsoni5670/IRCTC-Ticket-Booking-System", // Placeholder
      demoLink: null,
    },
    {
      title: "Multi-Model Web Server",
      description: "Built single-threaded, multi-threaded, and thread-pool web servers handling concurrent client requests. Simulated 1000+ client connections using Java sockets and custom Runnable logic. Used threads and ExecutorService to compare concurrency models and performance. Applied modular OOPs design for clean, reusable client-server architecture.",
      technologies: "Java, Socket Programming, Concurrency, OOPS",
      githubLink: "https://github.com/rahulsoni5670/Webserver", // Placeholder
      demoLink: null,
    },
    {
      title: "Buzzer System",
      description: "Designed and developed a real-time buzzer system using Node.js, MongoDB, and Socket.io, with a responsive HTML/CSS frontend for interactive quizzes and competitive rounds. Enabled instant buzzer response detection with socket-based communication, ensuring minimal latency and fair play. Created an admin panel for session control, participant management, and real-time buzzer lockout visualization. Successfully used in technical society events, managing 100+ participants with accurate response tracking and seamless user experience.",
      technologies: "HTML, CSS, JavaScript, Node.js, MongoDB",
      githubLink: "https://github.com/rahulsoni5670/Buzzer-System", // Placeholder
      demoLink: null,
    }
    // Add more projects here if needed
  ];

  return (
    <main id="projects" ref={sectionRef} className={`flex-grow container-main page-section section-reveal ${isVisible ? 'is-visible' : ''}`}> {/* Added ref and classes */}
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;