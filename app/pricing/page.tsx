import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { CheckThin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, upfront cleaning prices from O'Neill Cleaning. Choose Essential, Signature, or Premium plans, or request a custom quote for your home or business.",
};

const tiers = [
  {
    name: "Essential",
    desc: "Perfect for maintaining a tidy home between deeper cleans.",
    price: "$119",
    unit: "/ visit",
    featured: false,
    cta: "Choose Essential",
    features: [
      "Up to 2 bed / 1 bath",
      "Kitchen & bathroom clean",
      "Dusting, vacuum & mop",
      "Eco-friendly products",
    ],
  },
  {
    name: "Signature",
    desc: "Our best-value plan for a consistently immaculate home.",
    price: "$189",
    unit: "/ visit",
    featured: true,
    cta: "Choose Signature",
    features: [
      "Up to 4 bed / 2 bath",
      "Everything in Essential",
      "Interior windows & sills",
      "Baseboards & fixtures",
      "Priority scheduling",
    ],
  },
  {
    name: "Premium",
    desc: "A comprehensive deep clean for larger homes and special occasions.",
    price: "$289",
    unit: "/ visit",
    featured: false,
    cta: "Choose Premium",
    features: [
      "5+ bed / 3+ bath",
      "Everything in Signature",
      "Inside oven & fridge",
      "Cabinet interiors",
      "Full deep-clean detail",
    ],
  },
];

const faqs = [
  {
    q: "Do I need to provide cleaning supplies?",
    a: "No — our teams arrive fully equipped with professional-grade, eco-friendly products and equipment. If you'd prefer we use your own supplies (for allergies or specific surfaces), just let us know.",
  },
  {
    q: "How is the final price determined?",
    a: "The listed plans are starting estimates. Your final quote depends on home size, number of rooms, current condition, and location. We confirm an exact price before any work begins — never a surprise on the bill.",
  },
  {
    q: "Can I get a discount for recurring cleans?",
    a: "Yes. Weekly and bi-weekly plans save up to 20% compared to one-time visits, and commercial contracts qualify for additional volume discounts.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Life happens. You can reschedule or cancel free of charge up to 24 hours before your appointment. Same-day changes may incur a small fee.",
  },
  {
    q: "Are you insured?",
    a: "Absolutely. O'Neill Cleaning is fully licensed, bonded, and insured, and every cleaner is background-checked and trained.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumb="Pricing"
        title="Simple, transparent pricing"
        text="No hidden fees, no surprises. Pick a plan that fits, or ask for a tailored quote — the first estimate is always free."
      />

      <section className="section">
        <div className="container">
          <div className="tiers">
            {tiers.map((t) => (
              <div className={`tier reveal${t.featured ? " tier--featured" : ""}`} key={t.name}>
                {t.featured && <span className="tier__badge">Most popular</span>}
                <h3>{t.name}</h3>
                <p className="tier__desc">{t.desc}</p>
                <div className="tier__price">
                  <b>{t.price}</b> <span>{t.unit}</span>
                </div>
                <ul>
                  {t.features.map((f) => (
                    <li key={f}>
                      <CheckThin /> {f}
                    </li>
                  ))}
                </ul>
                <Link className={`btn ${t.featured ? "btn--brand" : "btn--ghost"}`} href="/contact">
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center" style={{ color: "var(--muted)", marginTop: 26, fontSize: ".95rem" }}>
            Prices are starting estimates and vary by home size, condition, and location.{" "}
            <strong>Save up to 20%</strong> with a recurring weekly or bi-weekly plan.
          </p>
        </div>
      </section>

      {/* CUSTOM QUOTE */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--slate-200)" }}>
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Business &amp; one-offs</span>
            <h2>Need a custom quote?</h2>
            <p className="lead">
              Commercial spaces, move in/out cleans, carpet care, and specialty jobs are all
              priced individually based on your exact needs.
            </p>
            <ul className="feature-list">
              <li>
                <span className="fi"><CheckThin /></span>
                <div><h4>Free on-site or virtual estimate</h4><p>Accurate pricing with zero obligation.</p></div>
              </li>
              <li>
                <span className="fi"><CheckThin /></span>
                <div><h4>Volume & contract discounts</h4><p>Better rates for recurring commercial contracts.</p></div>
              </li>
              <li>
                <span className="fi"><CheckThin /></span>
                <div><h4>Flexible invoicing</h4><p>Simple billing that suits your business.</p></div>
              </li>
            </ul>
            <Link className="btn btn--dark btn--lg" href="/contact">
              Request a Custom Quote
            </Link>
          </div>
          <div className="reveal">
            <div className="cta cta--left">
              <h2 style={{ fontSize: "1.6rem" }}>100% Satisfaction Guarantee</h2>
              <p style={{ margin: "0 0 18px" }}>
                If you&apos;re not thrilled with any area of your clean, let us know within 24 hours
                and we&apos;ll return to re-clean it — completely free. No quibbles, no extra cost.
              </p>
              <Link className="btn btn--brand" href="/contact">
                Book with confidence
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Good to know</span>
            <h2>Pricing questions, answered</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details className="reveal" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Cta
            title="Get your exact price today"
            text="Free quotes, honest pricing, and same-week availability in most areas."
            secondary={{ label: `Call ${site.phoneDisplay}`, href: site.phoneHref, tel: true }}
          />
        </div>
      </section>
    </>
  );
}
