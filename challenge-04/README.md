# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(param) {
	return !!param;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(NaN);
isTruthy(null);
isTruthy(undefined);
isTruthy('');
isTruthy(0);
isTruthy(-0);
isTruthy(false);


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

isTruthy(1);
isTruthy(2 + 5);
isTruthy(3);
isTruthy(4);
isTruthy(function() {});
isTruthy("1");
isTruthy("0");
isTruthy({});
isTruthy([]);
isTruthy({chave: "valor", chave2: "valor"});
isTruthy([2,3,1,5]);


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
var carro  = {
	marca: "Peugeot",
	modelo: "307",
	placa: "MAR-2609",
	ano: 2015,
	cor: "Prata",
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor(novaCor) {
	return carro.cor = novaCor; 
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor() {
	return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo() {
	return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca() {
	return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo() {
	return "Esse carro é um " + obterMarca() + " "+ obterModelo();
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

function receberPassageiros(qtdPessoas) {
	
	var totalPessoas = carro.quantidadePessoas + qtdPessoas;
	var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
	var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';

	if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) {
		return 'O carro já está lotado!';
	}

	if( totalPessoas > carro.assentos ) {
		return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!';
	}

	carro.quantidadePessoas += qtdPessoas;
	return 'Já temos ' + carro.quantidadePessoas + 'pessoas no carro!';

	// if( carro.quantidadePessoas >= carro.assentos ) { // Verifica se o carro está cheio
	// 	return "O carro já está lotado!";
	// } else if( carro.quantidadePessoas < carro.assentos ) { // Verifica caso o numero de passageiros novos é maior que o numero de lugares livres
	// 	if( qtdPessoas + carro.quantidadePessoas > carro.assentos ) {
	// 		var diff = carro.assentos - carro.quantidadePessoas;
	// 		var genero = diff == 1 ? 'pessoa' : 'pessoas' ;
	// 		return "Só cabem mais " + diff + " " + genero + "!";
	// 	} else { // Caso o carro possua tranquilamente lugares vazios, adiciona pessoas
	// 		carro.quantidadePessoas += qtdPessoas;
	// 		return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
	// 	}
	// } else {
	// 	return "Error";
	// }
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor(); // => "Prata"

// Mude a cor do carro para vermelho.
mudarCor('Vermelho');

// E agora, qual a cor do carro?
obterCor(); // => "Vermelho"

// Mude a cor do carro para verde musgo.
mudarCor('verde musgo');

// E agora, qual a cor do carro?
obterCor(); // => "verde musgo"

// Qual a marca e modelo do carro?
obterMarca(); // => 'Peugeot'
obterModelo(); // => '307'

// Adicione 2 pessoas no carro.
receberPassageiros(2); // => 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
receberPassageiros(4); // => 'Só cabem mais 3 pessoas'

// Faça o carro encher.
receberPassageiros(3); // => 'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
carro.quantidadePessoas -= 4;

// Adicione 10 pessoas no carro.
receberPassageiros(10); // => 'Só cabem mais 4 pessoas'

// Quantas pessoas temos no carro?
1
```
