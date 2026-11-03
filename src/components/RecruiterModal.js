import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, ExternalLink, FileText, Sparkles, Server, Code2, Award } from 'lucide-react';

function RecruiterModal({ isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rahulsoni5670@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="recruiter-modal-backdrop" onClick={onClose}>
        <motion.div
          className="recruiter-modal-container glass-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        >
          {/* Header */}
          <div className="recruiter-modal-header">
            <div className="recruiter-badge-row">
              <span className="recruiter-fast-chip font-mono">
                <Sparkles size={13} className="text-amber-400" />
                EXECUTIVE CANDIDATE BRIEFING • 30-SECOND READ
              </span>
            </div>
            <button className="recruiter-modal-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>

          <div className="recruiter-modal-body">
            {/* Quick Profile Summary */}
            <div className="recruiter-candidate-card">
              <div className="recruiter-name-block">
                <h3 className="recruiter-candidate-name">Rahul Soni</h3>
                <p className="recruiter-candidate-role">
                  Electronics &amp; Computer Engineering @ <strong>Thapar Institute of Engineering &amp; Technology (TIET)</strong>
                </p>
                <div className="recruiter-status-pill font-mono">
                  <span className="status-dot-pulse"></span>
                  <span>Target: Software Engineering / Full-Stack / Backend Internships (2025)</span>
                </div>
              </div>
            </div>

            {/* Why Hire Rahul? 3 Core Pillars */}
            <h4 className="recruiter-section-heading">⚡ Why Consider Rahul? (Key Differentiators)</h4>
            <div className="recruiter-pillars-grid">
              <div className="recruiter-pillar-card">
                <div className="pillar-icon-box indigo">
                  <Server size={18} />
                </div>
                <div className="pillar-text">
                  <h5>Systems &amp; Concurrency Depth</h5>
                  <p>
                    Engineered Java multi-model web servers benchmarked with <strong>1,000+ simultaneous client socket connections</strong> using <code>ExecutorService</code> thread pools.
                  </p>
                </div>
              </div>

              <div className="recruiter-pillar-card">
                <div className="pillar-icon-box cyan">
                  <Code2 size={18} />
                </div>
                <div className="pillar-text">
                  <h5>Real-Time Web Architecture</h5>
                  <p>
                    Built <code>workonmeet</code>, a live WebRTC platform delivering <strong>sub-100ms peer-to-peer</strong> video/audio streaming and Socket.io signaling on Vercel.
                  </p>
                </div>
              </div>

              <div className="recruiter-pillar-card">
                <div className="pillar-icon-box purple">
                  <Award size={18} />
                </div>
                <div className="pillar-text">
                  <h5>HackerRank Verified Problem Solving</h5>
                  <p>
                    Industry-certified in <strong>Problem Solving &amp; Java Programming</strong>, validating strong algorithmic space-time efficiency and clean OOP design.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tech Snapshot */}
            <h4 className="recruiter-section-heading">🛠 Core Tech Stack</h4>
            <div className="recruiter-tech-tags font-mono">
              <span className="recruiter-tag highlighted">Java (OOP / Concurrency)</span>
              <span className="recruiter-tag highlighted">C / C++</span>
              <span className="recruiter-tag highlighted">Node.js / Express</span>
              <span className="recruiter-tag highlighted">React.js</span>
              <span className="recruiter-tag">Socket.io</span>
              <span className="recruiter-tag">WebRTC</span>
              <span className="recruiter-tag">MongoDB</span>
              <span className="recruiter-tag">REST APIs</span>
              <span className="recruiter-tag">Git / GitHub</span>
              <span className="recruiter-tag">Linux CLI</span>
            </div>

            {/* One-Click Action Row */}
            <div className="recruiter-actions-row">
              <a
                href="https://rahulsoni.cv"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary recruiter-cta-btn"
              >
                <FileText size={16} />
                <span>Download / View Resume</span>
              </a>

              <button onClick={handleCopyEmail} className="btn-secondary recruiter-copy-btn">
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? 'Email Copied!' : 'Copy Email (rahulsoni5670@gmail.com)'}</span>
              </button>

              <a
                href="https://www.linkedin.com/in/rahul-soni-8b281728b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary recruiter-icon-link"
                title="LinkedIn Profile"
              >
                <ExternalLink size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default RecruiterModal;

