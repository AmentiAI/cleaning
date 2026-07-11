"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, nav } from "@/lib/site";
import { LeafMark, Menu } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand__mark" aria-hidden="true">
            <LeafMark />
          </span>
          <span>
            <span className="brand__name">
              O&apos;Neil<span> Cleaning</span>
            </span>
            <span className="brand__tag">{site.tagline}</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu />
        </button>

        <ul className={`nav__links${open ? " open" : ""}`} id="navLinks">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={active ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="nav__cta">
            <Link className="btn btn--gold" href="/contact" onClick={() => setOpen(false)}>
              Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
