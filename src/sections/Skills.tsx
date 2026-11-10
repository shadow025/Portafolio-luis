import { es } from '../content/es'
import { SectionHeader } from '../components/SectionHeader'
import { Marquee } from '../components/Marquee'
import { Tag } from '../components/Tag'

export function Skills() {
  const { skills } = es
  const education = skills.education.filter((e) => e.institution)

  return (
    <section id="habilidades" className="scroll-mt-16 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader num={skills.num} label={skills.label} title={skills.title} />
      </div>

      <div className="reveal mb-20">
        <Marquee items={skills.marquee} />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {skills.groups.map((group) => (
            <div key={group.level} className="reveal bg-bg p-7 md:p-8">
              <h3 className="mb-5 font-mono text-xs tracking-[0.2em] text-lime uppercase">{group.level}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="reveal">
            <h3 className="mb-6 font-display text-2xl font-semibold">{skills.languagesTitle}</h3>
            <ul className="space-y-5">
              {skills.languages.map((lang) => (
                <li key={lang.name} className="border-b border-line pb-5">
                  <p className="flex items-baseline justify-between font-semibold">
                    {lang.name}
                    <span className="font-mono text-xs font-normal text-lime">{lang.level}</span>
                  </p>
                  {lang.note && <p className="mt-2 text-sm text-muted">{lang.note}</p>}
                </li>
              ))}
            </ul>
          </div>

          {education.length > 0 && (
            <div className="reveal">
              <h3 className="mb-6 font-display text-2xl font-semibold">{skills.educationTitle}</h3>
              <ul className="space-y-5">
                {education.map((e) => (
                  <li key={e.institution} className="border-b border-line pb-5">
                    <p className="font-semibold">{e.degree}</p>
                    <p className="mt-1 text-sm text-muted">
                      {e.institution} · {e.period}
                    </p>
                    <p className="mt-2 font-mono text-xs text-coral">{e.status}</p>
                    {e.description && <p className="mt-2 text-sm text-muted">{e.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
