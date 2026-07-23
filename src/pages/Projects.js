import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Cpu, Server, ExternalLink, CheckCircle, X, Layers, Code, Sparkles } from 'lucide-react';
import '../App.css';

const projectsData = [
  {
    id: 'workonmeet',
    title: "workonmeet",
    category: "Full-Stack Web App",
    bannerGradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: <Server size={28} className="text-indigo-400" />,
    shortDesc: "Real-time collaborative video meeting & workspace platform for instant video calls, room chats, and screen sharing.",
    fullDesc: "Engineered workonmeet, a modern web application enabling low-latency video meetings, real-time messaging, screen sharing, and collaborative workspace tools. Implemented WebRTC peer-to-peer streaming connections, dynamic meeting room link generation, and active participant state management.",
    technologies: ["React", "Node.js", "WebRTC", "Socket.io", "Express", "Tailwind CSS"],
    highlights: [
      "Sub-100ms WebRTC peer-to-peer video, audio streaming & screen sharing",
      "Dynamic room creation, invite link generation & participant management",
      "Real-time in-room chat and active speaker detection",
      "Deployed live on Vercel infrastructure for global access"
    ],
    githubLink: "https://github.com/rahulsoni5670/workonmeet",
    demoLink: "https://workonmeet.vercel.app/",
    badge: "Full-stack App"
  },
  {
    id: 'webserver',
    title: "Multi-Model Web Server",
    category: "Networking & Concurrency",
    bannerGradient: "from-cyan-600 via-blue-600 to-indigo-600",
    icon: <Cpu size={28} className="text-cyan-400" />,
    shortDesc: "High-concurrency Java web server testing Single-threaded, Multi-threaded, and Thread-Pool architectures.",
    fullDesc: "Built single-threaded, multi-threaded, and thread-pool web servers handling concurrent HTTP client requests. Simulated 1000+ client connections using Java Sockets and custom Runnable tasks to evaluate throughput, memory usage, and latency across concurrency models. Used Java ExecutorService thread pools to prevent resource exhaustion under heavy traffic load.",
    technologies: ["Java", "Socket Programming", "Concurrency", "ExecutorService", "Multi-Threading", "Networking"],
    highlights: [
      "Benchmark test handling 1000+ simultaneous client socket connections",
      "Compared performance metrics across Single-Threaded vs Thread-Pool architectures",
      "Implemented non-blocking connection pool limits and thread worker lifecycle management",
      "Reusable modular client-server network architecture"
    ],
    githubLink: "https://github.com/rahulsoni5670/Webserver",
    demoLink: null,
    badge: "Systems & Networking"
  },
  {
    id: 'MedIntel-AI',
    title: "MedIntel-AI",
    category: "Machine Learning & Web",
    bannerGradient: "from-purple-600 via-pink-600 to-rose-600",
    icon: <Sparkles size={28} className="text-amber-400" />,
    shortDesc: "AI-driven medical intelligence and healthcare diagnostic dashboard providing smart clinical insights.",
    fullDesc: "Engineered MedIntel-AI, an intelligent healthcare web platform integrating machine learning classification algorithms to assist with medical data analytics, symptom assessment, and diagnostic decision support. Features a responsive practitioner dashboard and secure REST backend endpoints.",
    technologies: ["Python", "Machine Learning", "React", "Node.js", "Express", "REST API"],
    highlights: [
      "Integrated AI/ML classification models for clinical symptom analysis",
      "Interactive patient data analytics & diagnostic insights dashboard",
      "Secure RESTful API integration for healthcare query processing",
      "Responsive glassmorphism UI for intuitive practitioner user experience"
    ],
    githubLink: "https://github.com/rahulsoni5670/MedIntel-AI",
    demoLink: null,
    badge: "AI & HealthTech"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="page-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge">
            <FolderGit2 size={16} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of software systems, web applications, and AI platforms I've designed and engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-container">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              className="glass-card project-card-modern"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Visual Card Header Banner */}
              <div className="project-card-header">
                <div className="project-icon-box">
                  {project.icon}
                </div>
                <span className="project-badge font-mono">{project.badge}</span>
              </div>

              <div className="project-card-body">
                <span className="project-category font-mono">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-desc">{project.shortDesc}</p>

                {/* Tech Badges */}
                <div className="project-tech-tags">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag font-mono more-tag">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-card-footer">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-details"
                >
                  <Layers size={16} />
                  <span>View Details</span>
                </button>

                <div className="project-footer-links">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-demo-badge"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-github-icon"
                      title="GitHub Repository"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <motion.div
              className="glass-card modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-category font-mono">{selectedProject.category}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
                <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-description">{selectedProject.fullDesc}</p>

                <div className="modal-section-title">
                  <CheckCircle size={18} className="text-indigo-400" />
                  <span>Key Architecture Highlights</span>
                </div>

                <ul className="modal-highlights-list">
                  {selectedProject.highlights.map((item, iIdx) => (
                    <li key={iIdx}>
                      <span className="bullet-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="modal-section-title mt-4">
                  <Code size={18} className="text-cyan-400" />
                  <span>Technologies & Tools</span>
                </div>

                <div className="modal-tech-grid">
                  {selectedProject.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-badge-full font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-footer">
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={18} />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View GitHub Source</span>
                  </a>
                )}
                <button onClick={() => setSelectedProject(null)} className="btn-secondary">
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;