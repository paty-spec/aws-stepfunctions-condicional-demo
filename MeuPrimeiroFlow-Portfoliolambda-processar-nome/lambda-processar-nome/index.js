export const handler = async (event) => {
  // 1. O Step Functions enviará o input como { "nome": "..." }
  // 2. O código processa e retorna o nome em maiúsculas
  const nome = event.nome.toUpperCase(); 
  
  // A saída desta Lambda é a entrada para o próximo passo (Choice State)
  return { nomeProcessado: nome };
};