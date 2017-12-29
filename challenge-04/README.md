# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTrusthy = function(x){
  return x ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTrusthy(0);
isTrusthy(1);
isTrusthy('');
isTrusthy("");
isTrusthy(false);
isTrusthy(undefined);
isTrusthy(null);
isTrusthy(NaN);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTrusthy(" ");
isTrusthy(1);
isTrusthy("a");
isTrusthy(true);
isTrusthy("false");
isTrusthy(-1);
isTrusthy({});
isTrusthy([]);
isTrusthy(10.0);
isTrusthy("dez");
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
  marca: "Kenner", 
  modelo: "POG", 
  placa: "HUM6969", 
  ano: 1990, 
  cor: "rosa", 
  quantasPortas: 4, 
  assentos: 5, 
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(x){
  return carro.cor = x;
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
  return "Esse carro é um "+carro.marca+" "+carro.modelo;
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
carro.addPessoa = function(p){
  var lotacao;
  var totalPessoas = carro.quantidadePessoas + p;
  carro.quantidadePessoas += p;
  var msg = "Já temos "+carro.quantidadePessoas+" pessoas no carro!";
  var totalCabem = carro.assentos-carro.quantidadePessoas;
  if(carro.quantidadePessoas >= carro.assentos){
    lotacao = "O carro já está lotado";
    msg = "Já temos "+carro.assentos+" pessoas no carro!";
    carro.quantidadePessoas = 5;
  }else if(carro.quantidadePessoas === carro.assentos - 1){  
    lotacao = "Só cabe mais 1 pessoa!";
  }else{
    lotacao = "Só cabem mais "+totalCabem+" pessoas!";
  }
  return msg+" "+lotacao;
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor();//rosa

// Mude a cor do carro para vermelho.
carro.mudarCor("azul");

// E agora, qual a cor do carro?
carro.obterCor();//azul

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
carro.obterCor();//verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo();//Esse carro é um Kenner POG

// Adicione 2 pessoas no carro.
carro.addPessoa(2)//Já temos 2 pessoas no carro! Só cabem mais 3 pessoas!;

// Adicione mais 4 pessoas no carro.
carro.addPessoa(4)//Já temos 5 pessoas no carro! O carro já está lotado;

// Faça o carro encher.
carro.addPessoa(5);//Já temos 5 pessoas no carro! O carro já está lotado;

// Tire 4 pessoas do carro.
carro.addPessoa(-4);//Já temos 1 pessoas no carro! Só cabem mais 4 pessoas!;

// Adicione 10 pessoas no carro.
carro.addPessoa(10)//Já temos 5 pessoas no carro! O carro já está lotado

// Quantas pessoas temos no carro?
carro.quantidadePessoas//Já temos 5 pessoas no carro! O carro já está lotado
```
