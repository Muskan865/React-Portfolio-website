"use client";
import { useState, useEffect, useRef } from "react";
import { Wave } from "@/components/ui/wave";

const PROJECTS = [
  {
    num: "01",
    title: "Helpr",
    subtitle: "Service Marketplace App",
    period: "2026",
    desc: "Full-stack mobile service marketplace with a real-time bidding system, deployed as a functional APK. Built frontend and backend end-to-end.",
    tags: ["Flutter","Node.js","SQL Server","REST API"],
    color: "#4a90d9",
    emoji: "📱",
  },
  {
    num: "02",
    title: "Classroom Manager",
    subtitle: "Bridge School — IN progress",
    period: "2026",
    desc: "Digitizing classroom supervision and follow-up tracking for an international education client. Active production project.",
    tags: ["Web App","Full Stack","Production"],
    color: "#e85a8a",
    emoji: "🏫",
  },
  {
    num: "03",
    title: "AI Interview System",
    subtitle: "Automation Pipeline",
    period: "2025",
    desc: "End-to-end AI that generates interview questions from job descriptions and produces automated evaluation scorecards using LLaMA 3 + Gemini.",
    tags: ["LLaMA 3","Gemini API","Whisper","LoRA","Python"],
    color: "#9b7de8",
    emoji: "🤖",
  },
  {
    num: "04",
    title: "Defect Detection",
    subtitle: "Research Pipeline",
    period: "2025",
    desc: "Anomaly detection for Dawlance manufacturing using unsupervised learning and image preprocessing — no labeled defect samples required.",
    tags: ["Autoencoders","OpenCV","Python","Unsupervised ML"],
    color: "#5bb4a0",
    emoji: "🔬",
  },
  {
    num: "05",
    title: "Urdu Headlines",
    subtitle: "NLP Research",
    period: "2024",
    desc: "Trained and benchmarked five multilingual models for Urdu news headline generation: mBERT, MT5, mBART, GPT-2, ByT5.",
    tags: ["mBERT","MT5","mBART","NLP","Research"],
    color: "#e8874a",
    emoji: "📰",
  }
  
];
type Project = {
  num: string;
  title: string;
  subtitle: string;
  period: string;
  desc: string;
  tags: string[];
  color: string;
  emoji: string;
};
function ProjectCard({ proj }: { proj: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "rgba(255,255,255,0.8)", borderRadius: 24,
      border: `2px solid ${proj.color}28`,
      boxShadow: `0 6px 32px ${proj.color}14`,
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ padding: "2rem 2rem 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "2rem" }}>{proj.emoji}</span>
            <div>
              <div style={{ fontFamily: "'Caveat',cursive", fontSize: "0.85rem", color: proj.color }}>{proj.num} · {proj.period}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#2a2a4a" }}>{proj.title}</div>
              <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#7a7a9a" }}>{proj.subtitle}</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
          {proj.tags.map(t => (
            <span key={t} style={{
              fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.72rem",
              background: `${proj.color}15`, color: proj.color,
              border: `1.5px solid ${proj.color}30`, borderRadius: 99, padding: "3px 10px",
            }}>{t}</span>
          ))}
        </div>
        {/* More info toggle */}
        <button onClick={() => setOpen(!open)} style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.82rem",
          background: `${proj.color}18`, color: proj.color,
          border: `1.5px solid ${proj.color}35`, borderRadius: 99,
          padding: "6px 16px", cursor: "pointer",
          transition: "all 0.2s",
        }}>
          More info {open ? "▲" : "▼"}
        </button>
      </div>
      {/* Expanded */}
      {open && (
        <div style={{
          borderTop: `1.5px solid ${proj.color}20`, padding: "1.25rem 2rem 1.5rem",
          background: `${proj.color}06`,
          animation: "floatUp 0.3s ease",
        }}>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "0.92rem", color: "#4a4a6a", lineHeight: 1.75 }}>
            {proj.desc}
          </p>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <>
      <Wave topColor="#e8e4f4" bottomColor="#e8f4fd" />
      <section id="projects" style={{ background: "linear-gradient(180deg,#e8f4fd,#daeefa)", padding: "4rem 2rem 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#1a3a5a", marginBottom: "2.5rem", textAlign: "center" }}>
            Things I've built 🚀
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {PROJECTS.map((proj, i) => <ProjectCard key={i} proj={proj} />)}
          </div>
        </div>
      </section>
    </>
  );
}