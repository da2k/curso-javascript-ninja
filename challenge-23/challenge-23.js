(function (w, d) {

  'use strict';

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

  var $input = d.querySelector('[data-calculator="input"]');
  var $buttonReset = d.querySelector('[data-calculator="reset"]');
  var $buttonResult = d.querySelector('[data-calculator="result"]');
  var $buttonNumber = d.querySelectorAll('[data-calculator-number]');
  var $buttonOperation = d.querySelectorAll('[data-calculator-operation]');
  var operators = ['+', '-', 'x', '÷'];

  function getLastValue(value) {
    return value.split('').pop();
  }

  function isLastOperator(value) {
    var lastValue = getLastValue(value);
    return operators.some(function (operator) {
      return operator === lastValue;
    });
  }

  function removeLastOperator(value) {
    if (isLastOperator(value)) {
      return value.slice(0, -1);
    }
    return value;
  }

  function listenerReset() {
    return $input.value = 0;
  }

  function listenerNumber() {
    var value = this.getAttribute('data-calculator-number');

    console.log(isLastOperator(value));

    if ($input.value == 0) {
      return $input.value = value;
    }

    return $input.value += value;
  }

  function listenerOperation() {
    var value = this.getAttribute('data-calculator-operation');

    if (isLastOperator(value)) {
      $input.value = removeLastOperator($input.value);
    }

    return $input.value += value;
  }

  function listenerResult() {
    $input.value = removeLastOperator($input.value);
    var values = $input.value.match(/\d+[-+x÷]?/g);

    $input.value = values.reduce(function (accumulated, actual) {
      var x = Number(accumulated.slice(0, -1));
      var y = Number(removeLastOperator(actual));

      var operation = getLastValue(accumulated);
      var operator = isLastOperator(actual) ? getLastValue(actual) : '';

      switch (operation) {
      case 'x':
        return (x * y) + operator;
      case '÷':
        return (x / y) + operator;
      case '-':
        return (x - y) + operator;
      case '+':
        return (x + y) + operator;
      }
    });
  }

  Array.prototype.forEach.call($buttonNumber, function (button) {
    button.addEventListener('click', listenerNumber);
  });

  Array.prototype.forEach.call($buttonOperation, function (button) {
    button.addEventListener('click', listenerOperation);
  })

  $buttonReset.addEventListener('click', listenerReset);
  $buttonResult.addEventListener('click', listenerResult);


})(window, document)
