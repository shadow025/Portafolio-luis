import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { es } from '../content/es'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-mono text-sm font-medium" onClick={() => setOpen(false)}>
          <span className="text-lime">~/</span>
          {es.profile.shortName.toLowerCase()}
          <span className="caret text-lime">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {es.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative text-sm text-muted transition-colors hover:text-ink">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label={open ? es.nav.closeMenu : es.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-5 pt-3 pb-6 md:hidden">
          {es.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
