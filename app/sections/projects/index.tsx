import styles from "./projects.module.scss";

const CLIENTS = [
  {
    name: "ZCDC",
    sector: "Diamond Mining",
    desc: "3412 Caterpillar engine rebuild for Zimbabwe Consolidated Diamond Company.",
  },
  {
    name: "Murowa Diamond",
    sector: "Diamond Mining",
    desc: "740B Caterpillar water bowser final drivers, 966H C11 engine rebuild and hydraulic control valve overhaul.",
  },
  {
    name: "Fredda Rebecca Gold Mine",
    sector: "Gold Mining",
    desc: "Komatsu engine rebuild for underground gold mining operations.",
  },
  {
    name: "Nashy Mining Components",
    sector: "Mining",
    desc: "Ongoing components supply and machine servicing for mining fleet operations.",
  },
  {
    name: "Excel Properties",
    sector: "Construction",
    desc: "140G Caterpillar transmission, 320D engine rebuild, D6R torque converter and track adjuster.",
  },
  {
    name: "Exodus & Company",
    sector: "Construction",
    desc: "Caterpillar 140G transmission rebuild and heavy equipment field servicing.",
  },
  {
    name: "Crowhill Components",
    sector: "Components",
    desc: "Component supply and rebuild services for construction and mining equipment.",
  },
  {
    name: "Mike Appel",
    sector: "Private Sector",
    desc: "Caterpillar 25 forklift complete rebuild and restoration.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Who We've Worked With</span>
        </div>
        <h2 className={styles.heading}>
          Trusted by<br />industry leaders.
        </h2>
        <div className={styles.headerRight}>
          <p className={styles.headerCopy}>
            From diamond mines to construction fleets — Jim Touch has delivered components rebuilds, machine overhauls and compressor services across Zimbabwe's most demanding operations.
          </p>
          <div>
            <div className={styles.clientCount}>15+</div>
            <div className={styles.clientCountLabel}>Clients served</div>
          </div>
        </div>
      </div>

      {/* ── Client grid ── */}
      <div className={styles.grid}>
        {CLIENTS.map((c, i) => (
          <div key={i} className={styles.cell}>
            <span className={styles.cellSector}>{c.sector}</span>
            <span className={styles.cellName}>{c.name}</span>
            <span className={styles.cellDesc}>{c.desc}</span>
          </div>
        ))}
      </div>

      {/* ── Brands heading ── */}
      <div className={styles.brandsHeading}>
        <h3 className={styles.brandsTitle}>
          <span className={styles.brandsTitleDark}>9 global brands,</span>
          <br />
          <span className={styles.brandsTitleLight}>serviced with precision.</span>
        </h3>
        <p className={styles.brandsSub}>
          ★★★★★&nbsp;&nbsp;12+ years servicing the world&apos;s leading heavy equipment manufacturers.
        </p>
      </div>

      {/* ── Brands marquee ── */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[0, 1].map((n) => (
            <span key={n} className={styles.marqueeInner}>
              {[
                { mark: "CAT",  name: "Caterpillar", img: "/brands/cat.png"     },
                { mark: "C",    name: "Cummins",     img: "/brands/cummins.png" },
                { mark: "S",    name: "Sandvik",     img: "/brands/sandvik.png" },
                { mark: "AC",   name: "Atlas Copco", img: "/brands/atlas.png"   },
                { mark: "S",    name: "SANY",        img: "/brands/sany.png"    },
                { mark: "D",    name: "Deutz",       img: "/brands/deutz.png"   },
                { mark: "A",    name: "Allison",     img: "/brands/allison.png" },
                { mark: "ST",   name: "Shantui",     img: "/brands/shantui.png" },
                { mark: "V",    name: "Volvo",       img: "/brands/volvo.png"   },
              ].map((b) => (
                <div key={b.name + n} className={styles.brandCard}>
                  <span className={styles.brandHoverName}>{b.name}</span>
                  {b.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.img} alt={b.name} className={styles.brandLogo} />
                  ) : (
                    <span className={styles.brandMark}>{b.mark}</span>
                  )}
                </div>
              ))}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
