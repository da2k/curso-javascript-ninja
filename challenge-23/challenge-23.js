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

(function(window, document) {
  'use strict';

  var $buttonCE        = document.querySelector('[data-button="btnCE"]')
    , $buttonEqual     = document.querySelector('[data-button="btnEqual"]')
    , $input           = document.querySelector('[data-input="inputCalculus"]')
    , $buttonNumber    = document.querySelectorAll('[data-button="btnNumber"]')
    , $buttonOperation = document.querySelectorAll('[data-button="btnOperation"]')
  ;

  Array.prototype.forEach.call($buttonNumber, function(button) {
    button.addEventListener('click', clickNumbers, false);
  });

  Array.prototype.forEach.call($buttonOperation, function(button) {
    button.addEventListener('click', clickOperations, false);
  });

  $buttonCE.addEventListener('click', resetInput, false );
  
  $buttonEqual.addEventListener('click', calculate, false);

  function clickNumbers() {
    $input.value += this.value;
  }

  function clickOperations() {
    $input.value = removeLastCharacterIfIsOperator($input.value);
    $input.value += this.value;
  }

  function resetInput() {
    $input.value = 0;
  }

  function lastOperationCharacter(number) {
    var lastItem   = number.split('').pop();
    var operations = ['+', '-', 'x', '÷'];

    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastCharacterIfIsOperator(number) {
    if (lastOperationCharacter(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function calculate() {
    $input.value = removeLastCharacterIfIsOperator($input.value);
    var values = $input.value.match(/\d+[+x÷-]?/g);

    $input.value = values.reduce(function(accumulated, current) {
      var firstValue   = accumulated.slice(0, -1)
        , lastOperator = lastOperationCharacter(current) ? current.split('').pop() : ''
        , lastValue    = removeLastCharacterIfIsOperator(current)
        , operator     = accumulated.split('').pop()
      ;

      switch(operator) {
        case '+':
          return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
        case '-':
          return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
        case 'x':
          return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
        case '÷':
          return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
      }
    });
  }

})(window, document);
