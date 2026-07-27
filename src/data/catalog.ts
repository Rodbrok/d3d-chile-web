import type { CatalogCategory, CatalogProduct } from "@/types/catalog";

const quoteEmail = "mailto:contacto@d3dchile.cl?subject=";

export const catalogContent = {
  hero: {
    eyebrow: "Referencias para inspirar tu proyecto",
    title: "Catálogo inicial de productos y trabajos personalizados",
    subtitle:
      "Explora ejemplos editables de lo que podemos fabricar. Cada pieza se adapta a tus medidas, material, cantidad y terminación.",
    primaryAction: { label: "Cotizar un producto", href: "/cotizar" },
    secondaryAction: { label: "Ver categorías", href: "#categorias" },
    trustMessages: ["Productos a pedido", "Personalización", "Valores referenciales"],
  },
  categories: {
    eyebrow: "Categorías",
    title: "Distintas formas de materializar una idea",
    description:
      "Estas categorías ordenan nuestras principales posibilidades de fabricación y personalización.",
    items: [
      { name: "Impresión 3D", description: "Piezas, figuras y objetos capa por capa." },
      { name: "Corte láser", description: "Formas precisas para productos y series." },
      { name: "Grabado láser", description: "Textos, marcas y detalles permanentes." },
      { name: "Regalos personalizados", description: "Objetos únicos para momentos especiales." },
      { name: "Emprendimientos", description: "Productos y apoyos para pequeñas marcas." },
      { name: "Prototipos", description: "Modelos para evaluar forma y funcionamiento." },
    ] satisfies CatalogCategory[],
  },
  products: {
    eyebrow: "Selección inicial",
    title: "Productos y trabajos destacados",
    description:
      "Una muestra simulada de proyectos que podemos adaptar. No corresponde a stock ni a venta directa en línea.",
    items: [
      { name: "Figura personalizada 3D", category: "Regalos personalizados", service: "Impresión 3D", description: "Figura decorativa modelada y fabricada según una referencia acordada.", price: "Desde cotización", tags: ["Personalizado", "Pieza única"], status: "Disponible a pedido", visual: "figure", quoteHref: `${quoteEmail}Figura%20personalizada%203D` },
      { name: "Llavero personalizado", category: "Emprendimientos", service: "Mixto", description: "Llavero con nombre, forma o identidad de marca para unidades y series.", price: "Valor según cantidad", tags: ["Series", "Marca"], status: "Disponible a pedido", visual: "keyring", quoteHref: `${quoteEmail}Llavero%20personalizado` },
      { name: "Letrero grabado en madera", category: "Grabado láser", service: "Grabado láser", description: "Letrero decorativo o comercial con texto y gráfica de alta definición.", price: "Desde cotización", tags: ["Madera", "Decoración"], status: "Referencial", visual: "sign", quoteHref: `${quoteEmail}Letrero%20grabado%20en%20madera` },
      { name: "Soporte funcional impreso", category: "Impresión 3D", service: "Impresión 3D", description: "Soporte adaptado a medidas y condiciones de uso específicas.", price: "Desde $8.000", tags: ["Funcional", "A medida"], status: "Sujeto a evaluación", visual: "support", quoteHref: `${quoteEmail}Soporte%20funcional%20impreso` },
      { name: "Organizador de escritorio", category: "Impresión 3D", service: "Impresión 3D", description: "Sistema modular para ordenar herramientas, accesorios o artículos de oficina.", price: "Desde $12.000", tags: ["Modular", "Utilitario"], status: "Disponible a pedido", visual: "organizer", quoteHref: `${quoteEmail}Organizador%20de%20escritorio` },
      { name: "Placa con logo grabado", category: "Grabado láser", service: "Grabado láser", description: "Placa de identificación con logo, texto y formato personalizado.", price: "Desde cotización", tags: ["Corporativo", "Identidad"], status: "Disponible a pedido", visual: "plate", quoteHref: `${quoteEmail}Placa%20con%20logo%20grabado` },
      { name: "Packaging cortado láser", category: "Emprendimientos", service: "Corte láser", description: "Propuesta de empaque rígido para presentación de productos especiales.", price: "Valor según cantidad", tags: ["Packaging", "Series"], status: "Sujeto a evaluación", visual: "packaging", quoteHref: `${quoteEmail}Packaging%20cortado%20laser` },
      { name: "Prototipo técnico", category: "Prototipos", service: "Impresión 3D", description: "Modelo físico para revisar dimensiones, ensambles y ajustes antes de producir.", price: "Desde cotización", tags: ["Validación", "Técnico"], status: "Sujeto a evaluación", visual: "prototype", quoteHref: `${quoteEmail}Prototipo%20tecnico` },
      { name: "Decoración personalizada", category: "Regalos personalizados", service: "Mixto", description: "Composición decorativa que combina volumen, corte y detalles personalizados.", price: "Desde cotización", tags: ["Hogar", "Diseño"], status: "Referencial", visual: "decoration", quoteHref: `${quoteEmail}Decoracion%20personalizada` },
      { name: "Kit para emprendimiento", category: "Emprendimientos", service: "Mixto", description: "Conjunto coordinado de exhibidores, placas y elementos con identidad de marca.", price: "Desde cotización", tags: ["Marca", "Solución integral"], status: "Referencial", visual: "kit", quoteHref: `${quoteEmail}Kit%20para%20emprendimiento` },
    ] satisfies CatalogProduct[],
  },
  notice:
    "Los productos del catálogo son ejemplos referenciales. Cada solicitud se cotiza según tamaño, material, cantidad, tiempo de fabricación y terminación.",
  process: {
    eyebrow: "Cómo pedir",
    title: "De una referencia a una propuesta para ti",
    description: "No necesitas tener todo resuelto. Estos cuatro pasos nos permiten preparar una cotización clara.",
    steps: [
      { title: "Elige una referencia del catálogo", description: "Indica el producto que mejor representa tu idea." },
      { title: "Indica medidas, cantidad y personalización", description: "Comparte los datos disponibles y el resultado que buscas." },
      { title: "Revisamos factibilidad y materiales", description: "Evaluamos el proceso y las alternativas más convenientes." },
      { title: "Recibes valor y plazo estimado", description: "Te enviamos una propuesta antes de iniciar la fabricación." },
    ],
  },
  finalCta: {
    eyebrow: "Conversemos",
    title: "¿Encontraste una referencia para tu proyecto?",
    description: "Cuéntanos qué quieres adaptar y prepararemos una cotización según tus requerimientos.",
    primaryAction: { label: "Cotizar producto", href: `${quoteEmail}Producto%20del%20catalogo` },
    secondaryAction: { label: "Ver servicios", href: "/#servicios" },
  },
};
