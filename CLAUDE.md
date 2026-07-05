# MARCA LOLO — Guía del Proyecto

Landing page oficial y sitio web profesional para **MARCA LOLO** (dúo musical, antes "Marca Lolo Dúo"). El sitio busca proyectar una estética humana, editorial y minimalista (**Anti-AI look**), evitando los patrones genéricos generados por IA. Está desarrollado con Astro para máxima velocidad y SEO, aplicando principios de **Clean Architecture** en el frontend. Los componentes se estructuran para que el proyecto sea 100% escalable y migrable a **Next.js** en el futuro (integración de reproductores de música, paneles dinámicos, etc.).

---

## Instrucciones para Claude

- Todo el código, comentarios y nombres van en **español**.
- **Diseño Anti-AI:** Respetar estrictamente la directriz estética. Cero degradados genéricos, neones o sombras recargadas. Priorizar proporciones limpias, mucho espacio crema, bordes hairline (`line`) en lugar de sombras, y legibilidad impecable.
- **Cero texto hardcodeado en la UI:** Todo el contenido de la web (textos, bios, ítems de servicios, links) debe provenir y tiparse estrictamente en `src/data/content.ts`.
- **Manejo de Imágenes & Placeholders:** Los campos de imagen en `src/domain/types.ts` se tipan como `string | null`. Si una imagen no está disponible aún, los componentes renderizan placeholders estéticos en verde salvia (`#B3C8A2`) con marco interior fino y caption en itálica. **Antes de mergear a `main` hay que subir las fotos reales a `public/images/` y reemplazar los `null`** — prohibido llegar a producción con placeholders.
- **Cero Hidratación Innecesaria:** Priorizar HTML/CSS puro y `<script>` nativos de Astro. Convertir componentes a React (`.tsx`) **únicamente** cuando requieran estado de usuario o interactividad compleja. Única isla hidratada hoy: `MobileMenu.tsx` (con `client:media` para hidratar solo en pantallas < `md`); el resto de los `.tsx` se renderiza estático.
- **Responsive Primero:** Cualquier componente creado o modificado debe ser 100% responsivo (`sm`, `md`, `lg`).
- **Flujo Git:** Trabajar siempre en ramas por funcionalidad (`git checkout -b feature-name`), nunca alterar `main` directamente.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Core Framework** | Astro 5 (salida estática) |
| **Interactividad UI** | React 19 (`@astrojs/react`); hidratación puntual con `client:media` solo donde hace falta |
| **Estilos & Diseño** | Tailwind CSS v3 (`tailwind.config.mjs` + `@astrojs/tailwind`) |
| **Lenguaje** | TypeScript (Modo Estricto, sin `any`) |
| **Tipografías** | Fraunces (display serif) + Inter (sans), vía Google Fonts |
| **Iconografía** | Lucide Icons (`lucide-react`) — *aún no instalado; agregar recién cuando se necesiten íconos* |
| **Animaciones** | CSS transitions + `IntersectionObserver` nativo (sin `framer-motion` ni librerías JS) |

---

## Arquitectura del Proyecto

```text
MarcaLoloDUO/
├── public/
│   └── images/             → Fotos de alta calidad del Drive (reemplazan los placeholders)
└── src/
    ├── components/
    │   ├── sections/       → Header.astro (fixed + shrinking), Hero.astro (Split Layout),
    │   │                     About.astro, Services.astro, Gallery.astro, Contact.astro, Footer.astro
    │   └── ui/             → Piezas en React: ServiceCard.tsx (estático),
    │                         MobileMenu.tsx (isla con client:media, menú hamburguesa)
    ├── config/
    │   └── theme.ts        → Constantes del tema en TS-land (espejo de tailwind.config.mjs)
    ├── domain/
    │   └── types.ts        → Interfaces y contratos estrictos de TS para los datos del sitio
    ├── data/
    │   └── content.ts      → Fuente única de verdad (toda la información consumida por la UI)
    ├── layouts/
    │   └── BaseLayout.astro → HTML wrapper (fuentes, meta tags, reveal global, reset de scroll)
    └── pages/
        └── index.astro     → Página principal que ensambla todas las secciones del sitio
```

Aliases de import disponibles en `tsconfig.json`: `@config/*`, `@domain/*`, `@data/*`, `@components/*`, `@layouts/*`.

---

## Paleta de Colores & Sistema Visual

Definida en `tailwind.config.mjs` y espejada en `src/config/theme.ts` (si se cambia un color, actualizar ambos):

