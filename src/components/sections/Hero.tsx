"use client"
import { useState, useEffect } from "react";
import { Annotation } from "@/components/ui/annotation";
import { Cloud } from "@/components/ui/cloud";

const TRAITS = [
  { label: "annoyingly\noptimistic", x: "72%", y: "18%", rotate: 6 },
  { label: "2am\ndebugger", x: "12%", y: "22%", rotate: -8 },
  { label: "AI/ML\njunkie", x: "78%", y: "62%", rotate: 4 },
  { label: "ships\nreal stuff", x: "8%", y: "65%", rotate: -5 },
  { label: "never\nscared", x: "50%", y: "82%", rotate: -3 },
];
export function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <section className="hero-section">
      {/* Soft background circles */}
      <div className="hero-circle hero-circle-left" />
      <div className="hero-circle hero-circle-right" />

      {/* Annotations container */}
      <div style={{ position: "absolute", inset: 0 }}>
        {TRAITS.map((t, i) => (
          <Annotation key={i} text={t.label} x={t.x} y={t.y} rotate={t.rotate} />
        ))}
      </div>

      {/* Center content */}
      <div className="hero-content" style={{
        opacity: show ? 1 : 0, transform: show ? "none" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        {/* Profile circle */}
        <div className="hero-profile">
          👩‍💻
          {/* Floating nav pills */}
          <div className="hero-pill hero-pill-left">
            <a href="#skills" className="hero-pill-link">{"</>"} My skills</a>
          </div>
          <div className="hero-pill hero-pill-right">
            <a href="#contact" className="hero-pill-link">Say hi ✉</a>
          </div>
        </div>

        {/* Cloud name */}
        <Cloud size={260}>Muskan Rehan</Cloud>

        {/* Tagline */}
        <p className="hero-tagline">
          Full-Stack · AI Automation · Research-Driven Solutions
        </p>

        {/* Status badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to internships & collaborations
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(0.8)} }
        @keyframes floatUp { 0%{opacity:0;transform:translateY(30px)} 100%{opacity:1;transform:none} }
      `}</style>
    </section>
  );
}