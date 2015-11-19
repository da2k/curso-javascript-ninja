# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function( argumento ) {
  return argumento ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
//false
isTruthy(NaN);
//false
isTruthy(undefined);
//false
isTruthy(null);
//false
isTruthy(false);
//false
isTruthy('');
//false
isTruthy("");
//false
isTruthy(-0);
//false
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
//true
isTruthy('Olá');
//true
isTruthy(true);
//true
isTruthy(20);
//true
isTruthy("huehue");
//true
isTruthy(10);
//true
isTruthy(-258);
//true
isTruthy(99);
//true
isTruthy(999999);
//true
isTruthy(2);
//true

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
  marca: 'Ford',
  modelo: 'Ka',
  placa: 'EEE-9969',
  ano: 2011,
  cor: 'branco',
  quantasPortas: 3,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function( novaCor ) {
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
carro.adicionando = function( addPessoas ) {
  var totalPessoas = carro.quantidadePessoas + addPessoas;

  if( totalPessoas < carro.assentos ) {
    carro.quantidadePessoas += addPessoas;
    var plural = carro.quantidadePessoas === 1 ? 'pessoa' : 'pessoas';
    return 'Já temos ' + carro.quantidadePessoas + ' ' + plural + ' no carro!';
  }

  if( totalPessoas === carro.assentos ) {
    carro.quantidadePessoas += addPessoas;
    return 'O carro já está lotado!';
  }

  if( totalPessoas > carro.assentos ) {
    var disponivel = carro.assentos - carro.quantidadePessoas;
    var plural = disponivel === 1 ? 'pessoa' : 'pessoas';
    return 'Só cabem mais ' + disponivel + ' ' + plural + '!';
  }
};
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //branco

// Mude a cor do carro para vermelho.
carro.mudaCor('vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); //vermelho

// Mude a cor do carro para verde musgo.
carro.mudaCor('verde musgo');

// E agora, qual a cor do carro?
carro.obterCor(); //verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //Esse carro é um ford Ka

// Adicione 2 pessoas no carro.
carro.adicionando(2);//"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionando(4);//"Só cabem mais 3 pessoas!"

// Faça o carro encher.
carro.adicionando(3);//"O carro já está lotado!"

// Tire 4 pessoas do carro.

carro.tirando = function( removePessoas ) {
  var totalPessoas = carro.quantidadePessoas - removePessoas;

  if( totalPessoas > 0 ) {
    carro.quantidadePessoas -= removePessoas;
    var plural = carro.quantidadePessoas === 1 ? 'pessoa' : 'pessoas';
    return 'Ainda temos ' + carro.quantidadePessoas + ' ' + plural + ' no carro!';
  }

  if( totalPessoas === 0 ) {
    carro.quantidadePessoas -= removePessoas;
    return 'O carro já está vaziu!';
  }

  if( totalPessoas < 0 ) {
    return 'Não existem pessoas suficientes para serem removidas!';
  }
};

carro.tirando(4);//"Ainda temos 1 pessoa no carro!"

// Adicione 10 pessoas no carro.
carro.adicionando(10);//"Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas;//1
```
