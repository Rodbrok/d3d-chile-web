export const homeContent = {
  hero: {
    eyebrow: "Fabricación digital a tu medida",
    title: "De una idea a una pieza hecha para ti.",
    highlightedTitle: "Diseñamos, fabricamos y personalizamos.",
    subtitle:
      "Impresión 3D, corte y grabado láser para proyectos personales, emprendimientos y soluciones funcionales.",
    primaryAction: { label: "Cotizar proyecto", href: "#cotizar" },
    secondaryAction: { label: "Ver servicios", href: "#servicios" },
    trustMessages: [
      "Fabricación a pedido",
      "Atención directa",
      "Soluciones personalizadas",
    ],
  },
  services: {
    eyebrow: "Servicios principales",
    title: "Tecnología para fabricar lo que imaginas.",
    description:
      "Evaluamos cada proyecto y elegimos el proceso adecuado para obtener un resultado preciso, útil y bien terminado.",
    items: [
      {
        number: "01",
        title: "Impresión 3D",
        description:
          "Fabricamos prototipos, repuestos, figuras, piezas funcionales y objetos personalizados en distintas escalas.",
        examples: "Prototipos, piezas únicas y series pequeñas",
        actionLabel: "Cotizar impresión 3D",
        href: "#cotizar",
        accent: "cyan" as const,
      },
      {
        number: "02",
        title: "Corte y grabado láser",
        description:
          "Creamos señalética, decoración, regalos, packaging y productos corporativos con cortes y grabados definidos.",
        examples: "Madera, acrílico y materiales compatibles",
        actionLabel: "Cotizar trabajo láser",
        href: "#cotizar",
        accent: "violet" as const,
      },
    ],
  },
  featuredWorks: {
    eyebrow: "Trabajos destacados",
    title: "Ideas que pueden convertirse en realidad.",
    description:
      "Estos ejemplos simulados muestran algunos tipos de proyectos que podemos desarrollar. Sus datos son referenciales y editables.",
    items: [
      {
        title: "Figura personalizada",
        service: "Impresión 3D",
        description: "Modelo decorativo fabricado a pedido y adaptado al tamaño del proyecto.",
        price: "Desde cotización",
        tags: ["3D", "Personalizado"],
        visual: "figure" as const,
      },
      {
        title: "Letrero grabado en madera",
        service: "Grabado láser",
        description: "Letrero con identidad de marca, detalles grabados y terminación natural.",
        price: "Desde cotización",
        tags: ["Láser", "Destacado"],
        visual: "sign" as const,
      },
      {
        title: "Llaveros corporativos",
        service: "Corte láser",
        description: "Serie personalizada para equipos, eventos y regalos de empresa.",
        price: "Valor según cantidad",
        tags: ["Láser", "Personalizado"],
        visual: "keyrings" as const,
      },
      {
        title: "Prototipo funcional",
        service: "Impresión 3D",
        description: "Pieza de prueba para validar dimensiones, ensamble y funcionamiento.",
        price: "Desde cotización",
        tags: ["3D", "Destacado"],
        visual: "prototype" as const,
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro de principio a fin.",
    description: "Te acompañamos en cada etapa para que sepas qué esperar de tu proyecto.",
    steps: [
      { title: "Envías tu idea o archivo", description: "Cuéntanos qué necesitas y comparte referencias, medidas o archivos disponibles." },
      { title: "Revisamos factibilidad", description: "Evaluamos materiales, dimensiones y el método de fabricación más conveniente." },
      { title: "Cotizamos", description: "Recibes una propuesta clara con alcance, valor referencial y plazo estimado." },
      { title: "Fabricamos y entregamos", description: "Producimos tu proyecto y coordinamos la forma de entrega acordada." },
    ],
  },
  benefits: {
    eyebrow: "Por qué D3D Chile",
    title: "Una solución flexible para cada proyecto.",
    items: [
      { title: "Producción a pedido", description: "Fabricamos desde una unidad según tu necesidad." },
      { title: "Personalización", description: "Adaptamos medidas, detalles y terminaciones." },
      { title: "Atención directa", description: "Conversas directamente con quien revisa tu proyecto." },
      { title: "Apoyo a emprendimientos", description: "Desarrollamos productos y series pequeñas para tu marca." },
      { title: "Prototipos funcionales", description: "Materializamos piezas para probar, ajustar y validar." },
      { title: "Productos únicos", description: "Creamos regalos y objetos con una identidad propia." },
    ],
  },
  finalCta: {
    eyebrow: "Comencemos tu proyecto",
    title: "¿Tienes una idea que quieres fabricar?",
    description:
      "Cuéntanos qué necesitas. Revisaremos tu proyecto y te orientaremos sobre la mejor forma de llevarlo a producción.",
    primaryAction: { label: "Cotizar proyecto", href: "mailto:contacto@d3dchile.cl?subject=Cotización%20de%20proyecto" },
    secondaryAction: { label: "Ver servicios", href: "#servicios" },
  },
};
