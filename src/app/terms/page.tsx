import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | Rhythm Gifts & Hampers",
  description: "Read the operational Terms of Service for placing custom gifting orders with Rhythm Gifts & Hampers.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Terms of Service" }]} />

          <div className="bg-white border border-brand-gold/15 p-6 sm:p-10 rounded-lg mt-8 space-y-6">
            <h1 className="font-serif text-3xl font-semibold text-brand-charcoal">
              Terms of Service
            </h1>
            <p className="font-sans text-xs text-brand-charcoal/50">
              Last updated: August 20, 2026
            </p>

            <div className="space-y-4 font-sans text-sm text-brand-charcoal/70 leading-relaxed">
              <p>
                Welcome to <strong>Rhythm Gifts & Hampers</strong>. By accessing our website, placing custom orders, or booking surprise deliveries, you agree to comply with and be bound by the following terms and conditions.
              </p>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                1. Ordering & Customization
              </h2>
              <p>
                Since we focus on customized, bespoke hampers and keepsakes, orders are processed and finalized through direct conversation on WhatsApp. It is the customer&apos;s responsibility to double-check spelling, names, dates, and image quality prior to approving designs. We cannot offer refunds or modifications once custom items (such as plaques, photo mugs, or scrapbooks) have gone into printing/production.
              </p>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                2. Surprise Deliveries in Trivandrum
              </h2>
              <p>
                Bespoke surprise doorstep delivery service is limited to our operating areas in Trivandrum, Kerala, and is subject to delivery slot availability. Customers must provide accurate address details, contact numbers, and delivery time window preferences. While we coordinate reveals with extreme care, we are not responsible for delivery delays resulting from incorrect address inputs, recipient unavailability, or local weather conditions.
              </p>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                3. Pricing and Payments
              </h2>
              <p>
                Prices for customized hampers, cakes, and floral selections vary depending on client selections and are quoted individually on WhatsApp. Payments are handled securely prior to delivery via direct bank transfers, UPI, or other agreed-upon digital channels. Custom order assembly begins only after payment confirmation.
              </p>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                4. Order Cancellations
              </h2>
              <p>
                Cancellations for standard hampers require a minimum of 48 hours notice. Cancellations for highly customized items (like scrapbooks) or surprise events involving fresh cakes, flowers, and acoustic performers are not eligible for refunds once logistics have been booked and materials purchased.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
