import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-brand-charcoal/40 mb-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
      <Link href="/" className="hover:text-brand-rose transition-colors">
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.name}>
            <ChevronRight className="h-3 w-3 text-brand-gold" />
            {isLast || !item.href ? (
              <span className="text-brand-gold select-none font-bold truncate max-w-[150px] sm:max-w-xs">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-brand-rose transition-colors truncate max-w-[150px] sm:max-w-xs">
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
