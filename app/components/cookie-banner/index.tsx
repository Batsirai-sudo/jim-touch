"use client";
import { useState, useEffect } from "react";
import styles from "./cookie-banner.module.scss";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner}>
            <span className={styles.icon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
                    <circle cx="8.5" cy="8.5" r="0.8" fill="currentColor" stroke="none" />
                    <circle cx="15" cy="9" r="0.8" fill="currentColor" stroke="none" />
                    <circle cx="9" cy="15" r="0.8" fill="currentColor" stroke="none" />
                </svg>
            </span>

            <p className={styles.text}>
                This website uses cookies to enhance your browsing experience,
                analyze traffic, and improve our services.
            </p>

            <div className={styles.actions}>
                <button className={styles.decline} onClick={handleDecline}>
                    Decline
                </button>
                <button className={styles.accept} onClick={handleAccept}>
                    Accept
                </button>
            </div>
        </div>
    );
}
