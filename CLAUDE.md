# MARCA LOLO DÚO — Guía del Proyecto

Landing page oficial y sitio web profesional para **MARCA LOLO DÚO**. El sitio busca proyectar una estética humana, editorial y minimalista (**Anti-AI look**), evitando los patrones genéricos generados por IA. Está desarrollado con Astro para máxima velocidad y SEO, aplicando principios de **Clean Architecture** en el frontend. Los componentes se estructuran para que el proyecto sea 100% escalable y migrable a **Next.js** en el futuro (integración de reproductores de música, paneles dinámicos, etc.).

---

## Instrucciones para Claude

- Todo el código, comentarios y nombres van en **español**.
- **Diseño Anti-AI:** Respetar estrictamente la directriz estética. Cero degradados genéricos, neones o sombras recargadas. Priorizar proporciones limpias, mucho espacio en blanco/crema y legibilidad impecable.
- **Cero texto hardcodeado en la UI:** Todo el contenido de la web (textos, bios, ítems de servicios, links) debe provenir y tiparse estrictamente en `src/data/content.ts`.
- **Manejo de Imágenes & Placeholders:** Los datos de imágenes en `domain/types.ts` deben tiparse como `string | null` (o rutas válidas). Si una imagen no está disponible aún, usar placeholders estéticos con las utilidades de color `#B3C8A2`. **Estrictamente prohibido commitear rutas en `null` o rotas en ramas de producción**.
- **Cero Hidratación Innecesaria:** Priorizar HTML/CSS puro y scripts nativos ligeros de Astro. Convertir componentes a React (`.tsx`) **únicamente** cuando requieran estado de usuario o interactividad compleja (como el menú hamburguesa activo).
- **Responsive Primero:** Cualquier componente creado o modificado debe ser 100% responsivo (`sm`, `md`, `lg`).
- **Flujo Git:** Trabajar siempre asumiendo que el desarrollo se realiza en ramas por funcionalidad (`git checkout -b feature-name`), nunca alterar `main` directamente.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Core Framework** | Astro (Última versión estricta) |
| **Interactividad UI** | React (`@astrojs/react` con TypeScript `.tsx`) |
| **Estilos & Diseño** | Tailwind CSS v3 (usando `tailwind.config.mjs`) |
| **Lenguaje** | TypeScript (Modo Estricto, sin `any`) |
| **Iconografía** | Lucide Icons (`lucide-react`) |
| **Animaciones** | CSS transitions y API Intersection Observer nativa (sin librerías pesadas JS) |

---

## Arquitectura del Proyecto

```text
lolo-duo-web/
├── public/
│   └── images/             → Almacenamiento local para fotos de alta calidad del Drive
└── src/
    ├── components/
    │   ├── layout/         → Header.astro (Sticky en CSS/Astro) + MobileMenu.tsx (Isla interactiva), Footer.astro
    │   └── sections/       → Hero.astro (Split Layout), About.astro, Services.astro, Gallery.astro, Contact.astro
    ├── config/
    │   └── theme.ts        → Constantes de la paleta visual y configuraciones de diseño
    ├── domain/
    │   └── types.ts        → Interfaces y contratos estrictos de TS para los datos del sitio
    ├── data/
    │   └── content.ts      → Fuente única de verdad (toda la información consumida por la UI)
    ├── layouts/
    │   └── Layout.astro    → HTML wrapper principal (fuentes, meta tags, color de fondo base)
    └── pages/
        └── index.astro     → Página principal que ensambla todas las secciones del sitio