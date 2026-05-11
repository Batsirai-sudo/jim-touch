import { cx } from "@/app/utils/cx";
import styles from './logo.module.scss'

interface LogoProps {
    height?: number;
    className?: string;
    // kept for API compatibility
    size?: number;
    wordmark?: boolean;
}

export function Logo({ height = 52, className = "" }: LogoProps) {
    const width = Math.round(height * (690 / 190));

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 690 190"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className={cx(styles.logoSvg, className)}
            aria-label="Jim Touch Private Limited"
        >
            <defs>
                {/* Site amber gradient — matches --amber-bright → --amber → --orange */}
                <linearGradient id="logo-amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#ffbe3d" />
                    <stop offset="55%"  stopColor="#f5a623" />
                    <stop offset="100%" stopColor="#ff6200" />
                </linearGradient>

                {/* Dark text gradient for JIM TOUCH — reads on gold background */}
                <linearGradient id="logo-textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"   stopColor="#2a2010" />
                    <stop offset="100%" stopColor="#0a0800" />
                </linearGradient>

                {/* Original red gradient for PRIVATE LIMITED panel */}
                <linearGradient id="logo-redPanel" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B02020" />
                    <stop offset="100%" stopColor="#3A0808" />
                </linearGradient>

                {/* Amber panel background for JIM TOUCH — var(--amber) */}
                <linearGradient id="logo-spotlight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#ffbe3d" />
                    <stop offset="50%"  stopColor="#f5a623" />
                    <stop offset="100%"  stopColor="#c87a00" />
                </linearGradient>

                {/* Fading gold divider line */}
                <linearGradient id="logo-divLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#f5a623" stopOpacity="0" />
                    <stop offset="30%"  stopColor="#f5a623" />
                    <stop offset="70%"  stopColor="#f5a623" />
                    <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
                </linearGradient>

                <filter id="logo-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="logo-textShadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#f5a623" floodOpacity="0.35" />
                </filter>

                <clipPath id="logo-yClip">
                    <rect x="0" y="0" width="496" height="180" />
                </clipPath>
                {/* Clips the whole logo to rounded corners — rx scaled for rendered size */}
                <clipPath id="logo-outerClip">
                    <rect x="0" y="0" width="680" height="180" rx="28" />
                </clipPath>
            </defs>

            <g clipPath="url(#logo-outerClip)">

            {/* Gold panel behind JIM TOUCH */}
            <rect x="0" y="0" width="494" height="180" fill="url(#logo-spotlight)" />

            {/* Diagonal accent slashes (very subtle) */}
            <polygon points="440,4 468,4 438,176 410,176" fill="#f5a623" opacity="0.05" />

            {/* Amber top shimmer line */}
            <rect x="4" y="4" width="490" height="1.5" fill="url(#logo-divLine)" opacity="0.5" />

            {/* JIM TOUCH — amber gradient, glowing */}
            <text
                clipPath="url(#logo-yClip)"
                x="10" y="120"
                fontFamily="Aeonik, 'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontWeight="900"
                fontSize="90"
                fill="url(#logo-textGrad)"
                textLength="476"
                lengthAdjust="spacingAndGlyphs"
                filter="url(#logo-textShadow)"
            >JIM TOUCH</text>

            {/* Subtle highlight layer */}
            <text
                clipPath="url(#logo-yClip)"
                x="10" y="128"
                fontFamily="Arial Black, Impact, sans-serif"
                fontWeight="900"
                fontSize="90"
                fill="#ffbe3d"
                textLength="476"
                lengthAdjust="spacingAndGlyphs"
                opacity="0.06"
            >JIM TOUCH</text>

            {/* Vertical amber accent line */}
            <rect x="500" y="20" width="1" height="140" fill="#f5a623" opacity="0.25" />

            {/* Red background panel for PRIVATE LIMITED */}
            <rect x="494" y="0" width="186" height="180" fill="url(#logo-redPanel)" />
            {/* Corner accent triangles */}
            <polygon points="494,4 540,4 494,50" fill="#FFD700" opacity="0.12" />
            <polygon points="676,130 676,176 630,176" fill="#FFD700" opacity="0.12" />
            {/* Right border accent line */}
            <rect x="672" y="20" width="1" height="140" fill="#f5a623" opacity="0.25" />

            {/* PRIVATE + divider + LIMITED section */}
            <text
                x="585" y="80"
                textAnchor="middle"
                fontFamily="Arial Black, Impact, sans-serif"
                fontWeight="900"
                fontSize="22"
                fill="#FFFFFF"
                letterSpacing="4"
            >PRIVATE</text>

            {/* Divider with gold dots */}
            <rect x="515" y="89" width="140" height="1.5" fill="url(#logo-divLine)" opacity="0.8" />
            <circle cx="515" cy="90" r="2.5" fill="#f5a623" />
            <circle cx="655" cy="90" r="2.5" fill="#f5a623" />

            <text
                x="585" y="116"
                textAnchor="middle"
                fontFamily="Arial Black, Impact, sans-serif"
                fontWeight="900"
                fontSize="22"
                fill="#FFFFFF"
                letterSpacing="4"
            >LIMITED</text>

            </g>
        </svg>
    );
}
