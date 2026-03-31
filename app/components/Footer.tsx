import { Logo } from "./Logo";

const NAV = [
  { heading: "Company", links: ["About Us", "Our Story", "Careers", "News"] },
  { heading: "Services", links: ["Residential", "Commercial", "Civil Engineering", "Infrastructure", "Renovation"] },
  { heading: "Resources", links: ["Projects", "Case Studies", "Partners", "FAQ"] },
  { heading: "Contact", links: ["Harare, Zimbabwe", "info@jimtouch.co.zw", "+263 000 000 000", "Mon–Fri 8am–5pm"] },
];

export default function Footer() {
  return (
    <footer className="jt-footer">
      <div className="jt-footer__bg" aria-hidden />
      <div className="jt-footer__overlay" aria-hidden />

      <div className="jt-container jt-footer__inner">

        {/* Top row */}
        <div className="jt-footer__top">
          <div className="jt-footer__brand">
            <Logo size={36} wordmark />
            <p className="jt-footer__tagline">
              Building Zimbabwe&rsquo;s future — one project at a time.
            </p>
            <div className="jt-footer__socials">
              {["in", "tw", "fb"].map((s) => (
                <a key={s} href="#" className="jt-footer__social" aria-label={s}>{s}</a>
              ))}
            </div>
          </div>

          {NAV.map((col) => (
            <div key={col.heading} className="jt-footer__col">
              <h4 className="jt-footer__col-heading">{col.heading}</h4>
              <ul className="jt-footer__links">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="jt-footer__link">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="jt-footer__bottom">
          <span>© {new Date().getFullYear()} Jim Touch Pvt Ltd. All rights reserved.</span>
          <div className="jt-footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
