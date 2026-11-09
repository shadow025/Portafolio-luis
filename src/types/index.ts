export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  phone?: string
  github?: string
  linkedin?: string
  cvUrl?: string
  /** URL pública del sitio hermano "This is Claude" (muestra de cómo Luis trabaja con IA) */
  thisIsClaudeUrl?: string
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string | 'Actualidad'
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  startDate: string
  endDate: string
  status: 'En curso' | 'Finalizado' | 'Pendiente de título'
  description?: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  image?: string
  repoUrl?: string
  demoUrl?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}
