# Plan técnico del panel administrador y Supabase para D3D Chile

Estado: propuesta inicial para una etapa futura. Este cambio es exclusivamente documental: no configura Supabase ni implementa backend, base de datos, autenticación, storage, APIs, server actions, formularios reales o rutas privadas. Tampoco incorpora dependencias, archivos `.env`, SQL ejecutable, pagos ni carrito.

## 1. Objetivo del panel administrador

Permitir que D3D Chile gestione el contenido editable de su vitrina comercial sin modificar código. El panel deberá ofrecer edición, revisión, publicación y ordenamiento de contenido para impresión 3D, corte láser y grabado láser. En esta etapa solo se documentan alcance y decisiones preliminares; la implementación requerirá una tarea posterior con criterios de aceptación propios.

## 2. Alcance futuro

| Módulo | Responsabilidad prevista |
| --- | --- |
| Dashboard | Resumen de contenido y solicitudes pendientes, según permisos. |
| Productos | Editar fichas, categorías, servicios, referencias comerciales e imágenes. |
| Categorías | Organizar el catálogo y su orden de presentación. |
| Servicios | Mantener descripciones, materiales, aplicaciones y condiciones. |
| Ofertas | Administrar beneficios, condiciones y vigencia. |
| Lanzamientos | Gestionar diseños, avance y períodos referenciales. |
| Galería | Publicar trabajos autorizados y fotografías reales. |
| Banners o hero sections | Editar títulos, textos, imágenes y llamados a la acción por página. |
| Preguntas frecuentes | Gestionar preguntas, respuestas, categorías y orden. |
| Solicitudes de cotización | Revisar antecedentes, asignación y estado de atención. |
| Mensajes de contacto | Revisar y dar seguimiento a consultas. |
| Configuración del sitio | Mantener marca, contacto, horarios y textos generales. |
| Usuarios administradores | Gestionar acceso y roles mediante un flujo restringido. |

El alcance no incluye comercio electrónico, inventario transaccional, pagos ni cuentas de clientes. El dashboard y la administración no deberán mostrar datos privados a usuarios sin autorización.

## 3. Estado actual del proyecto

El sitio usa Next.js con App Router, TypeScript y Tailwind CSS. Es una vitrina pública con contenido estático local; sus rutas actuales son `/`, `/impresion-3d`, `/laser`, `/catalogo`, `/ofertas`, `/lanzamientos`, `/galeria`, `/cotizar`, `/contacto` y `/preguntas-frecuentes`.

El contenido se administra desde `src/data` y sus contratos se definen en `src/types`. No hay base de datos, autenticación, panel administrador, APIs ni Supabase. Los formularios visibles no procesan envíos reales: son vistas informativas y los llamados a contactar utilizan correo o navegación pública. Los productos, ofertas, lanzamientos y trabajos son referencias simuladas; las imágenes de ejemplo incluyen visuales CSS y no prueban disponibilidad, stock ni trabajos realizados.

## 4. Estrategia de migración desde src/data

Mantener `src/data` como fuente temporal hasta validar cada módulo. Antes de migrar, inventariar contenido, contratos y consumidores; diseñar entidades equivalentes sin trasladar automáticamente componentes o clases visuales a la base de datos.

| Fuente actual | Destino preliminar |
| --- | --- |
| `src/data/catalog.ts` | `products`, `product_categories` y relaciones con `services`. |
| `src/data/printing3d.ts`, `src/data/laser.ts` | `services` y bloques editoriales asociados. |
| `src/data/offers.ts`, `src/data/launches.ts` | `offers`, `launches` y sus bloques editoriales. |
| `src/data/gallery.ts` | `gallery_projects`. |
| `src/data/faq.ts` | `faqs`, `faq_categories`. |
| `src/data/home.ts` y bloques `hero` de las páginas | `banners` y contenido editorial público. |
| `src/data/site.ts`, `src/data/navigation.ts` | Configuración pública tipada; evaluar qué navegación seguirá en código. |
| `src/data/contact.ts`, `src/data/quote.ts` | Textos e instrucciones públicos; no contienen solicitudes reales que migrar. |

Orden recomendado:

1. Migrar catálogo y categorías, preservando contratos de presentación.
2. Migrar ofertas y lanzamientos.
3. Migrar galería y preguntas frecuentes.
4. Completar servicios, banners y contenido general pendiente.
5. Finalmente migrar información de contacto y configuración del sitio e incorporar formularios reales como un flujo nuevo.

