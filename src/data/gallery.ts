import type { GalleryProcessStep, GalleryProject, GalleryStat } from "@/types/gallery";

export const galleryContent = {
  hero: {
    eyebrow: "Galería D3D Chile",
    title: "Explora referencias fabricadas a medida",
    subtitle: "Una vitrina de ejemplos simulados de impresión 3D, corte y grabado láser, regalos personalizados, prototipos y piezas funcionales para inspirar tu próximo proyecto.",
    primaryAction: { label: "Ver trabajos", href: "#trabajos" },
    secondaryAction: { label: "Cotizar algo similar", href: "/cotizar" },
    trustMessages: ["Referencias editables", "Proyectos personalizados", "Fabricación a pedido"],
  },
  filters: ["Todos", "Impresión 3D", "Corte láser", "Grabado láser", "Regalos", "Prototipos", "Empresas"],
  projects: [
    { name: "Llaveros personalizados por nombre", service: "Impresión 3D", category: "Regalos", description: "Conjunto de llaveros con tipografía, forma y combinación de colores adaptables.", application: "Celebraciones, equipos y recuerdos", status: "Proyecto personalizable", tags: ["Nombres", "Series pequeñas", "Color"], action: { label: "Cotizar similar", href: "/cotizar" }, visual: "keyrings" },
    { name: "Soporte para audífonos", service: "Impresión 3D", category: "Pieza funcional", description: "Base compacta de líneas geométricas para mantener audífonos ordenados y accesibles.", application: "Escritorio, oficina o setup", status: "Referencia visual", tags: ["Soporte", "A medida", "Escritorio"], action: { label: "Consultar proyecto", href: "/contacto" }, visual: "headphone-stand" },
    { name: "Placa grabada para mascota", service: "Grabado láser", category: "Identificación", description: "Placa de identificación con espacio para nombre y datos de contacto.", application: "Identificación de mascotas", status: "Disponible bajo consulta", tags: ["Grabado", "Nombre", "Compacta"], action: { label: "Cotizar similar", href: "/cotizar" }, visual: "pet-tag" },
    { name: "Letrero decorativo en madera", service: "Corte láser", category: "Decoración", description: "Composición de formas y letras recortadas para dar identidad a un espacio.", application: "Hogar, eventos o vitrinas", status: "Inspiración para cotizar", tags: ["Madera", "Tipografía", "Decoración"], action: { label: "Consultar factibilidad", href: "/contacto" }, visual: "wood-sign" },
    { name: "Organizador de escritorio modular", service: "Impresión 3D", category: "Prototipos", description: "Módulos combinables para distribuir lápices, tarjetas y accesorios de trabajo.", application: "Organización de espacios", status: "Proyecto personalizable", tags: ["Modular", "Funcional", "Medidas"], action: { label: "Cotizar similar", href: "/cotizar" }, visual: "organizer" },
    { name: "Topper personalizado para celebración", service: "Corte láser", category: "Regalos", description: "Silueta decorativa con nombre, frase breve o motivo para una ocasión especial.", application: "Cumpleaños y celebraciones", status: "Referencia visual", tags: ["Nombre", "Evento", "Personalizado"], action: { label: "Cotizar similar", href: "/cotizar" }, visual: "topper" },
    { name: "Porta celular de escritorio", service: "Impresión 3D", category: "Pieza funcional", description: "Soporte inclinado pensado para mantener la pantalla visible mientras se trabaja.", application: "Escritorio y videollamadas", status: "Disponible bajo consulta", tags: ["Soporte", "Compacto", "Funcional"], action: { label: "Consultar opciones", href: "/contacto" }, visual: "phone-stand" },
    { name: "Placa corporativa grabada", service: "Grabado láser", category: "Empresas", description: "Placa informativa con identidad de marca y contenido definido para cada espacio.", application: "Señalética, oficinas y atención", status: "Proyecto personalizable", tags: ["Marca", "Señalética", "Empresas"], action: { label: "Cotizar similar", href: "/cotizar" }, visual: "corporate-plate" },
    { name: "Caja personalizada en corte láser", service: "Corte láser", category: "Empaque", description: "Estructura encastrable con tapa y detalles gráficos para presentar objetos o regalos.", application: "Empaque, presentación y regalos", status: "Inspiración para cotizar", tags: ["Caja", "Encajes", "A medida"], action: { label: "Consultar proyecto", href: "/contacto" }, visual: "laser-box" },
  ] satisfies GalleryProject[],
  stats: [
    { value: "3", label: "servicios principales", description: "Impresión 3D, corte láser y grabado láser." },
    { value: "100%", label: "personalizable", description: "Según solicitud, materiales y factibilidad técnica." },
    { value: "A pedido", label: "modalidad de fabricación", description: "Cada alcance se confirma antes de producir." },
    { value: "Editables", label: "referencias visuales", description: "Puntos de partida para conversar una idea." },
  ] satisfies GalleryStat[],
  process: {
    eyebrow: "Cómo usar la galería",
    title: "De una referencia a una solicitud clara",
    description: "Elige una idea como punto de partida y cuéntanos los detalles necesarios para evaluarla.",
    steps: [
      { title: "Revisa una referencia", description: "Identifica el estilo, servicio o aplicación que se acerca a tu idea." },
      { title: "Define los detalles", description: "Indica medidas, cantidad, uso y personalización que necesitas." },
      { title: "Escríbenos o solicita cotización", description: "Comparte la referencia junto con los antecedentes disponibles." },
      { title: "Confirmamos el proyecto", description: "Revisamos factibilidad, valor y plazo antes de fabricar." },
    ] satisfies GalleryProcessStep[],
  },
  notice: {
    eyebrow: "Galería referencial",
    title: "Una representación honesta de posibilidades",
    description: "Esta vitrina permite explorar aplicaciones mientras incorporamos registros de fabricación reales.",
    items: ["Las imágenes son representaciones visuales creadas únicamente con CSS.", "Los trabajos son referencias simuladas mientras se incorporan fotografías reales.", "Materiales, colores, medidas, terminaciones y disponibilidad se confirman mediante cotización.", "La galería no representa stock permanente ni permite compra directa."],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que debes saber antes de elegir una referencia",
    description: "Información simple sobre el contenido de esta galería y cómo solicitar un proyecto.",
    items: [
      { question: "¿Las imágenes corresponden a trabajos reales?", answer: "No. Actualmente son representaciones visuales creadas con CSS para mostrar aplicaciones posibles mientras incorporamos fotografías reales." },
      { question: "¿Puedo pedir algo parecido?", answer: "Sí. Puedes usar cualquier proyecto como referencia y solicitar una evaluación según medidas, material, cantidad y terminación." },
      { question: "¿Puedo enviar mi propia referencia?", answer: "Sí. Puedes compartir una imagen, dibujo o descripción para que revisemos el objetivo y la factibilidad de fabricación." },
      { question: "¿Puedo elegir colores o materiales?", answer: "Puedes indicar tus preferencias. Las alternativas se confirman de acuerdo con el proceso, la factibilidad y la disponibilidad de materiales." },
      { question: "¿La galería tiene precios?", answer: "No presenta precios cerrados. Cada valor depende de las características del proyecto y se informa mediante cotización." },
      { question: "¿Se actualizará con fotos reales?", answer: "Sí. La galería podrá incorporar fotografías propias de trabajos a medida que estén disponibles para publicación." },
    ],
  },
  finalCta: {
    eyebrow: "Convierte una referencia en proyecto",
    title: "¿Encontraste una idea cercana a lo que necesitas?",
    description: "Cuéntanos el uso, las medidas y la personalización esperada. Confirmaremos alternativas, factibilidad, valor y plazo.",
    primaryAction: { label: "Cotizar algo similar", href: "/cotizar" },
    secondaryAction: { label: "Contactar", href: "/contacto" },
  },
};
