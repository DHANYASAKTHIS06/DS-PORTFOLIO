import React, { useState, useEffect } from 'react';

export default function Home({ enterSite }) {
  const logoUrl =
    'https://image2url.com/images/1763650143366-5481bfc9-eee1-4778-b251-d3529b7cb717.png';

  const typingTexts = [
    'Dhanyasakthi S',
    'Web Development Intern',
    'React Developer',
    'Problem Solver',
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  // Typing effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < typingTexts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            typingTexts[textIndex].slice(0, displayedText.length + 1)
          );
        }, 100);
      } else timeout = setTimeout(() => setTyping(false), 1000);
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setTyping(true);
        setTextIndex((p) => (p + 1) % typingTexts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing]);

  return (
    <div className="home-container">
      <div className="neon-box">
        {/* Neon smoke & trails container */}
        <div className="smoke"></div>
        <div className="trails"></div>

        <img src={logoUrl} alt="Logo" className="home-logo" />

        <div className="typing-text">{displayedText}</div>

        <h1 className="home-title">Welcome to My Portfolio</h1>

        <button className="enter-btn" onClick={enterSite}>
          Enter Portfolio
        </button>
      </div>
    </div>
  );
}
