"use client";
import { useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Jim Touch delivered our warehouse complex on schedule and within budget. Their site management was exceptional — every issue was resolved before it could impact the timeline.",
    name: "Tendai Moyo",
    title: "Operations Director, MoyoCargo Logistics",
    initials: "TM",
  },
  {
    quote: "The team's technical expertise on our road rehabilitation project was evident from day one. They brought solutions we hadn't considered and saved us weeks of rework.",
    name: "Grace Mutasa",
    title: "Infrastructure Manager, Harare Municipality",
    initials: "GM",
  },
  {
    quote: "We've worked with several construction firms in Zimbabwe and Jim Touch stands out for their transparency and commitment. Our housing estate was completed to the highest standard.",
    name: "David Chikwanda",
    title: "CEO, Summit Developments",
    initials: "DC",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="jt-testimonials" id="testimonials">
      <div className="jt-container">

        <span className="jt-label">Client Testimonials</span>

        <div className="jt-tcard">
          <div className="jt-tcard__quote-mark">&ldquo;</div>
          <blockquote className="jt-tcard__text">{t.quote}</blockquote>
          <div className="jt-tcard__author">
            <div className="jt-tcard__avatar">{t.initials}</div>
            <div>
              <div className="jt-tcard__name">{t.name}</div>
              <div className="jt-tcard__title">{t.title}</div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="jt-tcard__nav">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`jt-tcard__dot ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
          <span className="jt-tcard__count">
            {String(active + 1).padStart(2, "0")}/{String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}
