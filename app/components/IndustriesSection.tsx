"use client";
import { useState } from "react";

const INDUSTRIES = [
  { name: "Residential Housing", desc: "From single dwellings to large-scale housing estates." },
  { name: "Commercial Real Estate", desc: "Office parks, retail centres, and hospitality developments." },
  { name: "Roads & Infrastructure", desc: "Road construction, drainage, and public utilities." },
  { name: "Industrial Facilities", desc: "Warehouses, factories, and processing plants." },
  { name: "Government & Civic", desc: "Schools, clinics, and public infrastructure projects." },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="jt-industries">
      <div className="jt-container">

        <span className="jt-label jt-label--light">Sectors We Serve</span>
        <h2 className="jt-industries__heading">
          Supporting Work Across<br />Multiple Industries
        </h2>

        <div className="jt-industries__layout">

          {/* Industry list */}
          <ul className="jt-ind-list">
            {INDUSTRIES.map((ind, i) => (
              <li
                key={ind.name}
                className={`jt-ind-item ${active === i ? "active" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="jt-ind-item__name">{ind.name}</span>
                <span className="jt-ind-item__arrow">→</span>
                {active === i && (
                  <p className="jt-ind-item__desc">{ind.desc}</p>
                )}
              </li>
            ))}
          </ul>

          {/* Visual panel */}
          <div className="jt-industries__visual">
            <div className="jt-industries__badge-block">
              <span className="jt-industries__badge-num">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="jt-industries__badge-label">
                {INDUSTRIES[active].name}
              </span>
            </div>
            {/* Decorative grid squares */}
            <div className="jt-ind-grid" aria-hidden>
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="jt-ind-grid__cell" style={{ opacity: 0.06 + (i % 5) * 0.04 }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
