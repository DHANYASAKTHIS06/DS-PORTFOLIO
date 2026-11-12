import React, { useState, useEffect } from 'react';
import nptelEthicalHackingImg from '../assets/certificates/nptel-ethical-hacking.jpg';
import nptelDataScienceImg from '../assets/certificates/nptel-data-science-for-engineers.png';
import badge29582779 from '../assets/badges/29582779.png';
import badge29579391 from '../assets/badges/29579391.png';
import badge29570692 from '../assets/badges/29570692.png';
import badge29569847 from '../assets/badges/29569847.png';
import badge29562070 from '../assets/badges/29562070.png';
import badge29554577 from '../assets/badges/29554577.png';
import badge29543976 from '../assets/badges/29543976.png';
import badge29543861 from '../assets/badges/29543861.png';
import badge29537520 from '../assets/badges/29537520.png';
import badge29530089 from '../assets/badges/29530089.png';

export default function CertificateGallery() {
  // Certificates (images you provided + verify/download links)
  const certificates = [
    {
      id: 'coursera-db',
      title: 'Introduction to Databases — Coursera',
      provider: 'Coursera',
      img: 'https://image2url.com/images/1763957824107-8ae38290-c010-4e3f-9b47-ebbfe10de4e3.jpeg',
      verify:
        'https://www.coursera.org/account/accomplishments/verify/SGC68RPMGDJ1',
    },
    {
      id: 'coursera-ai',
      title: 'AI Python for Beginners — Coursera',
      provider: 'Coursera',
      img: 'https://image2url.com/images/1763957967007-edca90df-ca4f-440b-b8e8-c5f1a3603864.jpeg',
      verify:
        'https://www.coursera.org/account/accomplishments/verify/I9KBV784VEHS',
    },
    {
      id: 'coursera-java',
      title: 'Java Programming for Beginners — Coursera',
      provider: 'Coursera',
      img: 'https://image2url.com/images/1763958024336-df6cfbfe-15b7-4d6d-81e2-4667d220cacc.jpeg',
      verify:
        'https://www.coursera.org/account/accomplishments/verify/5NA3Z8J92PZA',
    },

    /* ---------------------------------------------------------
       ✅ GOOGLE SKILLS BADGES
       --------------------------------------------------------- */
    {
      id: 'google-skills-29582779',
      title: 'Configure Service Accounts and IAM Roles for Google Cloud',
      provider: 'Google Skills',
      img: badge29582779,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29582779',
    },
    {
      id: 'google-skills-29579391',
      title: 'Using the Google Cloud Speech API',
      provider: 'Google Skills',
      img: badge29579391,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29579391',
    },
    {
      id: 'google-skills-29570692',
      title: 'Build a Website on Google Cloud',
      provider: 'Google Skills',
      img: badge29570692,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29570692',
    },
    {
      id: 'google-skills-29569847',
      title: 'Explore Generative AI in Agent Platform',
      provider: 'Google Skills',
      img: badge29569847,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29569847',
    },
    {
      id: 'google-skills-29562070',
      title: 'Analyze Images with the Cloud Vision API',
      provider: 'Google Skills',
      img: badge29562070,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29562070',
    },
    {
      id: 'google-skills-29554577',
      title: 'Store, Process, and Manage Data on Google Cloud - Console',
      provider: 'Google Skills',
      img: badge29554577,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29554577',
    },
    {
      id: 'google-skills-29543976',
      title: 'Create Your First Gemini Enterprise Application',
      provider: 'Google Skills',
      img: badge29543976,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29543976',
    },
    {
      id: 'google-skills-29543861',
      title: 'Develop AI-Powered Prototypes in Google AI Studio',
      provider: 'Google Skills',
      img: badge29543861,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29543861',
    },
    {
      id: 'google-skills-29537520',
      title: 'Implement Speech and Language Solutions with Pre-trained APIs',
      provider: 'Google Skills',
      img: badge29537520,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29537520',
    },
    {
      id: 'google-skills-29530089',
      title: 'The Basics of Google Cloud Compute',
      provider: 'Google Skills',
      img: badge29530089,
      verify:
        'https://www.skills.google/public_profiles/31c74b9a-948b-4db6-a6c7-f45047dd95ce/badges/29530089',
    },
    {
      id: 'hr-sql',
      title: 'SQL (Basic) — HackerRank',
      provider: 'HackerRank',
      img: 'https://image2url.com/images/1763958073106-3690f708-1ce0-4e81-8471-1043633c191b.jpeg',
      verify: 'https://www.hackerrank.com/certificates/47517bbc68e8',
    },
    {
      id: 'cit-sih',
      title: 'Smart India Hackathon Workshop — CIT',
      provider: 'CIT',
      img: 'https://image2url.com/images/1763958158715-cd950f92-7027-4dc9-b51a-3f1356e85782.jpg',
      verify: '',
    },
    {
      id: 'gl-dbms',
      title: 'Database Management System — Great Learning',
      provider: 'GreatLearning',
      img: 'https://image2url.com/images/1763958195501-ac07c52a-b279-483f-be23-2afef06648bc.jpeg',
      verify: 'https://www.mygreatlearning.com/certificate/IWHFBGHH',
    },
    {
      id: 'gl-py',
      title: 'Python Fundamentals for Beginners — Great Learning',
      provider: 'GreatLearning',
      img: 'https://image2url.com/images/1763958260383-17b562d3-ddcd-421d-b309-ebc13197fa91.jpeg',
      verify: 'https://www.mygreatlearning.com/certificate/PAVEOCJA',
    },
    {
      id: 'gl-mpl',
      title: 'Python Matplotlib — Great Learning',
      provider: 'GreatLearning',
      img: 'https://image2url.com/images/1763958299431-0c65a3bb-3d7f-4352-bbe5-bc899782d520.jpeg',
      verify: 'https://www.mygreatlearning.com/certificate/NCWZXWTF',
    },
    {
      id: 'hr-intern',
      title: 'Software Engineer Intern — HackerRank',
      provider: 'HackerRank',
      img: 'https://image2url.com/images/1763958364329-839590ce-2a13-4312-a11d-d27367f37bc7.png',
      verify: 'https://www.hackerrank.com/certificates/532b9e0d5855',
    },
    {
      id: 'nptel-c',
      title: 'Problem Solving Through Programming in C — NPTEL',
      provider: 'NPTEL',
      img: 'https://image2url.com/images/1763958725706-4c79d540-c843-49fb-b937-093a0447df2a.jpeg',
      verify:
        'https://drive.google.com/file/d/1pgUBREqFaOllCfkv0o6LiEqdc9NpfrOJ/view?usp=sharing',
    },
    {
      id: 'nptel-d',
      title: 'Database Management System — NPTEL',
      provider: 'NPTEL',
      img: 'https://image2url.com/images/1763958821848-965b7777-dfa7-4fa9-ba17-f5c4dda2b08b.jpeg',
      verify:
        'https://drive.google.com/file/d/1pgUBREqFaOllCfkv0o6LiEqdc9NpfrOJ/view?usp=sharing',
    },
    {
      id: 'nptel-eh',
      title: 'Ethical Hacking — NPTEL',
      provider: 'NPTEL',
      img: nptelEthicalHackingImg,
      verify:
        'https://drive.google.com/file/d/1AEMPJjPlRp8Db2l5_uyc646IbYVTmqQP/view?usp=drive_link',
    },
    {
      id: 'nptel-ds',
      title: 'Data Science for Engineers — NPTEL',
      provider: 'NPTEL',
      img: nptelDataScienceImg,
      verify:
        'https://drive.google.com/file/d/1NmnMYA6sb1msZTSFT_O7FoK3OuDJOPb9/view?usp=drive_link',
    },

    /* ---------------------------------------------------------
       ✅ NEW CERTIFICATE ADDED (SoloLearn Web Development)
       --------------------------------------------------------- */
    {
      id: 'sololearn-webdev',
      title: 'Web Development — SoloLearn',
      provider: 'SoloLearn',
      img: 'https://image2url.com/images/1763959136312-23d6bed2-b50b-4d66-8106-973bc8a970d0.png',
      verify: 'https://www.sololearn.com/certificates/CC-TMVZOTKX',
    },
  ];

  // filters
  const filters = [
    'all',
    'Coursera',
    'Google Skills',
    'HackerRank',
    'GreatLearning',
    'NPTEL',
    'CIT',
    'SoloLearn',
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setModalOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const openModal = (cert) => {
    setModalCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalCert(null);
  };

  const visible = certificates.filter((c) =>
    activeFilter === 'all' ? true : c.provider === activeFilter
  );

  return (
    <section className="cert-section" aria-labelledby="cert-heading">
      <div className="cert-inner">
        <h2 id="cert-heading" className="cert-heading">
          ✨ Certificate Art Gallery
        </h2>
        <p className="cert-sub">
          Verified certificates and workshop credentials — click any card to
          view.
        </p>

        <div className="filter-row" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {visible.map((c) => (
            <article key={c.id} className="cert-card neon-card">
              <button className="cert-thumb" onClick={() => openModal(c)}>
                <img src={c.img} alt={c.title} loading="lazy" />
                <div className="thumb-overlay">
                  <span className="overlay-text">View</span>
                </div>
              </button>

              <div className="cert-meta">
                <h3 className="cert-title">{c.title}</h3>
                <div className="cert-row">
                  <span className="cert-provider">{c.provider}</span>
                  {c.verify && (
                    <a
                      className="verify-link"
                      href={c.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && modalCert && (
        <div className="cert-modal" role="dialog" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-body">
              <img
                src={modalCert.img}
                alt={modalCert.title}
                className="modal-image"
              />

              <div className="modal-info">
                <h3>{modalCert.title}</h3>
                <p className="modal-provider">{modalCert.provider}</p>

                <div className="modal-actions">
                  {modalCert.verify && (
                    <a
                      href={modalCert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-verify"
                    >
                      Open Verify Page
                    </a>
                  )}
                  <a
                    href={modalCert.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-download"
                  >
                    Open Image
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
