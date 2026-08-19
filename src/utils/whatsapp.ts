import { BUSINESS_INFO } from "../data/giftingData";

export function getWhatsAppLink(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedText}`;
}

export function getProductWhatsAppMessage(productName: string): string {
  return `Hi Rhythm Gifts & Hampers! I'm interested in *${productName}*. I'd like to know the price, customization options, and delivery details.`;
}

export function getCollectionWhatsAppMessage(collectionName: string): string {
  return `Hi Rhythm Gifts & Hampers! I'm exploring your *${collectionName}* collection and would love to enquire about custom options.`;
}

export function getCustomGiftingWhatsAppMessage({
  occasion,
  recipient,
  budget,
  vibe,
  details,
}: {
  occasion: string;
  recipient: string;
  budget: string;
  vibe: string;
  details: string;
}): string {
  let message = `Hi Rhythm Gifts & Hampers! I'd like to create a customised gift.\n\n`;
  message += `• *Occasion:* ${occasion}\n`;
  message += `• *Recipient:* ${recipient}\n`;
  message += `• *Budget Range:* ${budget}\n`;
  message += `• *Vibe/Feeling:* ${vibe}\n`;
  if (details && details.trim()) {
    message += `• *Specific Requests:* ${details.trim()}\n`;
  }
  message += `\nCould you help me with some ideas and options?`;
  return message;
}

export function getSurprisePlanningMessage(): string {
  return `Hi Rhythm Gifts & Hampers! I'm interested in planning a doorstep surprise delivery in Trivandrum. Could you help me with ideas and details?`;
}
