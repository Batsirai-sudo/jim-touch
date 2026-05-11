"use client";
import { useEffect, useRef } from "react";
import { cx } from "@/app/utils/cx";

import styles from './hero.module.scss'

const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Response" },
];

const BRANDS = ["CAT", "Cummins", "Sandvik", "Atlas Copco", "SANY", "Deutz", "Allison", "Shantui", "Volvo"];

const SPARKS = Array.from( { length: 22 }, ( _, i ) => ( {
  id: i,
  left: `${ Math.round( ( i * 7.3 + 11 ) % 100 ) }%`,
  size: `${ ( i % 3 ) + 1 }px`,
  duration: `${ 5 + ( i % 7 ) }s`,
  delay: `${ ( i * 0.6 ) % 5 }s`,
  opacity: 0.25 + ( i % 4 ) * 0.18,
}));

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect( () => {
    const el = cursorRef.current;
    if ( ! el ) return;
    const move = ( e: MouseEvent ) => {
      el.style.transform = `translate(${ e.clientX - 200 }px, ${ e.clientY - 200 }px)`;
    };
    window.addEventListener( "mousemove", move, { passive: true } );
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className={ styles.hero } id="home">
      <div className={ styles.bg } />
      <div className={ styles.overlay } />
      <div className={ styles.grid } />
      <div className={ styles.grain } />
      <div className={ styles.spotlight } />
      <div className={ styles['cursor-glow'] } ref={cursorRef} />

      <div className={ styles.sparks } aria-hidden>
        { SPARKS.map( ( s ) => (
          <span key={ s.id } className={ styles.spark } style={ {
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: s.duration,
            animationDelay: s.delay,
            opacity: s.opacity,
          } } />
        ) ) }
      </div>

      <div className={ styles.scanline } />

      <div className={ styles.layout }>

        <div style={{ flex: 1 }} />

        <div className={ styles.bottom }>
          <div className={ styles.badge }>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            ZIMBABWEAN OWNED ✦ EST. DECEMBER 2012
          </div>

          <div className={ styles.banner }>
            <span className={ styles.jim }>BUILT TO</span>
            <span className={ styles.touch }> LAST</span>
          </div>

          <h1 className={ styles.tagline }>
            GREAT MINDS
            <br />
            BEHIND MACHINES
          </h1>

          <p className={ styles.desc }>
            Specialised repair and maintenance of mining and construction equipment,
            delivering world-class workmanship for the government, private,
            and commercial sectors.
          </p>

          <div className={ styles.actions }>
            <a href="#contact" className={ cx( styles.btn, styles['btn-primary'] ) }>
              REQUEST SERVICE <span className={ styles['btn-arrow'] }>→</span>
            </a>
            <a href="#services" className={ cx( styles.btn, styles['btn-secondary'] ) }>
              OUR SERVICES
            </a>
          </div>

          <div className={ styles.stats }>
            { STATS.map( ( stat , i ) => (
              <div key={ stat.label + i } className={ styles.stat } style={ { animationDelay: `${1.4 + i * 0.15}s` } }>
                <span className={ styles.value }>{ stat.value }</span>
                <span className={ styles.label }>{ stat.label }</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={ styles.scroll }>
        <span>Scroll to explore</span>
        <div className={ styles.chevron } />
      </div>
    </section>
  );
}
