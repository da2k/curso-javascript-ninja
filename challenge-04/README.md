# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(param){
    return param ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(''); //false
isTruthy(""); //false
isTruthy(0); //false
isTruthy(-0); //false
isTruthy(undefined); //false
isTruthy(null); //false
isTruthy(NaN); //false
isTruthy(false); //false
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('teste'); //true
isTruthy(10); //true
isTruthy(-1); //true
isTruthy([1]); //true
isTruthy(Infinity); //true
isTruthy('false'); //true
isTruthy(true); //true
isTruthy({}); //true
isTruthy(function(){}); //true
isTruthy('0'); //true

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
	marca: '', 
	modelo: '',
	placa: '',
	ano: '',
	cor: '',
	quantasPortas: '',
	assentos: '',
	quantidadePessoas:'',	
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(corNova){
	return carro.cor = corNova;
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
carro.obterModelo = function() {
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
	return 'Esse Carro é um ' + carro.obterMarca() + ' do modelo:' + carro.obterModelo(); 
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
carro.adicionarPessoas = function(quantidadeAdd){
	return carro.quantidadePessoas >= carro.assentos ? 'O Carro já está lotado Já temos: ' + carro.quantidadePessoas + ' de pessoas no Carro! ' : 'Ainda Temos' + ( carro.assentos - (carro.quantidadePessoas = carro.quantidadePessoas + quantidadeAdd)); 
	
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor // ""

// Mude a cor do carro para vermelho.
carro.cor = 'Vermelho'; //"Vermelho"

// E agora, qual a cor do carro?
 //"Vermelho"

// Mude a cor do carro para verde musgo.
carro.cor = 'verde musgo'; //"verde musgo"

// E agora, qual a cor do carro?
//"verde musgo"

// Qual a marca e modelo do carro?
carro.modelo = 'Toyota'; // Toyota

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2); //"Ainda Temos3"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4);  //"O Carro já está lotado Já temos: 6 de pessoas no Carro! "

// Faça o carro encher.
carro.adicionarPessoas(10); //"O Carro já está lotado Já temos: 6 de pessoas no Carro! "

// Tire 4 pessoas do carro.
carro.removePessoas = function(quantidadePessoas) {
 	return carro.quantidadePessoas = carro.quantidadePessoas - quantidadePessoas;
};
carro.removePessoas(4); //2

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10); // "O Carro já está lotado Já temos: 6 de pessoas no Carro! "

// Quantas pessoas temos no carro?
// "O Carro já está lotado Já temos: 6 de pessoas no Carro! "
```
