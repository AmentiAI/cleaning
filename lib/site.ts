// Central business details — edit these once and they update across the whole site.
export const site = {
  name: "O'Neil Cleaning",
  tagline: "Premium Clean · Every Time",
  phoneDisplay: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@oneilcleaning.com",
  hours: "Mon–Sat, 8:00am – 6:00pm",
  area: "Your City & surrounding suburbs",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type ServiceId =
  | "residential"
  | "commercial"
  | "deep"
  | "move"
  | "carpet"
  | "window";

export interface Service {
  id: ServiceId;
  icon: "House" | "Office" | "MoveHouse" | "Sparkle" | "Carpet" | "Window";
  title: string;
  short: string;
  tag: string;
  lead: string;
  points: { h: string; p: string }[];
}

export const services: Service[] = [
  {
    id: "residential",
    icon: "House",
    title: "Residential Cleaning",
    short: "Weekly, bi-weekly, or monthly home cleaning that keeps every room fresh, tidy, and welcoming.",
    tag: "Homes & apartments",
    lead: "Keep your home consistently fresh with cleaning tailored to your lifestyle — weekly, bi-weekly, or monthly.",
    points: [
      { h: "Kitchens & bathrooms", p: "Sanitized surfaces, sinks, fixtures, and floors — the rooms that matter most." },
      { h: "Living areas & bedrooms", p: "Dusting, vacuuming, mopping, and tidying so every room feels calm and cared for." },
      { h: "Custom checklists", p: "Tell us your priorities and we'll build the clean around them." },
    ],
  },
  {
    id: "commercial",
    icon: "Office",
    title: "Commercial & Offices",
    short: "Dependable office and retail cleaning that keeps your workplace professional, hygienic, and productive.",
    tag: "Offices & businesses",
    lead: "A clean workplace boosts morale, health, and impressions. We keep your business looking its best, on your schedule.",
    points: [
      { h: "Offices & workspaces", p: "Desks, common areas, kitchens, and restrooms cleaned and sanitized." },
      { h: "Retail & waiting rooms", p: "A spotless first impression for every customer who walks in." },
      { h: "After-hours service", p: "We work around your business so operations never skip a beat." },
    ],
  },
  {
    id: "deep",
    icon: "Sparkle",
    title: "Deep Cleaning",
    short: "An intensive, detail-focused clean that reaches the places routine cleaning misses.",
    tag: "Intensive",
    lead: "A meticulous, top-to-bottom reset that tackles built-up grime in the places routine cleaning can't reach.",
    points: [
      { h: "Behind & under appliances", p: "The spots that usually get skipped — scrubbed and spotless." },
      { h: "Baseboards, vents & fixtures", p: "Detailed attention to dust traps and hard-to-reach areas." },
      { h: "Grout & tile revival", p: "Bathrooms and kitchens restored to a like-new shine." },
    ],
  },
  {
    id: "move",
    icon: "MoveHouse",
    title: "Move In / Move Out",
    short: "Top-to-bottom cleans for empty properties — perfect for tenants, landlords, and realtors.",
    tag: "Tenants · Landlords · Realtors",
    lead: "Handing over keys or moving in? We leave properties immaculate — ideal for securing deposits and impressing buyers.",
    points: [
      { h: "Full property clean", p: "Inside cabinets, closets, drawers, and appliances — nothing missed." },
      { h: "Deposit-back ready", p: "Cleaned to inspection standard so you get every dollar back." },
      { h: "Fast turnaround", p: "Flexible scheduling to fit tight moving timelines." },
    ],
  },
  {
    id: "carpet",
    icon: "Carpet",
    title: "Carpet & Upholstery",
    short: "Deep hot-water extraction that lifts stains, odors, and allergens from carpets and furniture.",
    tag: "Specialty",
    lead: "Professional hot-water extraction lifts deep stains, odors, and allergens — reviving carpets, rugs, and furniture.",
    points: [
      { h: "Stain & odor removal", p: "Targeted treatment for spills, pets, and everyday wear." },
      { h: "Allergen reduction", p: "Deep extraction removes dust mites and trapped particles." },
      { h: "Fast-dry methods", p: "Back to normal quickly with low-moisture techniques." },
    ],
  },
  {
    id: "window",
    icon: "Window",
    title: "Window & Specialty",
    short: "Streak-free windows, pressure washing, and post-renovation cleanup for a flawless finish.",
    tag: "Finishing touches",
    lead: "Streak-free windows, pressure washing, and post-construction cleanup for that flawless final finish.",
    points: [
      { h: "Interior & exterior windows", p: "Crystal-clear glass, sills, and frames inside and out." },
      { h: "Pressure washing", p: "Driveways, patios, and siding blasted back to fresh." },
      { h: "Post-renovation cleanup", p: "Dust and debris removed so your new space shines." },
    ],
  },
];
