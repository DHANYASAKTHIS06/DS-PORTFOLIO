import React from 'react';

export default function Resume() {
  const resumeUrl =
    'https://www.image2url.com/r2/default/documents/1780736723298-fcf9ec5f-2cc3-4698-9a40-47baea9190ce.pdf';

  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      <div className="resume-box">
        <iframe
          src={resumeUrl}
          title="Resume"
          className="resume-frame"
        ></iframe>
      </div>

      <a href={resumeUrl} download className="resume-download">
        ⬇ Download Resume
      </a>
    </div>
  );
}
