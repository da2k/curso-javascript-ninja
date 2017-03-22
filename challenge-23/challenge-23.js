(function(win, doc){
  'use strict';

  var $display = doc.querySelector('[data-js="display"]');
  var $buttonNumber = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonOperation = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  Array.prototype.forEach.call($buttonNumber, function(button){
    button.addEventListener('click', numClickHandler, false);
  })

  Array.prototype.forEach.call($buttonOperation, function(button){
    button.addEventListener('click', operClickHandler, false);
  })

  $buttonCE.addEventListener('click', clearScreen, false);
  $buttonEqual.addEventListener('click', calculateResult, false);

  function numClickHandler() {
    if($display.value !== '0') {
      $display.value += this.value;
    } else {
        $display.value = this.value;
    }

  }
  function operClickHandler() {
    $display.value = removeOperatorFromLastChar($display.value);
    $display.value += this.value;
  }

  function clearScreen() {
    $display.value = '0';
  }

  function calculateResult() {
    $display.value = removeOperatorFromLastChar($display.value);
    var valuesEntered = $display.value.match(/\d+[+-x÷]?/g);
    $display.value = valuesEntered.reduce(function(accum, actual){
      var a = Number(accum.slice(0, -1));
      var b = Number(removeOperatorFromLastChar(actual));
      var operation = getLastChar(accum);
      var lastOperator = isLastOperator(actual) ? getLastChar(actual) : '';
      switch(operation) {
        case '+':
          return (a + b) + lastOperator;
        case '-':
          return (a - b) + lastOperator;
        case 'x':
          return (a * b) + lastOperator;
        case '÷':
          return (a / b) + lastOperator;
      }
    });
  }

  function isLastOperator(number) {
    var lastChar = getLastChar(number);
    return ['+', '-', 'x', '÷'].some(function(operator){
        return operator === lastChar;
    });
  }
  function removeOperatorFromLastChar(number) {
    if(isLastOperator(number)) {
      return number.slice(0, -1);
    }
      return number;
  }
  function getLastChar(str) {
    return str.split('').pop();
  }


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
})(window, document);
