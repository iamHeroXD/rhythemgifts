import React, { Suspense } from "react";
import GiftsCatalogue from "../../components/GiftsCatalogue";

export const metadata = {
  title: "Shop Premium Customized Gifts | Rhythm Gifts & Hampers",
  description:
    "Explore our collection of custom hampers, personalized photo mirror blocks, roses box combinations, and surprise delivery designs in Trivandrum.",
};

export default function GiftsPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-brand-ivory min-h-screen pt-24 pb-16 flex flex-col items-center justify-center font-sans text-xs font-bold uppercase tracking-widest text-brand-gold gap-4">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-brand-rose border-t-transparent" />
          <span>Loading Catalogue...</span>
        </div>
      }
    >
      <GiftsCatalogue />
    </Suspense>
  );
}
