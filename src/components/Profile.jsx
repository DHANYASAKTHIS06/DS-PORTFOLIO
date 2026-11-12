import React from "react";
import Hero from "./Hero";
import About from "./About";
import Journey from "./Journey";
import Projects from "./Projects";

export default function Profile() {
  return (
    <div className="profile-container">
      <Hero />
      <About />
      <Journey />
      <Projects />
    </div>
  );
}
