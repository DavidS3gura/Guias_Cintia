# Contexto del Proyecto: CINTIA Web OVAs

## Descripción general

**CINTIA Web OVAs** es un repositorio de materiales educativos interactivos en formato web para estudiantes de una institución técnica. Cada OVA es una página HTML autocontenida que aborda un tema específico (puede ser de cualquier área: programación, matemáticas, ciencias, humanidades, etc.) combinando conceptos clave, elementos visuales interactivos y actividades prácticas, organizados por semestre y unidad temática.

## Audiencia objetivo

Los OVAs están diseñados para **jóvenes de último año de bachillerato**. Por esto:

- Se debe usar un **lenguaje cercano, motivador y emocional**, evitando tecnicismos innecesarios sin importar el área temática.
- Es obligatorio usar **emojis** de forma estratégica para captar la atención y hacer la lectura más dinámica y entretenida.
- El tono debe sentirse como un amigo que explica, no como un libro de texto.
- El vocabulario y los ejemplos deben ser **contextualizados a situaciones cotidianas** que el estudiante pueda reconocer fácilmente, independientemente de la materia.

## Filosofía de diseño del contenido

Los OVAs son **guías prácticas**, NO libros de teoría. Esto significa:

- Usar la **menor cantidad de texto posible**, sin importar la materia.
- El texto extenso solo está justificado cuando se trata de la **definición o fundamentación de un concepto**.
- Priorizar siempre: ejemplos visuales, elementos interactivos, actividades con clicks, tablas, comparaciones rápidas y simulaciones.
- El estudiante debe **hacer** más de lo que lee: responder, arrastrar, seleccionar, ejecutar, calcular, explorar.
- **Más clicks, menos lectura**: cada sección debe invitar al usuario a interactuar antes de explicar.

## Relación con la guía de aprendizaje del curso (mapeo de secciones — regla obligatoria)

El OVA se construye a partir de la guía de aprendizaje del curso. Cada sección del OVA tiene una relación **definida y fija** con la guía. Respetar este mapeo es obligatorio:

- **Introducción, Objetivos, Actividades, Recursos y Bibliografía → SE MANTIENEN.** Estas cinco secciones reflejan el contenido de la guía de aprendizaje: los mismos objetivos, las mismas actividades, los mismos recursos/anexos y la misma bibliografía. Se adaptan al formato web interactivo (emojis, estilo visual, gamificación en las actividades), pero su **sustancia es la misma que la de la guía**. No se inventan objetivos, actividades ni recursos distintos a los de la guía.
- **Contenido → ES EL ÚNICO APARTADO QUE PUEDE (Y DEBE) CONTENER INFORMACIÓN DIFERENTE Y COMPLEMENTARIA** a la guía. Aquí es donde el OVA aporta valor adicional: ángulos, ejemplos, datos, contexto histórico, cifras, casos o profundizaciones que amplían el tema **sin repetir literalmente el "Desarrollo del contenido" de la guía**. Es la sección interactiva central del OVA.
- **Evaluación → ES COMPLETAMENTE NUEVA.** La guía de aprendizaje no incluye evaluación (quiz). La IA la construye desde cero, con mínimo 5 preguntas de selección múltiple de dificultad progresiva, cubriendo tanto los conceptos del tema como el contenido complementario del OVA.

**Regla de tono (obligatoria):** el OVA **nunca debe hacer referencia a la guía de aprendizaje ni comentar la relación entre ambos recursos.** Están prohibidas frases como "lo que tu guía no te contó", "a diferencia de la guía", "esto complementa tu guía", "estas actividades son distintas a las de tu guía", etc. El estudiante no necesita saber cómo se construyó el material: vive el OVA como un recurso completo y natural por sí mismo.

## Estructura de cada OVA

Cada OVA sigue una estructura consistente:

