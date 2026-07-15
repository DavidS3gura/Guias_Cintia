# 🤖 Guía de Prompts para crear OVAs con IA

Esta guía te dice exactamente qué escribirle a la IA para obtener un OVA bien hecho y consistente con los demás.

---

## 📋 Paso 1 — Dale el contexto a la IA

Empieza la conversación con la IA enviando este mensaje para que lea el archivo de contexto del repositorio:

```
Lee el archivo context.md que está en la raíz del repositorio cintia-web-ovas.
Memoriza todas las reglas que contiene. Las usarás para crear un OVA a continuación.
```

> 💡 Si el modelo que usas **no tiene acceso a archivos** (como ChatGPT sin plugins o Gemini web), entonces sí debes copiar y pegar el contenido completo de `context.md` directamente en el chat.

Espera a que la IA confirme que lo recibió antes de continuar.

---

## 📝 Paso 2 — Prepara tu guía de aprendizaje en Markdown

Antes de hablarle a la IA, debes tener lista tu **guía de aprendizaje** en formato Markdown (`.md`). Esta guía ya debe tener las secciones del OVA (Introducción, Objetivos, Contenido, Actividades, Evaluación, Recursos, Bibliografía) con el contenido base que tú quieres transmitir.

> 💡 La guía es tu materia prima. No tiene que ser perfecta ni muy extensa — puede ser un esquema con los puntos clave de cada sección. La IA se encargará de complementarla.

**Estructura mínima recomendada para tu guía:**

```markdown
# [Título del OVA]

## Introducción
[Texto de introducción al tema]

## Objetivos
- [Objetivo 1]
- [Objetivo 2]
- [Objetivo 3]

## Contenido
### [Subtema 1]
[Explicación o puntos clave]

### [Subtema 2]
[Explicación o puntos clave]

## Actividades
- [Descripción de la actividad 1]
- [Descripción de la actividad 2]

## Recursos
1. [Nombre] — [URL]
2. [Nombre] — [URL]

## Bibliografía
- [Referencia APA 1]
- [Referencia APA 2]
```

---

## 🚀 Paso 3 — Usa esta plantilla de prompt

Copia el siguiente bloque, pega tu guía donde se indica y envíalo:

```
Crea un OVA completo en HTML siguiendo todas las reglas del context.md que ya tienes.

Te entrego mi guía de aprendizaje en Markdown. Respeta este mapeo de secciones:
- Introducción, Objetivos, Actividades, Recursos y Bibliografía: MANTÉN el contenido de mi guía
  (mismos objetivos, mismas actividades, mismos recursos/anexos y misma bibliografía), solo adáptalos
  al formato web interactivo con emojis, estilo y gamificación en las actividades.
- Contenido: es el ÚNICO apartado donde puedes poner información distinta y complementaria a la guía.
  Investiga en internet y enriquece con ángulos, datos, contexto, cifras o casos que amplíen el tema,
  sin repetir literalmente el desarrollo del contenido de mi guía. Aquí van los elementos interactivos.
- Evaluación: constrúyela tú desde cero (mi guía no la trae), con al menos 5 preguntas de selección
  múltiple de dificultad progresiva.
IMPORTANTE: el OVA NUNCA debe mencionar la guía ni comparar ambos recursos ("lo que la guía no te
contó", "a diferencia de la guía", etc. están prohibidos). El estudiante lo vive como un recurso natural.

Información del OVA:
- Materia: [Ej: Matemáticas / Biología / Historia / Programación / etc.]
- Semestre: [Ej: Semestre 1 / Semestre 2]
- Nivel: Último año de bachillerato
- Imágenes QR de recursos: [lista los nombres de archivo, ej: img/qr-recurso-1.png]

Actividades interactivas que quiero (con gamificación obligatoria):
- [Ej: Sistema de puntos acumulables por cada respuesta correcta]
- [Ej: Misiones desbloqueables por sección]
- [Ej: Calculadora interactiva con retroalimentación]
- [Ej: Quiz con temporizador y puntaje final]

MI GUÍA DE APRENDIZAJE:
---
[PEGA AQUÍ EL CONTENIDO DE TU GUÍA EN MARKDOWN]
---

Usa como base el OVA de referencia (introduccion-nodejs) y la plantilla template/index.html.
Genera el HTML completo listo para usar.
```

---

## 💡 Ejemplos de guías de aprendizaje por materia

