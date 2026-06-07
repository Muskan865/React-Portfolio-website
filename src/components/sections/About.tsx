
"use client"
import { Wave } from "@/components/ui/wave";

export default function About() {
  return (
    <>
      <Wave topColor="#e8f4fd" bottomColor="#f0f8f0" />
      <section id="about" style={{ background: "linear-gradient(180deg,#f0f8f0,#e8f4e8)", padding: "4rem 2rem 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#2c4a2a", marginBottom: "1.5rem" }}>
            A bit about me 🌱
          </h2>
          <div style={{
            background: "rgba(255,255,255,0.75)", borderRadius: 24,
            border: "2px solid rgba(150,210,160,0.4)", padding: "2.5rem",
            boxShadow: "0 8px 40px rgba(80,160,100,0.1)",
          }}>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#3a5a3a", lineHeight: 1.85, marginBottom: "1rem" }}>
              I'm a Computer Science student at <strong>Habib University</strong> (CGPA 3.5, graduating 2027) with hands-on experience in full-stack web and mobile development, AI/ML research, and client-facing software delivery.
            </p>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "#3a5a3a", lineHeight: 1.85, marginBottom: "1rem" }}>
              And yes, I've Googled things at 2am trying to get a model to stop crashing. I genuinely enjoy tackling problems I've never faced before, and most of what I know came from just jumping in. I'm not the type to sit on the sidelines waiting for the perfect moment. If it's new, challenging, and worth building — <strong style={{ color: "#2c7a3a" }}>I'm in.</strong>
            </p>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "1rem", color: "#5a7a5a", lineHeight: 1.75, fontStyle: "italic" }}>
              Currently open to internships, collaborations, and projects that push me somewhere new.
            </p>
          </div>

          {/* Stat bubbles */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {[["3.5","CGPA"],["5+","Projects"],["2","Research Roles"],["Karachi","Pakistan"]].map(([n, l]) => (
              <div key={l} style={{
                background: "rgba(255,255,255,0.8)", border: "2px solid rgba(150,210,160,0.5)",
                borderRadius: 20, padding: "1rem 1.5rem", textAlign: "center", minWidth: 100,
                boxShadow: "0 4px 16px rgba(80,160,100,0.12)",
              }}>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: "1.6rem", color: "#2c7a4a" }}>{n}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#5a8a6a", textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
