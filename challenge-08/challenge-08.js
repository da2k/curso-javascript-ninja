/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
const sum = (param1, param2) => {
  return param1 + param2;
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log(`A soma de 1 e 2 é igual a ${sum(1, 2)}.`);

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log(`O nome da função que faz a soma é ${sum.name}.`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
const showName = () => showName.name;

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
const varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}.`);

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
const calculator = (op) => (param1, param2) => {
  let result;

  switch (op) {
    case '+':
      result = param1 + param2;
      break;
    case '-':
      result = param1 - param2;
      break;
    case '*':
      result = param1 * param2;
      break; 
    case '/':
      result = param1 / param2;
      break;
    case '%':
      result = param1 % param2;
      break;
    default:
      result = false;
      break;
  }

  if (result) return `Resultado da operação: ${param1} ${op} ${param2} = ${result}.`;

  return `Operação inválida.`;
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
const sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum(2, 5); // 'Resultado da operação: 2 + 5 = 7.'

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
subtraction(5, 3); // 'Resultado da operação: 5 - 3 = 2.'
multiplication(5, 10); // 'Resultado da operação: 5 * 10 = 50.'
division(21, 3); // 'Resultado da operação: 21 / 3 = 7.'
mod(5, 2); // 'Resultado da operação: 5 % 2 = 1.'
