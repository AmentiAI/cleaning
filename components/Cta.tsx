import Link from "next/link";
import { site } from "@/lib/site";

export default function Cta({
  title,
  text,
  primaryLabel = "Get My Free Quote",
  primaryHref = "/contact",
  secondary,
}: {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondary?: { label: string; href: string; tel?: boolean };
}) {
  return (
    <div className="cta reveal">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="cta__actions">
        <Link className="btn btn--gold btn--lg" href={primaryHref}>
          {primaryLabel}
        </Link>
        {secondary &&
          (secondary.tel ? (
            <a className="btn btn--outline btn--lg" href={secondary.href}>
              {secondary.label}
            </a>
          ) : (
            <Link className="btn btn--outline btn--lg" href={secondary.href}>
              {secondary.label}
            </Link>
          ))}
      </div>
    </div>
  );
}

export function CallCta() {
  return (
    <a className="btn btn--outline btn--lg" href={site.phoneHref}>
      Call {site.phoneDisplay}
    </a>
  );
}
