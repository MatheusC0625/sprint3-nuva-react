import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  accent?: 'azul' | 'teal'
}

export default function Card({ title, children, accent = 'azul' }: CardProps) {
  const borderColor = accent === 'teal' ? 'border-l-teal' : 'border-l-azul'

  return (
    <section
      className={`mb-5 rounded-xl border-l-4 ${borderColor} bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`}
    >
      {title && <h2 className="mb-2.5 font-heading text-2xl font-bold text-azul-escuro">{title}</h2>}
      {children}
    </section>
  )
}