Usar identificadores estables y un mapeo explícito de nombres de categorías y servicios a relaciones. Los datos actuales carecen de identificadores uniformes; no generar nuevas filas en cada importación. Las futuras semillas deberán ser reproducibles e idempotentes, con datos públicos revisados y sin datos personales.

Conservar `price`, `validity`, `period`, estados comerciales y notas como textos referenciales cuando no exista un valor estructurado confirmado. No convertir “Desde cotización” en precio cero ni “Próximamente” en una fecha inventada. “Mixto” puede representarse mediante varios servicios asociados. Las categorías de lanzamientos no coinciden completamente con el catálogo y necesitan revisión editorial.

Introducir en una etapa posterior una capa de lectura que transforme los registros al contrato de la interfaz. Comparar cantidad, relaciones, orden, enlaces y contenido antes de cambiar la fuente de cada página. Definir una única fuente activa por módulo, respaldo y procedimiento de reversión. Un fallback local puede servir temporalmente para contenido público aprobado, con registro del fallo; nunca para datos privados, permisos o solicitudes. Retirarlo cuando deje de ser necesario para evitar contenido obsoleto.

## 5. Modelo de datos preliminar

Las siguientes entidades son propuestas, no un esquema definitivo ni migraciones SQL. Para contenido editorial se sugieren `id` estable, `created_at`, `updated_at`, `sort_order`, `publication_status` (`draft`, `published`, `archived`) y `published_at`. El estado de publicación debe ser independiente del estado comercial o de avance. Un `slug` deberá ser único dentro de su entidad cuando corresponda. Definir restricciones, índices y tipos finales antes de implementar.

| Entidad | Propósito y campos sugeridos | Relaciones | Estado o visibilidad |
| --- | --- | --- | --- |
| `products` | Fichas: `id`, `slug`, `name`, `description`, `price_note`, `price_from` opcional, `currency`, `tags`, `commercial_status`, `visual_key`, `image_path`, `image_alt`, `quote_action`, campos editoriales comunes. | `category_id` hacia `product_categories`; varios servicios mediante `product_services` si corresponde. | Publicar solo referencias aprobadas; `commercial_status` conserva disponibilidad a pedido o evaluación sin implicar stock. |
| `product_categories` | Clasificación: `id`, `slug`, `name`, `description`, campos editoriales comunes. | Una categoría agrupa varios productos; relación opcional desde lanzamientos o galería tras revisar taxonomía. | Solo categorías publicadas y con contenido visible; impedir borrados que dejen referencias inválidas. |
| `services` | Servicios: `id`, `slug`, `name`, `description`, `materials`, `applications`, `file_requirements`, `conditions`, campos editoriales comunes. | Productos, ofertas, lanzamientos y proyectos pueden asociarse a uno o varios servicios. | Publicación editorial; distinguir impresión 3D, corte y grabado láser. |
| `offers` | Promociones: `id`, `slug`, `name`, `description`, `benefit`, `conditions`, `validity_note`, `starts_at`, `ends_at` opcionales, `tags`, `visual_key`, `image_path`, `quote_action`, campos editoriales comunes. | Asociación opcional con productos y servicios; pueden existir promociones generales. | Publicación y vigencia independientes; fechas estructuradas solo si están confirmadas. |
| `launches` | Novedades: `id`, `slug`, `name`, `description`, `benefit`, `development_status`, `period_note`, `expected_at` opcional, `price_note`, `tags`, `visual_key`, `image_path`, `action`, campos editoriales comunes. | Producto futuro opcional, categoría opcional y varios servicios. | Avance: en diseño, en prueba, próximamente o disponible bajo consulta; publicación por separado. |
| `gallery_projects` | Trabajos: `id`, `slug`, `name`, `description`, `application`, `category_label`, `commercial_status`, `tags`, `visual_key`, `image_paths`, `image_alts`, `is_simulated`, `publication_authorized`, campos editoriales comunes. | Servicios asociados y producto opcional. | Publicar solo material autorizado; mantener identificación de referencias simuladas. Evidencia de autorización y datos de clientes en un registro privado separado. |
| `faqs` | Respuestas: `id`, `question`, `answer`, `category_id`, campos editoriales comunes. | Cada pregunta pertenece a `faq_categories`; asociación opcional a un servicio. | Solo preguntas y categorías publicadas. |
| `faq_categories` | Temas: `id`, `slug`, `title`, `short_label`, `description`, campos editoriales comunes. | Agrupa `faqs`; preservar anclas actuales al migrar. | Publicación y orden de categorías. |
| `quote_requests` | Solicitudes: `id`, `name`, `email`, `phone` opcional, `service_id` opcional, `product_id` opcional, `quantity`, `dimensions`, `material`, `desired_deadline`, `description`, `reference_links`, `privacy_notice_version`, `consent_at` si aplica, `status`, `assigned_to`, `created_at`, `updated_at`. | Servicio/producto opcionales, responsable en `admin_users`, archivos privados mediante `quote_attachments`. | Siempre privada; estados iniciales propuestos: nueva, en revisión, pendiente de antecedentes, respondida y cerrada. |
| `contact_messages` | Consultas: `id`, `name`, `email`, `subject`, `message`, `privacy_notice_version`, `consent_at` si aplica, `status`, `assigned_to`, `created_at`, `updated_at`. | Responsable opcional en `admin_users`. | Siempre privada; nueva, en revisión, respondida o cerrada. |
| `site_settings` | Configuración pública: `id`, `key`, `value` validado según clave, `updated_at`, `updated_by`; marca, correo comercial, horarios y cobertura. | Último editor en `admin_users`. | Solo claves públicas permitidas; secretos y parámetros internos fuera de esta entidad y de respuestas públicas. |
| `admin_users` | Perfil administrativo: `user_id`, `display_name`, `role`, `is_active`, `created_at`, `updated_at`. | `user_id` vinculado al usuario de Supabase Auth; referencias de asignación y autoría. | Privada; roles `admin`, `editor`, `viewer`. No almacenar contraseñas ni permitir autoasignación de roles. |
| `banners` | Hero y banners: `id`, `page_key`, `placement`, `eyebrow`, `title`, `subtitle`, `image_path`, `image_alt`, `primary_action`, `secondary_action`, campos editoriales comunes. | Ubicación en una página pública existente; servicio opcional. | Solo publicados; validar destinos de enlaces y textos accesibles. |
| `quote_attachments` | Metadatos de referencias: `id`, `quote_request_id`, `storage_path`, `original_name`, `mime_type`, `size_bytes`, `validation_status`, `created_at`. | Solicitud y objeto privado de Storage. | Privada; pendiente, aceptado o rechazado. Nunca almacenar una URL pública permanente. |

