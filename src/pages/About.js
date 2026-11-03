import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code, Terminal, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { getTechIcon } from '../components/TechIcons';
import '../App.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} style={{ color: '#a78bfa' }} />,
    skills: [
      { name: 'C/C++', level: 'Advanced', pct: 88 },
      { name: 'Java', level: 'Advanced', pct: 90 },
      { name: 'JavaScript', level: 'Intermediate', pct: 75 },
      { name: 'HTML/CSS', level: 'Advanced', pct: 92 },
    ]
  },
  {
    title: "Technologies & Frameworks",
    icon: <Terminal size={20} style={{ color: '#00d4ff' }} />,
    skills: [
      { name: 'NodeJs', level: 'Intermediate', pct: 78 },
      { name: 'ReactJs', level: 'Intermediate', pct: 80 },
      { name: 'MongoDB', level: 'Intermediate', pct: 72 },
      { name: 'Socket.io', level: 'Intermediate', pct: 82 },
    ]
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={20} style={{ color: '#f0abfc' }} />,
    skills: [
      { name: 'VS Code', level: 'Proficient', pct: 95 },
      { name: 'Git', level: 'Proficient', pct: 88 },
      { name: 'Github', level: 'Proficient', pct: 90 },
      { name: 'Postman', level: 'Proficient', pct: 85 },
      { name: 'IntelliJ', level: 'Proficient', pct: 82 },
    ]
  }
];

const softSkills = [
  "Communication & Presentation", "Critical Thinking", "Decision Making",
  "Leadership", "Problem Solving", "Adaptability", "Team Collaboration"
];

function SkillProgressBar({ skill, animate }) {
  return (
    <div className="skill-progress-item">
      <div className="skill-progress-header">
        <span className="skill-progress-name">
          {getTechIcon(skill.name)}
          {skill.name}
        </span>
        <span className="skill-progress-pct">{animate ? skill.pct : 0}%</span>
      </div>
      <div className="skill-progress-track">
        <div
          className="skill-progress-fill"
          style={{ width: animate ? `${skill.pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function About() {
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimated(true);
    }, { threshold: 0.2 });
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="page-section">
      <div className="container-main">
        <div className="section-header-center">
          <div className="section-badge">
            <User size={14} /><span>Background & Experience</span>
          </div>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Passionate Engineering student dedicated to solving real-world problems through clean code, scalable server architecture, and efficient algorithms.
          </p>
        </div>

        {/* Bio & Education Grid */}
        <div className="about-grid">
          <motion.div
            className="glass-card about-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-header-row">
              <div className="icon-avatar indigo"><GraduationCap size={24} /></div>
              <div>
                <h3 className="card-title">Education & Profile</h3>
                <span className="card-subtitle">Thapar Institute of Engineering and Technology</span>
              </div>
            </div>
            <p className="about-text">
              I am an <strong>Electronics and Computer Engineering (ENC)</strong> student at TIET. My academic background combines deep hardware-software system design with modern software engineering principles.
            </p>
            <p className="about-text">
              I am driven by a passion for building multi-threaded web servers, real-time web applications using Socket.io and Node.js, and object-oriented Java solutions.
            </p>
            <div className="education-timeline">
              <div className="edu-timeline-item">
                <div className="edu-degree">B.Tech — Electronics & Computer Engineering</div>
                <div className="edu-institute">Thapar Institute of Engineering & Technology</div>
                <div className="edu-year">2023 – 2027 (Expected)</div>
              </div>
              <div className="edu-timeline-item">
                <div className="edu-degree">Higher Secondary Education (12th)</div>
                <div className="edu-institute">PCM with Computer Science</div>
                <div className="edu-year">Graduated 2023</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-card about-card highlight-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="card-header-row">
              <div className="icon-avatar purple"><Sparkles size={24} /></div>
              <div>
                <h3 className="card-title">Core Competencies</h3>
                <span className="card-subtitle">Engineering Mindset</span>
              </div>
            </div>
            <ul className="competency-list">
              <li><CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0 }} /><span>Object-Oriented Design & Data Structures (Java, C++)</span></li>
              <li><CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0 }} /><span>Full-Stack Web Development (Node.js, React.js, Express, MongoDB)</span></li>
              <li><CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0 }} /><span>Real-Time Socket Communication & Multi-Threaded Concurrency</span></li>
              <li><CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0 }} /><span>System Architecture, Socket Programming & File I/O</span></li>
              <li><CheckCircle2 size={18} style={{ color: '#34d399', flexShrink: 0 }} /><span>RESTful API Design & Microservices Patterns</span></li>
            </ul>
          </motion.div>
        </div>

        {/* Technical Skills with Progress Bars */}
        <div className="skills-section-wrapper" ref={skillsRef}>
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
                <div className="skill-progress-bar-wrapper">
                  {category.skills.map((skill, sIdx) => (
                    <SkillProgressBar key={sIdx} skill={skill} animate={animated} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-wrapper">
          <h3 className="sub-section-title text-center">
            Professional & <span className="gradient-text-cyan">Soft Skills</span>
          </h3>
          <div className="soft-skills-container">
            {softSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                className="soft-skill-badge"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                ✦ {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
