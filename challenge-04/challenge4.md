/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(x) {
	return x ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

 
isTruthy(0);
isTruthy(-0);
isTruthy(false);
isTruthy(null);
isTruthy(NaN);
isTruthy(undefined);
isTruthy('');
isTruthy("");


//Invoque a função criada acima passando como parâmetro 10 valores `truthy`.

isTruthy(1);
isTruthy('igor');
isTruthy(' ');
isTruthy(true);
isTruthy('12');
isTruthy(-10);
isTruthy(1.50);
isTruthy('thurow');
isTruthy("thurow");
isTruthy('whatever');



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

var carro = {marca: 'Ford', modelo: 'Ka', placa: 'IDC 3088', ano: 2017, cor: 'Preto', quantasPortas: 4, assentos: 5, quantidadePessoas: 0};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(x){
	carro.cor = x;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
	return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
	return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
	return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
	return 'Este carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo()
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


carro.pessoasEntrando = function(x){
	if (carro.quantidadePessoas <= 4 && (x + carro.quantidadePessoas) > carro.assentos) {
		var pessoasQueCabem = (carro.assentos - carro.quantidadePessoas);
		var pessoa = pessoasQueCabem === 1 ? ' pessoa' : ' pessoas';
		var cabe = pessoasQueCabem === 1 ? ' cabe' : ' cabem';
		return 'Só' + cabe + ' mais ' + pessoasQueCabem + pessoa;
	}; 
	else if (carro.quantidadePessoas >= carro.assentos) { 
		return 'O carro já está lotado'
	};
	else {
		carro.quantidadePessoas += x;
		var pessoa = carro.quantidadePessoas === 1 ? 'pessoa' : 'pessoas';
		return 'Já temos ' + carro.quantidadePessoas + ' ' + pessoa + ' no carro!';
	};
};


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.obterCor() //'Azul'

// Mude a cor do carro para vermelho.

carro.mudarCor('vermelho')

// E agora, qual a cor do carro?

carro.obterCor() // 'vermelho'

// Mude a cor do carro para verde musgo.

carro.mudarCor('verde musgo')

// E agora, qual a cor do carro?

carro.obterCor() // 'verde musgo'

// Qual a marca e modelo do carro?

carro.obterMarcaModelo() // "Este carro é um Ford Ka"

// Adicione 2 pessoas no carro.

carro.pessoasEntrando(2) // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.

carro.pessoasEntrando(4) // "Só cabem mais 3 pessoas"

// Faça o carro encher.

carro.pessoasEntrando(3) // "Já temos 5 pessoas no carro!" (Neste caso, eu quis informar ao usuário que "já há 5 pessoas no carro" ao invés de "o carro está lotado. Esta segunda irá aparecer quando o carro de fato já encheu e já informou ao usuário que já havia 5 pessoas no carro. Evita que por exemplo carro.pessoasEntrando(5) informe: Carro está lotado")

// Tire 4 pessoas do carro.

carro.quantidadePessoas = 4

// Adicione 10 pessoas no carro.

carro.pessoasEntrando(10) // "Só cabe mais 1 pessoa"

// Quantas pessoas temos no carro?

carro.quantidadePessoas // 4