Evaluar tablas puente como `product_services`, `offer_products`, `offer_services`, `launch_services` y `gallery_project_services` cuando se confirmen relaciones múltiples. Los campos de enlaces e imágenes deberán mantener metadatos de accesibilidad y validación. La evidencia privada, notas internas y auditoría requieren almacenamiento separado del contenido público; RLS controla filas y no oculta automáticamente columnas sensibles.

## 6. Permisos y seguridad futura

Usar Supabase Auth para autenticar administradores y verificar la sesión y autorización en cada operación del lado servidor. Ocultar enlaces o proteger visualmente una página no sustituye autorización. No habrá registro público de administradores; definir invitación, recuperación, revocación y autenticación multifactor para accesos privilegiados.

| Actor | Contenido público | Edición y publicación | Cotizaciones y mensajes | Usuarios y roles |
| --- | --- | --- | --- | --- |
| Visitante | Leer exclusivamente contenido publicado y vigente. | Sin acceso. | Sin lectura; envío únicamente por un futuro flujo validado. | Sin acceso. |
| `viewer` | Leer contenido editorial dentro del panel. | Sin cambios. | Sin acceso por defecto. | Sin administración. |
| `editor` | Leer contenido editorial. | Crear, editar y publicar contenido autorizado; excluir configuración sensible. | Sin acceso por defecto; definir permiso específico si se necesita. | Sin administración. |
| `admin` | Leer y gestionar contenido. | Gestionar contenido y configuración autorizada. | Revisar y gestionar solicitudes. | Invitar, desactivar y asignar roles. |

Definir políticas RLS para todas las tablas expuestas antes de habilitar cualquier acceso remoto, con denegación por defecto. Verificar lecturas y mutaciones para visitantes, usuarios sin perfil, perfiles inactivos y cada rol. Restringir borradores, solicitudes, mensajes, perfiles y auditoría. Las políticas de roles deben impedir escalamiento de privilegios; solo un flujo privilegiado podrá modificar roles. Revisar también políticas de Storage y operaciones de tablas puente.

Las claves privilegiadas o de servicio solo podrán utilizarse en el servidor y nunca en variables públicas, bundles, registros o repositorio. Una clave publicable no reemplaza RLS. No enviar datos privados al cliente público, HTML prerenderizado, cachés compartidas, analítica ni mensajes de error. Toda validación de formularios deberá repetirse en el servidor: tipos, longitudes, cantidades, enlaces, archivos y autorización. Limitar abuso antes de almacenar datos.

