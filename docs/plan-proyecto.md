# Plan del proyecto D3D Chile

## Objetivo del sitio

Construir una presencia web comercial profesional, clara y fácil de mantener para D3D Chile. El sitio presentará los servicios de fabricación, permitirá explorar productos y trabajos, comunicará novedades y facilitará que cada cliente solicite una cotización con la información necesaria.

La implementación avanzará por etapas para que una sola persona pueda mantener el contenido y revisar cambios acotados sin aumentar innecesariamente la complejidad técnica.

## Público objetivo

- Personas que necesitan piezas personalizadas, prototipos, repuestos, regalos o artículos decorativos mediante impresión 3D.
- Emprendimientos y pequeñas empresas que requieren series cortas, material promocional, señalética o soluciones a medida.
- Clientes que buscan corte o grabado láser para madera, acrílico y otros materiales compatibles.
- Diseñadores, estudiantes y profesionales que necesitan convertir una idea o archivo digital en un producto físico.
- Visitantes que desean comprar productos disponibles o conocer ofertas y lanzamientos.

## Secciones principales

### Inicio

Presentación de la marca, propuesta de valor, servicios destacados, trabajos recientes y accesos claros a catálogo, cotización y contacto.

### Impresión 3D

Descripción del servicio, materiales y terminaciones disponibles, ejemplos de uso, requisitos de archivos y proceso de solicitud.

### Corte y grabado láser

Información sobre corte y grabado, materiales admitidos, aplicaciones habituales, restricciones y preparación de archivos.

### Catálogo

Listado organizado de productos con categorías, información relevante y una forma clara de consultar o solicitar cada producto. La primera versión puede trabajar con datos locales.

### Ofertas

Promociones vigentes, condiciones, fechas y productos o servicios incluidos.

### Cotizar

Formulario guiado para recopilar datos de contacto, servicio requerido, medidas, cantidad, material, plazo, observaciones y archivos cuando esa capacidad sea incorporada.

### Contacto

Canales oficiales, horarios de atención, zona de cobertura y datos necesarios para iniciar una conversación.

## Futuras secciones de administración

Estas secciones pertenecen a una fase posterior. No se implementarán hasta definir autenticación, permisos, persistencia y alcance operativo.

- **Productos:** crear, editar, publicar y ordenar artículos del catálogo.
- **Categorías:** organizar productos y servicios mediante clasificaciones mantenibles.
- **Servicios:** administrar descripciones, capacidades, materiales y condiciones.
- **Ofertas:** programar promociones y controlar su vigencia.
- **Lanzamientos:** preparar novedades y nuevos productos destacados.
- **Galería:** gestionar imágenes y referencias de trabajos autorizados.
- **Cotizaciones:** revisar solicitudes, estados y antecedentes enviados por clientes.
- **Configuración del sitio:** mantener datos de contacto, textos globales y parámetros operativos.

## Fases futuras

### Fase 1: Fundaciones y contenido

- Definir arquitectura de información, navegación y contenido base.
- Establecer identidad visual, componentes reutilizables y criterios de accesibilidad.
- Implementar las páginas públicas prioritarias con contenido local.

### Fase 2: Catálogo y captación

- Incorporar catálogo navegable, categorías, ofertas y lanzamientos.
- Implementar cotización y contacto con validaciones, estados de envío y protección contra abuso.
- Definir analítica respetuosa de la privacidad y métricas de conversión.

### Fase 3: Persistencia e integraciones

- Evaluar la fuente de datos y el almacenamiento de archivos según necesidades reales.
- Diseñar el modelo de datos, migraciones, respaldos y políticas de acceso.
- Integrar notificaciones y servicios externos solo después de revisar seguridad, costo y mantenimiento.

### Fase 4: Administración

- Incorporar autenticación y autorización con roles mínimos necesarios.
- Construir las secciones administrativas priorizadas y un flujo de publicación seguro.
- Registrar acciones críticas y establecer recuperación ante errores.

### Fase 5: Comercio electrónico, si se justifica

- Validar primero requisitos tributarios, inventario, despacho, devoluciones y soporte.
- Evaluar pagos y pedidos como una iniciativa separada.
- Implementar controles de seguridad, conciliación y monitoreo antes de operar.

## Fuera del alcance actual

La etapa inicial no incluye base de datos, autenticación, administración, comercio electrónico, pagos ni Supabase. Tampoco se incorporarán imágenes externas sin autorización o una licencia compatible.
