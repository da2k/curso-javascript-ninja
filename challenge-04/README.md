# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
?

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?

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
	marca: 'hyundai',
	modelo: 'i30',
	placa: 'PPP5432',
	ano: 2015,
	cor: 'prata',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0,
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function (cor) {
	this.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.mudarCor = function () {
	return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function () {
	return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function () {
	return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function() {
	return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`
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

carro.addPessoas = function(quantidade) {
	var pessoas = 'pessoas';
  
  if (quantidade > 0) {
    return 'Não pode retirar pessoas do carro!';
  }

    if (this.quantidadePessoas >= 5) {
      return 'O carro já está lotado!';
    }

    if ((this.quantidadePessoas + quantidade) > 5) {
      var restante = 5 - this.quantidadePessoas;
        if (restante === 1) {
          pessoas = 'pessoa';
          return `Só cabem mais ${restante} ${pessoas}`;
        }
      return `Só cabem mais ${restante} ${pessoas}`
    }

	this.quantidadePessoas += quantidade;

	if (this.quantidadePessoas === 1) {
			pessoas = 'pessoa';
			return `Já temos ${this.quantidadePessoas} ${pessoas} no carro!`;
		}

	return `Já temos ${this.quantidadePessoas} ${pessoas} no carro!`;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.cor; // prata

// Mude a cor do carro para vermelho.

carro.mudarCor('vermelho');

// E agora, qual a cor do carro?

carro.cor; // vermelho

// Mude a cor do carro para verde musgo.

carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?

carro.cor; // verde musgo

// Qual a marca e modelo do carro?

carro.obterMarcaModelo(); // Esse carro é um hyundai i30

// Adicione 2 pessoas no carro.

carro.addPessoas(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.

carro.addPessoas(4); // Só cabem mais 3 pessoas!

// Faça o carro encher.

carro.addPessoas(3); // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.

carro.addPessoas(-4) // Não pode retirar pessoas do carro!

// Adicione 10 pessoas no carro.

addPessoas(10); // O carro já está lotado!

// Quantas pessoas temos no carro?

carro.quantidadePessoas; // 5
```
