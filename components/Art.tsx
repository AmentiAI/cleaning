/* Lightweight inline-SVG placeholder illustrations for media frames.
   Swap any <MediaFrame> for a real <Image> when you have photos. */

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="media-frame" role="img" aria-label={label}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </div>
  );
}

export const ArtInterior = () => (
  <Frame label="Sparkling clean modern interior">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1e293b" />
        <stop offset="1" stopColor="#334155" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#g1)" />
    <rect x="40" y="150" width="320" height="120" rx="8" fill="#0f172a" opacity=".6" />
    <rect x="60" y="90" width="120" height="80" rx="6" fill="#475569" opacity=".5" />
    <rect x="220" y="70" width="120" height="100" rx="6" fill="#475569" opacity=".4" />
    <circle cx="320" cy="70" r="34" fill="#d4af37" opacity=".85" />
    <path d="M100 40c40-20 100-10 100 40" stroke="#d4af37" strokeWidth="3" fill="none" opacity=".6" strokeLinecap="round" />
    <g fill="#e6c257" opacity=".9">
      <path d="M150 200l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
      <path d="M260 210l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
    </g>
  </Frame>
);

export const ArtLiving = () => (
  <Frame label="Clean living room">
    <rect width="400" height="300" fill="#1e293b" />
    <rect x="40" y="180" width="320" height="90" rx="10" fill="#334155" />
    <rect x="60" y="120" width="90" height="60" rx="6" fill="#475569" />
    <circle cx="310" cy="90" r="40" fill="#d4af37" opacity=".8" />
    <path d="M120 60c40-15 90 0 90 40" stroke="#e6c257" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7" />
  </Frame>
);

export const ArtOffice = () => (
  <Frame label="Clean office">
    <rect width="400" height="300" fill="#1e293b" />
    <rect x="40" y="60" width="150" height="180" rx="8" fill="#334155" />
    <rect x="220" y="90" width="140" height="150" rx="8" fill="#475569" />
    <rect x="60" y="80" width="110" height="20" rx="4" fill="#64748b" />
    <circle cx="300" cy="130" r="28" fill="#d4af37" opacity=".8" />
  </Frame>
);

export const ArtSparkle = () => (
  <Frame label="Deep clean sparkle">
    <rect width="400" height="300" fill="#0f172a" />
    <g fill="#d4af37">
      <path d="M200 70l10 26 26 10-26 10-10 26-10-26-26-10 26-10z" />
      <path d="M110 160l6 15 15 6-15 6-6 15-6-15-15-6 15-6z" opacity=".8" />
      <path d="M300 180l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" opacity=".7" />
    </g>
  </Frame>
);

export const ArtEmptyHome = () => (
  <Frame label="Empty clean home">
    <rect width="400" height="300" fill="#1e293b" />
    <path d="M60 200l140-90 140 90" fill="none" stroke="#475569" strokeWidth="10" strokeLinejoin="round" />
    <rect x="90" y="200" width="220" height="70" fill="#334155" />
    <rect x="170" y="220" width="50" height="50" fill="#d4af37" opacity=".8" />
  </Frame>
);

export const ArtCarpet = () => (
  <Frame label="Fresh carpet">
    <rect width="400" height="300" fill="#1e293b" />
    <rect x="50" y="90" width="300" height="140" rx="10" fill="#334155" />
    <rect x="80" y="120" width="240" height="80" rx="6" fill="#475569" />
    <circle cx="200" cy="160" r="30" fill="#d4af37" opacity=".8" />
  </Frame>
);

export const ArtWindows = () => (
  <Frame label="Clean windows">
    <rect width="400" height="300" fill="#1e293b" />
    <rect x="90" y="50" width="220" height="200" rx="6" fill="#334155" />
    <path d="M200 50v200M90 150h220" stroke="#64748b" strokeWidth="8" />
    <path d="M120 90l40 40" stroke="#e6c257" strokeWidth="6" strokeLinecap="round" opacity=".8" />
  </Frame>
);

export const ArtTeam = () => (
  <Frame label="O'Neil Cleaning team">
    <rect width="400" height="300" fill="#1e293b" />
    <circle cx="140" cy="130" r="45" fill="#475569" />
    <circle cx="260" cy="130" r="45" fill="#334155" />
    <rect x="80" y="185" width="120" height="90" rx="14" fill="#475569" />
    <rect x="200" y="185" width="120" height="90" rx="14" fill="#334155" />
    <circle cx="330" cy="70" r="30" fill="#d4af37" opacity=".85" />
  </Frame>
);