| Token Tailwind | Código | Uso Aplicado |
|---|---|---|
| `cream` | `#F9F6F0` | Fondo de la web y de las tarjetas de servicios |
| `sage` | `#B3C8A2` | Placeholders de imágenes, subrayados de CTA, detalles |
| `sage-soft` | `#CBDABE` | Placeholders alternos, hover de tarjetas, fondo suave de Contacto |
| `sage-deep` | `#8FA97C` | Numeración de tarjetas, estados hover de acentos |
| `ink` | `#222521` | Títulos y párrafos (máximo contraste) |
| `ink-muted` | `#5A5F57` | Texto secundario, eyebrows, navegación |
| `line` | `#E4DFD4` | Bordes hairline y separadores de retícula |

Nota: las tarjetas de servicios usan fondo `cream` sobre retícula de separadores `line` (no blanco puro), con hover a `sage-soft`.

---

## Comandos del Proyecto

```bash
# Servidor de desarrollo local (http://localhost:4321)
npm run dev

# Compilar para producción (corre astro check + build)
npm run build

# Previsualizar el build final localmente
npm run preview
```

---

## Convenciones de Nomenclatura y Código

**Archivos y Componentes**
- Componentes UI (`.astro`, `.tsx`): PascalCase (ej. `Hero.astro`, `ServiceCard.tsx`).
- Archivos de lógica, datos y utilidades (`.ts`, `.js`): camelCase (ej. `content.ts`, `theme.ts`).
- Ramas de Git: kebab-case descriptivo en minúsculas (ej. `setup-inicial`, `header-responsive`).

**TypeScript & Datos**
- Toda entidad dentro de `content.ts` debe obedecer a una interfaz declarada en `src/domain/types.ts` (campos `readonly`).
- Prohibido el uso de tipos implícitos o genéricos vacíos.

---

## Rendimiento, Estilos & Animaciones (implementado)

- **Sin librerías de animación:** no usar `framer-motion` ni similares salvo pedido explícito.
- **Header Dinámico:** `position: fixed` + spacer de altura equivalente (decisión tomada en lugar de `sticky`). Un `<script>` nativo con `requestAnimationFrame` y listener `passive` setea `data-scrolled` pasados 24px de scroll; el estilo reacciona con variantes `data-[scrolled=true]:*` de Tailwind (menos padding, fondo crema al 85% con `backdrop-blur`, sombra ultrasutil).
- **Animaciones al scroll (sistema `data-reveal`):** definido globalmente en `BaseLayout.astro`. Un `IntersectionObserver` agrega `.is-revealed` (fade-in + slide-up de 18px, 700ms) a cada elemento con `data-reveal`; el stagger se controla por elemento con la variable CSS `--reveal-delay`. Salvaguardas: los estilos de ocultado solo aplican bajo `html.js` (sin JS el contenido es visible) y se desactivan con `prefers-reduced-motion`.
- **Reset de scroll:** al recargar, la página siempre arranca arriba (`history.scrollRestoration = 'manual'` + `scrollTo` instantáneo en `pageshow`, cubre bfcache y URLs con ancla).
- **Navegación móvil:** menú hamburguesa en `MobileMenu.tsx`, hidratado solo en pantallas < `md` vía `client:media="(max-width: 767px)"`. El botón (dos líneas CSS) se transforma en "X" con rotación suave; el panel despliega con fade + slide-down bajo el header, y se cierra al tocar un link, hacer scroll o presionar Escape. Labels de accesibilidad desde `content.ts` (`ui`).

---

## Estado Actual del Proyecto

| Funcionalidad / Tarea | Estado |
|---|---|
| Inicialización del proyecto con Astro + TypeScript estricto | ✅ Hecho |
| Paleta de colores en Tailwind v3 + tonos extendidos (`sage-soft`, `sage-deep`, `ink-muted`, `line`) | ✅ Hecho |
| Clean Architecture (`types.ts`, `content.ts`, `theme.ts`, aliases) | ✅ Hecho |
| Header dinámico (fixed + shrinking con script nativo) | ✅ Hecho |
| Sección Hero en Split Layout (texto izquierda + placeholder salvia derecha) | ✅ Hecho |
| Secciones modulares: Sobre el dúo, Servicios (4 tarjetas) y Contacto | ✅ Hecho |
| Galería visual en columnas asimétricas con placeholders | ✅ Hecho |
| Ensamblado general en `pages/index.astro` | ✅ Hecho |
| Animaciones escalonadas nativas al scroll (`data-reveal` + stagger) | ✅ Hecho |
| Reset de scroll al recargar la página | ✅ Hecho |
| Menú hamburguesa móvil (isla `MobileMenu.tsx` con `client:media`) | ✅ Hecho |
| Subir fotos reales del Drive a `public/images/` y reemplazar los `null` de `content.ts` | ⏳ Pendiente (bloquea merge a `main`) |
| Revisar email/redes (`loloduo`) tras el rebrand a "MARCA LOLO" | ⏳ Pendiente |
