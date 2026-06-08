"use client";
import { Wave } from "@/components/ui/wave";

const SKILLS = [
  { cat: "Languages", color: "#4a90d9", items: ["Python","JavaScript","Dart","C++","SQL", "C"] },
  { cat: "Web & Mobile", color: "#5bb4a0", items: ["React.js","Node.js","Express.js","Flutter","Next.js","REST APIs"] },
  { cat: "AI / ML", color: "#9b7de8", items: ["LLM Fine-Tuning","Hugging Face","OpenAI / Gemini","OpenCV","Whisper","mBERT / mBART"] },
  { cat: "Tools", color: "#e8874a", items: ["Git / GitHub","MongoDB","SQL Server","Docker","Agile","System Design"] },
];

export default function Skills() {
  return (
    <>
      <Wave topColor="#e8f4e8" bottomColor="#f0eef8" />
      <section id="skills" style={{ background: "linear-gradient(180deg,#f0eef8,#e8e4f4)", padding: "4rem 2rem 2rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#3a2a5a", marginBottom: "2.5rem", textAlign: "center" }}>
            Things I work with 🛠️
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "1.5rem" }}>
            {SKILLS.map((group) => (
              <div key={group.cat} style={{
                background: "rgba(255,255,255,0.75)", borderRadius: 20,
                border: `2px solid ${group.color}30`,
                padding: "1.75rem",
                boxShadow: `0 6px 24px ${group.color}18`,
              }}>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "1rem", color: group.color, marginBottom: "1rem" }}>
                  {group.cat}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.items.map(item => (
                    <span key={item} style={{
                      fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.78rem",
                      background: `${group.color}15`, color: group.color,
                      border: `1.5px solid ${group.color}35`,
                      borderRadius: 99, padding: "4px 12px",
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}