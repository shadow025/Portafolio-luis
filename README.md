# Portafolio - Luis Carlos Gómez

Portafolio personal construido con Vite + React + TypeScript + Tailwind CSS, con animaciones de GSAP (ScrollTrigger) y scroll suave con Lenis.

## Scripts

- `npm run dev` - servidor de desarrollo
- `npm run build` - build de producción en `dist/`
- `npm run preview` - previsualizar el build
- `npm run lint` - linter

## Estructura

```
src/
  content/es.ts Todo el texto del portafolio (se edita a mano)
  components/   Componentes reutilizables (Navbar, Tag, Counter, Marquee...)
  sections/     Secciones de la página (Hero, Sobre mí, Experiencia...)
  lib/motion.ts GSAP + ScrollTrigger + Lenis
  hooks/        Hooks (animaciones de aparición)
  types/        Tipos TypeScript
  assets/       Imágenes e íconos usados en el código
public/
  images/       Imágenes públicas (fotos, capturas de proyectos)
  cv/           CV en PDF
```

Todo el texto del portafolio se edita en `src/content/es.ts`.
