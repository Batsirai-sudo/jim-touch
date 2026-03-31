const REASONS = [
  {
    num: "01",
    title: "Operational Experience",
    body: "Over five years executing complex projects across Zimbabwe gives our team the on-ground knowledge to anticipate challenges before they arise and deliver without disruption.",
  },
  {
    num: "02",
    title: "Quality First Mindset",
    body: "We source only certified materials, employ licensed professionals, and maintain rigorous quality-control checkpoints at every stage of construction.",
  },
  {
    num: "03",
    title: "Long-Term Reliability",
    body: "Our relationships outlast project handover. Jim Touch provides post-completion support, maintenance guidance, and remains accountable long after the final sign-off.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="jt-why" id="about-why">
      <div className="jt-container">

        <div className="jt-why__header">
          <span className="jt-label">Why Choose Us</span>
          <h2 className="jt-why__heading">
            Where Experience Meets<br />
            Precision, Built for Real<br />
            Project Demands
          </h2>
        </div>

        <div className="jt-why__grid">
          {REASONS.map((r) => (
            <div key={r.num} className="jt-reason">
              <span className="jt-reason__num">{r.num}</span>
              <div className="jt-reason__divider" />
              <h3 className="jt-reason__title">{r.title}</h3>
              <p className="jt-reason__body">{r.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
