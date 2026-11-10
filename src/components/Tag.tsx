interface TagProps {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </span>
  )
}
