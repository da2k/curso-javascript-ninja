# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(bool) {
	return bool ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0) // false
isTruthy(-0) // false
isTruthy(undefined) // false
isTruthy(null) // false
isTruthy(false) // false
isTruthy('') // false
isTruthy(NaN) // false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true) // true
isTruthy(1) // true
isTruthy({}) // true
isTruthy([]) // true
isTruthy('teste') // true
isTruthy(function(){}) // true
isTruthy(-1) // true
isTruthy(Infinity) // true
isTruthy(-Infinity) // true
isTruthy(['ola', 2]) // true

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
	marca: 'FIAT',
	modelo: 'Pálio',
	placa: 'ccj0299',
	ano: 2018,
	cor: 'azul',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(novaCor) {
	carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
	return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
	return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
	return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
	return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
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
carro.adicionaPessoasCarro = function(numeroPessoas) {
	var totalDePessoas = carro.quantidadePessoas + numeroPessoas;
	var sobraLugares = carro.assentos - carro.quantidadePessoas;
	var palavrasPlural = ['cabem', 'pessoas'];
	var palavrasSingular = ['cabe', 'pessoa'];
	var palavraPluralOuSingular = sobraLugares === 1 ? palavrasSingular : palavrasPlural;

	if (carro.quantidadePessoas === carro.assentos && totalDePessoas >= carro.assentos) {
		return 'O carro já está lotado!';
	}

	if (totalDePessoas > carro.assentos) {
		return 'Só ' +palavraPluralOuSingular[0]+ ' mais ' + sobraLugares + ' ' +palavraPluralOuSingular[1];
	}

	if (totalDePessoas <= carro.assentos) {
		carro.quantidadePessoas = totalDePessoas;
	}

	return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor // azul

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // vermelho

// Mude a cor do carro para verde musgo.
carro.mudaCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // Esse carro é um FIAT Pálio.

// Adicione 2 pessoas no carro.
carro.adicionaPessoasCarro(2); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.adicionaPessoasCarro(4); // Só cabem mais 3 pessoas

// Faça o carro encher.
carro.adicionaPessoasCarro(3) // Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
carro.adicionaPessoasCarro(-4) // Já temos 1 pessoas no carro!

// Adicione 10 pessoas no carro.
carro.adicionaPessoasCarro(10); // Só cabem mais 4 pessoas

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1
```
