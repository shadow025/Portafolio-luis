interface SectionHeaderProps {
  num: string
  label: string
  title: string
}

export function SectionHeader({ num, label, title }: SectionHeaderProps) {
  return (
    <header className="mb-14 md:mb-20">
      <p className="reveal mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-lime uppercase">
        <span>{num}</span>
        <span className="h-px w-10 bg-lime/60" />
        <span>{label}</span>
      </p>
      <h2 className="reveal max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.25rem)] leading-[1.02] font-extrabold tracking-tight">
        {title}
      </h2>
    </header>
  )
}
