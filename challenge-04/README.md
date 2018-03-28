# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
  return x ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy('');
isTruthy(undefined);
isTruthy();
isTruthy(null);
isTruthy(0);
isTruthy(-0);
isTruthy(false);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(2);
isTruthy('teste');
isTruthy({})
isTruthy([])
isTruthy(true)
isTruthy({nome: 'pedro'})
isTruthy([1,2,3,4])
isTruthy(new Date())
isTruthy(-10)
isTruthy(Infinity)

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
  modelo: 'Ford Mustang',
  placa: 'PPP-7845',
  ano: 2018,
  cor: 'Preto',
  quantasPortas: 2,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudaCor(cor) {
  carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function obterCor() {
  return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function obterModelo() {
  return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function obterMarca() {
  return carro.modelo;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function obterMarcaModelo() {
  return 'Esse carro é um ' + obterMarca() + ' ' + obterModelo();
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
function addPeople(numPeoples) {
  if(carro.assentos === numPeoples) {
    return "O carro já está lotado!";
  }  

  if(carro.assentos > numPeoples) {
    if(carro.assentos - numPeoples === 1) {
      return "Já temos " + numPeoples +" pessoas no carro!" + "\nSó cabem mais " + (carro.assentos - numPeoples)  + "pessoa!"
    } else {
      return "Já temos " + numPeoples +" pessoas no carro!" + "\nSó cabem mais " + (carro.assentos - numPeoples)  + "pessoas!"
    }
  }
  
  if(carro.assentos < numPeoples) {
    return "Quntidade excedida";
  }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor(); //Preto

// Mude a cor do carro para vermelho.
mudaCor('Vermelho'); //Vermelho

// E agora, qual a cor do carro?
obterCor(); //Vermelho

// Mude a cor do carro para verde musgo.
mudaCor('Verde Musgo');

// E agora, qual a cor do carro?
obterCor(); //Verde Musgo

// Qual a marca e modelo do carro?
obterMarca();//Ford

// Adicione 2 pessoas no carro.
addPeople(2);

// Adicione mais 4 pessoas no carro.
addPeople(4);

// Faça o carro encher.
addPeople(5);

// Tire 4 pessoas do carro.
addPeople(0);

// Adicione 10 pessoas no carro.
addPeople(10);

// Quantas pessoas temos no carro?
//0, pois a quantidade de assentos e menor que 10
```
