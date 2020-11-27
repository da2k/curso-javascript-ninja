(function(win, doc) {
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
 
  const $visor = doc.querySelector('[data-visor]');
  const $buttonsNumbers = doc.querySelectorAll( '[data-number]' );
  const $buttonsOperations = doc.querySelectorAll( '[data-operator]' );
  const $buttonClearVisor = doc.querySelector( '[data-ce]' );
  const $buttonEqual = doc.querySelector( '[data-equal]' );
  
  function startCalculator(){
    startEvents()
  }

  function startEvents(){
    $buttonEqual.addEventListener( 'click', checkValues);
    $buttonClearVisor.addEventListener( 'click', clearVisor );
    Array.prototype.forEach.call($buttonsNumbers, function( button ){
      button.addEventListener('click', addNumber, false)
    });
    Array.prototype.forEach.call($buttonsOperations, function( button ){
      button.addEventListener('click', addOperation, false)
    });
  }

  function addNumber(){
    $visor.value += this.value;
  }

  function addOperation(){
    $visor.value = removeLastIfOperator($visor.value);
    $visor.value += this.value;
  }

  function isLastItemOperation( lastDigit ){
    var operations = getOperations();
    var lastItem = lastDigit.split('').pop();
    return operations.some( function( operator ){
      return operator === lastItem;
    });
  }

  function getOperations(){
    return Array.prototype.map.call( $buttonsOperations, function( button ){
      return button.value;
    });
  }

  function removeLastIfOperator( lastItem ){
    if( isLastItemOperation( lastItem ) ){
      return lastItem.slice( 0, -1 );
    }
    return lastItem
  }

  function clearVisor(){
    $visor.value = '';
  }
  
  function checkValues(){
    //$visor.value = eval($visor.value);
    $visor.value = removeLastIfOperator( $visor.value );
    var visorValues = $visor.value.match( getRegexOperations() );
    $visor.value = visorValues.reduce( calculateValues )
  }
  
  function getRegexOperations(){
    return new RegExp( '\\d+[' + getOperations().join('') + ']?', 'g')
  }
  
  function calculateValues( acc, cur ){
    var firstValue = acc.slice( 0, -1 );
    var operator = acc.split('').pop();
    var lastValue =  removeLastIfOperator( cur );
    var lastOperator = getLastOperator( cur )
    return doTheMath( operator, firstValue, lastValue) + lastOperator;
  }

  function getLastOperator( value ){
    return isLastItemOperation( value ) ? value.split('').pop() : '';
  }
  
  function doTheMath( operator, firstValue, lastValue, lastOperator ){
    switch( operator ){
      case '+':
        return  Number( firstValue ) + Number( lastValue ) ;
      case '-':
        return  Number( firstValue ) - Number( lastValue ) ;
      case '*':
        return  Number( firstValue ) * Number( lastValue ) ;
      case '÷':
        return  Number( firstValue ) / Number( lastValue ) ;
    }
  }

  startCalculator()
  
})(window, document);