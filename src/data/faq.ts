import type { FaqPageContent } from "@/types/faq";

export const faqContent = {
  hero: {
    eyebrow: "Guía de atención",
    title: "Preguntas frecuentes",
    subtitle:
      "Resolvemos dudas sobre nuestros servicios, archivos, cotizaciones, personalización y el funcionamiento actual del sitio de D3D Chile.",
    primaryAction: { label: "Ir a cotizar", href: "/cotizar" },
    secondaryAction: { label: "Contactar", href: "/contacto" },
    trustMessages: [
      "Información clara",
      "Servicios a pedido",
      "Cotización personalizada",
    ],
  },
  quickLinks: {
    eyebrow: "Accesos rápidos",
    title: "Encuentra tu respuesta por tema",
    description:
      "Selecciona una categoría para ir directamente a las preguntas relacionadas.",
  },
  categories: [
    {
      id: "cotizaciones",
      title: "Cotizaciones",
      shortLabel: "Cotizaciones",
      description: "Cómo iniciar una solicitud y qué considerar antes de confirmar.",
      items: [
        { question: "¿Cómo solicito una cotización?", answer: "Puedes revisar la guía de la sección Cotizar y luego contactarnos con los antecedentes de tu proyecto. La solicitud todavía no se envía automáticamente desde el sitio." },
        { question: "¿Qué información debo enviar?", answer: "Indica el servicio, cantidad, medidas, uso esperado, material o color deseado, plazo aproximado y adjunta los archivos o referencias que tengas." },
        { question: "¿Puedo cotizar sin tener archivo?", answer: "Sí. Puedes compartir una idea, fotografía o dibujo para evaluar su factibilidad. Si se necesita diseño o modelado, ese trabajo se considera por separado en la cotización." },
        { question: "¿Los valores publicados son definitivos?", answer: "No. Los valores visibles son referenciales. El precio final depende del archivo, dimensiones, cantidad, material, tiempo de fabricación y terminaciones solicitadas." },
      ],
    },
    {
      id: "impresion-3d",
      title: "Impresión 3D",
      shortLabel: "Impresión 3D",
      description: "Fabricación de piezas, modelos personalizados y revisión de archivos.",
      items: [
        { question: "¿Qué se puede fabricar con impresión 3D?", answer: "Se pueden fabricar prototipos, repuestos no críticos, organizadores, soportes, decoración y piezas personalizadas, siempre sujetos a una revisión técnica previa." },
        { question: "¿Puedo pedir una pieza a medida?", answer: "Sí. Necesitamos las medidas, el uso y, si existe, un modelo 3D o una referencia para evaluar el diseño y la fabricación." },
        { question: "¿Qué pasa si mi modelo 3D tiene errores?", answer: "Revisamos su viabilidad antes de fabricar. Si requiere reparación o rediseño, te informaremos el alcance y cualquier costo asociado antes de continuar." },
        { question: "¿Puedo elegir color o material?", answer: "Puedes indicar tus preferencias. La alternativa final se confirma según el uso de la pieza y la disponibilidad de materiales y colores al momento de cotizar." },
      ],
    },
    {
      id: "laser",
      title: "Corte y grabado láser",
      shortLabel: "Corte y grabado láser",
      description: "Diferencias entre servicios, archivos y proyectos personalizados.",
      items: [
        { question: "¿Qué diferencia hay entre corte láser y grabado láser?", answer: "El corte atraviesa el material para obtener piezas o contornos. El grabado marca su superficie para incorporar textos, logos o detalles sin separarla por completo." },
        { question: "¿Qué archivos sirven para corte láser?", answer: "Preferimos archivos vectoriales como SVG, DXF, AI o PDF con trazados claros. Revisamos cada archivo antes de confirmar su uso." },
        { question: "¿Puedo grabar un logo?", answer: "Sí, sujeto a la calidad del archivo, el tamaño, el material y la autorización de uso de la marca o diseño que nos proporciones." },
        { question: "¿Puedo pedir letreros o placas personalizadas?", answer: "Sí. Comparte medidas, texto, logo, material deseado, cantidad y referencias para preparar una propuesta a medida." },
      ],
    },
    {
      id: "archivos-diseno",
      title: "Archivos y diseño",
      shortLabel: "Archivos y diseño",
      description: "Formatos, referencias y apoyo necesario para preparar la fabricación.",
      items: [
        { question: "¿Qué formatos de archivo puedo enviar?", answer: "Para impresión 3D son habituales STL, OBJ o 3MF; para láser, SVG, DXF, AI o PDF. También puedes enviar imágenes de referencia para una evaluación inicial." },
        { question: "¿Puedo enviar solo una foto o dibujo?", answer: "Sí, como punto de partida. Una foto o dibujo no siempre contiene toda la información necesaria, por lo que solicitaremos medidas y detalles adicionales." },
        { question: "¿Ustedes hacen el diseño?", answer: "Podemos evaluar apoyo en modelado o preparación de archivos según la complejidad y disponibilidad. El diseño se cotiza aparte cuando corresponde." },
        { question: "¿Qué pasa si necesito modificar un archivo?", answer: "Describe el cambio y comparte el archivo editable si lo tienes. Revisaremos si es posible ajustarlo y te indicaremos el alcance antes de realizar el trabajo." },
      ],
    },
    {
      id: "materiales-terminaciones",
      title: "Materiales y terminaciones",
      shortLabel: "Materiales y terminaciones",
      description: "Disponibilidad, apariencia y desempeño esperado de cada proyecto.",
      items: [
        { question: "¿Qué materiales trabajan?", answer: "La selección depende del servicio y del proyecto. Podemos evaluar filamentos para impresión 3D y materiales compatibles con láser, confirmando cada alternativa al cotizar." },
        { question: "¿Los colores siempre están disponibles?", answer: "No. La disponibilidad de colores y materiales puede cambiar. Confirmamos las opciones vigentes antes de fabricar." },
        { question: "¿Puedo pedir terminaciones especiales?", answer: "Sí, puedes solicitar lijado, pintura, armado u otras terminaciones. Su factibilidad, resultado y costo se revisan para cada proyecto." },
        { question: "¿La resistencia de una pieza está garantizada?", answer: "No de forma general. Depende del diseño, orientación, material, carga y condiciones de uso. Las piezas críticas o de seguridad requieren validación especializada ajena a una fabricación estándar." },
      ],
    },
    {
      id: "envios-coordinacion",
      title: "Envíos, retiro y coordinación",
      shortLabel: "Envíos y coordinación",
      description: "Opciones que deben acordarse una vez revisado el proyecto.",
      items: [
        { question: "¿Tienen tienda física?", answer: "El sitio no publica actualmente una tienda o dirección de atención física. Cualquier modalidad de entrega o reunión debe coordinarse previamente." },
        { question: "¿Puedo coordinar retiro?", answer: "La posibilidad y el lugar de retiro se confirman directamente para cada pedido. No acudas a una dirección sin coordinación previa." },
        { question: "¿Realizan envíos?", answer: "Los envíos se evalúan según destino, tamaño y condiciones del pedido. Su disponibilidad y costo se confirman en la cotización o coordinación final." },
        { question: "¿Cuánto demora un pedido?", answer: "El plazo depende de la complejidad, cantidad, materiales y carga de trabajo. Entregamos una estimación al revisar el proyecto, pero no publicamos tiempos exactos generales." },
      ],
    },
    {
      id: "sitio-formularios",
      title: "Sitio web y formularios",
      shortLabel: "Sitio web y formularios",
      description: "Alcance de la vitrina digital durante esta etapa del proyecto.",
      items: [
        { question: "¿El catálogo permite comprar en línea?", answer: "No. El catálogo es una vitrina referencial y actualmente no incluye carrito, pagos ni compra directa." },
        { question: "¿Los formularios envían información?", answer: "No. Los formularios visibles son vistas informativas y todavía no están conectados a un backend. Para conversar sobre un proyecto utiliza los canales publicados en Contacto." },
        { question: "¿Las imágenes de la galería son reales?", answer: "La galería actual utiliza composiciones visuales y contenido simulado para representar tipos de proyectos. No debe interpretarse como registro fotográfico de trabajos entregados." },
        { question: "¿El sitio tendrá panel administrador más adelante?", answer: "Podría incorporarse en una etapa futura, pero hoy no existe un panel administrador, cuentas de usuario ni funciones privadas en el sitio." },
      ],
    },
  ],
  notice: {
    eyebrow: "Alcance actual",
    title: "Información honesta antes de avanzar",
    description: "Esta página orienta una primera conversación, pero no reemplaza la revisión técnica y comercial de cada solicitud.",
    items: [
      "Toda la información publicada es referencial y cada proyecto se confirma mediante una cotización.",
      "Los valores, materiales, colores, plazos y terminaciones pueden variar según disponibilidad y requerimientos.",
      "El sitio todavía no cuenta con compra en línea ni formularios conectados a un backend.",
      "Las páginas actuales funcionan como vitrina pública y guía comercial inicial de D3D Chile.",
    ],
  },
  finalCta: {
    eyebrow: "Tu proyecto",
    title: "¿Necesitas revisar una idea en particular?",
    description: "Cuéntanos qué quieres fabricar y comparte los antecedentes disponibles para preparar una cotización personalizada.",
    primaryAction: { label: "Cotizar proyecto", href: "/cotizar" },
    secondaryAction: { label: "Contactar", href: "/contacto" },
  },
} satisfies FaqPageContent;
