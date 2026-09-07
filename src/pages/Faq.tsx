import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import { faqs } from '../data/faq'

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0)

  const alternar = (index: number) => {
    setAberto((atual) => (atual === index ? null : index))
  }

  return (
    <>
      <PageTitle>Perguntas Frequentes</PageTitle>

      {faqs.map((item, index) => {
        const estaAberto = aberto === index

        return (
          <div key={item.pergunta} className="mb-3.5 rounded-lg border-l-4 border-l-teal bg-white shadow-sm">
            <button
              type="button"
              onClick={() => alternar(index)}
              aria-expanded={estaAberto}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <h3 className="font-heading font-semibold text-azul-escuro">{item.pergunta}</h3>
              <span className="ml-3 text-azul">{estaAberto ? '−' : '+'}</span>
            </button>
            {estaAberto && <p className="px-5 pb-4 text-gray-600">{item.resposta}</p>}
          </div>
        )
      })}
    </>
  )
}
