import React, { useState } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Blogs from './components/Blogs';
import AcademicProfile from './components/AcademicProfile';
import Responsibilities from './components/Responsibilities';
import Feedback from './components/Feedback';
import CertificateGallery from './components/CertificateGallery';
import Experience from './components/Experience';
import Contact from './components/Contact';
import {
  FaUser,
  FaCode,
  FaGraduationCap,
  FaUsers,
  FaCertificate,
  FaBriefcase,
  FaFileAlt,
  FaBookOpen,
  FaCommentAlt,
  FaEnvelope,
  FaHome,
  FaBars,
  FaTimes,
  FaRoute,
  FaLaptopCode
} from 'react-icons/fa';
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  const navigateToSection = (tab, elementId) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      if (elementId) {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="app-container">
      {/* FLOATING NAV — visible only when NOT on home */}
      {activeTab !== 'home' && (
        <>
          <div className="floating-tabs">
            <div
              className={`float-tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser className="nav-icon" /> Profile
            </div>

            <div
              className={`float-tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <FaCode className="nav-icon" /> Skills
            </div>
            <div
              className={`float-tab ${
                activeTab === 'AcademicProfile' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('AcademicProfile')}
            >
              <FaGraduationCap className="nav-icon" /> Academics
            </div>
            <div
              className={`float-tab ${
                activeTab === 'responsibilities' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('responsibilities')}
            >
              <FaUsers className="nav-icon" /> Responsibilities
            </div>
            <div
              className={`float-tab ${
                activeTab === 'CertificateGallery' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('CertificateGallery')}
            >
              <FaCertificate className="nav-icon" /> Certificates
            </div>
            <div
              className={`float-tab ${
                activeTab === 'experience' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('experience')}
            >
              <FaBriefcase className="nav-icon" /> Experience
            </div>

            <div
              className={`float-tab ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              <FaFileAlt className="nav-icon" /> Resume
            </div>
            <div
              className={`float-tab ${activeTab === 'blogs' ? 'active' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              <FaBookOpen className="nav-icon" /> Blogs
            </div>
            <div
              className={`float-tab ${activeTab === 'feedback' ? 'active' : ''}`}
              onClick={() => setActiveTab('feedback')}
            >
              <FaCommentAlt className="nav-icon" /> Feedback
            </div>
            <div
              className={`float-tab ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <FaEnvelope className="nav-icon" /> Contact
            </div>
          </div>

          {/* MOBILE NAV ACTIONS */}
          <button
            className="mobile-home-btn"
            onClick={() => navigateToSection('profile', 'hero')}
            aria-label="Go to Home"
          >
            <FaHome />
          </button>

          <button
            className={`mobile-nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* MOBILE MENU DRAWER */}
          <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-drawer-header">
              <h3>DASHBOARD</h3>
            </div>
            <div className="mobile-drawer-links">
              <div
                className="mobile-nav-link"
                onClick={() => navigateToSection('profile', 'hero')}
              >
                <FaHome className="nav-icon" /> Home
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => navigateToSection('profile', 'about')}
              >
                <FaUser className="nav-icon" /> About
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => navigateToSection('skills')}
              >
                <FaCode className="nav-icon" /> Skills
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'AcademicProfile' ? 'active' : ''}`}
                onClick={() => navigateToSection('AcademicProfile')}
              >
                <FaGraduationCap className="nav-icon" /> Academics
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'responsibilities' ? 'active' : ''}`}
                onClick={() => navigateToSection('responsibilities')}
              >
                <FaUsers className="nav-icon" /> Responsibilities
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'CertificateGallery' ? 'active' : ''}`}
                onClick={() => navigateToSection('CertificateGallery')}
              >
                <FaCertificate className="nav-icon" /> Certificates
              </div>
              <div
                className="mobile-nav-link"
                onClick={() => navigateToSection('profile', 'journey')}
              >
                <FaRoute className="nav-icon" /> Journey
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => navigateToSection('experience')}
              >
                <FaBriefcase className="nav-icon" /> Experience
              </div>
              <div
                className="mobile-nav-link"
                onClick={() => navigateToSection('profile', 'projects')}
              >
                <FaLaptopCode className="nav-icon" /> Projects
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'resume' ? 'active' : ''}`}
                onClick={() => navigateToSection('resume')}
              >
                <FaFileAlt className="nav-icon" /> Resume
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'blogs' ? 'active' : ''}`}
                onClick={() => navigateToSection('blogs')}
              >
                <FaBookOpen className="nav-icon" /> Blogs
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'feedback' ? 'active' : ''}`}
                onClick={() => navigateToSection('feedback')}
              >
                <FaCommentAlt className="nav-icon" /> Feedback
              </div>
              <div
                className={`mobile-nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => navigateToSection('contact', 'contact')}
              >
                <FaEnvelope className="nav-icon" /> Contact
              </div>
            </div>
          </div>

          {/* OVERLAY */}
          {isMobileMenuOpen && (
            <div
              className="mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </>
      )}

      {/* PAGE CONTENT */}
      <div className={`page-content ${activeTab !== 'home' ? 'nav-active' : ''}`}>
        {activeTab === 'home' && (
          <Home enterSite={() => setActiveTab('profile')} />
        )}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'AcademicProfile' && <AcademicProfile />}
        {activeTab === 'responsibilities' && <Responsibilities />}
        {activeTab === 'CertificateGallery' && <CertificateGallery />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'blogs' && <Blogs />}
        {activeTab === 'feedback' && <Feedback />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
}
