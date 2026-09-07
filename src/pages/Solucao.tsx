import Card from '../components/Card'
import PageTitle from '../components/PageTitle'

export default function Solucao() {
  return (
    <>
      <PageTitle>A Solução</PageTitle>

      <Card>
        <p className="mb-2.5 leading-relaxed text-gray-700">
          Criamos o sistema <strong>Guardiões da Luz</strong>, onde usuários realizam missões sustentáveis e
          recebem recompensas reais na conta de energia.
        </p>
        <p className="mb-2.5 font-semibold text-gray-700">100 SoulCoins = R$1,00</p>
        <p className="leading-relaxed text-gray-700">
          As ações são validadas por inteligência artificial através da câmera, garantindo que apenas
          atividades reais sejam recompensadas.
        </p>
      </Card>

      <Card title="Como Funciona">
        <ol className="ml-5 list-decimal space-y-2 text-gray-700">
          <li>O usuário recebe uma missão diária</li>
          <li>Realiza a ação sustentável</li>
          <li>Registra a ação com a câmera</li>
          <li>A IA valida a missão</li>
          <li>O usuário recebe SoulCoins</li>
        </ol>
      </Card>

      <Card title="Diferenciais">
        <ul className="ml-5 list-disc space-y-2 text-gray-700">
          <li>Recompensa financeira real</li>
          <li>Validação por inteligência artificial</li>
          <li>Missões diárias com engajamento contínuo</li>
          <li>Conversão direta em crédito na conta de luz</li>
          <li>Sistema de progressão e ranking</li>
        </ul>
      </Card>

      <Card title="Inovação">
        <p className="mb-2.5 leading-relaxed text-gray-700">
          O projeto representa uma inovação no modelo de negócio ao unir gamificação, inteligência artificial e
          impacto financeiro direto.
        </p>
        <p className="leading-relaxed text-gray-700">
          Diferente de outros aplicativos, aqui o usuário recebe valor real por suas ações, criando um ciclo
          contínuo de engajamento.
        </p>
      </Card>
    </>
  )
}
