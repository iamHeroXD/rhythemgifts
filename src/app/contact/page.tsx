import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { MessageCircle, MapPin, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "../../data/giftingData";
import { getWhatsAppLink } from "../../utils/whatsapp";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export const metadata = {
  title: "Contact Our Studio | Rhythm Gifts & Hampers",
  description: "Get in touch with Rhythm Gifts & Hampers in Trivandrum. WhatsApp or DM us on Instagram to discuss custom hampers and surprise deliveries.",
};

export default function ContactPage() {
  const customEnquiryLink = getWhatsAppLink("Hi Rhythm Gifts & Hampers! I'd like to discuss a customized gift hamper.");
  const surpriseEnquiryLink = getWhatsAppLink("Hi Rhythm Gifts & Hampers! I'd like to ask about planning a surprise delivery in Trivandrum.");

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact Us" }]} />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-12 space-y-3">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-brand-charcoal text-balance">
              Let&apos;s build a moment together.
            </h1>
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/65 leading-relaxed">
              We operate as a premium customized gifting studio. Connect with us directly to plan your hampers or surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Left: Contact Information Cards */}
            <div className="md:col-span-1 space-y-4">
              
              {/* WhatsApp Card */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded space-y-3">
                <div className="inline-flex rounded-full bg-brand-rose/5 p-2 text-brand-rose">
                  <MessageCircle className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-light text-brand-charcoal">
                    WhatsApp Enquiry
                  </h3>
                  <p className="font-sans text-[10px] text-brand-charcoal/50 mt-0.5">
                    Fastest way to discuss options & pricing.
                  </p>
                </div>
                <a
                  href={customEnquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-xs font-bold text-brand-rose hover:underline"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Instagram Card */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded space-y-3">
                <div className="inline-flex rounded-full bg-brand-gold/5 p-2 text-brand-gold">
                  <InstagramIcon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-light text-brand-charcoal">
                    Instagram Direct Message
                  </h3>
                  <p className="font-sans text-[10px] text-brand-charcoal/50 mt-0.5">
                    Explore visual posts and DM us.
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-xs font-bold text-brand-gold hover:underline"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white border border-brand-gold/10 p-6 rounded space-y-3">
                <div className="inline-flex rounded-full bg-brand-charcoal/5 p-2 text-brand-gold">
                  <MapPin className="h-4.5 w-4.5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-light text-brand-charcoal">
                    Studio Location
                  </h3>
                  <p className="font-sans text-[10px] text-brand-charcoal/50 mt-0.5">
                    Local operations & doorstep delivery.
                  </p>
                </div>
                <span className="block font-sans text-xs font-semibold text-brand-charcoal/80 leading-tight">
                  {BUSINESS_INFO.location}
                </span>
              </div>
            </div>

            {/* Right: Quick Action Inquiry Options & Pipeline Description */}
            <div className="md:col-span-2 bg-white border border-brand-gold/10 p-6 sm:p-8 rounded flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-light text-brand-charcoal mb-2">
                    What happens after you contact us?
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    We keep things human and simple. You won&apos;t be routed through complex checkout shopping systems.
                  </p>
                </div>

                {/* The 3-Step Simple Pipeline */}
                <div className="grid grid-cols-1 gap-4 font-sans text-xs">
                  <div className="flex gap-3">
                    <span className="font-serif text-lg font-bold text-brand-rose/60">01</span>
                    <div>
                      <h4 className="font-bold text-brand-charcoal">Establish Details on WhatsApp</h4>
                      <p className="text-brand-charcoal/60 mt-0.5">Click one of the templates or build a hamper via our online questionnaire. We align on initials, ribbon choices, and delivery slot details directly in chat.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-serif text-lg font-bold text-brand-rose/60">02</span>
                    <div>
                      <h4 className="font-bold text-brand-charcoal">Curation Draft & Sourcing</h4>
                      <p className="text-brand-charcoal/60 mt-0.5">We share design mockups. Once you approve, we secure local morning flowers, custom bake your cakes, and hand-assemble your custom plaques at our studio.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-serif text-lg font-bold text-brand-rose/60">03</span>
                    <div>
                      <h4 className="font-bold text-brand-charcoal">Doorstep Surprise Reveal</h4>
                      <p className="text-brand-charcoal/60 mt-0.5">Our coordinator executes the delivery at the scheduled slot. We can even send you photo/video confirmations of the unboxing smile.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-brand-gold/10">
                  <h4 className="font-serif text-base font-light text-brand-charcoal">Pre-filled WhatsApp shortcuts:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={customEnquiryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded bg-brand-ivory p-4 border border-brand-gold/15 hover:border-brand-rose transition-all"
                    >
                      <span className="font-sans text-xs font-semibold text-brand-charcoal">Enquire Hamper Customization</span>
                      <MessageCircle className="h-4 w-4 text-brand-rose flex-shrink-0 ml-2" />
                    </a>

                    <a
                      href={surpriseEnquiryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded bg-brand-ivory p-4 border border-brand-gold/15 hover:border-brand-rose transition-all"
                    >
                      <span className="font-sans text-xs font-semibold text-brand-charcoal">Plan Doorstep Surprise</span>
                      <MessageCircle className="h-4 w-4 text-brand-rose flex-shrink-0 ml-2" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-gold/10 text-center md:text-left mt-6">
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase block mb-1">
                  Urgent Order Notice
                </span>
                <p className="font-sans text-[11px] text-brand-charcoal/50 leading-relaxed">
                  Have an urgent delivery requirement? Reach us directly via call: <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-brand-charcoal hover:text-brand-rose">{BUSINESS_INFO.phone}</a> to inspect slot timings.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
