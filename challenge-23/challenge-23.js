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
(function(win, doc) {
  'use strict';
  var $inputNumber = doc.querySelector( '[data-js="input"]' );
  var $numberBtn = doc.querySelectorAll( '[data-js="btnNumber"]' );
  var $operatorBtn = doc.querySelectorAll( '[data-js="operatorBtn"]' );
  var $equalBtn = doc.querySelector( '[data-js="equalBtn"]' );
  var $ceBtn = doc.querySelector( '[data-js="ceBtn"]' );

  Array.prototype.forEach.call( $numberBtn, function( button ) {
    button.addEventListener( 'click', selectedNumber, false );
  })

  Array.prototype.forEach.call( $operatorBtn, function( button ) {
    button.addEventListener( 'click', selectedOperator, false );
  })

  $ceBtn.addEventListener( 'click', selectedCeBtn, false );

  $equalBtn.addEventListener( 'click', selectedEqual, false );

  function selectedNumber() {
    isInputStarZero( this );
  }

  function selectedOperator() {
    removeLastOperator();
    $inputNumber.value += this.value;
  }

  function selectedCeBtn() {
    $inputNumber.value = 0;
  }

  function selectedEqual() {
    removeLastOperator();
    convertForNumber();

  }

  function isInputStarZero(button) {
    if ( $inputNumber.value == 0 ) {
      $inputNumber.value = button.value;
    } else {
      $inputNumber.value += button.value;
    };
  }

  function isLastItemIsItAnOperator() {
    var regex = /[+x÷-]$/;
    var result = regex.test( $inputNumber.value );
      return result;
  }

  function removeLastOperator() {
    if ( isLastItemIsItAnOperator() ) {
      $inputNumber.value = $inputNumber.value.slice( 0, -1 );
    };
  }

  function convertForNumber() {
    var getNumber = $inputNumber.value.match( /\d+/g );
    var getOperator = $inputNumber.value.match( /[+x÷-]/g );
    var counter = 0
    var result = getNumber.reduce( function( acumulated, actual ) {
      switch ( getOperator[counter] ) {
        case '+':
          counter++;
          return +acumulated + +actual;
        case 'x':
          counter++;
          return +acumulated * +actual;
        case '÷':
          counter++;
          return +acumulated / +actual;
        case '-':
          counter++;
          return +acumulated - +actual;
      }
    });
    $inputNumber.value = result;
    console.log( getNumber );
    console.log( getOperator );
}
})( window, document);
