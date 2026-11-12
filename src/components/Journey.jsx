import React, { useState } from 'react';
import {
  FaTerminal,
  FaPython,
  FaDatabase,
  FaLaptopCode,
  FaTrophy,
  FaBrain,
  FaBuilding,
  FaChartLine,
  FaRobot,
  FaRocket,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup
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
      growthLevel: 'Computational Logic (30%)',
      growthPercent: 30,
      icon: 'python',
      isInternship: false,
    },
    {
      title: 'Apr 2025 – Sep 2025',
      shortTitle: "Apr '25",
      text: 'Studied DBMS fundamentals, SQL queries, DSA basics, sorting/searching techniques, and completed academic mini-projects.',
      role: 'Database & Algorithm Design',
      growthLevel: 'Core Computer Science (45%)',
      growthPercent: 45,
      icon: 'database',
      isInternship: false,
    },
    {
      title: 'November 2025',
      shortTitle: "Nov '25",
      text: 'Completed a Full Stack Web Development Internship at Strategic knights Technologies, gaining hands-on experience in React, frontend development, backend integration, databases, API development, deployment, and real-world web application development.',
      role: 'Full Stack Developer Intern',
      company: 'Strategic knights Technologies',
      growthLevel: 'Professional Web Dev (60%)',
      growthPercent: 60,
      icon: 'laptop',
      isInternship: true,
      internshipBadge: 'Completed',
    },
    {
      title: 'Feb 2026 – May 2026',
      shortTitle: "Feb '26",
      text: 'Developed major full-stack projects including SkillSwap, Internship Tracker Application, and Personal Portfolio Website. Participated in project exhibitions, technical events, project expos, and showcased innovative software solutions.',
      role: 'Software Project Architect',
      growthLevel: 'System Architecture & Expos (70%)',
      growthPercent: 70,
      icon: 'trophy',
      isInternship: false,
    },
    {
      title: 'May 2026 – May 2026',
      shortTitle: "May '26",
      text: 'Completed a one-month Machine Learning Internship at Krish Tec, gaining practical experience in data handling, data visualization, regression, classification, and deep learning. Worked on hands-on ML projects involving Student Stress Detection, Cats vs Dogs Classification, and predictive modeling.',
      role: 'Machine Learning Intern',
      company: 'Krish Tec',
      growthLevel: 'Machine Learning Internship (80%)',
      growthPercent: 80,
      icon: 'brain',
      isInternship: true,
      internshipBadge: 'Completed',
    },
    {
      title: 'June 2026 – August 2026',
      shortTitle: "Jun '26",
      text: 'Started working on an LLM-based project while expanding my technical knowledge through practical learning and exploration. Strengthened my understanding of Data Mining, Machine Learning, Software Engineering, Cybersecurity, and Open-Source Software. Focused on building a strong foundation in modern technologies and applying concepts through project-based learning.',
      role: 'LLM Project Development & Technical Learning',
      growthLevel: 'Advanced Technical Exploration (90%)',
      growthPercent: 90,
      icon: 'robot',
      isInternship: false,
      highlights: [
        'Started developing an LLM-based project',
        'Learned Data Mining',
        'Explored Machine Learning concepts',
        'Strengthened Software Engineering knowledge',
        'Learned Cybersecurity fundamentals',
        'Explored Open-Source Software and tools',
      ],
      tags: [
        'LLM Project',
        'Data Mining',
        'Machine Learning',
        'Software Engineering',
        'Cybersecurity',
        'Open Source',
      ],
    },
    {
      title: 'September 2026 – Present',
      shortTitle: "Sep '26",
      text: 'Focused on developing innovative projects across Embedded Systems, Electric Vehicle Technology, and Machine Learning. Worked on three projects that combine practical problem-solving, technology exploration, and real-world applications. Continued strengthening technical and software development skills through hands-on project development.',
      role: 'Advanced Project Development',
      growthLevel: 'Applied Innovation & Systems (100%)',
      growthPercent: 100,
      icon: 'rocket',
      isInternship: false,
      projects: [
        {
          name: 'Embedded Vital Pulse',
          category: 'Embedded Systems',
          description:
            'Developed an embedded systems project focused on vital pulse monitoring, applying hardware and embedded technology concepts to a practical health-monitoring application.',
        },
        {
          name: 'Smart EV Charging Station',
          category: 'Electric Vehicle Technology / Embedded Systems',
          description:
            'Worked on a Smart EV Charging Station project focused on exploring intelligent electric vehicle charging solutions through practical technology implementation.',
        },
        {
          name: 'AERO-DETECTIVE',
          category: 'Machine Learning / Environmental Technology',
          description:
            'Developed a Machine Learning-based air quality monitoring system that analyzes air pollutants and predicts the Air Quality Index (AQI). Provides insights into pollution levels, identifies potential air quality risks, and suggests preventive measures to reduce exposure.',
          demoLink: 'https://airfrontend-6ngd.vercel.app/',
          githubLink: 'https://github.com/DHANYASAKTHIS06/airfrontend',
        },
      ],
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
      case 'robot':
        return <FaRobot className="journey-icon-svg" />;
      case 'rocket':
        return <FaRocket className="journey-icon-svg" />;
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

        {/* Highlights for LLM & Technical Learning */}
        {stages[current].highlights && (
          <div className="journey-highlights-container">
            <h4 className="journey-subheading">
              <FaLayerGroup className="subheading-icon" /> Key Learning Highlights
            </h4>
            <div className="journey-highlights-grid">
              {stages[current].highlights.map((h, i) => (
                <div key={i} className="journey-highlight-item">
                  <span className="journey-highlight-dot">▹</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
            {stages[current].tags && (
              <div className="journey-tags-container">
                {stages[current].tags.map((t, i) => (
                  <span key={i} className="journey-tag-badge">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Projects for Advanced Project Development */}
        {stages[current].projects && (
          <div className="journey-projects-container">
            <h4 className="journey-subheading">
              <FaLayerGroup className="subheading-icon" /> Featured Innovation Projects
            </h4>
            <div className="journey-projects-grid">
              {stages[current].projects.map((proj, i) => (
                <div key={i} className="journey-project-card">
                  <div className="journey-project-header">
                    <h5 className="journey-project-name">{proj.name}</h5>
                    <span className="journey-project-cat">{proj.category}</span>
                  </div>
                  <p className="journey-project-desc">{proj.description}</p>
                  {(proj.demoLink || proj.githubLink) && (
                    <div className="journey-project-links">
                      {proj.demoLink && (
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="journey-proj-link demo"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                      {proj.githubLink && (
                        <a
                          href={proj.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="journey-proj-link code"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

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
