# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(parametro) {
... return parametro ? true : false;
... } ;


// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(null);
isTruthy(NaN);
 isTruthy(false);
isTruthy(undefined);
isTruthy('');
 isTruthy(-0);


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
isTruthy(true);
isTruthy(' ');
isTruthy(-1);
isTruthy('Isabel');
isTruthy([]);
isTruthy({});
isTruthy(10+5);
isTruthy(10-5);
isTruthy( { a: 1});




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
... marca:'fiat',
... modelo: 'Mobi 2018',
... placa: 'Ala 1212',
... ano:  2018,
... cor: 'azul',
... quantasPortas:4,
... assentos: 5,
... quantidadePessoas: 0
... }



/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
> carro.mudaCor = function(cor) {
... carro.cor = cor;
... }



/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
 carro.obterCor = function() {
... return carro.cor;
... };


/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo= function(){
... return carro.modelo;
... }


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
> carro.obterMarca = function() {
... return carro.marca;
... };


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
> carro.obterMarcaModelo = function(){
... return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo;
... }


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
carro.addpessoas= function (npessoas) {
... var totalpessoas = carro.quantidadePessoas + npessoas;
... if( carro.quantidadePessoas === carro.assentos && totalpessoas >= carro.assentos ) {
..... return 'O carro já esta lotado!';
..... }
... if ( totalpessoas > carro.assentos ) {
..... var qpc = carro.assentos - carro.quantidadePessoas;
..... var pous = qpc ===1 ? ' pessoa' : 'pessoas';
..... return 'Só cabem mais ' + qpc + pous + '!';
..... }
... carro.quantidadePessoas += npessoas;
... return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
... };



/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //azul

// Mude a cor do carro para vermelho.
carro.mudaCor('vermelho');


// E agora, qual a cor do carro?
 carro.obterCor(); // 'vermelho'


// Mude a cor do carro para verde musgo.
carro.mudaCor('Verde musgo');


// E agora, qual a cor do carro?
carro.obterCor(); //'Verde musgo'


// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // 'Esse carro é um fiat Mobi 2018'


// Adicione 2 pessoas no carro.
 carro.addpessoas(2); // 'Já temos 2 pessoas no carro!'


// Adicione mais 4 pessoas no carro.
 carro.addpessoas(4); // 'Só cabem mais 3pessoas!'



// Faça o carro encher.
 carro.addpessoas(3); // 'Já temos5pessoas no carro!'

// Tire 4 pessoas do carro.
 carro.addpessoas(-4); // 'Já temos 1 pessoas no carro!'


// Adicione 10 pessoas no carro.
 carro.addpessoas(10); // 'Só cabem mais 4pessoas!'


// Quantas pessoas temos no carro?
 carro.quantidadePessoas; //1

```
