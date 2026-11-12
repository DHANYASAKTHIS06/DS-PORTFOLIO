import React from 'react';
import {
  FaCuttlefish,
  FaPython,
  FaDatabase,
  FaJava,
  FaReact,
  FaCloud,
  FaCode,
  FaFileAlt,
  FaCube,
  FaLaptopCode,
  FaNetworkWired,
  FaEye,
  FaFilter
} from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

export default function Skills() {
  const categories = [
    {
      name: 'Programming',
      skills: [
        {
          title: 'C Programming',
          level: 'Beginner → Intermediate',
          desc: 'Built strong logical foundation & learned basics like loops, arrays, conditionals.',
          icon: <FaCuttlefish className="skill-icon" />,
        },
        {
          title: 'Python Programming',
          level: 'Beginner → Intermediate → Advanced',
          desc: 'Worked on file handling, exceptions, OOP, and real applications.',
          icon: <FaPython className="skill-icon" />,
        },
        {
          title: 'Java Programming',
          level: 'Beginner → Intermediate',
          desc: 'Developed OOP skills: classes, inheritance, polymorphism.',
          icon: <FaJava className="skill-icon" />,
        },
      ],
    },
    {
      name: 'Web Development',
      skills: [
        {
          title: 'Web Development (React & JS)',
          level: 'Beginner → Intermediate',
          desc: 'Built full web apps using React, hooks, props, UI events.',
          icon: <FaReact className="skill-icon" />,
        },
        {
          title: 'Full Stack Development',
          level: 'Intermediate',
          desc: 'Developed end-to-end web applications using React, JavaScript, databases, APIs, authentication, and deployment tools.',
          icon: <FaLaptopCode className="skill-icon" />,
        },
      ],
    },
    {
      name: 'Database',
      skills: [
        {
          title: 'Database Management (DBMS)',
          level: 'Beginner → Intermediate',
          desc: 'Learned SQL, ER models, and applied DBMS in project systems.',
          icon: <FaDatabase className="skill-icon" />,
        },
        {
          title: 'Firebase & Cloud',
          level: 'Beginner → Intermediate',
          desc: 'Built CRUD apps, authentication, real‑time database features.',
          icon: <FaCloud className="skill-icon" />,
        },
      ],
    },
    {
      name: 'Machine Learning',
      skills: [
        {
          title: 'Machine Learning',
          level: 'Beginner → Intermediate',
          desc: 'Worked on data preprocessing, feature engineering, model training, evaluation, and real-world machine learning applications.',
          icon: <GiBrain className="skill-icon" />,
          isMLHighlight: true,
        },
        {
          title: 'Deep Learning',
          level: 'Beginner → Intermediate',
          desc: 'Implemented neural network models and explored deep learning concepts for image classification and intelligent systems.',
          icon: <FaNetworkWired className="skill-icon" />,
          isMLHighlight: true,
        },
        {
          title: 'Convolutional Neural Networks (CNN)',
          level: 'Intermediate',
          desc: 'Built CNN-based image classification systems including mask detection and computer vision applications.',
          icon: <FaEye className="skill-icon" />,
          isMLHighlight: true,
        },
        {
          title: 'Data Preprocessing',
          level: 'Intermediate',
          desc: 'Performed data cleaning, transformation, feature extraction, and dataset preparation for machine learning workflows.',
          icon: <FaFilter className="skill-icon" />,
        },
      ],
    },
    {
      name: 'Software Engineering',
      skills: [
        {
          title: 'Data Structures & Algorithms',
          level: 'Beginner → Intermediate',
          desc: 'Worked on arrays, linked lists, stacks, queues, recursion.',
          icon: <FaCode className="skill-icon" />,
        },
        {
          title: 'Object-Oriented Programming (OOP)',
          level: 'Intermediate',
          desc: 'Applied OOP principles including encapsulation, inheritance, polymorphism, and abstraction in Java and Python projects.',
          icon: <FaCube className="skill-icon" />,
        },
        {
          title: 'Computational Thinking',
          level: 'Beginner → Intermediate',
          desc: 'Improved logic-building for algorithms in Python & C.',
          icon: <GiBrain className="skill-icon" />,
        },
        {
          title: 'Application Development',
          level: 'Beginner → Intermediate → Advanced',
          desc: 'Developed multiple real‑world logic-based applications.',
          icon: <FaCode className="skill-icon" />,
        },
        {
          title: 'Technical Documentation',
          level: 'Beginner → Intermediate',
          desc: 'Created clean technical reports & project documentation.',
          icon: <FaFileAlt className="skill-icon" />,
        },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">Technical Skills</h1>
      <p className="skills-subtitle">
        A breakdown of my technical capabilities and growth across programming, web design, databases, AI/ML, and software engineering.
      </p>

      {categories.map((cat, catIdx) => (
        <div key={catIdx} className="skills-category-group">
          <h2 className="skills-category-title">{cat.name}</h2>
          <div className="skills-grid">
            {cat.skills.map((skill, index) => (
              <div
                className={`skill-card ${skill.isMLHighlight ? 'ml-skill-highlight' : ''}`}
                key={index}
              >
                <div className="skill-icon-container">
                  {skill.icon}
                </div>
                <h3>{skill.title}</h3>
                <p className="skill-level">{skill.level}</p>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
