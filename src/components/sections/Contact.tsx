"use client"
import { Wave } from "@/components/ui/wave";
export function Contact() {
  return (
    <>
      <Wave topColor="#ede8e0" bottomColor="#e0f0e8" />
      <section id="contact" style={{ background: "linear-gradient(180deg,#e0f0e8,#d4eee0)", padding: "4rem 2rem 5rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#1a3a2a", marginBottom: "0.75rem" }}>
            Let's build something worth building 🌿
          </h2>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: "1rem", color: "#4a6a5a", marginBottom: "2.5rem", lineHeight: 1.75 }}>
            Open to internships, collaborations, freelance projects, and anything that pushes me somewhere new.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {[
              { label: "✉ muskanrehan865@gmail.com", href: "mailto:muskanrehan865@gmail.com", color: "#4a90d9" },
              { label: "💼 LinkedIn", href: "https://linkedin.com/in/muskan-rehan-159367261", color: "#2c7a5a" },
              { label: "📞 +92 330 9992005", href: "tel:+923309992005", color: "#9b7de8" },
            ].map(({ label, href, color }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
                fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.9rem",
                color, background: `${color}15`, border: `2px solid ${color}35`,
                borderRadius: 99, padding: "10px 22px", textDecoration: "none",
                boxShadow: `0 4px 16px ${color}18`, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}15`; e.currentTarget.style.color = color; e.currentTarget.style.transform = "none"; }}
              >{label}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}