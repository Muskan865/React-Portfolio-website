"use client"
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [["#about","About"],["#skills","Skills"],["#projects","Projects"],["#contact","Say hi"]];

  return (
    <>
      <nav className="nav-bar" style={{
        background: scrolled ? "rgba(200,225,245,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}>
        <span className="nav-logo">
          MR<span style={{ color: "#4a90d9" }}>.</span>
        </span>
        
        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="nav-link"
              onMouseEnter={e => { e.currentTarget.style.background = "#4a90d9"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.7)"; e.currentTarget.style.color = "#2c4a7a"; }}
            >{label}</a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div className={`nav-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* Mobile drawer panel */}
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
        <div className="nav-drawer-content">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} className="nav-drawer-link" onClick={handleLinkClick}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}