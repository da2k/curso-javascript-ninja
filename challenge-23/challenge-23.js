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
(function (win, doc) {
  'use strict';

  var $display = doc.querySelector('[data-js=inputDisplay]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js=buttonNumber]');
  var $buttonsOperations = doc.querySelectorAll('[data-js=buttonOperation]');
  var $buttonEqual = doc.querySelector('[data-js=buttonEqual]');
  var $buttonReset = doc.querySelector('[data-js=buttonReset]');

  $buttonsNumbers.forEach(function(e) {
    e.addEventListener('click', handleNumbers);
  });
  $buttonsOperations.forEach(function(e) {
    e.addEventListener('click', handleOperations);
  });
  $buttonEqual.addEventListener('click', handleEqual);
  $buttonReset.addEventListener('click', handleReset);

  function handleNumbers() {
    if ($display.value === '0') {
      $display.value = '';
    }
    $display.value += this.value;
  }

  function handleOperations() {
    $display.value = $display.value.replace(/[+\-x÷]$/, '');
    $display.value += this.value;
  }

  function handleEqual() {
    $display.value = $display.value.replace(/[+\-x÷]$/, '');
    var expression = $display.value;

    while (expression.match(/\d+[x÷]\d+/) !== null) {
      var expressionPart = expression.match(/\d+[x÷]\d+/)[0];
      expression = expression.replace(expressionPart, simpleCalc(expressionPart));
    }

    while (expression.match(/\d+[+\-]\d+/) !== null) {
      var expressionPart = expression.match(/\d+[+\-]\d+/)[0];
      expression = expression.replace(expressionPart, simpleCalc(expressionPart));
    }

    $display.value = expression;

    function simpleCalc(expression) {
      var numbers = expression.split(/[+\-x÷]/);
      var num1 = +numbers[0];
      var num2 = +numbers[1];
      var operation = expression.match(/[+\-x÷]/)[0];
      switch (operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case 'x':
          return num1 * num2;
        case '÷':
          return num1 / num2;
      }
    }
  }

  function handleReset() {
    $display.value = '0';
  }

})(window, document);
