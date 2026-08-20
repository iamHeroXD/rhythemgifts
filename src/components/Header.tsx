"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/giftingData";
import { getWhatsAppLink } from "../utils/whatsapp";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener to toggle background style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Gifts", href: "/gifts" },
    { name: "Collections", href: "/collections" },
    { name: "Occasions", href: "/occasions" },
    { name: "Customize", href: "/customize" },
  ];

  const whatsappMessage = "Hi Rhythm Gifts & Hampers! I'd like to make a custom gift enquiry.";
  const mainWhatsappUrl = getWhatsAppLink(whatsappMessage);

  // Helper to detect if page starts with a dark hero block
  const isDarkHeroPage = (path: string) => {
    return path === "/" || path === "/surprise-delivery";
  };

  // Header is in dark text mode when scrolled, on light pages, or when mobile menu is open
  const isDarkTheme = !isScrolled && isDarkHeroPage(pathname) && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-brand-ivory py-4 border-b border-brand-gold/10"
            : isScrolled
            ? "bg-brand-ivory/95 backdrop-blur-md border-b border-brand-gold/10 py-3.5 shadow-sm"
            : isDarkHeroPage(pathname)
            ? "bg-transparent py-6"
            : "bg-brand-ivory/90 backdrop-blur-sm py-4 border-b border-brand-gold/10"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo / Wordmark */}
            <Link href="/" className="group flex flex-col focus:outline-none">
              <span
                className={`font-serif text-2xl font-light tracking-wide transition-colors duration-300 ${
                  isDarkTheme
                    ? "text-brand-ivory group-hover:text-brand-gold"
                    : "text-brand-charcoal group-hover:text-brand-rose"
                }`}
              >
                Rhythm
              </span>
              <span
                className={`font-sans text-[8px] sm:text-[9px] tracking-[0.25em] font-semibold uppercase -mt-1 transition-colors duration-300 ${
                  isDarkTheme ? "text-brand-gold/80" : "text-brand-gold"
                }`}
              >
                Gifts & Hampers
              </span>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-sans text-xs font-semibold tracking-widest uppercase transition-colors duration-300 nav-link-underline pb-1 ${
                      isActive
                        ? "text-brand-rose"
                        : isDarkTheme
                        ? "text-brand-ivory/80 hover:text-brand-gold"
                        : "text-brand-charcoal/80 hover:text-brand-rose"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open Search"
                className={`rounded-full p-2 transition-all focus:outline-none ${
                  isDarkTheme
                    ? "text-brand-ivory/90 hover:bg-white/10 hover:text-brand-gold"
                    : "text-brand-charcoal/85 hover:bg-brand-charcoal/5 hover:text-brand-rose"
                }`}
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:flex items-center gap-1.5 rounded border px-4 py-2 font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isDarkTheme
                    ? "border-brand-gold/50 bg-brand-charcoal/40 text-brand-ivory hover:border-white hover:bg-white hover:text-brand-charcoal"
                    : "border-brand-gold/30 bg-white text-brand-charcoal hover:border-brand-rose hover:bg-brand-rose/5"
                }`}
              >
                <MessageCircle className="h-3.5 w-3.5 text-brand-rose" />
                <span>Enquire</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className={`flex md:hidden rounded-full p-2 transition-all focus:outline-none ${
                  isDarkTheme
                    ? "text-brand-ivory/90 hover:bg-white/10"
                    : "text-brand-charcoal/85 hover:bg-brand-charcoal/5"
                }`}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu Overlay */}
        <div
          className={`fixed inset-0 top-0 z-30 flex flex-col bg-brand-ivory px-8 pt-24 pb-8 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-serif text-2xl font-light tracking-wide border-b border-brand-gold/10 pb-3 transition-colors ${
                    isActive ? "text-brand-rose" : "text-brand-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/surprise-delivery"
              className="font-serif text-2xl font-light tracking-wide border-b border-brand-gold/10 pb-3 text-brand-charcoal"
            >
              Surprise Delivery
            </Link>
            <Link
              href="/contact"
              className="font-serif text-2xl font-light tracking-wide border-b border-brand-gold/10 pb-3 text-brand-charcoal"
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto space-y-4">
            <a
              href={mainWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded bg-brand-charcoal py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-charcoal/90 transition-all shadow-sm"
            >
              <MessageCircle className="h-4 w-4 text-brand-gold" />
              <span>WhatsApp Rhythm</span>
            </a>
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                Trivandrum, Kerala
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-brand-gold/10 py-2.5 px-4 flex gap-3 md:hidden justify-between items-center shadow-[0_-2px_10px_rgba(18,18,18,0.03)]">
        <Link
          href="/customize"
          className="flex-1 flex items-center justify-center rounded bg-brand-rose py-2.5 px-4 font-sans text-xs font-bold tracking-wider uppercase text-white hover:bg-brand-rose/90 transition-all text-center"
        >
          Create a Gift
        </Link>
        <a
          href={mainWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded border border-brand-gold/25 bg-white text-brand-rose hover:bg-brand-rose/5 transition-all flex-shrink-0"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle className="h-4.5 w-4.5" />
        </a>
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
