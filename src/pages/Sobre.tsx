import Card from '../components/Card'
import PageTitle from '../components/PageTitle'

export default function Sobre() {
  return (
    <>
      <PageTitle>Sobre a NUVA</PageTitle>

      <Card>
        <p className="leading-relaxed text-gray-700">
          Somos uma empresa de tecnologia focada em gamificação com impacto financeiro real. Nosso objetivo é
          transformar ações sustentáveis em benefícios concretos para o usuário.
        </p>
      </Card>

      <Card title="O Problema">
        <p className="mb-2.5 leading-relaxed text-gray-700">
          Hoje, usuários não possuem incentivo financeiro direto para economizar energia. Aplicativos existentes
          oferecem apenas pontos simbólicos, sem valor real.
        </p>
        <ul className="ml-5 list-disc space-y-2 text-gray-700">
          <li>Sem retorno financeiro imediato</li>
          <li>Sem validação das ações</li>
          <li>Sem motivo para uso diário</li>
        </ul>
      </Card>
    </>
  )
}
