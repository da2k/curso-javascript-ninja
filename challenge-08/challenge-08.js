/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// 
let sum = function calculateSum(x,y){
    return x+y;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// 
function printSum(x,y,func){
    return `A soma de ${x} e ${y} é igual a ${func(x,y)}.`
}

console.log(printSum(97,56,sum)); //A soma de 97 e 56 é igual a 153.
/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// 
function functionName(func){
    return `O nome da função que faz a soma é ${func.name}.`;
}

console.log(functionName(sum)); //O nome da função que faz a soma é calculateSum.

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
//
function showName(){
    return showName.name;
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
//
let varShowName = showName;
/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// 
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`); //A função showName retorna showName.
/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// 
function calculator(op){
    let operators = ['+','-','*','/','%'];
    return function(x,y){
        return operators.indexOf(op) > -1 ? 
                `Resultado da operação: ${x} ${op} ${y} = ${eval(`${x}${op}${y}`)}.` : 
                `Operação inválida.`;
    }
    
}

console.log(calculator('+')(5,7)); //Resultado da operação: 5 + 7 = 12.
console.log(calculator('x')(5,7)); //Operação inválida.


/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// 
let sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// 
console.log(sum(73,269)); //Resultado da operação: 73 + 269 = 342.
/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// 
let subtraction = calculator('-');
let multiplication = calculator('*');
let division = calculator('/');
let mod = calculator('%');
/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// 
console.log(subtraction(73,269)); //Resultado da operação: 73 - 269 = -196.
console.log(multiplication(73,269)); //Resultado da operação: 73 * 269 = 19637.
console.log(division(73,269)); //Resultado da operação: 73 / 269 = 0.27137546468401486.
console.log(mod(269,73)); //Resultado da operação: 269 % 73 = 50.
