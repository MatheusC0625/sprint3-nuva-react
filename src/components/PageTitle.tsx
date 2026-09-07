export default function PageTitle({ children }: { children: string }) {
  return (
    <h1 className="mb-6 text-center font-heading text-2xl font-bold text-azul-escuro sm:text-3xl">{children}</h1>
  )
}
