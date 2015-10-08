(function(win, doc){
  'use strict';

  var $display = doc.querySelector('[data-js="display"]');
  var $bttNum = doc.querySelectorAll('[data-js="btt-number"]');
  var $bttOper = doc.querySelectorAll('[data-js="btt-operation"]');
  var $bttCE = doc.querySelector('[data-js="btt-ce"]');
  var $bttEqual = doc.querySelector('[data-js="btt-equal"]');

  Array.prototype.forEach.call($bttNum, function(button){
    button.addEventListener('click', numClickHandler, false);
  })

  Array.prototype.forEach.call($bttOper, function(button){
    button.addEventListener('click', operClickHandler, false);
  })

  $bttCE.addEventListener('click', clearScreen, false);
  $bttEqual.addEventListener('click', calculateResult, false);

  function numClickHandler() {
    $display.value !== '0' ? $display.value += this.value : $display.value = this.value ;
  }
  function operClickHandler() {
    removeOperFromLastChar();
    $display.value += this.value;
  }

  function clearScreen() {
    $display.value = '0';
  }

  function calculateResult() {
    removeOperFromLastChar();
  }

  function isLastOper() {
    var lastChar = $display.value.split('').pop();
    return ['+', '-', 'x', '÷'].some(function(operator){
        return operator === lastChar;
    });
  }
  function removeOperFromLastChar() {
    if(isLastOper())
      $display.value = $display.value.slice(0, -1);
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
