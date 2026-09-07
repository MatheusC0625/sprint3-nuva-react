export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t-[3px] border-t-teal bg-gradient-to-br from-azul-escuro to-[#162b5e] py-5 text-center text-sm text-white/60">
      <p>{year} NUVA — Guardiões da Luz</p>
    </footer>
  )
}
