/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(x, y) {
  return x + y;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var n1 = 3;
var n2 = 5;
console.log(`A soma de ${n1} e ${n2} é igual a ${sum(n1, n2)}`)
// A soma de 3 e 5 é igual a 8

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}`)
// O nome da função que faz a soma é calculateSum

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return 'Leonardo';
}
//

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;
//

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}`)
// A função showName retorna Leonardo

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
function calculator(operator) {
  return function(x, y) {
    switch(operator){
      case '+':
        return `Resultado da operação: ${n1} ${operator} ${n2} = ${x + y}.`;
        break;
      case '-':
        return `Resultado da operação: ${n1} ${operator} ${n2} = ${x - y}.`;
        break;
      case '*':
        return `Resultado da operação: ${n1} ${operator} ${n2} = ${x * y}.`;
        break;
      case '/':
        return `Resultado da operação: ${n1} ${operator} ${n2} = ${x / y}.`;
        break;
      case '%':
        return `Resultado da operação: ${n1} ${operator} ${n2} = ${x % y}.`;
        break;
      default:
        return 'Operação Invalída';
    }
  }
}
//

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+')
//

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum(2, 5)
// 'Resultado da operação: 3 + 5 = 7.'

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtraction = calculator('-');
var multiplication = calculator('*');
var division = calculator('/');
var mod = calculator('%');
//

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
subtraction(10, 2); //'Resultado da operação: 3 - 5 = 8.'
multiplication(5, 5); //'Resultado da operação: 3 * 5 = 25.'
division(10, 2); //'Resultado da operação: 3 / 5 = 5.'
mod(25, 2); //'Resultado da operação: 3 % 5 = 1.'