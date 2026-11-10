import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/motion'

interface CounterProps {
  value: number
  from?: number
  suffix?: string
}

/** Número que cuenta hasta su valor cuando entra en pantalla. */
export function Counter({ value, from = 0, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const state = { n: from }
    el.textContent = `${from}${suffix}`
    const tween = gsap.to(state, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(state.n)}${suffix}`
      },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value, from, suffix])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
