(function (win, doc) {
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
  var $result = doc.querySelector('[data-js="result"]');
  var $btnReset = doc.querySelector('[data-js="reset"]');
  var $btnEquals = doc.querySelector('[data-js="calc-result"]');
  var $btnNumbers = doc.querySelectorAll('[data-js="number"]');
  var $btnOperations = doc.querySelectorAll('[data-js="operation"]');

  $btnReset.addEventListener('click', handleClickCE, false);
  $btnEquals.addEventListener('click', handleClickEquals, false);

  Array.prototype.forEach.call($btnNumbers, function ($btn) {
    $btn.addEventListener('click', handleClickNumber, false);
  });

  Array.prototype.forEach.call($btnOperations, function ($btn) {
    $btn.addEventListener('click', handleClickOperation, false);
  });

  function handleClickNumber() {
    if ($result.value === '0') {
      $result.value = this.textContent;
      return;
    }
    $result.value += this.textContent;
  }

  function handleClickOperation() {
    removeLastItemIfisAnOperation();
    $result.value += this.textContent;
  }

  function handleClickCE() {
    $result.value = 0;
  }

  function handleClickEquals() {
    removeLastItemIfisAnOperation();
    var values = $result.value.match(/(?:\d+)[+x÷-]?/g);
    var finalValue = values.reduce(function (acc, actual) {

      var firstValue = onlyNumbers(acc);
      var secondValue = onlyNumbers(actual);

      var operation = acc.slice(-1);
      var lastOperation = actual.slice(-1);
      var calc = 0;

      if (operation === '+') {
        calc = Number(firstValue) + Number(secondValue);
      }

      if (operation === '-') {
        calc = Number(firstValue) - Number(secondValue);
      }

      if (operation === 'x') {
        calc = Number(firstValue) * Number(secondValue);
      }

      if (operation === '÷') {
        calc = Number(firstValue) / Number(secondValue);
      }

      return isOperation(lastOperation) ?
        calc + lastOperation :
        calc.toString();
    });

    $result.value = finalValue;
  }

  function isOperation(char) {
    return char === '+' || char === '-' || char === 'x' || char === '÷';
  }

  function removeLastItemIfisAnOperation() {
    var lastChar = $result.value[$result.value.length - 1];
    if (isOperation(lastChar)) {
      $result.value = $result.value
        .substring(0, $result.value.length - 1);
    }
  }

  function onlyNumbers(str) {
    return str.replace(/\D/, '');
  }

})(window, document);
