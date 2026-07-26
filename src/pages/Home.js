import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, ArrowRight, Mail, Sparkles, Code2, Cpu, Server } from 'lucide-react';
import userImage from '../assets/me.jpg';
import '../App.css';

const roles = [
  "Electronics & Computer Eng. Student",
  "Full-Stack Web Developer",
  "Java & Concurrency Developer",
  "System-Level Software Enthusiast"
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          setIsDeleting(true);
          setTypingSpeed(1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="home-hero-section">
      <div className="container-main hero-container">
        {/* Left Side: Avatar & Interactive Frame */}
        <motion.div
          className="hero-avatar-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="avatar-ring-glow"></div>
          <div className="avatar-card">
            <img
              src={userImage}
              alt="Rahul Soni"
              className="hero-avatar-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/400x400/1e1b4b/a5b4fc?text=Rahul+Soni";
              }}
            />
            {/* Status badge overlay */}
            <div className="status-badge">
              <span className="status-dot-pulse"></span>
              <span className="status-text">Available for Opportunities</span>
            </div>
          </div>

          {/* Social Links Row below avatar */}
          <div className="hero-social-row">
            <a
              href="https://github.com/rahulsoni5670"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-soni-8b281728b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
              </svg>
            </a>
            <a
              href="mailto:rahulsoni5670@gmail.com"
              className="hero-social-link"
              title="Email Me"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Hero Details */}
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="hero-greeting-badge">
            <Sparkles size={16} className="text-amber-400" />
            <span>Hello & Welcome, I'm</span>
          </div>

          <h1 className="hero-name">
            Rahul <span className="gradient-text">Soni</span>
          </h1>

          <div className="hero-role-line font-mono">
            <span className="role-prefix">&gt; </span>
            <span className="role-typed-text">{currentText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-description">
            B.Tech student in <strong>Electronics and Computer Engineering</strong> at{" "}
            <span className="text-indigo-300">Thapar Institute of Engineering and Technology</span>.
            Specializing in high-performance Web Development, Java Systems, Socket Concurrency, and intuitive user experiences.
          </p>

          {/* Quick Stats Grid */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <Server size={20} className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">1000+</span>
                <span className="stat-label">Sockets Handled</span>
              </div>
            </div>
            <div className="hero-stat-card">
              <Code2 size={20} className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">Node / Java</span>
                <span className="stat-label">Full Stack Stack</span>
              </div>
            </div>
            <div className="hero-stat-card">
              <Cpu size={20} className="stat-icon" />
              <div className="stat-info">
                <span className="stat-value">TIET '27</span>
                <span className="stat-label">ENC Engineering</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-action-buttons">
            <a
              href="https://rahulsoni.cv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hero-btn"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </a>

            <a href="#projects" className="btn-secondary hero-btn">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-connect hero-btn">
              <Send size={18} />
              <span>Let's Connect</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;