"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, nav } from "@/lib/site";
import { Menu } from "@/components/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        {/* The logo already carries the wordmark and tagline, so it stands alone
            here rather than being repeated as text beside itself. */}
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <Image
            className="brand__logo"
            src="/logo.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1133}
            height={876}
            // Displayed ~85px wide, so cap the srcset rather than shipping the
            // full-size render for an 86px-tall bar.
            sizes="(max-width: 560px) 70px, 90px"
            priority
          />
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
            <Link className="btn btn--brand" href="/contact" onClick={() => setOpen(false)}>
              Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
