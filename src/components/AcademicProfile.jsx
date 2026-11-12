import React, { useEffect, useState } from 'react';

export default function AcademicProfile() {
  // Target values (UPDATED)
  const TARGET_CGPA = 9.63;
  const TARGET_S1 = 9.17;
  const TARGET_S2 = 9.7;
  const TARGET_S3 = 9.83;
  const TARGET_S4 = 9.83;

  // Animated counters
  const [cgpa, setCgpa] = useState(0);
  const [s1, setS1] = useState(0);
  const [s2, setS2] = useState(0);
  const [s3, setS3] = useState(0);
  const [s4, setS4] = useState(0);

  // Fix: smoother animation, more frames, more precision
  useEffect(() => {
    const duration = 2000;
    const frames = 120; // smoother
    const stepCgpa = TARGET_CGPA / frames;
    const stepS1 = TARGET_S1 / frames;
    const stepS2 = TARGET_S2 / frames;
    const stepS3 = TARGET_S3 / frames;
    const stepS4 = TARGET_S4 / frames;

    let f = 0;
    const id = setInterval(() => {
      f++;

      setCgpa((prev) => {
        const next = prev + stepCgpa;
        return next >= TARGET_CGPA ? TARGET_CGPA : next;
      });

      setS1((prev) => {
        const next = prev + stepS1;
        return next >= TARGET_S1 ? TARGET_S1 : next;
      });

      setS2((prev) => {
        const next = prev + stepS2;
        return next >= TARGET_S2 ? TARGET_S2 : next;
      });

      setS3((prev) => {
        const next = prev + stepS3;
        return next >= TARGET_S3 ? TARGET_S3 : next;
      });

      setS4((prev) => {
        const next = prev + stepS4;
        return next >= TARGET_S4 ? TARGET_S4 : next;
      });

      if (f >= frames) clearInterval(id);
    }, duration / frames);

    return () => clearInterval(id);
  }, []);

  const pct = (val) => Math.round((val / 10) * 100);

  return (
    <section className="ap-wrap" aria-labelledby="ap-heading">
      <div className="ap-particles" aria-hidden />
      <div className="ap-neon-lines" aria-hidden />
      <div className="ap-sparks" aria-hidden />

      <div className="ap-container">
        <header className="ap-header">
          <h1 id="ap-heading" className="ap-title">
            My Academic Journey
          </h1>
          <p className="ap-sub">
            Strong fundamentals in IT with continuous improvements — CGPA{' '}
            <strong>{TARGET_CGPA}</strong>. Below is a visual summary of my
            performance and highlights.
          </p>
        </header>

        <div className="ap-grid">
          {/* LEFT SIDE */}
          <div className="ap-left">
            <div className="card card-tilt neon-border">
              <h3 className="card-title">Current CGPA</h3>
              <div className="card-value cgpa-value">{cgpa.toFixed(2)}</div>
              <div className="card-meta">
                B.Tech – Information Technology <br />
                Coimbatore Institute of Technology
              </div>
            </div>

            <div className="card-row">
              <div className="card small-card neon-border card-tilt">
                <h4>Semester I</h4>
                <div className="small-value">{s1.toFixed(2)}</div>
                <div className="small-meta">Foundation & programming</div>
              </div>

              <div className="card small-card neon-border card-tilt">
                <h4>Semester II</h4>
                <div className="small-value">{s2.toFixed(2)}</div>
                <div className="small-meta">Python, CTPS improvements</div>
              </div>
            </div>

            <div className="card-row">
              <div className="card small-card neon-border card-tilt">
                <h4>Semester III</h4>
                <div className="small-value">{s3.toFixed(2)}</div>
                <div className="small-meta">DSA, Database development</div>
              </div>

              <div className="card small-card neon-border card-tilt">
                <h4>Semester IV</h4>
                <div className="small-value">{s4.toFixed(2)}</div>
                <div className="small-meta">OS, Machine learning basics</div>
              </div>
            </div>

            <div className="card neon-border card-tilt">
              <h3 className="card-title">Subject Highlights</h3>
              <ul className="subject-list">
                <li>C Programming — Strong fundamentals</li>
                <li>Python & CTPS — Excellent logical development</li>
                <li>DBMS — High conceptual clarity</li>
                <li>Java — Hands-on OOP skills</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <aside className="ap-right">
            {/* Line chart */}
            <div className="card neon-border card-tilt graph-card">
              <h4 className="card-title">GPA Trend</h4>

              <svg
                className="ap-sparkline"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gline" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ff66d9" />
                    <stop offset="100%" stopColor="#ff00d4" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <polyline
                  className="sparkline"
                  points={`15,${90 - (s1 / 10) * 70} 105,${90 - (s2 / 10) * 70} 195,${
                    90 - (s3 / 10) * 70
                  } 285,${90 - (s4 / 10) * 70}`}
                  fill="none"
                  stroke="url(#gline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow)"
                />

                <circle className="spark-dot" cx="15" cy={90 - (s1 / 10) * 70} r="4" />
                <circle
                  className="spark-dot"
                  cx="105"
                  cy={90 - (s2 / 10) * 70}
                  r="5"
                />
                <circle
                  className="spark-dot"
                  cx="195"
                  cy={90 - (s3 / 10) * 70}
                  r="5"
                />
                <circle
                  className="spark-dot"
                  cx="285"
                  cy={90 - (s4 / 10) * 70}
                  r="6"
                />
              </svg>

              <div className="graph-legend">
                <span>Sem 1</span>
                <span>Sem 2</span>
                <span>Sem 3</span>
                <span>Sem 4</span>
              </div>
            </div>

            {/* Bar chart */}
            <div className="card neon-border card-tilt bar-chart-card">
              <h4 className="card-title">Bar Comparison</h4>
              <div className="bars">
                <div className="bar-item">
                  <div className="bar-label">Sem1</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${pct(s1)}%` }}>
                      <span>{s1.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bar-item">
                  <div className="bar-label">Sem2</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${pct(s2)}%` }}>
                      <span>{s2.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bar-item">
                  <div className="bar-label">Sem3</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${pct(s3)}%` }}>
                      <span>{s3.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bar-item">
                  <div className="bar-label">Sem4</div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${pct(s4)}%` }}>
                      <span>{s4.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bar-item">
                  <div className="bar-label">CGPA</div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${pct(cgpa)}%` }}
                    >
                      <span>{cgpa.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Circles */}
            <div className="card neon-border card-tilt circles-card">
              <h4 className="card-title">Progress Circles</h4>
              <div className="circles">
                <div className="circle-item">
                  <div
                    className="progress-ring"
                    style={{ ['--p']: `${pct(cgpa)}%` }}
                  >
                    <div className="ring-center">{cgpa.toFixed(2)}</div>
                  </div>
                  <div className="ring-label">Overall</div>
                </div>

                <div className="circle-item">
                  <div
                    className="progress-ring"
                    style={{ ['--p']: `${pct(s1)}%` }}
                  >
                    <div className="ring-center">{s1.toFixed(2)}</div>
                  </div>
                  <div className="ring-label">Sem 1</div>
                </div>

                <div className="circle-item">
                  <div
                    className="progress-ring"
                    style={{ ['--p']: `${pct(s2)}%` }}
                  >
                    <div className="ring-center">{s2.toFixed(2)}</div>
                  </div>
                  <div className="ring-label">Sem 2</div>
                </div>

                <div className="circle-item">
                  <div
                    className="progress-ring"
                    style={{ ['--p']: `${pct(s3)}%` }}
                  >
                    <div className="ring-center">{s3.toFixed(2)}</div>
                  </div>
                  <div className="ring-label">Sem 3</div>
                </div>

                <div className="circle-item">
                  <div
                    className="progress-ring"
                    style={{ ['--p']: `${pct(s4)}%` }}
                  >
                    <div className="ring-center">{s4.toFixed(2)}</div>
                  </div>
                  <div className="ring-label">Sem 4</div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div className="card neon-border card-tilt details-card">
              <h4 className="card-title">Strengths</h4>
              <ul className="strengths">
                <li>Consistent performance & upward trend</li>
                <li>Analytical & logical thinking</li>
                <li>Hands‑on project experience</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
