import { Wave } from "@/components/ui/wave";

export default function Education() {
  return (
    <>
      <Wave topColor="#daeefa" bottomColor="#f4f0e8" />
      <section id="education" className="education-section">
        <div className="section-container education-container">
          <h2 className="section-heading" style={{ color: "#dc903ef8" }}>
            Where I study 🎓
          </h2>
          <div className="education-grid">
            {[
              { degree: "B.S. Computer Science", school: "Habib University", period: "Aug 2023 – 2027", detail: "Data Structures · Databases · Software Engineering · Machine Learning", cgpa: "3.5", color: "#4a90d9", emoji: "🏛️" },
              { degree: "Pre-Engineering", school: "BAMM PECHS Govt. College", period: "Aug 2021 – Aug 2023", detail: "Mathematics · Physics · Analytical Thinking", color: "#5bb4a0", emoji: "📚" },
            ].map((edu, i) => (
              <div key={i} className="education-card" style={{ border: `2px solid ${edu.color}28`, boxShadow: `0 6px 24px ${edu.color}14` }}>
                <div className="education-emoji">{edu.emoji}</div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-school" style={{ color: edu.color }}>{edu.school}</div>
                <div className="education-period">{edu.period}</div>
                <div className="education-detail">{edu.detail}</div>
                {edu.cgpa && (
                  <div className="education-cgpa" style={{ color: edu.color, background: `${edu.color}14`, border: `1.5px solid ${edu.color}30` }}>
                    ⭐ CGPA {edu.cgpa}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}