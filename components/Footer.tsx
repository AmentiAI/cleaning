import Link from "next/link";
import { site } from "@/lib/site";
import { LeafMarkSolid, Facebook, Instagram, Google } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="brand" href="/">
              <span className="brand__mark" aria-hidden="true">
                <LeafMarkSolid />
              </span>
              <span>
                <span className="brand__name">
                  O&apos;Neil<span> Cleaning</span>
                </span>
              </span>
            </Link>
            <p>
              Premium residential &amp; commercial cleaning you can count on — insured,
              dependable, and detail-obsessed.
            </p>
            <div className="socials" style={{ marginTop: 14 }}>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Google"><Google /></a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services#residential">Residential</Link></li>
              <li><Link href="/services#commercial">Commercial</Link></li>
              <li><Link href="/services#deep">Deep Cleaning</Link></li>
              <li><Link href="/services#move">Move In / Out</Link></li>
              <li><Link href="/services#carpet">Carpet &amp; Specialty</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span style={{ color: "var(--slate-400)" }}>{site.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span>Licensed · Insured · Bonded</span>
        </div>
      </div>
    </footer>
  );
}
