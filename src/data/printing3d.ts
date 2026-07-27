import type { Faq, GalleryWork, Material, ReferencePrice, UseCase } from "@/types/services";

const quoteHref = "mailto:contacto@d3dchile.cl?subject=Cotización%20de%20impresión%203D";

export const printing3dContent = {
  hero: {
    eyebrow: "Servicio de impresión 3D",
    title: "Impresión 3D personalizada para dar forma a tus ideas.",
    subtitle: "Fabricamos piezas únicas, prototipos y series pequeñas con atención directa y una evaluación clara de cada proyecto.",
    primaryAction: { label: "Cotizar impresión 3D", href: quoteHref },
    secondaryAction: { label: "Ver ejemplos", href: "#ejemplos" },
    trustMessages: ["Piezas a pedido", "Prototipos y repuestos", "Regalos personalizados"],
  },
  useCases: {
    eyebrow: "Qué puedes fabricar",
    title: "Una solución flexible para proyectos personales y profesionales.",
    description: "Desde una pieza única hasta una serie pequeña, revisamos el uso y los requisitos antes de fabricar.",
    items: [
      { title: "Figuras personalizadas", description: "Objetos decorativos adaptados a tu idea, escala y terminación.", example: "Figuras para colección o exhibición", category: "Decoración" },
      { title: "Repuestos y piezas funcionales", description: "Componentes para reemplazar o mejorar piezas de uso cotidiano.", example: "Perillas, tapas, uniones y soportes", category: "Soluciones" },
      { title: "Llaveros y regalos", description: "Productos personalizados para personas, eventos y equipos.", example: "Llaveros con nombre o identidad de marca", category: "Personalización" },
      { title: "Prototipos", description: "Modelos físicos para comprobar dimensiones, forma y ensamble.", example: "Validación previa a una producción", category: "Desarrollo" },
      { title: "Decoración y organización", description: "Objetos útiles que ordenan y personalizan distintos espacios.", example: "Maceteros, bandejas y organizadores", category: "Hogar" },
      { title: "Accesorios para emprendimientos", description: "Piezas y herramientas adaptadas al trabajo de tu marca.", example: "Exhibidores, plantillas y accesorios", category: "Emprendimientos" },
    ] satisfies UseCase[],
  },
  materials: {
    eyebrow: "Materiales disponibles",
    title: "Elegimos el material según el uso de la pieza.",
    description: "La disponibilidad de colores y la conveniencia de cada material se confirman durante la cotización.",
    items: [
      { name: "PLA", recommendedUse: "Figuras, decoración, maquetas y prototipos visuales.", advantages: ["Buen nivel de detalle", "Amplia variedad de colores", "Ideal para uso interior"] },
      { name: "PETG", recommendedUse: "Piezas funcionales y objetos que requieren mayor resistencia.", advantages: ["Resistente a impactos", "Buena durabilidad", "Apto para múltiples usos"] },
      { name: "TPU", recommendedUse: "Piezas flexibles, protectores y apoyos antideslizantes.", advantages: ["Flexible", "Resistente al desgaste", "Absorbe impactos"], note: "La geometría y dureza requerida se evalúan antes de cotizar." },
      { name: "ABS o ASA", recommendedUse: "Piezas técnicas que requieren resistencia térmica o exposición exterior.", advantages: ["Mayor resistencia térmica", "Buen desempeño funcional"], note: "Material sujeto a evaluación según dimensiones, geometría y uso." },
      { name: "Resina", recommendedUse: "Modelos pequeños que requieren detalles finos.", advantages: ["Alta definición", "Superficies detalladas"], note: "Opción futura o sujeta a evaluación. La disponibilidad se confirma al cotizar." },
    ] satisfies Material[],
  },
  gallery: {
    eyebrow: "Ejemplos de trabajos",
    title: "Posibilidades que puedes adaptar a tu proyecto.",
    description: "Visuales simulados para representar tipos de trabajo. El resultado final depende del diseño, material y terminación elegidos.",
    items: [
      { name: "Figura decorativa", type: "Decoración", description: "Modelo de exhibición personalizado en escala y color.", visual: "figure" },
      { name: "Soporte funcional", type: "Pieza útil", description: "Soporte diseñado para mantener un objeto en su posición.", visual: "support" },
      { name: "Repuesto simple", type: "Repuesto", description: "Componente de reemplazo ajustado a medidas específicas.", visual: "part" },
      { name: "Llavero personalizado", type: "Regalo", description: "Pieza compacta con texto, forma o identidad de marca.", visual: "keyring" },
      { name: "Organizador de escritorio", type: "Organización", description: "Módulo práctico para ordenar herramientas y accesorios.", visual: "organizer" },
      { name: "Prototipo técnico", type: "Desarrollo", description: "Modelo para revisar volumen, encaje y funcionamiento.", visual: "prototype" },
    ] satisfies GalleryWork[],
  },
  pricing: {
    eyebrow: "Precios referenciales",
    title: "Una guía inicial, no una tarifa cerrada.",
    description: "Primero revisamos los requisitos para entregarte una cotización acorde al proyecto.",
    items: [
      { title: "Piezas pequeñas", reference: "Desde cotización", detail: "Se revisan medidas, material y uso esperado." },
      { title: "Llaveros personalizados", reference: "Precio según cantidad", detail: "El diseño, los colores y el volumen influyen en el valor." },
      { title: "Prototipos", reference: "Según tamaño, material y complejidad", detail: "Considera la geometría y los ajustes necesarios." },
      { title: "Figuras", reference: "Según tiempo de impresión y terminación", detail: "La escala y el nivel de detalle se evalúan en cada caso." },
    ] satisfies ReferencePrice[],
    note: "Los valores son referenciales. Cada proyecto se evalúa según tamaño, material, tiempo de impresión, cantidad y terminación.",
  },
  process: {
    eyebrow: "Cómo cotizar impresión 3D",
    title: "Cuatro pasos para comenzar.",
    description: "Con información básica podemos orientarte y preparar una propuesta clara.",
    steps: [
      { title: "Envía tu archivo o idea", description: "Comparte el modelo disponible, una foto o una explicación de lo que necesitas." },
      { title: "Indica medidas, cantidad y color", description: "Incluye las dimensiones principales, unidades y preferencias relevantes." },
      { title: "Revisamos factibilidad", description: "Analizamos geometría, material, resistencia y alternativas de fabricación." },
      { title: "Enviamos valor y plazo estimado", description: "Recibes una propuesta antes de confirmar la fabricación." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Información útil antes de cotizar.",
    items: [
      { question: "¿Necesito tener un archivo 3D?", answer: "No siempre. Puedes enviar una idea, fotografía o referencia para revisar si es posible modelarla. El diseño, si se requiere, se cotiza por separado." },
      { question: "¿Qué formatos se pueden enviar?", answer: "Puedes enviar archivos STL, OBJ o STEP. También aceptamos imágenes y planos como referencia para evaluar el proyecto." },
      { question: "¿Puedo pedir una sola unidad?", answer: "Sí. Fabricamos desde una unidad y también evaluamos series pequeñas." },
      { question: "¿El precio depende del peso del material?", answer: "El material influye, pero no es el único factor. También se consideran el tiempo de impresión, la complejidad, la preparación y la terminación." },
      { question: "¿Pueden diseñar una pieza desde cero?", answer: "Podemos evaluar el modelado según la información y complejidad de la pieza. Este trabajo se informa y cotiza antes de comenzar." },
      { question: "¿Cuánto demora una impresión?", answer: "Depende del tamaño, la calidad, el material y la carga de trabajo. El plazo estimado se entrega junto con la cotización." },
    ] satisfies Faq[],
  },
  finalCta: {
    eyebrow: "Hablemos de tu proyecto",
    title: "¿Tienes una pieza, archivo o idea para fabricar?",
    description: "Envíanos los antecedentes disponibles y te orientaremos sobre material, factibilidad, valor y plazo estimado.",
    primaryAction: { label: "Cotizar impresión 3D", href: quoteHref },
    secondaryAction: { label: "Volver al inicio", href: "/" },
  },
};
