import { useEffect, useRef } from 'react'
import { es } from '../content/es'
import { gsap, prefersReducedMotion } from '../lib/motion'
import { SectionHeader } from '../components/SectionHeader'
import { Tag } from '../components/Tag'

export function ExperienceSection() {
  const list = useRef<HTMLOListElement>(null)
  const { experience } = es

  // La línea de tiempo se dibuja a medida que se hace scroll.
  useEffect(() => {
    if (!list.current || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-progress',
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: list.current, start: 'top 70%', end: 'bottom 60%', scrub: true } },
      )
    }, list)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experiencia" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28 md:py-40">
      <SectionHeader num={experience.num} label={experience.label} title={experience.title} />

      <ol ref={list} className="relative space-y-16 pl-8 md:pl-12">
        <span className="absolute top-2 bottom-0 left-[5px] w-px bg-line" />
        <span className="timeline-progress absolute top-2 bottom-0 left-[5px] w-px origin-top bg-lime" />

        {experience.items.map((job) => (
          <li key={`${job.company}-${job.period}`} className="reveal relative">
            <span className="absolute top-2 -left-8 h-[11px] w-[11px] rounded-full border-2 border-lime bg-bg md:-left-12" />
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
              <div>
                <p className="font-mono text-xs tracking-wide text-muted">{job.period}</p>
                <p className="mt-2 font-display text-2xl font-bold text-lime">{job.company}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{job.role}</h3>
                <p className="mt-3 text-muted">{job.description}</p>
                <ul className="mt-6 space-y-4">
                  {job.achievements.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink/85">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-coral" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
