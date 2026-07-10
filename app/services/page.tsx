import type { Metadata } from "next";
import { services } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { CheckThin } from "@/components/Icons";
import {
  ArtLiving,
  ArtOffice,
  ArtSparkle,
  ArtEmptyHome,
  ArtCarpet,
  ArtWindows,
} from "@/components/Art";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore O'Neil Cleaning services: residential, commercial, deep cleaning, move in/out, carpet & upholstery, and window & specialty cleaning. Book a free quote.",
};

const art: Record<string, () => React.ReactElement> = {
  residential: ArtLiving,
  commercial: ArtOffice,
  deep: ArtSparkle,
  move: ArtEmptyHome,
  carpet: ArtCarpet,
  window: ArtWindows,
};

const included = [
  { h: "Kitchen", p: "Counters, sink, stovetop, exterior of appliances, floors, and trash." },
  { h: "Bathrooms", p: "Toilet, shower, tub, sink, mirrors, tiles, and floors sanitized." },
  { h: "Living spaces", p: "Dusting, vacuuming, mopping, surfaces, and tidying." },
  { h: "Bedrooms", p: "Dusting, floors, mirrors, and optional bed-making." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Cleaning services, done right"
        text="From routine upkeep to intensive specialty work, our trained teams cover every corner of your home or business."
      />

      <section className="section">
        <div className="container" style={{ display: "grid", gap: 40 }}>
          {services.map((s, i) => {
            const Illustration = art[s.id];
            const reverse = i % 2 === 1;
            return (
              <article
                className={`split reveal${reverse ? " reverse" : ""}`}
                id={s.id}
                key={s.id}
              >
                <div>
                  <span className="tag">{s.tag}</span>
                  <h2>{s.title}</h2>
                  <p className="lead">{s.lead}</p>
                  <ul className="feature-list">
                    {s.points.map((pt) => (
                      <li key={pt.h}>
                        <span className="fi"><CheckThin /></span>
                        <div>
                          <h4>{pt.h}</h4>
                          <p>{pt.p}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <Illustration />
              </article>
            );
          })}
        </div>
      </section>

      {/* INCLUDED CHECKLIST */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--slate-200)" }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The details</span>
            <h2>What&apos;s included as standard</h2>
            <p>Every clean follows our proven checklist — nothing gets forgotten.</p>
          </div>
          <div className="grid grid--4">
            {included.map((c) => (
              <div className="card reveal" key={c.h}>
                <h3 style={{ fontSize: "1.05rem" }}>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Cta
            title="Not sure which service you need?"
            text="Tell us about your space and we'll recommend the perfect clean — with a free quote to match."
            secondary={{ label: "See Pricing", href: "/pricing" }}
          />
        </div>
      </section>
    </>
  );
}
