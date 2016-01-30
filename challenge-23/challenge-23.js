;(function( window, document, undefined ){
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

  var operator = ['x', '÷', '+', '-']; // ordem de precedência
  var $operators  = document.querySelectorAll('[data-js="operator"]');
  var $calculate = document.querySelector('[data-js="calculate"]');
  var $display = document.querySelector('[data-js="display"]');
  var $clean  = document.querySelector('[data-js="clean"]');

  Array.prototype.forEach.call($operators, function(operator) {
    operator.addEventListener('click', concat, false);
  });
  $calculate.addEventListener('click', calculate, false);
  $clean.addEventListener('click', clean, false);

  function concat() {
    if(isOperator(this.value) && isLastOperator( $display.value ))
      return replaceOperator(this.value);
    if ($display.value === '0' && isOperator(this.value))
      return;
    if ($display.value === '0')
      return $display.value = this.value;
    return $display.value += this.value
  }

  function isOperator( value ) {
    return operator.indexOf(value) > -1;
  }

  function isLastOperator( value ) {
    return operator.indexOf(
      value.slice(-1)
    ) > -1;
  }

  function replaceOperator( value ) {
    $display.value = $display.value.replace(/[-+x÷]$/, value);
  }

  function hasOperator( op ) {
    var regex = new RegExp('\\' + op);
    return regex.test( $display.value );
  }

  function calculate() {
    var regex;
    operator.forEach(function( op ) {
      regex = new RegExp('(\\d+)(\\'+ op +')(\\d+)');
      while ( hasOperator( op ) ) {
        $display.value = $display.value.replace(regex,
          function( matches, num1, op, num2 ) {
            return calculateByPart( num1, num2, op );
          }
        );
      }
    });
  }

  function calculateByPart( num1, num2, op ) {
    switch ( op ) {
      case '+':
        return Number(num1) + Number(num2);
      case '-':
        return Number(num1) - Number(num2);
      case 'x':
        return Number(num1) * Number(num2);
      case '÷':
        return Number(num1) / Number(num2);
    }
  }

  function clean() {
    $display.value = 0;
  }

})( window, document );
