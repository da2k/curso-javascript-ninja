# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a) {
	return a ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(null);
isTruthy(undefined);
isTruthy(false);
isTruthy('');
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy('0');
isTruthy(42);
isTruthy('Kevin Oliveira');
isTruthy({});
isTruthy([]);
isTruthy((30 + 30) / 2);
isTruthy('Hello, world!');
isTruthy('Kevin ' + 'Oliveira');
isTruthy('Javascript é ' + 10);


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
var Carro = {
	marca: 'Volkswagen',
	modelo: 'Fusca',
	placa: 'ABC-1234',
	ano: 1972,
	cor: 'Amarelo',
	quantasPortas: 2,
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
Carro.mudarCor = function(escolhaCor) {
	this.cor = escolhaCor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
Carro.obterCor = function() {
	return this.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
Carro.obterModelo = function() {
	return this.modelo;	
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
Carro.obterMarca = function() {
	return this.marca;	
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
Carro.obterMarcaModelo = function() {
	return 'Esse carro é um ' + this.marca + ' ' + this.modelo;
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
Carro.adicionarPessoas = function(n) {
	this.quantidadePessoas += n;

	var pessoaQtd = this.quantidadePessoas === 1 ? 'pessoa' : 'pessoas';
	var restanteAssentos = this.assentos - this.quantidadePessoas;
	

	if(this.quantidadePessoas === 5) {
		return 'O carro já está lotado!';
	} else if(n >= restanteAssentos) {
		return 'Só cabem mais ' + restanteAssentos + ' ' + pessoaQtd + '!';
	}  
	
	return 'Já temos ' + this.quantidadePessoas + ' ' + pessoaQtd + ' no carro!';	
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
Carro.obterCor(); // 'Amarelo';

// Mude a cor do carro para vermelho.
Carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?
Vermelho

// Mude a cor do carro para verde musgo.
Carro.mudarCor('Verde musgo');

// E agora, qual a cor do carro?
Verde musgo

// Qual a marca e modelo do carro?
Carro.obterMarcaModelo(); // 'Este carro é um Volkswagen Fusca'

// Adicione 2 pessoas no carro.
Carro.adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
Carro.adicionarPessoas(4);

// Faça o carro encher.
Carro.adicionarPessoas(2);

// Tire 4 pessoas do carro.
Carro.adicionarPessoas(-4);

// Adicione 10 pessoas no carro.
Carro.adicionarPessoas(10);

// Quantas pessoas temos no carro?
Carro.quantidadePessoas; // 14
```
