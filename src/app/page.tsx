"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import GiftFinder from "../components/GiftFinder";
import { PRODUCTS, COLLECTIONS, OCCASIONS, BUSINESS_INFO } from "../data/giftingData";
import { getWhatsAppLink } from "../utils/whatsapp";
import { 
  Sparkles, 
  MessageCircle, 
  Heart, 
  Gift, 
  ChevronRight,
  Award,
  Leaf,
  Music,
  ShieldCheck
} from "lucide-react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const featuredProducts = PRODUCTS.slice(0, 3);
  const mainWhatsappUrl = getWhatsAppLink("Hi Rhythm Gifts & Hampers! I'd like to ask about creating a customised gift.");

  // Preloader timeout
  useEffect(() => {
    const hasPreloaded = sessionStorage.getItem("rhythm-preloaded");
    if (hasPreloaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("rhythm-preloaded", "true");
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer Scroll Reveals
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target); // Unobserve to reveal once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-charcoal text-brand-ivory transition-opacity duration-700 ease-out">
        {/* Animated subtle luxury pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_#C5A880_1px,_transparent_1.5px)] bg-[size:24px_24px]" />
        
        <div className="relative space-y-5 text-center">
          {/* Pulsing branding */}
          <div className="space-y-1">
            <span className="font-serif text-5xl sm:text-6xl font-light tracking-widest text-brand-ivory block animate-fade-in">Rhythm</span>
            <span className="font-sans text-[10px] tracking-[0.35em] font-semibold text-brand-gold uppercase block opacity-80">Gifts & Hampers</span>
          </div>

          {/* Elegant gold line reveal */}
          <div className="mx-auto h-[1px] w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent" style={{ animation: 'widthReveal 2s ease-in-out forwards' }} />
          
          {/* Location cue */}
          <p className="font-sans text-[8px] tracking-[0.25em] font-bold text-brand-gold/60 uppercase py-1">
            Trivandrum, Kerala
          </p>
        </div>

        {/* Local CSS for Preloader */}
        <style jsx global>{`
          @keyframes widthReveal {
            from { width: 0px; opacity: 0; }
            to { width: 140px; opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory">
        {/* 1. Cinematic Hero Section */}
        <section className="relative min-h-[95vh] flex items-center justify-center bg-brand-charcoal text-brand-ivory overflow-hidden pt-16">
          {/* Hero Editorial Image Background - Moody dark luxury box */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury dark gift hamper box with gold ribbon and fresh flowers"
              className="h-full w-full object-cover opacity-35 scale-105 animate-spin-slow"
              style={{ animationDuration: '90s' }}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 via-brand-charcoal/90 to-brand-charcoal" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 py-16 animate-fade-in-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 px-3.5 py-1 font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase">
              <Sparkles className="h-2.5 w-2.5 text-brand-rose" />
              <span>Premium Customized Gifting Studio</span>
            </span>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-light tracking-tight leading-tight">
              Make every moment<br />
              <span className="italic font-normal text-gold-gradient font-serif">worth remembering.</span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-brand-ivory/80 max-w-2xl mx-auto leading-relaxed">
              Premium customised gifts, luxury hampers, and thoughtful surprises made for the people who matter most. Delivered with care across Trivandrum.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <Link
                href="/gifts"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:bg-brand-rose hover:text-white transition-all duration-300 shadow-sm hover:scale-[1.02] transform"
              >
                Explore Gifts
              </Link>
              <Link
                href="/customize"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-brand-gold/45 bg-transparent px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase text-brand-ivory hover:border-brand-rose hover:bg-brand-rose/5 transition-all duration-300 hover:scale-[1.02] transform"
              >
                Create Custom Gift
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-x-6 gap-y-2 flex-wrap font-sans text-[10px] font-bold tracking-widest text-brand-gold/80 uppercase">
              <span>Bespoke Gifting</span>
              <span className="h-1 w-1 bg-brand-rose rounded-full" />
              <span>Personalised Details</span>
              <span className="h-1 w-1 bg-brand-rose rounded-full" />
              <span>Surprise Delivery</span>
            </div>
          </div>

          {/* Bouncing Scroll-down luxury indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce text-brand-gold/50 pointer-events-none">
            <span className="font-sans text-[8px] font-bold tracking-widest uppercase">Scroll to Discover</span>
            <ChevronRight className="h-3.5 w-3.5 rotate-90" />
          </div>
        </section>

        {/* 2. Emotional Intro Section */}
        <section className="bg-brand-ivory py-20 border-b border-brand-gold/10 scroll-reveal">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              More than a gift
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light italic leading-relaxed text-brand-charcoal text-balance max-w-3xl mx-auto">
              &ldquo;{BUSINESS_INFO.emotionalTagline}&rdquo;
            </blockquote>
            <div className="h-[1px] w-20 bg-brand-gold/30 mx-auto" />
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed max-w-xl mx-auto">
              At Rhythm, we believe a customized gift is an expression of appreciation, the preservation of a memory, and a bridge to the people who matter. We arrange every details—from personalized wax seals and photo mugs to doorstep acoustics—around your unique emotion.
            </p>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 3. Why Rhythm — Gifting Standards Section */}
        <section className="bg-white py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-2 scroll-reveal">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Gifting Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                Why Gifting is an Art at Rhythm
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed">
                Ordinary packages are sent; premium moments are crafted. We hold our Trivandrum studio to four non-negotiable luxury gifting pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pillar 1 */}
              <div className="space-y-4 text-center sm:text-left bg-brand-ivory/20 p-6 rounded border border-brand-gold/5 scroll-reveal delay-75 card-hover-effect">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-rose/5 border border-brand-rose/25 text-brand-rose">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal">Hand-Tied Details</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    No shortcuts. Every ribbon is double-faced premium satin, hand-measured, and cut with tailored precision angles for a majestic unboxing.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-4 text-center sm:text-left bg-brand-ivory/20 p-6 rounded border border-brand-gold/5 scroll-reveal delay-150 card-hover-effect">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/5 border border-brand-gold/25 text-brand-gold">
                  <Leaf className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal">Fresh Sourcing</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    We source our floral elements fresh from local Trivandrum flower farms on the morning of delivery, ensuring zero wilt or artificial fillers.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-4 text-center sm:text-left bg-brand-ivory/20 p-6 rounded border border-brand-gold/5 scroll-reveal delay-200 card-hover-effect">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-rose/5 border border-brand-rose/25 text-brand-rose">
                  <Music className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal">Surprise Serenades</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Elevate the moment. We coordinate with local acoustic guitarists and violinists to perform special songs on doorstep deliveries.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="space-y-4 text-center sm:text-left bg-brand-ivory/20 p-6 rounded border border-brand-gold/5 scroll-reveal delay-300 card-hover-effect">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/5 border border-brand-gold/25 text-brand-gold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal">Eco-Luxury Pledge</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Zero single-use plastics. We package using high-density recycled board, natural wood shavings, glass bottles, and organic cotton liners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 4. Shop by Occasion Section */}
        <section className="bg-white py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 scroll-reveal">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Browse Occasions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                Shop by Moment
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                Pick a card below to discover gift ideas built around these celebrations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {OCCASIONS.map((occ, idx) => (
                <Link
                  key={occ.slug}
                  href={`/occasions#${occ.slug}`}
                  className={`group relative flex flex-col justify-end aspect-[4/3] rounded-lg overflow-hidden border border-brand-gold/15 bg-brand-charcoal card-hover-effect scroll-reveal delay-${idx * 100}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={occ.image}
                    alt={occ.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 image-zoom-effect"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent" />
                  
                  <div className="relative z-10 p-6 space-y-1 text-brand-ivory">
                    <h3 className="font-serif text-xl font-medium">{occ.name}</h3>
                    <p className="font-sans text-[10px] uppercase tracking-wider text-brand-gold/90 font-semibold">
                      {occ.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center pt-2 scroll-reveal">
              <Link
                href="/occasions"
                className="inline-flex items-center gap-1 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-rose transition-colors"
              >
                <span>View All Occasion Directories</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 5. Featured Gifts Grid */}
        <section className="bg-brand-ivory py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 scroll-reveal">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Featured Arrangements
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                A few things they&apos;ll love.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal delay-100">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center pt-4 scroll-reveal">
              <Link
                href="/gifts"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-charcoal px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-all duration-300 shadow-sm"
              >
                <span>Explore Full Catalogue</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 6. Customization Core Promo */}
        <section className="bg-white py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 scroll-reveal">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                The Custom Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal leading-tight">
                Made for them.<br />
                <span className="italic text-gold-gradient font-serif">Not just picked for them.</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                Every hamper is constructed according to your design preference. Select custom initials engraving, name spell-out chocolates, wax scrolls, flower color customization, photo prints, or live music coordination. We build a personalized story, not just a gift.
              </p>
              <div className="pt-2">
                <Link
                  href="/customize"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-rose transition-colors"
                >
                  <span>Use Custom Gift Builder</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-brand-gold/15 bg-brand-charcoal shadow-sm card-hover-effect scroll-reveal delay-150">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
                alt="A premium gift card scroll tied with golden string and wax seal"
                className="h-full w-full object-cover image-zoom-effect"
              />
            </div>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 7. Interactive Gift Finder Teaser */}
        <section className="bg-brand-ivory py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 scroll-reveal">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Gifting Assistant
              </span>
              <h2 className="font-serif text-3xl font-medium text-brand-charcoal">
                Not sure what to gift? We&apos;ll help.
              </h2>
            </div>
            
            <GiftFinder />
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 8. Surprise Delivery Section */}
        <section className="bg-white py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden border border-brand-gold/15 bg-brand-charcoal shadow-sm order-last md:order-first card-hover-effect scroll-reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop"
                alt="Doorstep flower and cake reveal surprise experience"
                className="h-full w-full object-cover image-zoom-effect"
              />
            </div>
            <div className="md:col-span-7 space-y-6 md:pl-6 scroll-reveal delay-100">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Bespoke Doorstep Surprise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal leading-tight">
                Doorstep surprise planners in Trivandrum.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                Celebrate milestones even when you live far away. We coordinate surprise timelines, gourmet birthday cakes, custom flower boxes, photo memories reveals, and live doorstep performers to turn an ordinary delivery into an unforgettable moment.
              </p>
              <div className="pt-2">
                <Link
                  href="/surprise-delivery"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-rose transition-colors"
                >
                  <span>Learn How It Works</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 9. Luxury Hampers / Collections Teaser */}
        <section className="bg-brand-ivory py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 scroll-reveal">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Studio Catalogues
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                Explore Gifting Series
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COLLECTIONS.map((c, idx) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  className={`group relative flex flex-col justify-end aspect-[3/4] rounded-lg overflow-hidden border border-brand-gold/15 bg-brand-charcoal card-hover-effect scroll-reveal delay-${idx * 75}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.heroImage}
                    alt={c.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-50 image-zoom-effect"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent" />
                  
                  <div className="relative z-10 p-5 space-y-1 text-brand-ivory">
                    <h3 className="font-serif text-lg font-medium leading-tight">{c.name}</h3>
                    <p className="font-sans text-[8px] uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1">
                      <span>Explore</span>
                      <ChevronRight className="h-2.5 w-2.5 text-brand-rose" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Gold Separator Line */}
        <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />

        {/* 10. Instagram Moments (Social Proof) */}
        <section className="bg-white py-16 sm:py-24 border-b border-brand-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 scroll-reveal">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Social Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                Moments from Rhythm
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                A glimpse of custom hampers, floral packaging, and behind-the-scenes at our studio.
              </p>
            </div>

            {/* Grid of editorial social style assets with zoom scale-ups */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 scroll-reveal delay-100">
              <div className="aspect-square relative overflow-hidden rounded border border-brand-gold/10 bg-brand-charcoal group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400&auto=format&fit=crop"
                  alt="Gold ribbon wrapping close up"
                  className="h-full w-full object-cover image-zoom-effect"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded border border-brand-gold/10 bg-brand-charcoal group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=400&auto=format&fit=crop"
                  alt="Custom gift hamper tray selection"
                  className="h-full w-full object-cover image-zoom-effect"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded border border-brand-gold/10 bg-brand-charcoal group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=400&auto=format&fit=crop"
                  alt="Rustic scroll sealing with red wax details"
                  className="h-full w-full object-cover image-zoom-effect"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded border border-brand-gold/10 bg-brand-charcoal group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400&auto=format&fit=crop"
                  alt="Handmade card layout and packaging detailing"
                  className="h-full w-full object-cover image-zoom-effect"
                />
              </div>
            </div>

            <div className="text-center pt-2 scroll-reveal">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-rose hover:underline"
              >
                <span>Follow {BUSINESS_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 11. Final Emotional CTA Section */}
        <section className="bg-brand-charcoal text-brand-ivory py-20 text-center relative overflow-hidden">
          {/* Overlay background for luxury feel */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-charcoal/90 via-brand-charcoal to-brand-charcoal" />
          
          <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 scroll-reveal">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase block">
              Start Planning
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight leading-tight">
              Have someone special in mind?<br />
              <span className="italic font-normal text-gold-gradient font-serif">Let&apos;s make their next moment unforgettable.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 max-w-md mx-auto">
              <Link
                href="/customize"
                className="w-full inline-flex items-center justify-center rounded-full bg-brand-rose px-6 py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300 shadow-sm"
              >
                Create a Gift
              </Link>
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/45 bg-transparent px-6 py-4 font-sans text-xs font-bold tracking-widest uppercase text-brand-ivory hover:border-brand-rose hover:bg-brand-rose/5 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 text-brand-rose" />
                <span>WhatsApp Rhythm</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
