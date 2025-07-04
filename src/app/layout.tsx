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
  title: "tracked.lk | Order Tracking & Invoicing for SMEs",
  description:
    "Give your clients visibility with zero extra steps. Real-time order tracking and milestone-based invoicing built for SMEs. Join our early bird waitlist.",
  keywords:
    "order tracking, invoicing, SME, business tracking, milestone billing, Sri Lanka",
  authors: [{ name: "tracked.lk" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "tracked.lk | Order Tracking & Invoicing for SMEs",
    description:
      "Give your clients visibility with zero extra steps. Real-time order tracking and milestone-based invoicing built for SMEs.",
    url: "https://tracked.lk",
    siteName: "tracked.lk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tracked.lk | Order Tracking & Invoicing for SMEs",
    description:
      "Give your clients visibility with zero extra steps. Real-time order tracking and milestone-based invoicing built for SMEs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
