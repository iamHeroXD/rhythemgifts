"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, Gift, Sparkles, Heart, Compass } from "lucide-react";
import { PRODUCTS, COLLECTIONS, OCCASIONS, Product, Collection, Occasion } from "../data/giftingData";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{
    products: Product[];
    collections: Collection[];
    occasions: Occasion[];
  }>({ products: [], collections: [], occasions: [] });

  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Perform search
  useEffect(() => {
    if (!query.trim()) {
      setResults({ products: [], collections: [], occasions: [] });
      return;
    }

    const cleanQuery = query.toLowerCase();

    const matchedProducts = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(cleanQuery) ||
        p.description.toLowerCase().includes(cleanQuery) ||
        p.longDescription.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.vibes.some((v) => v.toLowerCase().includes(cleanQuery)) ||
        p.occasions.some((o) => o.toLowerCase().includes(cleanQuery)) ||
        p.recipients.some((r) => r.toLowerCase().includes(cleanQuery))
    );

    const matchedCollections = COLLECTIONS.filter(
      (c) =>
        c.name.toLowerCase().includes(cleanQuery) ||
        c.description.toLowerCase().includes(cleanQuery)
    );

    const matchedOccasions = OCCASIONS.filter(
      (o) =>
        o.name.toLowerCase().includes(cleanQuery) ||
        o.description.toLowerCase().includes(cleanQuery) ||
        o.tagline.toLowerCase().includes(cleanQuery)
    );

    setResults({
      products: matchedProducts,
      collections: matchedCollections,
      occasions: matchedOccasions,
    });
  }, [query]);

  if (!isOpen) return null;

  const popularSearches = [
    { label: "Anniversary Hampers", term: "anniversary" },
    { label: "Birthday Surprises", term: "birthday" },
    { label: "Gifts For Her", term: "for-her" },
    { label: "Magic Mirror", term: "mirror" },
    { label: "Luxury Tray", term: "luxury" },
  ];

  const totalResults = results.products.length + results.collections.length + results.occasions.length;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-brand-ivory/98 backdrop-blur-md animate-fade-in">
      {/* Search Header */}
      <div className="flex items-center justify-between border-b border-brand-gold/20 px-6 py-4 md:px-12">
        <div className="flex flex-1 items-center gap-3">
          <Search className="h-5 w-5 text-brand-gold" />
          <input
            ref={inputRef}
            type="text"
            placeholder="What are you celebrating? Search gifts, occasions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-serif text-lg md:text-2xl text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none"
          />
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-brand-charcoal/60 hover:bg-brand-charcoal/5 hover:text-brand-charcoal transition-all"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Search Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Default state when query is empty */}
          {!query && (
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-wider text-brand-gold uppercase mb-3">
                  Popular Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item) => (
                    <button
                      key={item.term}
                      onClick={() => setQuery(item.term)}
                      className="flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-white px-4 py-2 text-sm text-brand-charcoal hover:border-brand-rose hover:bg-brand-rose/5 transition-all duration-200"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-sans text-xs font-semibold tracking-wider text-brand-gold uppercase mb-4">
                  Browse by Collection
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {COLLECTIONS.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-lg bg-white p-4 border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-300"
                    >
                      <div>
                        <h4 className="font-serif font-medium text-brand-charcoal group-hover:text-brand-rose transition-colors">
                          {c.name}
                        </h4>
                        <p className="text-xs text-brand-charcoal/50 line-clamp-1 mt-0.5">
                          {c.description}
                        </p>
                      </div>
                      <Compass className="h-5 w-5 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results State */}
          {query && (
            <div className="space-y-8">
              {totalResults === 0 ? (
                <div className="text-center py-16 animate-fade-in">
                  <Gift className="mx-auto h-12 w-12 text-brand-gold/40 stroke-[1.5] mb-4" />
                  <p className="font-serif text-xl text-brand-charcoal/80">
                    We couldn&apos;t find anything matching &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-sm text-brand-charcoal/50 mt-1 max-w-md mx-auto">
                    Try searching for terms like &ldquo;hamper&rdquo;, &ldquo;roses&rdquo;, &ldquo;birthday&rdquo;, or use our Custom Builder to make a bespoke order.
                  </p>
                  <Link
                    href="/customize"
                    onClick={onClose}
                    className="inline-block mt-6 rounded-full bg-brand-rose px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-rose/90 transition-all shadow-sm"
                  >
                    Use Custom Gift Builder
                  </Link>
                </div>
              ) : (
                <div className="space-y-8 animate-fade-in-up">
                  <p className="text-sm text-brand-charcoal/40">
                    Found {totalResults} result{totalResults > 1 ? "s" : ""} for &ldquo;{query}&rdquo;
                  </p>

                  {/* Products Matches */}
                  {results.products.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-sans text-xs font-semibold tracking-wider text-brand-gold uppercase border-b border-brand-gold/10 pb-1">
                        Gifts ({results.products.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {results.products.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/gifts/${p.slug}`}
                            onClick={onClose}
                            className="group flex gap-3 rounded-lg bg-white p-3 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-sm transition-all"
                          >
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded bg-brand-ivory">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={p.images[0]}
                                alt={p.name}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="flex flex-col justify-center min-w-0">
                              <span className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">
                                {p.category.replace("-", " ")}
                              </span>
                              <h4 className="font-serif text-sm font-medium text-brand-charcoal group-hover:text-brand-rose transition-colors truncate">
                                {p.name}
                              </h4>
                              <p className="text-xs text-brand-charcoal/60 truncate mt-0.5">
                                {p.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Collections Matches */}
                  {results.collections.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-sans text-xs font-semibold tracking-wider text-brand-gold uppercase border-b border-brand-gold/10 pb-1">
                        Collections ({results.collections.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {results.collections.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/collections/${c.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between rounded-lg bg-white p-4 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-sm transition-all"
                          >
                            <div>
                              <h4 className="font-serif text-sm font-medium text-brand-charcoal group-hover:text-brand-rose transition-colors">
                                {c.name}
                              </h4>
                              <p className="text-xs text-brand-charcoal/50 mt-0.5 line-clamp-1">
                                {c.description}
                              </p>
                            </div>
                            <Compass className="h-4 w-4 text-brand-gold" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Occasions Matches */}
                  {results.occasions.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-sans text-xs font-semibold tracking-wider text-brand-gold uppercase border-b border-brand-gold/10 pb-1">
                        Occasions ({results.occasions.length})
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {results.occasions.map((o) => (
                          <Link
                            key={o.slug}
                            href={`/occasions#${o.slug}`}
                            onClick={onClose}
                            className="group flex items-center justify-between rounded-lg bg-white p-4 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-sm transition-all"
                          >
                            <div>
                              <h4 className="font-serif text-sm font-medium text-brand-charcoal group-hover:text-brand-rose transition-colors">
                                {o.name}
                              </h4>
                              <p className="text-xs text-brand-charcoal/50 mt-0.5 line-clamp-1">
                                {o.tagline}
                              </p>
                            </div>
                            <Heart className="h-4 w-4 text-brand-rose" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
