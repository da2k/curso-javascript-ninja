(function(doc) {
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */
  var $input = doc.querySelector('[data-js="input"]');
  var $buttonsNumber = doc.querySelectorAll('[data-js="number"');
  var $buttonsOperation = doc.querySelectorAll('[data-js="operation"');
  var $clear = doc.querySelector('[data-js="clear"');
  var $result = doc.querySelector('[data-js="result"');

  $buttonsNumber.forEach(function(button) {
    button.addEventListener("click", onNumberClick, false);
  });

  $buttonsOperation.forEach(function(button) {
    button.addEventListener("click", onOperationClick, false);
  });

  $clear.addEventListener("click", onClearClick, false);

  $result.addEventListener("click", onResultClick, false);

  function onNumberClick() {
    $input.value == "0"
      ? ($input.value = this.innerText)
      : ($input.value += this.innerText);
  }

  function onOperationClick() {
    $input.value = removeLastOperatorIfItsAnOperator($input.value);
    $input.value += this.innerText;
  }

  function onClearClick() {
    $input.value = "0";
  }

  function onResultClick() {
    $input.value = removeLastOperatorIfItsAnOperator($input.value);
    var expressions = $input.value.match(/\d+[+x÷-]?/g);

    $input.value = expressions.reduce(function(accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split("").pop();
      var lastValue = removeLastOperatorIfItsAnOperator(actual);
      var lastOperator = isLastCharAOperator(actual)
        ? actual.split("").pop()
        : false;

      switch (operator) {
        case "+":
          return +firstValue + +lastValue + lastOperator;
        case "-":
          return firstValue - lastValue + lastOperator;
        case "x":
          return firstValue * lastValue + lastOperator;
        case "÷":
          return firstValue / lastValue + lastOperator;
      }
    });
  }

  function isLastCharAOperator(number) {
    var operations = ["+", "-", "x", "÷"];
    var lastChar = number[number.length - 1];
    return operations.indexOf(lastChar) >= 0;
  }

  function removeLastOperatorIfItsAnOperator(number) {
    if (isLastCharAOperator(number)) return (number = number.slice(0, -1));
    return number;
  }
})(document);
