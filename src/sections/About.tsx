import { es } from '../content/es'
import { SectionHeader } from '../components/SectionHeader'
import { Counter } from '../components/Counter'

export function About() {
  const { about } = es
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28 md:py-40">
      <SectionHeader num={about.num} label={about.label} title={about.title} />

      <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-ink/85 md:text-xl">
          {about.paragraphs.map((p) => (
            <p key={p} className="reveal">
              {p}
            </p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line">
          {about.stats.map((stat) => (
            <div key={stat.label} className="reveal flex flex-col gap-2 bg-bg p-6">
              <dt className="order-2 text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="order-1 font-display text-4xl font-extrabold text-lime md:text-5xl">
                <Counter value={stat.value} from={stat.from} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
