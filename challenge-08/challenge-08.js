/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const calculateSum = (x, y) => x + y;

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
let num1 = 15;
let num2 = 25;
console.log(`A soma de ${num1} e ${num2} é igual a ${calculateSum(num1, num2)}.`); // A soma de 15 e 25 é igual a 40.

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${calculateSum.name}.`); // O nome da função que faz a soma é calculateSum.

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return 'Henrique Araújo';
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
let varShowName = showName();

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${showName.name} retorna ${varShowName}.`); // A função showName retorna Henrique Araújo.

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
  return function (x, y) {
    let resultado;
    switch (operador) {
      case '+':
        resultado = x + y;
        break;
      case '-':
        resultado = x - y;
        break;
      case '/':
        resultado = x / y;
        break;
      case '*':
        resultado = x * y;
        break;
      case '%':
        resultado = x % y;
        break;
      default:
        return 'Operação inválida.';
    }
    return `Resultado da operação: ${x} ${operador} ${y} = ${resultado}.`
  }
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
const sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(15, 15)); // Resultado da operação: 15 + 15 = 30.

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
const subtraction = calculator('-');
const multiplication = calculator('*');
const division = calculator('/');
const mod = calculator('%');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(50, 13)); // Resultado da operação: 50 - 13 = 37.
console.log(multiplication(50, 10)); // Resultado da operação: 50 * 10 = 500.
console.log(division(100, 5)); // Resultado da operação: 100 / 5 = 20.
console.log(mod(10, 2)); // Resultado da operação: 10 % 2 = 0.