### Matemáticas — Trigonometría
```markdown
# Trigonometría básica

## Introducción
La trigonometría nos permite calcular distancias y ángulos que no podemos medir directamente.

## Objetivos
- Comprender las razones trigonométricas
- Aplicar seno, coseno y tangente en triángulos rectángulos
- Resolver problemas de la vida real con trigonometría

## Contenido
### Razones trigonométricas
Seno = opuesto/hipotenusa, Coseno = adyacente/hipotenusa, Tangente = opuesto/adyacente

### Ángulos notables
30°, 45°, 60° y sus valores exactos

### Aplicaciones
Altura de edificios, distancias inaccesibles, navegación

## Actividades
- Calcular razones dado un triángulo
- Misión: encontrar la altura de un árbol usando el ángulo de elevación

## Evaluación
- ¿Cuál es el seno de 30°? (a) 0.5 ✓ (b) 0.87 (c) 1 (d) 0.71

## Recursos
1. Khan Academy Trigonometría — https://es.khanacademy.org/math/trigonometry
2. GeoGebra — https://www.geogebra.org

## Bibliografía
- Stewart, J. (2012). Precálculo. Cengage Learning.
```

### Biología — La célula
```markdown
# La célula y sus organelos

## Introducción
Todo ser vivo está formado por células. Conocerlas es entender cómo funciona la vida.

## Objetivos
- Identificar los tipos de células
- Reconocer los organelos y sus funciones
- Comparar célula animal y vegetal

## Contenido
### Tipos de células
Procariota vs Eucariota

### Organelos principales
Núcleo, mitocondria, ribosoma, membrana celular, etc.

### Célula animal vs vegetal
Diferencias clave: pared celular, cloroplasto, vacuola

## Actividades
- Misión: identifica el organelo según su función
- Arrastra cada organelo a la célula correcta (animal o vegetal)

## Evaluación
- ¿Qué organelo produce energía? (a) Núcleo (b) Mitocondria ✓ (c) Ribosoma (d) Vacuola

## Recursos
1. Biología en Khan Academy — https://es.khanacademy.org/science/biology

## Bibliografía
- Campbell, N. (2019). Biología. Pearson.
```

---

## ⚠️ Consejos importantes

- **Recuerda el mapeo de secciones** — Introducción, Objetivos, Actividades, Recursos y Bibliografía se mantienen desde tu guía; solo el apartado **Contenido** lleva información complementaria distinta; la **Evaluación** es nueva. El OVA nunca menciona la guía.
- **Siempre pide gamificación explícitamente** en el prompt (misiones, puntos, insignias); si no lo pides, la IA puede omitirla.
- **La IA debe buscar en internet** para enriquecer el contenido; si no lo hace, agrégale al prompt: *"Busca información adicional en internet para enriquecer cada sección"*.
- **Recursos externos (videos, simuladores)**: la IA insertará cards verdes donde sugiere un recurso. Tu flujo es: busca el video o recurso → dílelo al agente en el chat: *"Encontré un recurso para el recurso-ext-1. URL: [url] Título: [título]"* → el agente actualiza el archivo directamente. No necesitas copiar ni pegar código.
- Si la IA genera el código en partes, pídele: *"Continúa generando desde donde te quedaste"*.
- Si algo no se ve bien, di: *"Corrige [lo que está mal] siguiendo el estilo del OVA de referencia introduccion-nodejs"*.
- **Nunca le pidas que cambie** el sidebar, el footer de créditos ni el plugin de accesibilidad.

---

## 🔁 Prompt para enriquecer o corregir un OVA existente

```
Tengo este OVA y necesito corregir lo siguiente: [describe el problema].
Toma como referencia visual el OVA introduccion-nodejs y aplica los estilos y estructura del context.md.
No modifiques el sidebar, los créditos ni el plugin de accesibilidad.

[PEGA EL HTML DEL OVA]
```

---

## ✅ Lista de verificación antes de usar el OVA

Antes de publicar o entregar el OVA, verifica que tenga:

- [ ] Logo en `img/logo.webp`
- [ ] Las 7 secciones: Introducción, Objetivos, Contenido, Actividades, Evaluación, Recursos, Bibliografía
- [ ] Al menos 1 elemento interactivo por sección de contenido
- [ ] Cards de recursos externos activadas (botón con URL real y sin `opacity-50`) — dílelo al agente en el chat con la URL que encontraste
- [ ] Quiz funcional en la sección Evaluación
- [ ] Imágenes QR en `img/` para cada recurso
- [ ] Footer con créditos de CINTIA
- [ ] Plugin de accesibilidad como último script: `<script src="https://elens.ecodestudio.dev/elens.js"></script>`
