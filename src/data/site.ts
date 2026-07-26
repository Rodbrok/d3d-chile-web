import type { SiteContent } from "@/types/site";

export const siteContent: SiteContent = {
  name: "D3D Chile",
  descriptor: "Impresión 3D y corte láser",
  description:
    "Fabricamos piezas, prototipos y productos personalizados con impresión 3D, corte y grabado láser.",
  contact: {
    email: "contacto@d3dchile.cl",
    phone: "+56 9 0000 0000",
    location: "Santiago, Chile",
  },
};

export const homeContent = {
  eyebrow: "Fabricación digital a tu medida",
  title: "Transformamos tus ideas en objetos reales.",
  subtitle:
    "Desde una pieza única hasta una serie de productos. Te ayudamos a fabricar con precisión, rapidez y atención directa.",
  services: [
    {
      number: "01",
      title: "Impresión 3D",
      description:
        "Prototipos, repuestos y objetos personalizados, producidos a pedido para cada proyecto.",
      accent: "cyan" as const,
    },
    {
      number: "02",
      title: "Corte y grabado láser",
      description:
        "Cortes precisos y grabados definidos para señalética, decoración, packaging y más.",
      accent: "violet" as const,
    },
  ],
  benefits: [
    "Producción a pedido",
    "Personalización",
    "Atención directa",
    "Soluciones para emprendimientos y proyectos",
  ],
};
