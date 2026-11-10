import { useEffect, type RefObject } from 'react'
import { gsap, prefersReducedMotion } from '../lib/motion'

/**
 * Anima la aparición al hacer scroll de los elementos con la clase `reveal`
 * dentro del contenedor. Los que comparten padre entran escalonados.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!scope.current || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal')) : [el]
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.8,
          delay: Math.min(siblings.indexOf(el), 4) * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })
    }, scope)
    return () => ctx.revert()
  }, [scope])
}
