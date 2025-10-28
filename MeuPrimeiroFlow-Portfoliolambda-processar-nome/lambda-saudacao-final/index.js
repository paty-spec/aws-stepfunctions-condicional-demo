export const handler = async (event) => {
  // O input recebido é a saída da Lambda anterior: { "nomeProcessado": "..." }
  const nome = event.nomeProcessado;
  const mensagem = `🥳 PARABÉNS, ${nome}! Você é um convidado especial.`;
  
  return { resultado: mensagem };
};