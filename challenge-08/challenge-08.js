/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(param1, param2) {
  return param1 + param2;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var val1 = 10;
var val2 = 5;
console.log('A soma de ' + val1 + ' e ' + val2 + ' é igual a ' + sum(10, 5) + '.');

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é ' + sum.name + '.');

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/

function showName() {
  return 'Rodrigo Cantanhede';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;
/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A função ' + varShowName.name + ' retorna ' + varShowName() + '.');

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
function calculator(operador) {
  return function secondFunc(operando1, operando2) {
    var result;
    switch (operador) {
      case '+':
        result = operando1 + operando2;
        break;
      case '-':
        result = operando1 - operando2;
        break;
      case '*':
        result = operando1 * operando2;
        break;
      case '/':
        result = operando1 / operando2;
        break;
      case '%':
        result = operando1 % operando2;
        break;
      default:
        return 'Operação inválida';
    }
    return 'Resultado da operação: ' + operando1 + ' ' + operador + ' ' + operando2 + ' = ' + result + '.';
  }
}



/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(10, 30));

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
console.log(subtraction(4, 2)); //Resultado da operação: 4 - 2 = 2.
console.log(multiplication(4, 2)); //Resultado da operação: 4 * 2 = 8.
console.log(division(4, 2)); //Resultado da operação: 4 / 2 = 2.
console.log(mod(4, 2)); //Resultado da operação: 4 % 2 = 0.

