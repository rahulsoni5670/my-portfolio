import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Changed from index.css to App.css

// Helper component for a skill card
const SkillCard = ({ name, icon }) => (
  <li className="skill-card">
    <span className="skill-icon">{icon}</span>
    <p className="skill-name">{name}</p>
  </li>
);

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is intersecting (visible), set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally, unobserve after it becomes visible if animation should only play once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentSectionRef = sectionRef.current; // Capture ref value

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentSectionRef) { // Use captured ref value in cleanup
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const languages = [
    { name: 'C/C++', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'HTML/CSS', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'Java', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'JavaScript', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'Github', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'Postman', icon: '📮' },
    { name: 'IntelliJ', icon: '💡' },
  ];

  const technologies = [
    { name: 'NodeJs', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'ReactJs', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
    { name: 'MongoDB', icon: <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4 0h-2V7h2v6z"/></svg> }, // Generic programming icon
  ];

  return (
    <main id="about" ref={sectionRef} className={`flex-grow container-main page-section text-center section-reveal ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="section-heading">About Me</h2>
      <p className="section-text">
        Hello! I'm Rahul Soni, an Electronics and Computer Engineering student with a passion for building smart and efficient systems. My academic journey at Thapar Institute of Engineering and Technology has provided me with a strong foundation in web development, Java programming, and system-level design.
      </p>
      <p className="section-text">
        I enjoy creating seamless user experiences and exploring the intersection of hardware and software. My projects reflect my commitment to applying theoretical knowledge to practical solutions, focusing on real-time systems, robust backend development, and intuitive user interfaces. I am always eager to learn new technologies and collaborate on innovative ideas.
      </p>

      <h3 className="sub-section-heading">Technical Skills</h3>
      <div className="skills-category-container">
        <h4>Languages</h4>
        <ul className="skills-grid">
          {languages.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </ul>

        <h4>Tools</h4>
        <ul className="skills-grid">
          {tools.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </ul>

        <h4>Technologies/Frameworks</h4>
        <ul className="skills-grid">
          {technologies.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </div>

      <h3 className="sub-section-heading">Soft Skills</h3>
      <ul className="skills-list"> {/* This remains a simple list as no icons were requested for soft skills */}
        <li>Communications and Presentation</li>
        <li>Critical Thinking</li>
        <li>Decision Making</li>
        <li>Leadership</li>
        <li>Problem Solving</li>
        <li>Adaptability</li>
        <li>Teamwork</li>
      </ul>
    </main>
  );
}

export default About;