- **Sidebar de navegación** (desktop) con logo circular (150×150px con borde verde) y enlaces por sección.
- **Menú desplegable** (mobile) con logo reducido.
- **Secciones estándar**: Introducción, Objetivos, Contenido, Actividades, Evaluación, Recursos, Bibliografía.
- **Elementos interactivos** según la materia: consolas de código, simuladores, cuestionarios, arrastrar y soltar, calculadoras, etc.
- **Acordeones** para organizar el contenido y evitar muros de texto.
- **Actividades prácticas** que requieren interacción del usuario en cada sección.

## Tecnologías usadas

- **HTML + TailwindCSS** (via CDN) para layout y estilos.
- **JavaScript vanilla** para interactividad (simuladores, acordeones, navegación, cuestionarios, etc.).
- **Google Fonts (Poppins)** para tipografía.
- Imágenes en formato `.webp`.

## Reglas para interactividad (OVAs de programación)

Cuando el OVA incluye playgrounds de código JavaScript/React:

1. **NO usar JSX directamente** en playgrounds, ya que causa errores de sintaxis.
2. Simular conceptos de React con **JavaScript puro válido**.
3. Mostrar JSX como **strings con template literals**.
4. Garantizar que el código **se ejecute sin errores** cuando el estudiante presione "Ejecutar".

Para otras materias, los elementos interactivos deben igualmente funcionar sin errores y dar retroalimentación inmediata al estudiante.

## Estructura del repositorio

```
cintia-web-ovas/
├── assets/                      # Recursos compartidos por TODOS los OVAs (no duplicar)
│   ├── ova-base.css             # Estilos base: layout, sidebar, acordeones, quiz
│   └── ova-core.js              # Navegación, acordeones y motor del quiz
├── template/                    # Plantilla vacía lista para usar como punto de partida
│   └── index.html
├── semestre_1/
└── semestre_2/
    └── tecnico/
        ├── backend/
        │   ├── unidad_1/        # Introducción al backend
        │   ├── unidad_2/        # Node.js, Express, CRUD con base de datos
        │   └── Unidad_3/        # React: visualización, interacción, consumo de APIs
        └── base_de_datos/       # OVA de bases de datos
```

## OVA de referencia visual

El OVA **`introduccion-nodejs`** (`semestre_2/tecnico/backend/unidad_2/introduccion-nodejs/`) es el estándar de referencia para estilos, estructura y comportamiento. Cualquier inconsistencia visual o de layout en otros OVAs debe corregirse tomando este OVA como modelo, independientemente de la materia.

## Reglas para crear nuevos OVAs

Al crear un nuevo OVA se deben seguir estas reglas **sin excepción**:

### Lo que NO se puede modificar

- **Estructura base**: el layout (sidebar + contenido principal + mobile header) no se toca.
- **Estilos y diseño**: los colores, tipografía (Poppins), espaciados, clases de TailwindCSS estructurales y el esquema visual general deben mantenerse idénticos.
- **Logo**: el logo circular (150×150px, borde verde `border-2 border-green-500`) en el sidebar desktop no se modifica en posición, tamaño ni estilo.
- **Iconos y elementos estructurales**: los iconos de navegación del menú lateral y mobile no se cambian.
- **Secciones estándar**: las secciones (Introducción, Objetivos, Contenido, Actividades, Evaluación, Recursos, Bibliografía) deben estar presentes siempre.
- **Créditos a CINTIA**: son **obligatorios** en cada OVA generado y no se deben eliminar ni modificar.

### Sección de Recursos (estructura intocable)

La sección de **Recursos** tiene una estructura fija que **no se puede modificar**. Solo se reemplazan los datos (nombre, descripción, enlace, imagen del QR) de cada ítem. La estructura HTML de cada recurso es siempre:

