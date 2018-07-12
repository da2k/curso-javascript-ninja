# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(checagem){
  return checagem ? true : false
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
/*
  isTruthy("");
  isTruthy(0);
  isTruthy(-0);
  isTruthy(NaN);
  isTruthy(undefined);
  isTruthy(false);
  isTruthy(null);
 */

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

/*
  isTruthy("1");
  isTruthy(1);
  isTruthy("rachel");
  isTruthy(true);
  isTruthy(2.8);
  isTruthy("300");
  isTruthy([0,0,0,0]);
  isTruthy("uma frase muito grande pode ser Falsy (ou não)");
  isTruthy("(null)");
  isTruthy({});
*/

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
  marca: "fiat",
  modelo: "uno",
  placa: "abc1234",
  ano: 2014,
  cor: "branco",
  quantasPortas: 2,
  assentos: 5,
  quantidadeDePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(NovaCor){
  carro.cor = NovaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
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
carro.obterMarca = function(){
  return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
  return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo()
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

carro.adicionarPessoa = function(quantiaPessoas){
  var somaPessoas = quantiaPessoas + carro.quantidadeDePessoas;
  var lugaresDisponiveis = carro.assentos - carro.quantidadeDePessoas;

  if(lugaresDisponiveis < quantiaPessoas){
    return lugaresDisponiveis === 1 ? "só cabe mais 1 pessoa no carro!" : "Só cabem mais " + lugaresDisponiveis + " pessoas!"
  } else if (carro.assentos <= somaPessoas){
    if(quantiaPessoas === lugaresDisponiveis){
      carro.quantidadeDePessoas += quantiaPessoas;
    }
    return "O carro já está lotado"
  } else {
    carro.quantidadeDePessoas += quantiaPessoas;
    return "já temos " + carro.quantidadeDePessoas + " pessoas no carro"
  }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //"branco"

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho");

// E agora, qual a cor do carro?
carro.obterCor(); //"Vermelho"

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde Musgo");

// E agora, qual a cor do carro?
carro.obterCor(); //"Verde Musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); // Esse carro é um fiat uno

// Adicione 2 pessoas no carro.
carro.adicionarPessoa(2); //"já temos 2 pessoas no carro"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoa(4); // "Só cabem mais 3 pessoas!"

// Faça o carro encher.
carro.adicionarPessoa(3); //O carro já está lotado;

// Tire 4 pessoas do carro.
carro.adicionarPessoa(-4) //"Já temos 1 pessoa no carro"

// Adicione 10 pessoas no carro.
carro.adicionarPessoa(10) //Só cabem mais 4 pessoas!

// Quantas pessoas temos no carro?
carro.quantidadeDePessoas // 1
```
