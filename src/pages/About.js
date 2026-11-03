import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Server, GraduationCap, CheckCircle2, ShieldCheck, Layers, Terminal, Sparkles, Network } from 'lucide-react';
import { getTechIcon } from '../components/TechIcons';
import '../App.css';

const TECH_MATRIX = [
  {
    category: "Core Languages",
    icon: <Terminal size={18} className="text-indigo-400" />,
    items: [
      { name: "Java", detail: "OOP, Collections, Multi-Threading, Concurrency, Socket IO" },
      { name: "C/C++", detail: "Memory Management, Pointers, Algorithmic Problem Solving" },
      { name: "JavaScript", detail: "ES6+, Async/Await, WebRTC APIs, Event Loop, DOM" },
      { name: "HTML/CSS", detail: "Semantic Web, Modern CSS3 Flexbox/Grid, Responsive Design" }
    ]
  },
  {
    category: "Backend, Sockets & Systems",
    icon: <Server size={18} className="text-cyan-400" />,
    items: [
      { name: "NodeJs", detail: "Event-driven asynchronous backend services & REST endpoints" },
      { name: "Socket.io", detail: "Bi-directional real-time communication & room broadcasting" },
      { name: "WebRTC", detail: "Peer-to-peer real-time audio, video streaming & data channels" },
      { name: "Java Sockets", detail: "ExecutorService thread pools, non-blocking network socket pools" }
    ]
  },
  {
    category: "Frontend & Full-Stack",
    icon: <Layers size={18} className="text-purple-400" />,
    items: [
      { name: "ReactJs", detail: "Component lifecycles, hooks, single-page state management" },
      { name: "MongoDB", detail: "NoSQL document stores, aggregation pipelines, schema modeling" },
      { name: "Git", detail: "Distributed version control, branching workflows, PR management" },
      { name: "Github", detail: "Open-source collaboration, continuous deployment pipelines" }
    ]
  },
  {
    category: "Developer Tools & Platforms",
    icon: <Cpu size={18} className="text-emerald-400" />,
    items: [
      { name: "IntelliJ", detail: "Enterprise Java profiling, memory debugging & JVM optimizations" },
      { name: "VS Code", detail: "Full-stack development, linting, extensions & debugging" },
      { name: "Postman", detail: "API endpoint mocking, automated testing & payload validation" }
    ]
  }
];

const SOFT_SKILLS = [
  "Algorithmic Thinking & Decomposition",
  "High-Concurrency System Design",
  "Rapid Technical Adaptability",
  "Collaborative Team Code Reviews",
  "Clear Technical Communication",
  "Ownership & Independent Execution"
];

