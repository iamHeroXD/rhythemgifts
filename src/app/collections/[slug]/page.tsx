import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductCard from "../../../components/ProductCard";
import { COLLECTIONS, getCollectionBySlug, getProductsByCategory } from "../../../data/giftingData";
import { getWhatsAppLink, getCollectionWhatsAppMessage } from "../../../utils/whatsapp";
import { MessageCircle } from "lucide-react";

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return COLLECTIONS.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: `${collection.name} | Rhythm Gifts & Hampers`,
    description: collection.description,
  };
}

export default function CollectionDetailPage({ params }: CollectionPageProps) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) {
    notFound();
  }

  const products = getProductsByCategory(params.slug);
  const whatsappMessage = getCollectionWhatsAppMessage(collection.name);
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-ivory pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Collections", href: "/collections" },
              { name: collection.name },
            ]}
          />

          {/* Collection Hero Panel — Split Editorial Layout (Bright Image) */}
          <div className="relative rounded overflow-hidden border border-brand-gold/15 bg-brand-charcoal text-brand-ivory mt-6 mb-12 flex flex-col md:flex-row items-stretch">
            
            {/* Left Content Area */}
            <div className="relative z-10 px-6 py-12 sm:p-12 md:p-16 max-w-xl space-y-6 flex flex-col justify-center text-left bg-brand-charcoal md:w-1/2">
              <span className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                Curated Gifting Series
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-white leading-none">
                {collection.name}
              </h1>
              <p className="font-sans text-xs sm:text-sm text-brand-ivory/80 leading-relaxed">
                {collection.description}
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-brand-rose px-6 py-3 font-sans text-xs font-bold tracking-widest uppercase text-white hover:bg-brand-rose/90 transition-all duration-300"
                >
                  <span>Enquire Options</span>
                  <MessageCircle className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            {/* Right Bright/Desirable Image */}
            <div className="relative md:w-1/2 min-h-[250px] md:min-h-0 overflow-hidden bg-brand-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collection.heroImage}
                alt={collection.name}
                className="h-full w-full object-cover opacity-90 image-zoom-effect"
                loading="eager"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl font-light text-brand-charcoal border-b border-brand-gold/10 pb-3">
              Available Designs ({products.length})
            </h2>

            {products.length === 0 ? (
              <div className="text-center py-16 bg-white border border-brand-gold/10 rounded">
                <p className="font-serif text-lg text-brand-charcoal/70">
                  We are updating this collection with new designs.
                </p>
                <p className="text-xs text-brand-charcoal/50 mt-1">
                  Connect with us on WhatsApp or use the Custom Builder to place an enquiry.
                </p>
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/customize"
                    className="rounded bg-brand-rose px-6 py-2.5 font-sans text-xs font-semibold tracking-wider uppercase text-white hover:bg-brand-rose/90 transition-all"
                  >
                    Go to Custom Builder
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
