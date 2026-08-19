import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductGallery from "../../../components/ProductGallery";
import { PRODUCTS, getProductBySlug, getCollectionBySlug } from "../../../data/giftingData";
import { getWhatsAppLink, getProductWhatsAppMessage } from "../../../utils/whatsapp";
import { MessageCircle, Sparkles, Truck, Check, HelpCircle } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | Rhythm Gifts & Hampers`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const collection = getCollectionBySlug(product.category);
  const whatsappMessage = getProductWhatsAppMessage(product.name);
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Gifts Catalogue", href: "/gifts" },
              { name: collection ? collection.name : "Products", href: collection ? `/collections/${collection.slug}` : "/gifts" },
              { name: product.name },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6">
              <ProductGallery images={product.images} name={product.name} />
            </div>

            {/* Right Column: Information Details */}
            <div className="lg:col-span-6 space-y-6 lg:py-2">
              <div className="space-y-2 border-b border-brand-gold/15 pb-4">
                <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                  {collection ? collection.name : "Custom Gifts"}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-brand-charcoal">
                  {product.name}
                </h1>
                <p className="font-serif text-lg sm:text-xl italic text-brand-rose">
                  {product.price}
                </p>
              </div>

              {/* Descriptions */}
              <div className="space-y-4 font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                <p className="font-semibold text-brand-charcoal">{product.description}</p>
                <p>{product.longDescription}</p>
              </div>

              {/* Customizable indicators */}
              {product.customizable && (
                <div className="rounded-lg bg-brand-rose/5 border border-brand-rose/20 p-4 space-y-2.5">
                  <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-rose uppercase flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Personalisation Available</span>
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal/70">
                    We tailor this gift specifically for you. Common customization options:
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {product.customizationOptions.map((opt) => (
                      <span
                        key={opt}
                        className="rounded-full bg-white border border-brand-rose/25 px-3 py-1 font-sans text-[10px] font-semibold text-brand-rose/85"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features / Inclusions */}
              <div className="space-y-3 pt-2">
                <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                  Hamper Inclusions
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-sans text-brand-charcoal/75 leading-tight">
                      <Check className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logistics disclaimer */}
              <div className="flex items-start gap-2.5 border-t border-brand-gold/10 pt-6 font-sans text-xs text-brand-charcoal/50 leading-relaxed">
                <Truck className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-brand-charcoal/75 block">Trivandrum Delivery Only</span>
                  Doorstep deliveries are limited to Trivandrum (TVM) and surrounding local limits. Pre-order notices of 2-3 days are highly recommended to ensure material availability.
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-brand-rose py-4 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all shadow-md"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                  <span>Customize This Gift</span>
                </a>
                <Link
                  href="/customize"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full border border-brand-gold/45 bg-white py-4 font-sans text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:border-brand-rose hover:bg-brand-rose/5 transition-all"
                >
                  <span>Build Custom Hamper</span>
                </Link>
              </div>

              <div className="text-center pt-2">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1 font-sans text-[10px] font-bold tracking-wider uppercase text-brand-gold hover:text-brand-rose transition-colors"
                >
                  <HelpCircle className="h-3 w-3" />
                  <span>Read Ordering FAQs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
