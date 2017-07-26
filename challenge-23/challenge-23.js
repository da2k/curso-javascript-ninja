(function () {
  'use strict'
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
  var regexLastOperator = /(?:\+|-|÷|x)$/g;

  var $display = document.querySelector('input[type="text"]');

  var $buttonReset = document.querySelector('button[data-js="reset"]');
  $buttonReset.addEventListener('click', resetDisplay, false);

  var $buttonEqual = document.querySelector('button[data-js="equal"]');
  $buttonEqual.addEventListener('click', calculateExpression, false);

  var $numberButtons = document.querySelectorAll('button[data-js*="number"]');

  Array.prototype.forEach.call($numberButtons, function (item) {
    item.addEventListener('click', function () {
      updateDisplay(item.textContent);
    }, false);
  });

  var $operationButtons = document.querySelectorAll('button[data-js*="operator"]');

  Array.prototype.forEach.call($operationButtons, function (item) {
    item.addEventListener('click', function () {
      updateDisplayWithOperator(item.textContent);
    }, false);
  });

  function resetDisplay() {
    $display.value = 0;
  }

  function calculateExpression() {
    var operacao = $display.value.replace(/\÷/g, '/');
    operacao = operacao.replace(/x/g, '*');
    $display.value = eval(operacao);
  }

  function updateDisplay(value) {

    if ($display.value == '0')
      return $display.value = value;

    $display.value += value;
  }

  function updateDisplayWithOperator(operator) {

    if ($display.value == 0 && operator === '-') {
      return $display.value = operator;
    }

    if (lastItemIsOperator($display.value)) {
      return $display.value = replaceOperator($display.value, operator);
    }

    $display.value += operator;
  }

  function lastItemIsOperator(string) {
    return regexLastOperator.test(string);
  }

  function replaceOperator(string, operator) {
    return string.replace(regexLastOperator, operator);
  }

})();
