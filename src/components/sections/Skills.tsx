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
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-heading">
            Things I work with 🛠️
          </h2>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div key={group.cat} className="skill-card" style={{ border: `2px solid ${group.color}30`, boxShadow: `0 6px 24px ${group.color}18` }}>
                <div className="skill-label" style={{ color: group.color }}>
                  {group.cat}
                </div>
                <div className="skill-items">
                  {group.items.map(item => (
                    <span key={item} className="skill-item" style={{ background: `${group.color}15`, color: group.color, border: `1.5px solid ${group.color}35` }}>
                      {item}
                    </span>
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