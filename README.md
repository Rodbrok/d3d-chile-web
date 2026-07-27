# D3D Chile

Sitio web comercial de D3D Chile para presentar servicios de impresión 3D, corte y grabado láser, exhibir el catálogo y facilitar solicitudes de cotización y contacto.

## Stack

- Next.js 16 con App Router
- React 19
- TypeScript en modo estricto
- Tailwind CSS 4
- ESLint 9 con las reglas recomendadas de Next.js y TypeScript
- npm para la gestión de dependencias y comandos

## Requisitos locales

- Node.js 20.9 o superior
- npm, incluido con Node.js
- Git

## Instalación y uso

Instalar las dependencias declaradas en `package-lock.json`:

```bash
npm install
```

Iniciar el entorno de desarrollo en `http://localhost:3000`:

```bash
npm run dev
```

Validar el código con ESLint:

```bash
npm run lint
```

Generar la compilación de producción:

```bash
npm run build
```

Ejecutar localmente una compilación ya generada:

```bash
npm run start
```

## Estructura inicial

```text
docs/                   Documentación funcional y reglas de trabajo
public/                 Archivos estáticos públicos
src/
  app/                  Rutas, layouts y estilos globales del App Router
  components/
    layout/             Componentes de estructura compartida
    ui/                 Componentes visuales reutilizables
  data/                 Contenido estático y datos locales
  features/             Funcionalidades organizadas por dominio
  lib/                  Utilidades y configuraciones compartidas
  styles/               Estilos adicionales organizados por alcance
  types/                Tipos TypeScript compartidos
```

Las carpetas vacías incluyen un archivo `.gitkeep` temporal para conservar la estructura en Git. Debe eliminarse al incorporar el primer archivo real en cada carpeta.

## Estado actual

El proyecto cuenta con una identidad visual inicial, layout público, navegación responsive y componentes reutilizables. La portada incluye presentación comercial, servicios, trabajos destacados simulados, proceso de atención, beneficios y llamados a cotizar. Las rutas `/impresion-3d` y `/laser` presentan aplicaciones, materiales, ejemplos simulados, referencias comerciales, proceso y preguntas frecuentes de cada servicio. La ruta `/catalogo` reúne categorías y productos simulados con valores referenciales. La ruta `/cotizar` orienta al cliente, detalla los antecedentes necesarios e incluye una vista previa no funcional del futuro formulario. Los textos de marca, contacto, navegación y contenido de las páginas se administran desde `src/data`, mientras que las piezas de interfaz se organizan en `src/components`.

En esta etapa no hay base de datos, autenticación, panel de administración, comercio electrónico, pagos ni integración con Supabase. Los enlaces de secciones futuras están preparados como anclas internas hasta que se creen sus rutas.

La planificación funcional se encuentra en [docs/plan-proyecto.md](docs/plan-proyecto.md) y las normas de colaboración en [docs/reglas-desarrollo.md](docs/reglas-desarrollo.md).

## Seguridad

- No subir claves, tokens, contraseñas, credenciales ni secretos al repositorio.
- No versionar archivos `.env` ni variantes como `.env.local` o `.env.production`.
- Mantener la regla `.env*` de `.gitignore` y verificar los cambios antes de cada commit.
- Usar variables de entorno locales para cualquier dato sensible cuando se incorporen integraciones.
- Revocar y reemplazar inmediatamente cualquier secreto expuesto por error; eliminarlo del último commit no basta si ya fue compartido.

## Flujo de trabajo

Los cambios deben ser pequeños, documentados, validados y fáciles de revisar. Antes de considerar terminado un cambio, ejecutar `npm run lint` y `npm run build`. Consultar [docs/reglas-desarrollo.md](docs/reglas-desarrollo.md) para las reglas completas.
