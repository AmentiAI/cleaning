import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oneillcleaning.com"),
  title: {
    default: "O'Neill Cleaning — Premium Residential & Commercial Cleaning",
    template: "%s — O'Neill Cleaning",
  },
  description:
    "O'Neill Cleaning delivers spotless, dependable residential and commercial cleaning. Deep cleans, move in/out, carpet & specialty services. Book your free quote today.",
  keywords: [
    "cleaning service",
    "house cleaning",
    "commercial cleaning",
    "deep cleaning",
    "move out cleaning",
    "O'Neill Cleaning",
  ],
  openGraph: {
    title: "O'Neill Cleaning — Premium Residential & Commercial Cleaning",
    description:
      "Spotless, dependable cleaning for homes and businesses. Insured, background-checked, 100% satisfaction guaranteed.",
    type: "website",
  },
  // Icons come from app/favicon.ico, app/icon.png and app/apple-icon.png via
  // the App Router file convention — declaring them here too would override those.
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
