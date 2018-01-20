# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x){
	return !!x;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);
isTruthy('');
isTruthy("");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy(2);
isTruthy(3);
isTruthy(4);
isTruthy(5);
isTruthy(6);
isTruthy(7);
isTruthy(8);
isTruthy(9);
isTruthy("Estou me tornando ninja?");

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
	marca: 'Ford',
	modelo: 'GT',
	placa: 'KKK-0000',
  ano: '2018',
  cor: 'Preto',
  quantasPortas: 2,
  assentos: 5,
  quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
	this.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
	return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
	return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
	return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
	return "Esse carro é um " + this.obterMarca() + " " + this.obterModelo();
}

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
carro.pessoasEntrandoNoCarro = function (pessoas) {
  this.assentos -= pessoas;
  this.quantidadePessoas += pessoas;

  if (this.quantidadePessoas > 5){
    this.quantidadePessoas = 5;
  }

  switch (this.assentos) {
    case 0:
      return "Já temos 5 pessoas no carro! O carro já está lotado!";
    case 1:
      return "Já temos 4 pessoa no carro! Só cabe mais 1 pessoa!";
    case 2:
      return "Já temos 3 pessoas no carro! Cabem mais 2 pessoas!"
    case 3:
      return "Já temos 2 pessoas no carro! Cabem mais 3 pessoas!";
    case 4:
      return "Já temos 1 pessoas no carro! Cabem mais 4 pessoas!";
    case 5:
      return "Não temos ninguém no carro! Ainda cabem 5 pessoas!";
    case -1:
      return "O carro já está lotado! Sobrou " + (-1 * this.assentos) + " pessoa!"
    default:
      return "O carro já está lotado! Sobraram " + (-1 * this.assentos) + " pessoas!"
  }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor; //Preto

// Mude a cor do carro para vermelho.
carro.cor = 'Vermelho';

// E agora, qual a cor do carro?
carro.cor; //Vermelho

// Mude a cor do carro para verde musgo.
carro.cor = 'Verde Musgo';

// E agora, qual a cor do carro?
carro.cor; //Verde Musgo

// Qual a marca e modelo do carro?
carro.marca; //Ford
carro.modelo; //GT

// Adicione 2 pessoas no carro.
carro.pessoasEntrandoNoCarro(2);

// Adicione mais 4 pessoas no carro.
carro.pessoasEntrandoNoCarro(4);

// Faça o carro encher.
"O carro já está lotado! Sobrou 1 pessoa!"

// Tire 4 pessoas do carro.
carro.pessoasEntrandoNoCarro(-4);

// Adicione 10 pessoas no carro.
carro.pessoasEntrandoNoCarro(10);

// Quantas pessoas temos no carro?
carro.quantidadePessoas; //"Já temos 5 pessoas no carro! O carro já está lotado!"
```
