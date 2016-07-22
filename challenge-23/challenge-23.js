(function( win, doc ) {
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

  var $display = doc.querySelector( '[data-js-display]' );
  var $butonCE = doc.querySelector( '[data-js-operator="CE"]' );
  var $butonEqual = doc.querySelector( '[data-js-operator="="]' );
  var $butonsNum = doc.querySelectorAll( '[data-js-button]' );

  function initialize() {
    initEvent();
  }

  function initEvent() {
    Array.prototype.forEach.call( $butonsNum, function( item, index ) {
      item.addEventListener( 'click', updateDisplay, false );
    });
    $butonCE.addEventListener( 'click', clearDisplay, false );
    $butonEqual.addEventListener( 'click', calculate, false );
  }

  function clearDisplay() {
    $display.value = '0';
  }

  function isOperator( item ) {
    var regexpOperators = new RegExp('[x÷+-]');
    if ( item.match( regexpOperators ) )
      return true;
    return false;
  }

  function getOperations() {

  }

  function lastItemIsOperator( string ) {
    if ( isOperator( string.slice( -1 ) ) ) {
      return true;
    }
    return false;
  }

  function removeLastItemIfOperator( string ) {
    if ( lastItemIsOperator( string ) ) {
      return string.slice( 0, -1 );
    }
    return string;
  }

  function updateDisplay() {

    var digitednumber = this.value;

    if ( isOperator( digitednumber ) && lastItemIsOperator( $display.value ) ) {
      return $display.value = removeLastItemIfOperator( $display.value ) + digitednumber;
    }
    return $display.value = $display.value + digitednumber;
  }

  function calculate() {
    var allOperators = $display.value.match( /\d+[+x÷-]?/g );
    $display.value = allOperators.reduce( calculateAllValues );
  }

  function calculateAllValues( accumulated, actual ) {
      var firstValue = accumulated.slice( 0, -1 );
      var operator = accumulated.split( '' ).pop();
      var lastValue = removeLastItemIfOperator( actual );
      var lastOperator = lastItemIsOperator( actual ) ? actual.split( '' ).pop() : '';
      return doOperation( operator, firstValue, lastValue ) + lastOperator;
  }

  function doOperation( operator, firstValue, lastValue ) {
    switch( operator ) {
        case '+':
          return Number( firstValue ) + Number( lastValue );
        break;
        case 'x':
          return Number( firstValue ) * Number( lastValue );
        break;
        case '-':
          return Number( firstValue ) - Number( lastValue );
        break;
        case '÷':
          return Number( firstValue ) / Number( lastValue );
        break;
      }
  }

  initialize();

})( window, document );
















