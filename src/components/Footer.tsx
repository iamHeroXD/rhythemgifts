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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
    company: [
      { name: "Our Philosophy", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Common Questions", href: "/faq" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-brand-charcoal text-brand-ivory border-t border-brand-gold/15 pt-16 pb-20 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-b border-brand-ivory/10 pb-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-ivory">
                Rhythm
              </span>
              <span className="font-sans text-[9px] tracking-[0.25em] font-semibold text-brand-gold uppercase -mt-1">
                Gifts & Hampers
              </span>
            </div>
            <p className="font-serif text-sm italic text-brand-ivory/70 max-w-xs leading-relaxed">
              &ldquo;{BUSINESS_INFO.emotionalTagline}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="rounded-full border border-brand-ivory/20 p-2 text-brand-ivory/80 hover:border-brand-rose hover:text-brand-rose transition-colors duration-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="rounded-full border border-brand-ivory/20 p-2 text-brand-ivory/80 hover:border-brand-rose hover:text-brand-rose transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-brand-gold mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-brand-ivory/60 hover:text-brand-rose transition-colors duration-250"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-brand-gold mb-4">
              Studio
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs text-brand-ivory/60 hover:text-brand-rose transition-colors duration-250"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs font-semibold tracking-wider uppercase text-brand-gold mb-4">
              Location & Details
            </h4>
            <div className="space-y-3 font-sans text-xs text-brand-ivory/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="pt-2">
                <span className="block text-[10px] text-brand-gold uppercase tracking-wider font-semibold">
                  WhatsApp & Inquiries
                </span>
                <a
                  href={mainWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-ivory hover:text-brand-rose transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div>
                <span className="block text-[10px] text-brand-gold uppercase tracking-wider font-semibold">
                  Instagram
                </span>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-ivory hover:text-brand-rose transition-colors"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-brand-ivory/45 font-sans">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 sm:mb-0">
            <span>&copy; {currentYear} Rhythm Gifts & Hampers. All rights reserved.</span>
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
          <div className="text-center sm:text-right">
            <span>Crafted for the moments that matter.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
