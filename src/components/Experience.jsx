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
      role: 'Web Development Intern',
      company: 'Strategic Knights',
      period: 'Nov 11 – Nov 27, 2025',
      desc: 'Completed a hands-on internship focused on HTML, CSS, JavaScript, and React. Built real-world UI components, improved responsive layouts, and created mini-projects used inside the team workspace.',
      highlights: [
        '🚀 Built interactive components using React Hooks',
        '⚡ Improved project layouts with advanced CSS animations',
        '🔧 Worked on bug-fixing, UI polishing, and responsive behavior',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: <FaLaptopCode className="exp-icon-svg" />,
      classType: 'web-card',
    },
    {
      id: 'ml',
      role: 'Machine Learning Intern',
      company: 'Krish Tec',
      period: 'May 14 – May 31, 2026',
      desc: 'Completed a hands-on Machine Learning internship focused on data preprocessing, model training, deep learning, and real-world AI applications. Developed intelligent systems including Calci Rescue AI App and Mask AI while gaining practical experience in machine learning workflows.',
      highlights: [
        '🧠 Built machine learning models for real-world problem solving',
        '🤖 Worked with Deep Learning and CNN-based image classification systems',
        '📊 Performed data preprocessing, model training, testing, and evaluation',
      ],
      skills: ['Machine Learning', 'Deep Learning', 'CNN', 'Python'],
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
                  {exp.company} • {exp.period}
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
