(function () {
  /*
  Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
  e faça a indentação correta.
  */

  /*
Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
deles seja "true", usando os Wrapper Objects como "conversores" nos valores
das variáveis. Analise o que está sendo impresso no console para saber como
resolver o problema corretamente.
*/
  let five = Number("5");

  console.log(five + " é número?", typeof five === "number");

  let concat = String(10) + 10;
  console.log(
    '"' + concat + '" é uma string? E é igual a "1010"?',
    typeof concat === "string",
  );

  /*
Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
funcional, mas dessa vez, separando algumas responsabilidades.
- Primeiro, crie um objeto chamado `operation` que terá as propriedades:
'+', '-', '*', '/' e '%'.
- Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
função receberá dois parâmetros e retornará a operação referente à sua
propriedade, usando os valores passados por parâmetro.
*/

  let operation = {
    "+": function (num1, num2) {
      return num1 + num2;
    },
    "-": function (num1, num2) {
      return num1 - num2;
    },
    "*": function (num1, num2) {
      return num1 * num2;
    },
    "/": function (num1, num2) {
      return num1 / num2;
    },
    "%": function (num1, num2) {
      return num1 % num2;
    },
  };

  /*
Crie uma função chamada `isOperatorValid`, que receberá um operador por
parâmetro.
- Essa função será responsável por verificar se o operador passado por
parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
'%'.
- Se for igual a qualquer um desses, ela deverá retornar "true".
Caso contrário, "false".
- O desafio é fazer o retorno sem usar "if" ou "switch".
*/

  function isOperatorValid(operador) {
    let valueOperador = ["+", "-", "*", "/", "%"].includes(operador);
    return valueOperador;
  }

  // return operation[operador] !== undefined

  console.log(isOperatorValid("+"));
  /*
["+", "-", "*", "/", "%"] é um array que contém todos os operadores válidos.
O método .includes(operator) verifica se o valor de operator está dentro desse array.
Se estiver, retorna true; se não estiver, retorna false.
/*

/*
Agora vamos criar a calculadora.
- Crie uma função chamada `calculator`, que receberá como parâmetro um
operador;
- Se o operador não for válido, a função deve retornar "false";
- Se o operador for válido, retornar uma segunda função que receberá dois
parâmetros;
- Se algum dos parâmetros não for um número, retornar "false";
- Senão, retornar o método do objeto "operation" criado acima, baseado no
operador passado para a função "calculator", e passando para esse método
os dois parâmetros da função de retorno de "calculator".
*/
  function calculator(operador) {
    if (!isOperatorValid(operador)) {
      return false;
    }

    return function newFunction(param1, param2) {
      if (typeof param1 !== "number" || typeof param2 !== "number") {
        return false;
      }

      return operation[operador](param1, param2);
    };
  }

  /*
Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
- o operador, o primeiro número e o segundo número. O retorno da função
deve ser a frase:
'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
Essa função mostrará a mensagem da operação que criaremos mais abaixo.
*/

  function showOperationMessage(op, firstNumber, secondNumber) {
    return `A operação ${firstNumber} ${op} ${secondNumber} = `;
  }

  /*
Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
operador da operação cálculo, quando a operação não for válida.
Essa função deverá retornar a frase:
'Operação "[OPERATOR]" não permitida!'
*/

  function showErrorMessage(opNotValid) {
    let valueOperador = ["+", "-", "*", "/", "%"].includes(opNotValid);

    if (valueOperador === false) {
      return `Operação ${opNotValid} não permitida!`;
    }

    return "sem erros no operador!";
  }

  /*
  Nossa calculadora está pronta! Agora vamos testá-la:
PASSO 1:
- Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
"operationSignal", sem valor por enquanto.
*/

  let number1 = 20;
  let number2 = 10;
  let operationSignal;

  /*
  PASSO 2:
  Atribua à variável operationSignal o operador de soma, e declare uma
  variável chamada "sum", que receba a função "calculator", passando por
  parâmetro a variável que recebeu o sinal da operação.
  */

  operationSignal = "+";
  let sum = calculator(operationSignal);

  /*
 PASSO 3:
 "sum" agora é uma função, e, se o sinal correto não foi passado para a
 função "calculator", "sum" será false. Certifique-se de que "sum" não é
 "false", e então atribua às variáveis "number1" e "number2", dois números
 que serão os operandos da operação de soma.
Após isso, mostre no console o resultado da operação, passando dois
parâmetros para o método "log" de "console":
- O primeiro será a mensagem da operação (usando a função criada acima);
- O segundo, a função de soma, passando os dois operandos.
- Se "sum" for "false", mostrar no console a mensagem de erro.
*/
  console.log(sum(number1, number2));

  console.log(
    showOperationMessage(operationSignal, number1, number2),
    operation["+"](number1, number2),
  );

  console.log(showErrorMessage(operationSignal));

  /*
Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
divisão e resto. Crie variáveis com os nomes "subtraction",
"multiplication", "division" e "mod".
*/

  // sub -
  operationSignal = "-";
  sum = calculator(operationSignal);

  console.log(sum(number1, number2));

  console.log(
    showOperationMessage(operationSignal, number1, number2),
    operation["-"](number1, number2),
  );

  console.log(showErrorMessage(operationSignal));

  // mult *
  operationSignal = "*";
  sum = calculator(operationSignal);

  console.log(sum(number1, number2));

  console.log(
    showOperationMessage(operationSignal, number1, number2),
    operation["*"](number1, number2),
  );

  console.log(showErrorMessage(operationSignal));

  // division /
  operationSignal = "/";
  sum = calculator(operationSignal);

  console.log(sum(number1, number2));

  console.log(
    showOperationMessage(operationSignal, number1, number2),
    operation["/"](number1, number2),
  );

  console.log(showErrorMessage(operationSignal));

  // mod %

  operationSignal = "%";
  sum = calculator(operationSignal);

  console.log(sum(number1, number2));

  console.log(
    showOperationMessage(operationSignal, number1, number2),
    operation["%"](number1, number2),
  );

  console.log(showErrorMessage(operationSignal));

  /*
Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
a mensagem de erro será mostrada no console.
*/

  console.log(showErrorMessage("@"));

  // ?
})();
