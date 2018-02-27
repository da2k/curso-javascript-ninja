/*
Hora de finalizar nosso projeto!

Já temos o cadastro funcionando e persistindo em memória;
Já estamos deletando o carro da tabela (no frontend).

Mas se você perceber, se você recarregar a tela, o carro ainda vai estar lá.
Agora você precisa fazer com que, ao clicar no botão de deletar, o carro seja
removido da tabela e também seja deletado do servidor.

Para fazer isso, você precisa enviar o verbo HTTP "DELETE" para a mesma URL
que você faz o POST para cadastrar o carro:
`http://localhost:3000/car`, só que, ao invés de enviar todas as informações
do carro, como você faz para cadastrar, você deve enviar somente a placa
do carro.

Fazendo isso, ao recarregar a tela, a tabela deve mostrar os carros atualizados.

A lógica do servidor que está criada nesso diretório desse desafio é o mesmo
do desafio anterior, com a diferença que, nesse desafio, nós temos a
implementação da regra para a deleção do carro =)

A regra é a mesma das anteriores: crie uma branch `challenge-33` no seu
repositório do GitHub, e envie o pull request para lá.

Depois, envie um pull request no repositório do curso, colocando no console.log
abaixo a URL do pull request no seu repositório.
*/
console.log('Link do pull request do seu projeto');
