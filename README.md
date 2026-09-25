# 📚 CINTIA Web OVAs

Repositorio de **Objetos Virtuales de Aprendizaje (OVAs)** interactivos en formato web, desarrollados para estudiantes de último año de bachillerato de los programas de formación (técnico, tecnológico y afines).

Cada OVA es una página HTML autocontenida con elementos visuales, actividades prácticas gamificadas e interactividad sin depender de frameworks externos.

> 🏛️ Este repositorio sigue las mismas reglas del **repositorio institucional de OVAs** (`uentucolegio/web-ovas`): misma estructura de carpetas, mismo Tailwind local y mismo validador. Así, cualquier OVA creado aquí se puede migrar allá sin cambios.

---

## 📁 Estructura del repositorio

Cada OVA vive en una ruta de **exactamente 5 niveles** con nombres en minúsculas-con-guiones:

```
Guias_Cintia/
├── README.md               ← Estás aquí
├── context.md              ← Instrucciones para la IA (léelas antes de crear un OVA)
├── PROMPT_GUIDE.md         ← Guía paso a paso para crear OVAs con IA
├── 404.html                ← Redirige las rutas antiguas de OVAs a las nuevas (GitHub Pages)
├── scripts/
│   └── validar-ova.mjs     ← Validador automático de reglas (el mismo del repo institucional)
├── _template/              ← Plantilla vacía oficial — punto de partida para nuevos OVAs
│   ├── index.html
│   ├── tailwind.css
│   └── img/
│       └── logo.webp       ← Logo compartido por todos los OVAs
└── <programa>/                      ← tecnico o tecnologo
    └── semestre-<N>/                ← p. ej. semestre-3
        └── <materia>/               ← slug, p. ej. backend-2
            └── unidad-<N>/          ← p. ej. unidad-1
                └── <tema-del-ova>/  ← un OVA por carpeta, slug descriptivo
                    ├── index.html
                    ├── tailwind.css ← Tailwind horneado local (obligatorio)
                    └── img/         ← logo.webp + imágenes QR de los recursos
```

> 🔁 **El repositorio crece agregando carpetas que sigan esta convención.** No hace falta actualizar este README al añadir un nuevo programa, semestre, materia, unidad u OVA: basta con respetar el patrón de nombres anterior.

---

## 🚀 ¿Cómo crear un nuevo OVA con IA?

### Paso 1 — Prepara tu carpeta

1. Copia la carpeta `_template/` completa (ya incluye `index.html`, `tailwind.css` e `img/logo.webp`) y ubícala en la ruta de 5 niveles con el nombre del OVA.
   Ejemplo: `tecnico/semestre-1/matematicas/unidad-2/trigonometria/`
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

Usa la plantilla de prompt del archivo [`PROMPT_GUIDE.md`](./PROMPT_GUIDE.md), pega tu guía de aprendizaje en el bloque indicado y envíalo. La IA generará el OVA completo y horneará su `tailwind.css` local.

### Paso 5 — Activa los recursos externos

El OVA generado tendrá **cards verdes** donde la IA sugiere videos o recursos externos. Para activarlas, busca el recurso y dile al agente en el chat:
```
Encontré un recurso para el recurso-ext-1. URL: [url] Título: [título]
```
El agente edita el archivo directamente — sin tocar código.

### Paso 6 — Valida el OVA

Antes de entregar o publicar, ejecuta el validador desde la raíz del repositorio:

```bash
node scripts/validar-ova.mjs
```

Debe decir `✅ Validación OK`. Es el mismo validador que usa el repositorio institucional: si pasa aquí, pasará allá.

---

## ✅ OVA de referencia visual

La carpeta **`_template/`** es el estándar de referencia para estilos y estructura. Ante cualquier duda de cómo debe verse algo, consulta `_template/index.html`.

---

## ⚠️ Reglas importantes

- **Mapeo de secciones con la guía de aprendizaje** (ver "Relación con la guía de aprendizaje" en `context.md`): Introducción, Objetivos, Actividades, Recursos y Bibliografía **se mantienen** desde la guía; **Contenido** es el único apartado que puede llevar información distinta/complementaria; **Evaluación** es completamente nueva (la guía no la tiene). El OVA **nunca menciona la guía** ni compara ambos recursos.
- **Tailwind local, nunca CDN**: el CDN `cdn.tailwindcss.com` quedó descontinuado. Cada OVA lleva su propio `tailwind.css` horneado con `npx tailwindcss@3.4.17 -o tailwind.css --content "./**/*.{html,js}" --minify` (ejecutado dentro de la carpeta del OVA). Vuelve a correrlo si cambias clases.
- **No modificar** el layout base (sidebar, mobile header, footer de créditos).
- **Gamificación obligatoria** en Contenido y Actividades: puntos, misiones, insignias, progreso visible — siempre **contenida dentro de la sección donde aplica**. Ningún elemento de gamificación puede salir a modificar el layout global (sin barras flotantes, sin `position: fixed`, sin tocar sidebar ni footer).
- **No incrustar iframes** de YouTube ni inventar URLs — usar las cards de recurso externo.
- **No agregar controles de voz propios** — el plugin de accesibilidad ya los incluye.
- **No omitir** el plugin de accesibilidad al final del `<body>`:  
  `<script src="https://elens.ecodestudio.dev/elens.js"></script>`
- **Siempre incluir** las 7 secciones: Introducción, Objetivos, Contenido, Actividades, Evaluación, Recursos, Bibliografía.
- Cada recurso debe tener su imagen QR en `img/` (imagen local, nunca QR dinámico por URL).

---

## 🔗 Publicación (GitHub Pages)

El sitio se publica con GitHub Pages desde `main`. Las rutas antiguas de OVAs (`p_tecnico/semestre_3/...`) siguen funcionando gracias a `404.html`, que las redirige a las rutas nuevas automáticamente. Si renombras o mueves un OVA, agrega su ruta vieja al mapa `SLUGS` dentro de `404.html`.

---

## 👥 Créditos

**Centro de Innovación en TIC para el apoyo de la Docencia — CINTIA**  
Universidad de Córdoba
