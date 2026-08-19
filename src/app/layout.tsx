import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rhythm Gifts & Hampers | Premium Customised Gifts & Luxury Hampers",
  description:
    "Discover premium customised gifts, luxury hampers, and bespoke surprise gifting from Rhythm Gifts & Hampers in Trivandrum, Kerala. Create something personal for the moments that matter.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rhythm Gifts & Hampers | Premium Customised Gifts & Luxury Hampers",
    description:
      "Bespoke doorstep surprise delivery and premium custom gift hampers in Trivandrum, Kerala. Turn ordinary moments into unforgettable memories.",
    url: "/",
    siteName: "Rhythm Gifts & Hampers",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-brand-ivory text-brand-charcoal min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
