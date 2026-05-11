"use client";
import { useEffect, useRef } from "react";
import { Logo } from "../logo";
import styles from "./footer.module.scss";

const MENU = [
    { label: "Home",     href: "#home"     },
    { label: "About",    href: "#about"    },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact"  },
];

const SERVICES = [
    "Equipment Repair",
    "Mining Machinery",
    "Construction Overhaul",
    "Hydraulic Systems",
    "Engine Diagnostics",
    "Emergency Support",
];

const COLS = 24;
const ROWS = 4;

function seeded(n: number) {
    const x = Math.sin(n + 1) * 10000;
    return x - Math.floor(x);
}

// Cumulative thresholds per row — top rows heavier, bottom rows lighter
const TILE_THRESHOLDS = [
    [0.00, 0.02, 0.06, 0.18, 0.52], // row 0: mostly dark
    [0.03, 0.09, 0.18, 0.38, 0.68], // row 1: dark-leaning
    [0.12, 0.28, 0.45, 0.65, 0.82], // row 2: mixed
    [0.30, 0.60, 0.85, 0.92, 0.96], // row 3: mostly light
];

// Every shade gets a visible opacity so the grid covers the full image
const SHADE_OPACITY = [0.10, 0.22, 0.40, 0.68, 0.85, 0.96];

function tileOpacity(row: number, col: number): number {
    const rand = seeded(row * COLS + col + 77);
    const t = TILE_THRESHOLDS[row];
    let idx = 5;
    for (let i = 0; i < t.length; i++) {
        if (rand < t[i]) { idx = i; break; }
    }
    return SHADE_OPACITY[idx];
}

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    /* scroll-reveal for text content */
    useEffect(() => {
        const els = footerRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
        if (!els) return;
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    const el = e.target as HTMLElement;
                    el.style.transitionDelay = `${el.dataset.delay ?? 0}ms`;
                    el.classList.add(styles.visible);
                    obs.unobserve(el);
                }
            }),
            { threshold: 0.12 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);


    return (
        <footer className={styles.footer} ref={footerRef}>

            {/* ── content area ── */}
            <div className={styles.content}>
                <div className={styles.left} data-reveal data-delay="0">
                    <p className={styles.blurb}>
                        Explore the full range of equipment<br />services we offer in Zimbabwe.
                    </p>
                    <a href="#contact" className={styles.ctaBtn}>Request a Service →</a>
                </div>

                <div className={styles.col} data-reveal data-delay="80">
                    <span className={styles.colHead}>Menu</span>
                    {MENU.map((m) => (
                        <a key={m.label} href={m.href} className={styles.link}>{m.label}</a>
                    ))}
                </div>

                <div className={styles.col} data-reveal data-delay="160">
                    <span className={styles.colHead}>Services</span>
                    {SERVICES.map((s) => (
                        <a key={s} href="#services" className={styles.link}>{s}</a>
                    ))}
                </div>

                <div className={styles.col} data-reveal data-delay="240">
                    <span className={styles.colHead}>Contact</span>
                    <a href="tel:+263774805156" className={styles.link}>+263 774 805 156</a>
                    <a href="mailto:jimtouch.cat@gmail.com" className={styles.link}>jimtouch.cat@gmail.com</a>
                    <span className={styles.addr}>Harare, Zimbabwe</span>
                    <span className={styles.addr} style={{ marginTop: 16, display: "block" }}>Follow us</span>
                    <div className={styles.socials}>
                        <a href="#" className={styles.link}>Facebook</a>
                        <a href="#" className={styles.link}>LinkedIn</a>
                        <a href="#" className={styles.link}>WhatsApp</a>
                    </div>
                </div>
            </div>


{/* ── image with tile reveal ── */}
            <div className={styles.imgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/bulldozer-cat.webp" alt="Jim Touch heavy equipment" className={styles.img} />

                {/* dithered pixel mosaic overlay */}
                <div className={styles.tileGrid}>
                    {Array.from({ length: ROWS }).map((_, row) =>
                        Array.from({ length: COLS }).map((_, col) => (
                            <div
                                key={`${row}-${col}`}
                                className={styles.tile}
                                style={{ opacity: tileOpacity(row, col) }}
                            />
                        ))
                    )}
                </div>
            </div>
        </footer>
    );
}
