import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="bg-overlay"></div>

      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-card">
        <div className="contact-item slide-up">
          <h3>📞 Phone</h3>
          <p>9025021483</p>
        </div>

        <div className="contact-item slide-up delay-1">
          <h3>📧 Email</h3>
          <p>
            <a href="mailto:dhanyasakthis06@gmail.com">
              dhanyasakthis06@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-item slide-up delay-2">
          <h3>🔗 LinkedIn</h3>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="linkedin-logo"
            />
            Visit Profile
          </a>
        </div>
      </div>

      <div className="floating-ring"></div>
      <div className="floating-ring2"></div>
    </section>
  );
}
