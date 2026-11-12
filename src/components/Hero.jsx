import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FiChevronDown } from 'react-icons/fi';
import profilePhoto from '../assets/photo.jpg';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-container" id="hero">
      {/* LEFT — INTRO */}
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I'm <span>DHANYASAKTHI S</span>
        </h1>

        <p className="hero-desc">
A passionate B.Tech Information Technology student and aspiring Software Engineer with hands-on experience in Full Stack Web Development and Machine Learning. I enjoy building innovative applications, solving real-world problems, and creating user-friendly digital experiences.
Developed projects such as Calci Rescue AI App, Mask AI, SkillSwap, and Internship Tracker while gaining practical experience through internships. </p>

        <p className="hero-extra">
        </p>

        <div className="hero-buttons">
          <a
            href="https://www.image2url.com/r2/default/documents/1780736723298-fcf9ec5f-2cc3-4698-9a40-47baea9190ce.pdf"
            className="hero-btn resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

          <button
            className="hero-btn projects-btn"
            onClick={() => scrollTo('projects')}
          >
            View Projects
          </button>
        </div>

        <button className="section-down-btn" onClick={() => scrollTo('about')}>
          <FiChevronDown />
        </button>
      </div>

      {/* CENTER — RECTANGULAR IMAGE */}
      <div className="hero-image-box">
        <img
          src={profilePhoto}
          alt="Dhanyasakthi"
          className="hero-image"
        />
      </div>

      {/* RIGHT — SOCIAL MEDIA BOX */}
      <aside className="social-box">
        <h3 className="social-title">Connect With Me</h3>

        <div className="social-icons">
          <a
            className="social-link linkedin"
            href="https://www.linkedin.com/in/dhanyasakthi-s-3ba87a358"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            className="social-link github"
            href="https://github.com/DHANYASAKTHIS06"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            className="social-link leetcode"
            href="https://leetcode.com/u/DHANYASAKTHI/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode />
          </a>

          <a
            className="social-link hackerrank"
            href="https://www.hackerrank.com/profile/DHANYASAKTHI_06"
            target="_blank"
            rel="noreferrer"
          >
            <SiHackerrank />
          </a>
        </div>
      </aside>
    </section>
  );
}
