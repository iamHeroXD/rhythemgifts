"use client";

import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Large Viewport */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded border border-brand-gold/10 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex]}
          alt={`${name} - View ${activeIndex + 1}`}
          className="h-full w-full object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border transition-all ${
                activeIndex === idx
                  ? "border-brand-rose ring-1 ring-brand-rose"
                  : "border-brand-gold/15 hover:border-brand-gold/40"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
