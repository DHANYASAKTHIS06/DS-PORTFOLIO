import React from 'react';
import {
  FaCalculator,
  FaCamera,
  FaExchangeAlt,
  FaLaptopCode,
  FaBriefcase,
  FaHandshake,
  FaGithub,
  FaExternalLinkAlt,
  FaBrain
} from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'CALCI RESCUE AI APP',
      desc: 'Built an AI-powered emergency rescue app with secure access, gesture recognition, and SOS alert features. Functions as a normal calculator and unlocks a hidden rescue system through a secure passcode.',
      demoLink: 'https://calci-ai-rescue.vercel.app/',
      githubLink: 'https://github.com/DHANYASAKTHIS06',
      techStack: ['React Native', 'TensorFlow.js', 'Web Speech API', 'Twilio API', 'CSS Grid'],
      isML: true,
      icon: 'calculator',
    },
    {
      title: 'MASK AI – SMART EMPLOYEE ACCESS SYSTEM',
      desc: 'Built a CNN-based mask detection system that verifies employee compliance and automates secure workplace access. Detects mask usage in real time and grants or denies entry accordingly.',
      demoLink: 'https://mask-frontend-wayj.vercel.app/login',
      githubLink: 'https://github.com/DHANYASAKTHIS06',
      techStack: ['OpenCV', 'TensorFlow', 'Flask', 'React.js', 'WebRTC', 'CSS3'],
      isML: true,
      icon: 'camera',
    },
    {
      title: 'SKILLSWAP – PEER LEARNING PLATFORM',
      desc: 'Developed a full-stack skill-sharing platform connecting students, teachers, and tutors for collaborative learning. Enables users to learn, teach, and exchange skills through peer-to-peer interaction.',
      demoLink: 'https://skillswap-9ps2.vercel.app/',
      githubLink: 'https://github.com/DHANYASAKTHIS06',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'JWT'],
      isML: false,
      icon: 'exchange',
    },
    {
      title: 'PERSONAL PORTFOLIO WEBSITE',
      desc: 'Designed and deployed a responsive personal portfolio website showcasing projects, technical skills, certifications, and achievements with a modern user interface.',
      demoLink: 'https://dhanyasakthi.netlify.app/',
      githubLink: 'https://github.com/DHANYASAKTHIS06',
      techStack: ['React.js', 'CSS3', 'Vite', 'Framer Motion', 'Responsive Design'],
      isML: false,
      icon: 'laptop',
    },
    {
      title: 'INTERNSHIP TRACKER APPLICATION',
      desc: 'Developed a full-stack internship management platform that helps users track internship applications, progress, deadlines, and status updates through a centralized dashboard.',
      demoLink: 'https://smartinterntracker.netlify.app/',
      githubLink: 'https://github.com/DHANYASAKTHIS06',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js', 'CSS Flexbox'],
      isML: false,
      icon: 'briefcase',
    },
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'calculator':
        return <FaCalculator className="project-icon-svg" />;
      case 'camera':
        return <FaCamera className="project-icon-svg" />;
      case 'exchange':
        return <FaExchangeAlt className="project-icon-svg" />;
      case 'laptop':
        return <FaLaptopCode className="project-icon-svg" />;
      case 'briefcase':
        return <FaBriefcase className="project-icon-svg" />;
      case 'handshake':
        return <FaHandshake className="project-icon-svg" />;
      default:
        return <FaLaptopCode className="project-icon-svg" />;
    }
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">Featured Projects</h1>
      <p className="projects-subtitle">
        A curated selection of my work, ranging from AI/Machine Learning systems to full-stack applications.
      </p>

      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.title}
            onClick={(e) => handleLinkClick(e, p.demoLink)}
            className="project-card"
          >
            {/* Top Row: Icon and ML Badge */}
            <div className="project-card-header">
              <div className="project-icon-wrapper">
                {getIcon(p.icon)}
              </div>
              {p.isML && (
                <div className="ml-badge">
                  <FaBrain className="ml-badge-icon" />
                  <span>AI / ML Project</span>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="project-card-body">
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-card-desc">{p.desc}</p>
            </div>

            {/* Tech Stack Badges */}
            <div className="project-tech-container">
              {p.techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="project-actions">
              <button
                className="project-btn demo-btn"
                onClick={(e) => handleLinkClick(e, p.demoLink)}
              >
                <FaExternalLinkAlt className="btn-icon" />
                Live Demo
              </button>
              <button
                className="project-btn code-btn"
                onClick={(e) => handleLinkClick(e, p.githubLink)}
              >
                <FaGithub className="btn-icon" />
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="projects-down"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ⬆
      </button>
    </section>
  );
}
