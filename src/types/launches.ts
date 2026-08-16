export type LaunchService = "Impresión 3D" | "Corte láser" | "Grabado láser" | "Mixto";

export type LaunchStatus = "En diseño" | "En prueba" | "Próximamente" | "Disponible bajo consulta";

export type LaunchVisual = "keyrings" | "organizer" | "pet-tag" | "wood-sign" | "gamer-stand" | "corporate-pack";

export type Launch = {
  name: string;
  category: string;
  service: LaunchService;
  status: LaunchStatus;
  description: string;
  benefit: string;
  period: string;
  priceNote: "Disponible bajo cotización" | "Precio según proyecto";
  tags: string[];
  action: { label: string; href: "/cotizar" | "/contacto" };
  visual: LaunchVisual;
};

export type LaunchCategory = {
  title: string;
  description: string;
  services: LaunchService[];
  action: { label: string; href: "/catalogo" | "/cotizar" | "/contacto" };
};

export type LaunchTimelineStep = {
  title: string;
  description: string;
};
