// pages/ProfilePage.jsx
import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import Projects from '../components/Projects';

export default function ProfilePage() {
  return (
    <div className="profile-page">
      <Hero />
      <About />
      <Journey />
      <Projects />
    </div>
  );
}
