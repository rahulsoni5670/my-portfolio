import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Star } from 'lucide-react';
import '../App.css';

const certifications = [
  {
    title: "Problem Solving (Basic & Advanced)",
    issuer: "HackerRank",
    date: "Certified",
    credentialId: "999f37e2591a",
    description: "Certified in Problem Solving by HackerRank, validating strong algorithmic thinking, space-time complexity analysis, and problem-solving skills in competitive scenarios.",
    link: "https://www.hackerrank.com/certificates/iframe/999f37e2591a",
    tags: ["Data Structures", "Algorithms", "Problem Solving", "Competitive Programming"]
  },
  {
    title: "Java Programming (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "Certified",
    credentialId: "3ea35e47b29a",
    description: "Certified in Java by HackerRank, demonstrating mastery over Java fundamentals, Object-Oriented Programming (OOP), Collections framework, multi-threading, and Exception handling.",
    link: "https://www.hackerrank.com/certificates/iframe/3ea35e47b29a",
    tags: ["Java", "OOPs", "Collections Framework", "Multi-Threading"]
  }
];

function Achievements() {
  return (
    <section id="achievements" className="page-section">
      <div className="container-main">
        {/* Section Title */}
        <div className="section-header-center">
          <div className="section-badge">
            <Award size={16} />
            <span>CREDENTIALS & RECOGNITION</span>
          </div>
          <h2 className="section-heading">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry and platform-verified certifications demonstrating algorithm mastery and software proficiency.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="achievements-grid">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-card achievement-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="achievement-card-header">
                <div className="issuer-badge font-mono">
                  <ShieldCheck size={18} className="text-emerald-400" />
                  <span>{item.issuer} Verified</span>
                </div>
                <Star size={18} className="text-amber-400 fill-amber-400/20" />
              </div>

              <h3 className="achievement-card-title">{item.title}</h3>
              <p className="achievement-card-desc">{item.description}</p>

              <div className="achievement-tags font-mono">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="ach-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="achievement-card-footer">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert-link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Stats / Academic Achievements banner */}
        <div className="academic-highlight-banner glass-card mt-12">
          <div className="banner-icon-side">
            <CheckCircle2 size={32} className="text-indigo-400" />
          </div>
          <div className="banner-text-side">
            <h4 className="banner-title">Thapar Institute Academic Milestones</h4>
            <p className="banner-subtitle">
              Active participant in technical society hackathons and departmental coding competitions. Engineered real-time buzzer infrastructure supporting 100+ simultaneous participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
