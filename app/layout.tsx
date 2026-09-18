import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const APP_URL = process.env.APP_URL ?? "http://localhost:3000";
const SERVICE_NAME = "julienika.cz";
const SERVICE_DESCRIPTION =
  "Reference guides and free browser-based calculators for people who make things — baking, soap, ceramics, resin, aquariums, photography and more.";
const ADSENSE_PUBLISHER_ID = process.env.ADSENSE_PUBLISHER_ID;

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: SERVICE_NAME,
    template: `%s — ${SERVICE_NAME}`,
  },
  description: SERVICE_DESCRIPTION,
  openGraph: {
    title: SERVICE_NAME,
    description: SERVICE_DESCRIPTION,
    url: APP_URL,
    siteName: SERVICE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SERVICE_NAME,
    description: SERVICE_DESCRIPTION,
  },
  other: {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
  },
};

const NAV = [
  { href: "/guides", label: "Guides" },
  { href: "/#tools", label: "Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen flex-col bg-white text-gray-900">
        <header className="border-b border-gray-200">
          <nav className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
            <Link href="/" className="font-semibold">
              {SERVICE_NAME}
            </Link>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-blue-700 hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="mt-12 border-t border-gray-200">
          <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm text-gray-600">
            <p>{SERVICE_NAME} — free tools and guides for makers.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </footer>

        {ADSENSE_PUBLISHER_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
