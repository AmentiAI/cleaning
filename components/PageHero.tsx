import Link from "next/link";

export default function PageHero({
  crumb,
  title,
  text,
}: {
  crumb: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumbs">
          <Link href="/">Home</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
