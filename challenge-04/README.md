# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(valor) {
	return !!valor === true ? "true" : "false";
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy();
isTruthy(null);
isTruthy(NaN);
isTruthy("");
isTruthy(0);
isTruthy(-0);
isTruthy(undefinid);
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
isTruthy("Vladimir");
isTruthy("Mimi");
isTruthy(11);
isTruthy(true);
isTruthy(1);
isTruthy(-1);
isTruthy(!false);
isTruthy(!!10);
isTruthy(!!true);

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
	marca: 'Corola',
	modelo: 'Sport',
	placa: 'VAK11',
	ano: '2022',
	cor: 'azul claro',
	quantasPortas: 4,
	assentos: 4,
	quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (corNova) => {
	carro.cor = corNova;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
	console.log("Agora a cor é " +carro.cor);
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
	console.log("Modelo: " +carro.modelo);
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
	console.log("Marca: " +carro.marca);
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
	console.log("Esse carro é um " +carro.marca+ " " +carro.modelo);
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
carro.addPessoas = (numeroPessoas) => {
	var disponivel = carro.assentos - carro.quantidadePessoas;
	carro.quantidadePessoas += numeroPessoas;

	if(carro.quantidadePessoas <= carro.assentos){
		console.log("Já temos "+carro.quantidadePessoas+" pessoas no carro!");

	} else if(disponivel == 1) {
		console.log( "Só cabe mais 1 pessoa!");
		
	} else if(disponivel > 1){
		console.log("Só cabem mais "+disponivel+" pessoas!");
		carro.quantidadePessoas -= numeroPessoas;
	} else {
		console.log("O carro já está lotado!");
		carro.quantidadePessoas -= numeroPessoas;
	}
	
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor //Azul Claro

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho")

// E agora, qual a cor do carro?
carro.cor //Vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo")

// E agora, qual a cor do carro?
carro.cor // Verde Musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo() //Esse carro é um Corola Sport

// Adicione 2 pessoas no carro.
carro.addPessoas(2) // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4) // Só cabem mais 2 pessoas!


// Faça o carro encher.
carro.addPessoas(2) // Já temos 2 pessoas no carro!

// Tire 4 pessoas do carro.
carro.addPessoas(-4) // Já temos 0 pessoas no carro!

// Adicione 10 pessoas no carro.
carro.addPessoas(10) // Só cabe mais 4 pessoas

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 0
```
