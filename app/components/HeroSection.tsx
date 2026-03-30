"use client";
import { useEffect, useRef } from "react";

const STATS = [
  { value: "12+", label: "Projects Delivered" },
  { value: "24/7", label: "On-Site Support" },
  { value: "5+", label: "Years Experience" },
];

const SPARKS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.round((i * 7.3 + 11) % 100)}%`,
  size: `${(i % 3) + 1}px`,
  duration: `${6 + (i % 7)}s`,
  delay: `${(i * 0.7) % 5}s`,
  opacity: 0.3 + (i % 4) * 0.15,
}));

export default function HeroSection() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="jt-hero" id="home">
      {/* ── Background layers ── */}
      <div className="jt-hero__bg" />
      <div className="jt-hero__grid" />
      <div className="jt-hero__stripes" />
      <div className="jt-hero__grain" />
      <div className="jt-hero__vignette" />

      {/* Drifting spotlight */}
      <div className="jt-hero__spotlight" />

      {/* Cursor glow */}
      <div className="jt-hero__cursor-glow" ref={cursorRef} />

      {/* Floating sparks */}
      <div className="jt-hero__sparks" aria-hidden>
        {SPARKS.map((s) => (
          <span
            key={s.id}
            className="spark"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDuration: s.duration,
              animationDelay: s.delay,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      {/* Scanline */}
      <div className="jt-hero__scanline" />

      {/* ── Content ── */}
      <div className="jt-hero__content">
        {/* Badge */}
        <div className="jt-hero__badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          CERTIFIED CONSTRUCTION SPECIALISTS
        </div>

        {/* Headline */}
        <h1 className="jt-hero__heading">
          <span className="jt-line jt-line--1">WE BUILD YOUR</span>
          <span className="jt-line jt-line--2">
            <span className="jt-accent">VISION</span>
          </span>
          <span className="jt-line jt-line--3">INTO REALITY</span>
        </h1>

        {/* Description */}
        <p className="jt-hero__desc">
          Expert construction, civil engineering, and project management
          for residential, commercial, and infrastructure developments
          across Zimbabwe.
        </p>

        {/* CTAs */}
        <div className="jt-hero__actions">
          <a href="#contact" className="jt-btn jt-btn--primary">
            REQUEST SERVICE
            <span className="btn-arrow">→</span>
          </a>
          <a href="#services" className="jt-btn jt-btn--secondary">
            OUR SERVICES
          </a>
        </div>

        {/* Stats */}
        <div className="jt-hero__stats">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="jt-stat"
              style={{ animationDelay: `${1.5 + i * 0.15}s` }}
            >
              <span className="jt-stat__value">{stat.value}</span>
              <span className="jt-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="jt-hero__scroll">
        <span>Scroll to explore</span>
        <div className="scroll-chevron" />
      </div>
    </section>
  );
}
