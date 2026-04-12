const FEATURED = {
  label: "Flagship Service",
  title: "Commercial & Industrial Construction",
  specs: [
    { value: "Full Turnkey", label: "Delivery" },
    { value: "ISO Ready", label: "Standards" },
    { value: "12 Mo.", label: "Avg. Completion" },
  ],
  body: "From steel-framed warehouses to multi-storey office complexes — Jim Touch manages every phase: design co-ordination, procurement, civil works, structural build, M&E installations, and final handover.",
};

const CATEGORIES = [
  { icon: "🏠", name: "Residential Housing" },
  { icon: "🏢", name: "Commercial Buildings" },
  { icon: "🛣️", name: "Roads & Infrastructure" },
  { icon: "🏭", name: "Industrial Facilities" },
  { icon: "🌉", name: "Civil Engineering" },
  { icon: "🔨", name: "Renovation & Fit-Out" },
];

export default function ServicesSection() {
  return (
    <section className="jt-services" id="services">
      <div className="jt-container">

        <div className="jt-services__header">
          <span className="jt-label jt-label--light">Our Services</span>
          <h2 className="jt-services__heading">
            Built for Every Scale of Construction
          </h2>
        </div>

        {/* Featured service card */}
        <div className="jt-featured">
          <div className="jt-featured__left">
            <span className="jt-featured__tag">{FEATURED.label}</span>
            <h3 className="jt-featured__title">{FEATURED.title}</h3>
            <div className="jt-featured__specs">
              {FEATURED.specs.map((s) => (
                <div key={s.label} className="jt-fspec">
                  <span className="jt-fspec__value">{s.value}</span>
                  <span className="jt-fspec__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="jt-featured__right">
            <p className="jt-featured__body">{FEATURED.body}</p>
            <a href="#contact" className="jt-btn jt-btn--amber-outline">
              Discuss Your Project →
            </a>
          </div>
        </div>

        {/* Service categories */}
        <div className="jt-services__cats">
          {CATEGORIES.map((c) => (
            <div key={c.name} className="jt-cat">
              <span className="jt-cat__icon">{c.icon}</span>
              <span className="jt-cat__name">{c.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
