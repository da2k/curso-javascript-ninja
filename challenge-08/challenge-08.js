/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(a,b){
    return a + b;
};


/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// EU ERREI:
//console.log('A soma de 4 e 1 é igual a ' + sum(4,1) + '.');
// A soma de 4 e 1 é igual a 5.

// PROFESSOR CORREÇÃO:
var value1 = 10;
var value2 = 20;
console.log('A soma de '+value1+' e '+value2+' é igual a ' + sum(value1,value2) + '.');


/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log("O nome da função que faz a soma é " + sum.name + ".");
/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// EU ERREI:
function showName(){
    return showName.name;
}

// PROFESSOR CORREÇÃO:
function showName(){
    return 'Paulo Pamplona';
}
/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// EU ERREI:
/*var varShowName = function showName(){
    return showName.name;
};          
*/
// PROFESSOR CORREÇÃO:
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log("A função '" + varShowName.name + "()' retorna '" + varShowName() + "'.");

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

function calculator(operador){
    return function(num1,num2){
        var resultado;
        switch(operador){
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
            case '%':
                resultado = num1 % num2;
                break;
            default:
                return 'Operação inválida.';
        }
        return "Resultado da operação: " + num1 + " " + operador + " " + num2 + " = " + resultado + ".";
    };
}
calculator('+')(1,4);
// "Resultado da operação: 1 + 4 = 5."


/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');
/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum(2,7);
// "Resultado da operação: 2 + 7 = 9."

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
subtraction(2,7);
// "Resultado da operação: 2 - 7 = -5."

multiplication(2,7);
// "Resultado da operação: 2 * 7 = 14."

division(55,5);
// "Resultado da operação: 55 / 5 = 11."

mod(22,4);
// "Resultado da operação: 22 % 4 = 2."