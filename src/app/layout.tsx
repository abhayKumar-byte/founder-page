import type { Metadata } from "next";
import "./globals.css";
import { founder } from "@/data/founder";
export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // [PLACEHOLDER: real domain]
  title: "Richi Vij | Founder & Entrepreneur",
  description: "Richi Vij: entrepreneur driven by vision, curiosity and purpose.",
  openGraph: { title: "Richi Vij", description: "Building ideas into meaningful impact.", type: "website" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: "Richi Vij", jobTitle: founder.role.includes("[PLACEHOLDER") ? undefined : founder.role, description: founder.bio.every((x) => x.includes("[PLACEHOLDER")) ? undefined : founder.intro, url: "https://example.com" };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />{children}</body></html>;
}
