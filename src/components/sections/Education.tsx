import { Wave } from "@/components/ui/wave";

export default function Education() {
  return (
    <>
      <Wave topColor="#daeefa" bottomColor="#f4f0e8" />
      <section id="education" style={{ background: "linear-gradient(180deg,#f4f0e8,#ede8e0)", padding: "4rem 2rem 2rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#3a2a1a", marginBottom: "2.5rem", textAlign: "center" }}>
            Where I study 🎓
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { degree: "B.S. Computer Science", school: "Habib University", period: "Aug 2023 – 2027", detail: "Data Structures · Databases · Software Engineering · Machine Learning", cgpa: "3.5", color: "#4a90d9", emoji: "🏛️" },
              { degree: "Pre-Engineering", school: "BAMM PECHS Govt. College", period: "Aug 2021 – Aug 2023", detail: "Mathematics · Physics · Analytical Thinking", color: "#5bb4a0", emoji: "📚" },
            ].map((edu, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.8)", borderRadius: 20,
                border: `2px solid ${edu.color}28`, padding: "2rem",
                boxShadow: `0 6px 24px ${edu.color}14`,
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{edu.emoji}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#2a2a4a", marginBottom: 4 }}>{edu.degree}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.9rem", color: edu.color, marginBottom: 4 }}>{edu.school}</div>
                <div style={{ fontFamily: "'Caveat',cursive", fontSize: "0.92rem", color: "#8a8aa0", marginBottom: "0.75rem" }}>{edu.period}</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#6a6a8a", lineHeight: 1.65 }}>{edu.detail}</div>
                {edu.cgpa && (
                  <div style={{ marginTop: "1rem", display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "1rem", color: edu.color, background: `${edu.color}14`, borderRadius: 99, padding: "5px 14px", border: `1.5px solid ${edu.color}30` }}>
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