function About() {
  return (
    <section id="about" className="page-section">
      <div className="container-main">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-badge font-mono">
            <User size={13} />
            <span>ENGINEERING FOUNDATION &amp; SKILLS</span>
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Competence</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A comprehensive breakdown of my systems architecture background, categorized technical proficiencies, and academic rigor.
          </p>
        </div>

        {/* Executive Bento Grid */}
        <div className="bento-grid-container">
          {/* Bento Card 1: Systems Engineering Architecture (Large) */}
          <motion.div
            className="bento-card bento-card-large glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bento-header-row">
              <div className="bento-icon-box indigo">
                <Network size={22} />
              </div>
              <div>
                <span className="bento-tag font-mono">CORE SYSTEM EXPERTISE</span>
                <h3 className="bento-title">High-Concurrency Network Architecture</h3>
              </div>
            </div>

            <p className="bento-text">
              My engineering focuses heavily on the intersection of low-level networking, thread safety, and scalable web services. I specialize in designing systems that prevent memory thrashing and thread exhaustion when handling thousands of simultaneous TCP connections.
            </p>

            {/* Architecture Flow Diagram */}
            <div className="bento-architecture-diagram font-mono">
              <div className="arch-node">
                <span className="arch-node-badge">1,000+ Inbound Sockets</span>
                <span className="arch-node-sub">Concurrent Clients</span>
              </div>
              <div className="arch-connector">➔</div>
              <div className="arch-node active">
                <span className="arch-node-badge highlight">Java ExecutorService</span>
                <span className="arch-node-sub">ThreadPool Pool Limit</span>
              </div>
              <div className="arch-connector">➔</div>
              <div className="arch-node">
                <span className="arch-node-badge">Non-blocking Dispatch</span>
                <span className="arch-node-sub">Zero Resource Leak</span>
              </div>
            </div>

            <ul className="bento-bullet-list">
              <li>
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Benchmarked Single-Threaded vs Multi-Threaded vs ThreadPool models under 1,000+ socket loads.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>WebRTC Mesh topology with dynamic STUN/TURN traversal for low-latency peer media streaming.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Robust Object-Oriented Design in Java enforcing strict memory safety and exception handling.</span>
              </li>
            </ul>
          </motion.div>

          {/* Bento Card 2: Academic Profile @ TIET */}
          <motion.div
            className="bento-card bento-card-medium glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bento-header-row">
              <div className="bento-icon-box cyan">
                <GraduationCap size={22} />
              </div>
              <div>
                <span className="bento-tag font-mono">ACADEMIC RIGOR</span>
                <h3 className="bento-title">Thapar Institute (TIET)</h3>
              </div>
            </div>

            <div className="tiet-academic-card">
              <div className="tiet-degree-line">
                <strong>B.Tech in Electronics and Computer Engineering</strong>
              </div>
              <div className="tiet-batch-line font-mono text-cyan">
                Class of 2023 – 2027 • Patiala, Punjab
              </div>
              <p className="tiet-desc">
                Rigorous curriculum bridging computer architecture, operating system internals, microprocessors, and modern software engineering.
              </p>

              <div className="coursework-box font-mono">
                <span className="coursework-title">RELEVANT COURSEWORK:</span>
                <div className="course-tags">
                  <span className="c-tag">Data Structures &amp; Algorithms</span>
                  <span className="c-tag">Operating Systems</span>
                  <span className="c-tag">Computer Networks</span>
                  <span className="c-tag">Object-Oriented Programming (Java)</span>
                  <span className="c-tag">DBMS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Verified Industry Certifications */}
          <motion.div
            className="bento-card bento-card-small glass-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="bento-header-row">
              <div className="bento-icon-box purple">
                <ShieldCheck size={22} />
              </div>
              <div>
                <span className="bento-tag font-mono">INDUSTRY BENCHMARK</span>
                <h3 className="bento-title">HackerRank Verified</h3>
              </div>
            </div>

            <div className="hackerrank-cert-list font-mono">
              <div className="hr-cert-item">
                <div className="hr-cert-header">
                  <span className="cert-badge-gold">★ ADVANCED</span>
                  <span className="cert-name">Problem Solving</span>
                </div>
                <p className="cert-meta">Validates space-time complexity mastery &amp; competitive algorithmic thinking.</p>
              </div>

              <div className="hr-cert-item">
                <div className="hr-cert-header">
                  <span className="cert-badge-gold">★ CERTIFIED</span>
                  <span className="cert-name">Java Programming</span>
                </div>
                <p className="cert-meta">Demonstrates OOP design, Collections framework &amp; concurrency mastery.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Stack Matrix: Categorized with Real Context */}
        <div className="tech-stack-section">
          <h3 className="sub-section-title">
            Categorized <span className="gradient-text">Tech Stack Matrix</span>
          </h3>
          <p className="text-center text-muted font-mono text-sm" style={{ marginBottom: '2.5rem' }}>
            Structured by practical production and architectural depth, not arbitrary percentages
          </p>

          <div className="tech-matrix-grid">
            {TECH_MATRIX.map((cat, idx) => (
              <motion.div
                key={idx}
                className="glass-card tech-matrix-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="tech-matrix-header">
                  {cat.icon}
                  <h4>{cat.category}</h4>
                </div>

                <div className="tech-matrix-list">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="tech-matrix-item">
                      <div className="tech-matrix-name-row">
                        <div className="tech-matrix-icon">
                          {getTechIcon(item.name)}
                        </div>
                        <span className="tech-matrix-name font-mono">{item.name}</span>
                      </div>
                      <span className="tech-matrix-detail">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional & Soft Competencies */}
        <div className="soft-skills-wrapper mt-12">
          <h3 className="sub-section-title text-center">
            Engineering Principles &amp; <span className="gradient-text-cyan">Professional Traits</span>
          </h3>
          <div className="soft-skills-container">
            {SOFT_SKILLS.map((skill, idx) => (
              <motion.div
                key={idx}
                className="soft-skill-badge font-mono"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles size={13} className="text-cyan-400 inline mr-1" />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
