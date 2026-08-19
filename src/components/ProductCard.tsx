import React from "react";
import Link from "next/link";
import { Sparkles, MessageCircle } from "lucide-react";
import { Product } from "../data/giftingData";
import { getWhatsAppLink, getProductWhatsAppMessage } from "../utils/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = getProductWhatsAppMessage(product.name);
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="group relative flex flex-col bg-white overflow-hidden border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      <Link href={`/gifts/${product.slug}`} className="relative block aspect-[4/5] bg-brand-ivory overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {product.customizable && (
          <div className="absolute top-3 left-3 bg-brand-ivory/90 backdrop-blur-sm border border-brand-gold/30 px-2.5 py-1 flex items-center gap-1 rounded-full text-[9px] font-sans font-bold tracking-widest text-brand-gold uppercase">
            <Sparkles className="h-2.5 w-2.5 text-brand-rose" />
            <span>Customisable</span>
          </div>
        )}
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">
        <span className="font-sans text-[9px] font-bold tracking-widest text-brand-gold uppercase mb-1">
          {product.category.replace("-", " ")}
        </span>
        
        <Link href={`/gifts/${product.slug}`} className="focus:outline-none">
          <h3 className="font-serif text-lg font-medium text-brand-charcoal hover:text-brand-rose transition-colors leading-tight mb-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="font-sans text-xs text-brand-charcoal/60 line-clamp-2 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Action Panel */}
        <div className="mt-auto pt-4 border-t border-brand-gold/10 flex items-center justify-between gap-2">
          <span className="font-serif text-xs font-semibold italic text-brand-charcoal/70">
            {product.price}
          </span>
          <div className="flex gap-1.5">
            <Link
              href={`/gifts/${product.slug}`}
              className="rounded-full bg-brand-charcoal px-3.5 py-1.5 font-sans text-[10px] font-bold tracking-widest uppercase text-white hover:bg-brand-rose transition-all duration-300"
            >
              Details
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-gold/30 p-1.5 text-brand-charcoal hover:border-brand-rose hover:bg-brand-rose/5 transition-all duration-300"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-brand-rose" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
