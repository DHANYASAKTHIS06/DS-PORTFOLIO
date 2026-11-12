import React from "react";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <h1>About Me</h1>

      <div className="card center-all">
        <p>A passionate B.Tech Information Technology student and aspiring Software Engineer with experience in Full Stack Web Development and Machine Learning. Skilled in building innovative applications, solving real-world problems, and developing projects such as Calci Rescue AI App, Mask AI, SkillSwap, and Internship Tracker.</p>
        </div>

      <button
        className="down-arrow"
        onClick={() =>
          document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        ⌄
      </button>
    </section>
  );
}
