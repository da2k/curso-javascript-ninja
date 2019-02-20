(function( window , document ){

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


    // SOLUÇÃO DO PROFESSOR;

    var $display = document.querySelector('[data-js="display"]');
    var $buttons = document.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = document.querySelector('[data-js="button-ce"]');
    var $buttonEqual = document.querySelector('[data-js="button-equal"]');


    Array.prototype.forEach.call( $buttons, function ( btn ){

      btn.addEventListener( 'click' , handleClickNumber, false );

    });

    Array.prototype.forEach.call( $buttonsOperations, function( btn ){

      btn.addEventListener( 'click' , handleClickOperation , false );

    });

    $buttonCE.addEventListener( 'click', handleClickCE , false );
    $buttonEqual.addEventListener( 'click', handleClickEqual , false );

    function handleClickNumber() {

      $display.value += this.value;

    }
    function handleClickOperation() {

      $display.value = removeLastOperator( $display.value );
      $display.value += this.value;

    }

    function handleClickCE(){

      $display.value = 0;

    }

    function isLastItemAnOperation( number ) {

      var operations = ['+', '-' , '*' , '÷'];
      var lastItem = number.split('').pop();
      return operations.some( function( operator ){

        return operator === lastItem;

      } );
    }

    function removeLastOperator( number ) {

      if( isLastItemAnOperation( number ) ){

        return number.slice( 0 , -1 );

      }

      return number;

    }

    function handleClickEqual() {

      $display.value = removeLastOperator( $display.value );

      var allValues = $display.value.match(/\d+[+*÷-]?/g);

      var result = allValues.reduce( function( accumulated , current ){

        var firstValue = accumulated.slice(0 , -1);
        var operator = accumulated.split('').pop();
        var lastValue =  removeLastOperator( current );
        var lastOperator = isLastItemAnOperation( current ) ? current.split('').pop() : '';

        switch( operator ){

          case '+':
            return (Number(firstValue) + Number(lastValue)) + lastOperator;
          case '-':
            return (Number(firstValue) - Number(lastValue)) + lastOperator;
          case '*':
            return (Number(firstValue) * Number(lastValue)) + lastOperator;
          case '÷':
            return (Number(firstValue) / Number(lastValue)) + lastOperator;

        }

     });

      $display.value = result;
    }

   /* MINHA SOLUÇÃO;

   var $display = document.querySelector('[data-js="display"]');
    var $buttons = document.querySelectorAll('[data-js="button-number"]');
    var operation = [];
    var newValue;
    var operators = ['+', '-' , '*', '/'];


    function initButtons() {

      Array.prototype.forEach.call( $buttons , function( btn ){

        btn.addEventListener( 'click' , function() {

          checkButtons( this.value );

        }, false );

      } );

    };

    initButtons();


    function checkButtons( value ) {

      switch( value ){

        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
        case '+' :
        case '-' :
        case '*' :
        case '/' :
          doOperation( value );
        break;
        case 'ce' :
          clear();
        break;
        case '=' :
          doCalc();
        break;
      };

    }

     function clear(){

      $display.value = '0';
      operation = [];

     }

     function isOperator( value ){

      return operators.indexOf( value ) > -1

    }

    function getLastOperation( ) {

      return operation[ operation.length - 1 ];

    }

    function setLastOperation( value ) {

      operation[ operation.length - 1 ] = value;

    }

    function doCalc(){

      $display.value = eval(newValue);
      operation = [];

    }

    function doOperation( value ){

      if( isOperator( value ) ){

        if( isOperator( getLastOperation( ) ) ) {

          setLastOperation( value );

        }else {

          operation.push( value );

        }
      }else {

        operation.push( value );

      }

      newValue =  operation.toString().replace(/,/g , "");
      $display.value = newValue;

  }

  */

})( window , document );
