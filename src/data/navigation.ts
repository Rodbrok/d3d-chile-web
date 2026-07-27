import type { NavigationItem } from "@/types/site";

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Impresión 3D", href: "/impresion-3d" },
  { label: "Corte y grabado láser", href: "/#servicios" },
  { label: "Catálogo", href: "/#proximamente" },
  { label: "Ofertas", href: "/#proximamente", featured: true },
  { label: "Cotizar", href: "/#cotizar" },
  { label: "Contacto", href: "/#contacto" },
];

export const footerNavigation = mainNavigation.filter(
  ({ label }) => !["Inicio", "Ofertas"].includes(label),
);
