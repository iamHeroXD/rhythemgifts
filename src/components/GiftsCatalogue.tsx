"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import ProductCard from "./ProductCard";
import { PRODUCTS, COLLECTIONS, OCCASIONS, RECIPIENTS, Product } from "../data/giftingData";
import { SlidersHorizontal, RotateCcw, Search } from "lucide-react";

export default function GiftsCatalogue() {
  const searchParams = useSearchParams();
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedOccasion, setSelectedOccasion] = useState("all");
  const [selectedRecipient, setSelectedRecipient] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Sync filters with URL query parameters on load
  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    const occasionQuery = searchParams.get("occasion");
    const recipientQuery = searchParams.get("recipient");

    if (categoryQuery && COLLECTIONS.some(c => c.slug === categoryQuery)) {
      setSelectedCategory(categoryQuery);
    }
    if (occasionQuery && OCCASIONS.some(o => o.slug === occasionQuery)) {
      setSelectedOccasion(occasionQuery);
    }
    if (recipientQuery && RECIPIENTS.some(r => r.slug === recipientQuery)) {
      setSelectedRecipient(recipientQuery);
    }
  }, [searchParams]);

  // Apply filtering logic
  useEffect(() => {
    let result = PRODUCTS;

    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedOccasion !== "all") {
      result = result.filter(p => p.occasions.includes(selectedOccasion));
    }
    if (selectedRecipient !== "all") {
      result = result.filter(p => p.recipients.includes(selectedRecipient));
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.features.some(f => f.toLowerCase().includes(query))
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedOccasion, selectedRecipient, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedOccasion("all");
    setSelectedRecipient("all");
    setSearchQuery("");
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Gifts Catalogue" }]} />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-12 space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Studio Catalogue
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal text-balance">
              Browse our creations.
            </h1>
          </div>

          {/* Filter Bar Panel */}
          <div className="bg-white border border-brand-gold/15 p-5 rounded mb-8 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Control */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-gold/70" />
                <input
                  type="text"
                  placeholder="Search gifts, features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded pl-10 pr-4 py-2.5 font-sans text-xs font-semibold text-brand-charcoal placeholder-brand-charcoal/30 focus:border-brand-rose focus:outline-none"
                />
              </div>

              {/* Mobile Filter Toggle & Reset Button */}
              <div className="flex items-center gap-3 justify-between md:justify-end">
                <button
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                  className="flex items-center gap-2 rounded border border-brand-gold/20 bg-white px-4 py-2 font-sans text-[10px] font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose transition-colors duration-200"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5 text-brand-gold" />
                  <span>Filters</span>
                </button>

                {(selectedCategory !== "all" || selectedOccasion !== "all" || selectedRecipient !== "all" || searchQuery !== "") && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 font-sans text-[10px] font-bold tracking-wider uppercase text-brand-gold hover:text-brand-rose transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Filter Selections Container */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-gold/10 transition-all duration-300 ${
                isFilterMenuOpen ? "block" : "hidden"
              }`}
            >
              {/* Category Filter */}
              <div className="space-y-1.5">
                <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-gold uppercase">
                  Collection
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded px-3 py-2 font-sans text-xs text-brand-charcoal/80 focus:border-brand-rose focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="all">All Collections</option>
                  {COLLECTIONS.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Occasion Filter */}
              <div className="space-y-1.5">
                <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-gold uppercase">
                  Occasion
                </label>
                <select
                  value={selectedOccasion}
                  onChange={(e) => setSelectedOccasion(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded px-3 py-2 font-sans text-xs text-brand-charcoal/80 focus:border-brand-rose focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="all">All Occasions</option>
                  {OCCASIONS.map((o) => (
                    <option key={o.slug} value={o.slug}>
                      {o.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Recipient Filter */}
              <div className="space-y-1.5">
                <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-gold uppercase">
                  Gifting For
                </label>
                <select
                  value={selectedRecipient}
                  onChange={(e) => setSelectedRecipient(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded px-3 py-2 font-sans text-xs text-brand-charcoal/80 focus:border-brand-rose focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="all">All Recipients</option>
                  {RECIPIENTS.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Product Listing */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-brand-gold/10 pb-2">
              <span className="font-sans text-xs text-brand-charcoal/50">
                Showing {filteredProducts.length} product{filteredProducts.length > 1 ? "s" : ""}
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white border border-brand-gold/10 rounded">
                <p className="font-serif text-lg text-brand-charcoal/70">
                  We couldn&apos;t find matching designs for your filters.
                </p>
                <p className="text-xs text-brand-charcoal/50 mt-1">
                  Reset the filters or use the Custom Builder to design a bespoke order from scratch!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
