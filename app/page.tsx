// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         {/* <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         /> */}
//         {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div> */}
//       </main>
//     </div>
//   );
// }


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JIM TOUCH — Coming Soon",
  description: "We're building something powerful.",
};

export default function Home() {
  return (
    <div className="construction-root">
      {/* Grain overlay */}
      <div className="grain" />

      {/* Diagonal hazard stripes background */}
      <div className="hazard-stripes" />

      {/* Animated scanline */}
      <div className="scanline" />

      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-logo">JT</div>
        <div className="topbar-status">
          <span className="status-dot" />
          SITE UNDER CONSTRUCTION
        </div>
      </header>

      {/* Main hero */}
      <main className="hero">
        {/* Eyebrow */}
        <p className="eyebrow">
          <span className="eyebrow-line" />
          COMING SOON
          <span className="eyebrow-line" />
        </p>

        {/* Big title */}
        <h1 className="hero-title">
          <span className="title-jim">JIM</span>
          <span className="title-touch">TOUCH</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub">
          Building the future — one foundation at a time.
        </p>

        {/* Progress bar */}
        <div className="progress-wrap">
          <div className="progress-label">
            <span>PROJECT STATUS</span>
            <span className="progress-pct">68%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>

        {/* Stats row */}
        <div className="stats">
          {[
            { value: "12+", label: "Projects" },
            { value: "2025", label: "Launch Year" },
            { value: "∞", label: "Ambition" },
          ].map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom construction scene */}
      <div className="scene">
        {/* Ground line */}
        <div className="ground-line" />

        {/* SVG Excavator */}
        <div className="excavator-wrap">
          <svg viewBox="0 0 420 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="excavator-svg">
            {/* Body */}
            <rect x="80" y="140" width="200" height="70" rx="6" fill="#1a1c22" stroke="#f5a623" strokeWidth="1.5"/>
            {/* Cab */}
            <rect x="200" y="105" width="80" height="70" rx="4" fill="#1e2028" stroke="#f5a623" strokeWidth="1.5"/>
            {/* Cab window */}
            <rect x="210" y="112" width="55" height="38" rx="3" fill="#0d1117" stroke="#f5a62380" strokeWidth="1"/>
            <rect x="210" y="112" width="55" height="38" rx="3" fill="url(#windowGlow)" opacity="0.4"/>
            {/* Tracks */}
            <rect x="60" y="200" width="230" height="22" rx="11" fill="#111318" stroke="#f5a623" strokeWidth="1.5"/>
            <circle cx="95" cy="211" r="14" fill="#1a1c22" stroke="#f5a623" strokeWidth="1.5"/>
            <circle cx="95" cy="211" r="6" fill="#f5a62340"/>
            <circle cx="255" cy="211" r="14" fill="#1a1c22" stroke="#f5a623" strokeWidth="1.5"/>
            <circle cx="255" cy="211" r="6" fill="#f5a62340"/>
            <circle cx="175" cy="211" r="10" fill="#1a1c22" stroke="#f5a62360" strokeWidth="1"/>
            {/* Arm */}
            <g className="arm-anim">
              <rect x="195" y="60" width="18" height="90" rx="4" fill="#2a2d38" stroke="#f5a623" strokeWidth="1.5" transform="rotate(-15 204 105)"/>
              {/* Forearm */}
              <rect x="230" y="100" width="14" height="75" rx="4" fill="#23262f" stroke="#f5a62390" strokeWidth="1.5" transform="rotate(20 237 137)"/>
              {/* Bucket */}
              <g className="bucket-anim">
                <path d="M280 180 L310 175 L325 205 L275 210 Z" fill="#1e2028" stroke="#f5a623" strokeWidth="1.5"/>
                <path d="M275 210 L325 205 L320 218 L280 220 Z" fill="#f5a62320" stroke="#f5a62360" strokeWidth="1"/>
                {/* Teeth */}
                <line x1="285" y1="220" x2="283" y2="230" stroke="#f5a623" strokeWidth="2"/>
                <line x1="297" y1="221" x2="296" y2="231" stroke="#f5a623" strokeWidth="2"/>
                <line x1="309" y1="220" x2="308" y2="230" stroke="#f5a623" strokeWidth="2"/>
              </g>
            </g>
            {/* Exhaust pipe */}
            <rect x="270" y="85" width="8" height="25" rx="4" fill="#2a2d38" stroke="#f5a62360" strokeWidth="1"/>
            {/* Lights */}
            <circle cx="84" cy="155" r="6" fill="#f5a62320" stroke="#f5a623" strokeWidth="1"/>
            <circle cx="84" cy="155" r="3" fill="#ffbe3d"/>
            <defs>
              <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5a623"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* SVG Dump Truck */}
        <div className="truck-wrap">
          <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="truck-svg">
            {/* Bed */}
            <polygon points="20,60 180,60 200,130 0,130" fill="#1a1c22" stroke="#f5a623" strokeWidth="1.5"/>
            {/* Load (dirt) */}
            <ellipse cx="105" cy="65" rx="80" ry="18" fill="#3d2e0e" stroke="#f5a62340" strokeWidth="1"/>
            {/* Cab */}
            <rect x="185" y="70" width="110" height="70" rx="5" fill="#1e2028" stroke="#f5a623" strokeWidth="1.5"/>
            {/* Cab window */}
            <polygon points="195,75 285,75 285,118 195,118" fill="#0d1117" stroke="#f5a62360" strokeWidth="1"/>
            <polygon points="195,75 285,75 285,118 195,118" fill="url(#truckGlow)" opacity="0.3"/>
            {/* Chassis */}
            <rect x="0" y="128" width="300" height="18" rx="4" fill="#111318" stroke="#f5a62360" strokeWidth="1"/>
            {/* Wheels */}
            <circle cx="55" cy="155" r="22" fill="#111318" stroke="#f5a623" strokeWidth="2" className="wheel-rear"/>
            <circle cx="55" cy="155" r="10" fill="#1e2028" stroke="#f5a62360" strokeWidth="1"/>
            <circle cx="55" cy="155" r="4" fill="#f5a62340"/>
            <circle cx="245" cy="155" r="22" fill="#111318" stroke="#f5a623" strokeWidth="2" className="wheel-front"/>
            <circle cx="245" cy="155" r="10" fill="#1e2028" stroke="#f5a62360" strokeWidth="1"/>
            <circle cx="245" cy="155" r="4" fill="#f5a62340"/>
            {/* Headlight */}
            <rect x="290" y="95" width="12" height="20" rx="3" fill="#f5a62320" stroke="#f5a623" strokeWidth="1"/>
            <rect x="290" y="95" width="12" height="20" rx="3" fill="#ffbe3d" opacity="0.5"/>
            <defs>
              <radialGradient id="truckGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5a623"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Smoke puffs */}
        <div className="smoke-stack">
          <div className="puff puff-1"/>
          <div className="puff puff-2"/>
          <div className="puff puff-3"/>
        </div>
      </div>

      {/* Bottom footer */}
      <footer className="footer">
        <span>© 2025 JIM TOUCH</span>
        <span className="footer-dot">◆</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </div>
  );
}