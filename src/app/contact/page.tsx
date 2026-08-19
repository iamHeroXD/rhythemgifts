import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { MessageCircle, MapPin, Phone, HelpCircle } from "lucide-react";
import { BUSINESS_INFO } from "../../data/giftingData";
import { getWhatsAppLink } from "../../utils/whatsapp";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
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
              <div className="bg-white border border-brand-gold/15 p-6 rounded-lg space-y-3">
                <div className="inline-flex rounded-full bg-brand-rose/5 p-2.5 text-brand-rose">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal">
                    WhatsApp Enquiry
                  </h3>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">
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
              <div className="bg-white border border-brand-gold/15 p-6 rounded-lg space-y-3">
                <div className="inline-flex rounded-full bg-brand-gold/5 p-2.5 text-brand-gold">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal">
                    Instagram Direct Message
                  </h3>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">
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
              <div className="bg-white border border-brand-gold/15 p-6 rounded-lg space-y-3">
                <div className="inline-flex rounded-full bg-brand-charcoal/5 p-2.5 text-brand-charcoal">
                  <MapPin className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal">
                    Studio Location
                  </h3>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">
                    Local operations & doorstep delivery.
                  </p>
                </div>
                <span className="block font-sans text-xs font-semibold text-brand-charcoal/80">
                  {BUSINESS_INFO.location}
                </span>
              </div>
            </div>

            {/* Right: Quick Action Inquiry Options */}
            <div className="md:col-span-2 bg-white border border-brand-gold/15 p-6 sm:p-10 rounded-lg flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-brand-charcoal mb-2">
                    How can our concierges help you today?
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/60 leading-relaxed">
                    Select a path to start a pre-filled enquiry template directly on WhatsApp. This skips the hassle of explaining requirements from scratch.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Option 1 */}
                  <a
                    href="/customize"
                    className="group flex items-center justify-between rounded-lg bg-brand-ivory p-4 border border-brand-gold/15 hover:border-brand-rose transition-all"
                  >
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal group-hover:text-brand-rose transition-colors">
                        Build a Customized Hamper
                      </h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 mt-0.5">
                        Answer 5 quick steps to select recipient, occasion, budget, and custom theme.
                      </p>
                    </div>
                    <ArrowRightIcon className="h-4 w-4 text-brand-gold group-hover:text-brand-rose transition-colors" />
                  </a>

                  {/* Option 2 */}
                  <a
                    href={surpriseEnquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg bg-brand-ivory p-4 border border-brand-gold/15 hover:border-brand-rose transition-all"
                  >
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal group-hover:text-brand-rose transition-colors">
                        Plan a Doorstep Surprise Delivery
                      </h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 mt-0.5">
                        Send cakes, bouquets, custom photo gifts, and coordinate an arrival experience.
                      </p>
                    </div>
                    <ArrowRightIcon className="h-4 w-4 text-brand-gold group-hover:text-brand-rose transition-colors" />
                  </a>

                  {/* Option 3 */}
                  <a
                    href="/faq"
                    className="group flex items-center justify-between rounded-lg bg-brand-ivory p-4 border border-brand-gold/15 hover:border-brand-rose transition-all"
                  >
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-brand-charcoal group-hover:text-brand-rose transition-colors">
                        Read Gifting FAQs
                      </h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/60 mt-0.5">
                        Find quick answers regarding order timelines, delivery limits, and customized frames.
                      </p>
                    </div>
                    <HelpCircle className="h-4 w-4 text-brand-gold group-hover:text-brand-rose transition-colors" />
                  </a>
                </div>
              </div>

              <div className="pt-8 border-t border-brand-gold/10 text-center md:text-left mt-6">
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase block mb-1">
                  Urgent Order Notice
                </span>
                <p className="font-sans text-[11px] text-brand-charcoal/50 leading-relaxed">
                  Have an urgent or same-day surprise delivery in Trivandrum? Call us directly on <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-brand-charcoal hover:text-brand-rose">{BUSINESS_INFO.phone}</a> to check immediate slot availability.
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

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
