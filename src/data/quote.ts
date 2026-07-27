import type { QuoteCard, QuoteFaq, QuoteField, QuoteService } from "@/types/quote";

export const quoteMailto = "mailto:contacto@d3dchile.cl?subject=Solicitud%20de%20cotización";

export const quoteContent = {
  hero: {
    eyebrow: "Cotización personalizada",
    title: "Cotiza tu proyecto personalizado",
    subtitle: "Revisamos cada solicitud según sus medidas, material, cantidad y terminación para proponerte una alternativa adecuada.",
    primaryAction: { label: "Enviar solicitud por correo", href: quoteMailto },
    secondaryAction: { label: "Ver qué información enviar", href: "#informacion" },
    trustMessages: ["Revisión personalizada", "Valores según proyecto", "Respuesta con plazo estimado"],
  },
  services: {
    eyebrow: "Servicios cotizables",
    title: "¿Qué podemos fabricar para ti?",
    description: "Elige el punto de partida que mejor describa tu proyecto. También podemos revisar ideas que combinen más de un proceso.",
    items: [
      { title: "Impresión 3D", description: "Piezas fabricadas capa a capa a partir de un modelo digital.", examples: "Prototipos, repuestos, figuras y piezas funcionales.", action: { label: "Conocer impresión 3D", href: "/impresion-3d" } },
      { title: "Corte láser", description: "Cortes precisos para piezas planas y composiciones ensamblables.", examples: "Letreros, packaging, plantillas y decoración.", action: { label: "Conocer corte láser", href: "/laser" } },
      { title: "Grabado láser", description: "Personalización de superficies con textos, marcas y detalles.", examples: "Placas, regalos, señalética y productos de marca.", action: { label: "Conocer grabado láser", href: "/laser" } },
      { title: "Productos personalizados", description: "Objetos adaptados a una ocasión, persona o identidad de marca.", examples: "Regalos, reconocimientos y accesorios únicos.", action: { label: "Ver catálogo", href: "/catalogo" } },
      { title: "Prototipos", description: "Piezas de prueba para revisar forma, medidas y funcionamiento.", examples: "Validaciones, ensambles y primeras versiones.", action: { label: "Preparar información", href: "#informacion" } },
      { title: "Series para emprendimientos", description: "Producciones pequeñas o repetibles para marcas y negocios.", examples: "Merchandising, componentes y productos de autor.", action: { label: "Preparar información", href: "#informacion" } },
    ] satisfies QuoteService[],
  },
  requirements: {
    eyebrow: "Antes de escribirnos",
    title: "Información necesaria para cotizar",
    description: "No necesitas tener todo resuelto. Mientras más antecedentes compartas, mejor podremos entender y evaluar tu solicitud.",
    items: [
      { title: "Descripción de la idea", description: "Cuéntanos qué quieres fabricar y para qué lo necesitas." },
      { title: "Medidas aproximadas o exactas", description: "Indica ancho, alto y profundidad, idealmente en milímetros o centímetros." },
      { title: "Cantidad de unidades", description: "Señala si necesitas una pieza, varias iguales o diferentes versiones." },
      { title: "Material preferido", description: "Menciona una opción si la conoces; si no, podemos orientarte." },
      { title: "Color o terminación", description: "Describe el aspecto final esperado y cualquier detalle importante." },
      { title: "Archivo disponible", description: "Indica si cuentas con un modelo 3D, vector, plano u otro archivo." },
      { title: "Fecha o plazo ideal", description: "Comparte cuándo te gustaría recibirlo, sin que esto implique una fecha confirmada." },
      { title: "Referencias visuales", description: "Puedes adjuntar o enlazar bocetos, fotografías propias o ejemplos de estilo." },
    ] satisfies QuoteCard[],
  },
  previewForm: {
    eyebrow: "Vista previa",
    title: "Así será la solicitud en línea",
    description: "Este bloque anticipa la información que solicitará el formulario futuro.",
    notice: "Formulario en preparación. Por ahora, envía tu solicitud por correo.",
    fields: [
      { label: "Nombre", placeholder: "Tu nombre" },
      { label: "Correo", placeholder: "nombre@correo.cl" },
      { label: "Servicio requerido", placeholder: "Selecciona un servicio", kind: "select" },
      { label: "Descripción del proyecto", placeholder: "Describe qué necesitas fabricar", kind: "textarea" },
      { label: "Medidas", placeholder: "Ancho, alto y profundidad" },
      { label: "Cantidad", placeholder: "Número de unidades" },
      { label: "Material o color", placeholder: "Preferencias, si las tienes" },
      { label: "Archivo o enlace de referencia", placeholder: "Archivo, carpeta o enlace" },
      { label: "Mensaje adicional", placeholder: "Agrega cualquier antecedente útil", kind: "textarea" },
    ] satisfies QuoteField[],
    action: { label: "Enviar por correo", href: quoteMailto },
  },
  factors: {
    eyebrow: "Valor del proyecto",
    title: "Factores que influyen en la cotización",
    description: "Cada solicitud se calcula de manera individual porque estas variables cambian los recursos y el proceso necesario.",
    items: [
      { title: "Tamaño de la pieza", description: "Define el consumo de material y el espacio requerido para fabricar." },
      { title: "Tiempo de fabricación", description: "Procesos más largos utilizan equipos y recursos durante más tiempo." },
      { title: "Material", description: "Cada material tiene un costo, disponibilidad y comportamiento diferente." },
      { title: "Cantidad", description: "El volumen total modifica el tiempo de producción y permite evaluar series." },
      { title: "Complejidad del diseño", description: "Detalles, geometrías y preparación de archivos pueden requerir trabajo adicional." },
      { title: "Terminación o postproceso", description: "Lijado, armado, pintura u otros acabados agregan etapas al proyecto." },
    ] satisfies QuoteCard[],
  },
  process: {
    eyebrow: "Qué ocurre después",
    title: "Un proceso simple y transparente",
    description: "La solicitud inicia una conversación para definir el alcance antes de fabricar.",
    steps: [
      { title: "Recibimos tu información", description: "Reunimos los antecedentes que compartiste sobre tu proyecto." },
      { title: "Revisamos factibilidad", description: "Evaluamos archivos, medidas, materiales y proceso de fabricación." },
      { title: "Te enviamos valor y plazo", description: "Preparamos una propuesta con el alcance y un plazo estimado." },
      { title: "Confirmas y comenzamos fabricación", description: "Solo después de tu aprobación coordinamos el inicio del trabajo." },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos las primeras dudas",
    items: [
      { question: "¿La cotización tiene costo?", answer: "La revisión inicial y la cotización no tienen costo. Si el proyecto requiere diseño o preparación especial, se informará antes de avanzar." },
      { question: "¿Puedo cotizar sin archivo?", answer: "Sí. Puedes enviar una descripción, medidas, bocetos o referencias y revisaremos qué antecedentes faltan para evaluar la idea." },
      { question: "¿Cuánto demora la respuesta?", answer: "Depende de la complejidad y de la información disponible. Te responderemos con un plazo estimado cuando revisemos la solicitud." },
      { question: "¿Puedo pedir solo una unidad?", answer: "Sí. Evaluamos piezas únicas, prototipos y series según las características de cada proyecto." },
      { question: "¿Puedo cotizar varios productos juntos?", answer: "Sí. Identifica cada producto, sus medidas y cantidades para que podamos revisar el conjunto con claridad." },
      { question: "¿Los valores del catálogo son definitivos?", answer: "No. Son referencias y pueden variar según tamaño, material, cantidad, personalización y terminación." },
    ] satisfies QuoteFaq[],
  },
  finalCta: {
    eyebrow: "Tu idea puede comenzar aquí",
    title: "Cuéntanos qué necesitas fabricar",
    description: "Envía los antecedentes disponibles por correo. Revisaremos tu solicitud y te orientaremos sobre el siguiente paso.",
    primaryAction: { label: "Enviar solicitud por correo", href: quoteMailto },
    secondaryAction: { label: "Ver catálogo", href: "/catalogo" },
  },
};
