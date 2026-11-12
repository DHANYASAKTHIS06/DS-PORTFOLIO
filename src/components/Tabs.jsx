import React from 'react';

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="floating-tabs">
      <button
        className={activeTab === 'profile' ? 'active' : ''}
        onClick={() => setActiveTab('profile')}
      >
        <span className="tab-icon">👤</span>
        Profile
      </button>

      <button
        className={activeTab === 'skills' ? 'active' : ''}
        onClick={() => setActiveTab('skills')}
      >
        <span className="tab-icon">⚡</span>
        Skills
      </button>
      <button
        className={activeTab === 'AcademicProfile' ? 'active' : ''}
        onClick={() => setActiveTab('AcademicProfile')}
      >
        <span className="tab-icon">⚡</span>
        Academics
      </button>
      <button
        className={activeTab === 'CertificateGallery' ? 'active' : ''}
        onClick={() => setActiveTab('CertificateGallery')}
      >
        <span className="tab-icon">⚡</span>
        Certificates
      </button>
      <button
        className={activeTab === 'experience' ? 'active' : ''}
        onClick={() => setActiveTab('experience')}
      >
        <span className="tab-icon">⚡</span>
        Experience
      </button>
      <button
        className={activeTab === 'resume' ? 'active' : ''}
        onClick={() => setActiveTab('resume')}
      >
        <span className="tab-icon">⚡</span>
        Resume
      </button>
      <button
        className={activeTab === 'blogs' ? 'active' : ''}
        onClick={() => setActiveTab('blogs')}
      >
        <span className="tab-icon">⚡</span>
        Blogs
      </button>
      <button
        className={activeTab === 'feedback' ? 'active' : ''}
        onClick={() => setActiveTab('feedback')}
      >
        <span className="tab-icon">⚡</span>
        Feedback
      </button>
      <button
        className={activeTab === 'contact' ? 'active' : ''}
        onClick={() => setActiveTab('contact')}
      >
        <span className="tab-icon">⚡</span>
        Contact
      </button>
    </div>
  );
}
