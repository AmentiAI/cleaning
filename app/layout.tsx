import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1220",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oneilcleaning.com"),
  title: {
    default: "O'Neil Cleaning — Premium Residential & Commercial Cleaning",
    template: "%s — O'Neil Cleaning",
  },
  description:
    "O'Neil Cleaning delivers spotless, dependable residential and commercial cleaning. Deep cleans, move in/out, carpet & specialty services. Book your free quote today.",
  keywords: [
    "cleaning service",
    "house cleaning",
    "commercial cleaning",
    "deep cleaning",
    "move out cleaning",
    "O'Neil Cleaning",
  ],
  openGraph: {
    title: "O'Neil Cleaning — Premium Residential & Commercial Cleaning",
    description:
      "Spotless, dependable cleaning for homes and businesses. Insured, background-checked, 100% satisfaction guaranteed.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23d4af37'/%3E%3Ctext x='16' y='22' font-size='18' text-anchor='middle' fill='%230b1220' font-family='Georgia' font-weight='bold'%3EO%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
