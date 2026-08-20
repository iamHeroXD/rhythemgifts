import React from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductGallery from "../../../components/ProductGallery";
import ProductConfigurator from "../../../components/ProductConfigurator";
import { PRODUCTS, getProductBySlug, getCollectionBySlug } from "../../../data/giftingData";
import { Check, HelpCircle } from "lucide-react";
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-8">
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6">
              <ProductGallery images={product.images} name={product.name} />
            </div>

            {/* Right Column: Information Details */}
            <div className="lg:col-span-6 space-y-6 lg:py-2">
              <div className="space-y-2">
                <span className="font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase">
                  {collection ? collection.name : "Custom Gifts"}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-brand-charcoal">
                  {product.name}
                </h1>
              </div>

              {/* Descriptions */}
              <div className="space-y-4 font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                <p className="font-semibold text-brand-charcoal">{product.description}</p>
                <p>{product.longDescription}</p>
              </div>

              {/* Key Features / Inclusions */}
              <div className="space-y-3 pt-2">
                <h3 className="font-sans text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                  Hamper Inclusions
                </h3>
                <ul className="space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs font-sans text-brand-charcoal/75 leading-tight">
                      <Check className="h-4 w-4 text-brand-rose flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Configurator */}
              <ProductConfigurator
                productName={product.name}
                price={product.price}
                customizable={product.customizable}
                customizationOptions={product.customizationOptions}
              />

              {/* FAQ Link */}
              <div className="text-center pt-4 border-t border-brand-gold/10">
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold tracking-wider uppercase text-brand-gold hover:text-brand-rose transition-colors"
                >
                  <HelpCircle className="h-3.5 w-3.5" />
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
