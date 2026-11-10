interface MarqueeProps {
  items: string[]
}

/** Cinta infinita: la lista va duplicada para que el bucle no tenga corte. */
export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items]
  return (
    <div className="marquee relative overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max gap-10">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 font-display text-3xl font-semibold whitespace-nowrap text-ink/80 md:text-5xl" aria-hidden={i >= items.length}>
            {item}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
