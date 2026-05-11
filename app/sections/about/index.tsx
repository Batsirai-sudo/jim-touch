"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./about.module.scss";

const STORY = [
    {
        year: "Est. 2012",
        heading: "Where it began",
        body: "Jim Touch Private Limited was founded in December 2012 by a team of engineers who saw a gap in Zimbabwe's construction and mining sectors. Starting with a single truck and a commitment to quality, we set out to become the most reliable equipment service company in the country.",
        img: "/truck1.jpg",
    },
    {
        year: "Registered 2020",
        heading: "Formally recognised",
        body: "Registered under the Zimbabwe Companies Act in August 2020, Jim Touch Pvt Ltd formalised its operations and expanded its team of professionally qualified engineers and technicians — each with deep, hands-on experience in mining and construction machinery.",
        img: "/hero-bg.jpg",
    },
    {
        year: "Our Mission",
        heading: "Built to serve Zimbabwe",
        body: "To exceed our customers' expectations in quality, delivery and cost through continuous improvement. We understand the challenges our clients face and we support them with quality workmanship and reliable lead times — to the best of our ability.",
        img: "/bulldozer2.png",
    },
    {
        year: "Our People",
        heading: "Certified professionals",
        body: "Our team of professionally qualified engineers and technicians brings vast hands-on experience across CAT, Cummins, Sandvik, Atlas Copco and SANY machines. High calibre staff, world-class standards and competitive rates define everything we do.",
        img: "/truck1.jpg",
    },
];

const STATS = [
    { value: 10,  suffix: "+",  label: "Years of service"   },
    { value: 500, suffix: "+",  label: "Jobs completed"     },
    { value: 3,   suffix: "",   label: "Sectors served"     },
    { value: 24,  suffix: "/7", label: "Emergency response" },
];

const TICKER_TEXT = "MINING · CONSTRUCTION · REPAIR · MAINTENANCE · ZIMBABWE · EST. 2012 · BUILT TO LAST · HEAVY EQUIPMENT · ";

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const [count, setCount] = useState(0);
    const ref  = useRef<HTMLDivElement>(null);
    const done = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting || done.current) return;
            done.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 3);
                setCount(Math.round(eased * value));
                if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        }, { threshold: 0.5 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [value]);

    return (
        <div ref={ref} className={styles.stat}>
            <span className={styles.statValue}>{count}{suffix}</span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const trigger = window.innerHeight * 0.45;

        const handleScroll = () => {
            let closestIdx = 0;
            let closestDist = Infinity;
            itemRefs.current.forEach((el, i) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const mid  = rect.top + rect.height / 2;
                const dist = Math.abs(mid - trigger);
                if (dist < closestDist) { closestDist = dist; closestIdx = i; }
            });
            setActiveIndex(closestIdx);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="about" className={styles.about}>

            {/* ── Intro header ── */}
            <div className={styles.intro}>
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowLine} />
                    <span className={styles.eyebrowText}>Who We Are</span>
                </div>
                <h1 className={styles.brandName}>JIM TOUCH</h1>
                <p className={styles.introCopy}>
                    Providing solutions, supply and repair of components and machines for the mining, construction, government and private sectors — with world-class workmanship and reliable lead times.
                </p>
            </div>

            {/* ── Scroll story (flipped: text left, image right) ── */}
            <div className={styles.story}>

                {/* left: scrollable heading items */}
                <div className={styles.storyLeft}>
                    {STORY.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => { itemRefs.current[i] = el; }}
                            className={`${styles.storyItem} ${activeIndex === i ? styles.storyItemActive : ""}`}
                        >
                            <span className={styles.storyNum}>0{i + 1}</span>
                            <span className={styles.storyYear}>{item.year}</span>
                            <h3 className={styles.storyHeading}>{item.heading}</h3>
                            <p className={styles.storyBody}>{item.body}</p>
                        </div>
                    ))}
                </div>

                {/* right: sticky image */}
                <div className={styles.storyRight}>
                    <div className={styles.stickyImgWrap}>
                        {STORY.map((item, i) => (
                            <div
                                key={i}
                                className={`${styles.stickyImg} ${activeIndex === i ? styles.stickyImgActive : ""}`}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.heading}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                />
                            </div>
                        ))}

                        {/* caption overlay */}
                        <div className={styles.imgCaption}>
                            <span className={styles.imgCaptionYear}>{STORY[activeIndex].year}</span>
                            <p className={styles.imgCaptionTitle}>{STORY[activeIndex].heading}</p>
                        </div>

                        <div className={styles.progressLine}>
                            <div
                                className={styles.progressFill}
                                style={{ height: `${((activeIndex + 1) / STORY.length) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
