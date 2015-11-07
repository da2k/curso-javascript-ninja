//# Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(y) {
	return y ? true: false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));
console.log(isTruthy(undefined))
console.log(isTruthy(null))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(10 * 2))
console.log(isTruthy(true))
console.log(isTruthy([]))
console.log(isTruthy(8 > 7.7999))
console.log(isTruthy(typeof isTruthy))
console.log(isTruthy(-666))
console.log(isTruthy({}))
console.log(isTruthy('A novinha não me quer só porque eu vim da roça?'))
console.log(isTruthy(4/4))
console.log(isTruthy(2 << 1))

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
	marca: "Hyundai",
	model: "Tucson",
	placa: "ABC-1234",
	ano: 2015,
	cor: "Preto",
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
};


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(newColor) {
	this.cor = newColor;
}


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
	return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModel = function() {
	return carro.model;
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

carro.obterModelo = function() {
	return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModel();
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
carro.setPeople = function(pessoas) {
	var resto = (this.assentos - this.quantidadePessoas)

	if(this.quantidadePessoas == this.assentos)
		return "O carro já está lotado!"
	else if(pessoas > resto)
		return "Só cabem mais " + resto + " pessoas!"
	else {
		this.quantidadePessoas += pessoas;

		return "Já temos " + this.quantidadePessoas + " " + ( resto == 1 ? "pessoa" : "pessoas" ) + " no carro!";
	}
}

carro.removePeople = function(pessoas) {
	if(pessoas > this.quantidadePessoas)
		this.quantidadePessoas = 0;
	else
		this.quantidadePessoas -= pessoas;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor()) // Preto


// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho')

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde-Musgo')

// E agora, qual a cor do carro?
console.log(carro.obterCor()) // Verde Musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarca()) // Hyundai
console.log(carro.obterModel()) // Tucson

// Adicione 2 pessoas no carro.
console.log(carro.setPeople(2)) // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.setPeople(4)) // Só cabem mais 3 pessoas no carro.

// Faça o carro encher.
console.log(carro.setPeople(carro.assentos)) // Só cabem mais 3 pessoas no carro.

// Tire 4 pessoas do carro.
carro.removePeople(4); // 0

// Adicione 10 pessoas no carro.
console.log(carro.setPeople(10)) // Só cabem mais 5 pessoas no carro. (TODOS FORAM REMOVIDOS)

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas) // (0)