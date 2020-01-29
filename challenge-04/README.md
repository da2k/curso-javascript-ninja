# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
  return !!x;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy();
isTruthy(0);
isTruthy("");
isTruthy(NaN);
isTruthy(null);
isTruthy(false);
isTruthy(undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(-10);
isTruthy(-0.71);
isTruthy(0.1);
isTruthy(1);
isTruthy({});
isTruthy({ Hello: "World!" });
isTruthy([]);
isTruthy([10, "Texto"]);
isTruthy(true);
isTruthy("Test");
isTruthy(isTruthy());

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
var carro = {
  marca: "Marca legal",
  modelo: "Modelo legal",
  placa: "ABC-123",
  ano: 2020,
  cor: "Preto",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor) {
  carro.cor = novaCor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
  return `Esse carro é um ${carro.marca} ${carro.modelo}`;
};

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
carro.adicionarPessoas = function(novasPessoas) {
  var lugaresDisponiveis = carro.assentos;
  var plural;

  if (lugaresDisponiveis == 0 && novasPessoas > 0) {
    return `O carro ja está lotado!`;
  } else if (novasPessoas > lugaresDisponiveis && lugaresDisponiveis == 1) {
    plural = "pessoa";

    return `Só cabem mais ${lugaresDisponiveis} ${plural}!`;
  } else if (novasPessoas > lugaresDisponiveis && lugaresDisponiveis > 1) {
    plural = "pessoas";

    return `Só cabem mais ${lugaresDisponiveis} ${plural}!`;
  }

  carro.quantidadePessoas += novasPessoas;
  carro.assentos -= novasPessoas;

  if (carro.quantidadePessoas === 1) {
    plural = "pessoa";
  } else {
    plural = "pessoas";
  }

  return `Já temos ${carro.quantidadePessoas} ${plural} no carro!`;
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.cor); // Preto

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho");

// E agora, qual a cor do carro?
console.log(carro.cor); // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo");

// E agora, qual a cor do carro?
console.log(carro.cor); // Verde Musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); // Esse carro é um "Marca legal" "Modelo legal"

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.
carro.adicionarPessoas(3); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); // Já temos 1 pessoa no carro!

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas); // 1

```
