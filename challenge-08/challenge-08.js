/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const sum = function calculateSum(number, number2) {
  return number + number2;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

console.log(`A soma é igual a  ${sum(2, 3)}`); //8

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName() {
  return "Emerson";
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
let varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${showName()}`);

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
  return function calcOperands(number, number2) {
    let result = 0;
    switch (operator) {
      case '+':
        result = number + number2;
        break;

      case '-':
        result = number - number2;
        break;

      case '*':
        result = number * number2;
        break;

      case '/':
        result = number / number2;
        break;

      case '%':
        result = number % number2;
        break;

      default:
        return "Operação Inválida";
    }

    return `Resultado da operação: ${number} ${operator} ${number2} = ${result}`;
  };
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
let sum2 = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum2(2, 3)); // Resultado da operação: 2 + 3 = 5


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
console.log(subtraction(250, 200)); //Resultado da operação: 250 - 200 = 50
console.log(multiplication(25, 25)); //Resultado da operação: 25 * 25 = 625
console.log(division(250, 250)); //Resultado da operação: 250 / 250 = 1
console.log(mod(10, 10)); //Resultado da operação: 10 % 10 = 0


