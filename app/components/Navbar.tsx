"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "#home",     active: true },
  { label: "About",    href: "#about",    active: false },
  { label: "Services", href: "#services", active: false },
  { label: "Projects", href: "#projects", active: false },
  { label: "Contact",  href: "#contact",  active: false },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`jt-nav ${scrolled ? "jt-nav--scrolled" : ""}`}>
      <div className="jt-nav__inner">

        {/* ── Logo (left) ── */}
        <a href="#home" className="jt-nav__logo">
          <span className="logo-jim">JIM</span>
          <span className="logo-touch">TOUCH</span>
        </a>

        {/* ── Pill nav (center) ── */}
        <nav className="jt-nav__pill">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`jt-nav__pill-link ${active === link.label ? "active" : ""}`}
              onClick={() => setActive(link.label)}
            >
              {active === link.label && <span className="pill-icon">✦</span>}
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTA (right) ── */}
        <div className="jt-nav__right">
          <a href="#contact" className="jt-nav__cta">
            Get a Quote
          </a>
        </div>

        {/* ── Hamburger (mobile only) ── */}
        <button
          className="jt-nav__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`burger-line ${menuOpen ? "open" : ""}`} />
          <span className={`burger-line ${menuOpen ? "open" : ""}`} />
          <span className={`burger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <nav className="jt-nav__mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="jt-nav__mobile-link"
              onClick={() => { setActive(link.label); setMenuOpen(false); }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="jt-nav__mobile-cta" onClick={() => setMenuOpen(false)}>
            Get a Quote →
          </a>
        </nav>
      )}
    </header>
  );
}
