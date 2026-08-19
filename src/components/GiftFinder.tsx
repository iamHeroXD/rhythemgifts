"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, RotateCcw, Heart, Gift, Compass } from "lucide-react";
import { PRODUCTS, Product } from "../data/giftingData";
import ProductCard from "./ProductCard";

export default function GiftFinder() {
  const [recipient, setRecipient] = useState("");
  const [occasion, setOccasion] = useState("");
  const [vibe, setVibe] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [recommended, setRecommended] = useState<Product[]>([]);

  const recipients = [
    { value: "for-her", label: "Her" },
    { value: "for-him", label: "Him" },
    { value: "for-friends", label: "Friends" },
    { value: "for-parents", label: "Parents" },
    { value: "for-couples", label: "Couples" },
    { value: "for-someone-special", label: "Someone Special" },
  ];

  const occasions = [
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "Anniversary" },
    { value: "surprise", label: "Surprise Delivery" },
    { value: "thank-you", label: "Thank You" },
    { value: "congratulations", label: "Congratulations" },
    { value: "just-because", label: "Just Because" },
  ];

  const vibes = [
    { value: "luxury", label: "Luxury & Opulent" },
    { value: "romantic", label: "Romantic & Sweet" },
    { value: "elegant", label: "Refined & Classic" },
    { value: "emotional", label: "Nostalgic & Warm" },
    { value: "cute", label: "Playful & Charming" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Filter products
    const filtered = PRODUCTS.filter((p) => {
      const matchRecipient = !recipient || p.recipients.includes(recipient);
      const matchOccasion = !occasion || p.occasions.includes(occasion);
      const matchVibe = !vibe || p.vibes.includes(vibe);
      return matchRecipient && matchOccasion && matchVibe;
    });

    // Fallback if no exact matches: try filtering by at least recipient or occasion
    if (filtered.length === 0) {
      const fallback = PRODUCTS.filter((p) => {
        const matchRecipient = p.recipients.includes(recipient);
        const matchOccasion = p.occasions.includes(occasion);
        return matchRecipient || matchOccasion;
      });
      setRecommended(fallback.slice(0, 3));
    } else {
      setRecommended(filtered.slice(0, 3));
    }
    
    setShowResults(true);
  };

  const handleReset = () => {
    setRecipient("");
    setOccasion("");
    setVibe("");
    setShowResults(false);
    setRecommended([]);
  };

  return (
    <div className="bg-white border border-brand-gold/15 rounded-lg p-6 sm:p-8 md:p-12 shadow-sm">
      {!showResults ? (
        <form onSubmit={handleSearch} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1: Recipient */}
            <div className="space-y-3">
              <span className="block font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Step 01
              </span>
              <label className="block font-serif text-lg font-medium text-brand-charcoal">
                Who are you gifting?
              </label>
              <div className="relative">
                <select
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-brand-charcoal/80 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Recipient</option>
                  {recipients.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-gold">
                  <ArrowRight className="h-3 w-3 rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 2: Occasion */}
            <div className="space-y-3">
              <span className="block font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Step 02
              </span>
              <label className="block font-serif text-lg font-medium text-brand-charcoal">
                What&apos;s the occasion?
              </label>
              <div className="relative">
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-brand-charcoal/80 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Occasion</option>
                  {occasions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-gold">
                  <ArrowRight className="h-3 w-3 rotate-90" />
                </div>
              </div>
            </div>

            {/* Step 3: Vibe */}
            <div className="space-y-3">
              <span className="block font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Step 03
              </span>
              <label className="block font-serif text-lg font-medium text-brand-charcoal">
                What&apos;s their vibe?
              </label>
              <div className="relative">
                <select
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-brand-charcoal/80 focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Vibe</option>
                  {vibes.map((v) => (
                    <option key={v.value} value={v.value}>
                      {v.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-gold">
                  <ArrowRight className="h-3 w-3 rotate-90" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-brand-gold/10 flex justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-brand-charcoal px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-all duration-300 shadow-sm"
            >
              <span>Find the Perfect Gift</span>
              <Sparkles className="h-4 w-4 text-brand-gold" />
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-gold/15 pb-6 gap-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-brand-charcoal">
                Curated Recommendations
              </h3>
              <p className="text-xs text-brand-charcoal/60 mt-1 uppercase tracking-wider font-sans font-semibold">
                Filters: {recipients.find((r) => r.value === recipient)?.label} •{" "}
                {occasions.find((o) => o.value === occasion)?.label}
                {vibe && ` • ${vibes.find((v) => v.value === vibe)?.label}`}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-wider uppercase text-brand-gold hover:text-brand-rose transition-colors duration-200"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Finder</span>
            </button>
          </div>

          {recommended.length === 0 ? (
            <div className="text-center py-10">
              <Gift className="mx-auto h-10 w-10 text-brand-gold/50 mb-3 stroke-[1.5]" />
              <p className="font-serif text-lg text-brand-charcoal/80">
                We couldn&apos;t find an exact product match, but we can design something completely bespoke!
              </p>
              <p className="text-xs text-brand-charcoal/50 mt-1 max-w-lg mx-auto leading-relaxed">
                Connect with our gift concierges using the Custom Gift Builder or WhatsApp. We build customized hampers tailored to your specific budget and recipient.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Link
                  href="/customize"
                  className="rounded-full bg-brand-rose px-6 py-2.5 font-sans text-xs font-semibold tracking-wider uppercase text-white hover:bg-brand-rose/90 transition-all shadow-sm"
                >
                  Go to Custom Builder
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommended.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <p className="text-center text-xs text-brand-charcoal/50 mt-8 font-sans">
                None of these are quite right? You can also{" "}
                <Link href="/customize" className="text-brand-rose font-bold hover:underline">
                  build a fully customized gift box
                </Link>{" "}
                or{" "}
                <Link href="/gifts" className="text-brand-gold font-bold hover:underline">
                  explore our complete catalogue
                </Link>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
