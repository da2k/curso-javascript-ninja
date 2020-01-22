# Desafio Semana #1

```js
// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma 15+8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma +=1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma*=3;

// Qual é o valor da variável `soma` até aqui?
72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz','feijão','ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if(soma === myvar){
  console.log("são iguais, inclusive o tipo");
}else if(soma == myvar){
  console.log("As variáveis possuem um valor igual");
}else{
  console.log("As variáveis não possuem valor igual e nem são do mesmo tipo");
}
// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if(myvar <= soma){
  console.log('A variável myvar é menor ou igual a variável soma');
}else{
  console.log('a variável myvar é maior que a variável soma');
}

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(a,b){
  return a/b;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao( 10 , 2 );
