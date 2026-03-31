export default function CtaSection() {
  return (
    <section className="jt-cta" id="contact">
      <div className="jt-cta__bg" aria-hidden />
      <div className="jt-cta__overlay" aria-hidden />

      <div className="jt-container jt-cta__inner">
        <span className="jt-label jt-label--light">Get In Touch</span>
        <h2 className="jt-cta__heading">
          Let&rsquo;s Build the Right<br />
          Construction Solution<br />
          for You
        </h2>
        <a href="mailto:info@jimtouch.co.zw" className="jt-cta__email">
          info@jimtouch.co.zw
        </a>
        <div className="jt-cta__actions">
          <a href="mailto:info@jimtouch.co.zw" className="jt-btn jt-btn--primary">
            Send Us a Message →
          </a>
          <a href="tel:+263000000000" className="jt-btn jt-btn--ghost">
            +263 000 000 000
          </a>
        </div>
      </div>
    </section>
  );
}
