"use client"
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0.9rem 2.5rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      background: scrolled ? "rgba(200,225,245,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      transition: "all 0.3s ease",
    }}>
      <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#2c4a7a" }}>
        MR<span style={{ color: "#4a90d9" }}>.</span>
      </span>
      <div style={{ display: "flex", gap: "0.6rem" }}>
        {[["#about","About"],["#skills","Skills"],["#experience","Experience"],["#projects","Projects"],["#contact","Say hi ✉"]].map(([href, label]) => (
          <a key={href} href={href} style={{
            fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: "0.8rem",
            color: "#2c4a7a", textDecoration: "none",
            background: "rgba(255,255,255,0.7)", border: "1.5px solid #b8d4f0",
            borderRadius: 99, padding: "5px 14px",
            transition: "background 0.2s, color 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#4a90d9"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.color = "#2c4a7a"; }}
          >{label}</a>
        ))}
      </div>
    </nav>
  );
}