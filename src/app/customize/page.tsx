import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import CustomGiftBuilder from "../../components/CustomGiftBuilder";
import { Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../../utils/whatsapp";
import { BUSINESS_INFO } from "../../data/giftingData";

export const metadata = {
  title: "Create Custom Gifts | Rhythm Gifts & Hampers",
  description: "Use our custom gift builder to design a bespoke hamper or surprise delivery. Connect with our concierges in Trivandrum, Kerala on WhatsApp.",
};

export default function CustomizePage() {
  const directLink = getWhatsAppLink("Hi Rhythm! I'd like to talk to a designer about building a custom hamper from scratch.");

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Custom Gifting" }]} />

          {/* Hero Intro */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-12 space-y-3">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase flex items-center justify-center gap-1.5">
              <Sparkles className="h-3 w-3 text-brand-rose" />
              <span>Bespoke Concierge</span>
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
              Made for them.
            </h1>
            <h2 className="font-serif text-2xl sm:text-3xl italic text-brand-gold -mt-2">
              Not just picked for them.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed pt-2">
              Tell us what you are celebrating, who you are gifting, and your budget limit. We will coordinate layout drafts, item combinations, and pack a beautiful custom hamper box.
            </p>
          </div>

          {/* The Builder Component */}
          <div className="py-4">
            <CustomGiftBuilder />
          </div>

          {/* Direct Contact Callout */}
          <div className="mt-16 text-center border-t border-brand-gold/15 pt-12 space-y-4">
            <h3 className="font-serif text-2xl font-medium text-brand-charcoal">
              Prefer to design directly?
            </h3>
            <p className="font-sans text-xs text-brand-charcoal/60 max-w-md mx-auto leading-relaxed">
              If you want to skip the builder questionnaire and chat with our design coordinators directly, connect with us. Share your ideas, images, or examples.
            </p>
            <div className="pt-2">
              <a
                href={directLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-gold/45 bg-white px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose transition-all duration-300"
              >
                <span>Chat Directly on WhatsApp</span>
                <MessageCircle className="h-4 w-4 text-brand-rose" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
