# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = (x) => {	

	return !!x;

};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null);
isTruthy(undefined);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('oi');
isTruthy(null);
isTruthy(1);
isTruthy(523);
isTruthy('ads43');
isTruthy(-43);
isTruthy('Silicon Valey');
isTruthy('Mr. Robot');
isTruthy(obj = {});
isTruthy(array = []);

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
let carro = {
	marca: 'Chevrolet',
	modelo: 'Prisma',
	placa: 'HEX-0049',
	ano: 2018,
	cor: 'prata',
	quantasPortas: 4,
	assentos: 5,
	quantidadeDePessoas:0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (cor) => {

	carro.cor = cor;

}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {

	return carro.cor;

}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {

	return carro.modelo;

}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {

	return carro.marca;

}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {

	return `Esse carro é um ${carro.marca} ${carro.modelo}`;

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
carro.addPessoas = (numeroPessoa) => {

	let totalPessoas = carro.quantidadeDePessoas + numeroPessoa;
  let pessoas;
  let n;

	if (carro.quantidadeDePessoas === carro.assentos && totalPessoas >= carro.assentos) {

		return 'O carro já está lotado!';

	}

	if (totalPessoas > carro.assentos) {

		n = carro.assentos - carro.quantidadeDePessoas;
		n === 1 ? pessoas = 'pessoa' : pessoas = 'pessoas';
		return `Só cabem mais ${n} ${pessoas}!`;

	}

	carro.quantidadeDePessoas += numeroPessoa;
	return `Já temos ${totalPessoas} pessoas no carro.`;

}

// return 'Já temos '+carro.quantidadeDePessoas+' pessoas no carro!';
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // 'prata'

// Mude a cor do carro para vermelho.
carro.mudarCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); // 'vermelho'

// Mude a cor do carro para verde musgo.
carro.mudarCor('verde musgo');	

// E agora, qual a cor do carro?
carro.obterCor(); // 'verde musgo'

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'Esse carro é um Chevrolet Prisma'

// Adicione 2 pessoas no carro.
carro.addPessoas(2); // 'Já temos 2 pessoas no carro.'

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4); // 'Só cabem mais 3 pessoas!'

// Faça o carro encher.
carro.addPessoas(3); // 'Já temos 5 pessoas no carro.'

// Tire 4 pessoas do carro.
carro.addPessoas(-4); // 'Já temos 1 pessoas no carro.'

// Adicione 10 pessoas no carro.
carro.addPessoas(10); // 'Só cabem mais 4 pessoas!'
// Quantas pessoas temos no carro?
carro.quantidadeDePessoas; // 1
```
