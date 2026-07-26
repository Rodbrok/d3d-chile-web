# Reglas de desarrollo

## Principios de trabajo

- La rama `main` debe mantenerse estable y en condiciones de compilar.
- Cada cambio debe desarrollarse en una rama separada, con un propósito claro.
- No mezclar múltiples tareas independientes en un solo cambio o pull request.
- Preferir cambios pequeños, documentados y fáciles de revisar.
- No usar emoticones en código, contenido, documentación, commits ni comentarios.
- No instalar dependencias sin justificar su necesidad y revisar su mantenimiento y seguridad.
- No incorporar funcionalidades futuras antes de definir alcance y criterios de aceptación.

## Seguridad

- No subir claves, tokens, contraseñas, archivos `.env` ni ninguna credencial.
- Revisar `git diff` y `git status` antes de crear cada commit.
- Usar variables de entorno para secretos cuando existan integraciones, sin exponerlas al cliente.
- Evitar datos personales o de clientes en pruebas, ejemplos, registros y documentación.
- Usar únicamente recursos propios, autorizados o con licencias compatibles y documentadas.

## Calidad y validación

Antes de considerar terminado un cambio:

1. Revisar que el alcance corresponda a una sola tarea.
2. Ejecutar `npm run lint` y resolver los errores.
3. Ejecutar `npm run build` y comprobar la compilación de producción.
4. Revisar manualmente el comportamiento afectado cuando corresponda.
5. Confirmar que no se agregaron secretos, archivos generados o dependencias innecesarias.
6. Documentar las decisiones y cambios importantes.

Si una validación no puede ejecutarse por una limitación del entorno, debe quedar declarada explícitamente en la entrega y no presentarse como aprobada.

## Organización del código

- Mantener rutas y layouts en `src/app` conforme a las convenciones del App Router.
- Reservar `src/components/ui` para piezas visuales reutilizables y `src/components/layout` para estructura compartida.
- Agrupar lógica de negocio por dominio en `src/features`.
- Usar `src/lib` para utilidades y configuraciones compartidas que no pertenecen a una funcionalidad concreta.
- Mantener contenido estático en `src/data` y tipos compartidos en `src/types`.
- Usar `src/styles` solo para estilos adicionales que no correspondan a los estilos globales o a clases locales del componente.
- Evitar abstracciones anticipadas: extraer componentes y utilidades cuando exista una responsabilidad clara.
- Mantener TypeScript estricto y usar el alias `@/*` para importaciones desde `src` cuando mejore la legibilidad.

## Commits y revisión

- Escribir mensajes de commit breves, descriptivos y sin emoticones.
- Explicar en el pull request qué cambió, cómo se validó y qué queda pendiente.
- Separar correcciones no relacionadas en cambios posteriores.
- No integrar un cambio si falla lint o build, salvo que la causa externa esté identificada, documentada y aceptada.
