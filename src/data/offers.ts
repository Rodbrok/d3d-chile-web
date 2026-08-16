import type { Offer, OfferAudience, OfferCondition } from "@/types/offers";

export const offersContent = {
  hero: {
    eyebrow: "Oportunidades para crear",
    title: "Ofertas y promociones para fabricar tus ideas",
    subtitle: "Descubre propuestas referenciales para proyectos personalizados. Cada promoción está sujeta a evaluación, agenda y disponibilidad de materiales.",
    primaryAction: { label: "Ver ofertas", href: "#ofertas" },
    secondaryAction: { label: "Cotizar promoción", href: "/cotizar" },
    trustMessages: ["Promociones a pedido", "Valores referenciales", "Sujeto a evaluación"],
  },
  featured: {
    eyebrow: "Ofertas destacadas",
    title: "Una propuesta inicial para cada tipo de proyecto",
    description: "Estas promociones simuladas sirven como punto de partida. Podemos ajustar materiales, cantidades y terminaciones a tu necesidad.",
    items: [
      { name: "Pack de llaveros personalizados", service: "Mixto", description: "Serie de llaveros con nombre, forma o identidad de marca, adaptada a tu cantidad.", benefit: "Precio especial por cantidad", condition: "Valor según cantidad", tags: ["Personalización", "Series pequeñas"], validity: "Promoción referencial", visual: "keyrings", quoteHref: "/cotizar" },
      { name: "Prototipos 3D para validar", service: "Impresión 3D", description: "Fabricación de pruebas físicas para revisar forma, escala, ensambles y ajustes.", benefit: "Evaluación inicial sin costo", condition: "Sujeto a evaluación", tags: ["Prototipado", "Validación"], validity: "Disponible según agenda", visual: "prototype", quoteHref: "/cotizar" },
      { name: "Logo grabado para emprendimientos", service: "Grabado láser", description: "Aplicación de tu identidad en placas, packaging o productos compatibles.", benefit: "Preparación para series pequeñas", condition: "Desde cotización", tags: ["Marca", "Emprendimientos"], validity: "Promoción referencial", visual: "engraving", quoteHref: "/cotizar" },
      { name: "Letreros personalizados", service: "Corte láser", description: "Letreros decorativos o comerciales diseñados según espacio, texto y material.", benefit: "Propuesta adaptada a tus medidas", condition: "Según tamaño y terminación", tags: ["Señalética", "A medida"], validity: "Disponible según materiales", visual: "sign", quoteHref: "/cotizar" },
      { name: "Combo impresión 3D y grabado láser", service: "Mixto", description: "Una solución coordinada que combina piezas volumétricas con detalles grabados.", benefit: "Evaluación conjunta de procesos", condition: "Desde cotización", tags: ["Solución integral", "Personalizado"], validity: "Sujeto a factibilidad", visual: "combo", quoteHref: "/cotizar" },
      { name: "Serie de productos pequeños", service: "Impresión 3D", description: "Producción acotada de accesorios, identificadores o piezas compactas repetibles.", benefit: "Condición especial por serie", condition: "Según cantidad", tags: ["Formato pequeño", "Series"], validity: "Disponible según agenda", visual: "small-products", quoteHref: "/cotizar" },
    ] satisfies Offer[],
  },
  conditions: {
    eyebrow: "Información importante",
    title: "Condiciones generales claras desde el inicio",
    description: "Antes de fabricar, revisamos contigo el alcance y confirmamos una cotización formal.",
    items: [
      { title: "Referencias comerciales", description: "Las ofertas son simuladas y sus valores o beneficios son referenciales." },
      { title: "Agenda y materiales", description: "La disponibilidad depende de la carga de trabajo y los insumos disponibles." },
      { title: "Valor personalizado", description: "El total depende del tamaño, cantidad, material y terminación solicitada." },
      { title: "Sin compra en línea", description: "Esta página informa promociones; no permite comprar, pagar ni reservar." },
      { title: "Confirmación por correo", description: "La cotización y sus condiciones se confirman directamente por correo." },
      { title: "Oferta a tu medida", description: "Puedes solicitar una propuesta personalizada para un requerimiento distinto." },
    ] satisfies OfferCondition[],
  },
  audiences: {
    eyebrow: "Según tu objetivo",
    title: "Ofertas pensadas para distintos clientes",
    description: "Elige el punto de partida que mejor representa lo que necesitas fabricar.",
    items: [
      { title: "Personas", description: "Propuestas para convertir una idea personal en un objeto especial.", examples: ["Regalos personalizados", "Decoración", "Piezas únicas"], action: { label: "Cotizar para personas", href: "/cotizar" } },
      { title: "Emprendimientos", description: "Soluciones flexibles para presentar, identificar y diferenciar tu marca.", examples: ["Productos personalizados", "Packaging", "Series pequeñas"], action: { label: "Cotizar para mi marca", href: "/cotizar" } },
      { title: "Prototipos", description: "Fabricación inicial para probar una solución antes de avanzar.", examples: ["Pruebas de forma", "Validaciones", "Piezas funcionales"], action: { label: "Cotizar un prototipo", href: "/cotizar" } },
    ] satisfies OfferAudience[],
  },
  process: {
    eyebrow: "Cómo funciona",
    title: "Cómo aprovechar una oferta",
    description: "Cuatro pasos simples para transformar una promoción referencial en una cotización adecuada a tu proyecto.",
    steps: [
      { title: "Elige una promoción referencial", description: "Selecciona la alternativa más cercana a tu idea." },
      { title: "Indica medidas, cantidad y personalización", description: "Comparte los antecedentes disponibles para entender el alcance." },
      { title: "Revisamos disponibilidad y materiales", description: "Evaluamos la factibilidad, agenda y opciones de fabricación." },
      { title: "Confirmamos valor y plazo estimado", description: "Recibes una cotización formal antes de tomar una decisión." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo esencial antes de cotizar",
    items: [
      { question: "¿Las ofertas tienen precio fijo?", answer: "No. Son referencias comerciales y el valor final depende de las características de cada solicitud." },
      { question: "¿Puedo pedir una oferta personalizada?", answer: "Sí. Cuéntanos tu objetivo y evaluaremos una propuesta acorde a medidas, cantidad y material." },
      { question: "¿Las promociones incluyen diseño?", answer: "Depende del proyecto. La necesidad de diseño o preparación de archivos se informa en la cotización." },
      { question: "¿Puedo combinar impresión 3D y láser?", answer: "Sí, cuando los materiales y el resultado esperado lo permiten. Primero revisamos la factibilidad técnica." },
      { question: "¿Las ofertas tienen stock?", answer: "No corresponden a productos con stock garantizado. Fabricamos a pedido y confirmamos disponibilidad según agenda." },
      { question: "¿Cómo confirmo una promoción?", answer: "Solicita una cotización. Te enviaremos por correo el valor, alcance y plazo estimado para que puedas confirmarla." },
    ],
  },
  finalCta: {
    eyebrow: "Tu proyecto puede ser el siguiente",
    title: "Conversemos sobre la promoción que necesitas",
    description: "Selecciona una referencia o plantea una combinación propia. Revisaremos los detalles antes de confirmar valor y plazo.",
    primaryAction: { label: "Cotizar promoción", href: "/cotizar" },
    secondaryAction: { label: "Ver catálogo", href: "/catalogo" },
  },
};
