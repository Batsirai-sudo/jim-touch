"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./search-overlay.module.scss";

const SUGGESTIONS = [
    "Equipment repair & maintenance",
    "Mining machinery servicing",
    "Construction equipment overhaul",
    "Emergency on-site support",
    "Hydraulic system repair",
    "Engine diagnostics",
    "Get a quote",
    "Contact us",
];

interface SearchOverlayProps {
    open: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 80);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setQuery("");
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const filtered = query.length > 0
        ? SUGGESTIONS.filter(s => s.toLowerCase().includes(query.toLowerCase()))
        : SUGGESTIONS;

    if (!open) return null;

    return (
        <>
            {/* blur layer — position:fixed, no parent stacking context so backdrop-filter works */}
            <div className={styles.backdrop} onClick={onClose} />

            {/* panel layer — separate fixed element, sits above blur layer */}
            <div className={styles.container} onClick={onClose}>
                <div className={styles.panel} onClick={e => e.stopPropagation()}>
                    <div className={styles.inputWrap}>
                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            ref={inputRef}
                            className={styles.input}
                            type="text"
                            placeholder="Search services, ask a question…"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        {query && (
                            <button className={styles.clear} onClick={() => setQuery("")} aria-label="Clear">
                                ✕
                            </button>
                        )}
                    </div>

                    <div className={styles.results}>
                        {filtered.length > 0 ? (
                            filtered.map((s, i) => (
                                <a
                                    key={i}
                                    href="#contact"
                                    className={styles.result}
                                    onClick={onClose}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                                    </svg>
                                    {s}
                                </a>
                            ))
                        ) : (
                            <div className={styles.empty}>
                                No results — <a href="#contact" onClick={onClose}>send us a message →</a>
                            </div>
                        )}
                    </div>

                    <div className={styles.footer}>
                        <span>Press <kbd>Esc</kbd> to close</span>
                    </div>
                </div>
            </div>
        </>
    );
}
