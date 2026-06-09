"use client";
import { useState, useEffect, useRef } from "react";
import { Wave } from "@/components/ui/wave";

const PROJECTS = [
  {
    num: "01",
    title: "Helpr",
    subtitle: "Service Marketplace App",
    period: "2026",
    desc: "A full-stack marketplace app inspired from Indrive that connects people with local service workers — plumbers, electricians, cleaners, and more. Requesters post jobs, workers place bids, and the app handles everything from job tracking and in-app chat to ratings and secure authentication. It has been deployed as a functional APK.",
    url: "https://github.com/Muskan865/helpr-mobile-app",
    tags: ["Flutter","Node.js","SQL Server","REST API"],
    color: "#4a90d9",
    emoji: "📱",
  },
  {
    num: "02",
    title: "Classroom Manager",
    subtitle: "Bridge School — IN progress",
    period: "2026",
    desc: "A full-stack classroom observation and follow-up management system being developed for The Bridge School to digitize supervision workflows. Supervisors can record classroom observations, review previous notes before conducting new visits, and track follow-up actions through a centralized platform, ensuring important feedback is organized, accessible, and never lost in group communication.",
    tags: ["Web App","Full Stack","Production"],
    color: "#e85a8a",
    emoji: "🏫",
  },
  {
    num: "03",
    title: "AI Interview System",
    subtitle: "Automation Pipeline",
    period: "2025",
    desc: "An end-to-end AI HR Interview System built in Google Colab that fine-tunes LLaMA 3 (8B Instruct) using LoRA to generate structured interview questions from job descriptions, and evaluates candidate audio responses through an automated pipeline. The system integrates OpenAI Whisper for transcription and Google Gemini for scoring answers with structured feedback, including relevance, depth, and reasoning. It supports full workflow automation — from job description input to question generation, audio-based candidate responses, and AI-driven evaluation with results saved in structured JSON format on Google Drive. The project demonstrates large-scale model fine-tuning, efficient inference, and multi-model integration for real-world HR interview automation.",
    url: "https://github.com/Muskan865/AI_project",
    tags: ["LLaMA 3","Gemini API","Whisper","LoRA","Python"],
    color: "#9b7de8",
    emoji: "🤖",
  },
  {
    num: "04",
    title: "Defect Detection",
    subtitle: "Research Pipeline",
    period: "2025",
    desc: "Anomaly detection for Dawlance manufacturing using unsupervised learning and image preprocessing. Developed a defect detection system that preprocesses images with OpenCV techniques (grayscale conversion, histogram equalization, and edge detection) to enhance features. Leveraged autoencoders to learn normal patterns and identify anomalies in product images, achieving high accuracy in detecting manufacturing defects without labeled data.",
    tags: ["Autoencoders","OpenCV","Python","Unsupervised ML", "Patchcore", "Padim"],
    color: "#5bb4a0",
    emoji: "🔬",
  },
  {
    num: "05",
    title: "Urdu Headlines",
    subtitle: "NLP Research",
    period: "2024",
    desc: "Trained and benchmarked five multilingual models for Urdu news headline generation: mBERT, MT5, mBART, GPT-2, ByT5. Evaluated performance using ROUGE and BLEU metrics, and conducted qualitative analysis on linguistic capabilities. The research provides insights into the strengths and weaknesses of each model in handling Urdu text generation, contributing to the development of more effective NLP solutions for low-resource languages. This work is also in the process of being published.",
    url: "https://github.com/Muskan865/Urdu-Headline-Generator",
    tags: ["mBERT","MT5","mBART", "ByT5", "GPT-2","NLP","Research"],
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
  url?: string;
  tags: string[];
  color: string;
  emoji: string;
};
function ProjectCard({ proj }: { proj: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="project-card" style={{
      background: "rgba(255,255,255,0.8)", borderRadius: 24,
      border: `2px solid ${proj.color}28`,
      boxShadow: `0 6px 32px ${proj.color}14`,
      overflow: "hidden",
    }}>
      {/* Header */}
      <div className="project-card-header">
        <div className="project-card-top">
          <div className="project-card-title-block">
            <span className="project-card-emoji" style={{ fontSize: "2rem" }}>{proj.emoji}</span>
            <div>
              <div className="project-card-meta" style={{ color: proj.color }}>{proj.num} · {proj.period}</div>
              <div className="project-card-title">{proj.title}</div>
              <div className="project-card-subtitle">{proj.subtitle}</div>
            </div>
          </div>
        </div>
        <div className="project-tags">
          {proj.tags.map(t => (
            <span key={t} className="project-tag" style={{ background: `${proj.color}15`, color: proj.color, border: `1.5px solid ${proj.color}30` }}>{t}</span>
          ))}
        </div>
        {/* More info toggle */}
        <button className="project-toggle" onClick={() => setOpen(!open)} style={{
          background: `${proj.color}18`, color: proj.color,
          border: `1.5px solid ${proj.color}35`,
        }}>
          More info {open ? "▲" : "▼"}
        </button>
      </div>
      {/* Expanded */}
      {open && (
        <div className="project-expanded" style={{
          borderTop: `1.5px solid ${proj.color}20`, padding: "1.25rem 2rem 1.5rem",
          background: `${proj.color}06`,
          animation: "floatUp 0.3s ease",
        }}>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "0.92rem", color: "#4a4a6a", lineHeight: 1.75 }}>
            {proj.desc}
          </p>
          {proj.url && (
            <a href={proj.url} target="_blank" rel="noreferrer" style={{
              display: "inline-block",
              marginTop: "0.75rem",
              color: proj.color,
              fontWeight: 700,
              textDecoration: "none",
            }}>
              View the project on GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <>
      <Wave topColor="#e8e4f4" bottomColor="#e8f4fd" />
      <section id="projects" className="projects-section">
        <div className="section-container projects-container">
          <h2 className="section-heading" style={{ color: "#2e3e7e" }}>
            Things I've built 🚀
          </h2>
          <div className="projects-list">
            {PROJECTS.map((proj, i) => <ProjectCard key={i} proj={proj} />)}
          </div>
        </div>
      </section>
    </>
  );
}