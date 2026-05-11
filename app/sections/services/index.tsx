"use client";
import { useMemo, useState } from "react";
import styles from "./services.module.scss";

const COLS = 30;
const ROWS = 4;

function seeded(n: number) {
  const x = Math.sin(n + 1) * 10000;
  return x - Math.floor(x);
}

const SHADES = [255, 210, 155, 100, 50, 0];

const ENTRY_THRESHOLDS = [
  [0.30, 0.60, 0.85, 0.92, 0.96],
  [0.12, 0.28, 0.45, 0.65, 0.82],
  [0.03, 0.09, 0.18, 0.38, 0.68],
  [0.00, 0.02, 0.06, 0.18, 0.52],
];

const EXIT_THRESHOLDS = [
  [0.00, 0.02, 0.06, 0.18, 0.52],
  [0.03, 0.09, 0.18, 0.38, 0.68],
  [0.12, 0.28, 0.45, 0.65, 0.82],
  [0.30, 0.60, 0.85, 0.92, 0.96],
];

function pixelColor(row: number, col: number, thresholds: number[][]): string {
  const rand = seeded(row * COLS + col + 999);
  const t = thresholds[row];
  let idx = SHADES.length - 1;
  for (let i = 0; i < t.length; i++) {
    if (rand < t[i]) { idx = i; break; }
  }
  const l = SHADES[idx];
  return `rgb(${l},${l},${l})`;
}

const SERVICES = [
  {
    title: "Components Rebuild",
    desc: "Full strip, rebuild and testing of engines, transmissions, torque converters and drivetrain components across CAT, Cummins, Sandvik and SANY machines.",
    tags: ["Engines", "Transmissions", "Torque Converters", "Drivetrain"],
  },
  {
    title: "Machine Rebuild",
    desc: "Complete machine overhauls from stripped-down inspection through to full restoration — mining excavators, bulldozers, forklifts and construction equipment.",
    tags: ["Excavators", "Bulldozers", "Forklifts", "Graders"],
  },
  {
    title: "Compressor Division",
    desc: "Atlas Copco compressor troubleshooting, field service, engine and airend rebuilds. We also supply compressor oil, filters, separators and air filters.",
    tags: ["Atlas Copco", "Airend Rebuilds", "Filters & Oils", "Field Service"],
  },
  {
    title: "Hydraulic Systems Repair",
    desc: "Diagnosis, resealing and pressure testing of hydraulic circuits and control valves on excavators, loaders, graders and water bowsers.",
    tags: ["Circuits", "Control Valves", "Pressure Testing", "Resealing"],
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  const entryPixels = useMemo(() => Array.from({ length: ROWS * COLS }, (_, i) => {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    return pixelColor(row, col, ENTRY_THRESHOLDS);
  }), []);

  const exitPixels = useMemo(() => Array.from({ length: ROWS * COLS }, (_, i) => {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    return pixelColor(row, col, EXIT_THRESHOLDS);
  }), []);


  const activeService = active !== null ? SERVICES[active] : null;

  return (
    <section id="services" className={styles.services}>

      {/* ── Entry pixel divider ── */}
      <div className={styles.pixelDivider} aria-hidden="true">
        {entryPixels.map((color, i) => (
          <div key={i} className={styles.pixel} style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* ── Section header ── */}
      <div className={styles.intro}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>What We Do</span>
        </div>
        <h2 className={styles.heading}>
          Built for the<br />toughest machines.
        </h2>
        <p className={styles.headingSub}>
          From full engine overhauls to emergency field response —
          every service Jim Touch offers is backed by certified engineers
          and decades of hands-on experience.
        </p>
      </div>

      {/* ── Split layout ── */}
      <div className={styles.split} onMouseLeave={() => setActive(null)}>

        {/* Left — service list */}
        <div className={styles.list}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={[
                styles.item,
                active === null ? "" : active === i ? styles.itemActive : styles.itemMuted,
              ].join(" ")}
              data-item={i}
              onMouseEnter={() => setActive(i)}
            >
              <span className={styles.itemNum}>0{i + 1}</span>
              <span className={styles.itemTitle}>{s.title}</span>
              <span className={styles.itemArrow}>→</span>
            </div>
          ))}
        </div>

        {/* Right — detail panel */}
        <div className={styles.panel}>
          <div className={styles.panelInner} style={{ opacity: activeService ? 1 : 0 }}>
            {activeService && (
              <>
                <span className={styles.panelNum}>
                  {active !== null ? `0${active + 1}` : ""}
                </span>
                <h3 className={styles.panelTitle}>{activeService.title}</h3>
                <p className={styles.panelDesc}>{activeService.desc}</p>
                <div className={styles.panelTags}>
                  {activeService.tags.map((tag) => (
                    <span key={tag} className={styles.panelTag}>{tag}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

      </div>

      {/* ── Exit pixel divider ── */}
      <div className={styles.pixelDivider} aria-hidden="true">
        {exitPixels.map((color, i) => (
          <div key={i} className={styles.pixel} style={{ backgroundColor: color }} />
        ))}
      </div>

    </section>
  );
}
