"use client"
import { Wave } from "@/components/ui/wave";
export function Contact() {
  return (
    <>
      <Wave topColor="#ede8e0" bottomColor="#e0f0e8" />
      <section id="contact" className="contact-section">
        <div className="section-container contact-container">
          <h2 className="section-heading">
            Let's build something worth building 🌿
          </h2>
          <p className="contact-copy">
            Open to internships, collaborations, freelance projects, and anything that pushes me somewhere new.
          </p>
          <div className="contact-actions">
            {[
              { label: "✉ muskanrehan865@gmail.com", href: "mailto:muskanrehan865@gmail.com", color: "#4a90d9" },
              { label: "💼 LinkedIn", href: "https://linkedin.com/in/muskan-rehan-159367261", color: "#2c7a5a" },
              { label: "📞 +92 330 9992005", href: "tel:+923309992005", color: "#9b7de8" },
            ].map(({ label, href, color }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact-link" style={{ color, background: `${color}15`, border: `2px solid ${color}35`, boxShadow: `0 4px 16px ${color}18` }}
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