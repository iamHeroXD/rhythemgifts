"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import { FAQS } from "../../data/giftingData";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { getWhatsAppLink } from "../../utils/whatsapp";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const whatsappMessage = "Hi Rhythm Gifts & Hampers! I have a question about placing a customized order.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Common Questions" }]} />

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mt-8 mb-12 space-y-3">
            <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
              Frequently Asked Questions
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-brand-charcoal">
              Answers, made simple.
            </h1>
            <p className="font-sans text-xs sm:text-sm text-brand-charcoal/60 leading-relaxed">
              Find quick details on order guidelines, customization possibilities, surprise delivery bookings, and more.
            </p>
          </div>

          {/* FAQ Accordion Grid */}
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-brand-gold/15 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg font-medium text-brand-charcoal hover:text-brand-rose transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-brand-gold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-brand-gold/10" : "max-h-0"
                    }`}
                  >
                    <p className="p-5 font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed bg-brand-ivory/20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Callout */}
          <div className="mt-12 text-center bg-white border border-brand-gold/15 rounded-lg p-6 sm:p-8 space-y-4">
            <div className="inline-flex rounded-full bg-brand-rose/5 p-3 text-brand-rose">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-brand-charcoal">
              Have another question?
            </h3>
            <p className="font-sans text-xs text-brand-charcoal/60 max-w-md mx-auto leading-relaxed">
              If your question isn&apos;t covered here, get in touch with our team directly. We are happy to help you coordinate the perfect hamper.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-all duration-300 shadow-sm"
              >
                <span>Ask on WhatsApp</span>
                <MessageCircle className="h-4 w-4 text-brand-gold" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
