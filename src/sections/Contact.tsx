import { ArrowUpRight, Sparkles } from 'lucide-react'
import { es } from '../content/es'
import { SectionHeader } from '../components/SectionHeader'

export function Contact() {
  const { contact, profile } = es
  return (
    <section id="contacto" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28 md:py-40">
      <SectionHeader num={contact.num} label={contact.label} title={contact.title} />

      <p className="reveal max-w-xl text-lg leading-relaxed text-muted md:text-xl">{contact.text}</p>

      <div className="reveal mt-12">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 font-display text-[clamp(1.35rem,4.2vw,3.25rem)] font-bold break-all transition-colors hover:text-lime"
        >
          {profile.email}
          <ArrowUpRight className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={36} />
        </a>
      </div>

      <a
        href={contact.aiCard.url}
        target="_blank"
        rel="noreferrer"
        className="reveal group mt-20 flex flex-col gap-6 rounded-2xl border border-line bg-bg-2/60 p-7 transition-colors hover:border-coral/60 md:flex-row md:items-center md:justify-between md:p-10"
      >
        <div className="flex items-start gap-4">
          <Sparkles size={26} className="mt-1 shrink-0 text-coral" />
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-coral uppercase">{contact.aiCard.kicker}</p>
            <p className="mt-2 font-display text-2xl font-bold md:text-3xl">{contact.aiCard.title}</p>
            <p className="mt-3 max-w-xl text-muted">{contact.aiCard.text}</p>
          </div>
        </div>
        <ArrowUpRight size={32} className="shrink-0 self-end text-coral transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:self-center" />
      </a>
    </section>
  )
}