Definir propósito, aviso de privacidad, retención, acceso, eliminación y respaldo de datos personales antes de recibirlos. Registrar acciones administrativas relevantes sin guardar secretos ni copiar el contenido completo de solicitudes en logs. La revisión final de seguridad no posterga estas medidas: se aplican desde la primera fase que exponga datos.

## 7. Rutas futuras sugeridas

Estas rutas son una propuesta y no se crean ni funcionan en este PR.

| Ruta | Función prevista |
| --- | --- |
| `/admin` | Dashboard. |
| `/admin/productos` | Productos. |
| `/admin/categorias` | Categorías. |
| `/admin/servicios` | Servicios. |
| `/admin/ofertas` | Ofertas. |
| `/admin/lanzamientos` | Lanzamientos. |
| `/admin/galeria` | Galería. |
| `/admin/banners` | Banners y hero sections. |
| `/admin/preguntas-frecuentes` | Preguntas y categorías de FAQ. |
| `/admin/cotizaciones` | Solicitudes privadas. |
| `/admin/mensajes` | Mensajes privados. |
| `/admin/configuracion` | Configuración del sitio. |
| `/admin/usuarios` | Usuarios y roles, solo para administradores autorizados. |
| `/admin/login` o `/login` | Acceso con Supabase Auth; elegir una única ruta al diseñar el flujo. |

Las rutas administrativas deberán comprobar sesión y permisos; también sus operaciones y fuentes de datos. Diseñar estados de sesión expirada, acceso denegado y navegación móvil antes de implementarlas.

## 8. Formularios reales futuros

Hoy cotización y contacto siguen siendo vistas visuales o enlaces de correo `mailto`; no guardan solicitudes, suben archivos ni envían notificaciones automáticamente.

En una fase posterior, el formulario de cotización podrá recopilar contacto, servicio, producto opcional, cantidad, medidas, material, plazo, descripción y archivos o links de referencia. El formulario de contacto recopilará datos mínimos de contacto, asunto y mensaje. Validar en el servidor, aplicar límites de frecuencia, protección contra spam y controles adicionales según el abuso observado; validar enlaces sin descargar automáticamente destinos arbitrarios.

Tras aceptar una solicitud, persistirla con identificador y estado inicial, confirmar recepción sin exponer su contenido y notificar al equipo por correo con un resumen mínimo o enlace autenticado. Definir proveedor, remitente, reintentos, límites e idempotencia para evitar duplicados. Un fallo de correo no debe perder la solicitud ni presentarse como pérdida del registro.

El panel permitirá filtrar solicitudes, asignar responsables, revisar adjuntos autorizados y actualizar estados con historial. Definir políticas de conservación y eliminación, aviso de privacidad y consentimiento cuando corresponda. No ofrecer seguimiento público por identificadores adivinables.

## 9. Storage de imágenes y archivos

Evaluar Supabase Storage para imágenes de productos, fotografías reales de galería y archivos de referencia de cotización. Hoy no se configura ningún bucket ni se sube contenido.

- Contenido comercial: bucket público solo para imágenes aprobadas para publicación. Los borradores y originales privados deben permanecer en un bucket privado hasta su aprobación; conocer una URL pública permite acceder al archivo aunque la ficha esté oculta.
- Referencias de cotización: bucket privado, vinculado a una solicitud y accesible únicamente por personal autorizado. Generar URLs firmadas de corta duración tras comprobar permisos; no incluir enlaces permanentes en correos públicos ni registros.
- Validar extensión, tipo real, tamaño y cantidad de archivos del lado servidor. Definir formatos permitidos, cuotas, cuarentena y análisis de archivos según riesgos; no confiar en el nombre ni en el MIME declarado por el navegador.
- Optimizar imágenes, dimensiones, compresión, variantes y textos alternativos; eliminar metadatos sensibles cuando corresponda. Separar originales de derivados y evitar servir archivos activos sin control.
- Definir políticas de lectura, escritura y borrado, rutas no adivinables, limpieza de cargas huérfanas, retención y respaldo de objetos. Un respaldo de la base de datos no sustituye el respaldo de archivos.

## 10. Fases recomendadas de implementación

Estas fases detallan la futura integración y complementan el plan general del proyecto; no son tareas ejecutadas por este cambio.

