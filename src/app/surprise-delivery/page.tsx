import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { MessageCircle, Heart, Star, Gift, ShieldCheck, Compass, Sparkles } from "lucide-react";
import { getWhatsAppLink, getSurprisePlanningMessage } from "../../utils/whatsapp";

export const metadata = {
  title: "Surprise doorstep delivery Trivandrum | Rhythm Gifts & Hampers",
  description: "Plan a doorstep surprise delivery in Trivandrum, Kerala. We arrange flower bouquets, custom cakes, musical greetings, and luxury custom hamper reveals.",
};

export default function SurpriseDeliveryPage() {
  const planSurpriseLink = getWhatsAppLink(getSurprisePlanningMessage());

  const steps = [
    {
      step: "01",
      title: "Choose the moment",
      description: "Pick a date and milestone—birthdays, anniversaries, or just a simple surprise to let them know they are missed."
    },
    {
      step: "02",
      title: "Tell us who it's for",
      description: "Share details about the recipient. Are they in Trivandrum? What are their likes, favorite cake flavors, or color vibes?"
    },
    {
      step: "03",
      title: "Customize the surprise",
      description: "Select custom elements: fresh bouquets, heart-shaped cakes, name chocolates, custom photos, or surprise scrolls."
    },
    {
      step: "04",
      title: "We prepare the details",
      description: "Our Trivandrum studio freshly prepares the flowers, bakes the cake, wraps the custom items, and styles the layout."
    },
    {
      step: "05",
      title: "The surprise arrives",
      description: "Our coordinator handles the doorstep reveal at the scheduled slot, creating a memorable, emotional experience."
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Surprise Deliveries" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-rose/5 border border-brand-rose/25 px-3 py-1 text-[9px] font-sans font-bold tracking-widest text-brand-rose uppercase">
                <Sparkles className="h-2.5 w-2.5 text-brand-rose" />
                <span>Bespoke Doorstep Service</span>
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-charcoal leading-tight">
                They know you&apos;re sending a gift.<br />
                <span className="italic text-brand-gold">They don&apos;t know what&apos;s coming.</span>
              </h1>
              <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 leading-relaxed max-w-2xl">
                We coordinate emotional doorstep reveals across Trivandrum. Whether you live far away, abroad, or are celebrating locally, we bring the magic directly to their door.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={planSurpriseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-all duration-300 shadow-sm"
                >
                  <span>Plan a Surprise</span>
                  <MessageCircle className="h-4 w-4 text-brand-gold" />
                </a>
                <a
                  href="/gifts?category=surprise-deliveries"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-gold/45 bg-white px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose transition-all duration-300"
                >
                  <span>Browse Surprise Collections</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-lg overflow-hidden border border-brand-gold/15 bg-brand-charcoal shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop"
                alt="A beautiful doorstep flower delivery surprise presentation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Surprise Experience Explanation */}
          <div className="border-t border-brand-gold/15 py-16 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                The Anatomy of a Surprise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                What happens when they open the door?
              </h2>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed">
                A surprise isn&apos;t about the package; it&apos;s about the feelings that unfold. Here is how we build the experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Experience 1 */}
              <div className="bg-white border border-brand-gold/10 p-8 rounded-lg space-y-3">
                <span className="font-serif text-sm font-semibold italic text-brand-gold">01. The Anticipation</span>
                <h3 className="font-serif text-lg font-medium text-brand-charcoal">An Unexpected Knock</h3>
                <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed">
                  The magic begins with an unscheduled doorbell chime or knock. A friendly coordinator greets them with a beautifully styled bouquet and ribboned hamper box.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="bg-white border border-brand-gold/10 p-8 rounded-lg space-y-3">
                <span className="font-serif text-sm font-semibold italic text-brand-gold">02. The Reveal</span>
                <h3 className="font-serif text-lg font-medium text-brand-charcoal">Handwritten Words</h3>
                <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed">
                  Before the gifts are opened, they receive a customized scroll or wax-sealed message card. Your thoughts are read first, focusing the moment on the emotion.
                </p>
              </div>

              {/* Experience 3 */}
              <div className="bg-white border border-brand-gold/10 p-8 rounded-lg space-y-3">
                <span className="font-serif text-sm font-semibold italic text-brand-gold">03. The Memory</span>
                <h3 className="font-serif text-lg font-medium text-brand-charcoal">Preserving the Emotion</h3>
                <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed">
                  They open customized photos and custom tokens, enjoying fresh cakes and flowers. The memory of being thought of from afar remains long after the day ends.
                </p>
              </div>
            </div>
          </div>

          {/* The Timeline Steps */}
          <div className="border-t border-brand-gold/15 py-16">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                The Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-charcoal">
                How we plan your doorstep surprise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="bg-white border border-brand-gold/10 p-6 rounded-lg relative flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="block font-serif text-3xl font-bold text-brand-gold/30">
                      {item.step}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-brand-charcoal leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NRI Callout */}
          <div className="bg-brand-charcoal text-brand-ivory border border-brand-gold/20 p-8 sm:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 mt-8 shadow-sm">
            <div className="space-y-3 max-w-xl">
              <span className="font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                <span>NRI & International Customers</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                Celebrating Trivandrum from anywhere in the world.
              </h3>
              <p className="font-sans text-xs text-brand-ivory/70 leading-relaxed">
                Over half of our surprise bookings are placed by loved ones residing in the Middle East, Europe, Americas, and other parts of India. We handle local Trivandrum time coordination, flower freshness setups, and secure online payment processing.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href={planSurpriseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-rose px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300 shadow-sm"
              >
                <span>Book a Doorstep Reveal</span>
                <MessageCircle className="h-4.5 w-4.5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
