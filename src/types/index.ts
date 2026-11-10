export interface NavLink {
  href: string
  label: string
}

export interface Stat {
  value: number
  /** Valor desde el que arranca el contador animado (por defecto 0). */
  from?: number
  suffix?: string
  label: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  title: string
  client?: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
  repoUrl?: string
  demoUrl?: string
}

export interface ProjectGroup {
  id: string
  title: string
  note?: string
  items: Project[]
}

export interface SkillGroup {
  level: string
  skills: string[]
}

export interface Language {
  name: string
  level: string
  note?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  status: string
  description?: string
}
