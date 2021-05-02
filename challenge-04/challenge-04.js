// # Desafio da semana #4

// ```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = arg => !!arg;

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(false));
console.log(isTruthy(''));
console.log(isTruthy(""));
console.log(isTruthy(``));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(' '));
console.log(isTruthy(" "));
console.log(isTruthy(` `));
console.log(isTruthy(1));
console.log(isTruthy('Teste'));
console.log(isTruthy([]));
console.log(isTruthy({}));
console.log(isTruthy([1, 2, 3]));
console.log(isTruthy({ id: 12 }));
console.log(isTruthy(true));
console.log(isTruthy(function () { }));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro = {
  marca: 'Jeep',
  modelo: 'Renegade',
  placa: 'LTZ-0932',
  ano: 2027,
  cor: 'Prata',
  quantasPortas: 5,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
const mudarCor = cor => carro.cor = cor;

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
const obterCor = () => carro.cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
const obterModelo = () => carro.modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
const obterMarca = () => carro.marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
const obterMarcaModelo = () => `Esse carro é um ${obterMarca()} ${obterModelo()}.`;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
const addPessoas = (paramPessoas) => {
  let totalPessoas = carro.quantidadePessoas + paramPessoas;

  if (carro.quantidadePessoas === carro.assentos) {
    return 'O carro já está lotado';
  }


  if (totalPessoas > carro.assentos) {
    let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    let pluralSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';

    return `Só cabem mais ${quantasPessoasCabem} ${pluralSingular}.`;
  };


  carro.quantidadePessoas += paramPessoas;

  return `Já temos ${carro.quantidadePessoas} pessoas no carro.`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(obterCor()); // Prata

// Mude a cor do carro para vermelho.
mudarCor('Vermelho');

// E agora, qual a cor do carro?
console.log(obterCor()); // Vermelho

// Mude a cor do carro para verde musgo.
mudarCor('Verde musgo');

// E agora, qual a cor do carro?
console.log(obterCor()); // Verde musgo

// Qual a marca e modelo do carro?
console.log(obterMarcaModelo()); // Esse carro é um Jeep Renegade

// Adicione 2 pessoas no carro.
console.log(addPessoas(2)); // Já temos 2 pessoas no carro.

// Adicione mais 4 pessoas no carro.
console.log(addPessoas(4)); // Só cabem mais 3 pessoas.

// Faça o carro encher.
console.log(addPessoas(3));
console.log(addPessoas(1)); // O carro já está lotado

// Tire 4 pessoas do carro.
console.log(addPessoas(-4));

// Adicione 10 pessoas no carro.
console.log(addPessoas(10)); // O carra já está lotado

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 5
