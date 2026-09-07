import { Link } from 'react-router-dom'
import type { Member } from '../types/member'

export default function MemberCard({ member }: { member: Member }) {
  return (
    <li className="rounded-xl border border-azul/15 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <img
        src={member.photo}
        alt={`Foto de ${member.name}`}
        className="mx-auto block h-[90px] w-[90px] rounded-full border-[3px] border-azul object-cover"
      />
      <Link to={`/integrantes/${member.id}`} className="mt-2.5 block font-heading text-base font-semibold text-azul-escuro hover:underline">
        {member.name}
      </Link>
      <p className="mb-2.5 text-sm text-muted">RM: {member.rm}</p>
      <a
        href={member.github}
        target="_blank"
        rel="noreferrer"
        className="m-1 inline-block rounded-full border border-azul bg-fundo px-3 py-1 text-xs font-semibold text-azul transition-colors hover:bg-azul hover:text-white"
      >
        GitHub
      </a>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        className="m-1 inline-block rounded-full border border-azul bg-fundo px-3 py-1 text-xs font-semibold text-azul transition-colors hover:bg-azul hover:text-white"
      >
        LinkedIn
      </a>
    </li>
  )
}
