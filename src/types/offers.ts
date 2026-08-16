export type OfferService = "Impresión 3D" | "Corte láser" | "Grabado láser" | "Mixto";

export type OfferVisual = "keyrings" | "prototype" | "engraving" | "sign" | "combo" | "small-products";

export type Offer = {
  name: string;
  service: OfferService;
  description: string;
  benefit: string;
  condition: string;
  tags: string[];
  validity: string;
  visual: OfferVisual;
  quoteHref: string;
};

export type OfferCondition = {
  title: string;
  description: string;
};

export type OfferAudience = {
  title: string;
  description: string;
  examples: string[];
  action: { label: string; href: string };
};
