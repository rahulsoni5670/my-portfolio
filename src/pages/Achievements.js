import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Changed from index.css to App.css

function Achievements() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current; // Capture ref value

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) { // Use captured ref value in cleanup
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  const achievements = [
    {
      type: "Certification",
      title: "Problem Solving (HackerRank)",
      description: "Certified in Problem Solving by HackerRank, demonstrating strong algorithmic thinking and coding skills.",
      link: "https://www.hackerrank.com/certificates/iframe/999f37e2591a" // Placeholder link
    },
    {
      type: "Certification",
      title: "Java (HackerRank)",
      description: "Certified in Java by HackerRank, validating proficiency in Java programming language fundamentals and advanced concepts.",
      link: "https://www.hackerrank.com/certificates/iframe/3ea35e47b29a" // Placeholder link
    },
  ];

  return (
    <main id="achievements" ref={sectionRef} className={`flex-grow container-main page-section section-reveal ${isVisible ? 'is-visible' : ''}`}> {/* Added ref and classes */}
      <h2 className="section-heading">Achievements & Certifications</h2>
      <div className="achievements-list">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-item">
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="achievement-link-card"> {/* New class for card link */}
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-type">{item.type}</p>
                <p className="achievement-description">{item.description}</p>
                <span className="external-link-icon"> {/* Icon container */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </span>
              </a>
            ) : (
              // Fallback if no link is provided
              <>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-type">{item.type}</p>
                <p className="achievement-description">{item.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Achievements;
