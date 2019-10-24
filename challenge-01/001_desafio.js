// Declarar uma variável chamada `myvar`, sem valor.
var myvar;
// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;
console.log("my var = " + myvar);
// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
console.log("soma = 15+8 = " + soma);
// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;
console.log("soma++ = " + soma);
// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
console.log("soma *=3 = " + soma);
// Qual é o valor da variável `soma` até aqui?
console.log("A soma deu = " + soma);
// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;
console.log("A variável souninja é ---> " + souninja);
// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijao', 'ovo'];
console.log("O array comida é assim: " + comida);
// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log("O segundo elemento da array comida é ---> " + comida[1]);
// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
var res = (soma === myvar);
console.log("A variável soma é igual à myvar?---> " + res)
    // Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
var res2 = (myvar <= soma);
console.log("myvar<=soma? ---> " + res2);
// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(a, b) {
    return (a / b);
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log("A divisão de 10 por 2 é ---> " + divisao(10, 2));