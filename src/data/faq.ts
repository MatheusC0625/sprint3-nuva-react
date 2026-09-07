export interface FaqEntry {
  pergunta: string
  resposta: string
}

export const faqs: FaqEntry[] = [
  {
    pergunta: 'Como ganho SoulCoins?',
    resposta:
      'Completando missões sustentáveis diárias — como economizar energia, reciclar ou usar transporte público. Cada missão tem uma pontuação diferente.',
  },
  {
    pergunta: 'Como os pontos viram dinheiro?',
    resposta:
      '100 SoulCoins = R$1,00 de crédito direto na sua conta de luz. O desconto é aplicado automaticamente na fatura do mês.',
  },
  {
    pergunta: 'Como a missão é validada?',
    resposta:
      'Você filma a ação realizando com seu rosto aparecendo. Nossa inteligência artificial analisa a imagem e confirma a missão em tempo real — sem autodeclaração, sem trapaça.',
  },
  {
    pergunta: 'O que são as ligas e comunidades?',
    resposta:
      'Você faz parte de um círculo de usuários. Esses círculos competem em ligas semanais — quanto mais sua comunidade age, mais SoulCoins todo mundo acumula junto.',
  },
  {
    pergunta: 'As missões são sempre as mesmas?',
    resposta:
      'Não! A IA gera missões diárias personalizadas com base no seu histórico, localização e na temporada ativa — sempre algo novo para fazer.',
  },
]
