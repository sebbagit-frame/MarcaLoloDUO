import type { SiteContent } from '../domain/types';

/**
 * Fuente de datos única del sitio.
 * Todo texto visible vive aquí; ningún componente contiene copy hardcodeado.
 */
export const siteContent: SiteContent = {
  meta: {
    title: 'MARCA LOLO — Música en vivo con alma',
    description:
      'MARCA LOLO es un proyecto musical de dos voces y guitarras. Música en vivo para eventos, sesiones acústicas y composiciones propias con una identidad cálida y cercana.',
    lang: 'es',
  },

  brand: {
    name: 'MARCA LOLO',
    shortName: 'MARCA LOLO',
    tagline: 'Dos voces, una misma raíz.',
  },

  nav: [
    { label: 'El dúo', href: '#sobre' },
    { label: 'Qué hacemos', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    eyebrow: 'Dúo musical · Buenos Aires',
    title: 'Canciones que suenan a casa.',
    subtitle:
      'Somos MARCA LOLO: dos voces y su guitarra que se encuentran en un repertorio que va del folclore a la canción de autor. Música en vivo, sin artificios, pensada para quedarse en la memoria.',
    ctaPrimary: { label: 'Escuchanos en vivo', href: '#contacto' },
    ctaSecondary: { label: 'Conocé al dúo', href: '#sobre' },
    imageAlt: 'Retrato de MARCA LOLO con sus guitarras',
    imageSrc: null,
  },

  about: {
    eyebrow: 'Sobre el dúo',
    title: 'Una amistad que se volvió repertorio.',
    paragraphs: [
      'MARCA LOLO nace en 2019, cuando dos músicos de barrios vecinos descubren que sus voces se buscan solas. Lo que empezó como guitarreadas de sobremesa se transformó en un proyecto con identidad propia: arreglos a dos voces, guitarras que conversan y un repertorio que cruza folclore, balada y canción rioplatense.',
      'Tocamos en peñas, salas íntimas, casamientos y ciclos culturales. Creemos que la música en vivo es un oficio artesanal: cada fecha se prepara a medida, cada set se piensa para el lugar y la gente que lo habita.',
      'Hoy trabajamos también en nuestro primer material de canciones propias, grabado de manera independiente, con la misma premisa de siempre: que suene humano.',
    ],
    highlights: [
      { value: '2019', label: 'Año de formación' },
      { value: '+120', label: 'Fechas en vivo' },
      { value: '2', label: 'Voces y guitarras' },
      { value: '1', label: 'EP en camino' },
    ],
  },

  services: {
    eyebrow: 'Qué hacemos',
    title: 'Música a medida, hecha a mano.',
    intro:
      'Cada propuesta se arma en conversación: repertorio, duración y clima según la ocasión.',
    items: [
      {
        id: 'eventos',
        index: '01',
        title: 'Música para eventos',
        description:
          'Casamientos, cumpleaños y celebraciones privadas. Sets acústicos que acompañan sin invadir, con repertorio elegido junto a los anfitriones.',
      },
      {
        id: 'shows',
        index: '02',
        title: 'Shows y peñas',
        description:
          'Conciertos en salas, centros culturales y ciclos de música en vivo. Un espectáculo íntimo de una hora y media con canciones propias y clásicos versionados.',
      },
      {
        id: 'sesiones',
        index: '03',
        title: 'Sesiones acústicas',
        description:
          'Grabaciones en vivo para redes, marcas y proyectos audiovisuales. Sonido cuidado y estética natural, en estudio o en locación.',
      },
      {
        id: 'talleres',
        index: '04',
        title: 'Talleres de canto grupal',
        description:
          'Encuentros de armonía vocal para coros, escuelas y grupos de amigos. La experiencia de cantar a dos o más voces, abierta a cualquier nivel.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'Momentos del camino.',
    items: [
      {
        id: 'gal-01',
        caption: 'Peña de La Vuelta · 2024',
        alt: 'MARCA LOLO tocando en la Peña de La Vuelta',
        src: null,
        aspect: 'landscape',
      },
      {
        id: 'gal-02',
        caption: 'Sesión acústica en estudio',
        alt: 'Grabación de sesión acústica en estudio',
        src: null,
        aspect: 'portrait',
      },
      {
        id: 'gal-03',
        caption: 'Casamiento de Juli & Fran',
        alt: 'MARCA LOLO tocando en un casamiento al aire libre',
        src: null,
        aspect: 'square',
      },
      {
        id: 'gal-04',
        caption: 'Ensayo de domingo',
        alt: 'Ensayo con guitarras en el living',
        src: null,
        aspect: 'portrait',
      },
      {
        id: 'gal-05',
        caption: 'Ciclo Canción Abierta · CABA',
        alt: 'Presentación en el ciclo Canción Abierta',
        src: null,
        aspect: 'landscape',
      },
      {
        id: 'gal-06',
        caption: 'Detrás de escena del EP',
        alt: 'Detrás de escena durante la grabación del EP',
        src: null,
        aspect: 'square',
      },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Armemos algo juntos.',
    description:
      'Contanos qué estás imaginando —una fecha, un evento, una sesión— y te respondemos dentro de las 48 horas con una propuesta a medida.',
    email: 'hola@loloduo.com',
    phone: '+54 9 11 5555-0134',
    location: 'Buenos Aires, Argentina',
    socials: [
      {
        platform: 'instagram',
        label: 'Instagram',
        url: 'https://instagram.com/loloduo',
      },
      {
        platform: 'youtube',
        label: 'YouTube',
        url: 'https://youtube.com/@loloduo',
      },
      {
        platform: 'spotify',
        label: 'Spotify',
        url: 'https://open.spotify.com/artist/loloduo',
      },
      {
        platform: 'email',
        label: 'hola@loloduo.com',
        url: 'mailto:hola@loloduo.com',
      },
    ],
  },

  footer: {
    note: 'Hecho con tiempo y oficio.',
  },
};
