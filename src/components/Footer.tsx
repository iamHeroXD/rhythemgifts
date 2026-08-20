import React from "react";
import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/giftingData";
import { getWhatsAppLink } from "../utils/whatsapp";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mainWhatsappUrl = getWhatsAppLink("Hi Rhythm Gifts & Hampers! I'd like to ask a general question.");

  const footerLinks = {
    explore: [
      { name: "All Gifts", href: "/gifts" },
      { name: "Collections", href: "/collections" },
      { name: "Custom Builder", href: "/customize" },
      { name: "Surprise Delivery", href: "/surprise-delivery" },
    ],
    studio: [
      { name: "Our Philosophy", href: "/about" },
      { name: "Contact Studio", href: "/contact" },
      { name: "Common Questions", href: "/faq" },
    ],
    legal: [
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-brand-charcoal text-brand-ivory border-t border-brand-gold/10 pt-20 pb-24 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-brand-ivory/10 pb-16">
          
          {/* Column 1 (span 5): Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-3xl font-light tracking-wide text-brand-ivory">
                Rhythm
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] font-bold text-brand-gold uppercase -mt-1">
                Gifts & Hampers
              </span>
            </div>
            <p className="font-serif text-base italic text-brand-ivory/70 max-w-sm leading-relaxed">
              &ldquo;A gift isn&apos;t just something you give. It&apos;s a moment someone remembers.&rdquo;
            </p>
            <p className="font-sans text-xs text-brand-ivory/50 max-w-sm leading-relaxed">
              We design and deliver handcrafted luxury hampers, custom greeting scrolls, and doorstep surprises within Trivandrum limits, connecting families locally and worldwide.
            </p>
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="rounded border border-brand-ivory/10 p-2 text-brand-ivory/60 hover:border-brand-rose hover:text-brand-rose transition-colors duration-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="rounded border border-brand-ivory/10 p-2 text-brand-ivory/60 hover:border-brand-rose hover:text-brand-rose transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 (span 2): Explore */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-gold">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-brand-ivory/60 hover:text-brand-rose transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (span 2): Studio */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-gold">
              Studio
            </h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-brand-ivory/60 hover:text-brand-rose transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 (span 3): Location Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-gold">
              Coordinates
            </h4>
            <div className="space-y-4 font-sans text-xs text-brand-ivory/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.location}<br />
                  <span className="text-[10px] text-brand-gold font-bold">8.4904° N, 76.9492° E</span>
                </span>
              </div>
              <div className="pt-2">
                <span className="block text-[9px] text-brand-gold uppercase tracking-wider font-bold">
                  Enquiries & Bookings
                </span>
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-ivory hover:text-brand-rose transition-colors block mt-0.5"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-brand-ivory/40 font-sans gap-4">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
            <span>&copy; {currentYear} Rhythm Gifts & Hampers.</span>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-rose transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-center sm:text-right font-serif italic text-xs text-brand-ivory/55">
            Crafted for the moments that matter.
          </div>
        </div>
      </div>
    </footer>
  );
}
