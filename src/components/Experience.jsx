import React, { useEffect } from 'react';
import { FaLaptopCode, FaBrain } from 'react-icons/fa';

export default function Experience() {
  useEffect(() => {
    const cards = document.querySelectorAll('.exp-card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('show'), i * 250);
    });
  }, []);

  const experiences = [
    {
      id: 'webdev',
      role: 'Full Stack Development Intern',
      company: 'Strategic Knights',
      period: 'November 2025',
      status: 'Completed',
      desc: 'Completed a hands-on Full Stack Web Development Internship focused on React, frontend development, backend integration, databases, API development, deployment, and real-world web application development.',
      highlights: [
        '🚀 Built interactive components using React Hooks and modern state management',
        '⚡ Improved project layouts with advanced CSS animations and responsive design',
        '🔧 Worked on bug-fixing, UI polishing, API integration, and deployment',
      ],
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'API Integration'],
      icon: <FaLaptopCode className="exp-icon-svg" />,
      classType: 'web-card',
    },
    {
      id: 'ml',
      role: 'Machine Learning Intern',
      company: 'Krish Tec',
      period: 'May 2026 – May 2026',
      status: 'Completed',
      desc: 'Completed a one-month Machine Learning Internship at Krish Tec, gaining practical experience in data handling, data visualization, regression, classification, and deep learning. Worked on hands-on ML projects involving Student Stress Detection, Cats vs Dogs Classification, and predictive modeling.',
      highlights: [
        '🧠 Worked on hands-on ML projects involving Student Stress Detection and Cats vs Dogs Classification',
        '📊 Gained practical experience in data handling, data visualization, regression, and classification',
        '🤖 Explored deep learning workflows and predictive modeling for real-world applications',
      ],
      skills: ['Machine Learning', 'Deep Learning', 'Data Handling', 'Python', 'Regression', 'Classification'],
      icon: <FaBrain className="exp-icon-svg" />,
      classType: 'ml-card',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      {/* Floating neon particles */}
      <div className="particles"></div>

      <h1 className="experience-title">Experience</h1>

      <div className="exp-cards-container">
        {experiences.map((exp) => (
          <div key={exp.id} className={`exp-card ${exp.classType}`}>
            <div className="glow-border"></div>

            <div className="exp-card-header">
              <div className="exp-icon-box">{exp.icon}</div>
              <div className="exp-title-box">
                <h2 className="role">{exp.role}</h2>
                <p className="company">
                  <span>{exp.company} • {exp.period}</span>
                  {exp.status && <span className="exp-status-tag">{exp.status}</span>}
                </p>
              </div>
            </div>

            <p className="exp-desc">{exp.desc}</p>

            <div className="exp-highlights">
              {exp.highlights.map((highlight, index) => (
                <p key={index}>{highlight}</p>
              ))}
            </div>

            <div className="skills">
              {exp.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="shine"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
