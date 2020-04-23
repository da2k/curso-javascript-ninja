/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const sum1 = calculateSum = (x, y) => {
  return x + y;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log(`A soma de 15 e 20 é igual a ${sum1(15, 20)}`); // A soma de 15 e 20 é igual a 35

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum1.name}`); // O nome da função que faz a soma é calculateSum

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
const showName = () => {
  return `Henrique Araújo`;
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
const varShowName = showName();

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${showName.name} retorna ${varShowName}`); // A função showName retorna Henrique Araújo

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
    let result;

    switch (operador) {
      case '+':
        result = x + y;
        break
      case '-':
        result = x - y;
        break
      case '*':
        result = x * y;
        break
      case '/':
        result = x / y;
        break
      case '%':
        result = x % y;
        break
      default:
        return `Operação inválida.`;
    }
    return `Resultado da operação: ${x} ${operador} ${y} = ${result}.`;
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
console.log(sum(5, 5)); // Resultado da operação: 5 + 5 = 10.

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
console.log(subtraction(50, 20)); // Resultado da operação: 50 - 20 = 30.
console.log(multiplication(10, 199)); // Resultado da operação: 10 * 199 = 1990.
console.log(division(100, 6)); // Resultado da operação: 100 / 6 = 16.666666666666668.
console.log(mod(2, 1)); // Resultado da operação: 2 % 1 = 0.