```html
<li class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500 flex flex-col sm:flex-row sm:items-center justify-between">
    <div>
        <h3 class="font-bold text-green-700">[Nombre del recurso]</h3>
        <p class="text-slate-600 mb-2">[Descripción breve]</p>
        <a href="[URL]" target="_blank" class="underline text-slate-700 hover:text-green-700">Ir al recurso</a>
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
        <div class="bg-green-50 border border-green-300 rounded flex items-center justify-center" style="width:2cm;height:2cm;">
            <img src="img/[nombre-qr].png" alt="QR [Nombre del recurso]" class="max-w-full max-h-full object-contain" loading="lazy">
        </div>
    </div>
</li>
```

Cada recurso debe tener: **nombre**, **descripción**, **enlace** e **imagen QR** en `img/`. No se cambian clases, estilos ni la disposición del layout.

### Lo que SÍ se puede (y debe) personalizar

- **Sección de Contenido**: libre para adaptarse al tema, usando elementos interactivos, simuladores, tablas, acordeones, etc.
- **Sección de Actividades**: libre para diseñar las actividades prácticas propias de la materia.

### Gamificación (obligatoria en Contenido y Actividades)

Las secciones de **Contenido** y **Actividades** deben aplicar estrategias de gamificación para mantener la motivación y el engagement del estudiante. Esto es **obligatorio**, no opcional. Estrategias a usar:

- **Sistema de puntos o estrellas**: el estudiante acumula puntos al responder correctamente o completar tareas. Mostrar el puntaje en pantalla en tiempo real.
- **Retroalimentación inmediata con refuerzo positivo**: mensajes de celebración ("¡Excelente! 🎉", "¡Lo lograste! ⭐") o de aliento cuando falla ("¡Casi! Inténtalo de nuevo 💪").
- **Niveles o progreso visible**: indicador de progreso (barra, porcentaje, etapas) que muestre al estudiante cuánto ha avanzado.
- **Retos y mini-misiones**: enmarcar las actividades como misiones o retos ("Misión 1: Descifra el concepto", "Reto final: Demuestra lo que sabes").
- **Revelación progresiva**: el contenido se desbloquea conforme el estudiante completa pasos anteriores, generando curiosidad.
- **Temporizador opcional**: para actividades de evaluación o retos, agregar un contador de tiempo para aumentar la adrenalina.
- **Tabla de logros o insignias**: al completar secciones, mostrar una insignia o mensaje de logro desbloqueado.

Cada acordeón de contenido debe tener al menos **una mecánica de gamificación** integrada. Las actividades deben sentirse como **misiones**, no como tareas.

> ⚠️ **Límite obligatorio**: toda mecánica de gamificación debe estar **contenida dentro de la sección Contenido o Actividades**. Ninguna estrategia de gamificación puede modificar el layout global del OVA. Esto significa:
> - **NO** agregar barras de progreso globales fuera de una sección.
> - **NO** mostrar puntajes flotantes, overlays, ni elementos fijos (`position: fixed`) relacionados con gamificación.
> - **NO** modificar el sidebar, el header mobile ni el footer.
> - Los contadores de puntos, barras de progreso e insignias solo existen **dentro del bloque de contenido o actividad** donde aplican.

### Recursos externos multimedia (videos, simuladores, etc.)

Cuando el contenido de un acordeón se beneficiaría de un video, simulador u otro recurso externo, la IA **debe** insertar una card de recurso externo en ese lugar. **Nunca** incrustar un `<iframe>` de YouTube ni inventar URLs.

Reglas de implementación:

1. **Cada card tiene un `id` único** e incremental: `recurso-ext-1`, `recurso-ext-2`, etc. Si el OVA tiene varios recursos externos, cada uno lleva su propio id.
2. **El botón nace desactivado** (`href="#"`, con clases `opacity-50 cursor-not-allowed`) hasta que el docente lo active con la IA.
3. **La card muestra un mensaje ejemplo** para que el docente sepa qué decirle al agente de IA en el chat. El mensaje incluye el `id` del recurso para que el agente sepa exactamente qué actualizar. El docente no edita código.
4. **La card usa la paleta verde del OVA** (`bg-green-50`, `border-green-300`), no colores ajenos.
5. **La IA incluye en el comentario HTML** encima de cada card: el tema y los términos de búsqueda sugeridos.

