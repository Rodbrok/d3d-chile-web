import type { Launch, LaunchCategory, LaunchTimelineStep } from "@/types/launches";

export const launchesContent = {
  hero: {
    eyebrow: "Próximamente en D3D Chile",
    title: "Nuevos diseños en preparación",
    subtitle: "Estamos desarrollando productos, prototipos, piezas decorativas, regalos personalizados y soluciones fabricadas con impresión 3D, corte láser y grabado.",
    primaryAction: { label: "Ver lanzamientos", href: "#lanzamientos" },
    secondaryAction: { label: "Cotizar una idea", href: "/cotizar" },
    trustMessages: ["Diseños en desarrollo", "Producción a pedido", "Actualización progresiva"],
  },
  featured: {
    eyebrow: "Lanzamientos destacados",
    title: "Ideas que avanzan hacia su próxima versión",
    description: "Conoce una selección referencial de productos en desarrollo. Cada propuesta puede ajustarse según factibilidad, materiales y objetivo.",
    items: [
      { name: "Llaveros personalizados D3D", category: "Regalos personalizados", service: "Mixto", status: "En prueba", description: "Llaveros con nombres, formas o identidad de marca, combinando volumen y detalles definidos.", benefit: "Un detalle reconocible para personas, equipos o eventos", period: "En preparación", priceNote: "Disponible bajo cotización", tags: ["Personalizable", "Series pequeñas"], action: { label: "Cotizar este diseño", href: "/cotizar" }, visual: "keyrings" },
      { name: "Organizadores de escritorio impresos en 3D", category: "Organización y escritorio", service: "Impresión 3D", status: "En diseño", description: "Sistema modular para ordenar útiles, accesorios y dispositivos en espacios de trabajo.", benefit: "Orden adaptable al espacio y a la forma de uso", period: "Próximamente", priceNote: "Precio según proyecto", tags: ["Modular", "A medida"], action: { label: "Consultar opciones", href: "/contacto" }, visual: "organizer" },
      { name: "Placas grabadas para mascotas", category: "Mascotas", service: "Grabado láser", status: "Disponible bajo consulta", description: "Identificadores compactos con nombre y datos de contacto sobre materiales compatibles.", benefit: "Identificación clara con contenido personalizado", period: "Disponible bajo consulta", priceNote: "Disponible bajo cotización", tags: ["Identificación", "Grabado"], action: { label: "Cotizar una placa", href: "/cotizar" }, visual: "pet-tag" },
      { name: "Letreros decorativos en madera", category: "Decoración", service: "Corte láser", status: "Próximamente", description: "Composiciones tipográficas y geométricas para espacios interiores, celebraciones o marcas.", benefit: "Una pieza decorativa diseñada para cada ambiente", period: "Próximamente", priceNote: "Precio según proyecto", tags: ["Madera", "Personalizado"], action: { label: "Consultar factibilidad", href: "/contacto" }, visual: "wood-sign" },
      { name: "Soportes personalizados para setup gamer", category: "Organización y escritorio", service: "Impresión 3D", status: "En prueba", description: "Soportes para audífonos, controles o accesorios adaptados a medidas y estilo del setup.", benefit: "Accesorios mejor organizados y al alcance", period: "En preparación", priceNote: "Disponible bajo cotización", tags: ["Setup", "Funcional"], action: { label: "Cotizar un soporte", href: "/cotizar" }, visual: "gamer-stand" },
      { name: "Pack de regalos corporativos personalizados", category: "Emprendimientos", service: "Mixto", status: "En diseño", description: "Conjunto coordinado de piezas impresas, cortadas o grabadas con identidad de empresa.", benefit: "Una presentación coherente para equipos y clientes", period: "En preparación", priceNote: "Precio según proyecto", tags: ["Empresas", "Por cantidad"], action: { label: "Conversar sobre el pack", href: "/contacto" }, visual: "corporate-pack" },
    ] satisfies Launch[],
  },
  categories: {
    eyebrow: "Próximas categorías",
    title: "Soluciones pensadas para distintos usos",
    description: "Explora las líneas que estamos preparando o cuéntanos qué categoría te interesa desarrollar.",
    items: [
      { title: "Regalos personalizados", description: "Objetos únicos para fechas, celebraciones y detalles con significado.", services: ["Impresión 3D", "Grabado láser"], action: { label: "Ver catálogo", href: "/catalogo" } },
      { title: "Organización y escritorio", description: "Accesorios modulares y soportes adaptados al espacio disponible.", services: ["Impresión 3D"], action: { label: "Cotizar una solución", href: "/cotizar" } },
      { title: "Decoración", description: "Letreros, formas y objetos para dar identidad a cada ambiente.", services: ["Corte láser", "Impresión 3D"], action: { label: "Ver catálogo", href: "/catalogo" } },
      { title: "Mascotas", description: "Identificadores y accesorios personalizados para uso cotidiano.", services: ["Grabado láser", "Impresión 3D"], action: { label: "Consultar opciones", href: "/contacto" } },
      { title: "Emprendimientos", description: "Piezas de marca, exhibición y series pequeñas para nuevos negocios.", services: ["Mixto"], action: { label: "Cotizar para mi marca", href: "/cotizar" } },
      { title: "Prototipos y piezas funcionales", description: "Pruebas físicas y componentes a medida para validar una idea.", services: ["Impresión 3D", "Corte láser"], action: { label: "Presentar una idea", href: "/contacto" } },
    ] satisfies LaunchCategory[],
  },
  timeline: {
    eyebrow: "Del concepto al lanzamiento",
    title: "Un avance visible, etapa por etapa",
    description: "Cada propuesta se revisa y ajusta antes de publicarse o fabricarse bajo consulta.",
    steps: [
      { title: "Diseño o idea inicial", description: "Definimos el uso, la forma y las posibilidades de personalización." },
      { title: "Prueba de fabricación", description: "Producimos una primera versión para revisar medidas, material y proceso." },
      { title: "Ajustes y terminación", description: "Corregimos detalles y evaluamos la terminación adecuada para el producto." },
      { title: "Publicación o venta bajo consulta", description: "Presentamos la propuesta y confirmamos cada solicitud mediante cotización." },
    ] satisfies LaunchTimelineStep[],
  },
  notice: {
    eyebrow: "Información comercial",
    title: "Referencias claras antes de fabricar",
    description: "Esta vitrina anticipa posibilidades de fabricación y no representa stock permanente ni una tienda en línea.",
    items: ["Los lanzamientos son referenciales y su disponibilidad puede cambiar.", "Los colores, materiales y terminaciones dependen del stock y de la factibilidad técnica.", "Algunos productos pueden fabricarse únicamente a pedido.", "Los precios, alcances y plazos se confirmarán mediante una cotización."],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Antes de consultar un lanzamiento",
    description: "Respuestas simples sobre disponibilidad, personalización y condiciones comerciales.",
    items: [
      { question: "¿Puedo pedir un lanzamiento antes de que esté publicado?", answer: "Sí, puedes consultarlo. Revisaremos si el diseño está suficientemente avanzado y si es factible fabricarlo." },
      { question: "¿Los diseños tendrán precio fijo?", answer: "No necesariamente. El valor dependerá de medidas, material, cantidad, personalización y terminación." },
      { question: "¿Puedo pedir cambios de color o tamaño?", answer: "Puedes solicitarlos. Confirmaremos las alternativas según diseño, material disponible y factibilidad técnica." },
      { question: "¿Puedo sugerir una idea para un nuevo producto?", answer: "Sí. Cuéntanos su uso y las referencias que tengas para evaluar si podemos desarrollarla." },
      { question: "¿Los productos estarán siempre disponibles?", answer: "No podemos asegurar stock permanente. Algunos se fabricarán solo a pedido y estarán sujetos a agenda y materiales." },
      { question: "¿Se pueden personalizar para empresas?", answer: "Sí, podemos evaluar identidad de marca, cantidades y combinaciones de procesos para preparar una cotización." },
    ],
  },
  finalCta: {
    eyebrow: "Tu idea puede ser la próxima",
    title: "¿Tienes un producto en mente?",
    description: "Conversemos sobre su uso, medidas y personalización. Evaluaremos la mejor forma de fabricarlo antes de confirmar alcance, valor y plazo.",
    primaryAction: { label: "Cotizar una idea", href: "/cotizar" },
    secondaryAction: { label: "Contactar", href: "/contacto" },
  },
};
