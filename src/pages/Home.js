import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, ArrowRight, Mail, Sparkles, Terminal, Code2, Server, Cpu, CheckCircle2, Play } from 'lucide-react';
import userImage from '../assets/me.jpg';
import '../App.css';

const COMMANDS = {
  'benchmark': {
    cmd: './benchmark-server.sh --connections=1000',
    output: [
      '[INFO] Initializing Java ExecutorService thread pool (16 workers)...',
      '[TEST] Simulating 1,000 simultaneous TCP client sockets...',
      '[METRIC] Peak Throughput: 1,040 req/s | Avg Latency: 1.8ms',
      '[RESULT] Resource Exhaustion: 0% | Thread Deadlocks: 0',
      '✓ Benchmark Passed: High-concurrency architecture validated.'
    ]
  },
  'skills': {
    cmd: 'cat skills.json',
    output: [
      '{',
      '  "core_languages": ["Java (OOP/Concurrency)", "C/C++", "JavaScript (ES6+)"],',
      '  "backend_systems": ["Node.js", "Express", "Socket.io", "WebRTC", "Java Sockets"],',
      '  "frontend_ui": ["React.js", "Tailwind CSS", "Framer Motion"],',
      '  "databases_tools": ["MongoDB", "Git", "IntelliJ IDEA", "Postman", "Linux CLI"]',
      '}'
    ]
  },
  'whoami': {
    cmd: 'whoami --details',
    output: [
      'Candidate: Rahul Soni',
      'Degree: B.Tech in Electronics & Computer Engineering (ENC)',
      'Institute: Thapar Institute of Engineering and Technology (TIET), Patiala',
      'Graduation: 2027 (Expected)',
      'Focus: High-concurrency backend services, WebRTC streaming & Distributed systems'
    ]
  }
};

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const num = parseInt(target.replace(/\D/g, '')) || 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(num);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function Home({ onOpenRecruiterModal }) {
  const [activeTab, setActiveTab] = useState('terminal');
  const [selectedCmdKey, setSelectedCmdKey] = useState('benchmark');
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasAnimated(true);
    }, { threshold: 0.25 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const socketCount = useCountUp("1000", 1800, hasAnimated);

  return (
    <section id="home" className="home-hero-section" ref={sectionRef}>
      <div className="container-main">
        {/* Top Header Row */}
        <div className="hero-top-badge-row">
          <motion.div
            className="hero-status-tag font-mono"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot-pulse"></span>
            <span>Available for SWE / Full-Stack / Backend Internships &amp; Roles</span>
          </motion.div>
        </div>

        {/* Hero Main Grid: Left Pitch / Right Terminal HUD */}
        <div className="hero-pro-grid">
          {/* Left Column: Authoritative Recruiter Pitch */}
          <motion.div
            className="hero-pro-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-identity-row">
              <div
                className="hero-avatar-mini-wrapper"
                style={{
                  animation: 'gentle-float 4.5s ease-in-out infinite',
                  transform: 'none'
                }}
              >
                <img
                  src={userImage}
                  alt="Rahul Soni"
                  className="hero-avatar-mini"
                  style={{
                    animation: 'none',
                    transform: 'none'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/120x120/1e1b4b/a5b4fc?text=RS";
                  }}
                />
                <span className="avatar-online-dot"></span>
              </div>
              <div>
                <span className="hero-greeting font-mono">HELLO WORLD, I'M</span>
                <h1 className="hero-name-pro">
                  Rahul <span className="gradient-text">Soni</span>
                </h1>
              </div>
            </div>

            <h2 className="hero-headline-pro">
              Architecting high-throughput concurrent systems &amp; real-time web applications.
            </h2>

            <p className="hero-bio-pro">
              Electronics &amp; Computer Engineering (ENC) student at{' '}
              <strong className="text-highlight">Thapar Institute of Engineering &amp; Technology ('27)</strong>.
              Specialized in low-level concurrency, multi-threaded Java network architectures, and WebRTC peer-to-peer streaming platforms.
            </p>

            {/* Quick CTAs */}
            <div className="hero-action-buttons">
              <button
                onClick={onOpenRecruiterModal}
                className="btn-primary hero-btn-recruiter font-mono"
              >
                <Sparkles size={16} className="text-amber-300" />
                <span>30-Second Recruiter Briefing</span>
              </button>

              <a
                href="https://rahulsoni.cv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hero-btn"
              >
                <FileText size={17} />
                <span>View Resume</span>
              </a>

              <a href="#projects" className="btn-secondary hero-btn">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn-connect hero-btn">
                <Send size={16} />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="hero-social-strip">
              <span className="font-mono text-xs text-muted">DIRECT CHANNELS:</span>
              <a
                href="https://github.com/rahulsoni5670"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-mini-social"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/rahulsoni5670</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rahul-soni-8b281728b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-mini-social"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:rahulsoni5670@gmail.com"
                className="hero-mini-social"
                title="Email"
              >
                <Mail size={16} />
                <span>rahulsoni5670@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live Interactive Developer Terminal */}
          <motion.div
            className="hero-terminal-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="terminal-card glass-card">
              {/* Window Titlebar */}
              <div className="terminal-titlebar">
                <div className="terminal-window-buttons">
                  <span className="win-btn win-close"></span>
                  <span className="win-btn win-min"></span>
                  <span className="win-btn win-max"></span>
                </div>
                <div className="terminal-tabs">
                  <button
                    className={`terminal-tab font-mono ${activeTab === 'terminal' ? 'active' : ''}`}
                    onClick={() => setActiveTab('terminal')}
                  >
                    <Terminal size={13} />
                    <span>terminal.sh</span>
                  </button>
                  <button
                    className={`terminal-tab font-mono ${activeTab === 'config' ? 'active' : ''}`}
                    onClick={() => setActiveTab('config')}
                  >
                    <Code2 size={13} />
                    <span>engineer.config.ts</span>
                  </button>
                </div>
              </div>

              {/* Terminal View */}
              {activeTab === 'terminal' && (
                <div className="terminal-content font-mono">
                  <div className="terminal-prompt-info text-muted">
                    <span>{'> Click a command below to run live verification:'}</span>
                  </div>

                  {/* Interactive Command Triggers */}
                  <div className="terminal-cmd-pills">
                    {Object.keys(COMMANDS).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCmdKey(key)}
                        className={`cmd-pill ${selectedCmdKey === key ? 'active' : ''}`}
                      >
                        <Play size={10} className="fill-current" />
                        <span>${key}</span>
                      </button>
                    ))}
                  </div>

                  <div className="terminal-screen">
                    <div className="terminal-active-line">
                      <span className="terminal-user">rahul@arch-box</span>
                      <span className="terminal-colon">:</span>
                      <span className="terminal-path">~/systems</span>
                      <span className="terminal-symbol">$ </span>
                      <span className="terminal-executed-cmd">{COMMANDS[selectedCmdKey].cmd}</span>
                    </div>

                    <div className="terminal-output-block">
                      {COMMANDS[selectedCmdKey].output.map((line, lIdx) => (
                        <div
                          key={lIdx}
                          className={`terminal-out-line ${
                            line.startsWith('✓') ? 'text-success' :
                            line.startsWith('[METRIC]') ? 'text-cyan' :
                            line.startsWith('[RESULT]') ? 'text-purple' : ''
                          }`}
                        >
                          {line}
                        </div>
                      ))}
                    </div>

                    <div className="terminal-idle-line">
                      <span className="terminal-user">rahul@arch-box</span>
                      <span className="terminal-colon">:</span>
                      <span className="terminal-path">~/systems</span>
                      <span className="terminal-symbol">$ </span>
                      <span className="cursor-blink">█</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TypeScript Config View */}
              {activeTab === 'config' && (
                <div className="terminal-content font-mono config-view">
                  <pre className="code-editor-block">
                    <code>
{`/**
 * @file RahulSoni.ts
 * @summary Engineer Specification & Availability
 */
export const candidateProfile = {
  name: "Rahul Soni",
  education: {
    institution: "Thapar Institute of Eng. & Tech (TIET)",
    major: "Electronics and Computer Engineering",
    cohort: "2023 - 2027",
    coreCourses: ["DSA", "Operating Systems", "Computer Networks", "DBMS"]
  },
  technicalSpecialization: [
    "High-Concurrency Sockets (1000+ Sockets in Java)",
    "Peer-to-Peer WebRTC Media Streaming (workonmeet)",
    "Full-Stack Web (Node.js, React, Express, MongoDB)"
  ],
  verifiedCredentials: [
    "HackerRank Problem Solving (Advanced)",
    "HackerRank Java Programming (Intermediate)"
  ],
  seeking: "Software Engineering Internships / Full-Time (2025)",
  openForRelocation: true
} as const;`}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Credibility Metrics Strip */}
        <div className="hero-credibility-bar">
          <div className="cred-item">
            <Server size={22} className="cred-icon text-indigo-400" />
            <div className="cred-info">
              <span className="cred-value">{hasAnimated ? socketCount.toLocaleString() : 0}+</span>
              <span className="cred-label font-mono">Simultaneous Sockets Tested</span>
            </div>
          </div>

          <div className="cred-item">
            <Cpu size={22} className="cred-icon text-cyan-400" />
            <div className="cred-info">
              <span className="cred-value">&lt; 100ms</span>
              <span className="cred-label font-mono">WebRTC P2P Latency</span>
            </div>
          </div>

          <div className="cred-item">
            <CheckCircle2 size={22} className="cred-icon text-emerald-400" />
            <div className="cred-info">
              <span className="cred-value">Verified</span>
              <span className="cred-label font-mono">HackerRank Problem Solving</span>
            </div>
          </div>

          <div className="cred-item">
            <Code2 size={22} className="cred-icon text-purple-400" />
            <div className="cred-info">
              <span className="cred-value">TIET '27</span>
              <span className="cred-label font-mono">Electronics &amp; Computer Eng.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
