# 📚 CINTIA Web OVAs

Repositorio de **Objetos Virtuales de Aprendizaje (OVAs)** interactivos en formato web, desarrollados para estudiantes de último año de bachillerato de los programas de formación (técnico, tecnológico y afines).

Cada OVA es una página HTML autocontenida con elementos visuales, actividades prácticas gamificadas e interactividad sin depender de frameworks externos.

---

## 📁 Estructura del repositorio

En la raíz hay elementos fijos y, junto a ellos, las carpetas de OVAs organizadas por una **convención de nombres**:

```
cintia-web-ovas/
├── README.md               ← Estás aquí
├── context.md              ← Instrucciones para la IA (léelas antes de crear un OVA)
├── PROMPT_GUIDE.md         ← Guía paso a paso para crear OVAs con IA
├── assets/                 ← Recursos compartidos por todos los OVAs (NO duplicar)
│   ├── ova-base.css        ← Estilos base (layout, sidebar, acordeones, quiz)
│   └── ova-core.js         ← Navegación, acordeones y motor del quiz
├── template/               ← Plantilla vacía oficial — punto de partida para nuevos OVAs
│   ├── index.html
│   └── img/
│       └── logo.webp       ← Logo compartido por todos los OVAs
└── semestre_<N>/                    ← Una carpeta por semestre (semestre_1, semestre_2, …)
    └── <programa>/                  ← Programa académico (p. ej. tecnico, tecnologia)
        └── <curso-o-area>/          ← Curso o área (p. ej. matematicas, backend)
            └── [unidad_<N>/]        ← Opcional: agrupa los OVAs de un curso por unidad
                └── <tema-del-ova>/  ← Un OVA por carpeta
                    ├── index.html
                    └── img/         ← Logo + imágenes QR de los recursos del OVA
```

> 🔁 **El repositorio crece agregando carpetas que sigan esta convención.** No hace falta actualizar este README al añadir un nuevo semestre, programa, curso o OVA: basta con respetar el patrón de nombres anterior.

> 📦 **Recursos compartidos (`assets/`):** los estilos base y la lógica común (navegación, acordeones y quiz) viven **una sola vez** en `assets/ova-base.css` y `assets/ova-core.js`. Cada `index.html` los referencia con una ruta relativa hacia la raíz según su profundidad. Ejemplos:
> - `template/index.html` → `../assets/…`
> - `p_tecnico/semestre_3/backend_2/unidad_1/tema_1/index.html` → `../../../../../assets/…`
>
> Al crear un OVA nuevo, ajusta la cantidad de `../` según cuántas carpetas lo separen de la raíz. **No copies estos estilos ni scripts dentro del `index.html`.**

---

## 🚀 ¿Cómo crear un nuevo OVA con IA?

### Paso 1 — Prepara tu carpeta

1. Copia la carpeta `template/` completa (ya incluye `img/logo.webp`) y renómbrala con el tema del OVA.  
   Ejemplo: `semestre_1/tecnico/matematicas/trigonometria/`
2. Agrega las imágenes QR de los recursos en `img/` (una por cada recurso de la sección Recursos).

### Paso 2 — Prepara tu guía de aprendizaje

Si ya tienes tu guía escrita en **Word**, conviértela a Markdown usando una de estas páginas:

- 🔗 https://word2md.com/
- 🔗 https://www.word2md.net/es

> ⚠️ Estas páginas entregan dos cosas: el **texto en Markdown** y una **vista previa**. Usa solo el texto Markdown (el código), no la vista previa visual.

Si no tienes Word, escribe tu guía directamente en Markdown con las secciones del OVA: Introducción, Objetivos, Contenido, Actividades, Recursos y Bibliografía.

> 💡 No necesita ser perfecta — un esquema con los puntos clave es suficiente. La IA enriquecerá el contenido con información de internet.

### Paso 3 — Dale el contexto a la IA

Si usas un **editor con agente integrado** (Windsurf, Cursor, Copilot, etc.), dile al agente:
```
Lee el archivo context.md que está en la raíz del repositorio y memoriza sus reglas.
```

Si usas un modelo web sin acceso a archivos (ChatGPT, Gemini, Claude web), copia y pega el contenido de `context.md` directamente en el chat.

### Paso 4 — Genera el OVA

Usa la plantilla de prompt del archivo [`PROMPT_GUIDE.md`](./PROMPT_GUIDE.md), pega tu guía de aprendizaje en el bloque indicado y envíalo. La IA generará el OVA completo.

### Paso 5 — Activa los recursos externos

El OVA generado tendrá **cards verdes** donde la IA sugiere videos o recursos externos. Para activarlas, busca el recurso y dile al agente en el chat:
```
Encontré un recurso para el recurso-ext-1. URL: [url] Título: [título]
```
El agente edita el archivo directamente — sin tocar código.

---

## ✅ OVA de referencia visual

El OVA **`introduccion-nodejs`** es el estándar de referencia para estilos y estructura:

```
semestre_2/tecnico/backend/unidad_2/introduccion-nodejs/index.html
```

Ante cualquier duda de cómo debe verse algo, consulta ese archivo.

---

## ⚠️ Reglas importantes

- **Mapeo de secciones con la guía de aprendizaje** (ver "Relación con la guía de aprendizaje" en `context.md`): Introducción, Objetivos, Actividades, Recursos y Bibliografía **se mantienen** desde la guía; **Contenido** es el único apartado que puede llevar información distinta/complementaria; **Evaluación** es completamente nueva (la guía no la tiene). El OVA **nunca menciona la guía** ni compara ambos recursos.
- **No modificar** el layout base (sidebar, mobile header, footer de créditos).
- **Gamificación obligatoria** en Contenido y Actividades: puntos, misiones, insignias, progreso visible — siempre **contenida dentro de la sección donde aplica**. Ningún elemento de gamificación puede salir a modificar el layout global (sin barras flotantes, sin `position: fixed`, sin tocar sidebar ni footer).
- **No incrustar iframes** de YouTube ni inventar URLs — usar las cards de recurso externo.
- **No agregar controles de voz propios** — el plugin de accesibilidad ya los incluye.
- **No omitir** el plugin de accesibilidad al final del `<body>`:  
  `<script src="https://elens.ecodestudio.dev/elens.js"></script>`
- **Siempre incluir** las 7 secciones: Introducción, Objetivos, Contenido, Actividades, Evaluación, Recursos, Bibliografía.
- Cada recurso debe tener su imagen QR en `img/`.

---

## 👥 Créditos

**Centro de Innovación en TIC para el apoyo de la Docencia — CINTIA**  
Universidad de Córdoba
