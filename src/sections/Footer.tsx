import { ArrowUp } from 'lucide-react'
import { es } from '../content/es'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {currentYear} {es.profile.name}
        </p>
        <p>{es.footer.builtWith}</p>
        <a href="#inicio" className="flex items-center gap-1.5 transition-colors hover:text-lime">
          {es.footer.backToTop} <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
