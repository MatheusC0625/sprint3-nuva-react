import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import { members } from '../data/members'

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const member = members.find((item) => item.id === id)

  useEffect(() => {
    document.title = member ? `${member.name} - NUVA` : 'Integrante não encontrado - NUVA'
  }, [member])

  if (!member) {
    return (
      <Card title="Integrante não encontrado">
        <p className="mb-4 text-gray-700">Não existe nenhum integrante com esse identificador.</p>
        <Button onClick={() => navigate('/integrantes')}>Voltar para a equipe</Button>
      </Card>
    )
  }

  return (
    <Card>
      <img
        src={member.photo}
        alt={`Foto de ${member.name}`}
        className="mx-auto mb-4 block h-28 w-28 rounded-full border-4 border-azul object-cover"
      />
      <h2 className="mb-1 text-center font-heading text-2xl font-bold text-azul-escuro">{member.name}</h2>
      <p className="mb-4 text-center text-sm text-muted">RM: {member.rm}</p>
      <p className="mb-5 leading-relaxed text-gray-700">{member.bio}</p>

      <div className="mb-5 flex justify-center gap-3">
        <a
          href={member.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-azul bg-fundo px-4 py-1.5 text-sm font-semibold text-azul transition-colors hover:bg-azul hover:text-white"
        >
          GitHub
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-azul bg-fundo px-4 py-1.5 text-sm font-semibold text-azul transition-colors hover:bg-azul hover:text-white"
        >
          LinkedIn
        </a>
      </div>

      <div className="text-center">
        <Button onClick={() => navigate('/integrantes')}>Voltar para a equipe</Button>
      </div>
    </Card>
  )
}
