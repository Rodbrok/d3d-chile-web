export type GalleryService = "Impresión 3D" | "Corte láser" | "Grabado láser";

export type GalleryStatus =
  | "Referencia visual"
  | "Proyecto personalizable"
  | "Disponible bajo consulta"
  | "Inspiración para cotizar";

export type GalleryVisual =
  | "keyrings"
  | "headphone-stand"
  | "pet-tag"
  | "wood-sign"
  | "organizer"
  | "topper"
  | "phone-stand"
  | "corporate-plate"
  | "laser-box";

export type GalleryProject = {
  name: string;
  service: GalleryService;
  category: string;
  description: string;
  application: string;
  status: GalleryStatus;
  tags: string[];
  action: { label: string; href: "/cotizar" | "/contacto" };
  visual: GalleryVisual;
};

export type GalleryStat = {
  value: string;
  label: string;
  description: string;
};

export type GalleryProcessStep = {
  title: string;
  description: string;
};
