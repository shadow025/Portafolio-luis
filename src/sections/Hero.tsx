import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { es } from '../content/es'
import { gsap, prefersReducedMotion } from '../lib/motion'
import { GithubIcon } from '../components/BrandIcons'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const glow = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-line > span', { yPercent: 115, duration: 1.1, stagger: 0.12 })
        .from('.hero-fade', { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, '-=0.6')
        .from('.hero-grid', { opacity: 0, duration: 1.4 }, 0)

      // El título se aleja un poco al hacer scroll.
      gsap.to('.hero-title', {
        yPercent: -18,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, section)

    // Luz que sigue al cursor (solo con ratón).
    const fine = window.matchMedia('(pointer: fine)').matches
    const move = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect()
      gsap.to(glow.current, { left: e.clientX - rect.left, top: e.clientY - rect.top, duration: 0.8, ease: 'power3.out' })
    }
    if (fine) section.addEventListener('pointermove', move)

    return () => {
      ctx.revert()
      section.removeEventListener('pointermove', move)
    }
  }, [])

  const { hero, profile } = es

  return (
    <section ref={ref} id="inicio" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="hero-grid grid-bg pointer-events-none absolute inset-0" />
      <div
        ref={glow}
        className="pointer-events-none absolute top-[35%] left-[70%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <div className="hero-fade mb-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs tracking-wide text-muted">
          <span className="flex items-center gap-2 rounded-full border border-line bg-bg-2/60 px-3 py-1.5 text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            {hero.status}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> {profile.location}
          </span>
        </div>

        <p className="hero-fade mb-4 font-mono text-sm text-lime">
          {'// '}
          {profile.name} — {hero.kicker}
        </p>

        <h1 className="hero-title font-display text-[clamp(2.9rem,9.5vw,8.5rem)] leading-[0.92] font-extrabold tracking-[-0.03em]">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="hero-line block overflow-hidden pb-[0.06em]">
              <span className={`block ${i === hero.titleLines.length - 1 ? 'text-lime' : ''}`}>{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{hero.subtitle}</p>

        <div className="hero-fade mt-10 flex flex-wrap gap-3">
          <a
            href="#proyectos"
            className="group flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            {hero.ctaPrimary}
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-ink/40"
            >
              {hero.ctaSecondary}
            </a>
          )}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center rounded-full border border-line px-4 py-3 transition-colors hover:border-ink/40"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </div>

      <a
        href="#sobre-mi"
        className="hero-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-muted uppercase md:flex"
      >
        {hero.scrollHint}
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
