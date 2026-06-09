
"use client"
import { Wave } from "@/components/ui/wave";

export default function About() {
  return (
    <>
      <Wave topColor="#e8f4fd" bottomColor="#f0f8f0" />
      <section id="about" className="about-section">
        <div className="section-container about-container">
          <h2 className="section-heading about-heading">
            A bit about me 🌱
          </h2>
          <div className="about-card">
            <p className="about-text">
              I'm a Computer Science student at <strong>Habib University</strong> (CGPA 3.5, graduating 2027) with hands-on experience in full-stack web and mobile development, AI/ML research, and client-facing software delivery.
            </p>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#3a5a3a", lineHeight: 1.85, marginBottom: "1rem" }}>
              And yes, I've Googled things at 2am trying to get a model to stop crashing. I genuinely enjoy tackling problems I've never faced before, and most of what I know came from just jumping in. I'm not the type to sit on the sidelines waiting for the perfect moment. If it's new, challenging, and worth building — <strong style={{ color: "#2c7a3a" }}>I'm in.</strong>
            </p>
            <p className="about-text about-text--small">
              Currently open to internships, collaborations, and projects that push me somewhere new.
            </p>
          </div>

          {/* Stat bubbles */}
          <div className="about-stats">
            {[["3.5","CGPA"],["5+","Projects"],["2","Research Roles"],["Karachi","Pakistan"]].map(([n, l]) => (
              <div key={l} className="about-stat">
                <div className="about-stat-value">{n}</div>
                <div className="about-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
