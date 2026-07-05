/**
 * Contratos de dominio de MARCA LOLO DÚO.
 * Interfaces estrictas que definen la forma de todo el contenido del sitio.
 * Los componentes consumen estos tipos; nunca definen su propia forma de datos.
 */

export interface NavLink {
  readonly label: string;
  readonly href: `#${string}` | `/${string}`;
}

export interface SocialLink {
  readonly platform: 'instagram' | 'youtube' | 'spotify' | 'email';
  readonly label: string;
  readonly url: string;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly ctaPrimary: CallToAction;
  readonly ctaSecondary: CallToAction;
  readonly imageAlt: string;
  /** Ruta de la imagen real; `null` mientras usamos placeholder estético. */
  readonly imageSrc: string | null;
}

export interface CallToAction {
  readonly label: string;
  readonly href: string;
}

export interface AboutContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly highlights: readonly AboutHighlight[];
}

export interface AboutHighlight {
  readonly value: string;
  readonly label: string;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  /** Número ordinal mostrado en la tarjeta (estética editorial). */
  readonly index: string;
}

export interface ServicesContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro: string;
  readonly items: readonly Service[];
}

export interface GalleryItem {
  readonly id: string;
  readonly caption: string;
  readonly alt: string;
  /** Ruta de la imagen real; `null` mientras usamos placeholder estético. */
  readonly src: string | null;
  /** Proporción visual de la pieza dentro de la retícula. */
  readonly aspect: 'portrait' | 'landscape' | 'square';
}

export interface GalleryContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly items: readonly GalleryItem[];
}

export interface ContactContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly socials: readonly SocialLink[];
}

export interface UiLabels {
  readonly openMenu: string;
  readonly closeMenu: string;
  readonly mobileNav: string;
  readonly mainNav: string;
}

export interface SiteContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    readonly lang: string;
  };
  readonly brand: {
    readonly name: string;
    readonly shortName: string;
    readonly tagline: string;
  };
  readonly nav: readonly NavLink[];
  readonly ui: UiLabels;
  readonly hero: HeroContent;
  readonly about: AboutContent;
  readonly services: ServicesContent;
  readonly gallery: GalleryContent;
  readonly contact: ContactContent;
  readonly footer: {
    readonly note: string;
  };
}
