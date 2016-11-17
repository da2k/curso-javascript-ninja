# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(valor){
 return valor ? true : false;
}; 

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(undefined);
isTruthy(null);
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1);
isTruthy('teste');
isTruthy(true);

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

var carro = {marca:'fiat', modelo:'stilo', placa:'ANK0987', ano:2009, cor:'prata', quantasPortas:4, assentos:5, quantidadePessoas:0 }

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(novaCor){
 carro.cor = novaCor; 
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function(){
 return carro.cor
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
 return carro.modelo
};


/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca= function(){
 return carro.marca
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function(){
 return 'Esse carro é um'+ ' ' + obterModelo() + ' ' + obterMarca();
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
var pessoas = function(recebePessoas){
  var dentroCarro = carro.quantidadePessoas + recebePessoas;
  var pessoaPessoas = carro.quantidadePessoas <= 1 ? 'pessoas' : 'pessoa'; 

  if (dentroCarro >= carro.assentos ){
   carro.quantidadePessoas += recebePessoas;
   return 'O carro já está lotado!';
  } else if (dentroCarro > carro.assentos) {
   return 'Só cabem mais ' + (carro.assentos - carro.quantidadePessoas) + ' ' + pessoaPessoas +'!';
  }
   carro.quantidadePessoas += recebePessoas;
   return 'Já temos ' + dentroCarro + ' pessoas no carro!';
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor // "prata"

// Mude a cor do carro para vermelho.
mudarCor('azul');

// E agora, qual a cor do carro?
carro.cor //"azul"

// Mude a cor do carro para verde musgo.
mudarCor('verde musgo');

// E agora, qual a cor do carro?
carro.cor // "verde musgo"

// Qual a marca e modelo do carro?
obterMarcaModelo() // "Esse carro é um stilo fiat"

// Adicione 2 pessoas no carro.

pessoas(2) // "Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.

pessoas(4) //"Só cabem mais 3 pessoa!"

// Faça o carro encher.

pessoas(3) // "O carro já está lotado!"

// Tire 4 pessoas do carro.

pessoas(-4) // "Já temos 1 pessoas no carro!"
// Adicione 10 pessoas no carro.

pessoas(10) //"Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1
```
