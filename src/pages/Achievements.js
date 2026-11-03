import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Star, ExternalLink, Check } from 'lucide-react';
import '../App.css';

const certifications = [
  {
    title: "Problem Solving (Basic & Advanced)",
    issuer: "HackerRank",
    date: "Verified Certification",
    credentialId: "999f37e2591a",
    description: "Certified in Advanced Problem Solving by HackerRank, validating strong algorithmic thinking, space-time complexity analysis, and competitive programming proficiency in complex scenarios.",
    link: "https://www.hackerrank.com/certificates/iframe/999f37e2591a",
    skillsValidated: ["Data Structures & Algorithms", "Space-Time Optimization", "Dynamic Programming", "Graph Traversal"]
  },
  {
    title: "Java Programming (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "Verified Certification",
    credentialId: "3ea35e47b29a",
    description: "Certified in Java Programming by HackerRank, demonstrating mastery over Object-Oriented Programming (OOP) paradigms, the Java Collections Framework, multi-threaded concurrency, and robust exception handling.",
    link: "https://www.hackerrank.com/certificates/iframe/3ea35e47b29a",
    skillsValidated: ["Java OOPs", "Collections Framework", "Concurrency & Threads", "Exception Architecture"]
  }
];

function Achievements() {
  return (
    <section id="achievements" className="page-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge font-mono">
            <Award size={13} />
            <span>INDUSTRY BENCHMARKS &amp; CREDENTIALS</span>
          </div>
          <h2 className="section-heading">
            Verified <span className="gradient-text">Certifications</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Industry and platform-verified certifications demonstrating algorithm mastery, data structures depth, and software engineering proficiency.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="achievements-grid">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card achievement-card achievement-card-glow"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div>
                <div className="achievement-card-header">
                  <div className="issuer-badge font-mono">
                    <ShieldCheck size={18} className="text-emerald-400" />
                    <span>{item.issuer} Verified &bull; ID: {item.credentialId}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star size={18} className="text-amber-400 fill-amber-400/30" />
                  </motion.div>
                </div>

                <h3 className="achievement-card-title">{item.title}</h3>
                <p className="achievement-card-desc">{item.description}</p>

                <div className="achievement-validated-box font-mono">
                  <span className="text-xs text-muted block mb-1">SKILLS VALIDATED:</span>
                  <div className="achievement-tags font-mono">
                    {item.skillsValidated.map((skill, sIdx) => (
                      <span key={sIdx} className="ach-tag">
                        <Check size={11} className="text-emerald-400 inline mr-1" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="achievement-card-footer">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert-link font-mono"
                >
                  <span>Verify Credential on HackerRank</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Milestones Highlight */}
        <motion.div
          className="academic-highlight-banner glass-card mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="banner-icon-side">
            <CheckCircle2 size={30} className="text-indigo-400" />
          </div>
          <div className="banner-text-side">
            <span className="font-mono text-xs text-cyan">THAPAR INSTITUTE OF ENGINEERING &amp; TECHNOLOGY</span>
            <h4 className="banner-title">Engineering Societies &amp; Technical Competitions</h4>
            <p className="banner-subtitle">
              Active contributor in collegiate engineering hackathons and departmental software builds. Engineered a real-time event buzzer infrastructure supporting 100+ concurrent participants with zero packet latency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
