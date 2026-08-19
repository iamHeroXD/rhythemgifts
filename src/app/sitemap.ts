import { MetadataRoute } from "next";
import { PRODUCTS, COLLECTIONS } from "../data/giftingData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rhythmgifts.com"; // Default placeholder domain for indexing

  // Core static routes
  const routes = [
    "",
    "/gifts",
    "/collections",
    "/customize",
    "/surprise-delivery",
    "/occasions",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Individual product detail routes
  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/gifts/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Individual collection lists routes
  const collectionRoutes = COLLECTIONS.map((c) => ({
    url: `${baseUrl}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes, ...collectionRoutes];
}
