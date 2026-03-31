"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 12,   suffix: "+", label: "Projects Delivered",   sub: "Across Zimbabwe" },
  { value: 100,  suffix: "%", label: "Client Satisfaction",  sub: "On every project" },
  { value: 5,    suffix: "+", label: "Years in Operation",   sub: "Since founding" },
  { value: 24,   suffix: "/7", label: "On-Site Support",    sub: "Always available" },
];

function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, sub, started }: { value: number; suffix: string; label: string; sub: string; started: boolean }) {
  const count = useCounter(value, 1600, started);
  return (
    <div className="jt-sstat">
      <div className="jt-sstat__value">{count}{suffix}</div>
      <div className="jt-sstat__label">{label}</div>
      <div className="jt-sstat__sub">{sub}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="jt-stats-section" ref={ref}>
      <div className="jt-container">
        <div className="jt-stats-section__header">
          <span className="jt-label jt-label--light">Performance at a Glance</span>
          <h2 className="jt-stats-section__heading">
            Trusted Across Projects,<br />Proven by Real Numbers.
          </h2>
        </div>
        <div className="jt-stats-section__grid">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
