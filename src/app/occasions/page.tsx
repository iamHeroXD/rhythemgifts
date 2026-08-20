import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductCard from "../../components/ProductCard";
import { OCCASIONS, PRODUCTS } from "../../data/giftingData";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Shop Gifts by Occasion | Rhythm Gifts & Hampers",
  description: "Browse curated hampers and surprise delivery choices organized by occasion: birthday, anniversary, surprise reveals, congratulations, and more.",
};

export default function OccasionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Shop by Occasion" }]} />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-16 space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Curated Occasions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal text-balance">
              Make their day theirs.
            </h1>
          </div>

          {/* Occasion List Blocks */}
          <div className="space-y-24">
            {OCCASIONS.map((occ, index) => {
              const matchedProducts = PRODUCTS.filter((p) => p.occasions.includes(occ.slug)).slice(0, 3);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={occ.slug}
                  id={occ.slug}
                  className="border-b border-brand-gold/10 pb-16 last:border-0 scroll-mt-24 space-y-8"
                >
                  {/* Occasion Intro Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Block (Desirable photography) */}
                    <div
                      className={`lg:col-span-5 relative aspect-[3/2] sm:aspect-[16/10] overflow-hidden rounded border border-brand-gold/15 bg-brand-charcoal ${
                        isEven ? "lg:order-first" : "lg:order-last"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={occ.image}
                        alt={`${occ.name} Gifting Arrangements`}
                        className="h-full w-full object-cover opacity-90 image-zoom-effect"
                        loading="lazy"
                      />
                    </div>

                    {/* Text Block */}
                    <div className="lg:col-span-7 space-y-4 text-left">
                      <span className="font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase">
                        Celebrating Moments
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-light text-brand-charcoal">
                        {occ.name}
                      </h2>
                      <p className="font-serif text-lg italic text-brand-rose leading-tight">
                        &ldquo;{occ.tagline}&rdquo;
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                        {occ.description}
                      </p>
                      <div className="pt-2">
                        <Link
                          href={`/gifts?occasion=${occ.slug}`}
                          className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-wider uppercase text-brand-charcoal hover:text-brand-rose transition-colors"
                        >
                          <span>Explore All {occ.name} Gifts</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Matching Gifts (Breathable structured grid) */}
                  {matchedProducts.length > 0 && (
                    <div className="space-y-4 pt-4 text-left">
                      <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase border-b border-brand-gold/10 pb-1">
                        Featured for {occ.name}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {matchedProducts.map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
