import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-azul px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-teal disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
