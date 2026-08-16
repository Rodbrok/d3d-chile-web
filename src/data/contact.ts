import { siteContent } from "@/data/site";
import type {
  ContactChannel,
  ContactFaq,
  ContactField,
  ContactInfo,
  ContactTip,
} from "@/types/contact";

export const contactMailto = `mailto:${siteContent.contact.email}?subject=Consulta%20desde%20D3D%20Chile`;

export const contactContent = {
  hero: {
    eyebrow: "Contacto D3D Chile",
    title: "Hablemos de tu próximo proyecto",
    subtitle:
      "Atendemos solicitudes de impresión 3D, corte láser, grabado y productos personalizados con una revisión directa de cada idea.",
    primaryAction: { label: "Escribir por correo", href: contactMailto },
    secondaryAction: { label: "Ver cómo cotizar", href: "/cotizar" },
    trustMessages: [
      "Atención directa",
      "Revisión personalizada",
      "Respuesta según disponibilidad",
    ],
  },
  channels: {
    eyebrow: "Canales disponibles",
    title: "Elige cómo continuar",
    description:
      "Centralizamos las consultas por correo mientras preparamos nuevos canales de atención.",
    items: [
      {
        title: "Correo",
        description: `Escríbenos a ${siteContent.contact.email} con los antecedentes de tu consulta.`,
        action: { label: "Abrir correo", href: contactMailto },
        note: "Canal de contacto disponible",
        external: true,
      },
      {
        title: "WhatsApp o teléfono",
        description: "Este canal se publicará cuando exista un número de atención confirmado.",
        action: { label: "Usar correo mientras tanto", href: contactMailto },
        note: "Número pendiente de confirmar",
        external: true,
      },
      {
        title: "Cotización guiada",
        description: "Revisa los datos útiles para que podamos evaluar tu proyecto con mayor claridad.",
        action: { label: "Ver cómo cotizar", href: "/cotizar" },
      },
      {
        title: "Catálogo",
        description: "Explora productos y referencias antes de contarnos qué necesitas personalizar.",
        action: { label: "Explorar catálogo", href: "/catalogo" },
      },
      {
        title: "Ofertas",
        description: "Consulta las promociones vigentes y sus condiciones antes de escribirnos.",
        action: { label: "Revisar ofertas", href: "/ofertas" },
      },
    ] satisfies ContactChannel[],
  },
  information: {
    eyebrow: "Información útil",
    title: "Antes de contactarnos",
    description: "Datos referenciales para orientar tu solicitud y coordinar los siguientes pasos.",
    items: [
      { label: "Ubicación referencial", value: siteContent.contact.location, description: "No contamos con una dirección pública informada." },
      { label: "Disponibilidad", value: "Atención según agenda", description: "Las consultas se revisan de acuerdo con la carga de proyectos." },
      { label: "Servicios", value: "Impresión 3D, corte y grabado láser", description: "Evaluamos el proceso apropiado para cada solicitud." },
      { label: "Tipo de atención", value: "Proyectos a pedido", description: "Cada trabajo se revisa según sus características." },
      { label: "Envíos o retiro", value: "Sujeto a coordinación", description: "Las alternativas se confirman para cada proyecto." },
      { label: "Archivos", value: "Modelos 3D, vectores, planos o referencias", description: "También puedes escribir si todavía no tienes un archivo." },
    ] satisfies ContactInfo[],
  },
  previewForm: {
    eyebrow: "Contacto en preparación",
    title: "Vista previa del formulario",
    description: "Este bloque muestra la información que podremos solicitar más adelante. Actualmente no recibe datos.",
    notice: "Formulario en preparación. Por ahora, escribe directamente al correo.",
    fields: [
      { label: "Nombre", placeholder: "Tu nombre" },
      { label: "Correo", placeholder: "nombre@correo.cl", kind: "email" },
      { label: "Tipo de consulta", placeholder: "Selecciona una opción", kind: "select" },
      { label: "Servicio de interés", placeholder: "Selecciona un servicio", kind: "select" },
      { label: "Mensaje", placeholder: "Cuéntanos en qué podemos ayudarte", kind: "textarea" },
      { label: "Archivo o enlace de referencia", placeholder: "Nombre de archivo o enlace" },
    ] satisfies ContactField[],
    action: { label: "Escribir por correo", href: contactMailto },
  },
  tips: {
    eyebrow: "Una consulta más clara",
    title: "Recomendaciones para escribir",
    description: "No es necesario tener todo definido, pero estos antecedentes nos ayudan a comprender mejor tu idea.",
    items: [
      { title: "Explica qué necesitas fabricar", description: "Describe la pieza, producto o resultado que tienes en mente." },
      { title: "Indica medidas y cantidad", description: "Comparte dimensiones aproximadas y número de unidades." },
      { title: "Menciona material o color", description: "Incluye tus preferencias si ya las conoces." },
      { title: "Adjunta archivo o referencia", description: "Puedes enviar un modelo, plano, vector, boceto o enlace." },
      { title: "Indica tu plazo ideal", description: "Cuéntanos cuándo lo necesitas, sujeto a revisión de agenda." },
      { title: "Incluye el uso de la pieza", description: "El contexto ayuda a evaluar material, proceso y terminación." },
    ] satisfies ContactTip[],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Dudas antes de escribir",
    items: [
      { question: "¿Puedo escribir sin tener archivo?", answer: "Sí. Puedes explicar la idea y enviar medidas, un boceto o referencias. Te indicaremos qué información adicional sería útil." },
      { question: "¿Atienden pedidos pequeños?", answer: "Sí. Revisamos piezas únicas, prototipos y series pequeñas según la factibilidad de cada proyecto." },
      { question: "¿Cuánto demora la respuesta?", answer: "La respuesta depende de la agenda y de la complejidad de la consulta. No comprometemos un tiempo fijo antes de revisarla." },
      { question: "¿Puedo enviar fotos de referencia?", answer: "Sí. Las fotografías, bocetos y enlaces pueden ayudar a explicar el resultado esperado, aunque no reemplazan las medidas necesarias." },
      { question: "¿Tienen tienda física?", answer: "No hay una tienda física ni una dirección pública informada. La atención y cualquier coordinación se confirman directamente." },
      { question: "¿Puedo coordinar retiro o envío?", answer: "Sí, sujeto a disponibilidad y a las características del proyecto. La alternativa se acuerda antes de finalizar el pedido." },
    ] satisfies ContactFaq[],
  },
  finalCta: {
    eyebrow: "Conversemos",
    title: "Cuéntanos qué quieres crear",
    description: "Escribe con los antecedentes que tengas o revisa primero nuestra guía para preparar una cotización.",
    primaryAction: { label: "Escribir por correo", href: contactMailto },
    secondaryAction: { label: "Cotizar proyecto", href: "/cotizar" },
  },
};
