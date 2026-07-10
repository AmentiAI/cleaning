import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { ArtTeam } from "@/components/Art";
import { ShieldCheck, Sparkle, Heart, Clock, Dollar, Calendar, Star } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind O'Neil Cleaning — a family-run team of vetted, insured cleaning professionals dedicated to spotless spaces and honest service.",
};

const values = [
  {
    icon: <ShieldCheck />,
    title: "Trust & integrity",
    text: "Background-checked, insured professionals who respect your home and your time — every visit.",
  },
  {
    icon: <Sparkle />,
    title: "Uncompromising quality",
    text: "We follow detailed checklists and hold ourselves to a standard we'd want in our own homes.",
  },
  {
    icon: <Heart />,
    title: "Care for people & planet",
    text: "Eco-friendly, family-safe products that are kind to your loved ones and the environment.",
  },
];

const reasons = [
  {
    icon: <Clock />,
    title: "Consistent, reliable teams",
    text: "The same trusted faces who learn your space and preferences over time.",
  },
  {
    icon: <Dollar />,
    title: "Honest, upfront pricing",
    text: "Clear quotes with no hidden fees — you always know the price before we start.",
  },
  {
    icon: <Calendar />,
    title: "Flexible scheduling",
    text: "One-time or recurring, weekdays or weekends — cleaning that fits your life.",
  },
  {
    icon: <Star />,
    title: "Guaranteed satisfaction",
    text: "Not perfect? We re-clean it free within 24 hours — no questions asked.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="The team behind the shine"
        text="O'Neil Cleaning was built on a simple belief: everyone deserves a clean space and honest, dependable service."
      />

      {/* STORY */}
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2>Family-founded, community-trusted</h2>
            <p>
              O&apos;Neil Cleaning started over a decade ago with one van, a bucket, and a
              promise to treat every home like our own. What began as a small family operation
              has grown into a trusted local team — but our standards haven&apos;t changed one bit.
            </p>
            <p>
              We&apos;re proud to be the cleaners that neighbors recommend to neighbors. Every
              client relationship is built on reliability, respect, and results you can see (and
              feel) the moment you walk through the door.
            </p>
            <p>
              Today we serve hundreds of homes and businesses, and we still answer every call
              ourselves. When you book O&apos;Neil, you&apos;re not a ticket number — you&apos;re
              part of the family.
            </p>
            <Link className="btn btn--dark" href="/contact" style={{ marginTop: 6 }}>
              Work with us
            </Link>
          </div>
          <div className="reveal">
            <ArtTeam />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="section"
        style={{
          background: "#fff",
          borderTop: "1px solid var(--slate-200)",
          borderBottom: "1px solid var(--slate-200)",
        }}
      >
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What drives us</span>
            <h2>Values we never cut corners on</h2>
          </div>
          <div className="grid grid--3">
            {values.map((v) => (
              <div className="card reveal" key={v.title}>
                <div className="card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section--tight band">
        <div className="container">
          <div className="stats">
            <div className="stat reveal"><b>10+</b><span>Years serving the community</span></div>
            <div className="stat reveal"><b>500+</b><span>Homes &amp; offices trusted</span></div>
            <div className="stat reveal"><b>25+</b><span>Vetted team members</span></div>
            <div className="stat reveal"><b>4.9★</b><span>Average customer rating</span></div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The O&apos;Neil difference</span>
            <h2>Why clients stay with us</h2>
            <p>It&apos;s not just about clean — it&apos;s about how effortless and dependable we make it.</p>
          </div>
          <div className="grid grid--2">
            {reasons.map((r) => (
              <div className="card card--row reveal" key={r.title}>
                <div className="card__icon card__icon--inline">{r.icon}</div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Cta
            title="Let's make your space shine"
            text="Join hundreds of happy homes and businesses who trust O'Neil Cleaning."
            secondary={{ label: "See Our Services", href: "/services" }}
          />
        </div>
      </section>
    </>
  );
}
