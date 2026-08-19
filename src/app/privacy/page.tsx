import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Rhythm Gifts & Hampers",
  description: "Learn how we handle your personal information and gift data at Rhythm Gifts & Hampers.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Privacy Policy" }]} />

          <div className="bg-white border border-brand-gold/15 p-6 sm:p-10 rounded-lg mt-8 space-y-6">
            <h1 className="font-serif text-3xl font-semibold text-brand-charcoal">
              Privacy Policy
            </h1>
            <p className="font-sans text-xs text-brand-charcoal/50">
              Last updated: August 20, 2026
            </p>

            <div className="space-y-4 font-sans text-sm text-brand-charcoal/70 leading-relaxed">
              <p>
                At <strong>Rhythm Gifts & Hampers</strong>, accessible from our website, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by Rhythm Gifts & Hampers and how we use it.
              </p>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                1. Information We Collect
              </h2>
              <p>
                We only collect information that you explicitly choose to share with us. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details (name, phone number, email address) you provide when placing custom inquiries.</li>
                <li>Recipient details (names, address, phone number) required to execute doorstep surprise deliveries.</li>
                <li>Photographs, text messages, and personalized details you upload or share to be incorporated into customized keepsakes, scrapbooks, and gift cards.</li>
              </ul>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide, operate, and maintain our customized gifting service.</li>
                <li>Fulfill, design, and assemble your customized cards and hampers.</li>
                <li>Communicate with you regarding pricing, draft designs, and delivery logistics on WhatsApp.</li>
                <li>Execute delivery logistics to recipient addresses.</li>
              </ul>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                3. Data Retention and Security
              </h2>
              <p>
                Personalized photos and text messages provided for items like magic mirrors, plaques, and scrapbooks are stored securely only for the duration of the order completion process. Once the order is completed and successfully delivered, these personalized assets are permanently deleted from our active working systems to protect your privacy.
              </p>

              <h2 className="font-serif text-xl font-medium text-brand-charcoal pt-4">
                4. Contact Us
              </h2>
              <p>
                If you have any questions or require more information about our Privacy Policy, do not hesitate to contact us directly via our social channels or WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
