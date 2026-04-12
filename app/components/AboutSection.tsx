const PILLARS = [
  {
    icon: "🏗",
    title: "Precision Engineering",
    body: "Every project is executed to exact specification — from foundation to finishing.",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    body: "We work alongside clients from inception through handover, ensuring zero surprises.",
  },
  {
    icon: "⚙️",
    title: "Certified Professionals",
    body: "Our licensed engineers and site supervisors bring decades of on-ground experience.",
  },
  {
    icon: "📐",
    title: "Full Project Management",
    body: "Scheduling, procurement, compliance, and reporting — all handled under one roof.",
  },
];

export default function AboutSection() {
  return (
    <section className="jt-about" id="about">
      <div className="jt-container">

        {/* Top two-column */}
        <div className="jt-about__top">
          <div className="jt-about__intro">
            <span className="jt-label">Who We Are</span>
            <h2 className="jt-about__heading">
              Jim Touch provides dependable construction and engineering solutions across Zimbabwe
            </h2>
          </div>
          <div className="jt-about__copy">
            <p className="jt-about__lead">
              Our team is carefully selected and positioned to execute every project with precision, quality, and commitment — from the ground up.
            </p>
            <p className="jt-about__body">
              Founded with the vision of transforming Zimbabwe's built environment, Jim Touch Pvt Ltd combines technical expertise with hands-on site experience to deliver residential, commercial, and infrastructure projects that stand the test of time.
            </p>
            <a href="#services" className="jt-about__link">
              Explore our services <span>→</span>
            </a>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="jt-about__pillars">
          {PILLARS.map((p) => (
            <div key={p.title} className="jt-pillar">
              <span className="jt-pillar__icon">{p.icon}</span>
              <h3 className="jt-pillar__title">{p.title}</h3>
              <p className="jt-pillar__body">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
