import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import { Phone, Mail, Pin, Clock } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Get a free, no-obligation cleaning quote from O'Neil Cleaning. Call, email, or fill out the form and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get your free quote"
        text="Tell us a little about your space and we'll get back to you within one business day with a no-obligation price."
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Info column */}
          <div className="reveal">
            <span className="eyebrow">Talk to us</span>
            <h2>We&apos;d love to help</h2>
            <p className="lead">
              Prefer to chat? Reach out any way you like — a real person always answers.
            </p>
            <ul className="info-list">
              <li>
                <span className="ii"><Phone /></span>
                <div>
                  <b>Call or text</b>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </div>
              </li>
              <li>
                <span className="ii"><Mail /></span>
                <div>
                  <b>Email</b>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <span className="ii"><Pin /></span>
                <div>
                  <b>Service area</b>
                  <span>{site.area}</span>
                </div>
              </li>
              <li>
                <span className="ii"><Clock /></span>
                <div>
                  <b>Hours</b>
                  <span>{site.hours}</span>
                </div>
              </li>
            </ul>

            <div className="cta cta--left" style={{ marginTop: 28, padding: 28 }}>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: 6 }}>
                Prefer a fast answer?
              </h3>
              <p style={{ margin: "0 0 16px", color: "var(--slate-300)" }}>
                Call us now and we&apos;ll often quote you on the spot.
              </p>
              <a className="btn btn--gold" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="reveal">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
