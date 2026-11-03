import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Cpu, Server, ExternalLink, CheckCircle, X, Layers, Code, Sparkles, Activity } from 'lucide-react';
import '../App.css';

const projectsData = [
  {
    id: 'workonmeet',
    title: "workonmeet",
    category: "Real-Time WebRTC Media Platform",
    badge: "Full-Stack WebRTC",
    accentColor: "indigo",
    windowType: "browser",
    urlBar: "https://workonmeet.vercel.app",
    statusBadge: "P2P WebRTC Active",
    icon: <Server size={24} className="text-indigo-400" />,
    shortDesc: "Real-time collaborative video meeting & workspace platform delivering sub-100ms peer-to-peer streaming, dynamic room links, and instant chat.",
    fullDesc: "Engineered workonmeet to solve high-latency media relays by adopting a pure WebRTC peer-to-peer mesh architecture with dynamic STUN/TURN server traversal. Backed by a Node.js and Socket.io signaling server, it handles meeting room creation, ephemeral participant state, and encrypted in-room chat.",
    architecturePoints: [
      {
        title: "Sub-100ms WebRTC Mesh",
        desc: "Direct peer-to-peer audio, video, and screen sharing streams bypassing media server bottlenecks."
      },
      {
        title: "Signaling & State Machine",
        desc: "Node.js & Socket.io handling dynamic meeting URLs, room presence, and real-time chat broadcasts."
      },
      {
        title: "Global Production Deployment",
        desc: "Hosted on Vercel CDN infrastructure ensuring low-latency asset delivery worldwide."
      }
    ],
    technologies: ["React.js", "Node.js", "WebRTC", "Socket.io", "Express.js", "Tailwind CSS"],
    highlights: [
      "Sub-100ms WebRTC peer-to-peer video, audio streaming & screen sharing",
      "Dynamic room creation, invite link generation & participant management",
      "Real-time in-room chat and active speaker detection",
      "Deployed live on Vercel infrastructure for global access"
    ],
    githubLink: "https://github.com/rahulsoni5670/workonmeet",
    demoLink: "https://workonmeet.vercel.app/"
  },
  {
    id: 'webserver',
    title: "Multi-Model Web Server",
    category: "High-Throughput Systems & Networking",
    badge: "Java Systems",
    accentColor: "cyan",
    windowType: "terminal",
    urlBar: "java -jar WebServer.jar --threads=16 --benchmark=1000",
    statusBadge: "1000 Sockets Tested",
    icon: <Cpu size={24} className="text-cyan-400" />,
    shortDesc: "High-concurrency Java web server evaluating Single-threaded, Multi-threaded, and Thread-Pool architectures under 1,000+ simultaneous client socket loads.",
    fullDesc: "Engineered high-performance web servers using raw Java Sockets to measure CPU and memory bottlenecks across different concurrency models. Simulated 1,000+ simultaneous client connections with custom Runnable tasks, identifying how Java ExecutorService thread pools prevent thread thrashing and memory exhaustion under extreme traffic loads.",
    architecturePoints: [
      {
        title: "1,000+ Simultaneous Sockets",
        desc: "Stress-tested concurrent TCP client connections without socket drops or socket leaks."
      },
      {
        title: "ExecutorService Thread Pooling",
        desc: "Bounded worker thread lifecycle preventing resource exhaustion and CPU thrashing."
      },
      {
        title: "Comparative Architectural Profiling",
        desc: "Empirical benchmark comparing latency, throughput, and memory consumption across 3 concurrency models."
      }
    ],
    technologies: ["Java", "Socket Programming", "Concurrency", "ExecutorService", "Multi-Threading", "TCP/IP"],
    highlights: [
      "Benchmark test handling 1,000+ simultaneous client socket connections",
      "Compared performance metrics across Single-Threaded vs Multi-Threaded vs Thread-Pool architectures",
      "Implemented non-blocking connection pool limits and thread worker lifecycle management",
      "Clean modular client-server network architecture with zero external networking dependencies"
    ],
    githubLink: "https://github.com/rahulsoni5670/Webserver",
    demoLink: null
  },
  {
    id: 'MedIntel-AI',
    title: "MedIntel-AI",
    category: "Clinical Intelligence & Healthcare Analytics",
    badge: "AI & Full-Stack",
    accentColor: "purple",
    windowType: "dashboard",
    urlBar: "https://medintel-ai.app/clinical-insights",
    statusBadge: "ML Diagnostics Online",
    icon: <Sparkles size={24} className="text-purple-400" />,
    shortDesc: "AI-driven medical intelligence and healthcare diagnostic dashboard providing clinical insights and symptom-based decision support.",
    fullDesc: "Engineered MedIntel-AI to assist healthcare practitioners with clinical decision support. Integrates machine learning classification algorithms for patient symptom analysis, backed by a responsive dashboard and secured RESTful endpoints.",
    architecturePoints: [
      {
        title: "Machine Learning Classifier",
        desc: "Integrated ML models for clinical symptom classification and diagnostic risk estimation."
      },
      {
        title: "Practitioner Analytics UI",
        desc: "Responsive glassmorphism dashboard visualizing diagnostic insights and patient data."
      },
      {
        title: "Secured REST API",
        desc: "Modular backend endpoints handling clinical inquiries and formatted diagnostic telemetry."
      }
    ],
    technologies: ["Python", "Machine Learning", "React.js", "Node.js", "Express.js", "RESTful API"],
    highlights: [
      "Integrated AI/ML classification models for clinical symptom analysis",
      "Interactive patient data analytics & diagnostic insights dashboard",
      "Secure RESTful API integration for healthcare query processing",
      "Responsive UI designed for intuitive practitioner user experience"
    ],
    githubLink: "https://github.com/rahulsoni5670/MedIntel-AI",
    demoLink: null
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="page-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge font-mono">
            <FolderGit2 size={13} />
            <span>PRODUCTION &amp; ARCHITECTURAL CODE</span>
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Engineering Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Case studies of distributed systems, high-concurrency socket architectures, and full-stack web platforms engineered from scratch.
          </p>
        </div>

        {/* Detailed Projects Grid */}
        <div className="projects-showcase-list">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`project-case-card glass-card project-accent-${project.accentColor}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
            >
              {/* Window Frame Mockup Topbar */}
              <div className="case-window-header font-mono">
                <div className="case-window-dots">
                  <span className="window-dot red"></span>
                  <span className="window-dot yellow"></span>
                  <span className="window-dot green"></span>
                </div>
                <div className="case-url-bar">
                  <span className="case-url-text">{project.urlBar}</span>
                </div>
                <div className="case-status-indicator">
                  <Activity size={12} className="text-emerald-400" />
                  <span className="case-status-label">{project.statusBadge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="case-body">
                <div className="case-top-meta">
                  <div className="case-title-row">
                    <div className="case-icon-box">
                      {project.icon}
                    </div>
                    <div>
                      <span className="case-category font-mono">{project.category}</span>
                      <h3 className="case-title">{project.title}</h3>
                    </div>
                  </div>
                  <span className="case-badge-pill font-mono">{project.badge}</span>
                </div>

                <p className="case-summary">{project.shortDesc}</p>

                {/* Architecture Highlights Triplets */}
                <div className="case-architecture-grid">
                  {project.architecturePoints.map((pt, pIdx) => (
                    <div key={pIdx} className="arch-point-box font-mono">
                      <span className="arch-point-title">
                        <CheckCircle size={13} className="text-emerald-400 inline mr-1" />
                        {pt.title}
                      </span>
                      <p className="arch-point-desc">{pt.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="case-tech-row font-mono">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="case-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="case-footer-actions">
                  <div className="case-links-group">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary case-btn"
                      >
                        <ExternalLink size={15} />
                        <span>Launch Live Demo</span>
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary case-btn"
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-details-link font-mono"
                  >
                    <Layers size={14} />
                    <span>View Architecture Spec &bull;</span>
                  </button>
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

                <ul className="modal-highlights-list font-mono">
                  {selectedProject.highlights.map((item, iIdx) => (
                    <li key={iIdx}>
                      <span className="bullet-dot"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="modal-section-title mt-4">
                  <Code size={18} className="text-cyan-400" />
                  <span>Technologies &amp; Systems</span>
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
                    <ExternalLink size={16} />
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
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
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
