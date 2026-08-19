"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/giftingData";
import { getWhatsAppLink } from "../utils/whatsapp";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener to toggle background blur
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
    { name: "Customize", href: "/customize" },
    { name: "Surprise Delivery", href: "/surprise-delivery" },
    { name: "About", href: "/about" },
  ];

  const whatsappMessage = "Hi Rhythm Gifts & Hampers! I'd like to make a custom gift enquiry.";
  const mainWhatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-ivory/90 backdrop-blur-md border-b border-brand-gold/15 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo / Wordmark */}
            <Link href="/" className="group flex flex-col focus:outline-none">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-charcoal group-hover:text-brand-rose transition-colors duration-300">
                Rhythm
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.25em] font-semibold text-brand-gold uppercase -mt-1">
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
                    className={`font-sans text-xs font-semibold tracking-wider uppercase transition-colors duration-300 hover:text-brand-rose ${
                      isActive ? "text-brand-rose" : "text-brand-charcoal/80"
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
                className="rounded-full p-2 text-brand-charcoal/85 hover:bg-brand-charcoal/5 hover:text-brand-rose transition-all focus:outline-none"
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-white px-4 py-2 font-sans text-xs font-semibold tracking-wider uppercase text-brand-charcoal hover:border-brand-rose hover:bg-brand-rose/5 transition-all duration-300"
              >
                <MessageCircle className="h-3.5 w-3.5 text-brand-rose" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="flex md:hidden rounded-full p-2 text-brand-charcoal/85 hover:bg-brand-charcoal/5 transition-all focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Menu Overlay */}
        <div
          className={`fixed inset-0 top-[57px] z-30 flex flex-col bg-brand-ivory px-6 py-8 transition-transform duration-300 md:hidden border-t border-brand-gold/10 ${
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
                  className={`font-serif text-2xl font-medium tracking-wide border-b border-brand-gold/10 pb-3 transition-colors ${
                    isActive ? "text-brand-rose" : "text-brand-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="font-serif text-2xl font-medium tracking-wide border-b border-brand-gold/10 pb-3 text-brand-charcoal"
            >
              Contact
            </Link>
          </div>

          <div className="mt-auto space-y-4">
            <a
              href={mainWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-charcoal py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-charcoal/90 transition-all shadow-sm"
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
      <div className="fixed bottom-0 left-0 right-0 z-35 bg-white/95 backdrop-blur border-t border-brand-gold/15 py-3 px-4 flex gap-3 md:hidden shadow-[0_-2px_10px_rgba(0,0,0,0.03)] justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold">Rhythm TVM</span>
          <span className="font-serif text-xs font-bold text-brand-charcoal truncate max-w-[140px]">Custom Hampers</span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/customize"
            className="flex items-center justify-center rounded-full bg-brand-rose px-4 py-2.5 font-sans text-[10px] font-bold tracking-wider uppercase text-white hover:bg-brand-rose/90 transition-all"
          >
            Create a Gift
          </Link>
          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full border border-brand-gold/30 bg-white p-2.5 text-brand-charcoal hover:border-brand-rose transition-all"
            aria-label="WhatsApp Enquiry"
          >
            <MessageCircle className="h-4.5 w-4.5 text-brand-rose" />
          </a>
        </div>
      </div>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
