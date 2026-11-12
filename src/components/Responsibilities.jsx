import React from 'react';
import {
  FaUserTie,
  FaBrain,
  FaPalette,
  FaCalendarAlt,
} from 'react-icons/fa';

export default function Responsibilities() {
  const cards = [
    {
      id: 'student-union-secretary',
      role: 'Student Union Secretary',
      organization: 'Coimbatore Institute of Technology',
      duration: 'July 1, 2026 – Present',
      status: 'Active Role',
      statusType: 'active',
      icon: <FaUserTie />,
      description:
        'Serving as the Student Union Secretary at Coimbatore Institute of Technology. Representing students and contributing to student welfare and campus initiatives. Coordinating with student representatives and faculty to facilitate effective communication. Supporting student engagement and institutional activities through responsible leadership.',
    },
    {
      id: 'quiz-club-director',
      role: 'Executive Director – Quiz Club',
      organization: 'Coimbatore Institute of Technology',
      duration: 'May 2025 – Present',
      status: 'Active Role',
      statusType: 'active',
      icon: <FaBrain />,
      description:
        'Serving as the Executive Director of the Quiz Club at Coimbatore Institute of Technology. Contributing to the planning and coordination of quiz-related activities. Encouraging knowledge-sharing, intellectual curiosity, and active student participation. Supporting initiatives that promote a collaborative quizzing culture on campus.',
    },
    {
      id: 'gdc-design-lead',
      role: 'Design Team Lead',
      organization: 'Google Developers Club, Coimbatore Institute of Technology',
      duration: 'January 2026 – November 2026',
      status: '11 Months Journey',
      statusType: 'journey',
      icon: <FaPalette />,
      description:
        "Started as a member of the Design & UX Team, contributing to creative and visual design activities. Promoted to Design Team Lead in June 2026, taking responsibility for the club's design initiatives. Designed numerous promotional posters and event creatives throughout the 11-month journey. Contributed to maintaining visual consistency and strengthening the club's creative identity.",
      timeline: [
        { type: 'date', text: 'January 2026' },
        { type: 'arrow' },
        { type: 'role', text: 'Design & UX Team Member' },
        { type: 'arrow' },
        { type: 'date', text: 'June 2026', tag: 'Promotion' },
        { type: 'arrow' },
        { type: 'role', text: 'Design Team Lead', isLead: true },
        { type: 'arrow' },
        { type: 'date', text: 'November 2026' },
      ],
    },
  ];

  return (
    <section className="resp-section" aria-labelledby="resp-heading">
      <div className="resp-inner">
        <h2 id="resp-heading" className="resp-heading">
          Leadership & Responsibilities
        </h2>
        <p className="resp-sub">
          Leadership roles, creative contributions, and organizational
          responsibilities that reflect my commitment to student communities and
          campus engagement.
        </p>

        <div className="resp-grid">
          {cards.map((card) => (
            <article key={card.id} className="resp-card">
              <div className="resp-card-header">
                <div className="resp-icon-box">{card.icon}</div>
                <div
                  className={`resp-status-badge ${
                    card.statusType === 'active' ? 'active-badge' : 'journey-badge'
                  }`}
                >
                  {card.statusType === 'active' && <span className="status-dot" />}
                  {card.status}
                </div>
              </div>

              <h3 className="resp-role-title">{card.role}</h3>
              <p className="resp-org-name">{card.organization}</p>

              <div className="resp-duration">
                <FaCalendarAlt className="resp-duration-icon" />
                <span>{card.duration}</span>
              </div>

              <p className="resp-desc">{card.description}</p>

              {card.timeline && (
                <div className="resp-timeline-wrapper">
                  <div className="resp-timeline-header">Role Progression</div>
                  <div className="resp-timeline-container">
                    {card.timeline.map((step, idx) => {
                      if (step.type === 'arrow') {
                        return (
                          <div key={idx} className="timeline-step-arrow">
                            ↓
                          </div>
                        );
                      }
                      if (step.type === 'date') {
                        return (
                          <div
                            key={idx}
                            className={`timeline-step-date ${
                              step.tag ? 'highlight-date' : ''
                            }`}
                          >
                            <span>{step.text}</span>
                            {step.tag && (
                              <span className="promo-badge">{step.tag}</span>
                            )}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={idx}
                          className={`timeline-step-role ${
                            step.isLead ? 'lead-role' : ''
                          }`}
                        >
                          {step.text}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
