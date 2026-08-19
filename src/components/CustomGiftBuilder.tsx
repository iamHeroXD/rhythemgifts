"use client";

import React, { useState } from "react";
import { MessageCircle, Check, ArrowRight, ArrowLeft, Sparkles, Gift } from "lucide-react";
import { getWhatsAppLink, getCustomGiftingWhatsAppMessage } from "../utils/whatsapp";

export default function CustomGiftBuilder() {
  const [step, setStep] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [customOccasion, setCustomOccasion] = useState("");
  const [recipient, setRecipient] = useState("");
  const [customRecipient, setCustomRecipient] = useState("");
  const [budget, setBudget] = useState("");
  const [customBudget, setCustomBudget] = useState("");
  const [vibe, setVibe] = useState("");
  const [details, setDetails] = useState("");
  
  const totalSteps = 5;

  const occasions = [
    "Birthday",
    "Anniversary",
    "Wedding",
    "Congratulations",
    "Surprise Doorstep Delivery",
    "Thank You / Gratitude",
    "Other"
  ];

  const recipients = [
    "Partner / Spouse",
    "Friend",
    "Parent",
    "Sibling",
    "Colleague / Client",
    "Other"
  ];

  const budgets = [
    "₹1500 - ₹3000 (Charming Tokens & Boxes)",
    "₹3000 - ₹5000 (Premium Curated Hampers)",
    "₹5000+ (Luxury Hampers & Experience Suites)",
    "Other"
  ];

  const vibes = [
    "Romantic & Loving",
    "Elegant & Sophisticated",
    "Warm & Emotional",
    "Playful, Cute & Fun",
    "Luxury & Opulent"
  ];

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(6);
  };

  const handleSendToWhatsApp = () => {
    const selectedOccasion = occasion === "Other" ? customOccasion : occasion;
    const selectedRecipient = recipient === "Other" ? customRecipient : recipient;
    const selectedBudget = budget === "Other" ? customBudget : budget;

    const message = getCustomGiftingWhatsAppMessage({
      occasion: selectedOccasion || "Custom Gifting",
      recipient: selectedRecipient || "Someone Special",
      budget: selectedBudget || "Flexible",
      vibe: vibe || "Custom Vibe",
      details: details
    });

    const whatsappUrl = getWhatsAppLink(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const isStepValid = () => {
    if (step === 1) return occasion !== "" && (occasion !== "Other" || customOccasion.trim() !== "");
    if (step === 2) return recipient !== "" && (recipient !== "Other" || customRecipient.trim() !== "");
    if (step === 3) return budget !== "" && (budget !== "Other" || customBudget.trim() !== "");
    if (step === 4) return vibe !== "";
    return true; // Step 5 is free text
  };

  return (
    <div className="mx-auto max-w-2xl bg-white border border-brand-gold/15 p-6 sm:p-10 shadow-sm rounded-lg">
      {/* Progress Bar (Hide on Step 6) */}
      {step <= totalSteps && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-sans font-bold tracking-widest text-brand-gold uppercase mb-2">
            <span>Concierge Step {step} of {totalSteps}</span>
            <span>{Math.round(((step - 1) / (totalSteps - 1)) * 100)}% Complete</span>
          </div>
          <div className="h-1.5 w-full bg-brand-ivory rounded-full overflow-hidden border border-brand-gold/10">
            <div
              className="h-full bg-brand-rose transition-all duration-300 ease-out"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Occasion */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-semibold text-brand-charcoal">
                What are you celebrating?
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                Select the occasion so we can tailor the styling and elements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {occasions.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => {
                    setOccasion(o);
                    if (o !== "Other") setCustomOccasion("");
                  }}
                  className={`flex items-center justify-between rounded-lg p-4 font-sans text-xs font-semibold uppercase tracking-wider text-left border transition-all ${
                    occasion === o
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory hover:border-brand-gold text-brand-charcoal/80"
                  }`}
                >
                  <span>{o}</span>
                  {occasion === o && <Check className="h-4 w-4 text-brand-rose" />}
                </button>
              ))}
            </div>

            {occasion === "Other" && (
              <div className="space-y-2 animate-fade-in">
                <label className="block font-sans text-xs font-bold tracking-wider text-brand-gold uppercase">
                  Specify Occasion
                </label>
                <input
                  type="text"
                  placeholder="E.g., Housewarming, Retirement, Graduation"
                  value={customOccasion}
                  onChange={(e) => setCustomOccasion(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold text-brand-charcoal focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none"
                  required
                />
              </div>
            )}
          </div>
        )}

        {/* Step 2: Recipient */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-semibold text-brand-charcoal">
                Who is this gift for?
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                Helps us recommend appropriate sizes, items, and accessories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recipients.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRecipient(r);
                    if (r !== "Other") setCustomRecipient("");
                  }}
                  className={`flex items-center justify-between rounded-lg p-4 font-sans text-xs font-semibold uppercase tracking-wider text-left border transition-all ${
                    recipient === r
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory hover:border-brand-gold text-brand-charcoal/80"
                  }`}
                >
                  <span>{r}</span>
                  {recipient === r && <Check className="h-4 w-4 text-brand-rose" />}
                </button>
              ))}
            </div>

            {recipient === "Other" && (
              <div className="space-y-2 animate-fade-in">
                <label className="block font-sans text-xs font-bold tracking-wider text-brand-gold uppercase">
                  Specify Recipient Relationship
                </label>
                <input
                  type="text"
                  placeholder="E.g., Mentor, Child, Doctor, Neighbour"
                  value={customRecipient}
                  onChange={(e) => setCustomRecipient(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold text-brand-charcoal focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none"
                  required
                />
              </div>
            )}
          </div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-semibold text-brand-charcoal">
                What is your approximate budget?
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                This lets us select items that maximize value for your budget.
              </p>
            </div>

            <div className="space-y-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => {
                    setBudget(b);
                    if (b !== "Other") setCustomBudget("");
                  }}
                  className={`flex items-center justify-between rounded-lg p-4 font-sans text-xs font-semibold uppercase tracking-wider text-left border w-full transition-all ${
                    budget === b
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory hover:border-brand-gold text-brand-charcoal/80"
                  }`}
                >
                  <span>{b}</span>
                  {budget === b && <Check className="h-4 w-4 text-brand-rose" />}
                </button>
              ))}
            </div>

            {budget === "Other" && (
              <div className="space-y-2 animate-fade-in">
                <label className="block font-sans text-xs font-bold tracking-wider text-brand-gold uppercase">
                  Enter Custom Budget Limit
                </label>
                <input
                  type="text"
                  placeholder="E.g., ₹1000, ₹8000, Flexible"
                  value={customBudget}
                  onChange={(e) => setCustomBudget(e.target.value)}
                  className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold text-brand-charcoal focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none"
                  required
                />
              </div>
            )}
          </div>
        )}

        {/* Step 4: Vibe */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-semibold text-brand-charcoal">
                What is the overall vibe?
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                Dictates the color theme, packaging accents, and card formatting.
              </p>
            </div>

            <div className="space-y-3">
              {vibes.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVibe(v)}
                  className={`flex items-center justify-between rounded-lg p-4 font-sans text-xs font-semibold uppercase tracking-wider text-left border w-full transition-all ${
                    vibe === v
                      ? "border-brand-rose bg-brand-rose/5 text-brand-rose"
                      : "border-brand-gold/20 bg-brand-ivory hover:border-brand-gold text-brand-charcoal/80"
                  }`}
                >
                  <span>{v}</span>
                  {vibe === v && <Check className="h-4 w-4 text-brand-rose" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Details & Free Text */}
        {step === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-semibold text-brand-charcoal">
                Any specific requests or elements?
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/50">
                Mention key inclusions (e.g., photo prints, roses, specific chocolates, perfume preference) or message cards.
              </p>
            </div>

            <div className="space-y-2">
              <textarea
                rows={5}
                placeholder="E.g., Please include a custom printed ceramic cup with their photo, 5 KitKats, red roses, and a surprise card signed 'With love, Arun'. Need doorstep surprise delivery around 8:00 PM."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full bg-brand-ivory border border-brand-gold/25 rounded-md px-4 py-3 font-sans text-xs font-semibold text-brand-charcoal focus:border-brand-rose focus:ring-1 focus:ring-brand-rose focus:outline-none placeholder-brand-charcoal/30 resize-none leading-relaxed"
              />
            </div>

            {/* Summary Block */}
            <div className="rounded-lg border border-brand-gold/20 bg-brand-ivory/50 p-4 space-y-2">
              <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase flex items-center gap-1">
                <Gift className="h-3 w-3 text-brand-rose" />
                <span>Your Gifting Details Summary</span>
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-brand-charcoal/80 font-sans">
                <span className="text-brand-charcoal/50">Occasion:</span>
                <span className="font-semibold">{occasion === "Other" ? customOccasion : occasion}</span>
                <span className="text-brand-charcoal/50">For:</span>
                <span className="font-semibold">{recipient === "Other" ? customRecipient : recipient}</span>
                <span className="text-brand-charcoal/50">Budget:</span>
                <span className="font-semibold">
                  {budget === "Other" ? customBudget : budget.split(" (")[0]}
                </span>
                <span className="text-brand-charcoal/50">Vibe:</span>
                <span className="font-semibold">{vibe}</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Animated Success Summary Screen */}
        {step === 6 && (
          <div className="space-y-6 text-center animate-fade-in py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-rose/10 border border-brand-rose/30">
              <Sparkles className="h-6 w-6 text-brand-rose animate-pulse" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-charcoal">
                Your Enquiry is Ready!
              </h2>
              <p className="font-sans text-xs text-brand-charcoal/60 max-w-sm mx-auto leading-relaxed">
                We have compiled your custom styling details. Click below to send your enquiry directly to our design desk on WhatsApp.
              </p>
            </div>

            <div className="rounded-lg border border-brand-gold/20 bg-brand-ivory/50 p-6 text-left max-w-md mx-auto space-y-4 shadow-sm">
              <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase border-b border-brand-gold/10 pb-2 flex items-center gap-1.5">
                <Gift className="h-3.5 w-3.5 text-brand-rose" />
                <span>Custom Configuration Summary</span>
              </h3>
              <div className="grid grid-cols-2 gap-y-2.5 text-xs font-sans text-brand-charcoal/80">
                <span className="text-brand-charcoal/50">Celebration:</span>
                <span className="font-semibold">{occasion === "Other" ? customOccasion : occasion}</span>
                <span className="text-brand-charcoal/50">For Recipient:</span>
                <span className="font-semibold">{recipient === "Other" ? customRecipient : recipient}</span>
                <span className="text-brand-charcoal/50">Budget Bracket:</span>
                <span className="font-semibold">{budget === "Other" ? customBudget : budget.split(" (")[0]}</span>
                <span className="text-brand-charcoal/50">Styling Vibe:</span>
                <span className="font-semibold">{vibe}</span>
                {details.trim() && (
                  <>
                    <span className="text-brand-charcoal/50 col-span-2 border-t border-brand-gold/10 pt-2 mt-1">Special Requests:</span>
                    <span className="col-span-2 font-sans italic text-brand-charcoal/70 bg-white/70 p-2.5 rounded border border-brand-gold/5 leading-relaxed mt-1 block max-h-24 overflow-y-auto">
                      &ldquo;{details}&rdquo;
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3 max-w-sm mx-auto">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-rose py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all shadow-md cursor-pointer hover:scale-[1.02] transform duration-150"
              >
                <MessageCircle className="h-4.5 w-4.5 text-white" />
                <span>Send via WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setOccasion("");
                  setCustomOccasion("");
                  setRecipient("");
                  setCustomRecipient("");
                  setBudget("");
                  setCustomBudget("");
                  setVibe("");
                  setDetails("");
                }}
                className="text-[10px] font-sans font-bold tracking-wider uppercase text-brand-gold hover:text-brand-rose transition-colors duration-150 underline"
              >
                Start Over / Reset Form
              </button>
            </div>
          </div>
        )}

        {/* Buttons Panel (Hide on Step 6) */}
        {step <= totalSteps && (
          <div className="pt-6 border-t border-brand-gold/10 flex justify-between gap-4">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 rounded-full border border-brand-gold/30 bg-white px-5 py-2.5 font-sans text-[10px] font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose transition-colors duration-200"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className="flex items-center gap-2 rounded-full bg-brand-charcoal px-6 py-3 font-sans text-[10px] font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-all duration-300 disabled:opacity-30 disabled:hover:bg-brand-charcoal shadow-sm cursor-pointer"
              >
                <span>Continue</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-brand-rose px-6 py-3.5 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300 shadow-md cursor-pointer animate-pulse"
              >
                <span>Generate Custom Enquiry</span>
                <MessageCircle className="h-4.5 w-4.5 text-white" />
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
