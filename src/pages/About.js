import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, Terminal, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { getTechIcon } from '../components/TechIcons';
import '../App.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} className="text-indigo-400" />,
    skills: [
      { name: 'C/C++', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'HTML/CSS', level: 'Advanced' },
    ]
  },
  {
    title: "Technologies & Frameworks",
    icon: <Terminal size={20} className="text-cyan-400" />,
    skills: [
      { name: 'NodeJs', level: 'Intermediate' },
      { name: 'ReactJs', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'Socket.io', level: 'Intermediate' },
    ]
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={20} className="text-purple-400" />,
    skills: [
      { name: 'VS Code', level: 'Proficient' },
      { name: 'Git', level: 'Proficient' },
      { name: 'Github', level: 'Proficient' },
      { name: 'Postman', level: 'Proficient' },
      { name: 'IntelliJ', level: 'Proficient' },
    ]
  }
];

const softSkills = [
  "Communication & Presentation",
  "Critical Thinking",
  "Decision Making",
  "Leadership",
  "Problem Solving",
  "Adaptability",
  "Team Collaboration"
];

function About() {
  return (
    <section id="about" className="page-section">
      <div className="container-main">
        {/* Section Title */}
        <div className="section-header-center">
          <div className="section-badge">
            <User size={16} />
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate Engineering student dedicated to solving real-world problems through clean code, scalable server architecture, and efficient algorithms.
          </p>
        </div>

        {/* Bio & Education Card Grid */}
        <div className="about-grid">
          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-header-row">
              <div className="icon-avatar indigo">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="card-title">Education & Profile</h3>
                <span className="card-subtitle">Thapar Institute of Engineering and Technology</span>
              </div>
            </div>
            <p className="about-text">
              I am an <strong>Electronics and Computer Engineering (ENC)</strong> student at TIET. My academic background combines deep hardware-software system design with modern software engineering principles.
            </p>
            <p className="about-text">
              I am driven by a passion for building multi-threaded web servers, real-time web applications using Socket.io and Node.js, and object-oriented Java solutions. I thrive in fast-paced environments where I can build impactful systems.
            </p>
          </motion.div>

          <motion.div
            className="glass-card about-card highlight-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="card-header-row">
              <div className="icon-avatar purple">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="card-title">Core Competencies</h3>
                <span className="card-subtitle">Engineering Mindset</span>
              </div>
            </div>

            <ul className="competency-list">
              <li>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Object-Oriented Design & Data Structures (Java, C++)</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Full-Stack Web Development (Node.js, React.js, Express, MongoDB)</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>Real-Time Socket Communication & Multi-Threaded Concurrency</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span>System Architecture, Socket Programming & File I/O</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Technical Skills Showcase */}
        <div className="skills-section-wrapper">
          <h3 className="sub-section-title">
            Technical <span className="gradient-text">Skills</span>
          </h3>

          <div className="skill-categories-grid">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                className="glass-card skill-category-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="category-header">
                  {category.icon}
                  <h4>{category.title}</h4>
                </div>

                <div className="skills-list-grid">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-pill">
                      <div className="skill-icon-wrapper">
                        {getTechIcon(skill.name)}
                      </div>
                      <div className="skill-info font-mono">
                        <span className="skill-name-text">{skill.name}</span>
                        <span className="skill-level-tag">{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills-wrapper">
          <h3 className="sub-section-title text-center">
            Professional & <span className="gradient-text-cyan">Soft Skills</span>
          </h3>
          <div className="soft-skills-container">
            {softSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                className="soft-skill-badge"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                ✨ {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;