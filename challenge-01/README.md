// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma +=1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['Arroz', 'Feijão', 'Ovo'] //Melhor prato de comida <3!

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
comida[1]

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma == myvar; //False, número inteiros porém diferentes.
soma === myvar; //False, número inteiros porém diferentes e alocado em memorias diferente.

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar < soma;

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(a, b)
{
  return 10 / 20;
};
divisao();

// Invoque a função criada acima, passando os parâmetros 10 e 2.
function divisao(a, b)
{
  return a / b;
};
divisao(10, 2)
