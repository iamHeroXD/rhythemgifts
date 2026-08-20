import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { MessageCircle, ShieldCheck } from "lucide-react";
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
        
        {/* Cinematic Hero split layout */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Surprise Deliveries" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8 mb-24">
            
            {/* Left text panel */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <span className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Bespoke Doorstep Service
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-brand-charcoal leading-tight">
                They know you&apos;re sending a gift.<br />
                <span className="italic font-light text-brand-rose">They don&apos;t know what&apos;s coming.</span>
              </h1>
              
              <p className="font-sans text-sm sm:text-base text-brand-charcoal/70 leading-relaxed max-w-2xl">
                We coordinate doorstep reveals across Trivandrum. Whether you live far away, abroad, or are celebrating locally, we bring the magic directly to their door.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={planSurpriseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-brand-charcoal px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-colors duration-300 shadow-sm"
                >
                  <span>Plan a Surprise</span>
                  <MessageCircle className="h-4 w-4 text-brand-gold" />
                </a>
                <a
                  href="/gifts?category=surprise-deliveries"
                  className="inline-flex items-center gap-2 rounded border border-brand-gold/45 bg-white px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose transition-colors duration-300"
                >
                  <span>Browse Collections</span>
                </a>
              </div>
            </div>

            {/* Right image panel (Desirable visual) */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded overflow-hidden border border-brand-gold/15 bg-brand-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop"
                alt="A beautiful doorstep flower delivery surprise presentation"
                className="h-full w-full object-cover opacity-90 image-zoom-effect"
                loading="eager"
              />
            </div>
          </div>

          {/* The Anatomy of a Surprise (Sensory unboxing columns) */}
          <div className="border-t border-brand-gold/10 py-20 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                The Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-charcoal">
                What happens when they open the door?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Experience 1 */}
              <div className="space-y-3">
                <span className="block font-serif text-sm font-semibold italic text-brand-rose">01 / The Anticipation</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal">An Unexpected Knock</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed">
                  The magic begins with an unscheduled doorbell chime or knock. A coordinator greets them with a beautifully styled bouquet and ribboned hamper box.
                </p>
              </div>

              {/* Experience 2 */}
              <div className="space-y-3">
                <span className="block font-serif text-sm font-semibold italic text-brand-gold">02 / The Reveal</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal">Handwritten Words First</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed">
                  Before the gifts are opened, they receive a customized scroll or wax-sealed message card. Your thoughts are read first, focusing the moment on the emotion.
                </p>
              </div>

              {/* Experience 3 */}
              <div className="space-y-3">
                <span className="block font-serif text-sm font-semibold italic text-brand-rose">03 / The Memory</span>
                <h3 className="font-serif text-xl font-light text-brand-charcoal">Bespoke Curation Details</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed">
                  They open customized photos and custom tokens, enjoying fresh cakes and flowers. The memory of being thought of from afar remains long after.
                </p>
              </div>
            </div>
          </div>

          {/* Sensory Details of an Unboxing */}
          <div className="border-t border-brand-gold/10 py-20 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                The Details
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-charcoal">
                Sensory packaging details.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Sensory 1: Touch */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded flex gap-4">
                <span className="font-serif text-2xl font-light italic text-brand-rose select-none">T</span>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-light text-brand-charcoal">The Textures & Finish</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Textured rigid-board gift boxes wrapped with double-faced satin ribbons and authentic, hand-stamped hot wax seals. The tactile sensation sets a tone of luxury.
                  </p>
                </div>
              </div>

              {/* Sensory 2: Aroma */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded flex gap-4">
                <span className="font-serif text-2xl font-light italic text-brand-gold select-none">A</span>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-light text-brand-charcoal">The Scent & Aroma</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Opening the box releases the light, soothing fragrance of hand-poured vanilla, lavender, or rose soy wax candles, infusing the packaging with sensory nostalgia.
                  </p>
                </div>
              </div>

              {/* Sensory 3: Vision */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded flex gap-4">
                <span className="font-serif text-2xl font-light italic text-brand-rose select-none">V</span>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-light text-brand-charcoal">The Visual Curation</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Meticulously arranged local red roses, customized name spell-out chocolates, and glowing LED photo plaque mirrors aligned in a perfect balanced grid.
                  </p>
                </div>
              </div>

              {/* Sensory 4: Word */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded flex gap-4">
                <span className="font-serif text-2xl font-light italic text-brand-gold select-none">W</span>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-light text-brand-charcoal">The Calligraphy Scroll</h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Your personal message, printed on premium burnt-edge cardstock or scroll paper, rolled and sealed with gold wax, ensuring your words are read first.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Timeline Steps */}
          <div className="border-t border-brand-gold/10 py-20">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                The Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-charcoal">
                How we plan your doorstep surprise
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="bg-white border border-brand-gold/10 p-6 rounded flex flex-col justify-between space-y-4">
                  <span className="block font-serif text-3xl font-light text-brand-gold/40">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-base font-light text-brand-charcoal leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* NRI Callout */}
          <div className="bg-brand-charcoal text-brand-ivory border border-brand-gold/15 p-8 sm:p-12 rounded flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
            <div className="space-y-4 max-w-xl text-left">
              <span className="font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand-gold" />
                <span>NRI & International Gifting</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light">
                Celebrating Trivandrum from anywhere.
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
                className="inline-flex items-center gap-2 rounded bg-brand-rose px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300"
              >
                <span>Book a Doorstep Reveal</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
