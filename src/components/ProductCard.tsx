import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Product } from "../data/giftingData";
import { getWhatsAppLink, getProductWhatsAppMessage } from "../utils/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = getProductWhatsAppMessage(product.name);
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="group flex flex-col bg-white overflow-hidden border border-brand-gold/10 card-hover-effect rounded">
      {/* Image Container */}
      <Link href={`/gifts/${product.slug}`} className="relative block aspect-[4/5] bg-brand-ivory overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover image-zoom-effect"
          loading="lazy"
        />
        {product.customizable && (
          <div className="absolute top-3 left-3 bg-brand-ivory/90 backdrop-blur-sm border border-brand-gold/25 px-2.5 py-0.5 rounded text-[8px] font-sans font-bold tracking-widest text-brand-gold uppercase">
            Customisable
          </div>
        )}
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5 space-y-3">
        <div>
          <span className="block font-sans text-[8px] font-bold tracking-widest text-brand-gold uppercase mb-1">
            {product.category.replace("-", " ")}
          </span>
          <Link href={`/gifts/${product.slug}`} className="focus:outline-none block">
            <h3 className="font-serif text-lg font-light text-brand-charcoal hover:text-brand-rose transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>
        
        <p className="font-sans text-xs text-brand-charcoal/60 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Action Panel */}
        <div className="mt-auto pt-4 border-t border-brand-gold/10 flex items-center justify-between gap-3">
          <span className="font-sans text-xs font-semibold text-brand-charcoal">
            {product.price}
          </span>
          <div className="flex gap-2">
            <Link
              href={`/gifts/${product.slug}`}
              className="rounded bg-brand-charcoal px-3 py-1.5 font-sans text-[10px] font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-colors duration-200"
            >
              Details
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-brand-gold/25 p-1.5 text-brand-rose hover:bg-brand-rose/5 transition-all duration-200"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
