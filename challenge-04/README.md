# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
//Minha primeira tentativa foi assim:

var isTruthy = function(a) {
	if (
		a === 0 ||
		a === -0 ||
		a === undefined ||
		a === null ||
		a === false ||
		a === NaN ||
		a === ''
	) {
		return false
	} else {
		return true
	}
}

// Minha segunda ideia de tentativa foi assim:

var isTruthy = function(a) {
	//returna o tipo da variável booleana === truthy ou falsy
	return !!a
}

// Terceira tentativa, vendo a correção:

var isTruthy = function(a) {
	return a ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0) //false
isTruthy(-0) //false
isTruthy(undefined) //false
isTruthy(null) //false
isTruthy(false) //false
isTruthy(NaN) //false
isTruthy('') //false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10) //true
isTruthy('0') //true
isTruthy('Tokyo') //true
isTruthy({}) //true
isTruthy([]) //true
isTruthy('false') //true
isTruthy(function a() {}) //true
isTruthy(function b() {
	return false
}) //true
isTruthy(25 * 320) //true
isTruthy(-1) //true
isTruthy({ a: false, b: 5 }) //true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):

* `marca` - String
* `modelo` - String
* `placa` - String
* `ano` - Number
* `cor` - String
* `quantasPortas` - Number
* `assentos` - Number - cinco por padrão
* `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
	marca: 'Honda',
	modelo: 'Civic',
	placa: 'ABC-1234',
	ano: 2018,
	cor: 'Branco Tafetá',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor) {
	carro.cor = novaCor
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
	return carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
	return carro.modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
	return carro.marca
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA][modelo]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
	return `Esse carro é um ${carro.marca} ${carro.modelo}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

* Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
	número não precisa encher o carro, você poderá acrescentar as pessoas aos
	poucos.
* O método deve retornar a frase: "Já temos [X] pessoas no carro!"
* Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
	deve retornar a frase: "O carro já está lotado!"
* Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
	parâmetro for ultrapassar o limite de assentos do carro, então você deve
	mostrar quantos assentos ainda podem ser ocupados, com a frase:
	"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
* Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
	citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(num) {
	var total = this.assentos
	var qtdPessoasCarro = this.quantidadePessoas
	var qtdRestante = total - qtdPessoasCarro

	if (qtdPessoasCarro === total) {
		return `O carro já está lotado! Já temos ${qtdPessoasCarro} pessoas no carro!`
	} else if (qtdPessoasCarro < total) {
		if (num > qtdRestante) {
			return `Número muito grande! Só cabem mais ${qtdRestante} pessoas!`
		} else {
			this.quantidadePessoas += num

			qtdRestante -= num
			return `${num} pessoas entraram no carro. Restam apenas ${qtdRestante} lugares`
		}
	}
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() //Branco Tafetá

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho')

// E agora, qual a cor do carro?
carro.obterCor() //Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde musgo')

// E agora, qual a cor do carro?
carro.obterCor() //Verde musgo

// Qual a marca e modelo do carro?

carro.obterMarcaModelo() //Esse carro é um Honda Civic

// Adicione 2 pessoas no carro.
carro.addPessoas(2) // 2 pessoas entraram no carro. Restam apenas 3 lugares

// Adicione mais 4 pessoas no carro.
carro.addPessoas(5) //Número muito grande! Só cabem mais 3 pessoas!

// Faça o carro encher.
carro.addPessoas(3) // 3 pessoas entraram no carro. Restam apenas 0 lugares

// Tire 4 pessoas do carro.
carro.removePessoas = function(num) {
	if (num > carro.quantidadePessoas) {
		return 'Quantidade retirada não pode ser maior que a existente'
	} else {
		this.quantidadePessoas -= num

		return `Você removeu ${num} pessoas. Ainda há ${
			this.quantidadePessoas
		} pessoas no carro.`
	}
}

carro.removePessoas(4) //Você removeu 4 pessoas. Ainda há 1 pessoas no carro.

// Adicione 10 pessoas no carro.
carro.addPessoas(10) //Número muito grande! Só cabem mais 5 pessoas!

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1
```
