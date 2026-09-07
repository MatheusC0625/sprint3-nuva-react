import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <div className="mb-7 rounded-2xl bg-gradient-to-br from-azul-escuro to-[#1a3a7a] px-9 py-11 text-center text-white">
        <h2 className="mb-3 font-heading text-3xl font-bold">Engajamento que gera valor real</h2>
        <p className="mx-auto mb-5 max-w-md text-white/75">
          Plataforma de gamificação que transforma ações sustentáveis em dinheiro na conta de luz.
        </p>
        <span className="inline-block rounded-full bg-gradient-to-r from-azul to-teal px-7 py-2.5 font-heading text-lg font-bold">
          100 SoulCoins = R$1,00 na sua fatura ⚡
        </span>
      </div>

      <Card title="Como funciona?">
        <ol className="ml-5 list-decimal space-y-2 text-gray-700">
          <li>Receba uma <strong>missão sustentável</strong> diária personalizada</li>
          <li>Realize a ação no mundo real</li>
          <li>Filme e envie — a <strong>IA valida na hora</strong></li>
          <li>Acumule <strong>SoulCoins</strong> e converta em crédito na conta de luz</li>
        </ol>
      </Card>

      <Card title="Por que a NUVA + SoulUp?">
        <p className="mb-2.5 leading-relaxed text-gray-700">
          Somos a única plataforma que converte ação sustentável comprovada em recompensa financeira real.
          Sem pontos fictícios, sem autodeclaração — cada ação é validada por inteligência artificial.
        </p>
        <p className="leading-relaxed text-gray-700">
          E o melhor: sua <strong>comunidade compete junto com você</strong>. Quanto mais sua liga age, mais
          todo mundo ganha.
        </p>
      </Card>
    </>
  )
}
