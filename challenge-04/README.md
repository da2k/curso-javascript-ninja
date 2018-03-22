# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
  return !!x
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy("");
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy("string");
isTruthy(10);
isTruthy(true);
isTruthy({});
isTruthy([]);
isTruthy("acabou");
isTruthy("a");
isTruthy("criatividade");
isTruthy("desculpa");
isTruthy(":(");

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
  marca: "Fiat",
  modelo: "Gol",
  placa: "DEV-7070",
  ano: 2018,
  cor: "Prata",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor) {
  carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
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
carro.obterMarca = function() {
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
  return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
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
carro.addPessoas = function(qtd) {
  var qtdPessoas = 'pessoas';
  if (carro.quantidadePessoas === 4) {
    qtdPessoas = 'pessoa';
  }

  if (qtd > 5) {
    return "Você não pode adicionar mais de 5 pessoas no carro!"
  } else
    if((carro.quantidadePessoas + qtd) > 5){
      return "Só cabem mais " + (5 - carro.quantidadePessoas) + " " + qtdPessoas +  "!";
    } else
      if (carro.quantidadePessoas < 5 || qtd < 0) {
        carro.quantidadePessoas += qtd;
        return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
      } else {
          return "O carro já está lotado!";
        }
};

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //'Prata'

// Mude a cor do carro para vermelho.
carro.mudarCor("Preto"); //'Preto'

// E agora, qual a cor do carro?
carro.obterCor(); //'Preto'

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo"); //'Verde Musgo'

// E agora, qual a cor do carro?
carro.obterCor(); //'Verde Musgo'

// Qual a marca e modelo do carro?
carro.obterModelo(); //'Gol'

// Adicione 2 pessoas no carro.
carro.addPessoas(2); //'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4); //'Só cabem mais 3 pessoas!'

// Faça o carro encher.
carro.addPessoas(3); //'Já temos 5 pessoas no carro!'

// Tire 4 pessoas do carro.
carro.addPessoas(-4); //'Já temos 1 pessoas no carro!'

// Adicione 10 pessoas no carro.
carro.addPessoas(10); //'Você não pode adicionar mais de 5 pessoas no carro!'

// Quantas pessoas temos no carro?
carro.quantidadePessoas; //1
```
