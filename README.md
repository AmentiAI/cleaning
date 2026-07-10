# O'Neil Cleaning — Website

A fast, responsive marketing website for O'Neil Cleaning, built with **Next.js 15**
(App Router) + **React 19** + **TypeScript**.

## Run it

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/
  layout.tsx          Root layout — header, footer, metadata, scroll-reveal
  globals.css         Full design system (CSS variables + component styles)
  page.tsx            Home
  services/page.tsx   Services
  pricing/page.tsx    Pricing + FAQ
  about/page.tsx      About
  contact/page.tsx    Contact + quote form
components/
  Header.tsx          Sticky nav w/ mobile menu + active link  (client)
  Footer.tsx          Site footer
  QuoteForm.tsx       Quote request form                       (client)
  ScrollReveal.tsx    IntersectionObserver reveal animation    (client)
  PageHero.tsx        Reusable inner-page hero
  Cta.tsx             Reusable call-to-action band
  Art.tsx             Inline-SVG placeholder illustrations
  Icons.tsx           All SVG icons as components
lib/
  site.ts             ⭐ Business details + services data (edit here)
```

## Customize (one place for most of it)

Open **`lib/site.ts`** and edit the `site` object — phone, email, hours, service
area — and the `services` array. These flow through every page automatically.

Other things to update:

- **Prices**: `app/pricing/page.tsx` (`tiers` array)
- **Stats / testimonials**: `app/page.tsx`
- **Colors**: CSS variables at the top of `app/globals.css` (`:root`) —
  change `--gold` / `--navy-*` to rebrand instantly
- **Social links**: the `#` hrefs in `components/Footer.tsx`
- **Photos**: pages use built-in SVG placeholders (`components/Art.tsx`).
  Replace an `<ArtLiving />` etc. with a Next.js `<Image>` when you have real photos.

## Make the contact form actually send

`components/QuoteForm.tsx` currently shows a success message client-side only.
To receive submissions, either:

1. Point it at a form service (e.g. Formspree) — change `handleSubmit` to `fetch`
   your endpoint with the form data, or
2. Add a Next.js Route Handler at `app/api/quote/route.ts` and POST to it.

## Deploy

Deploys as-is to **Vercel** (zero config) or any Node host via `npm run build`
&amp; `npm start`.
