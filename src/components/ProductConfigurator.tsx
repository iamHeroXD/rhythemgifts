"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, Sparkles, Check, Truck } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";

interface ProductConfiguratorProps {
  productName: string;
  price: string;
  customizable: boolean;
  customizationOptions: string[];
}

export default function ProductConfigurator({
  productName,
  price,
  customizable,
  customizationOptions,
}: ProductConfiguratorProps) {
  const [ribbon, setRibbon] = useState("Champagne Gold");
  const [seal, setSeal] = useState("Classic Crown");
  const [card, setCard] = useState("Handwritten Scroll");
  const [customText, setCustomText] = useState("");

  const ribbonOptions = ["Champagne Gold", "Deep Charcoal", "Soft Rose"];
  const sealOptions = ["Classic Crown", "Olive Branch", "Love Heart"];
  const cardOptions = ["Handwritten Scroll", "Gold Foil Card"];

  const handleWhatsAppEnquiry = () => {
    let message = `Hi Rhythm Gifts & Hampers! I'm interested in *${productName}*.\n\n`;
    if (customizable) {
      message += `• *Ribbon Style:* ${ribbon}\n`;
      message += `• *Wax Seal Design:* ${seal}\n`;
      message += `• *Gift Card:* ${card}\n`;
      if (customText.trim()) {
        message += `• *Personalisation text:* ${customText.trim()}\n`;
      }
    }
    message += `\nCould you let me know the price, customization options, and slot availability?`;

    const url = getWhatsAppLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-6">
      {/* 1. Price Tag */}
      <div className="border-b border-brand-gold/15 pb-4">
        <span className="font-serif text-lg sm:text-xl font-semibold italic text-brand-rose">
          {price}
        </span>
      </div>

      {/* 2. Interactive Configurator (Only show if product is customizable) */}
      {customizable && (
        <div className="space-y-5 rounded-lg border border-brand-gold/20 bg-white p-5 shadow-sm">
          <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase flex items-center gap-1.5 border-b border-brand-gold/10 pb-2">
            <Sparkles className="h-3.5 w-3.5 text-brand-rose" />
            <span>Customize Your Hamper details</span>
          </h3>

          {/* Ribbon Selection */}
          <div className="space-y-2">
            <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-charcoal/50 uppercase">
              01. Satin Ribbon Color
            </label>
            <div className="grid grid-cols-3 gap-2">
              {ribbonOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setRibbon(opt)}
                  className={`flex items-center justify-between rounded px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider border transition-all ${
                    ribbon === opt
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory text-brand-charcoal/80 hover:border-brand-gold"
                  }`}
                >
                  <span>{opt.split(" ")[1] || opt}</span>
                  {ribbon === opt && <Check className="h-3 w-3 text-brand-rose" />}
                </button>
              ))}
            </div>
          </div>

          {/* Wax Seal Selection */}
          <div className="space-y-2">
            <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-charcoal/50 uppercase">
              02. Wax Seal Stamp
            </label>
            <div className="grid grid-cols-3 gap-2">
              {sealOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSeal(opt)}
                  className={`flex items-center justify-between rounded px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider border transition-all ${
                    seal === opt
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory text-brand-charcoal/80 hover:border-brand-gold"
                  }`}
                >
                  <span>{opt.split(" ")[1] || opt}</span>
                  {seal === opt && <Check className="h-3 w-3 text-brand-rose" />}
                </button>
              ))}
            </div>
          </div>

          {/* Card Selection */}
          <div className="space-y-2">
            <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-charcoal/50 uppercase">
              03. Presentation Card
            </label>
            <div className="grid grid-cols-2 gap-2">
              {cardOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setCard(opt)}
                  className={`flex items-center justify-between rounded px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-wider border transition-all ${
                    card === opt
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory text-brand-charcoal/80 hover:border-brand-gold"
                  }`}
                >
                  <span>{opt}</span>
                  {card === opt && <Check className="h-3 w-3 text-brand-rose" />}
                </button>
              ))}
            </div>
          </div>

          {/* Calligraphy Note Content */}
          <div className="space-y-2">
            <label className="block font-sans text-[10px] font-bold tracking-wider text-brand-charcoal/50 uppercase">
              04. Custom Text or Photo Notes
            </label>
            <input
              type="text"
              placeholder="E.g. Name: 'Arun', Card Note: 'Happy Birthday!'"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full bg-brand-ivory border border-brand-gold/25 rounded px-3.5 py-2.5 font-sans text-xs text-brand-charcoal focus:border-brand-rose focus:outline-none placeholder-brand-charcoal/30"
            />
          </div>
        </div>
      )}

      {/* 3. Logistics Disclaimer */}
      <div className="flex items-start gap-2.5 border-t border-brand-gold/10 pt-4 font-sans text-xs text-brand-charcoal/50 leading-relaxed">
        <Truck className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-brand-charcoal/75 block">Trivandrum Delivery Only</span>
          Doorstep surprise deliveries are limited to Trivandrum (TVM) limits. Pre-order notices of 2-3 days are highly recommended to ensure material freshness.
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleWhatsAppEnquiry}
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-brand-rose py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all shadow-md cursor-pointer"
        >
          <MessageCircle className="h-4 w-4 text-white" />
          <span>{customizable ? "Customize & Enquire" : "Enquire on WhatsApp"}</span>
        </button>
        <Link
          href="/customize"
          className="flex-1 flex items-center justify-center gap-2 rounded-full border border-brand-gold/45 bg-white py-4 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose hover:bg-brand-rose/5 transition-all"
        >
          <span>Build Custom Hamper</span>
        </Link>
      </div>
    </div>
  );
}