El docente nunca toca el código. Su flujo es: buscar el recurso → leer el mensaje de la card → decirle al agente de IA en el chat: *"Encontré un recurso para el recurso-ext-1 del OVA. Actualízalo con esta URL: [URL] y ponle el título: [título]."* → el agente edita el archivo directamente.

Este flujo asume que el docente trabaja con un **editor con agente integrado** (como Windsurf, Cursor, GitHub Copilot, etc.). No requiere copiar ni pegar código HTML.

### Plugin de accesibilidad (obligatorio)

Todo OVA generado debe incluir el siguiente script **antes del cierre de `</body>`**:

```html
<script src="https://elens.ecodestudio.dev/elens.js"></script>
```

Este plugin no se debe omitir, modificar ni mover de posición.

> ⚠️ El plugin de accesibilidad ya incluye un componente de lectura en voz alta. Por esto, **NO se deben agregar controles de voz propios** (`speech-controls`, botones Leer/Pausar/Detener, ni el script de `SpeechSynthesis`) en los nuevos OVAs. La plantilla `template/index.html` ya refleja esto.

### Recursos compartidos (`assets/`) — NO duplicar

Los estilos base y la lógica común de los OVAs viven **una sola vez** en la carpeta `assets/` de la raíz:

- **`assets/ova-base.css`**: estilos base (layout, sidebar, header mobile, acordeones, quiz). Reemplaza el antiguo bloque `<style>` "ESTILOS BASE — NO MODIFICAR".
- **`assets/ova-core.js`**: navegación (sidebar + mobile), acordeones y motor del quiz. Reemplaza los scripts de navegación y de renderizado del quiz.

Reglas:

1. **Nunca** copies estos estilos ni scripts dentro del `index.html`. Cada OVA solo los **referencia**:
   - `<link rel="stylesheet" href="[ruta]/assets/ova-base.css">` en el `<head>`.
   - `<script src="[ruta]/assets/ova-core.js"></script>` al final del `<body>`, **después** del `<script>` que define `quizData` y **antes** del plugin de accesibilidad.
2. `[ruta]` es la ruta relativa hacia la raíz según la profundidad del OVA. Ejemplos: `template/` usa `../assets/…`; un OVA en `p_tecnico/semestre_3/backend_2/unidad_1/tema_1/` usa `../../../../../assets/…`. Ajusta la cantidad de `../` según cuántas carpetas lo separen de la raíz.
3. El quiz se alimenta de la variable global `quizData` (arreglo de `{ question, options, correct }`) que cada OVA define en un `<script>` propio antes de cargar `ova-core.js`. El renderizado, la selección y la calificación los maneja `ova-core.js`.
4. Los estilos y scripts **propios** de cada OVA (badges, tarjetas, simuladores, drag & drop, etc.) sí van dentro del `index.html`, en el bloque `<style>` "ESTILOS PERSONALIZADOS" y en el `<script>` "SCRIPTS DE ACTIVIDADES INTERACTIVAS".

### Proceso para crear un nuevo OVA

1. Tomar como base la carpeta **`template/`** del repositorio (`template/index.html`), que es la plantilla vacía oficial con toda la estructura base lista.
2. Copiar la carpeta `template/` y renombrarla según el nuevo tema (ej: `semestre_1/tecnico/matematicas/trigonometria/`).
3. Ajustar la ruta relativa de `assets/ova-base.css` y `assets/ova-core.js` según la profundidad de la nueva carpeta (ver "Recursos compartidos").
4. Reemplazar únicamente el contenido de las secciones **Contenido** y **Actividades**, siguiendo las reglas de gamificación obligatorias.
5. Verificar que el logo, créditos, navegación y estilos globales permanezcan intactos.
6. Ajustar los textos de navegación (nombres de secciones en el menú) solo si el tema lo requiere, sin alterar el estilo visual.
