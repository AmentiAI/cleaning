import Link from "next/link";
import Script from "next/script";
import { services, site } from "@/lib/site";
import { ArtInterior } from "@/components/Art";
import Cta from "@/components/Cta";
import {
  Check,
  Arrow,
  Shield,
  Dollar,
  Clock,
  Star,
  ShieldCheck,
  Heart,
  CircleCheck,
  House,
  Office,
  MoveHouse,
  Sparkle,
  Carpet,
  Window,
} from "@/components/Icons";

const cardIcon = {
  House: <House />,
  Office: <Office />,
  MoveHouse: <MoveHouse />,
  Sparkle: <Sparkle />,
  Carpet: <Carpet />,
  Window: <Window />,
} as const;

const included = [
  "Vetted, background-checked cleaners",
  "Eco-friendly, family-safe products",
  "Fully insured & bonded service",
  "100% satisfaction re-clean promise",
  "Flexible scheduling, 7 days a week",
];

const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    role: "Residential client",
    text: "O'Neil transformed our home. The team is punctual, thorough, and genuinely lovely. I finally get my weekends back!",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Office manager",
    text: "We switched our office cleaning to O'Neil and never looked back. Reliable, professional, and always spotless.",
  },
  {
    initials: "AL",
    name: "Amara L.",
    role: "Move-out client",
    text: "Booked a move-out deep clean and got my full deposit back. Worth every penny — highly recommend.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow eyebrow--light">Trusted local cleaning experts</span>
            <h1>
              A spotless space, <em>without the effort.</em>
            </h1>
            <p className="hero__sub">
              O&apos;Neil Cleaning brings premium, reliable cleaning to homes and businesses —
              from weekly upkeep to top-to-bottom deep cleans. Insured, background-checked, and
              100% satisfaction guaranteed.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--gold btn--lg" href="/contact">
                Get Your Free Quote
              </Link>
              <Link className="btn btn--outline btn--lg" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="hero__trust">
              <div><b>500+</b><span>Happy clients</span></div>
              <div><b>4.9★</b><span>Average rating</span></div>
              <div><b>10 yrs</b><span>In business</span></div>
            </div>
          </div>

          <div className="hero__card">
            <h3>
              <span className="check check--lg"><Check /></span> What&apos;s always included
            </h3>
            <ul>
              {included.map((item) => (
                <li key={item}>
                  <span className="check"><Check /></span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TEST: TeeLink booking widget — remove this whole block when done ===== */}
      <section className="section--tight" id="widget-test">
        <div className="container">
          <div data-teelink-widget />
        </div>
      </section>
      <Script
        src="https://teetime-ivory.vercel.app/widget.js"
        data-api-base="https://teetime-ivory.vercel.app/api/widget/cmqznfzvj0005fa5goldbkh11"
        data-course-id="cmqznfzvj0005fa5goldbkh11"
        data-theme="light"
        strategy="afterInteractive"
      />
      {/* ===== END TEST widget ===== */}

      {/* TRUST STRIP */}
      <div className="strip">
        <div className="container strip__row">
          <span><Shield /> Licensed &amp; Insured</span>
          <span><Dollar /> Upfront, Honest Pricing</span>
          <span><Clock /> On-Time, Every Time</span>
          <span><Star /> 5-Star Rated Locally</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Cleaning services for every space</h2>
            <p>
              Whether it&apos;s your home, your office, or a one-off deep clean, our trained
              teams handle it with care and precision.
            </p>
          </div>
          <div className="grid grid--3">
            {services.map((s) => (
              <article className="card reveal" key={s.id}>
                <div className="card__icon">{cardIcon[s.icon]}</div>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link className="card__link" href={`/services#${s.id}`}>
                  Learn more <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        className="section"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--slate-200)",
          borderBottom: "1px solid var(--slate-200)",
        }}
      >
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Why O&apos;Neil</span>
            <h2>Cleaning you can genuinely rely on</h2>
            <p className="lead">
              We treat every home and business like our own. That means consistent teams,
              careful attention to detail, and a standard we never lower.
            </p>
            <ul className="feature-list">
              <li>
                <span className="fi"><ShieldCheck /></span>
                <div>
                  <h4>Vetted &amp; insured professionals</h4>
                  <p>Every cleaner is background-checked, trained, and fully insured for your peace of mind.</p>
                </div>
              </li>
              <li>
                <span className="fi"><Heart /></span>
                <div>
                  <h4>Eco-friendly products</h4>
                  <p>Safe, non-toxic supplies that protect your family, pets, and the planet.</p>
                </div>
              </li>
              <li>
                <span className="fi"><CircleCheck /></span>
                <div>
                  <h4>Satisfaction guaranteed</h4>
                  <p>Not happy with a spot? We&apos;ll come back and re-clean it free within 24 hours.</p>
                </div>
              </li>
            </ul>
            <Link className="btn btn--dark" href="/about" style={{ marginTop: 8 }}>
              More about us
            </Link>
          </div>
          <div className="reveal">
            <ArtInterior />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section--tight band">
        <div className="container">
          <div className="stats">
            <div className="stat reveal"><b>500+</b><span>Homes &amp; offices cleaned</span></div>
            <div className="stat reveal"><b>98%</b><span>Client retention rate</span></div>
            <div className="stat reveal"><b>4.9/5</b><span>Average review score</span></div>
            <div className="stat reveal"><b>24hr</b><span>Re-clean guarantee</span></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Simple process</span>
            <h2>Booking is effortless</h2>
            <p>Three easy steps stand between you and a spotless space.</p>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="step__num">1</div>
              <h3>Request a quote</h3>
              <p>Tell us about your space and needs online or by phone. We&apos;ll send a clear, no-obligation price.</p>
            </div>
            <div className="step reveal">
              <div className="step__num">2</div>
              <h3>Pick your schedule</h3>
              <p>Choose a one-time clean or a recurring plan at a day and time that works for you.</p>
            </div>
            <div className="step reveal">
              <div className="step__num">3</div>
              <h3>Relax &amp; enjoy</h3>
              <p>Our vetted team arrives on time and leaves your space immaculate — guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--slate-200)" }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Client love</span>
            <h2>Trusted by hundreds of neighbors</h2>
          </div>
          <div className="grid grid--3">
            {testimonials.map((t) => (
              <figure className="quote reveal" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <figcaption className="quote__who">
                  <span className="av">{t.initials}</span>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Cta
            title="Ready for a spotless space?"
            text="Get a free, no-obligation quote today. Same-week availability in most areas."
            primaryLabel="Get My Free Quote"
            secondary={{ label: `Call ${site.phoneDisplay}`, href: site.phoneHref, tel: true }}
          />
        </div>
      </section>
    </>
  );
}
