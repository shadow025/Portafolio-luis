import type { PointerEvent } from 'react'
import { ArrowUpRight, Gamepad2, Sparkles } from 'lucide-react'
import { es } from '../content/es'
import type { Project } from '../types'
import { SectionHeader } from '../components/SectionHeader'
import { Tag } from '../components/Tag'
import { GithubIcon } from '../components/BrandIcons'

const groupIcons: Record<string, typeof Gamepad2> = { videojuegos: Gamepad2, 'con-ia': Sparkles }

/** Mueve el foco de luz de la tarjeta a la posición del cursor. */
function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { linkCode, linkDemo } = es.projects
  return (
    <article
      onPointerMove={trackPointer}
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-bg-2/50 p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-lime/40 md:p-8"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(380px_circle_at_var(--x,50%)_var(--y,50%),color-mix(in_oklab,var(--color-lime)_10%,transparent),transparent_60%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
        <span className="font-mono text-xs text-muted">{project.period}</span>
      </div>

      <h4 className="relative mt-6 font-display text-2xl leading-tight font-bold md:text-[1.75rem]">{project.title}</h4>
      {project.client && <p className="relative mt-2 font-mono text-xs text-coral">{project.client}</p>}
      <p className="relative mt-4 leading-relaxed text-ink/80">{project.description}</p>

      <ul className="relative mt-5 space-y-2 text-sm leading-relaxed text-muted">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span className="text-lime">→</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-7">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {(project.repoUrl || project.demoUrl) && (
        <div className="relative mt-6 flex gap-5 border-t border-line pt-5 text-sm font-semibold">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-lime">
              <GithubIcon size={16} /> {linkCode}
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-lime">
              {linkDemo} <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export function Projects() {
  const { projects } = es
  // Numeración continua entre grupos: índice inicial de cada grupo.
  const offsets = projects.groups.map((_, g) =>
    projects.groups.slice(0, g).reduce((sum, prev) => sum + prev.items.length, 0),
  )

  return (
    <section id="proyectos" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28 md:py-40">
      <SectionHeader num={projects.num} label={projects.label} title={projects.title} />

      <div className="space-y-24">
        {projects.groups.map((group, g) => {
          const Icon = groupIcons[group.id] ?? Sparkles
          return (
            <div key={group.id}>
              <div className="reveal mb-8 flex flex-col gap-3 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold md:text-2xl">
                  <Icon size={22} className="text-lime" /> {group.title}
                </h3>
                {group.note && <p className="max-w-md text-sm leading-relaxed text-muted md:text-right">{group.note}</p>}
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {group.items.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={offsets[g] + i} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
