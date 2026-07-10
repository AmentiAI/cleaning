import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
} as const;

export const LeafMark = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 13c2-6 6-9 10-9 0 4-2 8-6 10s-6 3-8 3c0-1 2-2 4-4z" fill="#0b1220" />
    <path d="M6 20c3-2 6-5 8-9" stroke="#0b1220" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

export const LeafMarkSolid = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 13c2-6 6-9 10-9 0 4-2 8-6 10s-6 3-8 3c0-1 2-2 4-4z" fill="#0b1220" />
  </svg>
);

export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} {...p}>
    <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckThin = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Arrow = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Shield = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" strokeLinejoin="round" />
  </svg>
);

export const ShieldCheck = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Dollar = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2} {...p}>
    <path d="M12 2v20M5 8h9a3 3 0 010 6H7" strokeLinecap="round" />
  </svg>
);

export const Clock = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" />
  </svg>
);

export const CircleCheck = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 16.5 7.1 18l.9-5.5-4-3.9L9.5 8 12 3z" strokeLinejoin="round" />
  </svg>
);

export const Heart = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 21c-4-3-8-6-8-11a4 4 0 018-1 4 4 0 018 1c0 5-4 8-8 11z" strokeLinejoin="round" />
  </svg>
);

export const Sparkle = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M20 7l-8 8-4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20c2-4 4-6 8-8" strokeLinecap="round" />
  </svg>
);

export const Calendar = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 4h16v12H4z" />
    <path d="M4 20h16" strokeLinecap="round" />
    <path d="M9 8l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---- Service icons ---- */
export const House = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 20v-6h4v6" strokeLinecap="round" />
  </svg>
);

export const Office = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 4v16" strokeLinecap="round" />
  </svg>
);

export const MoveHouse = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 20h16M6 20V9l6-4 6 4v11" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 20v-5h6v5" strokeLinecap="round" />
  </svg>
);

export const Carpet = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="14" width="18" height="6" rx="1" />
    <path d="M6 14V6h9l3 4v4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Window = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M12 3v18M4 12h16" strokeLinecap="round" />
  </svg>
);

/* ---- Contact icons ---- */
export const Phone = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M4 5c0 9 6 15 15 15l0-4-4-2-2 2c-3-1-5-3-6-6l2-2-2-4z" strokeLinejoin="round" />
  </svg>
);

export const Mail = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Pin = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="M12 21c-4-4-7-7-7-11a7 7 0 0114 0c0 4-3 7-7 11z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/* ---- Social icons ---- */
export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 22v-8h3l.5-3H13V9c0-.9.3-1.5 1.6-1.5H17V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3v8h3z" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Google = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M21 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.1a4.4 4.4 0 01-1.9 2.9v2.4h3.1c1.8-1.7 2.7-4.1 2.7-7.2z" />
    <path d="M12 21c2.4 0 4.5-.8 6-2.2l-3.1-2.4c-.8.6-1.9.9-2.9.9-2.3 0-4.2-1.5-4.9-3.6H3.9v2.5A9 9 0 0012 21z" />
  </svg>
);
