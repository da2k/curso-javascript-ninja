//# Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function( x ){
	return !!x ;	
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy();
isTruthy( null );
isTruthy( NaN );
isTruthy( undefined );
isTruthy( false );
isTruthy( 0 );
isTruthy( -0 );
isTruthy( '' );

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy( { } );
isTruthy( [ 2 , 3 , 4 ] );
isTruthy( 'Olá' );
isTruthy( 1 );
isTruthy( 15 );
isTruthy( [ ] );
isTruthy( { x: 3, y: 4 } );
isTruthy( true );
isTruthy( "Meu nome é Clara" );
isTruthy( [ '1', 2, '3', 4 ] );

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
	marca: 'Fiat',
	modelo: 'Palio',
	placa: 'JJJ-0000',
	ano: 2015,
	cor: 'Cinza',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function( novaCor ){
	carro.cor = novaCor;
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
carro.adicionarPessoas = function( num ){
	var total = carro.quantidadePessoas + num;
	if ( carro.quantidadePessoas === carro.assentos && total >= carro.assentos ){
		return 'O carro já está lotado!';		
	} 
	if( total > carro.assentos ){
		var livre = carro.assentos - carro.quantidadePessoas;
		var art = livre === 1 ? art = 'pessoa' : art = 'pessoas';
		return 'Só cabe mais ' + livre + ' ' + art + '!'; 
	}
	carro.quantidadePessoas += num;
	return 'Já temos ' + total + ' pessoas no carro';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); // Cinza

// Mude a cor do carro para vermelho.
carro.mudaCor( 'Vermelho' ); // Vermelho

// E agora, qual a cor do carro?
carro.obterCor(); // Vermelho

// Mude a cor do carro para verde musgo.
carro.mudaCor( 'Verde Musgo' ); // Verde Musgo

// E agora, qual a cor do carro?
carro.obterCor(); // Verde Musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'Esse carro é um Fiat Palio'

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); // 'Já temos 2 pessoas no carro'

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4); // 'Só cabe mais 3 pessoas!'

// Faça o carro encher.
carro.adicionarPessoas(3); // 'Já temos 5 pessoas no carro'

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4); // 'Já temos 1 pessoa no carro'

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // 'Só cabe mais 4 pessoas!'

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1
