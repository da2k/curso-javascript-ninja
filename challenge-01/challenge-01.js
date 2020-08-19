// # Desafio Semana #1

// ```js
// Declarar uma variável chamada `myvar`, sem valor.
let myVar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myVar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let souNinja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
let comida = ['Arroz', 'Feijão', 'Ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log(soma === myVar); // false

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(myVar <= soma); // true

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(x, y) {
  return x / y;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisao(10, 2)); // 5
