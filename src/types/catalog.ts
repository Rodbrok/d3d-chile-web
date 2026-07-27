export type CatalogService =
  | "Impresión 3D"
  | "Corte láser"
  | "Grabado láser"
  | "Mixto";

export type CatalogStatus =
  | "Disponible a pedido"
  | "Referencial"
  | "Sujeto a evaluación";

export type CatalogVisual =
  | "figure"
  | "keyring"
  | "sign"
  | "support"
  | "organizer"
  | "plate"
  | "packaging"
  | "prototype"
  | "decoration"
  | "kit";

export type CatalogProduct = {
  name: string;
  category: string;
  service: CatalogService;
  description: string;
  price: string;
  tags: string[];
  status: CatalogStatus;
  visual: CatalogVisual;
  quoteHref: string;
};

export type CatalogCategory = {
  name: string;
  description: string;
};
