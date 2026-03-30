interface LogoProps {
  size?: number;
  wordmark?: boolean;
  className?: string;
}

// Hex points computed from center (30,30), circumradius R
function hexPoints(R: number, cx = 30, cy = 30) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i);
    return `${(cx + R * Math.cos(angle)).toFixed(2)},${(cy + R * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
}

export function Logo({ size = 44, wordmark = true, className = "" }: LogoProps) {
  return (
    <div className={`jt-logo ${className}`}>
      {/* ── Icon mark ── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#ffbe3d" />
            <stop offset="60%"  stopColor="#f5a623" />
            <stop offset="100%" stopColor="#ff6200" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#f5a623" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ff6200" stopOpacity="0.05" />
          </linearGradient>
          <filter id="hexGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer hexagon */}
        <polygon
          points={hexPoints(26)}
          fill="url(#fillGrad)"
          stroke="url(#hexGrad)"
          strokeWidth="2"
          filter="url(#hexGlow)"
        />

        {/* Inner dashed ring */}
        <polygon
          points={hexPoints(19)}
          fill="none"
          stroke="#f5a623"
          strokeWidth="0.75"
          strokeOpacity="0.25"
          strokeDasharray="3 2"
        />

        {/* Vertex tick marks */}
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (Math.PI / 180) * (60 * i);
          const x  = 30 + 26 * Math.cos(angle);
          const y  = 30 + 26 * Math.sin(angle);
          const ix = 30 + 21 * Math.cos(angle);
          const iy = 30 + 21 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={ix.toFixed(2)} y1={iy.toFixed(2)}
              x2={x.toFixed(2)}  y2={y.toFixed(2)}
              stroke="#f5a623"
              strokeWidth="1.5"
              strokeOpacity="0.48"
            />
          );
        })}

        {/* JT monogram */}
        <text
          x="30" y="37.5"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="19"
          fill="url(#hexGrad)"
          textAnchor="middle"
          letterSpacing="2.5"
        >
          JT
        </text>
      </svg>

      {/* ── Wordmark: JIM (amber) + TOUCH (white) on ONE line ── */}
      {wordmark && (
        <div className="jt-logo__wordmark" style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 0, whiteSpace: "nowrap", lineHeight: 1 }}>
          <span className="jt-logo__jim">JIM</span>
          <span className="jt-logo__touch">TOUCH</span>
        </div>
      )}
    </div>
  );
}
