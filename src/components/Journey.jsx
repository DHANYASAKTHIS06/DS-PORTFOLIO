import React, { useState } from 'react';
import {
  FaTerminal,
  FaPython,
  FaDatabase,
  FaLaptopCode,
  FaTrophy,
  FaBrain,
  FaBuilding,
  FaChartLine
} from 'react-icons/fa';

export default function Journey() {
  const stages = [
    {
      title: 'Aug 2024 – Nov 2024',
      shortTitle: "Aug '24",
      text: 'Learned C programming fundamentals, problem-solving basics, memory handling, loops, functions, and debugging techniques.',
      role: 'Programming Fundamentals',
      growthLevel: 'Foundation Stage (15%)',
      growthPercent: 15,
      icon: 'code',
      isInternship: false,
    },
    {
      title: 'Dec 2024 – Mar 2025',
      shortTitle: "Dec '24",
      text: 'Advanced Python concepts, computational thinking, automation scripts, algorithmic thinking, and mini-project development.',
      role: 'Computational & Algorithmic Thinking',
      growthLevel: 'Computational Logic (33%)',
      growthPercent: 33,
      icon: 'python',
      isInternship: false,
    },
    {
      title: 'Apr 2025 – Sep 2025',
      shortTitle: "Apr '25",
      text: 'Studied DBMS fundamentals, SQL queries, DSA basics, sorting/searching techniques, and completed academic mini-projects.',
      role: 'Database & Algorithm Design',
      growthLevel: 'Core Computer Science (50%)',
      growthPercent: 50,
      icon: 'database',
      isInternship: false,
    },
    {
      title: 'Oct 2025 – Jan 2026',
      shortTitle: "Oct '25",
      text: 'Completed a Full Stack Web Development Internship at Strategic knights Technologies, gaining hands-on experience in React, frontend development, backend integration, databases, API development, deployment, and real-world web application development.',
      role: 'Full Stack Developer Intern',
      company: 'Strategic knights Technologies',
      growthLevel: 'Professional Web Dev (68%)',
      growthPercent: 68,
      icon: 'laptop',
      isInternship: true,
      internshipBadge: 'Full Stack Internship',
    },
    {
      title: 'Feb 2026 – May 2026',
      shortTitle: "Feb '26",
      text: 'Developed major full-stack projects including SkillSwap, Internship Tracker Application, and Personal Portfolio Website. Participated in project exhibitions, technical events, project expos, and showcased innovative software solutions.',
      role: 'Software Project Architect',
      growthLevel: 'System Architecture & Expos (85%)',
      growthPercent: 85,
      icon: 'trophy',
      isInternship: false,
    },
    {
      title: 'May 2026 – Present',
      shortTitle: "May '26",
      text: 'Completed a Machine Learning Internship at Krish tec and developed Calci Rescue AI App and Mask AI – Smart Employee Access System using Machine Learning and CNN technologies for real-world applications.',
      role: 'Machine Learning Intern',
      company: 'Krish tec',
      growthLevel: 'Advanced AI & Deployment (100%)',
      growthPercent: 100,
      icon: 'brain',
      isInternship: true,
      internshipBadge: 'Machine Learning Internship',
    },
  ];

  const [current, setCurrent] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <FaTerminal className="journey-icon-svg" />;
      case 'python':
        return <FaPython className="journey-icon-svg" />;
      case 'database':
        return <FaDatabase className="journey-icon-svg" />;
      case 'laptop':
        return <FaLaptopCode className="journey-icon-svg" />;
      case 'trophy':
        return <FaTrophy className="journey-icon-svg" />;
      case 'brain':
        return <FaBrain className="journey-icon-svg" />;
      default:
        return <FaLaptopCode className="journey-icon-svg" />;
    }
  };

  return (
    <section id="journey" className="journey-section">
      <h1 className="journey-title">Career Journey</h1>
      <p className="journey-subtitle">
        An interactive timeline tracing my engineering growth, academic achievements, and professional software internships.
      </p>

      {/* Timeline Nav */}
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-line-active" style={{ width: `${(current / (stages.length - 1)) * 100}%` }}></div>

        <div className="timeline-dots">
          {stages.map((stage, idx) => (
            <div key={idx} className="dot-wrapper">
              <button
                className={`dot ${current === idx ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to stage: ${stage.role}`}
              />
              <span className={`dot-label ${current === idx ? 'active' : ''}`}>
                {stage.shortTitle}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Card */}
      <div key={current} className="journey-card">
        <div className="journey-card-header">
          <div className="journey-card-left">
            <div className="journey-card-icon-box">
              {getIcon(stages[current].icon)}
            </div>
            <div className="journey-card-titles">
              <span className="journey-card-date">{stages[current].title}</span>
              <h2 className="journey-card-role">{stages[current].role}</h2>
              {stages[current].company && (
                <span className="journey-card-company">
                  <FaBuilding className="company-icon" /> {stages[current].company}
                </span>
              )}
            </div>
          </div>

          {stages[current].isInternship && (
            <div className="journey-internship-badge">
              <span className="badge-glow-dot"></span>
              {stages[current].internshipBadge}
            </div>
          )}
        </div>

        <p className="journey-card-desc">{stages[current].text}</p>

        {/* Career Progression Bar */}
        <div className="growth-tracker">
          <div className="growth-tracker-header">
            <span className="growth-label">
              <FaChartLine className="growth-icon" /> Skill & Career Progression
            </span>
            <span className="growth-level-text">{stages[current].growthLevel}</span>
          </div>
          <div className="growth-progress-bar">
            <div
              className="growth-progress-fill"
              style={{ width: `${stages[current].growthPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Down arrow */}
      <button
        className="journey-down neon-arrow-box"
        onClick={() =>
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to projects"
      >
        ⬇
      </button>
    </section>
  );
}
