import { useForm } from 'react-hook-form'
import Card from '../components/Card'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'
import type { ContatoFormData } from '../types/contato'

export default function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContatoFormData>()

  const aoEnviar = (_dados: ContatoFormData) => {
    reset()
  }

  return (
    <>
      <PageTitle>Contato</PageTitle>

      <Card>
        <form onSubmit={handleSubmit(aoEnviar)} noValidate>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Nome"
              aria-invalid={errors.nome ? 'true' : 'false'}
              className={`block w-full rounded-lg border bg-gray-50 px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-3 ${
                errors.nome ? 'border-red-400 focus:ring-red-100' : 'border-gray-300 focus:border-azul focus:ring-azul/12'
              }`}
              {...register('nome', {
                required: 'Informe o seu nome.',
                minLength: { value: 2, message: 'O nome deve ter pelo menos 2 caracteres.' },
              })}
            />
            {errors.nome && <p className="mt-1 text-xs font-medium text-red-500">{errors.nome.message}</p>}
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              aria-invalid={errors.email ? 'true' : 'false'}
              className={`block w-full rounded-lg border bg-gray-50 px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-3 ${
                errors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-300 focus:border-azul focus:ring-azul/12'
              }`}
              {...register('email', {
                required: 'Informe o seu email.',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Informe um email válido.' },
              })}
            />
            {errors.email && <p className="mt-1 text-xs font-medium text-red-500">{errors.email.message}</p>}
          </div>

          <div className="mb-3">
            <textarea
              placeholder="Mensagem"
              rows={5}
              aria-invalid={errors.mensagem ? 'true' : 'false'}
              className={`block w-full resize-y rounded-lg border bg-gray-50 px-3.5 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-3 ${
                errors.mensagem ? 'border-red-400 focus:ring-red-100' : 'border-gray-300 focus:border-azul focus:ring-azul/12'
              }`}
              {...register('mensagem', {
                required: 'Escreva uma mensagem.',
                minLength: { value: 10, message: 'A mensagem deve ter pelo menos 10 caracteres.' },
              })}
            />
            {errors.mensagem && <p className="mt-1 text-xs font-medium text-red-500">{errors.mensagem.message}</p>}
          </div>

          <Button type="submit">Enviar</Button>

          {isSubmitSuccessful && <p className="mt-3 font-semibold text-teal">Mensagem enviada!</p>}
        </form>
      </Card>
    </>
  )
}
