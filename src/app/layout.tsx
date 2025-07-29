import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tracked.lk | Order Tracking & Invoicing Infrastructure for SMEs",
  description:
    "Transform your client experience with real-time order tracking and milestone-based invoicing. Built for SMEs in Sri Lanka. Join 421+ businesses on our early bird waitlist for 50% lifetime discount.",
  keywords: [
    "order tracking",
    "invoicing software",
    "SME business tools",
    "milestone billing",
    "client transparency",
    "business automation",
    "Sri Lanka business",
    "construction tracking",
    "manufacturing orders",
    "delivery tracking",
    "project management",
    "business infrastructure",
  ],
  authors: [{ name: "tracked.lk", url: "https://tracked.lk" }],
  creator: "tracked.lk",
  publisher: "tracked.lk",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "tracked.lk | Order Tracking Infrastructure for SMEs",
    description:
      "Transform your client experience with real-time order tracking and milestone-based invoicing. Built for SMEs in Sri Lanka. Join 421+ businesses on our early bird waitlist.",
    url: "https://tracked.lk",
    siteName: "tracked.lk",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tracked.lk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "tracked.lk - Order tracking infrastructure for SMEs",
      },
      {
        url: "https://tracked.lk/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "tracked.lk - Order tracking infrastructure for SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "tracked.lk | Order Tracking Infrastructure for SMEs",
    description:
      "Transform your client experience with real-time order tracking and milestone-based invoicing. Join 421+ businesses on our early bird waitlist.",
    site: "@tracked_lk",
    creator: "@tracked_lk",
    images: ["https://tracked.lk/og-image.jpg"],
  },
  alternates: {
    canonical: "https://tracked.lk",
  },
  category: "Business Software",
  classification: "Business Tools",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  metadataBase: new URL("https://tracked.lk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "tracked.lk",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Project Management",
              description:
                "Order tracking and invoicing infrastructure for SMEs. Real-time client visibility with milestone-based billing.",
              operatingSystem: "Web Browser",
              url: "https://tracked.lk",
              author: {
                "@type": "Organization",
                name: "tracked.lk",
                url: "https://tracked.lk",
              },
              offers: {
                "@type": "Offer",
                price: "2000",
                priceCurrency: "LKR",
                priceValidUntil: "2025-08-31",
                description:
                  "Early bird waitlist access with 50% lifetime discount",
                availability: "https://schema.org/InStock",
                validFrom: "2024-12-01",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "421",
                bestRating: "5",
                worstRating: "1",
              },
              featureList: [
                "Real-time order tracking",
                "Milestone-based invoicing",
                "Mobile QR code scanning",
                "Client transparency dashboard",
                "Automated progress updates",
                "Payment integration",
                "Multi-industry support",
                "No setup fees",
              ],
            }),
          }}
        />

        {/* Additional Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "tracked.lk",
              description:
                "Order tracking and invoicing infrastructure for SMEs in Sri Lanka",
              url: "https://tracked.lk",
              logo: "https://tracked.lk/tracked-logo.svg",
              sameAs: [
                "https://www.linkedin.com/company/tracked-lk",
                "https://twitter.com/tracked_lk",
                "https://www.facebook.com/tracked.lk",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "hello@tracked.lk",
                availableLanguage: ["English", "Sinhala", "Tamil"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "LK",
                addressLocality: "Colombo",
              },
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "tracked.lk Founders",
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "Sri Lanka",
              },
              serviceType: "Business Software",
              keywords:
                "order tracking, invoicing, SME, business automation, Sri Lanka",
            }),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://script.google.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Additional SEO optimizations */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/tracked-logo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Explicit favicon links for maximum compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-purple-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <main id="main-content">{children}</main>

        {/* Fallback for JavaScript disabled */}
        <noscript>
          <div className="bg-yellow-50 border border-yellow-200 p-4 text-center">
            <p className="text-yellow-800">
              For the best experience, please enable JavaScript in your browser.
            </p>
          </div>
        </noscript>
      </body>
    </html>
  );
}
