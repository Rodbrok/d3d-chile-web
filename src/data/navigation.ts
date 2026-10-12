import type { NavigationItem } from "@/types/site";

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Impresión 3D", href: "/impresion-3d" },
  { label: "Corte y grabado láser", href: "/laser" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Lanzamientos", href: "/lanzamientos" },
  { label: "Ofertas", href: "/ofertas", featured: true },
  { label: "Cotizar", href: "/cotizar" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNavigation = mainNavigation.filter(
  ({ label }) => label !== "Inicio",
).concat(
  { label: "Galería", href: "/galeria" },
  { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
);
