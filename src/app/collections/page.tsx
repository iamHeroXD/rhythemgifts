import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { COLLECTIONS } from "../../data/giftingData";
import { Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gift Collections | Rhythm Gifts & Hampers",
  description: "Browse curated gift collections including luxury hampers, surprise doorstep deliveries, customized keepsakes, and thoughtful tokens in Trivandrum.",
};

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Gift Collections" }]} />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-16 space-y-3">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Curated Series
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
              Explore our collections.
            </h1>
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed">
              Carefully grouped selections designed to simplify discovery while honoring the premium quality of each gift.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {COLLECTIONS.map((c) => (
              <div
                key={c.slug}
                className="group relative flex flex-col bg-white border border-brand-gold/15 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
              >
                {/* Image Wrap */}
                <Link
                  href={`/collections/${c.slug}`}
                  className="relative block aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-brand-charcoal"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.heroImage}
                    alt={`${c.name} Collection Showcase`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
                </Link>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase">
                      Studio Catalogue
                    </span>
                    <Link href={`/collections/${c.slug}`} className="focus:outline-none">
                      <h2 className="font-serif text-2xl font-medium text-brand-charcoal hover:text-brand-rose transition-colors">
                        {c.name}
                      </h2>
                    </Link>
                    <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed line-clamp-3">
                      {c.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-brand-gold/10">
                    <Link
                      href={`/collections/${c.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-wider uppercase text-brand-charcoal hover:text-brand-rose transition-colors duration-200"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="h-4 w-4 text-brand-gold" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
