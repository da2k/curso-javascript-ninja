console.log('Desafio Semana');

// 1
console.log('Declarar uma variável chamada `myvar`, sem valor.');
var myvar;
console.log(myvar);

console.log('Após declarada, atribua o valor 10 à variável `myvar`');
myvar = 10;
console.log(myvar);

console.log('Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.');
var soma = 15+8;
console.log(soma);

console.log('Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado');
soma++;
console.log(soma);

console.log('Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.');
soma *= 3;
console.log(soma);

console.log('Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`');
var souninja = true;
console.log(souninja);

console.log('Declare uma variável chamada `comida` que recebe um array com os valores arroz,feijão e ovo.');
var comida = ['arroz', 'feijao', 'ovo'];
console.log(comida);

console.log('Digite a instrução que imprime o valor de feijao, que está na variável `comida`.');
console.log(comida[1]);

console.log('Digite o código que verifica se a variável soma é igual a variável `myvar` (testando também o tipo).');
console.log(soma == myvar);

console.log('Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.');
console.log(myvar <= soma);

console.log('Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.');
function divisao (a, b){
  return a / b;
}
console.log(divisao);

console.log('Invoque a função criada acima, passando os parâmetros 10 e 2.');
console.log(divisao(10,2));
