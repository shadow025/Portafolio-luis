/**
 * TODO EL TEXTO DEL PORTAFOLIO VIVE AQUÍ.
 *
 * Edítalo a mano sin tocar los componentes. Reglas:
 * - Cambia solo lo que está entre comillas.
 * - Si una frase lleva comilla simple ('), escríbela como \' o usa comillas dobles.
 * - Los campos marcados con TODO están pendientes de tus datos reales.
 */
import type {
  Education,
  Experience,
  Language,
  NavLink,
  ProjectGroup,
  SkillGroup,
  Stat,
} from '../types'

const thisIsClaudeUrl = 'https://shadow025.github.io/This-is-Claude/' // tentativa: depende del nombre final del repo

export const es = {
  /* ───────────── Datos personales ───────────── */
  profile: {
    name: 'Luis Carlos Gómez Urquijo',
    shortName: 'Luis',
    role: 'Desarrollador de Software Junior',
    location: 'Colombia', // TODO: ciudad
    email: 'luis.carlos.gomez.urquijo@gmail.com',
    github: 'https://github.com/Shadow025',
    linkedin: '', // TODO: URL de LinkedIn (vacío = no se muestra)
    cvUrl: '', // TODO: 'cv/CV-Luis-Carlos-Gomez.pdf' cuando el PDF esté en public/cv/ (vacío = no se muestra)
  },

  /* ───────────── Barra de navegación ───────────── */
  nav: {
    links: [
      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#contacto', label: 'Contacto' },
    ] satisfies NavLink[],
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  /* ───────────── Portada ───────────── */
  hero: {
    kicker: 'Desarrollador de Software Junior',
    // Cada línea del título aparece por separado en la animación.
    titleLines: ['Hago videojuegos', 'y las APIs', 'que los sostienen.'],
    subtitle:
      'Base sólida en C#, Unity y FastAPI. Para todo lo demás trabajo con IA: yo defino el diseño, reviso el trabajo y pruebo los resultados.',
    ctaPrimary: 'Ver proyectos',
    ctaSecondary: 'Descargar CV',
    status: 'Tecnólogo a punto de graduarme · Disponible para trabajar',
    scrollHint: 'Desliza',
  },

  /* ───────────── 01 · Sobre mí ───────────── */
  about: {
    num: '01',
    label: 'Sobre mí',
    title: 'Curioso por naturaleza, constante por decisión.',
    paragraphs: [
      'Soy desarrollador junior con base sólida en C#/Unity y FastAPI. Desarrollo videojuegos en Unity, incluido un juego móvil publicado en Google Play, y las APIs con FastAPI que les dan soporte.',
      'También construyo herramientas full-stack y de datos con Python, FastAPI, PostgreSQL y React/TypeScript con apoyo de IA. Superviso y reviso su trabajo y pruebo los resultados, mientras sigo reforzando mis fundamentos.',
      'Me apasiona aprender por mi cuenta: de motores de videojuegos a backend, datos y machine learning.',
    ],
    stats: [
      { value: 2023, from: 2015, label: 'Año en que empecé a desarrollar videojuegos en Vakano Studio' },
      { value: 1, label: 'Juego móvil publicado en Google Play' },
      { value: 300, suffix: '+', label: 'Commits en el sistema de facturación de StreamTV Norte' },
      { value: 4, label: 'Proyectos desarrollados con apoyo de IA' },
    ] satisfies Stat[],
  },

  /* ───────────── 02 · Experiencia ───────────── */
  experience: {
    num: '02',
    label: 'Experiencia',
    title: 'Donde he construido.',
    items: [
      {
        company: 'Vakano Studio',
        role: 'Desarrollador de Videojuegos',
        period: 'Ago 2023 – May 2026',
        description: 'Desarrollo de videojuegos en Unity y de las APIs con FastAPI que les dan soporte.',
        achievements: [
          'Polar: juego móvil 2D desarrollado en Unity y publicado en Google Play.',
          'Proyectos de menor magnitud: juegos en Unity que consumen APIs REST de equipos externos a la empresa, y prototipos en Godot con consumo de APIs (nivel básico).',
          'APIs propias con FastAPI para los juegos: datos y progreso del jugador y lógica del servidor, con interfaces adaptables.',
        ],
        technologies: ['C#', 'Unity', 'FastAPI', 'Godot (básico)', 'APIs REST', 'Git'],
      },
    ] satisfies Experience[],
  },

  /* ───────────── 03 · Proyectos ───────────── */
  projects: {
    num: '03',
    label: 'Proyectos',
    title: 'Cosas que existen gracias a mí.',
    linkCode: 'Código',
    linkDemo: 'Ver sitio',
    groups: [
      {
        id: 'videojuegos',
        title: 'Base principal: C# y videojuegos',
        items: [
          {
            title: 'Plataformas 2D con multijugador LAN',
            period: '2026',
            description: 'Juego de plataformas 2D con modo multijugador local y en red LAN.',
            highlights: ['Menú para elegir partida Local o LAN.', 'Sincronización en red con Netcode for GameObjects.'],
            technologies: ['C#', 'Unity 6', 'Netcode for GameObjects'],
          },
        ],
      },
      {
        id: 'con-ia',
        title: 'Desarrollados con apoyo de IA',
        note: 'Hechos con asistentes de programación con IA (Claude Code). Yo definí los requisitos y el diseño, supervisé y revisé el trabajo de la IA y probé los resultados.',
        items: [
          {
            title: 'Sistema de Facturación',
            client: 'StreamTV Norte · telecom y streaming',
            period: 'Sep 2026 – Actual',
            description:
              'Reemplaza la facturación en Excel y papel de la empresa para cientos de miles de clientes.',
            highlights: [
              'API backend con FastAPI y SQLAlchemy, migraciones con Alembic sobre PostgreSQL y tareas en segundo plano con Celery y Redis.',
              'Desarrollador principal: más de 300 commits entre backend y frontend, con pull requests y revisión de código junto a otro desarrollador.',
            ],
            technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'Celery', 'Redis', 'pytest', 'React', 'TypeScript', 'Docker'],
          },
          {
            title: 'Extractor de etiquetas de red + clasificador ML',
            period: 'Oct 2026',
            description:
              'Lee fotos de etiquetas de routers, ONT y switches y extrae MAC, serial, GPON SN, modelo y datos Wi-Fi.',
            highlights: ['Clasificador entrenado con scikit-learn para cuando la etiqueta no trae palabras clave.'],
            technologies: ['Python', 'OpenCV', 'RapidOCR', 'zxing-cpp', 'scikit-learn', 'pandas'],
          },
          {
            title: 'Sistema de Inventario',
            period: 'Oct 2026 – Actual',
            description: 'Redacté la propuesta técnica (alcance, modelo de datos, API y fases) e inicié la implementación.',
            highlights: ['Incluye un lector de hojas de cajas de equipos.'],
            technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript'],
          },
          {
            title: 'This is Claude',
            period: 'Nov 2026',
            description:
              'Sitio donde la IA se presenta en primera persona y muestra sus capacidades con demos en vivo. Yo lo diseñé y dirigí; la IA lo ejecutó.',
            highlights: ['Esfera neuronal en 3D, código que se escribe solo, flujo de Git animado y demos responsive.'],
            technologies: ['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS'],
            demoUrl: thisIsClaudeUrl,
          },
        ],
      },
    ] satisfies ProjectGroup[],
  },

  /* ───────────── 04 · Habilidades ───────────── */
  skills: {
    num: '04',
    label: 'Habilidades',
    title: 'Lo que domino y lo que estoy dominando.',
    // Cinta que se desplaza sola.
    marquee: ['C#', 'Unity', 'FastAPI', 'APIs REST', 'Python', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'Git', 'Godot', 'scikit-learn'],
    groups: [
      { level: 'Más sólidas', skills: ['C#', 'Unity', 'FastAPI', 'Programación orientada a objetos', 'Videojuegos 2D', 'APIs REST'] },
      { level: 'Básicas', skills: ['Godot'] },
      {
        level: 'Con apoyo de IA',
        skills: ['Python', 'TypeScript / JavaScript', 'SQL', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'React', 'Vite', 'pandas', 'scikit-learn', 'OpenCV'],
      },
      { level: 'Herramientas', skills: ['Git', 'GitHub (pull requests)', 'Docker', 'Claude Code y asistentes de IA'] },
    ] satisfies SkillGroup[],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Básico', note: 'Leo documentación técnica y me comunico por escrito. En mejora constante.' },
    ] satisfies Language[],
    educationTitle: 'Educación',
    // TODO: completar. Mientras institution esté vacío, este bloque no se muestra.
    education: [
      {
        institution: '',
        degree: 'Tecnólogo en ...',
        period: '... – 2026',
        status: 'Pendiente de grado',
        description: 'Materias aprobadas. Solo falta la entrega del título.',
      },
    ] satisfies Education[],
  },

  /* ───────────── 05 · Contacto ───────────── */
  contact: {
    num: '05',
    label: 'Contacto',
    title: '¿Construimos algo?',
    text: 'Busco mi próximo rol como desarrollador. Si tienes una vacante o un proyecto, escríbeme y conversamos.',
    aiCard: {
      kicker: 'Cómo trabajo con IA',
      title: 'Conoce "This is Claude"',
      text: 'Ahí la IA se presenta y explica nuestra forma de trabajar: yo diseño, dirijo, corrijo y apruebo. Ella ejecuta.',
      url: thisIsClaudeUrl,
    },
  },

  /* ───────────── Pie de página ───────────── */
  footer: {
    builtWith: 'Diseñado y dirigido por Luis. Construido con Claude Code.',
    backToTop: 'Volver arriba',
  },
}
