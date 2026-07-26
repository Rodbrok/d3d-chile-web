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

El proyecto base está configurado con Next.js, App Router, TypeScript, Tailwind CSS y ESLint. La estructura inicial y la documentación están preparadas para comenzar el desarrollo incremental.

En esta etapa no hay base de datos, autenticación, panel de administración, comercio electrónico, pagos ni integración con Supabase. La página de inicio conserva el diseño inicial de `create-next-app`.

La planificación funcional se encuentra en [docs/plan-proyecto.md](docs/plan-proyecto.md) y las normas de colaboración en [docs/reglas-desarrollo.md](docs/reglas-desarrollo.md).

## Seguridad

- No subir claves, tokens, contraseñas, credenciales ni secretos al repositorio.
- No versionar archivos `.env` ni variantes como `.env.local` o `.env.production`.
- Mantener la regla `.env*` de `.gitignore` y verificar los cambios antes de cada commit.
- Usar variables de entorno locales para cualquier dato sensible cuando se incorporen integraciones.
- Revocar y reemplazar inmediatamente cualquier secreto expuesto por error; eliminarlo del último commit no basta si ya fue compartido.

## Flujo de trabajo

Los cambios deben ser pequeños, documentados, validados y fáciles de revisar. Antes de considerar terminado un cambio, ejecutar `npm run lint` y `npm run build`. Consultar [docs/reglas-desarrollo.md](docs/reglas-desarrollo.md) para las reglas completas.
