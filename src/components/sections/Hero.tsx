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
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(180deg, #c8e8f8 0%, #daeefa 40%, #e8f4fd 100%)",
      position: "relative", overflow: "hidden", paddingTop: 80,
    }}>
      {/* Soft background circles */}
      <div style={{ position: "absolute", top: "8%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.25)", filter: "blur(40px)" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "5%", width: 250, height: 250, borderRadius: "50%", background: "rgba(184,212,240,0.3)", filter: "blur(30px)" }} />

      {/* Annotations container */}
      <div style={{ position: "absolute", inset: 0 }}>
        {TRAITS.map((t, i) => (
          <Annotation key={i} text={t.label} x={t.x} y={t.y} rotate={t.rotate} />
        ))}
      </div>

      {/* Center content */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem",
        opacity: show ? 1 : 0, transform: show ? "none" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        {/* Profile circle */}
        <div style={{
          width: 180, height: 180, borderRadius: "50%",
          border: "4px solid #4a90d9",
          background: "linear-gradient(135deg, #b8d4f0, #daeefa)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "5rem", boxShadow: "0 8px 32px rgba(74,144,217,0.25)",
          position: "relative",
        }}>
          👩‍💻
          {/* Floating nav pills */}
          <div style={{ position: "absolute", left: -160, top: "50%", transform: "translateY(-50%)" }}>
            <a href="#skills" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.82rem",
              background: "#4a90d9", color: "white",
              borderRadius: 99, padding: "7px 16px", textDecoration: "none",
              boxShadow: "0 4px 16px rgba(74,144,217,0.35)",
            }}>{"</>"} My skills</a>
          </div>
          <div style={{ position: "absolute", right: -140, top: "50%", transform: "translateY(-50%)" }}>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.82rem",
              background: "#4a90d9", color: "white",
              borderRadius: 99, padding: "7px 16px", textDecoration: "none",
              boxShadow: "0 4px 16px rgba(74,144,217,0.35)",
            }}>Say hi ✉</a>
          </div>
        </div>

        {/* Cloud name */}
        <Cloud size={260}>Muskan Rehan</Cloud>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "1rem",
          color: "#4a6a9a", textAlign: "center", maxWidth: 420,
          background: "rgba(255,255,255,0.6)", borderRadius: 99,
          padding: "8px 24px", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}>
          Full-Stack · AI Automation · Research-Driven Solutions
        </p>

        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.8rem",
          color: "#2c7a3a", background: "rgba(180,240,200,0.6)",
          border: "1.5px solid #80d0a0", borderRadius: 99, padding: "5px 16px",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#40b060", animation: "pulse 2s infinite" }} />
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