| Fase | Trabajo futuro | Condición para avanzar |
| --- | --- | --- |
| 1. Configuración Supabase y variables de entorno | Crear entornos separados, definir claves públicas/privadas y configuración de despliegue sin versionar secretos. | Configuración revisada, acceso mínimo y sitio público sin regresiones. |
| 2. Modelo de datos y seeds iniciales | Confirmar entidades, crear migraciones en una tarea posterior, restricciones, RLS y semillas públicas idempotentes. | Integridad y políticas probadas; respaldo y reversión definidos. |
| 3. Lectura pública desde Supabase para catálogo | Migrar categorías y productos mediante una capa de lectura compatible; definir caché e invalidación. | Solo contenido publicado expuesto, comparación con datos locales y fallback controlado. |
| 4. Panel administrador básico | Auth, roles y CRUD de catálogo; luego ofertas, lanzamientos, servicios, banners, FAQ y configuración de forma gradual. | Autorización en cada operación, publicación controlada y flujo de revocación verificado. |
| 5. Formularios reales | Cotización, contacto, revisión privada y correo; adjuntos solo si las políticas de Storage están listas. | Privacidad, validación, spam, duplicados, acceso a archivos y fallos de correo probados. |
| 6. Galería con imágenes reales | Migrar proyectos, medios comerciales y permisos de publicación; completar contenido editorial pendiente. | Imágenes autorizadas, accesibles, optimizadas y separadas de material privado. |
| 7. Seguridad, auditoría y despliegue | Revisar integralmente RLS, roles, storage, registros, costos, backups y recuperación; desplegar gradualmente. | Pruebas de acceso y restauración, lint, build y revisión móvil aprobados antes de producción. |

En cada fase ejecutar `git diff --check`, `npm run lint` y `npm run build`, además de comprobar móvil y los flujos afectados. RLS, autenticación y privacidad son requisitos previos a exponer cada función; la fase 7 consolida su revisión.

## 11. Riesgos y consideraciones

- No migrar todo de una vez: avanzar por módulos con criterios de aceptación y reversión.
- Evitar romper el sitio público: conservar contratos, rutas, enlaces, orden y mensajes comerciales; revisar caché para no mantener contenido retirado.
- Revisar RLS antes de producción y antes de cualquier exposición de datos; probar también roles revocados, borradores y Storage.
- Mantener backups de datos y archivos, y probar restauración antes de confiar en ellos.
- Validar costos y límites de Supabase: base de datos, Auth, Storage, transferencia, backups y disponibilidad del plan elegido; considerar también correo y hosting.
- Evitar exposición de información privada en respuestas, URLs, cachés, logs, backups o buckets públicos.
- Los ejemplos locales y precios son referenciales: revisar contenido y permisos de imágenes antes de publicarlos como información real.
- Probar mobile y build en cada fase, junto con accesibilidad y estados de carga, error y ausencia de datos cuando se incorporen lecturas remotas.
- Definir responsable operativo, retención y mantenimiento. Confirmar los requisitos de protección de datos aplicables en Chile antes de recibir información personal.

## 12. Checklist antes de implementar

- [ ] Tener cuenta Supabase y responsables definidos para proyecto, facturación y recuperación.
- [ ] Definir entornos de desarrollo y producción y variables públicas/privadas, sin versionar secretos.
- [ ] Confirmar entidades finales, tipos, relaciones, taxonomía e identificadores estables.
- [ ] Revisar los datos simulados y acordar semillas, orden de migración, fallback y reversión.
- [ ] Definir roles, invitaciones, recuperación, revocación y permisos por operación.
- [ ] Diseñar rutas admin, login y estados de acceso, incluyendo navegación móvil.
- [ ] Diseñar y probar RLS para tablas, relaciones y Storage antes de exponerlos.
- [ ] Confirmar si se usará Storage, sus buckets públicos/privados, formatos, límites y retención.
- [ ] Confirmar autorización de imágenes y separación de borradores y referencias privadas.
- [ ] Confirmar flujo de correo, proveedor, remitente, reintentos y manejo de fallos.
- [ ] Confirmar privacidad de formularios, minimización, avisos, consentimiento aplicable y eliminación.
- [ ] Definir validación del servidor, controles de spam y permisos sobre solicitudes y adjuntos.
- [ ] Confirmar estrategia de despliegue, caché, monitoreo y presupuesto.
- [ ] Definir backups, restauración, auditoría y responsables de mantenimiento.
- [ ] Acordar criterios de aceptación y comprobaciones de lint, build, móvil y seguridad por fase.

Esta documentación deja preparado el camino para continuar con el Prompt 014. El contenido de ese prompt debe revisarse al recibirlo; este plan no autoriza ni anticipa su implementación.
