"use client";
import { useState, useEffect, useRef } from "react";
import { Logo } from "../logo";
import SearchOverlay from "../search-overlay";

import styles from './header.module.scss'
import { cx } from "@/app/utils/cx";

const NAV_LINKS = [
    { label: "Home",     href: "#home"     },
    { label: "About",    href: "#about"    },
    { label: "Services", href: "#services", mega: true },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact"  },
];

const MEGA_SERVICES = [
    {
        icon: "⚙️",
        title: "Equipment Repair",
        desc: "Full mechanical overhaul and precision repair for all heavy machinery.",
        href: "#services",
        img: "/truck1.jpg",
        preview: "Full-spectrum mechanical repair",
        previewSub: "From routine servicing to full drivetrain overhauls — we restore your machine to peak performance.",
    },
    {
        icon: "⛏️",
        title: "Mining Machinery",
        desc: "Specialised servicing of mining drills, loaders, and excavators.",
        href: "#services",
        img: "/hero-bg.jpg",
        preview: "Mining-grade precision",
        previewSub: "We service the machinery that drives Zimbabwe's mining sector — drills, loaders, haul trucks, and more.",
    },
    {
        icon: "🏗️",
        title: "Construction Overhaul",
        desc: "End-to-end refurbishment of construction fleet equipment.",
        href: "#services",
        img: "/bulldozer2.png",
        preview: "Fleet refurbishment at scale",
        previewSub: "Full fleet overhaul and refurbishment for construction companies operating across Zimbabwe.",
    },
    {
        icon: "🔧",
        title: "Hydraulic Systems",
        desc: "Diagnosis and repair of hydraulic pumps, cylinders and circuits.",
        href: "#services",
        img: "/hero-bg.jpg",
        preview: "Hydraulic system experts",
        previewSub: "Precision diagnosis and repair of hydraulic pumps, cylinders, hoses, and full circuit systems.",
    },
    {
        icon: "🔍",
        title: "Engine Diagnostics",
        desc: "Advanced computer diagnostics and engine performance tuning.",
        href: "#services",
        img: "/truck1.jpg",
        preview: "Advanced diagnostics",
        previewSub: "Computer-aided diagnostics and engine tuning to identify faults fast and restore full performance.",
    },
    {
        icon: "🚨",
        title: "Emergency Support",
        desc: "24/7 on-site emergency breakdown response across Zimbabwe.",
        href: "#contact",
        img: "/bulldozer2.png",
        preview: "24/7 breakdown response",
        previewSub: "Rapid on-site emergency support anywhere in Zimbabwe — day or night, we keep you running.",
    },
];

export default function Header() {
    const [scrolled,        setScrolled]        = useState(false);
    const [menuOpen,        setMenuOpen]        = useState(false);
    const [active,          setActive]          = useState("Home");
    const [searchOpen,      setSearchOpen]      = useState(false);
    const [megaOpen,        setMegaOpen]        = useState(false);
    const [hoveredService,  setHoveredService]  = useState(MEGA_SERVICES[0]);
    const megaTimeout  = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* close mega on outside click */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(`.${styles.pill}`)) setMegaOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const openMega  = () => { if (megaTimeout.current) clearTimeout(megaTimeout.current); setMegaOpen(true); };
    const closeMega = () => { megaTimeout.current = setTimeout(() => setMegaOpen(false), 120); };

    return (
        <>
            <header className={cx(styles.header, { [styles.scrolled]: scrolled })}>
                <div className={styles.inner}>
                    <a href="#home" className={styles.logo}>
                        <Logo height={48} />
                    </a>

                    <nav className={styles.pill}>
                        {NAV_LINKS.map((link) =>
                            link.mega ? (
                                <div
                                    key={link.label}
                                    className={styles.megaWrap}
                                    onMouseEnter={openMega}
                                    onMouseLeave={closeMega}
                                >
                                    <button
                                        className={cx(styles['pill-link'], styles['pill-btn'], { [styles.active]: active === link.label })}
                                        onClick={() => setMegaOpen((v) => !v)}
                                        aria-expanded={megaOpen}
                                    >
                                        {active === link.label && <span className={styles['pill-icon']}>✦</span>}
                                        {link.label}
                                        <svg
                                            className={cx(styles.chevron, { [styles.chevronUp]: megaOpen })}
                                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                                        >
                                            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>

                                    {megaOpen && (
                                        <div className={styles.mega} onMouseEnter={openMega} onMouseLeave={closeMega}>
                                            <div className={styles.megaInner}>
                                                <div className={styles.megaBody}>
                                                    {/* left image panel — updates on service hover */}
                                                    <div className={styles.megaLeft}>
                                                        {MEGA_SERVICES.map((s) => (
                                                            /* eslint-disable-next-line @next/next/no-img-element */
                                                            <img
                                                                key={s.title}
                                                                src={s.img}
                                                                alt={s.title}
                                                                className={`${styles.megaImg} ${hoveredService.title === s.title ? styles.megaImgActive : ""}`}
                                                            />
                                                        ))}
                                                        <div className={styles.megaLeftOverlay}>
                                                            <p className={styles.megaLeftTitle} key={hoveredService.title + "-t"}>
                                                                {hoveredService.preview}
                                                            </p>
                                                            <p className={styles.megaLeftSub} key={hoveredService.title + "-s"}>
                                                                {hoveredService.previewSub}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* right services list */}
                                                    <div className={styles.megaRight}>
                                                        <div className={styles.megaColHead}>
                                                            <span className={styles.megaLabel}>Services</span>
                                                            <a href="#services" className={styles.megaAll} onClick={() => { setActive("Services"); setMegaOpen(false); }}>View all →</a>
                                                        </div>
                                                        <div className={styles.megaList}>
                                                            {MEGA_SERVICES.map((s) => (
                                                                <a
                                                                    key={s.title}
                                                                    href={s.href}
                                                                    className={`${styles.megaItem} ${hoveredService.title === s.title ? styles.megaItemActive : ""}`}
                                                                    onMouseEnter={() => setHoveredService(s)}
                                                                    onClick={() => { setActive("Services"); setMegaOpen(false); }}
                                                                >
                                                                    <span className={styles.megaItemIcon}>{s.icon}</span>
                                                                    <div>
                                                                        <p className={styles.megaTitle}>{s.title}</p>
                                                                        <p className={styles.megaDesc}>{s.desc}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={cx(styles['pill-link'], { [styles.active]: active === link.label })}
                                    onClick={() => setActive(link.label)}
                                >
                                    {active === link.label && <span className={styles['pill-icon']}>✦</span>}
                                    {link.label}
                                </a>
                            )
                        )}
                    </nav>

                    <div className={styles['header-right']}>
                        <button
                            className={styles.cta}
                            onClick={() => setSearchOpen(true)}
                            aria-label="Search"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                            Search
                        </button>
                    </div>

                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {new Array(3).fill(0).map((v, i) => (
                            <span key={v + i} className={cx(styles['hamburger-line'], { [styles.open]: menuOpen })} />
                        ))}
                    </button>
                </div>

                {menuOpen && (
                    <nav className={styles.mobile}>
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={styles['mobile-link']}
                                onClick={() => { setActive(link.label); setMenuOpen(false); }}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            className={styles['mobile-cta']}
                            onClick={() => { setMenuOpen(false); setSearchOpen(true); }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                            Search services…
                        </button>
                    </nav>
                )}
            </header>

            <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}
