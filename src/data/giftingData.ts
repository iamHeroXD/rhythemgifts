export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: string; // "Enquire for Price" or empty to remain consistent with real-content rule
  images: string[];
  occasions: string[];
  recipients: string[];
  vibes: string[];
  features: string[];
  customizable: boolean;
  customizationOptions: string[];
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  accentColor?: string;
}

export interface Occasion {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Recipient {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const BUSINESS_INFO = {
  name: "Rhythm Gifts & Hampers",
  phone: "+91 9995267997",
  whatsappNumber: "919995267997",
  instagramHandle: "@rhythm.gifts.hampers",
  instagramUrl: "https://www.instagram.com/rhythm.gifts.hampers",
  location: "Trivandrum (TVM), Kerala, India",
  tagline: "Make every moment worth remembering.",
  emotionalTagline: "A gift isn't just something you give. It's a moment someone remembers.",
  services: [
    "Premium customised gifts",
    "Luxury hampers",
    "Bespoke doorstep surprise delivery",
    "Surprise experiences / emotional gifting",
    "Personalised gifting"
  ]
};

export const COLLECTIONS: Collection[] = [
  {
    slug: "luxury-hampers",
    name: "Luxury Hampers",
    description: "Immaculately arranged gift trays and premium boxes featuring handpicked treasures for your special ones.",
    heroImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "surprise-deliveries",
    name: "Surprise Deliveries",
    description: "Curated experiences that pair your custom gift with the magic of an unexpected doorstep delivery.",
    heroImage: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "personalized-gifts",
    name: "Personalized Keepsakes",
    description: "Gifts crafted with names, photos, and messages to preserve your unique moments forever.",
    heroImage: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "thoughtful-little-things",
    name: "Thoughtful Little Things",
    description: "Charming gestures and detailed tokens that say exactly what words sometimes cannot express.",
    heroImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1200&auto=format&fit=crop"
  }
];

export const OCCASIONS: Occasion[] = [
  {
    slug: "birthday",
    name: "Birthday",
    tagline: "Make their day feel completely theirs.",
    description: "Turn another year older into an unforgettable chapter with custom balloons, cakes, and personalised gift arrays.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "anniversary",
    name: "Anniversary",
    tagline: "Celebrate the story you've built together.",
    description: "Honor your shared milestones with romantic accents, preserved roses, scrapbooks, and luxury hampers designed for couples.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "surprise",
    name: "Surprise",
    tagline: "For the moments they never saw coming.",
    description: "Bespoke coordination including doorstep reveals, bouquets, acoustic greetings, and memory-capturing setups.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "thank-you",
    name: "Thank You",
    tagline: "A thoughtful way to say what words sometimes can't.",
    description: "Show true appreciation with refined gourmet baskets and elegant keepsakes that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "congratulations",
    name: "Congratulations",
    tagline: "Celebrate their next chapter.",
    description: "Applaud promotions, new homes, graduations, and achievements with sophisticated corporate or celebratory boxes.",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop"
  },
  {
    slug: "just-because",
    name: "Just Because",
    tagline: "No occasion required.",
    description: "Spontaneous gestures that brighten normal days and remind people that they are loved and thought of.",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop"
  }
];

export const RECIPIENTS: Recipient[] = [
  {
    slug: "for-her",
    name: "For Her",
    description: "Curated combinations of fine accessories, floral boxes, chocolates, and premium skincare hampers.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=500&auto=format&fit=crop"
  },
  {
    slug: "for-him",
    name: "For Him",
    description: "Sleek collections of grooming kits, customized mugs, premium perfumes, and dark chocolate pairings.",
    image: "https://images.unsplash.com/photo-1505236271233-2f5d9d6710d5?q=80&w=500&auto=format&fit=crop"
  },
  {
    slug: "for-friends",
    name: "For Friends",
    description: "Fun, emotional, and quirky combinations of custom photo gifts, memory jars, and treats.",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=500&auto=format&fit=crop"
  },
  {
    slug: "for-parents",
    name: "For Parents",
    description: "Warm, respectful hampers featuring customized decor, gourmet items, and emotional keepsakes.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=500&auto=format&fit=crop"
  },
  {
    slug: "for-couples",
    name: "For Couples",
    description: "Shared experiences, matching customized cups, roses, and dual-layered luxury hamper setups.",
    image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?q=80&w=500&auto=format&fit=crop"
  },
  {
    slug: "for-someone-special",
    name: "For Someone Special",
    description: "Heartcrafted scrapbooks, preserved flowers, luxury perfume pairings, and acoustic door-step delivery details.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "royal-trivandrum-hamper",
    name: "The Royal Trivandrum Hamper",
    category: "luxury-hampers",
    description: "An absolute display of luxury, combining artisanal sweets, premium chocolates, a custom mug, and fresh roses.",
    longDescription: "Our signature luxury box crafted for significant celebrations. This hamper combines a gorgeous floral selection of fresh red roses, premium imported and handmade chocolates, a customized message ceramic mug, and a selection of curated personal accessories, all arranged elegantly on a handwoven tray with customized ribbons and a handwritten greeting scroll.",
    price: "Enquire for Price",
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=800&auto=format&fit=crop"
    ],
    occasions: ["birthday", "anniversary", "congratulations", "thank-you"],
    recipients: ["for-her", "for-him", "for-parents", "for-someone-special"],
    vibes: ["luxury", "elegant", "emotional"],
    features: [
      "Signature handwoven presentation basket",
      "Fresh local roses or customized carnations",
      "Premium dark and milk chocolates",
      "Personalised printed ceramic mug",
      "Handwritten scroll message tied with ribbon"
    ],
    customizable: true,
    customizationOptions: ["Mug photo/text", "Flower color", "Chocolate preferences", "Custom scroll text"]
  },
  {
    id: "prod-2",
    slug: "eternal-rose-cake-surprise",
    name: "Eternal Rose & Cake Surprise",
    category: "surprise-deliveries",
    description: "The ultimate birthday or anniversary surprise featuring a gourmet red velvet cake, fresh red roses, and doorstep music.",
    longDescription: "Coordinate a moment they will never see coming. This premium experience delivers a fresh, heart-shaped gourmet red velvet cake along with a luxurious bouquet of premium long-stem red roses. The surprise is delivered directly to their doorstep in Trivandrum by our surprise coordinator with an optional customized message scroll.",
    price: "Enquire for Price",
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800&auto=format&fit=crop"
    ],
    occasions: ["birthday", "anniversary", "surprise", "just-because"],
    recipients: ["for-her", "for-someone-special", "for-friends", "for-couples"],
    vibes: ["romantic", "emotional", "cute"],
    features: [
      "Heart-shaped gourmet Red Velvet cake (1/2 kg or 1 kg)",
      "Premium bouquet of 12-24 red roses",
      "Bespoke doorstep surprise delivery coordination",
      "Customized emotional card layout",
      "Optional upgrade: Live acoustic guitar greeting"
    ],
    customizable: true,
    customizationOptions: ["Cake flavor & weight", "Bouquet size", "Delivery coordination note", "Acoustic guitarist slot"]
  },
  {
    id: "prod-3",
    slug: "executive-gourmet-hamper",
    name: "The Executive Gourmet Hamper",
    category: "luxury-hampers",
    description: "Sophisticated curation of artisanal dry fruits, custom wooden journal, leather cardholder, and premium chocolates.",
    longDescription: "Designed for corporate milestones, gratitude, or refined tastes. This hamper brings together healthy, premium elements like artisanal roasted nuts, a high-quality leather cardholder, a custom engraved wooden notebook with a metal pen, and premium sugar-free or dark chocolate, presented inside a textured premium black box.",
    price: "Enquire for Price",
    images: [
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
    ],
    occasions: ["congratulations", "thank-you", "just-because"],
    recipients: ["for-him", "for-parents", "for-friends"],
    vibes: ["elegant", "luxury"],
    features: [
      "Premium matte-black magnetic gift box",
      "Engraved custom wooden journal & executive pen",
      "Artisanal jars of roasted almonds and cashews",
      "Genuine leather cards organizer",
      "Gold-foiled greeting card"
    ],
    customizable: true,
    customizationOptions: ["Name engraving on journal", "Cardholder initials", "Chocolate options"]
  },
  {
    id: "prod-4",
    slug: "personalized-memory-lane-mirror",
    name: "Personalized Memory Lane Mirror",
    category: "personalized-gifts",
    description: "A gorgeous decorative mirror that lights up with an illuminated custom photograph when turned on.",
    longDescription: "A magical keepsake. By day, it serves as a beautiful high-reflection circular mirror. With the press of a button, the built-in LED backlight reveals a hidden, highly vibrant customized photo of your choice. Surrounded by a custom floral nest, this is a premium decor keepsake that blends surprise and nostalgia.",
    price: "Enquire for Price",
    images: [
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=800&auto=format&fit=crop"
    ],
    occasions: ["birthday", "anniversary", "surprise", "thank-you"],
    recipients: ["for-her", "for-someone-special", "for-friends", "for-parents"],
    vibes: ["emotional", "cute", "luxury"],
    features: [
      "Magic LED Mirror frame (USB / battery operated)",
      "High-definition photograph printing and mounting",
      "Nest of premium faux or dry flowers around the base",
      "Elegant custom wrapping and ribbon details",
      "Handwritten miniature card"
    ],
    customizable: true,
    customizationOptions: ["Photo upload", "Base floral setup style", "Message on card"]
  },
  {
    id: "prod-5",
    slug: "golden-glow-birthday-box",
    name: "Golden Glow Birthday Box",
    category: "thoughtful-little-things",
    description: "Custom LED plaque, personalized chocolates, mini perfume, and a handwritten message scroll.",
    longDescription: "A warm and glowy surprise arranged inside a rigid box. Features an acrylic LED light panel custom engraved with a name or birthday template, custom-wrapped chocolates carrying individual letters of their name, a miniature luxury perfume bottle, and a rustic scroll detailing why they are so special.",
    price: "Enquire for Price",
    images: [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop"
    ],
    occasions: ["birthday", "surprise", "just-because"],
    recipients: ["for-her", "for-him", "for-friends", "for-someone-special"],
    vibes: ["elegant", "cute", "emotional"],
    features: [
      "Custom acrylic night-lamp plaque with warm-white LED base",
      "Spell-out-name customized chocolates (5-8 pieces)",
      "Miniature premium perfume spray (unisex)",
      "Burnt-edge message scroll with golden wax seal",
      "Chic champagne-colored gift box wrapping"
    ],
    customizable: true,
    customizationOptions: ["Plaque layout & name", "Spell-out name chocolates", "Scroll text"]
  },
  {
    id: "prod-6",
    slug: "midnight-love-box",
    name: "Midnight Love Box",
    category: "personalized-gifts",
    description: "An emotional custom scrapbook, fresh red roses, handcrafted scented candle, and message in a bottle.",
    longDescription: "Crafted exclusively for partners and special ones. The heart of this box is a custom-designed, multi-page photo scrapbook summarizing your best moments. Accompanied by fresh roses, a hand-poured vanilla-infused soy candle, and a tiny glass bottle containing a rolled-up letter, it is an incredibly romantic gesture designed to evoke tears of joy.",
    price: "Enquire for Price",
    images: [
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
    ],
    occasions: ["anniversary", "surprise", "romantic", "just-because"],
    recipients: ["for-her", "for-someone-special", "for-couples"],
    vibes: ["romantic", "emotional", "luxury"],
    features: [
      "Handcrafted photo scrapbook (up to 15 photos & notes)",
      "Premium glass container scented soy candle (Vanilla & Rose)",
      "Fresh, long-stem red roses (6-8 roses inside the box)",
      "Message in a glass bottle with vintage paper",
      "Rigid luxury box with custom tag"
    ],
    customizable: true,
    customizationOptions: ["15 Photos for scrapbook", "Message inside bottle", "Candle scent preference"]
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How do I place an order?",
    answer: "You can browse our available designs and click the 'Enquire on WhatsApp' or 'Customize This Gift' button on any page. This will open WhatsApp with a pre-filled message detailing the item. Alternatively, you can use our Custom Gift Builder to specify your requirements, budget, and recipient, and send it directly to our team."
  },
  {
    question: "Can I customize a gift?",
    answer: "Yes, customization is the core of what we do. Depending on the product, you can customize photographs, names, messages, colors, chocolate selections, perfume scents, and specific items inside hampers. Our team works closely with you on WhatsApp to design exactly what you want."
  },
  {
    question: "Do you offer surprise delivery?",
    answer: "Yes, we specialize in bespoke doorstep surprise deliveries within Trivandrum (TVM), Kerala. We can coordinate delivery timing, cake reveals, flowers, and cards. For special occasions, we can also coordinate premium additions like live acoustic musicians."
  },
  {
    question: "How much does a custom hamper cost?",
    answer: "Because our hampers are fully customized to your requirements, prices depend entirely on the items, customization complexity, and packaging selected. We design hampers to suit various budgets. Simply share your budget range via our Builder, and we will share tailored concept options."
  },
  {
    question: "How much advance notice is required?",
    answer: "For standard hampers, we appreciate a 2-3 day notice. For highly customized items (like custom scrapbooks) or surprise delivery event coordinations, a 4-7 day notice is recommended. However, feel free to reach out to check if we can accommodate urgent or same-day orders!"
  },
  {
    question: "Can I order if I am living outside Trivandrum or abroad?",
    answer: "Absolutely. Many of our customers live elsewhere in India or internationally (NRI customers) and use our service to surprise their family, partners, or friends living in Trivandrum. We handle all local coordination and surprise execution."
  }
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter(p => p.category === categorySlug);
}

export function getProductsByOccasion(occasionSlug: string): Product[] {
  return PRODUCTS.filter(p => p.occasions.includes(occasionSlug));
}

export function getProductsByRecipient(recipientSlug: string): Product[] {
  return PRODUCTS.filter(p => p.recipients.includes(recipientSlug));
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find(c => c.slug === slug);
}

export function getOccasionBySlug(slug: string): Occasion | undefined {
  return OCCASIONS.find(o => o.slug === slug);
}

export function getRecipientBySlug(slug: string): Recipient | undefined {
  return RECIPIENTS.find(r => r.slug === slug);
}
