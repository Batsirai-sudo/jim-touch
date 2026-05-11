"use client";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      {/* ── Left: info ── */}
      <div className={styles.left}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Get In Touch</span>
        </div>

        <h2 className={styles.heading}>
          Let's get your<br />equipment running.
        </h2>

        <p className={styles.subCopy}>
          Whether it's a scheduled service, emergency breakdown,
          or a long-term maintenance contract — our team is ready
          to respond across Zimbabwe.
        </p>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Phone</span>
            <a href="tel:+263774805156,+263710370870" className={styles.detailValue}>+263 774 805 156</a>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Email</span>
            <a href="mailto:jimtouch.cat@gmail.com" className={styles.detailValue}>jimtouch.cat@gmail.com</a>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>No. 39 Highfields Road, Harare</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Hours</span>
            <span className={styles.detailValue}>Mon – Fri, 7:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* ── Right: form ── */}
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>

        <div className={styles.row}>
          <div className={styles.field}>
            <input className={styles.input} type="text" placeholder=" " id="firstName" />
            <label className={styles.label} htmlFor="firstName">First Name</label>
          </div>
          <div className={styles.field}>
            <input className={styles.input} type="text" placeholder=" " id="lastName" />
            <label className={styles.label} htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <div className={styles.field}>
          <input className={styles.input} type="email" placeholder=" " id="email" />
          <label className={styles.label} htmlFor="email">Email Address</label>
        </div>

        <div className={styles.field}>
          <input className={styles.input} type="tel" placeholder=" " id="phone" />
          <label className={styles.label} htmlFor="phone">Phone Number</label>
        </div>

        <div className={styles.field}>
          <input className={styles.input} type="text" placeholder=" " id="service" />
          <label className={styles.label} htmlFor="service">Service Required</label>
        </div>

        <div className={styles.field}>
          <textarea className={styles.textarea} placeholder=" " id="message" />
          <label className={styles.label} htmlFor="message">Message</label>
        </div>

        <button type="submit" className={styles.submit}>
          Send Message
          <span className={styles.submitArrow}>→</span>
        </button>
      </form>

    </section>
  );
}
