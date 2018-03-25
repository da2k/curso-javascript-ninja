# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(argumentoBooleano) {
  return !!argumentoBooleano;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(undefined);
isTruthy(0);
isTruthy('');
isTruthy(null);
isTruthy(-0);
isTruthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('Davi');
isTruthy(1);
isTruthy('teste');
isTruthy(function(){});
isTruthy([]);
isTruthy(19);
isTruthy([19,91]);
isTruthy({});
isTruthy({a{}});
isTruthy('finalmente acabou');

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
  marca: "bmw",
  modelo: "i500",
  placa: "top4956",
  ano: 2016,
  cor: "branco",
  quantasPortas: 5,
  assentos: 5,
  quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor) {
  carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
  return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
  return carro.modelo;
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
carro.obterMarcaModelo = function() {
  return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
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
carro.adicionaPessoa = function(numPessoa) {
  var pessoasNoCarro = carro.quantidadePessoas + numPessoa;
  if (carro.quantidadePessoas === carro.assentos && pessoasNoCarro >= carro.assentos) {
    return 'o carro já está lotado!';
  }
  if (pessoasNoCarro > carro.assentos) {
    var cabemAinda = carro.assentos - carro.quantidadePessoas;
    var singularOuPluralPessoa = cabemAinda == 1 ? 'pessoa' : 'pessoas';
    var singularOuPluralCabe = cabemAinda == 1 ? 'cabe' : 'cabem';
    return 'Só ' + singularOuPluralCabe + ' mais ' + cabemAinda + ' ' +  singularOuPluralPessoa;
  }
  carro.quantidadePessoas += numPessoa;
  return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor()//branco

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
carro.obterCor();//vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
carro.obterCor();//verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();//Esse carro é um  bwm i500

// Adicione 2 pessoas no carro.
carro.adicionaPessoa(2);//Já temos 2 pessoa no carro!

// Adicione mais 4 pessoas no carro.
carro.adicionaPessoa(40);//Só cabem mais 3 pessoas

// Faça o carro encher.
carro.adicionaPessoa(3);//Já temos 5 pessoas no carro

// Tire 4 pessoas do carro.
carro.adicionaPessoa(-4);//Já temos 1 pessoa no carro;

// Adicione 10 pessoas no carro.
carro.adicionaPessoa(10);//Só cabem mais 4 pessoas

// Quantas pessoas temos no carro?
carro.quantidadePessoas; // 1
```
