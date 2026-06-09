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
    <nav className="nav-bar" style={{
      background: scrolled ? "rgba(200,225,245,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
    }}>
      <span className="nav-logo">
        MR<span style={{ color: "#4a90d9" }}>.</span>
      </span>
      <div className="nav-links">
        {[["#about","About"],["#skills","Skills"],["#experience","Experience"],["#projects","Projects"],["#contact","Say hi ✉"]].map(([href, label]) => (
          <a key={href} href={href} className="nav-link"
            onMouseEnter={e => { e.currentTarget.style.background = "#4a90d9"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.color = "#2c4a7a"; }}
          >{label}</a>
        ))}
      </div>
    </nav>
  );
}