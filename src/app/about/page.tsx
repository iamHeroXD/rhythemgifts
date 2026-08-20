import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { BUSINESS_INFO } from "../../data/giftingData";

export const metadata = {
  title: "Our Philosophy | Rhythm Gifts & Hampers",
  description: "Read about the gifting philosophy of Rhythm Gifts & Hampers. We specialize in custom gifts, luxury hampers, and doorstep surprise delivery in Trivandrum, Kerala.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About Our Studio" }]} />

          {/* Editorial Intro */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-16 space-y-4">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Who We Are
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal text-balance">
              Thoughtful gifting, made personal.
            </h1>
            <p className="font-serif text-lg text-brand-rose leading-relaxed italic">
              &ldquo;{BUSINESS_INFO.emotionalTagline}&rdquo;
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="space-y-16">
            {/* Visual Block (Editorial layout) */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-brand-gold/15 bg-brand-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury wrapping ribbons and custom gift card detailing"
                className="h-full w-full object-cover opacity-90 image-zoom-effect"
              />
            </div>

            {/* Content Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-light text-brand-charcoal">
                  Our Focus
                </h2>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                  Based in Trivandrum, Kerala, <strong>Rhythm Gifts & Hampers</strong> was established to bridge the gap between ordinary gift shops and bespoke, emotional gifting experiences. We believe that a gift box isn&apos;t simply a collection of retail items. It is a physical expression of an emotion.
                </p>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                  Our studio specializes in designing custom hampers, tailoring specific details to match your recipient&apos;s personality, and organizing doorstep surprise deliveries. Whether you want to spell out their name in custom-wrapped chocolates, frame their favorite memory, or arrange fresh flowers with cakes, we handle every detail with meticulous care.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-light text-brand-charcoal">
                  Bespoke Doorstep Surprises
                </h2>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                  One of our most popular offerings is our <strong>doorstep surprise delivery service</strong>. We cater extensively to customers residing outside Trivandrum and internationally (NRI families) who wish to send their love and celebrate milestones with their family, partners, or friends back home in Kerala.
                </p>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                  We manage the logistical details, cake procurement, customized cards, and doorstep reveals. Our team ensures that when your loved one opens the door, they aren&apos;t just receiving a box—they are experiencing a beautifully coordinated emotional moment.
                </p>
              </div>
            </div>

            {/* Service Values Grid */}
            <div className="border-t border-brand-gold/10 pt-16">
              <h3 className="font-serif text-2xl font-light text-brand-charcoal text-center mb-12">
                How We Make It Happen
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Item 1 */}
                <div className="space-y-3">
                  <span className="block font-sans text-[10px] font-bold tracking-widest text-brand-rose uppercase">
                    01 / Curation
                  </span>
                  <h4 className="font-serif text-lg font-light text-brand-charcoal">
                    Bespoke Personalization
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Custom engravings, photo prints, customized message scrolls, and name-wrapped chocolates made just for them.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="space-y-3">
                  <span className="block font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                    02 / Delivery
                  </span>
                  <h4 className="font-serif text-lg font-light text-brand-charcoal">
                    Emotional Experiences
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    We plan the reveal sequence, cards, and doorstep details to maximize the surprise and capture the memory.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="space-y-3">
                  <span className="block font-sans text-[10px] font-bold tracking-widest text-brand-rose uppercase">
                    03 / Local TVM
                  </span>
                  <h4 className="font-serif text-lg font-light text-brand-charcoal">
                    Local Trivandrum Support
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Dedicated operations in Trivandrum to source fresh local flowers, gourmet cakes, and coordinate precise deliveries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
