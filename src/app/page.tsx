"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import GiftFinder from "../components/GiftFinder";
import { PRODUCTS, COLLECTIONS, OCCASIONS } from "../data/giftingData";
import { getWhatsAppLink } from "../utils/whatsapp";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  // Intersection Observer Scroll Reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target); // Unobserve to reveal once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory">
        
        {/* 1. Cinematic Hero Section — Split Editorial Layout */}
        <section className="relative min-h-[90vh] flex items-center bg-brand-charcoal text-brand-ivory pt-24 pb-16 lg:py-0 overflow-hidden">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & Conversion */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left z-10 animate-fade-in-up">
              <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                <Sparkles className="h-3 w-3 text-brand-rose" />
                <span>Thoughtfully made in Trivandrum</span>
              </span>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none text-white">
                Give them something<br />
                <span className="italic font-light text-brand-gold">they&apos;ll remember.</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-brand-ivory/80 max-w-xl leading-relaxed">
                Bespoke customized gifts, luxury hampers, and surprise doorstep delivery in Trivandrum, Kerala. We hand-package every details to represent your appreciation.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2 max-w-md">
                <Link
                  href="/gifts"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded bg-brand-rose px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300 shadow-sm"
                >
                  Explore Gifts
                </Link>
                <Link
                  href="/customize"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded border border-brand-gold/45 bg-transparent px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-ivory hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  Create a Custom Gift
                </Link>
              </div>
            </div>

            {/* Right Column: Stunning Static Product Image (Bright & Desirable) */}
            <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[450px] lg:h-[600px] overflow-hidden rounded border border-brand-gold/10 bg-brand-charcoal animate-fade-in-up delay-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop"
                alt="Bespoke luxury chocolate hamper wrapped in premium satin ribbons"
                className="h-full w-full object-cover opacity-90 image-zoom-effect"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* 2. Emotional Brand Statement Section */}
        <section className="bg-brand-ivory py-24 sm:py-32 scroll-reveal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Our Belief
            </span>
            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-brand-charcoal max-w-3xl mx-auto text-balance">
              &ldquo;A gift isn&apos;t just something you give.<br />It&apos;s a moment someone remembers.&rdquo;
            </blockquote>
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed max-w-xl mx-auto pt-4">
              At Rhythm, we construct customized hampers around genuine human gratitude. From calligraphy scroll letters to doorstep music details, we ensure your unboxing feels truly handcrafted.
            </p>
          </div>
        </section>

        {/* 3. Gift Finder Block */}
        <section className="bg-white py-16 scroll-reveal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <GiftFinder />
          </div>
        </section>

        {/* 4. Featured Gifts Grid — Product is the Visual Hero */}
        <section className="bg-brand-ivory py-24 sm:py-32 scroll-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Featured Arrangements
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-brand-charcoal">
                Explore our signature hampers.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/gifts"
                className="inline-flex items-center gap-1.5 rounded bg-brand-charcoal px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-colors duration-300 shadow-sm"
              >
                <span>View Full Catalogue</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Shop by Occasion — Selective Asymmetric Grid */}
        <section className="bg-white py-24 sm:py-32 scroll-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Browse Occasions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-brand-charcoal">
                Shop by Moment
              </h2>
            </div>

            {/* Asymmetric collage grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {OCCASIONS.map((occ, idx) => {
                // Assign custom spans for visual hierarchy
                let gridSpan = "md:col-span-4 aspect-square";
                if (idx === 0) gridSpan = "md:col-span-8 aspect-[16/10] sm:aspect-[2/1]"; // Large Horizontal
                if (idx === 1) gridSpan = "md:col-span-4 aspect-[1/1.1]"; // Tall/Square
                if (idx === 5) gridSpan = "md:col-span-12 aspect-[3.5/1]"; // Panorama

                return (
                  <Link
                    key={occ.slug}
                    href={`/occasions#${occ.slug}`}
                    className={`group relative flex flex-col justify-end overflow-hidden rounded border border-brand-gold/15 bg-brand-charcoal card-hover-effect ${gridSpan}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={occ.image}
                      alt={occ.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-60 image-zoom-effect"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent" />
                    
                    <div className="relative z-10 p-6 space-y-1 text-brand-ivory">
                      <span className="font-sans text-[9px] uppercase tracking-wider text-brand-gold font-bold">
                        {occ.name}
                      </span>
                      <h3 className="font-serif text-xl font-light leading-tight">{occ.tagline}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Why Rhythm — Unboxing Craftsmanship Storytelling */}
        <section className="bg-brand-ivory py-24 sm:py-32 scroll-reveal">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Our Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-brand-charcoal">
                Handcrafted unboxing, every single time.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 bg-white p-8 rounded border border-brand-gold/10 card-hover-effect">
                <span className="block font-serif text-lg font-light text-brand-rose">Satin ribboning</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal">Hand-Tied Details</h3>
                <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                  Every double-faced premium ribbon is hand-aligned, heat-sealed, and tied with a tailored angle cut for a luxurious tactile presentation.
                </p>
              </div>

              <div className="space-y-4 bg-white p-8 rounded border border-brand-gold/10 card-hover-effect">
                <span className="block font-serif text-lg font-light text-brand-gold">Local floristry</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal">Fresh Sourcing</h3>
                <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                  We collect premium local roses and seasonal flowers from Trivandrum markets early on the morning of delivery, avoiding artificial fillers.
                </p>
              </div>

              <div className="space-y-4 bg-white p-8 rounded border border-brand-gold/10 card-hover-effect">
                <span className="block font-serif text-lg font-light text-brand-rose">Bespoke scroll</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal">Handwritten Calligraphy</h3>
                <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                  Your custom letter is printed on vintage burnt-edge paper stock, rolled, and sealed with a hot wax stamp to ensure text is read first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Custom Gifting Experience Walkthrough */}
        <section className="bg-white py-24 sm:py-32 scroll-reveal">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Custom Builder
              </span>
              <h2 className="font-serif text-4xl font-light text-brand-charcoal leading-tight">
                Made for them.<br />
                <span className="italic font-light text-brand-rose">Not just picked.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                Skip the generic off-the-shelf gift shelves. Share the recipient details, vibe, budget range, and name engravings you desire, and our studio design team will draft coordinate sketches.
              </p>
              <div className="pt-2">
                <Link
                  href="/customize"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-rose transition-colors duration-200"
                >
                  <span>Build Custom Hamper</span>
                  <ArrowRight className="h-4 w-4 text-brand-rose" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden border border-brand-gold/15 bg-brand-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=800&auto=format&fit=crop"
                alt="Rustic wax seal stamped customized greeting card"
                className="h-full w-full object-cover image-zoom-effect"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 8. Doorstep Surprise Delivery */}
        <section className="bg-brand-ivory py-24 sm:py-32 scroll-reveal">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative aspect-[4/5] rounded overflow-hidden border border-brand-gold/15 bg-brand-charcoal order-last md:order-first">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop"
                alt="Surprise doorstep flowers bouquet delivery"
                className="h-full w-full object-cover image-zoom-effect"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7 space-y-6 md:pl-6">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Surprise Deliveries
              </span>
              <h2 className="font-serif text-4xl font-light text-brand-charcoal leading-tight">
                Doorstep surprise planners in Trivandrum.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                Plan emotional doorstep greetings even when you reside far away or internationally. We manage fresh cake reveals, flower handovers, customized mirror blocks, and acoustic guitar greets.
              </p>
              <div className="pt-2">
                <Link
                  href="/surprise-delivery"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-rose transition-colors duration-200"
                >
                  <span>Learn How It Works</span>
                  <ArrowRight className="h-4 w-4 text-brand-rose" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Final Emotional CTA Section */}
        <section className="bg-brand-charcoal text-brand-ivory py-24 text-center relative overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 scroll-reveal">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase block">
              Start Curation
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-tight text-white">
              Have someone special in mind?<br />
              <span className="italic font-light text-brand-gold">Let&apos;s make their next moment unforgettable.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
              <Link
                href="/customize"
                className="w-full inline-flex items-center justify-center rounded bg-brand-rose px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300 shadow-sm"
              >
                Create a Gift
              </Link>
              <a
                href={getWhatsAppLink("Hi Rhythm Gifts & Hampers! I'd like to discuss a customized gift hamper.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded border border-brand-gold/45 bg-transparent px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-ivory hover:border-white hover:bg-white/5 transition-all duration-300"
              >
                WhatsApp Studio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
