//declarar uma variável chamada "myvar", sem valor
var myvar;

//Após declarada, atribua o valor 10 a varíavel
myvar = 10;
console.log(myvar);

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
console.log(soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado
soma += 1;
console.log(soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
console.log(soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;
console.log(souninja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijao', 'ovo'];
console.log(comida);

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[0]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
function verificaVariaveis(soma, myvar){
    
    if(soma === myvar)
        console.log('As variáveis soma e myvar são iguais');
    else
        console.log('As variáveis são diferentes')
}

verificaVariaveis(soma, myvar);

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

function verificaMaiorMenor(soma, myvar){

    if(soma <= myvar)
        console.log('A variável soma é menor que a variável myvar')
    if(soma >= myvar)
        console.log('A varíavel soma é maior que a variável myvar')
    else
        console.log('As duas variáveis possuem o mesmo tamanho')
}

verificaMaiorMenor(soma, myvar);


// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(numero1, numero2){
    return numero1 / numero2;
}

console.log('O Resultado da divisão é:', divisao(10, 2));